import { blogPosts } from "../blog-data";

const baseUrl = "https://affan-interactive-lab.pages.dev";

function escapeXml(value: string) {
  return value.replace(/[<>&'\"]/g, (character) => ({
    "<": "&lt;",
    ">": "&gt;",
    "&": "&amp;",
    "'": "&apos;",
    "\"": "&quot;",
  })[character] ?? character);
}

export function GET() {
  const items = blogPosts.map((post) => `
    <item>
      <title>${escapeXml(post.entry.title)}</title>
      <link>${baseUrl}/blog/${post.slug}</link>
      <guid isPermaLink="true">${baseUrl}/blog/${post.slug}</guid>
      <pubDate>${new Date(`${post.entry.date}T12:00:00Z`).toUTCString()}</pubDate>
      <description>${escapeXml(post.excerpt)}</description>
    </item>`).join("");

  return new Response(`<?xml version="1.0" encoding="UTF-8" ?>
<rss version="2.0">
  <channel>
    <title>Affan Shaikh — Learning Log</title>
    <link>${baseUrl}/blog</link>
    <description>Field notes on cybersecurity, networking, systems, and building useful software.</description>
    <language>en-ca</language>${items}
  </channel>
</rss>`, { headers: { "content-type": "application/rss+xml; charset=utf-8" } });
}
