import type { Metadata } from "next";
import { journalSections, projectJournalBodies } from "../../project-journal-data";
import CaseStudy from "../case-study";

export const metadata: Metadata = {
  title: "Arch Narrative Internal Technical Operations | Affan Shaikh",
  description: "Google Workspace, access, internal systems, repositories, and deployment workflows supporting a developing nonprofit.",
};

const data = {
  index: "01",
  title: "Arch Narrative Internal Technical Operations",
  label: "Nonprofit infrastructure · Active",
  summary: "As Head of Internal Technical Operations, I build and manage systems for Arch Narrative's 280 volunteers and 116 students across 66 active mentor-student pairs (organizational snapshot verified October 31, 2026). The work combines Google Workspace administration, access ownership, internal tooling, repositories, deployment workflows, technical communication, and operational continuity.",
  facts: [
    ["Role", "Head of Internal Technical Operations"],
    ["Volunteers", "280 · verified Oct. 31, 2026"],
    ["Students", "116"],
    ["Active mentor-student pairs", "66"],
    ["Status", "Active, private development"],
    ["Scope", "Workspace, access, tools, repositories, deployment"],
    ["Repository", "Private"],
    ["Focus", "Collaboration, hosting, reliable releases"],
  ] as Array<[string, string]>,
  links: [],
  sections: journalSections(projectJournalBodies.archtech),
  nextSlug: "/work/ssik",
  nextTitle: "SSIK IT Consulting & Solutions",
};

export default function ArchtechCaseStudy() {
  return <CaseStudy data={data} />;
}
