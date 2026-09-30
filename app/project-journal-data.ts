export const projectJournalBodies = {
  archtech: `## Why the operational foundation comes first

Archtech is a developing nonprofit, so the technical problem is larger than producing a website that looks finished on one computer. The organization needs durable ownership of its accounts, a release path that another authorized person can understand, and a recovery route that does not depend on one contributor remembering an undocumented password.

I established the Google Workspace environment, coordinate the contributors building the private website, and own the hosting and deployment path. I also support implementation, but my central responsibility is continuity across people, accounts, source code, hosting, and the eventual public release.

## How work moves toward a release

The working process separates contribution from publication. Contributors can develop and review changes without automatically receiving access to every organizational service. A release becomes ready only after ownership, source state, hosting configuration, and the public result agree.

- Confirm which organizational account owns each service.
- Keep recovery options associated with the organization rather than one personal inbox.
- Define who can contribute, who can review, and who can publish.
- Record the source revision and deployment destination for a release.
- Verify the deployed page directly instead of assuming a successful build means the public service works.
- Keep rollback information available before a change is treated as complete.

## Access decisions and handoffs

Access is granted for a role and a task, not simply because someone is part of the project. That reduces accidental changes and makes offboarding easier. It also forces the team to identify the actual owner of a domain, repository, hosting project, or shared workspace before the project becomes urgent.

Handoffs should explain the service owner, authorized administrators, billing or renewal responsibility, recovery path, deployment steps, and current limitations. The goal is for another authorized contributor to continue the work without reconstructing the whole environment from chat history.

## Evidence and boundaries

The website source and unfinished organizational material remain private. This portfolio documents my responsibilities, operating decisions, and verification approach without exposing credentials, internal discussions, or work that the organization has not released.

The strongest evidence is operational: organization-owned accounts exist, responsibilities are separated, the deployment path is documented, and the public result will be checked from outside the development environment. The project is still active, so I do not describe the website as publicly launched until that is true.

## What this work is teaching me

The project makes the gap between building a page and operating a service concrete. A front end can be correct while account recovery is unclear, a domain renewal is tied to the wrong person, a deployment cannot be reproduced, or the public host serves an older revision.

My next documented milestones are the production launch, a verified release checklist, a recovery exercise, and a concise handoff guide for future administrators.`,

  ssik: `## Why SSIK started

SSIK IT Consulting & Solutions began as a shared effort between Ghayas Sher and me to turn classroom knowledge into a controlled consulting workflow. We share SSIK's co-founder, consulting, security-assessment, privacy-research, and stakeholder-communication responsibilities. In addition to that shared work, I independently built the public website and the private SSIK Intelligence V1 platform that supports the internal process.

The project is intentionally passive by design. It organizes public business information and non-intrusive observations; it does not send outreach automatically, exploit systems, bypass access controls, or perform invasive testing. Any future engagement would require explicit authorization and a clearly defined scope.

## Public information structure

The nine-page public website had to explain what the organization does without implying work that has not occurred. Service descriptions separate readiness reviews, infrastructure guidance, privacy research, and possible future authorized assessments. Contact and ownership information are presented consistently, while internal research and customer material stay outside the public repository.

## SSIK Intelligence workflow

The local-first internal platform uses a twelve-stage workflow so research does not become an unreviewed pile of targets. Work moves through discovery, normalization, evidence collection, deduplication, review, prioritization, approval, export, rescanning, recovery, and audit states. Durable jobs allow the platform to resume after interruption instead of silently abandoning a run.

- Workspaces separate unrelated research and permissions.
- Role-based access control limits administrative and review actions.
- URL and network validation reduce server-side request forgery risk.
- Runtime and queue limits keep unattended work bounded.
- Evidence and audit records explain why an item changed state.
- Previously reviewed targets can be deprioritized while new coverage areas refill the queue.

## Verification

The private platform currently passes 110 automated tests together with lint, type, migration, integrity, and secret checks. Outbound delivery remains disabled and mock-only, so validation cannot accidentally contact a researched organization. Those checks cover the application logic and known defensive boundaries; they do not equal an independent security assessment or prove that every future deployment configuration is safe.

The public website is maintained through GitHub Pages. Deployment status, source ownership, and public claims are checked separately so the site does not describe internal capabilities that the platform has not demonstrated.

## Risk boundaries

The platform stores business research and operational history, so authentication, authorization, auditability, and export control matter even when the underlying sources are public. Public information can still become sensitive when it is aggregated, scored, or associated with internal decisions.

The current project does not claim automated penetration testing, guaranteed vulnerability discovery, customer authorization, production-scale scanning, or regulatory certification. These boundaries remain visible because they determine what the evidence can actually support.

## Lessons and next milestones

The largest lesson is that workflow design is a security control. A technically correct scanner can still create risk if it lacks ownership, review gates, bounded execution, evidence retention, or a clear stop condition.

Future milestones include refining the review experience, improving recovery reporting, validating deployment assumptions, documenting an authorized engagement lifecycle, and separating reusable public components from private operational logic.`,

  portfolio: `## Why the room exists

I wanted the first view to communicate more than a grid of project cards. The room connects technical work and personal interests to physical objects: the workstation opens AFFAN_OS, the rack represents networking and the home lab, the printer explains fabrication, the racket opens badminton, the camera opens photography, and the bookshelf opens reading.

The visual idea only works if visitors can understand it. The page explains how to move and select, highlights complete targets instead of relying on invisible click points, records viewed objects, provides a numbered index, and keeps conventional Info, Interests, and project content available outside the 3D scene.

## Room construction

The desk, workstation, printer, rack, bookshelf, sports equipment, props, and cat are procedural Three.js models built from reusable geometry and materials. A locally hosted CC0 camera asset is documented separately. Lighting, shadows, camera targets, object labels, and movement limits are tuned together so the room remains readable rather than becoming a model viewer with portfolio text attached afterward.

Objects are interactive systems rather than decoration. Selection changes camera position, focus, labels, visited state, and available links. The scene also has to recover cleanly when a visitor closes a panel, resizes the page, switches tabs, uses touch input, or asks for reduced motion.

## AFFAN_OS

Powering on the room computer opens a React interface designed like a small personal operating system. It organizes projects, Cisco labs, education, experience, interests, contact paths, inspiration references, the current resume, TryHackMe records, and the synchronized learning log into folders and readable documents.

The desktop includes window state, back navigation, minimized and maximized views, a launcher, file search, keyboard access, touch-friendly controls, and a Bash-inspired terminal. Project documents now contain their complete journals so a visitor can remain inside the file instead of opening another page to obtain the important context.

## Performance strategy

The initial room should appear before optional visual effects. Bloom and glTF parsing are loaded only when required, nonessential model work is deferred until the browser is idle, hidden tabs pause rendering, and idle scenes use a reduced update rate. Pixel ratio, shadow maps, reflections, and geometry detail respond to device capability.

These choices do not make Three.js free. The core renderer remains the largest client-side dependency, so performance work focuses on bounding repeated work, limiting asset weight, and preserving a useful non-3D route rather than pretending the scene has the cost of an ordinary static page.

## Accessibility and responsive behavior

The WebGL canvas is a presentation layer, not the only document structure. The object index exposes targets as ordinary controls, detail windows use headings and links, and the standard site routes remain usable without orbiting a camera. Touch devices receive larger targets and simplified motion; reduced-motion preferences remove nonessential animation.

Responsive work includes the site header, case-study typography, AFFAN_OS windows, folder grids, resume viewer, terminal, room labels, and the small in-app browser pane used during development. Visual novelty is not allowed to make project evidence unreachable.

## Content and evidence

Public repositories are linked where source can be shared. Private work explains architecture, observed results, test totals, limitations, and my exact responsibility without exposing confidential material. Repeated facts such as test counts, project status, deployment links, and graduation date are checked across the resume, room, files, and long-form routes.

Before a release, lint checks the source, the production build renders every route, and automated tests inspect generated output for core content, metadata, project facts, interests, the desktop environment, and local assets. Deployment occurs only after those checks pass.

## Lessons and ongoing record

The project taught me to separate visual ambition from the content contract. A recruiter still needs a clear resume, a technical reviewer needs evidence, a keyboard user needs another path, and a slower device needs a bounded workload.

This portfolio is maintained as an ongoing journal. New entries should record the problem, decisions, evidence, limits, and next step—not merely add another technology name.`,

  otnow: `## The student problem

Canvas contains the required data, but deadlines can be spread across planner items, course pages, quizzes, assignments, discussions, events, and announcements. OTNow began as a local companion that keeps the upcoming workload visible in a side panel without asking the student to create another account.

The design was inspired by WatNow with permission from its creator, but it was rebuilt for Ontario Tech's Canvas environment and its own visual language. It remains explicitly unofficial and does not claim endorsement by Ontario Tech University or Instructure.

## Extension architecture

OTNow uses the student's existing authenticated Canvas session. A tightly scoped content bridge reads two read-only Canvas endpoints, normalizes the returned planner data, and sends it to the extension side panel. The panel groups entries by time, course, and type while preserving links back to the original Canvas item.

- Assignments, quizzes, discussions, events, planner notes, and other dated items are retained when Canvas returns them.
- Course, type, and grouping controls help separate immediate work from the full queue.
- Moved-deadline detection makes silent date changes visible.
- Local reminders and course shortcuts reduce repeated navigation.
- Light, dark, and system themes follow the student's preference.

## Privacy and permission decisions

The extension does not request a Canvas password and does not send course data to a separate OTNow server. Planner data and preferences remain in Chrome's local storage. There is no telemetry, advertising identifier, tracking pixel, or OTNow user account.

Permissions are limited to what the side panel and Ontario Tech Canvas bridge need. The repository documents why each permission exists so Chrome Web Store disclosures and the implementation can be compared directly.

## Offline and failure behavior

The last successful local snapshot remains available when Canvas is temporarily unreachable. The interface distinguishes cached data from a fresh synchronization and provides a manual refresh path. Invalid or partial responses should fail visibly instead of being interpreted as an empty schedule.

## Installation and updates

The GitHub release package is prepared so the extension root is the folder a user selects in Chrome, avoiding the common nested-folder error produced by downloading and unzipping the repository source. A separate installation guide explains developer mode, Load unpacked, updating, troubleshooting, and removal in non-technical language.

The extension can compare its installed version with the public repository release information and explain the update steps. It does not silently replace itself outside Chrome's normal extension mechanisms.

## Verification and limits

Twelve unit tests and a release-package check currently validate the core normalization, grouping, settings, and packaging behavior. I also tested installation, the authenticated Ontario Tech session bridge, first synchronization, and side-panel rendering against the live Canvas environment.

Broader testing with consenting students and Chrome Web Store review remain external milestones. The project does not claim a store listing, university endorsement, support for every Canvas institution, or access when the user's Ontario Tech session has expired.

## Lessons and roadmap

The project showed that a useful extension needs a complete trust and support path: permissions, privacy, installation, updates, bug reports, suggestions, removal, and failure messages matter as much as the main interface.

Next work includes additional accessibility review, broader student testing, store-listing assets, clearer edge-case reporting, and changes justified by real feedback rather than feature count.`,

  secureFileTransfer: `## Why this is a separate service

Secure file movement has different failure modes from secure text messaging. A signed file reference can state what a file should be, but transferring the bytes also requires recipient authorization, interruption handling, destination safety, integrity verification, quarantine, and an understandable operator workflow.

I kept this service separate from P2P Messaging so those boundaries remain visible. Integration is a future design task rather than an implied capability.

## Operator workflow

Transfer Desk is a loopback-only browser workspace backed by the same Python core as the command-line interface. It guides a local operator through certificate generation, account creation, server startup, file selection, recipient choice, inbox review, and verified download destinations.

Passwords remain request-scoped in the interface. Dashboard request logging and caching are disabled, and a random per-session token protects local actions. The CLI remains available for automation and for inspecting behavior without the interface.

## Trust boundaries

TLS protects transport only after certificate trust is established. The service therefore separates certificate setup, account authentication, recipient authorization, storage isolation, audit records, and post-transfer digest verification.

- Passwords are stored using scrypt-derived verifiers rather than plaintext.
- Authentication attempts are throttled.
- Recipient inboxes are isolated from one another.
- Paths and filenames are normalized to resist traversal.
- Upload and download records bind expected sizes and SHA-256 digests.
- Audit output avoids recording reusable passwords.

## Failure and quarantine behavior

Interrupted uploads can resume from a validated offset. Downloads are written to a temporary destination, checked against the expected size and digest, and promoted only after verification. A mismatch or unsafe destination prevents the file from being presented as successful and leaves evidence for review.

The service also rejects malformed framing, unauthorized recipients, traversal attempts, and inconsistent metadata. These are application-level checks; they complement TLS rather than being replaced by it.

## Measurements

I verified eight upload/download round trips totaling 13,632,512 bytes and resumed a 2,097,152-byte upload after interruption at 700,000 bytes. Sixteen automated tests cover authentication, throttling, recipient isolation, traversal attempts, interruption, tampering, quarantine, dashboard setup, and password-safe audit logging.

These measurements prove specific controlled paths. They do not prove internet-scale throughput, resistance to every denial-of-service strategy, independent cryptographic review, or safe exposure of the current local interface to an untrusted network.

## Tradeoffs and next work

The application favours an inspectable Python implementation and a restrained local interface over distributed storage or a large service framework. That keeps the security boundaries understandable but leaves multi-device identity, NAT traversal, external deployment, key lifecycle, and formal review outside the current result.

Future integration with P2P Messaging requires explicit mapping between messaging identities and transfer accounts, authorization for each attachment, recovery after either peer disconnects, and a single user-visible record of message and file status.`,

  secureMessaging: `## Why direct peer messaging

This shared project with Ghayas Sher began as an attempt to understand what secure messaging requires beneath the interface. Encrypting a string is only one part. Devices need identities, users need a way to verify keys, messages need authenticated structure and freshness, replays need rejection, local history needs protection, and delivery needs evidence from the intended peer.

The application provides a usable local interface for identity setup, contacts, conversation history, message composition, verification, delivery state, and security information while keeping a CLI path for testing and automation.

## Cryptographic responsibilities

Long-term identity and per-message protection are separated conceptually. The protocol signs the authenticated message structure, derives encryption material for the intended peer, attaches nonces and sequence information, and verifies everything before plaintext is accepted into conversation state.

Key fingerprints give users a comparison point, but fingerprint display is not the same as successful out-of-band verification. The interface therefore distinguishes a known key from a verified contact rather than presenting encryption as automatic proof of identity.

## Local state and conversation behavior

Conversations are organized by contact and retain status information needed to explain whether a message was prepared, sent, acknowledged, rejected, or failed. Parsing and size limits are applied before untrusted content is allowed to consume unlimited resources or mutate stored history.

The design also considers duplicate messages, reordered delivery, restarts, changed contact keys, malformed envelopes, and acknowledgements that do not correspond to an accepted message. The goal is for failure to remain visible rather than silently appearing as success.

## Adversarial tests

The current public repository includes 75 automated tests covering browser authentication, CSRF protection, conversation controls, identity handling, authenticated encryption, signatures, malformed input, tampering, spoofing, replay rejection, acknowledgements, persistence, attachment references, and end-to-end delivery.

Those tests are evidence for the implemented paths, not a substitute for an independent security audit. The project does not claim production readiness, forward secrecy, anonymous metadata, NAT traversal, automatic file transfer, multi-device synchronization, or protection after an endpoint is compromised.

## Collaboration and roadmap

The repository uses documented suggestions and roadmap material so each contributor has a clear place to continue. Protocol documentation and tests allow changes to be evaluated against shared assumptions rather than merged because the interface appears to work.

Comparable secure messengers show important gaps to study: audited protocol libraries, prekeys and forward secrecy, safety-number workflows, attachment lifecycle, device linking, key changes, abuse controls, backup policy, metadata minimization, and recovery. These are references for learning, not features the project currently claims.

## Lessons

The project changed my understanding of secure communication from “use encryption” to maintaining a chain of identity, authorization, freshness, integrity, confidentiality, parsing limits, acknowledgement, and protected local state. A weakness at one boundary can invalidate confidence created by the others.`,

  fileIntegrityMonitor: `## Why I built it

A file-integrity tool should answer more than whether two hashes differ. An operator needs to know what baseline was trusted, what was added or removed, which metadata changed, whether the scan completed, and whether the evidence itself was protected from casual alteration.

This project keeps the engine small enough to inspect, uses only the Python standard library, and exposes the same behavior through a CLI and Integrity Desk, a local browser interface for people who do not want to manage every scan from a terminal.

## Baseline lifecycle

The first scan creates a deterministic inventory of the selected tree. Each record binds a normalized relative path to file type, size, timestamps where appropriate, and SHA-256 content evidence. Later scans compare current observations with the chosen baseline and classify additions, removals, content changes, and metadata changes.

Baseline creation is intentionally separate from accepting a new trusted state. If every change automatically becomes the new baseline, an unauthorized modification can erase its own evidence during the next run.

## Interface and reports

Integrity Desk lets the user select a directory, create or load a baseline, run a comparison, review grouped changes, and export a report. The UI calls the same core functions as the CLI, which reduces the chance that automation and the visible result disagree.

Reports are deterministic so equivalent input produces comparable output. Clear statuses distinguish a completed clean scan from an error, skipped path, permission problem, or interrupted run.

## Failure cases

The scanner handles unreadable files, disappearing paths, symbolic-link decisions, permission errors, malformed baselines, large trees, and files that change during observation. A result is not labelled clean when important paths could not be examined.

The project also documents an essential limitation: if an attacker can modify both monitored files and the baseline or reporting environment, hashing alone cannot establish truth. Baselines need separate access control, backups, or signed external storage depending on the threat model.

## Verification and tradeoffs

In a controlled 500-file fixture set, the monitor detected 45 of 45 expected changes: 20 modifications, 10 deletions, 10 additions, and 5 moves, with zero scan errors.

The project has nine passing automated tests covering deterministic scanning, change classification, same-size content tampering, rename inference, saved dashboard evidence, required-path validation, reports, error states, and the shared interface/core behavior.

Using only the standard library keeps installation and review simple, but it means the project does not depend on a database, background task queue, kernel event feed, or real-time filesystem watcher. It favours reproducible point-in-time evidence over continuous monitoring.

## Lessons and next work

The main lesson is that integrity is a lifecycle, not a hash function. Trust in the initial state, protection of the baseline, completeness of observation, review of changes, and controlled acceptance of a new state all matter.

Possible next steps include signed baseline manifests, scheduled scans, stronger platform-specific metadata, protected remote evidence, performance profiles for larger trees, and documented recovery actions for each class of finding.`,

  eventPlanner: `## Origin

Event Planner is an earlier browser-based JavaScript project built to practise turning form input into persistent interface state. A user can enter event details, render them into a visible schedule, revise the information, and remove entries without refreshing the page.

## What it taught me

The useful part was not the form itself. The project forced me to keep validation, stored values, displayed cards, editing state, and empty-state messaging synchronized. It exposed the difference between changing the DOM once and designing a predictable state transition that still works after several edits.

- Validate required values before changing the schedule.
- Give each entry a stable identity instead of relying only on its visible position.
- Keep edit and delete actions connected to the correct record.
- Re-render totals and empty states after every mutation.
- Preserve a clear keyboard order and readable labels.

## Current limits and value

The project is intentionally small and does not claim authentication, shared calendars, server persistence, reminders, conflict detection, or production scheduling. It remains in the portfolio because it records an earlier stage of my interface work and makes the growth toward larger React applications easier to see.

If revisited, the next useful work would be local persistence, import/export, date conflict warnings, accessible dialogs, and automated browser tests—not simply more visual effects.`,

  ciscoNetworkingLabs: `## Why these labs lead the portfolio

The Cisco labs are the closest repeated simulation of day-to-day infrastructure work in my current experience. Requirements become a topology and address plan, several device configurations have to agree, and evidence must prove that traffic follows the intended path.

They also produce useful failures. A host can have the right address but the wrong gateway; a trunk can be active but omit one VLAN; a routing adjacency can form while a network statement is incomplete; or NAT can hide an addressing problem until traffic crosses a particular boundary.

## Planning and topology

Before configuration, I identify networks, broadcast domains, device roles, gateways, routing boundaries, services, and expected traffic flows. IPv4 subnets and IPv6 prefixes are assigned deliberately so verification output can be compared with the intended plan.

The topology record includes interface names, link types, VLAN IDs, trunk expectations, routed networks, DHCP scopes, DNS assumptions, and the commands that should prove each layer.

## Layer 2 configuration

Switching work includes VLAN creation, access-port assignment, 802.1Q trunks, native-VLAN and allowed-VLAN checks, spanning-tree observation, and router-on-a-stick where inter-VLAN routing is required.

Verification uses interface status, VLAN tables, trunk state, MAC learning, spanning-tree output, and end-host tests. A configured command is not accepted as evidence until operational state and traffic agree.

## Routing and services

Routed labs include static and default routes together with introductory OSPF and EIGRP behavior. I inspect routing tables, next hops, administrative distance, metrics, neighbor state, advertised networks, passive interfaces, and the effect of a failure or changed path.

Supporting services include DHCP, DNS, NAT, IPv4 and IPv6 gateways, and selected access controls. These services are tested from the client perspective as well as from the device providing them.

## Troubleshooting sequence

I start with the intended path and narrow the fault domain instead of changing several devices at once.

- Confirm the endpoint address, prefix, gateway, and DNS information.
- Check physical and data-link interface state.
- Verify VLAN membership and trunk carriage.
- Inspect neighbor tables and local routes.
- Follow the routing table hop by hop.
- Check service-specific state such as DHCP bindings, NAT translations, or routing neighbors.
- Use ping, traceroute, IOS show commands, Wireshark, and packet-level evidence where needed.
- Make one justified correction and retest the original path.

## Evidence and documentation

Each lab should preserve the requirement, topology, address plan, relevant configuration, initial symptom, observed state, likely fault domain, corrective action, and final verification. Screenshots are useful only when the command and its meaning remain clear.

This approach makes the work reproducible and easier to explain in an interview. It also exposes cases where a local ping succeeds while the complete end-to-end requirement still fails.

## Realism and limits

Packet Tracer and CML are controlled learning environments. They are useful for protocol reasoning and repeatable faults, but they do not reproduce every hardware behavior, provider dependency, wireless condition, licensing issue, scale limit, or operational process in a production network.

The next stage is connecting these skills to the Proxmox home lab: segmented virtual networks, routing and firewall boundaries, Windows and Linux services, traffic capture, centralized logs, backups, and recovery tests.`,
} as const;

export function journalSections(body: string) {
  const sections: Array<{ title: string; paragraphs: string[]; bullets?: string[] }> = [];
  let current: { title: string; paragraphs: string[]; bullets: string[] } | null = null;

  for (const rawLine of body.split("\n")) {
    const line = rawLine.trim();
    if (!line) continue;

    if (line.startsWith("## ")) {
      if (current) {
        sections.push({
          title: current.title,
          paragraphs: current.paragraphs,
          ...(current.bullets.length ? { bullets: current.bullets } : {}),
        });
      }
      current = { title: line.slice(3), paragraphs: [], bullets: [] };
      continue;
    }

    if (!current) continue;
    if (line.startsWith("- ")) current.bullets.push(line.slice(2));
    else current.paragraphs.push(line);
  }

  if (current) {
    sections.push({
      title: current.title,
      paragraphs: current.paragraphs,
      ...(current.bullets.length ? { bullets: current.bullets } : {}),
    });
  }

  return sections;
}
