"use client";

import { useEffect, useMemo, useState, type CSSProperties, type ReactNode } from "react";
import { motion, stagger, useReducedMotion } from "motion/react";
import Link from "next/link";

const glyphs = "01<>/{}[]$#*+";

export function DecryptedHeading({ text }: { text: string }) {
  const reducedMotion = useReducedMotion();
  const [frame, setFrame] = useState(text);

  useEffect(() => {
    if (reducedMotion) {
      return;
    }

    let iteration = 0;
    const timer = window.setInterval(() => {
      setFrame(
        text
          .split("")
          .map((character, index) => {
            if (character === " " || index < iteration) return character;
            return glyphs[(index * 7 + Math.floor(iteration)) % glyphs.length];
          })
          .join(""),
      );
      iteration += 0.7;
      if (iteration >= text.length) {
        window.clearInterval(timer);
        setFrame(text);
      }
    }, 36);

    return () => window.clearInterval(timer);
  }, [reducedMotion, text]);

  return <span aria-label={text}>{frame}</span>;
}

export function BlogReveal({ children, delay = 0, className = "" }: { children: ReactNode; delay?: number; className?: string }) {
  const reducedMotion = useReducedMotion();
  return (
    <motion.div
      className={className}
      initial={reducedMotion ? false : { opacity: 0, y: 18 }}
      whileInView={reducedMotion ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.16 }}
      transition={{ duration: 0.55, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}

type CardPost = {
  slug: string;
  date: string;
  title: string;
  excerpt: string;
  topics: readonly string[];
  readingMinutes: number;
};

export function AnimatedPostList({ posts }: { posts: readonly CardPost[] }) {
  const reducedMotion = useReducedMotion();
  const listAnimation = useMemo(() => ({
    hidden: {},
    visible: {
      transition: reducedMotion ? {} : { delayChildren: stagger(0.055) },
    },
  }), [reducedMotion]);

  return (
    <motion.div
      className="blog-list"
      variants={listAnimation}
      initial={reducedMotion ? false : "hidden"}
      whileInView={reducedMotion ? undefined : "visible"}
      viewport={{ once: true, amount: 0.04 }}
    >
      {posts.map((post, index) => (
        <motion.article
          className="blog-list-card"
          key={post.slug}
          variants={{
            hidden: { opacity: 0, y: 14 },
            visible: { opacity: 1, y: 0, transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] } },
          }}
          whileHover={reducedMotion ? undefined : { y: -2 }}
          onPointerMove={(event) => {
            const bounds = event.currentTarget.getBoundingClientRect();
            event.currentTarget.style.setProperty("--spot-x", `${event.clientX - bounds.left}px`);
            event.currentTarget.style.setProperty("--spot-y", `${event.clientY - bounds.top}px`);
          }}
        >
          <Link href={`/blog/${post.slug}`} aria-label={`Read ${post.title}`}>
            <div className="blog-card-index" aria-hidden="true">{String(index + 2).padStart(2, "0")}</div>
            <div className="blog-card-copy">
              <div className="blog-card-meta">
                <time dateTime={post.date}>{post.date.replaceAll("-", ".")}</time>
                <span>{post.readingMinutes} min</span>
              </div>
              <h2>{post.title}</h2>
              <p>{post.excerpt}</p>
              <ul aria-label="Topics">
                {post.topics.map((topic) => <li key={topic}>{topic}</li>)}
              </ul>
            </div>
            <span className="blog-card-arrow" aria-hidden="true">↗</span>
          </Link>
        </motion.article>
      ))}
    </motion.div>
  );
}

export function ReadingProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const update = () => {
      const available = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(available <= 0 ? 1 : Math.min(1, window.scrollY / available));
    };
    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, []);

  return (
    <span
      className="blog-reading-progress"
      aria-hidden="true"
      style={{ "--reading-progress": progress } as CSSProperties}
    />
  );
}
