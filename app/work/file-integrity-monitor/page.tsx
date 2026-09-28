import type { Metadata } from "next";
import CaseStudy from "../case-study";

export const metadata: Metadata = {
  title: "File Integrity Monitor | Affan Shaikh",
  description: "A dependency-free Python integrity application with a loopback-only browser dashboard, SHA-256 baselines, deterministic JSON evidence, move inference, and measured fixture validation.",
};

const data = {
  index: "03",
  title: "File Integrity Monitor",
  label: "Security tooling · Python · Public source",
  summary:
    "I built a dependency-free integrity application with two deliberate operating modes: Integrity Desk for visual local review and a command-line interface for automation. Both paths use the same SHA-256 baseline engine and produce deterministic evidence for added, modified, deleted, moved, and unreadable files.",
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
  links: [
    { label: "View public repository", href: "https://github.com/sil6428/file-integrity-monitor" },
  ],
  sections: [
    {
      title: "One engine, two workflows",
      paragraphs: [
        "The monitor walks a chosen directory, hashes regular files, and writes a deterministic baseline that can be reviewed or stored separately. A later scan compares the current state with that trusted record.",
        "Integrity Desk exposes that engine through a restrained local interface for choosing paths, creating a baseline, launching a scan, reading summary counts, and inspecting each evidence category. The CLI keeps distinct clean, changed, and error exit states so the same tool can still be used by scripts and scheduled jobs.",
      ],
      bullets: [
        "Added, modified, deleted, and inferred moved-file reporting",
        "Same-size content-tamper detection through hashing",
        "Exclusions and symbolic-link safety",
        "Stable JSON output for review and automation",
      ],
    },
    {
      title: "Local interface security",
      paragraphs: [
        "The dashboard binds only to a loopback address and never uploads monitored content. It serves a fixed bundled page rather than exposing the filesystem through a general web server, disables browser caching, and requires a random per-session token for baseline and scan requests.",
        "The interface does not replace the evidence format. Every visible result comes from the same saved JSON baseline or report that a reviewer can inspect independently after the dashboard closes.",
      ],
    },
    {
      title: "Measured fixture validation",
      paragraphs: [
        "I tested the monitor against 500 fixture files and introduced 45 controlled changes: 20 modifications, 10 deletions, 10 additions, and five moves. It detected all 45 with zero scan errors.",
        "Nine automated tests cover baseline creation, a clean scan, same-size tampering, additions, deletions, move inference, exclusions, dashboard evidence persistence, required-path validation, and CLI exit behavior.",
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
