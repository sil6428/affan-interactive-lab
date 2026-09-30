import type { Metadata } from "next";
import { journalSections, projectJournalBodies } from "../../project-journal-data";
import CaseStudy from "../case-study";

export const metadata: Metadata = {
  title: "Secure File Transfer | Affan Shaikh",
  description: "A private-source Python file-transfer application with a local browser workspace, authenticated TLS, recipient isolation, resumable transfers, SHA-256 verification, and 16 automated tests.",
};

const data = {
  index: "06",
  title: "Secure File Transfer",
  label: "Security application · Private source · Completed prototype",
  summary: "I built an authenticated file-transfer application with a loopback-only browser workspace and a command-line workflow. A user can create local certificates and accounts, run the server, choose a file, review a recipient inbox, and complete a verified download without bypassing the service's TLS, isolation, resume, or integrity controls.",
  facts: [
    ["Status", "Completed prototype"],
    ["Source", "Private"],
    ["Language", "Python"],
    ["Transport", "Authenticated TLS"],
    ["Interface", "Transfer Desk browser workspace + CLI"],
    ["Integrity", "SHA-256"],
    ["Verification", "16 automated tests"],
    ["Measured transfer", "13,632,512 bytes"],
  ] as Array<[string, string]>,
  links: [],
  sections: journalSections(projectJournalBodies.secureFileTransfer),
  nextSlug: "/work/cisco-networking-labs",
  nextTitle: "Cisco Networking Labs",
};

export default function SecureFileTransferCaseStudy() {
  return <CaseStudy data={data} />;
}
