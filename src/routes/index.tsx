import { createFileRoute } from "@tanstack/react-router";
import React, { Suspense, lazy } from "react";
import { Footer } from "@/components/sections/Footer";
import { Hero } from "@/components/sections/Hero";
import { Nav } from "@/components/sections/Nav";

const siteUrl = "https://weblite.az";
const pageTitle = "Web Lite | Web Site Making, Veb Sayt Hazirlanmasi and SEO";
const pageDescription =
  "Web Lite builds fast, modern and SEO optimized websites: business websites, landing pages, e-commerce, UI/UX design, admin panels, hosting setup and support.";
const previewImage = `${siteUrl}/weblite-logo.jpeg`;

const structuredData = [
  {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": `${siteUrl}/#organization`,
    name: "Web Lite",
    url: siteUrl,
    logo: previewImage,
    image: previewImage,
    description: pageDescription,
    email: "weblite280@gmail.com",
    telephone: "+994704362011",
    sameAs: [
      "https://instagram.com/weblite.az",
      "https://www.tiktok.com/@weblite.az",
    ],
    areaServed: ["Azerbaijan", "Worldwide"],
    knowsAbout: [
      "website making",
      "web design",
      "web development",
      "SEO optimization",
      "landing page design",
      "e-commerce websites",
      "admin panels",
    ],
    makesOffer: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Website making and web design",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "SEO optimization and website speed optimization",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Landing page and e-commerce development",
        },
      },
    ],
  },
  {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${siteUrl}/#website`,
    url: siteUrl,
    name: "Web Lite",
    alternateName: ["weblite", "WebLite", "Web Lite Studio"],
    publisher: {
      "@id": `${siteUrl}/#organization`,
    },
    inLanguage: ["en", "az"],
  },
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "How long does website making take?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Most landing pages are ready in 1 to 2 weeks. Multi-page and more complex websites usually take 3 to 6 weeks depending on project scope and content readiness.",
        },
      },
      {
        "@type": "Question",
        name: "Does Web Lite provide hosting setup?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. Web Lite recommends and sets up hosting that fits the project. Hosting costs are calculated separately.",
        },
      },
      {
        "@type": "Question",
        name: "Can I request website changes later?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. Each project includes a revision period, and Web Lite also offers ongoing support for future improvements.",
        },
      },
      {
        "@type": "Question",
        name: "Does Web Lite optimize websites for SEO?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. Web Lite builds SEO optimized websites with clean metadata, structured content, responsive design, performance improvements and search-friendly technical setup.",
        },
      },
    ],
  },
  {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: siteUrl,
      },
    ],
  },
];

const Services = lazy(() =>
  import("@/components/sections/Services").then((m) => ({
    default: m.Services,
  })),
);
const WhyUs = lazy(() =>
  import("@/components/sections/WhyUs").then((m) => ({ default: m.WhyUs })),
);
const Process = lazy(() =>
  import("@/components/sections/Process").then((m) => ({
    default: m.Process,
  })),
);
const Pricing = lazy(() =>
  import("@/components/sections/Pricing").then((m) => ({
    default: m.Pricing,
  })),
);
const About = lazy(() =>
  import("@/components/sections/About").then((m) => ({ default: m.About })),
);
const Stats = lazy(() =>
  import("@/components/sections/Stats").then((m) => ({ default: m.Stats })),
);
const Faq = lazy(() =>
  import("@/components/sections/Faq").then((m) => ({ default: m.Faq })),
);
const Blog = lazy(() =>
  import("@/components/sections/Blog").then((m) => ({ default: m.Blog })),
);
const Contact = lazy(() =>
  import("@/components/sections/Contact").then((m) => ({
    default: m.Contact,
  })),
);

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: pageTitle },
      { name: "description", content: pageDescription },
      {
        name: "keywords",
        content:
          "web site, web site making, website making, weblite, Web Lite, veb sayt hazirlanmasi, sayt hazirlanmasi, web design, website design, SEO optimization, landing page, e-commerce website, biznes sayti",
      },
      { property: "og:title", content: pageTitle },
      { property: "og:description", content: pageDescription },
      { property: "og:url", content: siteUrl },
      { property: "og:image", content: previewImage },
      { property: "og:locale", content: "en_US" },
      { property: "og:locale:alternate", content: "az_AZ" },
      { name: "twitter:title", content: pageTitle },
      { name: "twitter:description", content: pageDescription },
      { name: "twitter:image", content: previewImage },
    ],
    links: [
      { rel: "canonical", href: siteUrl },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap",
      },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Outfit:wght@100;200;300;400;500;600;700;800;900&display=swap",
      },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Exo+2:wght@100;200;300;400;500;600;700;800;900&display=swap",
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-neon-screen text-foreground">
      {structuredData.map((schema) => (
        <script
          key={schema["@type"]}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}
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
