import type { ReactNode } from "react";
import { slugify } from "./blog-data";

function safeHref(value: string): string | null {
  const trimmed = value.trim();
  if (/[\\\u0000-\u001f\u007f]/.test(trimmed)) return null;
  if ((trimmed.startsWith("/") && !trimmed.startsWith("//")) || trimmed.startsWith("#")) return trimmed;
  try {
    const url = new URL(trimmed);
    return url.protocol === "https:" || url.protocol === "http:" ? url.href : null;
  } catch {
    return null;
  }
}

function inlineMarkdown(value: string): ReactNode[] {
  return value
    .split(/(\*\*[^*]+\*\*|`[^`]+`|\[[^\]]+\]\([^)]+\)|<https?:\/\/[^>]+>)/g)
    .filter(Boolean)
    .map((part, index) => {
      if (part.startsWith("**") && part.endsWith("**")) return <strong key={`${part}-${index}`}>{part.slice(2, -2)}</strong>;
      if (part.startsWith("`") && part.endsWith("`")) return <code key={`${part}-${index}`}>{part.slice(1, -1)}</code>;
      const markdownLink = part.match(/^\[([^\]]+)\]\(([^)]+)\)$/);
      if (markdownLink) {
        const href = safeHref(markdownLink[2]);
        if (!href) return markdownLink[1];
        const external = href.startsWith("http");
        return <a href={href} target={external ? "_blank" : undefined} rel={external ? "noreferrer" : undefined} key={`${part}-${index}`}>{markdownLink[1]}{external && <span className="sr-only"> (opens in a new tab)</span>}</a>;
      }
      if (part.startsWith("<http") && part.endsWith(">")) {
        const href = part.slice(1, -1);
        return <a href={href} target="_blank" rel="noreferrer" key={`${part}-${index}`}>{href}<span className="sr-only"> (opens in a new tab)</span></a>;
      }
      return part;
    });
}

export default function BlogMarkdown({ body }: { body: string }) {
  const blocks: ReactNode[] = [];
  const lines = body.split("\n");
  let index = 0;

  while (index < lines.length) {
    const line = lines[index].trim();
    if (!line) {
      index += 1;
      continue;
    }

    if (line.startsWith("```")) {
      const language = line.slice(3).trim();
      const code: string[] = [];
      index += 1;
      while (index < lines.length && !lines[index].trim().startsWith("```")) {
        code.push(lines[index]);
        index += 1;
      }
      index += 1;
      blocks.push(<pre key={`code-${index}`} data-language={language || undefined}><code>{code.join("\n")}</code></pre>);
      continue;
    }

    if (line.startsWith("### ")) {
      blocks.push(<h3 key={`h3-${index}`}>{inlineMarkdown(line.slice(4))}</h3>);
      index += 1;
      continue;
    }

    if (line.startsWith("## ")) {
      const heading = line.slice(3);
      blocks.push(<h2 id={slugify(heading)} key={`h2-${index}`}>{inlineMarkdown(heading)}</h2>);
      index += 1;
      continue;
    }

    if (/^- (?:\[[ xX]\]\s+)?/.test(line)) {
      const items: Array<{ checked?: boolean; content: string }> = [];
      while (index < lines.length) {
        const item = lines[index].trim().match(/^- (?:\[([ xX])\]\s+)?(.*)$/);
        if (!item) break;
        items.push({ checked: item[1] ? item[1].toLowerCase() === "x" : undefined, content: item[2] });
        index += 1;
      }
      blocks.push(
        <ul className={items.some((item) => item.checked !== undefined) ? "blog-checklist" : undefined} key={`list-${index}`}>
          {items.map((item, itemIndex) => (
            <li key={`${item.content}-${itemIndex}`}>
              {item.checked !== undefined && <span aria-hidden="true">{item.checked ? "✓" : "○"}</span>}
              <span>{inlineMarkdown(item.content)}</span>
            </li>
          ))}
        </ul>,
      );
      continue;
    }

    const paragraph = [line];
    index += 1;
    while (index < lines.length) {
      const next = lines[index].trim();
      if (!next || next.startsWith("## ") || next.startsWith("### ") || next.startsWith("- ") || next.startsWith("```")) break;
      paragraph.push(next);
      index += 1;
    }
    blocks.push(<p key={`paragraph-${index}`}>{inlineMarkdown(paragraph.join(" "))}</p>);
  }

  return <div className="blog-markdown">{blocks}</div>;
}
