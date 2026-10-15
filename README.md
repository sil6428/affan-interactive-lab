<div align="center">
  <h1>Affan Interactive Lab</h1>
  <p><strong>A technical portfolio you explore as a Three.js cyber-lab.</strong></p>
  <p>Inspect the room, boot AFFAN_OS, open project files, or use the accessible HTML routes for the same work.</p>

  <p>
    <a href="https://affan-interactive-lab.pages.dev"><img alt="Open the Interactive Lab" src="https://img.shields.io/badge/Interactive_Lab-Launch-111827?logo=threedotjs&amp;logoColor=white"></a>
    <a href="https://affan-shaikh.pages.dev"><img alt="Open the professional portfolio" src="https://img.shields.io/badge/Professional_Portfolio-Open-22c55e?logo=cloudflarepages&amp;logoColor=white"></a>
    <img alt="React, TypeScript, and Three.js" src="https://img.shields.io/badge/React_%2B_Three.js-Interactive-087ea4?logo=react&amp;logoColor=white">
  </p>

  <p>
    <a href="CHANGELOG.md">Changelog</a> ·
    <a href="DESIGN_REFERENCES.md">Design references</a> ·
    <a href="THIRD_PARTY_ASSETS.md">Asset attribution</a>
  </p>
</div>

![Interactive cyber-lab preview](public/og-lab-v2.png)

## What you can explore

- **A full-room interface.** Select highlighted objects, move through eased camera transitions, and open content without leaving the lab.
- **AFFAN_OS.** The computer boots into a simulated desktop with a file manager, terminal, resume viewer, project files, contact links, learning logs, and a TryHackMe folder.
- **Technical case files.** OTNow, secure communications, file integrity, infrastructure, nonprofit operations, and other work open as readable project records.
- **Personal context.** The room also includes interests such as a home lab, 3D printing, reading, photography, and badminton.
- **Accessible fallbacks.** Every major project and interest has a direct HTML route; the 3D room is an enhancement, not the only way in.

## Engineering highlights

- Procedural Three.js room, workstation, server rack, 3D printer, chess set, racket, bookshelf, katana, and animated black cat
- Whole-object raycast highlighting, keyboard access, touch controls, and reduced-motion support
- Adaptive render tiers, bounded shadows, throttled reflections, idle frame limiting, and hidden-tab suspension
- First-frame `AFFAN_LAB` readiness state and deferred AFFAN_OS module to prevent a half-built initial frame
- Deterministic three-minute chess-set print animation and small room Easter eggs
- Month-organized learning-log synchronization and an internal Markdown reader
- Cloudflare Pages deployment with permanent redirects from earlier addresses
- Rendered-route and public-content checks in the automated test suite

## Direct routes

Visitors who prefer ordinary pages can open:

| Area | Routes |
| --- | --- |
| Profile | `/info`, `/interests` |
| Technical work | `/work/otnow`, `/work/p2p-messaging`, `/work/secure-file-transfer`, `/work/file-integrity-monitor` |
| Operations and consulting | `/work/archtech`, `/work/ssik` |
| Interests | `/interests/home-lab`, `/interests/3d-printing`, `/interests/reading`, `/interests/photography`, `/interests/badminton` |

## How it works

```text
Typed portfolio content + synchronized learning log
                    ↓
React routes and accessible HTML case files
                    ↓
Three.js room + object interaction layer
                    ↓
Deferred AFFAN_OS desktop and project windows
                    ↓
Vinext/Vite production build → Cloudflare Pages
```

## Local development

Node.js 22.13 or newer is required.

```bash
git clone https://github.com/sil6428/affan-interactive-lab.git
cd affan-interactive-lab
npm install
npm run dev
```

Run the complete quality checks:

```bash
npm run lint
npm test
```

`npm test` creates a production build and validates the main routes, metadata, public wording, links, and required interaction hooks.

## Performance and accessibility

The room is intentionally bounded so the visual concept does not take over the computer:

- device capability selects an adaptive render tier;
- reflection and shadow work is limited;
- animation slows while idle and suspends in hidden tabs;
- reduced-motion users keep the content without camera-heavy transitions; and
- direct routes remain usable without navigating the 3D environment.

## Development

### Technology

- React 19, TypeScript, Three.js, Next.js, Vinext, and Vite
- Cloudflare Pages and the Cloudflare Vite plugin
- ESLint and the Node.js test runner

### Repository map

| Path | Purpose |
| --- | --- |
| `app/` | Lab interface, direct routes, project pages, and interests |
| `public/` | Preview art, favicons, portfolio assets, and deploy-time files |
| `scripts/sync-learning-log.mjs` | Imports the public learning log into AFFAN_OS |
| `scripts/prepare-pages.mjs` | Prepares the Cloudflare Pages output |
| `tests/rendered-html.test.mjs` | Production-route, metadata, link, and content checks |
| `worker/` | Cloudflare runtime integration |
| `legacy-redirect/` | Redirects from earlier deployment addresses |

## References and assets

The interaction approach was informed by Ida's Gameboy, Jesse Zhou's portfolio, Bruno Simon's portfolio, React Bits, Rachel Wei's portfolio, and the Three.js documentation. The room, interface, copy, and custom models are original.

The local camera model is CC0 and documented with all other external assets in [`THIRD_PARTY_ASSETS.md`](THIRD_PARTY_ASSETS.md). See [`DESIGN_REFERENCES.md`](DESIGN_REFERENCES.md) and [`SOUND_EFFECTS.md`](SOUND_EFFECTS.md) for the complete record.

## Status and licence

The Interactive Lab is actively maintained as the deeper companion to the [professional portfolio](https://affan-shaikh.pages.dev). Project pages retain measured evidence and state missing production guarantees directly.

Copyright © 2026 Affan Shaikh. All rights reserved. The source is public for portfolio review. Reuse, redistribution, modification, or publication requires prior written permission. See [`LICENSE`](LICENSE).
