import type { Metadata } from "next";
import CaseStudy from "../case-study";

export const metadata: Metadata = {
  title: "File Integrity Monitor | Affan Shaikh",
  description: "A dependency-free Python integrity monitor with SHA-256 baselines, deterministic JSON evidence, move inference, and measured fixture validation.",
};

const data = {
  index: "03",
  title: "File Integrity Monitor",
  label: "Security tooling · Python · Public source",
  summary:
    "I built a dependency-free command-line monitor that records a trusted SHA-256 baseline and reports added, modified, deleted, and moved files through deterministic evidence and automation-friendly exit codes.",
  facts: [
    ["Language", "Python standard library"],
    ["Integrity", "SHA-256"],
    ["Evidence", "Deterministic JSON"],
    ["Fixture set", "500 files"],
    ["Controlled changes", "45 of 45 detected"],
    ["Tests", "Seven passing"],
    ["Repository", "Public"],
  ] as Array<[string, string]>,
  links: [
    { label: "View public repository", href: "https://github.com/sil6428/file-integrity-monitor" },
  ],
  sections: [
    {
      title: "A small tool with a clear boundary",
      paragraphs: [
        "The monitor walks a chosen directory, hashes regular files, and writes a deterministic baseline that can be reviewed or stored separately. A later scan compares the current state with that trusted record.",
        "It reports four change categories and uses distinct clean, changed, and error exit states so the result can be consumed by a person or a script.",
      ],
      bullets: [
        "Added, modified, deleted, and inferred moved-file reporting",
        "Same-size content-tamper detection through hashing",
        "Exclusions and symbolic-link safety",
        "Stable JSON output for review and automation",
      ],
    },
    {
      title: "Measured fixture validation",
      paragraphs: [
        "I tested the monitor against 500 fixture files and introduced 45 controlled changes: 20 modifications, 10 deletions, 10 additions, and five moves. It detected all 45 with zero scan errors.",
        "Seven automated tests cover baseline creation, a clean scan, same-size tampering, additions, deletions, move inference, exclusions, and error behavior.",
      ],
    },
    {
      title: "Security limits stay visible",
      paragraphs: [
        "A file-integrity monitor is only as trustworthy as its baseline and execution environment. An attacker who can replace both the monitored files and the baseline can defeat the comparison, so the repository recommends protecting the baseline separately and does not describe the tool as endpoint protection.",
      ],
    },
  ],
  nextSlug: "/work/otnow",
  nextTitle: "OTNow",
};

export default function FileIntegrityMonitorCaseStudy() {
  return <CaseStudy data={data} />;
}
