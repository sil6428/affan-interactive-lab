import type { Metadata } from "next";
import { headers } from "next/headers";
import SiteExtras from "./site-extras";
import TopologyScene from "./topology-scene";
import "./globals.css";

const publicUrl = "https://affan-interactive-lab.pages.dev";

export async function generateMetadata(): Promise<Metadata> {
  const requestHeaders = await headers();
  const host = requestHeaders.get("x-forwarded-host") ?? requestHeaders.get("host") ?? "localhost:3000";
  const protocol = requestHeaders.get("x-forwarded-proto") ?? (host.includes("localhost") ? "http" : "https");
  const origin = `${protocol}://${host}`;

  return {
    metadataBase: new URL(origin),
    title: "Affan Shaikh | Interactive Lab",
    description:
      "Affan Shaikh's interactive Three.js technical showcase, with project case studies, networking labs, and an explorable AFFAN_OS workspace.",
    icons: { icon: "/lab-favicon.svg", shortcut: "/lab-favicon.svg" },
    openGraph: {
      title: "Affan Shaikh | Interactive Lab",
      description: "An explorable Three.js technical showcase for networks, security, and software.",
      type: "website",
      url: origin,
      images: [{ url: "/og-lab-v2.png", width: 1200, height: 630, alt: "Affan Shaikh interactive systems lab portfolio" }],
    },
    twitter: {
      card: "summary_large_image",
      title: "Affan Shaikh | Interactive Lab",
      description: "An explorable Three.js technical showcase for networks, security, and software.",
      images: ["/og-lab-v2.png"],
    },
  };
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": `${publicUrl}/#website`,
        url: publicUrl,
        name: "Affan Shaikh Interactive Lab",
        description: "An explorable Three.js technical showcase for networks, security, and software.",
      },
      {
        "@type": "ProfilePage",
        "@id": `${publicUrl}/#profile`,
        url: publicUrl,
        name: "Affan Shaikh | Interactive Lab",
        mainEntity: {
          "@type": "Person",
          name: "Affan Shaikh",
          url: publicUrl,
          sameAs: [
            "https://github.com/sil6428",
            "https://www.linkedin.com/in/sil6428",
            "https://sy1len.vsco.site",
          ],
          alumniOf: {
            "@type": "CollegeOrUniversity",
            name: "Ontario Tech University",
          },
          affiliation: [
            { "@type": "Organization", name: "SSIK IT Consulting & Solutions" },
            { "@type": "Organization", name: "Archtech" },
          ],
          knowsAbout: [
            "Cybersecurity",
            "Computer networking",
            "Cisco IOS",
            "Python",
            "TypeScript",
            "Chrome extensions",
            "Cloudflare Pages",
            "IT consulting",
            "Website hosting",
          ],
        },
      },
    ],
  };

  return (
    <html lang="en">
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData).replace(/</g, "\\u003c") }}
        />
        <TopologyScene />
        {children}
        <SiteExtras />
      </body>
    </html>
  );
}
