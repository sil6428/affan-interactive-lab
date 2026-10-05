import type { Metadata } from "next";
import { journalSections, projectJournalBodies } from "../../project-journal-data";
import CaseStudy from "../case-study";

export const metadata: Metadata = {
  title: "Interactive Portfolio Build | Affan Shaikh",
  description: "How Affan Shaikh's Three.js room, AFFAN_OS interface, long-form project journals, adaptive rendering, accessibility paths, and Cloudflare Pages deployment are built and maintained.",
};

const data = {
  index: "08",
  title: "Interactive Portfolio",
  label: "Three.js · React · Next.js · Cloudflare Pages",
  summary: "This portfolio is both a presentation layer and a documented software project. It combines an interactive Three.js room, the AFFAN_OS file environment, long-form project and interest pages, a searchable object index, responsive non-3D navigation, adaptive rendering, structured metadata, and deployment checks so the visual idea does not replace usability or evidence.",
  facts: [
    ["Framework", "Next.js 16 + React 19"],
    ["Rendering", "Three.js 0.185"],
    ["Build", "Vinext + Vite"],
    ["Hosting", "Cloudflare Pages"],
    ["Interfaces", "3D room + AFFAN_OS + standard pages"],
    ["Delivery", "Cloudflare Pages + permanent legacy redirects"],
    ["Accessibility", "Object index, semantic pages, reduced-motion handling"],
    ["Repository", "Public"],
  ] as Array<[string, string]>,
  links: [
    { label: "View public repository", href: "https://github.com/sil6428/affan-interactive-lab" },
    { label: "Open main portfolio", href: "https://affan-shaikh.pages.dev" },
  ],
  sections: journalSections(projectJournalBodies.portfolio),
  nextSlug: "/work/archtech",
  nextTitle: "Archtech Nonprofit Technology Operations",
};

export default function PortfolioCaseStudy() {
  return <CaseStudy data={data} />;
}
