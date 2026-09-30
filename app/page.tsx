import Link from "next/link";
import InteractiveRoom from "./interactive-room";

export default function Home() {
  return (
    <main className="immersive-home">
      <header className="immersive-header">
        <Link className="immersive-identity" href="/" aria-label="Affan Shaikh home">
          <strong>Affan Shaikh</strong>
          <span>Networking + IT Security</span>
        </Link>
        <nav aria-label="Portfolio shortcuts">
          <a href="/Affan_Shaikh_Resume.pdf" target="_blank" rel="noreferrer">Resume</a>
          <Link href="/info">Info</Link>
          <a href="mailto:ffaanshake@gmail.com">Contact</a>
          <a href="https://github.com/sil6428" target="_blank" rel="noreferrer">GitHub</a>
        </nav>
      </header>
      <section className="immersive-intro" aria-labelledby="lab-title">
        <p>INTERACTIVE PORTFOLIO / DOCUMENTED BUILDS</p>
        <h1 id="lab-title">Explore the lab.</h1>
        <span>
          Move your pointer to shift the room. Drag to orbit gently, then select any object for a closer look.
        </span>
      </section>

      <InteractiveRoom />
    </main>
  );
}
