# Pooya.OS — Interactive Web Desktop & Engineering Portfolio

**Author:** Pooya Goodarzi  
**Live site:** https://pooya-labs.github.io/pooya-os/  
**Repository:** [pooya-labs/pooya-os](https://github.com/pooya-labs/pooya-os)

Pooya.OS is a browser-based engineering portfolio presented as a desktop workspace. It brings project case studies, a local command sandbox, a design-token inspector, and a small window manager into one responsive interface.

## Explore the workspace
- **Engineer profile:** product design, frontend engineering, and systems-thinking focus.
- **Project showcase:** nine bilingual project profiles, led by Pooya Labs Platform, with problem statements, engineering approaches, practical things to try, and direct source/demo links.
- **Local CLI:** `help`, `whoami`, `stack`, `projects`, `status`, `xray`, and `hire`. Commands run in the browser; they do not execute shell commands.
- **Architecture & tokens:** the design palette and runtime boundaries, with X-Ray labels for interface inspection.
- **Frame monitor:** browser-side `requestAnimationFrame` sampling. FPS and frame time describe this tab, not server latency.

## Architecture
- Next.js 16 static export, React 19, TypeScript, Zustand, Tailwind CSS, and Framer Motion.
- Hosted on GitHub Pages under `/pooya-os`.
- No server runtime, API route, account system, database, or backend shell is included in this deployment.
- State is client-side and resets with the browser session unless a feature explicitly says otherwise.

## Project ecosystem
- **Pooya Labs Platform:** the owner's bilingual engineering portfolio, case studies, architecture diagrams, and novels library.
- **ORBIT:** an observability and incident-operations workspace with a public synthetic-data demo.
- **AetherFlow:** a distributed-systems and control-plane engineering project.
- **GlobalCart:** a bilingual storefront and product-catalog demo; checkout and fulfillment are simulated.
- **Salon Booking:** appointment booking and salon management, released as v1.0.0 with an Apps Script and Sheets backend.
- **AuraPulse:** public read-only Binance tickers where reachable, plus an in-browser paper-trading simulator.
- **NexusCanvas:** a local architecture graph editor with topology analysis and a Docker Compose starter export.
- **LuminaGlass:** SVG-based optical controls, PNG export, browser-native Web Audio processing, and a local task board.

The interface distinguishes external public data from illustrative metrics and local-only behavior. It is a portfolio demonstration, not a hosted SaaS backend.
