import type { MetadataRoute } from "next";
import { blogPosts } from "./blog/blog-data";

const baseUrl = "https://affan-interactive-lab.pages.dev";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: baseUrl, changeFrequency: "monthly", priority: 1 },
    { url: `${baseUrl}/info`, changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/blog`, changeFrequency: "weekly", priority: 0.8 },
    ...blogPosts.map((post) => ({ url: `${baseUrl}/blog/${post.slug}`, lastModified: post.entry.date, changeFrequency: "monthly" as const, priority: 0.6 })),
    { url: `${baseUrl}/interests`, changeFrequency: "monthly", priority: 0.7 },
    { url: `${baseUrl}/interests/badminton`, changeFrequency: "monthly", priority: 0.6 },
    { url: `${baseUrl}/interests/3d-printing`, changeFrequency: "monthly", priority: 0.6 },
    { url: `${baseUrl}/interests/reading`, changeFrequency: "monthly", priority: 0.6 },
    { url: `${baseUrl}/interests/photography`, changeFrequency: "monthly", priority: 0.6 },
    { url: `${baseUrl}/interests/home-lab`, changeFrequency: "monthly", priority: 0.6 },
    { url: `${baseUrl}/work/archtech`, changeFrequency: "monthly", priority: 0.9 },
    { url: `${baseUrl}/work/ssik`, changeFrequency: "monthly", priority: 0.9 },
    { url: `${baseUrl}/work/file-integrity-monitor`, changeFrequency: "monthly", priority: 0.9 },
    { url: `${baseUrl}/work/otnow`, changeFrequency: "monthly", priority: 0.9 },
    { url: `${baseUrl}/work/p2p-messaging`, changeFrequency: "monthly", priority: 0.9 },
    { url: `${baseUrl}/work/secure-file-transfer`, changeFrequency: "monthly", priority: 0.9 },
    { url: `${baseUrl}/work/cisco-networking-labs`, changeFrequency: "monthly", priority: 0.9 },
    { url: `${baseUrl}/work/portfolio`, changeFrequency: "monthly", priority: 0.8 },
  ];
}
