import Link from "next/link";

const skills = [
  ["Networks", "IPv4/IPv6, VLANs, trunking, DHCP, DNS, NAT, STP, OSPF, EIGRP"],
  ["Security", "Threat analysis, hardening, access control, firewalls, IDS/IPS, incident response"],
  ["Development", "Python, TypeScript, JavaScript, React, Next.js, Node.js, REST APIs"],
  ["Tools", "Linux, Windows Server, Wireshark, Packet Tracer, SecureCRT, Git, Cloudflare"],
];

const timeline = [
  {
    role: "Bachelor of Information Technology",
    place: "Ontario Tech University",
    date: "09/2024 — Present",
    detail: "Bachelor of Information Technology (Honours) in Networking and IT Security, with graduation expected in April 2028. Coursework connects Cisco routing and switching, IPv4/IPv6 design, network services, operating systems, Python, cryptography, cybercrime, trust, and security controls.",
  },
  {
    role: "Co-Founder and Website Developer",
    place: "SSIK IT Consulting & Solutions · Ontario",
    date: "05/2026 — Present",
    detail: "Co-founded SSIK with Ontario Tech classmate Ghayas Sher. We share consulting, security-assessment, privacy-research, and stakeholder responsibilities. I independently delivered the nine-page public website and a private, local-first 12-stage research and review platform with lint, type, migration, integrity, and secret controls.",
  },
  {
    role: "Technical Operations and Hosting",
    place: "Archtech · Oshawa, ON",
    date: "2026 — Present",
    detail: "Established Google Workspace, coordinate the contributors building the private website, and own hosting and deployment for a developing nonprofit. The role focuses on organizational account ownership, understandable handoffs, repeatable releases, and verification of the live result.",
  },
  {
    role: "Sales Associate",
    place: "Winners · Oshawa, ON",
    date: "05/2025 — Present",
    detail: "Support customers, process transactions accurately, maintain displays, and coordinate with the team during high-traffic periods.",
  },
  {
    role: "Summer Day Camp Counsellor",
    place: "Al Arqam Islamic Centre",
    date: "05/2023 — 07/2023",
    detail: "Led activities, managed groups, communicated with families, and supported logistics for more than 100 attendees.",
  },
];

function Arrow() {
  return <span aria-hidden="true">↗</span>;
}

export default function Info() {
  return (
    <main>
      <header className="site-header">
        <Link className="identity" href="/"><strong>Affan Shaikh</strong><span>Networking and IT Security student</span></Link>
        <p className="sidebar-location"><span>Location</span>Oshawa, Ontario</p>
        <nav className="nav-pill" aria-label="Primary navigation">
          <Link href="/">Work</Link><Link className="active" href="/info">Info</Link><Link href="/interests">Interests</Link>
        </nav>
        <div className="header-links">
          <a href="mailto:ffaanshake@gmail.com">Email <Arrow /></a>
          <a href="https://www.linkedin.com/in/sil6428" target="_blank" rel="noreferrer">LinkedIn <Arrow /></a>
          <a href="https://github.com/sil6428" target="_blank" rel="noreferrer">GitHub <Arrow /></a>
        </div>
      </header>

      <section className="info-hero wrap">
        <p className="section-label"><span /> About</p>
        <h1>I&apos;m Affan, a cybersecurity student who learns best by building.</h1>
        <div className="info-intro">
          <div className="profile-facts" aria-label="Profile details">
            <div><span>Location</span><strong>Oshawa, Ontario</strong></div>
            <div><span>Education</span><strong>Ontario Tech University</strong></div>
            <div><span>Graduation</span><strong>Expected April 2028</strong></div>
            <div><span>Current focus</span><strong>Networks and cybersecurity</strong></div>
          </div>
          <div className="story">
            <h2>A little context</h2>
            <p>
              I&apos;m completing Ontario Tech University&apos;s Networking and IT Security degree, with graduation expected in April 2028. My work moves between
              configuring routed and switched networks, examining how security controls fail, and building software that makes technical evidence understandable to the person operating it.
            </p>
            <p>
              I learn best by building and verifying. A Cisco lab makes a failed route observable through interface state, routing tables, packet captures, and end-to-end tests. A security application turns broad terms such as identity, authorization, integrity, replay protection, or recovery into decisions that have to survive malformed input and interrupted workflows.
            </p>
            <p>
              I co-founded SSIK with my Ontario Tech classmate Ghayas Sher. We share its consulting, security, privacy,
              and stakeholder responsibilities, while I independently built its public website and private SSIK Intelligence V1 platform. I also handle Google Workspace, account continuity, website-team coordination, hosting, and deployment for a developing nonprofit while preparing for CompTIA Security+ and expanding a Proxmox home lab.
            </p>
            <p>
              I am looking for co-op work where I can contribute to real infrastructure and learn from experienced operators. Network operations, security operations, systems administration, infrastructure security, and security-focused development all fit the direction of the work collected here.
            </p>
            <p>
              I use this portfolio as an ongoing record rather than a polished snapshot that hides the process. Completed work includes measurements and verification; active work includes its present boundary and next step; private work explains architecture without exposing confidential material; and older projects stay useful when they show where a skill started.
            </p>
            <p>
              That also means correcting the record when something changes. Product outcomes, project status, deployment links, limitations, and responsibilities should agree across the resume, room, AFFAN_OS, GitHub, and the long-form pages. I would rather describe a smaller verified result accurately than make a broad claim that I cannot explain in an interview.
            </p>
          </div>
        </div>
      </section>

      <section className="skills-section wrap">
        <div className="section-heading"><p><span /> Documentation approach</p><span>How I maintain this site</span></div>
        <div className="skill-grid">
          <article><span>01</span><h2>Current state</h2><p>I separate completed, active, planned, private, and externally blocked work so a roadmap item never reads like a shipped feature.</p></article>
          <article><span>02</span><h2>Evidence</h2><p>I record tests, controlled measurements, configurations, screenshots, public source, and live verification beside the specific claim each item supports.</p></article>
          <article><span>03</span><h2>Boundaries</h2><p>Every security project explains what it protects, which assumptions it requires, what it rejects, and what remains outside the current design.</p></article>
          <article><span>04</span><h2>Lessons</h2><p>I keep the decisions, failures, tradeoffs, and next steps that shaped the result so the site documents how the work developed, not only how it looks now.</p></article>
        </div>
      </section>

      <section className="skills-section wrap">
        <div className="section-heading"><p><span /> Skills and tools</p><span>Still learning</span></div>
        <div className="skill-grid">
          {skills.map(([title, detail], index) => (
            <article key={title}><span>0{index + 1}</span><h2>{title}</h2><p>{detail}</p></article>
          ))}
        </div>
      </section>

      <section className="interests-section wrap">
        <div className="section-heading"><p><span /> Outside school</p><span>Interests</span></div>
        <div className="interests-bridge">
          <div>
            <p>Badminton, photography, 3D printing, long stories, and an increasingly ambitious home lab.</p>
            <h2>There&apos;s more to me than school and projects.</h2>
          </div>
          <Link href="/interests">Explore my interests <Arrow /></Link>
        </div>
      </section>

      <section className="timeline-section wrap">
        <div className="section-heading"><p><span /> Experience</p><span>Past &amp; present</span></div>
        <div className="timeline">
          {timeline.map((item) => (
            <article key={item.role}>
              <div><h2>{item.place}</h2><p>{item.role}</p></div>
              <time>{item.date}</time>
              <p>{item.detail}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="volunteer wrap">
        <p className="section-label"><span /> COMMUNITY</p>
        <h2>430 hours spent helping people gather, learn, and participate.</h2>
        <div>
          <p><strong>400 hours</strong> supporting registration, guest service, crowd flow, setup, and attendee needs at Al Arqam Islamic Centre.</p>
          <p><strong>30 hours</strong> coordinating logistics, setup, front-line support, and flow control for a YCC519 community event.</p>
        </div>
      </section>

      <section className="closing wrap">
        <p className="eyebrow">OPEN TO CO-OP OPPORTUNITIES</p>
        <h2>Let&apos;s build something useful.</h2>
        <div className="contact-actions">
          <a href="mailto:ffaanshake@gmail.com">Email <Arrow /></a>
          <a href="https://www.linkedin.com/in/sil6428" target="_blank" rel="noreferrer">LinkedIn <Arrow /></a>
          <a href="https://github.com/sil6428" target="_blank" rel="noreferrer">GitHub <Arrow /></a>
          <a href="/Affan_Shaikh_Resume.pdf?v=2026-10-04-outcomes" target="_blank">Resume <Arrow /></a>
        </div>
      </section>

      <footer className="site-footer wrap">
        <div><strong>AFFAN SHAIKH</strong><span>Oshawa, Ontario</span></div>
        <div className="footer-nav"><span>MAIN</span><Link href="/">Work</Link><Link href="/info">Info</Link><Link href="/interests">Interests</Link></div>
        <div className="footer-nav"><span>CONTACT</span><a href="mailto:ffaanshake@gmail.com">Email</a><a href="https://www.linkedin.com/in/sil6428">LinkedIn</a><a href="https://github.com/sil6428">GitHub</a></div>
        <p>© 2026 Affan Shaikh. All rights reserved.</p>
      </footer>
    </main>
  );
}
