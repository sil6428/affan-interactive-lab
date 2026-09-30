import type { Metadata } from "next";
import { journalSections, projectJournalBodies } from "../../project-journal-data";
import CaseStudy from "../case-study";

export const metadata: Metadata = {
  title: "File Integrity Monitor | Affan Shaikh",
  description: "A dependency-free Python integrity application with a loopback-only browser dashboard, SHA-256 baselines, deterministic JSON evidence, move inference, and measured fixture validation.",
};

const data = {
  index: "03",
  title: "File Integrity Monitor",
  label: "Security tooling · Python · Public source",
  summary: "I built a dependency-free integrity application with two deliberate operating modes: Integrity Desk for visual local review and a command-line interface for automation. Both paths use the same SHA-256 baseline engine and produce deterministic evidence for added, modified, deleted, moved, and unreadable files.",
  facts: [
    ["Language", "Python standard library"],
    ["Integrity", "SHA-256"],
    ["Interface", "Loopback-only browser dashboard + CLI"],
    ["Evidence", "Deterministic JSON"],
    ["Fixture set", "500 files"],
    ["Controlled changes", "45 of 45 detected"],
    ["Tests", "Nine passing"],
    ["Repository", "Public"],
  ] as Array<[string, string]>,
  links: [{ label: "View public repository", href: "https://github.com/sil6428/file-integrity-monitor" }],
  sections: journalSections(projectJournalBodies.fileIntegrityMonitor),
  nextSlug: "/work/otnow",
  nextTitle: "OTNow",
};

export default function FileIntegrityMonitorCaseStudy() {
  return <CaseStudy data={data} />;
}
