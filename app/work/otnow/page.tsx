import type { Metadata } from "next";
import { journalSections, projectJournalBodies } from "../../project-journal-data";
import LiveOTNowCaseStudy from "./live-case-study";

export const metadata: Metadata = {
  title: "OTNow Canvas Companion | Affan Shaikh",
  description: "A local-first browser extension for Chrome and Firefox for Ontario Tech Canvas deadlines, reminders, course links, moved dates, and offline access.",
};

const data = {
  index: "04",
  title: "OTNow",
  label: "Chrome + Firefox · Student productivity · Local-first",
  summary: "I built an unofficial cross-browser extension that gives Ontario Tech Canvas users a persistent deadline panel, moved-date detection, local reminders, and direct course navigation without asking for a Canvas password or sending course data to a separate server.",
  facts: [
    ["Platform", "Chrome MV3 · Firefox WebExtensions"],
    ["Data source", "Two read-only Canvas endpoints"],
    ["Storage", "Local browser-profile storage"],
    ["Optional statistics", "Explicit opt-in · numerical totals only"],
    ["Product outcome", "1,351 Canvas items · 15 consenting reporting installations · verified Nov. 4, 2026"],
    ["Validation", "Live Canvas + GitHub and store packages"],
    ["Live validation", "Ontario Tech Canvas · Sep. 24, 2026"],
    ["Distribution", "Chrome Web Store · Firefox Add-ons · GitHub release"],
  ] as Array<[string, string]>,
  links: [
    { label: "Install from the Chrome Web Store", href: "https://chromewebstore.google.com/detail/otnow/ekaachncjiajgiikgikhpafcnepompkn" },
    { label: "Install from Firefox Add-ons", href: "https://addons.mozilla.org/en-US/firefox/addon/otnow/" },
    { label: "View public repository", href: "https://github.com/sil6428/OTNow" },
    { label: "Download latest GitHub release", href: "https://github.com/sil6428/OTNow/releases/latest" },
    { label: "View anonymous public statistics", href: "https://otnow-stats.sil6428-archtech.workers.dev/dashboard" },
    { label: "Read the privacy policy", href: "https://otnow-stats.sil6428-archtech.workers.dev/privacy" },
  ],
  sections: journalSections(projectJournalBodies.otnow),
  nextSlug: "/work/p2p-messaging",
  nextTitle: "P2P Messaging",
};

export default function OTNowCaseStudy() {
  return <LiveOTNowCaseStudy data={data} />;
}
