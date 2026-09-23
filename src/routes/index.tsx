import { createFileRoute } from "@tanstack/react-router";
import { Footer } from "@/components/landing/chrome";
import { Hero, DashboardSection } from "@/components/landing/hero";
import {
  StatsBand,
  LogoCloud,
  ModulesGrid,
  ShiftSection,
  FrameworkSection,
  WhyUs,
  Testimonials,
} from "@/components/landing/sections";
import { Faq, Contact } from "@/components/landing/conversion";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "CampusStack — Enterprise EdTech Engineering for Schools & Colleges" },
      {
        name: "description",
        content:
          "We architect, scale, and guarantee mission-critical education systems: academic ERPs, LMS engines, examination platforms, and campus finance ledgers for schools and colleges.",
      },
      { property: "og:title", content: "CampusStack — Enterprise EdTech Engineering" },
      {
        property: "og:description",
        content:
          "Zero-downtime legacy migrations, real-time exam telemetry, and guaranteed SLAs for schools and colleges.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background font-sans text-foreground">
      <main>
        <Hero />
        <StatsBand />
        <LogoCloud />
        <ModulesGrid />
        <DashboardSection />
        <ShiftSection />
        <FrameworkSection />
        <WhyUs />
        <Testimonials />
        <Faq />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
