import type { Metadata } from "next";
import { journalSections, projectJournalBodies } from "../../project-journal-data";
import CaseStudy from "../case-study";

export const metadata: Metadata = {
  title: "OTNow Canvas Companion | Affan Shaikh",
  description: "A local-first Chrome extension for Ontario Tech Canvas deadlines, reminders, course links, moved dates, and offline access.",
};

const data = {
  index: "04",
  title: "OTNow",
  label: "Chrome extension · Student productivity · Local-first",
  summary: "I built an unofficial Chrome extension that gives Ontario Tech Canvas users a persistent deadline panel, moved-date detection, local reminders, and direct course navigation without asking for a Canvas password or sending course data to a separate server.",
  facts: [
    ["Platform", "Chrome Manifest V3"],
    ["Data source", "Two read-only Canvas endpoints"],
    ["Storage", "Local Chrome storage"],
    ["Telemetry", "None"],
    ["Verification", "12 unit tests + package check"],
    ["Live validation", "Ontario Tech Canvas · Sep. 24, 2026"],
    ["Distribution", "GitHub release · store package prepared"],
  ] as Array<[string, string]>,
  links: [
    { label: "View public repository", href: "https://github.com/sil6428/OTNow" },
    { label: "Download latest GitHub release", href: "https://github.com/sil6428/OTNow/releases/latest" },
  ],
  sections: journalSections(projectJournalBodies.otnow),
  nextSlug: "/work/p2p-messaging",
  nextTitle: "P2P Messaging",
};

export default function OTNowCaseStudy() {
  return <CaseStudy data={data} />;
}
