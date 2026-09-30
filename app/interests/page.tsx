import Link from "next/link";

function Arrow() {
  return <span aria-hidden="true">↗</span>;
}

const interests = [
  {
    number: "01",
    slug: "badminton",
    kicker: "REGIONAL COMPETITOR",
    title: "Badminton",
    lead: "Fast decisions, efficient movement, recovery after mistakes, and the discipline to improve one rally at a time.",
    body:
      "I competed at the regional level in singles and doubles. Training taught me to recover to a useful position after every shot, notice patterns in an opponent’s movement, adjust while a match is still happening, and return attention to the next rally instead of carrying the last mistake forward.",
    detail: "Regional level · Singles & doubles · Still playing",
    visual: (
      <div className="court-visual" aria-hidden="true">
        <div className="court-lines"><i /><i /><i /><i /></div>
        <div className="shuttle"><span /><b /></div>
        <small>MATCH POINT</small>
      </div>
    ),
  },
  {
    number: "02",
    slug: "3d-printing",
    kicker: "FROM FILE TO PHYSICAL",
    title: "3D printing & design",
    lead: "I like watching digital geometry become a physical object that exposes every weak tolerance, joint, support, and finishing decision.",
    body:
      "My larger builds include a katana inspired by Elden Ring and Leon’s hand cannon from Resident Evil. Printing the pieces is only one stage. Orientation, supports, scaling, tolerances, part separation, reinforced joints, sanding, filler, primer, and finishing turn every prop into a complete design-and-fabrication problem.",
    detail: "Modelling · Slicing · Assembly · Finishing",
    visual: (
      <div className="printer-visual" aria-hidden="true">
        <div className="printer-frame"><span className="printer-head" /><i className="print-bed" /><b className="print-model" /></div>
        <div className="layer-readout">LAYER <strong>284</strong><span /></div>
      </div>
    ),
  },
  {
    number: "03",
    slug: "reading",
    kicker: "CURRENTLY READING",
    title: "Web novels, manhwa & manga",
    lead: "Long stories with dense worlds, patient character development, consistent constraints, and details that reward close attention much later.",
    body:
      "I spend a lot of time reading East Asian web novels, Korean manhwa, and manga. I’m currently working through Lord of the Mysteries and Reverend Insanity. I enjoy stories that establish rules gradually, let characters understand those rules differently, and allow early choices or details to become meaningful hundreds of chapters later.",
    detail: "Lord of the Mysteries · Reverend Insanity",
    visual: (
      <div className="books-visual" aria-hidden="true">
        <div className="book book-one"><small>01</small><strong>LORD OF THE<br />MYSTERIES</strong><span>IN PROGRESS</span></div>
        <div className="book book-two"><small>02</small><strong>REVEREND<br />INSANITY</strong><span>IN PROGRESS</span></div>
        <div className="page-count">BOOKMARK / 2026</div>
      </div>
    ),
  },
  {
    number: "04",
    slug: "photography",
    kicker: "MOMENTS I WANT TO KEEP",
    title: "Photography",
    lead: "I like ordinary scenes where light, structure, repetition, or one overlooked detail makes me stop walking.",
    body:
      "Photography gives me a reason to pay closer attention to framing, negative space, reflections, texture, and the order in which information enters an image. I keep edits restrained and use my VSCO gallery as a visual record of the ordinary places and arrangements that were specific enough to make me stop.",
    detail: "Street details · Light · Colour · Everyday moments",
    visual: (
      <div className="photo-visual" aria-hidden="true">
        <div className="photo-frame photo-a"><span>01</span></div>
        <div className="photo-frame photo-b"><span>02</span></div>
        <div className="photo-frame photo-c"><span>03</span></div>
        <small>CONTACT SHEET / IN PROGRESS</small>
      </div>
    ),
  },
  {
    number: "05",
    slug: "home-lab",
    kicker: "CURRENT BUILD",
    title: "The Proxmox home lab",
    lead: "Old computers are becoming a controlled server environment built for experiments, recoverable mistakes, and direct systems learning.",
    body:
      "I’m repurposing older computers into a Proxmox environment for virtual machines, separated services, network experiments, storage, monitoring, and recovery practice. The goal is to deploy an idea, observe it, break an assumption, restore a known-good state, and document the result without risking the computer I depend on for school.",
    detail: "Proxmox · Virtual machines · Networking · Reused hardware",
    visual: (
      <div className="rack-visual" aria-hidden="true">
        <div className="rack-unit"><span>NODE 01</span><i /><i /><b>ONLINE</b></div>
        <div className="rack-unit"><span>NODE 02</span><i /><i /><b>BUILDING</b></div>
        <div className="rack-unit"><span>STORAGE</span><i /><i /><b>READY</b></div>
        <div className="rack-footer"><span /> PROXMOX VE / HOME LAB</div>
      </div>
    ),
  },
];

export default function Interests() {
  return (
    <main>
      <header className="site-header">
        <Link className="identity" href="/"><strong>Affan Shaikh</strong><span>Networking and IT Security student</span></Link>
        <p className="sidebar-location"><span>Location</span>Oshawa, Ontario</p>
        <nav className="nav-pill" aria-label="Primary navigation">
          <Link href="/">Work</Link><Link href="/info">Info</Link><Link className="active" href="/interests">Interests</Link>
        </nav>
        <div className="header-links">
          <a href="mailto:ffaanshake@gmail.com">Email <Arrow /></a>
          <a href="https://www.linkedin.com/in/sil6428" target="_blank" rel="noreferrer">LinkedIn <Arrow /></a>
          <a href="https://github.com/sil6428" target="_blank" rel="noreferrer">GitHub <Arrow /></a>
        </div>
      </header>

      <section className="interests-hero wrap">
        <p className="section-label"><span /> Interests</p>
        <h1>What I spend time on outside class.</h1>
        <p>
          Detailed notes on the interests that shape how I practise, design, observe, build, and learn outside formal coursework.
        </p>
        <div className="interest-index" aria-hidden="true">
          <span>01 SPORT</span><span>02 MAKING</span><span>03 READING</span><span>04 PHOTOS</span><span>05 HOME LAB</span>
        </div>
      </section>

      <section className="interest-stories wrap">
        {interests.map((interest) => (
          <article className="interest-story" key={interest.title}>
            <div className="interest-story-copy">
              <p className="project-meta">{interest.number} · {interest.kicker}</p>
              <h2>{interest.title}</h2>
              <h3>{interest.lead}</h3>
              <p>{interest.body}</p>
              <small>{interest.detail}</small>
              {interest.title === "Photography" && (
                <a
                  className="interest-link"
                  href="https://sy1len.vsco.site"
                  target="_blank"
                  rel="noreferrer"
                >
                  View my VSCO <Arrow />
                </a>
              )}
              <Link className="interest-read-more" href={`/interests/${interest.slug}`}>
                Read full notes <span aria-hidden="true">→</span>
              </Link>
            </div>
            <div className="interest-story-visual">
              {interest.visual}
            </div>
          </article>
        ))}
      </section>

      <section className="closing wrap">
        <p className="eyebrow">BACK TO THE TECHNICAL WORK</p>
        <h2>See what I&apos;m building.</h2>
        <Link href="/#work">View selected work <Arrow /></Link>
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
