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
import { Github, ArrowUpRight } from "lucide-react";

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
        className="fixed inset-x-3 bottom-[calc(5.15rem+env(safe-area-inset-bottom))] z-40 flex justify-center pointer-events-none"
        aria-label={lang === "fa" ? "پیوندهای برند" : "Brand links"}
      >
        <div className="pointer-events-auto flex max-w-full items-center gap-2 sm:gap-3 rounded-2xl border border-white/10 bg-slate-950/65 px-3 py-2 shadow-[0_12px_40px_rgba(0,0,0,.35)] backdrop-blur-2xl">
          <div className="flex shrink-0 items-center gap-2 border-e border-white/10 pe-3">
            <img
              src="/pooya-os/brand/pooya-os.svg"
              alt="Pooya.OS"
              width={34}
              height={34}
              className="h-8 w-8 object-contain"
            />
            <span className="hidden text-xs font-semibold tracking-tight text-slate-100 sm:inline">Pooya.OS</span>
          </div>
          <a
            href="https://github.com/pooya-labs"
            target="_blank"
            rel="noreferrer"
            aria-label="Pooya Labs GitHub profile"
            className="group flex min-h-10 shrink-0 items-center gap-2 rounded-xl px-2.5 text-xs text-slate-300 transition-colors hover:bg-white/10 hover:text-white"
          >
            <Github className="h-5 w-5" aria-hidden="true" />
            <span className="hidden sm:inline">GitHub</span>
            <ArrowUpRight className="hidden h-3.5 w-3.5 opacity-60 sm:block" aria-hidden="true" />
          </a>
          <a
            href="https://pooya-labs.github.io/pooya-labs-platform/"
            target="_blank"
            rel="noreferrer"
            aria-label="Pooya Labs Platform"
            className="group flex min-h-10 shrink-0 items-center gap-2 rounded-xl px-2.5 text-xs text-slate-300 transition-colors hover:bg-emerald-400/10 hover:text-emerald-100"
          >
            <img
              src="https://pooya-labs.github.io/pooya-labs-platform/brand/pooya-monogram.webp"
              alt=""
              width={23}
              height={23}
              loading="lazy"
              decoding="async"
              className="h-6 w-6 rounded-md object-contain"
            />
            <span className="hidden sm:inline">Pooya Labs</span>
            <ArrowUpRight className="hidden h-3.5 w-3.5 opacity-60 sm:block" aria-hidden="true" />
          </a>
        </div>
      </footer>

      {/* داک مغناطیسی پایین */}
      <AdaptiveDock />
    </main>
  );
}
