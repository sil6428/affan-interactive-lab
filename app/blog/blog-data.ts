import { learningLogEntries, type LearningLogEntry } from "../learning-log-data.generated";

const topicRules: Array<[RegExp, string]> = [
  [/\b(cisco|network|routing|switching|vlan|wireshark|ipv[46])\b/i, "networking"],
  [/\b(security|cyber|tls|integrity|threat|hardening|privacy|incident)\b/i, "security"],
  [/\b(otnow|canvas|extension|browser)\b/i, "product"],
  [/\b(portfolio|react|typescript|three\.js|website|cloudflare|interface)\b/i, "build log"],
  [/\b(homelab|proxmox|server|linux|workspace|infrastructure)\b/i, "systems"],
  [/\b(resume|career|co-op|interview|conference)\b/i, "career"],
];

export function slugify(value: string) {
  return value
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

export function entrySlug(entry: LearningLogEntry) {
  return `${entry.date}-${slugify(entry.title)}`;
}

function plainText(value: string) {
  return value
    .replace(/```[\s\S]*?```/g, " ")
    .replace(/\[([^\]]+)\]\([^)]+\)/g, "$1")
    .replace(/<https?:\/\/[^>]+>/g, " ")
    .replace(/[*_`>#\[\]-]/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function excerptFor(entry: LearningLogEntry) {
  const section = entry.body.split(/\n## /).find((part) => part.startsWith("What I learned"));
  const candidate = section?.split("\n").find((line) => line.trim().startsWith("- "))?.replace(/^\s*-\s*/, "")
    ?? entry.body.split("\n").find((line) => line.trim().startsWith("- "))?.replace(/^\s*-\s*/, "")
    ?? entry.body;
  const words = plainText(candidate).split(" ").filter(Boolean);
  return `${words.slice(0, 34).join(" ")}${words.length > 34 ? "…" : ""}`;
}

function topicsFor(entry: LearningLogEntry) {
  const haystack = `${entry.title}\n${entry.body}`;
  const matches = topicRules.filter(([pattern]) => pattern.test(haystack)).map(([, topic]) => topic);
  return matches.length ? matches.slice(0, 3) : ["field notes"];
}

function readingMinutes(body: string) {
  return Math.max(1, Math.ceil(plainText(body).split(" ").filter(Boolean).length / 220));
}

export function headingsFor(body: string) {
  return body
    .split("\n")
    .filter((line) => line.startsWith("## "))
    .map((line) => line.slice(3).trim());
}

export const blogPosts = learningLogEntries.map((entry) => ({
  entry,
  slug: entrySlug(entry),
  excerpt: excerptFor(entry),
  topics: topicsFor(entry),
  readingMinutes: readingMinutes(entry.body),
  headings: headingsFor(entry.body),
}));

export type BlogPost = (typeof blogPosts)[number];

export function findBlogPost(slug: string) {
  return blogPosts.find((post) => post.slug === slug);
}
