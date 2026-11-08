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

## Project identity & logo assets

The Projects workspace uses the official project marks from the same asset sources as the Lumina Glass ecosystem showcase. Each of the nine project entries has its own logo, shown in both the project selector and the selected-project detail header. Logos use contained sizing so the source artwork keeps its original proportions; transparent marks stay transparent, the Pooya Labs Platform monogram keeps its black tile, and light-background marks retain a neutral tile for contrast.

| Project | Official logo asset |
| --- | --- |
| Pooya Labs Platform | `pooya-labs/pooya-labs-platform/apps/platform/public/brand/pooya-monogram.webp` |
| Pooya.OS | `pooya-labs/pooya-os/public/brand/pooya-os.svg` |
| AuraPulse | `pooya-labs/aurapulse/public/aurapulse-mark.svg` |
| NexusCanvas | `pooya-labs/nexus-canvas/public/nexus-canvas-mark.svg` |
| Lumina Glass | `pooya-labs/lumina-glass/public/lumina-mark.svg` |
| Orbit | `pooya-labs/orbit/app/icon.svg` |
| Aetherflow | `Lumina Glass project-marks/aetherflow.svg` |
| GlobalCart | `pooya-labs/globalcart/app/icon.svg` |
| Salon Booking | `pooya-labs/salon-booking/public/images/shayan-emblem.webp` |

## نسخهٔ فارسی

### معرفی

Pooya.OS یک پورتفولیوی مهندسی تعاملی است که تجربهٔ یک دسکتاپ تحت وب را شبیه‌سازی می‌کند. این محیط شامل پنجره‌های قابل تعامل، داک تطبیقی، ترمینال محلی، بازرس معماری و مجموعهٔ کیس‌استادی‌های پروژه‌هاست.

### نمایش پروژه‌ها و نشان‌ها

هر ۹ پروژه در بخش Projects نشان رسمی خودش را دارد. نشان‌ها از همان منابع تصویری استفاده می‌کنند که در بخش اکوسیستم Lumina Glass به کار رفته‌اند و در فهرست پروژه‌ها و سربرگ جزئیات پروژه نمایش داده می‌شوند. نسبت تصویر اصلی نشان‌ها حفظ می‌شود و پس‌زمینهٔ هر نشان متناسب با شفاف یا روشن بودن فایل انتخاب شده است.

### محدودهٔ اجرا

این نسخه به‌صورت استاتیک روی GitHub Pages منتشر می‌شود. ترمینال فقط فرمان‌های محلی تعریف‌شده در مرورگر را اجرا می‌کند و دسترسی به Shell، API سمت سرور، پایگاه داده یا حساب کاربری ندارد. شاخص‌های FPS و زمان فریم نیز فقط وضعیت رندر همین زبانهٔ مرورگر را نشان می‌دهند.

### توسعه و بررسی

```bash
npm install
npm run typecheck
npm run build
```

برای انتشار، خروجی استاتیک و مسیر پایهٔ `/pooya-os` باید با تنظیمات GitHub Pages سازگار بمانند.
