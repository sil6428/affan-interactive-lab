import type { Metadata } from "next";
import Link from "next/link";
import { AnimatedPostList, BlogReveal, DecryptedHeading } from "./blog-motion";
import { blogPosts } from "./blog-data";

export const metadata: Metadata = {
  title: "Learning Log | Affan Shaikh",
  description: "Notes from Affan Shaikh's cybersecurity, networking, systems, and software projects.",
  alternates: { canonical: "/blog" },
  openGraph: {
    title: "Learning Log | Affan Shaikh",
    description: "Field notes on cybersecurity, networking, systems, and building useful software.",
    type: "website",
    url: "/blog",
  },
};

function BlogHeader() {
  return (
    <header className="blog-header">
      <Link className="blog-wordmark" href="/blog"><span>~/</span>learning-log</Link>
      <nav aria-label="Blog navigation">
        <Link href="/">lab</Link>
        <Link href="/info">about</Link>
        <a href="/blog/feed.xml">rss</a>
        <a href="https://github.com/sil6428/learning-log" target="_blank" rel="noreferrer">source ↗</a>
      </nav>
    </header>
  );
}

export default function BlogIndex() {
  const [latest, ...archive] = blogPosts;

  return (
    <main className="blog-page">
      <div className="blog-grid" aria-hidden="true" />
      <BlogHeader />

      <section className="blog-hero" aria-labelledby="blog-title">
        <BlogReveal>
          <p className="blog-kicker"><span /> public notes / verified work / unfinished thinking</p>
          <h1 id="blog-title"><DecryptedHeading text="Learning in public." /></h1>
        </BlogReveal>
        <BlogReveal className="blog-hero-note" delay={0.08}>
          <p>
            Short, honest notes about what I built, what broke, how I checked it, and what I would do differently next time.
          </p>
          <span>{blogPosts.length} entries · updated {latest.entry.date}</span>
        </BlogReveal>
      </section>

      <BlogReveal className="blog-featured" delay={0.12}>
        <Link href={`/blog/${latest.slug}`}>
          <div className="blog-featured-index">01</div>
          <div className="blog-featured-copy">
            <div className="blog-card-meta">
              <time dateTime={latest.entry.date}>{latest.entry.date.replaceAll("-", ".")}</time>
              <span>latest note</span>
              <span>{latest.readingMinutes} min</span>
            </div>
            <h2>{latest.entry.title}</h2>
            <p>{latest.excerpt}</p>
            <ul aria-label="Topics">
              {latest.topics.map((topic) => <li key={topic}>{topic}</li>)}
            </ul>
          </div>
          <span className="blog-featured-arrow" aria-hidden="true">read ↗</span>
        </Link>
      </BlogReveal>

      <section className="blog-archive" aria-labelledby="archive-title">
        <div className="blog-section-heading">
          <p id="archive-title">archive</p>
          <span>{archive.length} more entries</span>
        </div>
        <AnimatedPostList posts={archive.map((post) => ({
          slug: post.slug,
          date: post.entry.date,
          title: post.entry.title,
          excerpt: post.excerpt,
          topics: post.topics,
          readingMinutes: post.readingMinutes,
        }))} />
      </section>

      <footer className="blog-footer">
        <p>Affan Shaikh · Oshawa, Ontario</p>
        <nav aria-label="Footer navigation"><Link href="/">interactive lab</Link><Link href="/info">about</Link><a href="mailto:ffaanshake@gmail.com">email</a></nav>
      </footer>
    </main>
  );
}
