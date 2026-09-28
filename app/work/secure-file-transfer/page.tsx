import type { Metadata } from "next";
import CaseStudy from "../case-study";

export const metadata: Metadata = {
  title: "Secure File Transfer | Affan Shaikh",
  description: "A private-source Python file-transfer application with a local browser workspace, authenticated TLS, recipient isolation, resumable transfers, SHA-256 verification, and 16 automated tests.",
};

const data = {
  index: "06",
  title: "Secure File Transfer",
  label: "Security application · Private source · Completed prototype",
  summary:
    "I built an authenticated file-transfer application with a loopback-only browser workspace and a command-line workflow. A user can create local certificates and accounts, run the server, choose a file, review a recipient inbox, and complete a verified download without bypassing the service's TLS, isolation, resume, or integrity controls.",
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
  sections: [
    {
      title: "Transfer Desk workflow",
      paragraphs: [
        "Transfer Desk brings the existing service into one restrained local workspace. Its setup view generates a development certificate, creates scrypt-backed accounts, starts or stops the protocol server, and shows the active address. Its transfer view accepts connection details, uses a native file picker, lists only the authenticated recipient's files, and writes verified downloads to a chosen folder.",
        "The dashboard binds to 127.0.0.1, disables caching and request logs, uses a random per-session mutation token, and does not persist passwords. File traffic still goes through the authenticated TLS client and server rather than a second simplified transfer path.",
      ],
    },
    {
      title: "Transfer and access controls",
      paragraphs: [
        "The service verifies the certificate and hostname before accepting a TLS connection, stores password records with scrypt, and keeps each recipient's files in an isolated storage scope.",
        "Strict filename validation and path controls reduce traversal risk, while throttled authentication and password-safe audit records support investigation without writing secrets to logs.",
      ],
      bullets: [
        "Certificate and hostname verification",
        "scrypt password records",
        "Recipient-scoped storage",
        "Strict filename and path validation",
        "Authentication throttling and audit logging",
      ],
    },
    {
      title: "Resuming without trusting partial state",
      paragraphs: [
        "Uploads and downloads resume only from verified byte offsets. Before serving a download, the service re-hashes the stored file; the receiver also validates the final SHA-256 digest before accepting it.",
        "A mismatch moves the affected file into quarantine instead of allowing it to pass as a successful transfer.",
      ],
    },
    {
      title: "Measured verification",
      paragraphs: [
        "I verified eight upload-and-download round trips totaling 13,632,512 bytes and resumed a 2,097,152-byte upload after an interruption at 700,000 bytes.",
        "Sixteen automated tests cover authentication, throttling, recipient isolation, traversal attempts, interrupted transfers, at-rest tampering, quarantine behavior, password-safe audit logs, and dashboard setup and state handling.",
      ],
    },
    {
      title: "Relationship to P2P Messaging",
      paragraphs: [
        "The public P2P Messaging project currently binds a file's name, size, and SHA-256 digest into a signed message. This transfer service is the separate foundation for eventually moving those bytes securely, after the integration and failure-recovery work is complete.",
      ],
    },
  ],
  nextSlug: "/work/archtech",
  nextTitle: "Archtech Nonprofit Technology Operations",
};

export default function SecureFileTransferCaseStudy() {
  return <CaseStudy data={data} />;
}
