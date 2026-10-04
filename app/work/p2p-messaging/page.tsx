import type { Metadata } from "next";
import { journalSections, projectJournalBodies } from "../../project-journal-data";
import CaseStudy from "../case-study";

export const metadata: Metadata = {
  title: "P2P Messaging | Affan Shaikh",
  description: "A collaborative Python messaging prototype with a local browser interface, verified peer identities, authenticated encryption, persistent replay protection, and explicit protocol limits.",
};

const data = {
  index: "05",
  title: "P2P Messaging",
  label: "Secure communications · Collaborative work in progress",
  summary: "Ghayas Sher and I are building an educational Python prototype for direct communication between explicitly verified peers. Its local browser workspace combines identity protection, authenticated encryption, separate conversations, encrypted history, and defensive protocol limits without presenting an unaudited system as production ready.",
  facts: [
    ["Status", "Public work in progress"],
    ["Collaboration", "Affan Shaikh and Ghayas Sher"],
    ["Language", "Python 3.11+"],
    ["Identity", "Ed25519 and X25519"],
    ["Encryption", "ChaCha20-Poly1305"],
    ["Interface", "Local FastAPI browser workspace"],
    ["Protocol limits", "64 KiB frames · 4 KiB plaintext"],
    ["Transport", "Direct TCP"],
  ] as Array<[string, string]>,
  links: [{ label: "View public repository", href: "https://github.com/sil6428/P2P-messaging" }],
  sections: journalSections(projectJournalBodies.secureMessaging),
  nextSlug: "/work/secure-file-transfer",
  nextTitle: "Secure File Transfer",
};

export default function P2PMessagingCaseStudy() {
  return <CaseStudy data={data} />;
}
