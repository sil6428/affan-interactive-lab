import type { Metadata } from "next";
import CaseStudy from "../case-study";

export const metadata: Metadata = {
  title: "OTNow Canvas Companion | Affan Shaikh",
  description: "A local-first Chrome extension for Ontario Tech Canvas deadlines, reminders, course links, moved dates, and offline access.",
};

const data = {
  index: "04",
  title: "OTNow",
  label: "Chrome extension · Student productivity · Local-first",
  summary:
    "I built an unofficial Chrome extension that gives Ontario Tech Canvas users a persistent deadline panel, moved-date detection, local reminders, and direct course navigation without asking for a Canvas password or sending course data to a separate server.",
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
  sections: [
    {
      title: "A calmer view of Canvas",
      paragraphs: [
        "OTNow reads active courses and dated planner items from the student's existing Ontario Tech Canvas session. It groups assignments, quizzes, discussions, events, planner notes, and other dated work by course, type, or due-date range.",
      ],
      bullets: [
        "Persistent side panel beside Canvas",
        "Course and item-type filters",
        "Direct links to modules, assignments, quizzes, discussions, files, and grades",
        "Submitted, graded, and locally completed states",
        "Light, dark, and system appearance",
      ],
    },
    {
      title: "Designed to feel native to Canvas",
      paragraphs: [
        "The interface uses Ontario Tech's Canvas palette, compact typography, thin dividers, and the same information density as the surrounding dashboard instead of presenting a separate card-heavy application. Course, type, and grouping controls stay visible above a deadline list that can be scanned quickly without leaving the current Canvas page.",
        "The companion also exposes direct course-content shortcuts without trying to replace Canvas itself. This keeps the product focused on planning, change awareness, and navigation rather than duplicating the learning-management system.",
      ],
    },
    {
      title: "Deadline changes and reminders",
      paragraphs: [
        "The extension reconciles new planner data with its last successful read. When Canvas moves a due date, OTNow preserves the earlier value, highlights the change for seven days, and can notify the student.",
        "Reminder timing can be configured by item type or muted for an individual course. The last successful read remains available when Canvas or the network is temporarily unavailable.",
      ],
    },
    {
      title: "Privacy by architecture",
      paragraphs: [
        "OTNow never asks for or stores a Canvas password. Its same-origin bridge allows only the course and planner read endpoints, and course data, settings, check-offs, and reminder history stay in local Chrome storage.",
        "There is no OTNow account, telemetry, analytics SDK, ad code, or separate course-data server. GitHub-installed builds can check the public repository manifest for an update; the prepared Chrome Web Store build disables that request because the store supplies updates itself.",
      ],
    },
    {
      title: "Release evidence and limits",
      paragraphs: [
        "Twelve unit tests cover Canvas item normalization, due-date selection and movement, submitted-state precedence, grouping, pagination-link validation, theme migration, and update-manifest validation. The release package also passes a required-file check.",
        "I validated installation, the Ontario Tech session bridge, the first data refresh, and side-panel rendering against the live Canvas environment. Broader release testing with consenting students and Chrome Web Store review remain external next steps, so the project does not claim a public store listing yet.",
      ],
    },
  ],
  nextSlug: "/work/p2p-messaging",
  nextTitle: "P2P Messaging",
};

export default function OTNowCaseStudy() {
  return <CaseStudy data={data} />;
}
