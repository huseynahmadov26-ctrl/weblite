import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/sections/Nav";
import { Hero } from "@/components/sections/Hero";
import { Services } from "@/components/sections/Services";
import { WhyUs } from "@/components/sections/WhyUs";
import { Process } from "@/components/sections/Process";
import { Pricing } from "@/components/sections/Pricing";
import { Portfolio } from "@/components/sections/Portfolio";
import { About } from "@/components/sections/About";
import { Stats } from "@/components/sections/Stats";
import { Faq } from "@/components/sections/Faq";
import { Blog } from "@/components/sections/Blog";
import { Testimonials } from "@/components/sections/Testimonials";
import { Contact } from "@/components/sections/Contact";
import { Footer } from "@/components/sections/Footer";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Web Lite - Modern Websites for Modern Businesses" },
      {
        name: "description",
        content:
          "Web Lite is a digital studio building fast, responsive and high-performance websites that help modern businesses grow.",
      },
      {
        property: "og:title",
        content: "Web Lite - Modern Websites for Modern Businesses",
      },
      {
        property: "og:description",
        content:
          "Premium web design and development for ambitious brands. Modern, soft, and effortlessly fast.",
      },
    ],
    links: [
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Instrument+Serif:ital@0;1&display=swap",
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="relative min-h-screen bg-neon-screen text-foreground overflow-hidden">
      <Nav />
      <main>
        <Hero />
        <Services />
        <WhyUs />
        <Process />
        <Stats />
        <Pricing />
        <Portfolio />
        <About />
        <Testimonials />
        <Blog />
        <Faq />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
