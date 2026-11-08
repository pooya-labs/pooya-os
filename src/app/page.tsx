"use client";

import React, { useEffect } from "react";
import { useOSStore } from "@/store/useOSStore";
import TopStatusBar from "@/components/TopStatusBar";
import AdaptiveDock from "@/components/AdaptiveDock";
import WindowFrame from "@/components/WindowFrame";
import AboutBentoApp from "@/components/apps/AboutBentoApp";
import ProjectsApp from "@/components/apps/ProjectsApp";
import TerminalApp from "@/components/apps/TerminalApp";
import ArchitectureApp from "@/components/apps/ArchitectureApp";
import { ArrowUpRight } from "lucide-react";

export default function PooyaOSDesktop() {
  const { isXRayMode, lang, openWindow } = useOSStore();

  useEffect(() => {
    const updateViewportHeight = () => {
      const height = window.visualViewport?.height ?? window.innerHeight;
      document.documentElement.style.setProperty("--pooya-os-viewport-height", `${Math.round(height)}px`);
    };

    updateViewportHeight();
    window.visualViewport?.addEventListener("resize", updateViewportHeight);
    window.addEventListener("resize", updateViewportHeight);
    window.addEventListener("orientationchange", updateViewportHeight);

    return () => {
      window.visualViewport?.removeEventListener("resize", updateViewportHeight);
      window.removeEventListener("resize", updateViewportHeight);
      window.removeEventListener("orientationchange", updateViewportHeight);
      document.documentElement.style.removeProperty("--pooya-os-viewport-height");
    };
  }, []);

  useEffect(() => {
    document.documentElement.lang = lang === "fa" ? "fa" : "en";
    document.documentElement.dir = lang === "fa" ? "rtl" : "ltr";
  }, [lang]);

  return (
    <main
      className={`pooya-os-viewport relative w-full h-[100dvh] min-h-[100svh] overflow-hidden bg-obsidian select-none ${
        isXRayMode ? "xray-active" : ""
      }`}
    >
      {/* پس‌زمینه والپیپر فضایی یا شیدر نوری */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-45 pointer-events-none transition-transform duration-700"
        style={{ backgroundImage: "url('/pooya-os/assets/spatial-bg.webp')" }}
      />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(0,240,255,0.14),transparent_45%),radial-gradient(circle_at_80%_75%,rgba(139,92,246,0.14),transparent_50%)] pointer-events-none" />

      {/* شبکه گرید مهندسی در حالت X-Ray */}
      {isXRayMode && (
        <div className="absolute inset-0 bg-xray-grid bg-xray-size pointer-events-none z-10" />
      )}

      {/* نوار وضعیت بالا */}
      <TopStatusBar />

      {/* میانبرهای روی دسکتاپ/موبایل برای زمانی که همه پنجره‌ها بسته هستند */}
      <div
        dir={lang === "fa" ? "rtl" : "ltr"}
        className="relative z-10 pt-16 px-4 md:px-8 flex flex-wrap gap-3"
      >
        <button
          onClick={() => openWindow("about")}
          className="px-3.5 py-2 rounded-xl bg-slate-900/65 hover:bg-slate-900/90 border border-white/10 text-xs text-slate-200 backdrop-blur-md transition-all"
        >
          {lang === "fa" ? "👤 پروفایل پویا گودرزی" : "👤 Pooya Goodarzi Profile"}
        </button>
        <button
          onClick={() => openWindow("projects")}
          className="px-3.5 py-2 rounded-xl bg-slate-900/65 hover:bg-slate-900/90 border border-white/10 text-xs text-slate-200 backdrop-blur-md transition-all"
        >
          {lang === "fa" ? "🚀 کیس‌استادی‌های فول‌استک" : "🚀 Flagship Case Studies"}
        </button>
      </div>

      {/* پنجره‌های سیستم‌عامل */}
      <WindowFrame id="about">
        <AboutBentoApp />
      </WindowFrame>

      <WindowFrame id="projects">
        <ProjectsApp />
      </WindowFrame>

      <WindowFrame id="terminal">
        <TerminalApp />
      </WindowFrame>

      <WindowFrame id="architecture">
        <ArchitectureApp />
      </WindowFrame>

      {/* Brand footer */}
      <footer
        dir={lang === "fa" ? "rtl" : "ltr"}
        className="fixed inset-x-0 bottom-0 z-40 flex min-h-11 items-center justify-between gap-2 border-t border-white/10 bg-slate-950/95 px-3 py-1.5 shadow-[0_-10px_30px_rgba(0,0,0,.22)] backdrop-blur-xl sm:px-5"
        aria-label={lang === "fa" ? "پیوندهای برند" : "Brand links"}
      >
        <div className="flex min-w-0 items-center gap-2 sm:gap-3">
          <div className="flex shrink-0 items-center gap-2 border-e border-white/10 pe-2 sm:pe-4">
            <img
              src="/pooya-os/brand/pooya-os.svg"
              alt="Pooya.OS"
              width={34}
              height={34}
              className="h-7 w-7 object-contain"
            />
            <span className="text-[11px] font-semibold tracking-tight text-slate-100">Pooya.OS</span>
          </div>
          <a
            href="https://github.com/pooya-labs"
            target="_blank"
            rel="noreferrer"
            aria-label="Pooya Labs GitHub profile"
            className="group flex min-h-9 shrink-0 items-center gap-1.5 rounded-lg px-2 text-[11px] text-slate-300 transition-colors hover:bg-white/10 hover:text-white"
          >
            <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor" aria-hidden="true">
              <path d="M12 .9a11.1 11.1 0 0 0-3.51 21.63c.55.1.76-.24.76-.54v-2.1c-3.1.67-3.76-1.32-3.76-1.32-.5-1.28-1.23-1.62-1.23-1.62-1.01-.69.08-.68.08-.68 1.12.08 1.71 1.15 1.71 1.15 1 .1.77 2.02 3.2 1.54.1-.72.39-1.2.7-1.48-2.48-.28-5.09-1.24-5.09-5.52 0-1.22.44-2.22 1.15-3-.12-.28-.5-1.42.11-2.96 0 0 .94-.3 3.05 1.15a10.6 10.6 0 0 1 5.55 0c2.11-1.45 3.05-1.15 3.05-1.15.61 1.54.23 2.68.11 2.96.72.78 1.15 1.78 1.15 3 0 4.29-2.61 5.23-5.1 5.51.4.35.75 1.03.75 2.08v3.09c0 .3.2.65.77.54A11.1 11.1 0 0 0 12 .9Z"/>
            </svg>
            <span className="inline">GitHub</span>
            <ArrowUpRight className="hidden h-3.5 w-3.5 opacity-60 sm:block" aria-hidden="true" />
          </a>
          <a
            href="https://pooya-labs.github.io/pooya-labs-platform/"
            target="_blank"
            rel="noreferrer"
            aria-label="Pooya Labs Platform"
            className="group flex min-h-9 shrink-0 items-center gap-1.5 rounded-lg px-2 text-[11px] text-slate-300 transition-colors hover:bg-emerald-400/10 hover:text-emerald-100"
          >
            <img
              src="https://pooya-labs.github.io/pooya-labs-platform/brand/pooya-monogram.webp"
              alt=""
              width={23}
              height={23}
              loading="lazy"
              decoding="async"
              className="h-5 w-5 rounded-md object-contain"
            />
            <span className="inline">Pooya Labs</span>
            <ArrowUpRight className="hidden h-3.5 w-3.5 opacity-60 sm:block" aria-hidden="true" />
          </a>
        </div>
      </footer>

      {/* داک مغناطیسی پایین */}
      <AdaptiveDock />
    </main>
  );
}
