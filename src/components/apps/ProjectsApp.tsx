"use client";

import React, { useState } from "react";
import { useOSStore } from "@/store/useOSStore";
import {
  Blocks,
  Code2,
  ExternalLink,
  Server,
  ShieldCheck,
  Sparkles,
  Workflow,
} from "lucide-react";

const PROJECTS_DATA = [
  {
    id: "pooya-labs-platform",
    logo: "https://raw.githubusercontent.com/pooya-labs/pooya-labs-platform/main/apps/platform/public/brand/pooya-monogram.webp",
    index: "01",
    badge: "PERSONAL ENGINEERING PLATFORM",
    title: { fa: "Pooya Labs Platform", en: "Pooya Labs Platform" },
    subtitle: {
      fa: "خانهٔ اصلی برند شخصی و مجموعه محصولات مهندسی",
      en: "The home of my engineering identity and selected products",
    },
    challenge: {
      fa: "چطور می‌توان هویت حرفه‌ای، پروژه‌ها، مستندات فنی و نوشته‌ها را در یک تجربهٔ منسجم و قابل توسعه گرد هم آورد؟",
      en: "How can a personal engineering identity, projects, technical case studies, and writing live in one coherent, extensible experience?",
    },
    approach: {
      fa: "طراحی و توسعهٔ یک پورتفولیوی دوزبانه با صفحات کیس‌استادی مستقل، کتابخانهٔ رمان‌ها، نمودارهای معماری و انتشار استاتیک.",
      en: "A bilingual portfolio with shareable case studies, a novels library, architecture diagrams, and a static publishing pipeline.",
    },
    proof: {
      fa: "زبان سایت را تغییر بده، کیس‌استادی پروژه‌ها را باز کن و بخش‌های معرفی، سیستم‌ها و کتابخانهٔ نوشته‌ها را بررسی کن.",
      en: "Switch languages, open the project case studies, and explore the profile, systems, and writing library.",
    },
    stack: "React • TypeScript • Vite • GitHub Actions • GitHub Pages",
    boundary: {
      fa: "این وب‌سایت پورتفولیوی عمومی است؛ فضای خصوصی مالک و قابلیت‌های سروری مستقل از نسخهٔ استاتیک هستند.",
      en: "This is the public portfolio; the private owner workspace and server-side capabilities are separate from the static site.",
    },
    live: "https://pooya-labs.github.io/pooya-labs-platform/",
    source: "https://github.com/pooya-labs/pooya-labs-platform",
    logo: "https://pooya-labs.github.io/pooya-labs-platform/brand/pooya-monogram.webp",
    accent: "from-emerald-400/20 via-teal-500/10 to-cyan-400/20",
  },
  {
    id: "pooya-os",
    logo: "https://raw.githubusercontent.com/pooya-labs/pooya-os/main/public/brand/pooya-os.svg",
    index: "02",
    badge: "INTERACTIVE WEB DESKTOP",
    title: { fa: "Pooya.OS", en: "Pooya.OS" },
    subtitle: {
      fa: "یک پورتفولیوی مهندسی با تجربهٔ یک دسکتاپ واقعی",
      en: "An engineering portfolio presented as a spatial desktop",
    },
    challenge: {
      fa: "چطور می‌توان یک پورتفولیو را از صفحه‌ای ثابت به محیطی قابل کشف و تعاملی تبدیل کرد؟",
      en: "How can a portfolio feel like a discoverable, interactive workspace instead of a static page?",
    },
    approach: {
      fa: "مدیریت پنجره‌ها، داک تطبیقی، ترمینال محلی، حالت X-Ray و ناوبری مبتنی بر Zustand در یک خروجی کاملاً استاتیک.",
      en: "A window manager, adaptive dock, local CLI, X-Ray inspector, and Zustand-driven navigation in a fully static build.",
    },
    proof: {
      fa: "پنجره‌ها را جابه‌جا و کوچک کن، X-Ray را روشن کن و دستورهای help، stack و status را در ترمینال اجرا کن.",
      en: "Move and minimize windows, enable X-Ray, and run help, stack, or status in the local terminal.",
    },
    stack: "Next.js 16 • React 19 • TypeScript • Zustand • Tailwind CSS",
    boundary: {
      fa: "ترمینال در مرورگر اجرا می‌شود؛ این نسخه به Shell یا API سمت سرور متصل نیست.",
      en: "The terminal is browser-local; this static deployment has no server shell or API runtime.",
    },
    live: "https://pooya-labs.github.io/pooya-os/",
    source: "https://github.com/pooya-labs/pooya-os",
    accent: "from-cyan-400/20 via-blue-500/10 to-violet-500/20",
  },
  {
    id: "aurapulse",
    logo: "https://raw.githubusercontent.com/pooya-labs/aurapulse/main/public/aurapulse-mark.svg",
    index: "03",
    badge: "MARKET DATA & PAPER TRADING",
    title: { fa: "AuraPulse", en: "AuraPulse" },
    subtitle: {
      fa: "ترمینال بازار با مرزبندی روشن بین داده و شبیه‌سازی",
      en: "A market terminal with a clear boundary between data and simulation",
    },
    challenge: {
      fa: "چطور یک تجربهٔ معاملاتی قابل لمس بسازیم، بدون اینکه دادهٔ نمونه با قیمت واقعی یا سفارش واقعی اشتباه شود؟",
      en: "How do you make a trading interface tangible without confusing sample data with live quotes or real orders?",
    },
    approach: {
      fa: "دریافت فقط‌خواندنی قیمت عمومی BTC، ETH و SOL از بایننس، نمودار SVG و موتور معاملات آزمایشی محلی.",
      en: "Read-only public BTC, ETH, and SOL tickers, an SVG chart, and a local paper-trading engine.",
    },
    proof: {
      fa: "اتصال بازار را بررسی کن، نمادها و بازهٔ زمانی نمودار را تغییر بده و سفارش آزمایشی ثبت کن.",
      en: "Check the market-feed state, switch symbols and chart intervals, then place a paper order.",
    },
    stack: "Next.js 16 • React 19 • TypeScript • SVG • Local paper-trading state",
    boundary: {
      fa: "هیچ سفارش بورسی ارسال نمی‌شود؛ دفتر سفارش، سابقهٔ اولیه و شاخص‌های AI نمایشی هستند.",
      en: "No exchange orders are sent; the order book, seeded history, and AI-style indicators are illustrative.",
    },
    live: "https://pooya-labs.github.io/aurapulse/",
    source: "https://github.com/pooya-labs/aurapulse",
    accent: "from-emerald-400/20 via-cyan-500/10 to-teal-500/20",
  },
  {
    id: "nexuscanvas",
    logo: "https://raw.githubusercontent.com/pooya-labs/nexus-canvas/main/public/nexus-canvas-mark.svg",
    index: "04",
    badge: "SYSTEM ARCHITECTURE STUDIO",
    title: { fa: "NexusCanvas", en: "NexusCanvas" },
    subtitle: {
      fa: "تبدیل ایدهٔ معماری به گراف قابل تحلیل و خروجی",
      en: "Turn an architecture idea into an inspectable graph and export",
    },
    challenge: {
      fa: "چطور وابستگی سرویس‌ها، نقاط شکست و مسیرهای بحرانی را پیش از استقرار قابل مشاهده کنیم؟",
      en: "How can service dependencies, failure points, and critical paths become visible before deployment?",
    },
    approach: {
      fa: "ویرایشگر گراف، تحلیل توپولوژی، شبیه‌سازی بار، همگام‌سازی بین تب‌ها و تولید قالب شروع Docker Compose.",
      en: "A graph editor, topology analysis, local load simulation, same-origin tab sync, and a Docker Compose starter export.",
    },
    proof: {
      fa: "یک قالب را بارگذاری کن، نود اضافه کن، اتصال بساز و سپس خطاهای گراف را در بازرس مشاهده کن.",
      en: "Load a template, add nodes, create dependencies, and inspect graph warnings in the topology panel.",
    },
    stack: "Next.js 16 • React 19 • TypeScript • SVG • BroadcastChannel",
    boundary: {
      fa: "اعداد CPU و Throughput ورودی‌های نمونه‌اند؛ همگام‌سازی فقط بین تب‌های همان مرورگر انجام می‌شود.",
      en: "CPU and throughput values are illustrative inputs; synchronization is limited to tabs in the same browser.",
    },
    live: "https://pooya-labs.github.io/nexus-canvas/",
    source: "https://github.com/pooya-labs/nexus-canvas",
    accent: "from-sky-400/20 via-indigo-500/10 to-emerald-500/20",
  },
  {
    id: "lumina-glass",
    logo: "https://raw.githubusercontent.com/pooya-labs/lumina-glass/main/public/lumina-mark.svg",
    index: "05",
    badge: "OPTICAL & AUDIO LAB",
    title: { fa: "LuminaGlass", en: "LuminaGlass" },
    subtitle: {
      fa: "آزمایشگاه تعاملی اپتیک و پردازش سیگنال در مرورگر",
      en: "An interactive browser lab for optics and signal processing",
    },
    challenge: {
      fa: "چطور می‌توان کنترل‌های بصری و صوتی را به تجربه‌ای قابل آزمایش و قابل ذخیره تبدیل کرد؟",
      en: "How can optical and audio controls become an experience that can be explored and reproduced?",
    },
    approach: {
      fa: "هندسهٔ SVG قابل تنظیم، خروجی PNG، اکولایزر پنج‌باند Web Audio و برد کاری محلی.",
      en: "Adjustable SVG geometry, PNG export, a five-band Web Audio EQ, and a local workflow board.",
    },
    proof: {
      fa: "پارامترهای اپتیکی را تغییر بده، خروجی PNG بگیر و اکولایزر را با سینت‌سایزر یا فایل شخصی آزمایش کن.",
      en: "Tune optical parameters, export a PNG, and test the EQ with the synth or your own audio file.",
    },
    stack: "Next.js 16 • React 19 • TypeScript • SVG/Canvas • Web Audio API",
    boundary: {
      fa: "ورودی صوتی در خود مرورگر پردازش می‌شود؛ بخش اپتیک مولد تصویر هوش مصنوعی نیست.",
      en: "Audio is processed in the browser; the optical studio is not an AI image-generation service.",
    },
    live: "https://pooya-labs.github.io/lumina-glass/",
    source: "https://github.com/pooya-labs/lumina-glass",
    accent: "from-fuchsia-400/20 via-indigo-500/10 to-cyan-400/20",
  },
  {
    id: "orbit",
    logo: "https://raw.githubusercontent.com/pooya-labs/orbit/main/app/icon.svg",
    index: "06",
    badge: "OBSERVABILITY & INCIDENT OPERATIONS",
    title: { fa: "ORBIT", en: "ORBIT" },
    subtitle: {
      fa: "محیطی برای مشاهده‌پذیری، رخدادها و عملیات سرویس",
      en: "An operations workspace for observability and incident response",
    },
    challenge: {
      fa: "چطور وضعیت سرویس‌ها، رخدادها و سیگنال‌های عملیاتی را در یک نمای قابل فهم کنار هم قرار دهیم؟",
      en: "How can service health, incidents, and operational signals be brought together in one understandable workspace?",
    },
    approach: {
      fa: "داشبورد ماژولار با بخش‌های رخداد، هشدار، استقرار، SLO، ممیزی، متریک، لاگ و تریس؛ همراه با مسیر نمایشی داده.",
      en: "A modular dashboard for incidents, alerts, deployments, SLOs, audit, metrics, logs, and traces, with a separate synthetic-data demo path.",
    },
    proof: {
      fa: "بخش‌های مختلف داشبورد را مرور کن و تفاوت دادهٔ نمایشی با زیرساخت عملیاتی مستقل را ببین.",
      en: "Explore the dashboard modules and inspect the boundary between the synthetic demo and the independent engineering stack.",
    },
    stack: "Go • PostgreSQL • OpenTelemetry • Prometheus • Loki • Tempo • Apps Script",
    boundary: {
      fa: "نسخهٔ عمومی شامل دادهٔ مصنوعی است؛ سرویس Go و زیرساخت مشاهده‌پذیری به‌صورت سرویس عمومی میزبانی نشده‌اند.",
      en: "The public demo uses synthetic data; the Go service and observability stack are not hosted as public production services.",
    },
    live: "https://pooya-labs.github.io/orbit/",
    source: "https://github.com/pooya-labs/orbit",
    accent: "from-cyan-400/20 via-indigo-500/10 to-violet-500/20",
  },
  {
    id: "aetherflow",
    logo: "https://raw.githubusercontent.com/pooya-labs/aetherflow/main/public/favicon.svg",
    index: "07",
    badge: "DISTRIBUTED SYSTEMS & CONTROL PLANE",
    title: { fa: "AetherFlow", en: "AetherFlow" },
    subtitle: {
      fa: "پروژه‌ای برای معماری سامانه‌های توزیع‌شده و کنترل‌پلین",
      en: "A distributed-systems and control-plane engineering project",
    },
    challenge: {
      fa: "چطور پردازش، هماهنگی و مشاهده‌پذیری اجزای یک سامانهٔ توزیع‌شده را با مرزهای روشن طراحی کنیم؟",
      en: "How can processing, coordination, and observability be designed across a distributed system with clear boundaries?",
    },
    approach: {
      fa: "معماری مبتنی بر Rust، PostgreSQL و JetStream در کنار اجزای Worker و داشبورد عملیاتی.",
      en: "A Rust, PostgreSQL, and JetStream-oriented architecture alongside Worker components and an operations dashboard.",
    },
    proof: {
      fa: "مستندات و داشبورد عمومی را بررسی کن؛ وضعیت نمایش‌داده‌شدهٔ M07 هنوز با گزارش پیشرفت M08 کاملاً همگام نیست.",
      en: "Review the documentation and public dashboard; the visible M07 milestone has not yet been reconciled with the README's M08 progress.",
    },
    stack: "Rust • PostgreSQL • NATS JetStream • Cloudflare Workers",
    boundary: {
      fa: "اتصال زندهٔ API از مرورگر عمومی تأیید نشده و وضعیت نسخهٔ نمایشی نباید معادل استقرار عملیاتی تلقی شود.",
      en: "A live public browser-to-API connection has not been verified; the demo must not be presented as a production deployment.",
    },
    live: "https://pooya-labs.github.io/aetherflow/",
    source: "https://github.com/pooya-labs/aetherflow",
    accent: "from-violet-400/20 via-fuchsia-500/10 to-cyan-400/20",
  },
  {
    id: "globalcart",
    logo: "https://raw.githubusercontent.com/pooya-labs/globalcart/main/app/icon.svg",
    index: "08",
    badge: "BILINGUAL COMMERCE EXPERIENCE",
    title: { fa: "GlobalCart", en: "GlobalCart" },
    subtitle: {
      fa: "فروشگاه نمایشی با کاتالوگ بزرگ و تجربهٔ خرید دوزبانه",
      en: "A bilingual storefront with a large product catalog",
    },
    challenge: {
      fa: "چطور تجربهٔ کشف و بررسی محصول را با گالری تصاویر و مسیر خرید منسجم در یک فروشگاه واکنش‌گرا ارائه کنیم؟",
      en: "How can product discovery, image galleries, and a coherent shopping flow work together in a responsive storefront?",
    },
    approach: {
      fa: "کاتالوگ محلی هزار محصولی، گالری‌های WebP، مسیر جست‌وجوی کاتالوگ و سبد خرید نمایشی.",
      en: "A local 1,000-product catalog, WebP galleries, catalog discovery, and a simulated cart experience.",
    },
    proof: {
      fa: "محصولات و گالری تصاویر را مرور کن، فیلترها را امتحان کن و مسیر سبد خرید را بررسی کن.",
      en: "Browse products and image galleries, try the filters, and explore the cart flow.",
    },
    stack: "Next.js • TypeScript • Cloudflare Workers • Go • PostgreSQL",
    boundary: {
      fa: "نسخهٔ فعلی 0.2.3-dev است؛ پرداخت، موجودی، ارسال و سفارش واقعی انجام نمی‌شود.",
      en: "The current line is 0.2.3-dev; payments, inventory reservation, shipping, and real order fulfillment are not enabled.",
    },
    live: "https://pooya-labs.github.io/globalcart/",
    source: "https://github.com/pooya-labs/globalcart",
    accent: "from-emerald-400/20 via-lime-500/10 to-teal-500/20",
  },
  {
    id: "salon-booking",
    logo: "https://raw.githubusercontent.com/pooya-labs/salon-booking/main/public/images/shayan-emblem.webp",
    index: "09",
    badge: "APPOINTMENT MANAGEMENT",
    title: { fa: "Salon Booking", en: "Salon Booking" },
    subtitle: {
      fa: "سامانهٔ رزرو نوبت و مدیریت برنامهٔ سالن",
      en: "Appointment booking and salon scheduling",
    },
    challenge: {
      fa: "چطور رزرو نوبت و مدیریت برنامهٔ روزانه را بدون نیاز به سرور اختصاصی در دسترس قرار دهیم؟",
      en: "How can appointment booking and daily schedule management work without requiring a dedicated server?",
    },
    approach: {
      fa: "رابط React و TypeScript با پل ارتباطی Google Apps Script و ذخیره‌سازی Google Sheets، به‌همراه اعلان مدیر.",
      en: "A React and TypeScript interface backed by a Google Apps Script bridge and Google Sheets, with manager notifications.",
    },
    proof: {
      fa: "صفحهٔ رزرو مشتری و پنل مدیریت را بررسی کن؛ نسخهٔ ۱.۰.۰ منتشر شده است.",
      en: "Explore the customer booking flow and management panel; version 1.0.0 has been released.",
    },
    stack: "React • TypeScript • Vite • Google Apps Script • Google Sheets • FCM",
    boundary: {
      fa: "مسیر فعال از Apps Script و Sheets استفاده می‌کند؛ Cloudflare Worker و D1 فقط اسناد بازیابی قدیمی هستند.",
      en: "The active runtime uses Apps Script and Sheets; Cloudflare Worker and D1 are retained only as legacy recovery material.",
    },
    live: "https://pooya-labs.github.io/salon-booking/",
    source: "https://github.com/pooya-labs/salon-booking",
    accent: "from-amber-400/20 via-orange-500/10 to-rose-500/20",
  },
];

const COPY = {
  fa: {
    eyebrow: "SELECTED WORK • 2026",
    heading: "مجموعه‌ای از محصولات و مسئله‌های مهندسی",
    intro: "از پلتفرم شخصی تا ابزارهای مهندسی و محصولات کاربردی؛ هر پروژه مسئله، تصمیم‌های فنی و مرز قابلیت‌های خودش را شفاف نشان می‌دهد.",
    challenge: "مسئله",
    approach: "رویکرد مهندسی",
    proof: "چه چیزی را امتحان کنی؟",
    stack: "پشتهٔ فنی",
    boundary: "مرز قابلیت‌ها",
    live: "اجرای پروژه",
    source: "مشاهدهٔ کد",
    workflow: "روش کار",
    workflowText: "کشف مسئله → مدل‌سازی تجربه و داده → پیاده‌سازی → اعتبارسنجی → انتشار",
    principles: ["قابلیت واقعی، نه ادعای نمایشی", "طراحی واکنش‌گرا و قابل استفاده", "کد قابل نگهداری و قابل بررسی"],
  },
  en: {
    eyebrow: "SELECTED WORK • 2026",
    heading: "A portfolio of products and engineering work.",
    intro: "From a personal engineering platform to practical tools and products, each project explains its problem, technical decisions, and real capability boundaries.",
    challenge: "The challenge",
    approach: "Engineering approach",
    proof: "Try this",
    stack: "Technology",
    boundary: "Capability boundary",
    live: "Launch project",
    source: "Explore source",
    workflow: "How I work",
    workflowText: "Discover → Model the experience and data → Build → Validate → Ship",
    principles: ["Real functionality over inflated claims", "Responsive, usable interfaces", "Maintainable and inspectable code"],
  },
};

export default function ProjectsApp() {
  const { lang } = useOSStore();
  const [selectedId, setSelectedId] = useState<string>("pooya-labs-platform");
  const activeProject = PROJECTS_DATA.find((project) => project.id === selectedId) || PROJECTS_DATA[0];
  const copy = COPY[lang];

  return (
    <div dir={lang === "fa" ? "rtl" : "ltr"} className="space-y-5 text-slate-200">
      <section className="rounded-2xl border border-white/10 bg-gradient-to-br from-slate-900/95 via-slate-950/85 to-cyan-950/25 p-5 md:p-6 space-y-2">
        <span className="font-mono text-[10px] tracking-[0.18em] text-cyan-300">{copy.eyebrow}</span>
        <h2 className="text-xl md:text-2xl font-black text-white">{copy.heading}</h2>
        <p className="max-w-3xl text-xs md:text-sm text-slate-400 leading-relaxed">{copy.intro}</p>
      </section>

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-5 gap-2">
        {PROJECTS_DATA.map((project) => {
          const active = project.id === selectedId;
          return (
            <button
              key={project.id}
              onClick={() => setSelectedId(project.id)}
              aria-pressed={active}
              className={`min-w-0 rounded-xl border p-3 text-start transition-all ${active ? "border-cyan-300/60 bg-cyan-400/10 shadow-[0_0_24px_rgba(34,211,238,0.1)]" : "border-white/10 bg-slate-900/60 hover:bg-slate-800/80"}`}
            >
              <div className="flex items-center justify-between gap-2">
                <span className="font-mono text-[10px] text-cyan-300">{project.index}</span>
              </div>
              <div className="mt-2 flex min-w-0 items-center gap-2.5">
                <span className={`flex h-10 w-10 shrink-0 items-center justify-center overflow-hidden rounded-xl ${project.id === "pooya-labs-platform" ? "border border-white/15 bg-black p-1.5" : ["aurapulse", "nexuscanvas", "globalcart", "aetherflow", "orbit", "salon-booking"].includes(project.id) ? "bg-transparent" : "border border-white/10 bg-white p-1.5"}`}>
                  <img src={project.logo} alt={`${project.title.en} logo`} width={40} height={40} loading="lazy" decoding="async" className="h-full w-full object-contain" />
                </span>
                <span className="min-w-0 text-xs font-bold text-white">{project.title[lang]}</span>
              </div>
              <span className="mt-1 block text-[10px] text-slate-500 truncate">{project.badge}</span>
            </button>
          );
        })}
      </div>

      <article className={`relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br ${activeProject.accent} p-5 md:p-6 space-y-5`}>
        <div className="absolute inset-0 bg-slate-950/55 pointer-events-none" />
        <div className="relative space-y-4">
          <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 border-b border-white/10 pb-4">
            <div className="min-w-0">
              <div className="mb-3 flex flex-wrap items-center gap-3">
                <span className={`flex h-12 w-12 shrink-0 items-center justify-center overflow-hidden rounded-xl ${activeProject.id === "pooya-labs-platform" ? "border border-white/15 bg-black p-2" : ["aurapulse", "nexuscanvas", "globalcart", "aetherflow", "orbit", "salon-booking"].includes(activeProject.id) ? "bg-transparent" : "border border-white/10 bg-white p-2"}`}>
                  <img src={activeProject.logo} alt={`${activeProject.title.en} logo`} width={48} height={48} loading="lazy" decoding="async" className="h-full w-full object-contain" />
                </span>
                {activeProject.id === "pooya-labs-platform" && (
                  <span className="text-[11px] font-semibold text-emerald-200">
                    {lang === "fa" ? "مالک و سازندهٔ پلتفرم" : "Platform owner & creator"}
                  </span>
                )}
              </div>
              <span className="font-mono text-[10px] tracking-wider text-cyan-300">{activeProject.index} / {activeProject.badge}</span>
              <h3 className="mt-1 text-2xl md:text-3xl font-black text-white">{activeProject.title[lang]}</h3>
              <p className="mt-1 text-sm text-slate-300">{activeProject.subtitle[lang]}</p>
            </div>
            <div className="flex flex-wrap gap-2 shrink-0">
              <a href={activeProject.live} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-xl bg-cyan-300 px-3.5 py-2 text-xs font-bold text-slate-950 hover:bg-cyan-200">
                <ExternalLink className="h-3.5 w-3.5" />{copy.live}
              </a>
              <a href={activeProject.source} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-xl border border-white/15 bg-white/5 px-3.5 py-2 text-xs text-white hover:bg-white/10">
                <Code2 className="h-3.5 w-3.5" />{copy.source}
              </a>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            {[
              { title: copy.challenge, body: activeProject.challenge[lang], icon: Sparkles, tone: "text-amber-300" },
              { title: copy.approach, body: activeProject.approach[lang], icon: Workflow, tone: "text-cyan-300" },
              { title: copy.proof, body: activeProject.proof[lang], icon: ShieldCheck, tone: "text-emerald-300" },
            ].map((item) => {
              const Icon = item.icon;
              return (
                <div key={item.title} className="rounded-xl border border-white/10 bg-slate-950/70 p-4 space-y-2">
                  <div className={`flex items-center gap-2 text-xs font-bold ${item.tone}`}>
                    <Icon className="h-4 w-4" />{item.title}
                  </div>
                  <p className="text-xs leading-relaxed text-slate-300">{item.body}</p>
                </div>
              );
            })}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-[1.2fr_1fr] gap-3">
            <div className="rounded-xl border border-white/10 bg-slate-950/65 p-4 space-y-2">
              <div className="flex items-center gap-2 text-xs font-bold text-violet-300"><Code2 className="h-4 w-4" />{copy.stack}</div>
              <p className="font-mono text-[11px] leading-relaxed text-slate-300">{activeProject.stack}</p>
            </div>
            <div className="rounded-xl border border-amber-300/20 bg-amber-400/5 p-4 space-y-2">
              <div className="flex items-center gap-2 text-xs font-bold text-amber-200"><Server className="h-4 w-4" />{copy.boundary}</div>
              <p className="text-xs leading-relaxed text-slate-300">{activeProject.boundary[lang]}</p>
            </div>
          </div>
        </div>
      </article>

      <section className="rounded-2xl border border-white/10 bg-slate-950/75 p-4 md:p-5 space-y-3">
        <div className="flex items-center gap-2 text-sm font-bold text-white"><Blocks className="h-4 w-4 text-cyan-300" />{copy.workflow}</div>
        <p className="text-xs text-slate-300">{copy.workflowText}</p>
        <div className="flex flex-wrap gap-2">
          {copy.principles.map((principle) => (
            <span key={principle} className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-[10px] text-slate-300">{principle}</span>
          ))}
        </div>
      </section>
    </div>
  );
}
