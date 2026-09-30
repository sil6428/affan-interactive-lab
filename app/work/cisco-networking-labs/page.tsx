import type { Metadata } from "next";
import { journalSections, projectJournalBodies } from "../../project-journal-data";
import CaseStudy from "../case-study";

export const metadata: Metadata = {
  title: "Cisco Networking Labs | Affan Shaikh",
  description: "A detailed record of Cisco routing, switching, network-service, verification, and troubleshooting labs completed through Ontario Tech's Networking and IT Security program.",
};

const data = {
  index: "07",
  title: "Cisco Networking Labs",
  label: "Applied infrastructure · Cisco IOS · Coursework",
  summary: "My Cisco labs are the closest repeated simulation of real network operations in my current experience. Each exercise turns requirements into an address plan and topology, coordinates configuration across multiple devices, verifies the resulting state, introduces or reveals faults, and requires evidence that the final network works for the intended reason.",
  facts: [
    ["Environment", "Cisco IOS and Packet Tracer"],
    ["Addressing", "IPv4 and IPv6"],
    ["Switching", "VLANs, trunks, STP"],
    ["Routing", "Static, inter-VLAN, OSPF, EIGRP"],
    ["Services", "DHCP, DNS, NAT"],
    ["Evidence", "Show commands, pings, traces, packet captures"],
    ["Status", "Ongoing university lab record"],
  ] as Array<[string, string]>,
  links: [],
  sections: journalSections(projectJournalBodies.ciscoNetworkingLabs),
  nextSlug: "/work/portfolio",
  nextTitle: "Interactive Portfolio",
};

export default function CiscoNetworkingLabsCaseStudy() {
  return <CaseStudy data={data} />;
}
