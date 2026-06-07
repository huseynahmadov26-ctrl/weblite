import { createFileRoute } from "@tanstack/react-router";
import React, { Suspense, lazy } from "react";
import { Nav } from "@/components/sections/Nav";
import { Hero } from "@/components/sections/Hero";
import { Footer } from "@/components/sections/Footer";

// Əsas olmayan bölmələri ilkin paket ölçüsünü azaltmaq üçün gec yüklə
const Services = lazy(() => import("@/components/sections/Services").then(m => ({ default: m.Services })));
const WhyUs = lazy(() => import("@/components/sections/WhyUs").then(m => ({ default: m.WhyUs })));
const Process = lazy(() => import("@/components/sections/Process").then(m => ({ default: m.Process })));
const Pricing = lazy(() => import("@/components/sections/Pricing").then(m => ({ default: m.Pricing })));
const About = lazy(() => import("@/components/sections/About").then(m => ({ default: m.About })));
const Stats = lazy(() => import("@/components/sections/Stats").then(m => ({ default: m.Stats })));
const Faq = lazy(() => import("@/components/sections/Faq").then(m => ({ default: m.Faq })));
const Blog = lazy(() => import("@/components/sections/Blog").then(m => ({ default: m.Blog })));
const Contact = lazy(() => import("@/components/sections/Contact").then(m => ({ default: m.Contact })));

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Web Lite - Müasir bizneslər üçün müasir veb saytlar" },
      {
        name: "description",
        content:
          "Web Lite müasir bizneslərin böyüməsinə kömək edən sürətli, responsive və yüksək performanslı veb saytlar hazırlayan rəqəmsal studiyadır.",
      },
      {
        property: "og:title",
        content: "Web Lite - Müasir bizneslər üçün müasir veb saytlar",
      },
      {
        property: "og:description",
        content:
          "Ambisiyalı brendlər üçün premium veb dizayn və inkişaf. Müasir, yumşaq və rahat sürətli.",
      },
    ],
    links: [
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap",
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="relative min-h-screen bg-neon-screen text-foreground overflow-hidden">
      <div
        aria-hidden
        className="ambient-blur -left-24 top-28 h-72 w-72 rounded-full bg-primary/20"
      />
      <div
        aria-hidden
        className="ambient-blur right-[-6rem] top-[42rem] h-80 w-80 rounded-full bg-slate-500/15"
      />
      <Nav />
      <main>
        <Hero />
        <Suspense fallback={<div className="h-24" />}>
          <Services />
        </Suspense>
        <Suspense fallback={<div className="h-24" />}>
          <WhyUs />
        </Suspense>
        <Suspense fallback={<div className="h-24" />}>
          <Process />
        </Suspense>
        <Suspense fallback={<div className="h-24" />}>
          <Stats />
        </Suspense>
        <Suspense fallback={<div className="h-24" />}>
          <Pricing />
        </Suspense>
        <Suspense fallback={<div className="h-24" />}>
          <About />
        </Suspense>
        <Suspense fallback={<div className="h-24" />}>
          <Blog />
        </Suspense>
        <Suspense fallback={<div className="h-24" />}>
          <Faq />
        </Suspense>
        <Suspense fallback={<div className="h-24" />}>
          <Contact />
        </Suspense>
      </main>
      <Footer />
    </div>
  );
}
