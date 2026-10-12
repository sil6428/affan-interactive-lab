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
  summary: "As Head of Internal Technical Operations, I build and manage systems for Arch Narrative's 350+ volunteers, including 38 people serving in internal roles. The work combines Google Workspace administration, access ownership, internal tooling, repositories, deployment workflows, technical communication, and operational continuity.",
  facts: [
    ["Role", "Head of Internal Technical Operations"],
    ["Organization", "350+ volunteers"],
    ["Internal roles", "38 people"],
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
