import type { Metadata } from "next";
import { journalSections, projectJournalBodies } from "../../project-journal-data";
import CaseStudy from "../case-study";

export const metadata: Metadata = {
  title: "SSIK IT Consulting & Solutions | Affan Shaikh",
  description: "Co-founding SSIK, building its public website, and developing its private internal intelligence platform.",
};

const data = {
  index: "02",
  title: "SSIK IT Consulting & Solutions",
  label: "IT consulting · Co-founder · Platform builder",
  summary: "I co-founded SSIK with Ghayas Sher, an Ontario Tech classmate. We share the consulting, security, privacy, and stakeholder responsibilities. I additionally built the public website and a private internal platform for controlled research and review.",
  facts: [
    ["Role", "Co-founder and platform builder"],
    ["Started", "May 2026"],
    ["Co-founder", "Ghayas Sher, Ontario Tech classmate"],
    ["Website", "Nine public pages"],
    ["Internal platform", "12-stage local V1"],
    ["Delivered workflow", "12 local research and review stages"],
    ["Hosting", "GitHub Pages"],
  ] as Array<[string, string]>,
  links: [
    { label: "Visit SSIK website", href: "https://sil6428.github.io/SSIK-website/index.html" },
    { label: "View website source", href: "https://github.com/sil6428/SSIK-website" },
  ],
  sections: journalSections(projectJournalBodies.ssik),
  nextSlug: "/work/file-integrity-monitor",
  nextTitle: "File Integrity Monitor",
};

export default function SsikCaseStudy() {
  return <CaseStudy data={data} />;
}
