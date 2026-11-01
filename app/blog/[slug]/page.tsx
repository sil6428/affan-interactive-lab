import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { blogPosts, findBlogPost, slugify } from "../blog-data";
import BlogMarkdown from "../markdown";
import { BlogReveal, ReadingProgress } from "../blog-motion";

type PageProps = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const post = findBlogPost((await params).slug);
  if (!post) return {};
  return {
    title: `${post.entry.title} | Learning Log`,
    description: post.excerpt,
    alternates: { canonical: `/blog/${post.slug}` },
    openGraph: {
      title: post.entry.title,
      description: post.excerpt,
      type: "article",
      url: `/blog/${post.slug}`,
      publishedTime: post.entry.date,
      tags: [...post.topics],
    },
  };
}

export default async function BlogPostPage({ params }: PageProps) {
  const post = findBlogPost((await params).slug);
  if (!post) notFound();
  const index = blogPosts.findIndex((candidate) => candidate.slug === post.slug);
  const newer = index > 0 ? blogPosts[index - 1] : null;
  const older = index < blogPosts.length - 1 ? blogPosts[index + 1] : null;

  return (
    <main className="blog-page blog-post-page">
      <ReadingProgress />
      <div className="blog-grid" aria-hidden="true" />
      <header className="blog-header">
        <Link className="blog-wordmark" href="/blog"><span>~/</span>learning-log</Link>
        <nav aria-label="Blog navigation"><Link href="/blog">all notes</Link><Link href="/">lab</Link><a href="/blog/feed.xml">rss</a></nav>
      </header>

      <article className="blog-article">
        <BlogReveal className="blog-article-header">
          <Link className="blog-back" href="/blog">← all notes</Link>
          <div className="blog-card-meta">
            <time dateTime={post.entry.date}>{post.entry.date.replaceAll("-", ".")}</time>
            <span>{post.readingMinutes} min read</span>
          </div>
          <h1>{post.entry.title}</h1>
          <p>{post.excerpt}</p>
          <ul aria-label="Topics">{post.topics.map((topic) => <li key={topic}>{topic}</li>)}</ul>
        </BlogReveal>

        <div className="blog-article-layout">
          <aside className="blog-toc" aria-label="On this page">
            <p>on this page</p>
            <ol>
              {post.headings.map((heading) => <li key={heading}><a href={`#${slugify(heading)}`}>{heading}</a></li>)}
            </ol>
          </aside>
          <BlogReveal className="blog-article-body" delay={0.06}>
            <BlogMarkdown body={post.entry.body} />
          </BlogReveal>
        </div>
      </article>

      <nav className="blog-post-nav" aria-label="Learning log navigation">
        {newer ? <Link href={`/blog/${newer.slug}`}><span>newer</span>{newer.entry.title}</Link> : <span />}
        {older ? <Link href={`/blog/${older.slug}`}><span>older</span>{older.entry.title}</Link> : <span />}
      </nav>

      <footer className="blog-footer"><p>Affan Shaikh · Learning Log</p><Link href="/blog">back to archive</Link></footer>
    </main>
  );
}
