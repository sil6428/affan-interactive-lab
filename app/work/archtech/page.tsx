import type { Metadata } from "next";
import { journalSections, projectJournalBodies } from "../../project-journal-data";
import CaseStudy from "../case-study";

export const metadata: Metadata = {
  title: "Archtech Nonprofit Technology Operations | Affan Shaikh",
  description: "Google Workspace setup, team coordination, and website hosting for a developing nonprofit.",
};

const data = {
  index: "01",
  title: "Archtech Nonprofit Technology Operations",
  label: "Nonprofit infrastructure · Active",
  summary: "I set up the collaboration foundation for a developing nonprofit, coordinate the contributors building its website, and own the hosting and deployment path that turns private team work into a stable release. The work combines account administration, access ownership, technical communication, release coordination, and hands-on implementation support.",
  facts: [
    ["Role", "Google Workspace and web hosting"],
    ["Status", "Active, private development"],
    ["Team", "Website team coordination"],
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
