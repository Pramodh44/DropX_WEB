import { ShieldCheck, ArrowRight, PlayCircle, Bell, Search } from "lucide-react";
import { Reveal } from "./motion";

const MARQUEE_ITEMS = [
  "Recognised in the 2026 Education Technology Leaders Report",
  "120+ institutions onboarded with zero data loss",
  "New partnership: State University Consortium goes live",
  "99.95% uptime sustained through national exam season",
  "Achieved SOC 2 Type II alignment for campus data",
  "500K+ daily learners served across SIS & LMS",
];

export function AchievementMarquee() {
  const items = [...MARQUEE_ITEMS, ...MARQUEE_ITEMS];
  return (
    <div className="navy-gradient overflow-hidden py-2.5">
      <div className="flex w-max animate-marquee items-center gap-10 whitespace-nowrap">
        {items.map((item, i) => (
          <span
            key={i}
            className="flex items-center gap-3 text-xs font-medium tracking-wide text-primary-foreground/85"
          >
            <span className="size-1.5 rounded-full bg-sky" />
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}

const BARS = [42, 58, 50, 72, 66, 88, 78, 92, 84, 96];

const STUDENTS = [
  { name: "Aarav Sharma", meta: "B.Tech CSE · Sem 5", status: "ENROLLED", gpa: "3.84" },
  { name: "Diya Patel", meta: "B.Com · Sem 3", status: "ENROLLED", gpa: "3.71" },
  { name: "Rohan Mehta", meta: "B.Sc Physics · Sem 7", status: "ENROLLED", gpa: "3.92" },
];

export function DashboardMockup() {
  return (
    <div className="relative">
      {/* Floating telemetry chip */}
      <div className="absolute -left-4 -top-5 z-10 animate-float-slow rounded-2xl border border-border bg-card px-4 py-3 card-shadow-lg sm:-left-8">
        <div className="flex items-center gap-2">
          <span className="size-2 rounded-full bg-success animate-pulse-dot" />
          <span className="font-mono text-[10px] font-medium uppercase tracking-widest text-muted-foreground">
            Exam engine · live
          </span>
        </div>
        <div className="mt-1 font-display text-lg font-bold text-foreground">
          48,201 <span className="text-xs font-medium text-muted-foreground">sessions</span>
        </div>
      </div>

      {/* Floating uptime chip */}
      <div className="absolute -bottom-6 -right-3 z-10 animate-float-slow rounded-2xl border border-border bg-card px-4 py-3 card-shadow-lg sm:-right-6" style={{ animationDelay: "1.4s" }}>
        <div className="font-mono text-[10px] font-medium uppercase tracking-widest text-muted-foreground">
          Cluster uptime
        </div>
        <div className="mt-1 font-display text-lg font-bold text-primary">99.95%</div>
      </div>

      {/* Browser window */}
      <div className="overflow-hidden rounded-3xl border border-border bg-card card-shadow-lg">
        <div className="flex items-center gap-3 border-b border-border bg-ice px-4 py-2.5">
          <span className="flex gap-1.5">
            <span className="size-2.5 rounded-full bg-border" />
            <span className="size-2.5 rounded-full bg-border" />
            <span className="size-2.5 rounded-full bg-primary/60" />
          </span>
          <span className="flex-1 rounded-md bg-background px-3 py-1 text-center font-mono text-[10px] text-muted-foreground">
            campusstack.live/console
          </span>
          <Bell className="size-3.5 text-muted-foreground" />
        </div>

        <div className="grid grid-cols-[44px_1fr]">
          {/* Mini sidebar */}
          <div className="flex flex-col items-center gap-3 border-r border-border bg-ice/60 py-4">
            <span className="size-6 rounded-md bg-primary" />
            <span className="size-6 rounded-md bg-accent" />
            <span className="size-6 rounded-md bg-accent" />
            <span className="size-6 rounded-md bg-accent" />
            <span className="size-6 rounded-md bg-accent" />
          </div>

          <div className="space-y-4 p-4 pb-12 sm:p-5 sm:pb-12">
            {/* Toolbar */}
            <div className="flex items-center justify-between">
              <div>
                <div className="font-display text-sm font-bold text-foreground">
                  Northfield University
                </div>
                <div className="text-[10px] text-muted-foreground">
                  Autumn Semester · Week 08 — placeholder data
                </div>
              </div>
              <span className="flex items-center gap-1.5 rounded-full border border-border bg-ice px-2.5 py-1 text-[10px] text-muted-foreground">
                <Search className="size-3" /> Search records
              </span>
            </div>

            {/* Stat tiles */}
            <div className="grid grid-cols-3 gap-2.5">
              {[
                { label: "Active students", value: "12,480", tone: "text-foreground" },
                { label: "Attendance today", value: "94.2%", tone: "text-primary" },
                { label: "Fees reconciled", value: "100%", tone: "text-success" },
              ].map((s) => (
                <div key={s.label} className="rounded-xl border border-border bg-ice/70 p-3">
                  <div className="text-[9px] font-medium uppercase tracking-wider text-muted-foreground">
                    {s.label}
                  </div>
                  <div className={`mt-1 font-display text-base font-bold tabular-nums sm:text-lg ${s.tone}`}>
                    {s.value}
                  </div>
                </div>
              ))}
            </div>

            {/* Live operations strip */}
            <div className="grid grid-cols-1 gap-2 sm:grid-cols-3">
              {[
                { label: "Upcoming exams", value: "12", tone: "text-primary", meta: "Next 7 days" },
                { label: "Pending fees", value: "342", tone: "text-sky", meta: "Needs review" },
                { label: "Notifications", value: "28", tone: "text-success", meta: "8 unread" },
              ].map((s) => (
                <div key={s.label} className="glass-panel rounded-xl p-3">
                  <div className="text-[9px] font-medium uppercase tracking-wider text-muted-foreground">{s.label}</div>
                  <div className={`mt-1 font-display text-lg font-bold tabular-nums ${s.tone}`}>{s.value}</div>
                  <div className="mt-0.5 text-[9px] text-muted-foreground">{s.meta}</div>
                </div>
              ))}
            </div>

            {/* Bar chart */}
            <div className="rounded-xl border border-border bg-[#061A22]/70 p-3">
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-medium uppercase tracking-wider text-muted-foreground">
                  Weekly attendance — placeholder
                </span>
                <span className="font-mono text-[10px] text-primary">+6.4% WoW</span>
              </div>
              <div className="mt-3 flex h-20 items-end gap-1.5">
                {BARS.map((h, i) => (
                  <div
                    key={i}
                    className={`flex-1 origin-bottom rounded-t-sm ${i === BARS.length - 1 ? "bg-primary" : "bg-sky/50"}`}
                    style={{ height: `${h}%`, animation: `bar-grow 0.8s ${0.05 * i}s cubic-bezier(0.2,0.7,0.2,1) both` }}
                  />
                ))}
              </div>
            </div>

            {/* Student rows */}
            <div className="space-y-2">
              {STUDENTS.map((s) => (
                <div
                  key={s.name}
                  className="flex items-center justify-between rounded-xl border border-border bg-[#061A22]/70 px-3 py-2 backdrop-blur"
                >
                  <div className="flex items-center gap-2.5">
                    <span className="grid size-7 place-items-center rounded-full bg-accent font-display text-[10px] font-bold text-primary">
                      {s.name.split(" ").map((n) => n[0]).join("")}
                    </span>
                    <div>
                      <div className="text-xs font-semibold text-foreground">{s.name}</div>
                      <div className="text-[9px] text-muted-foreground">{s.meta}</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="rounded-full bg-secondary px-2 py-0.5 font-mono text-[9px] font-medium text-secondary-foreground">
                      {s.status}
                    </span>
                    <span className="font-mono text-xs font-medium text-foreground">{s.gpa}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export function DashboardSection() {
  return (
    <section id="dashboard" className="relative overflow-hidden border-y border-border bg-[#061A22] py-24">
      <div className="section-grid pointer-events-none absolute inset-0 opacity-50" />
      <div className="pointer-events-none absolute left-1/2 top-0 size-[34rem] -translate-x-1/2 rounded-full bg-primary/10 blur-[120px]" />
      <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-6 lg:grid-cols-[0.72fr_1.28fr]">
        <Reveal>
          <div className="max-w-xl">
            <span className="font-mono text-xs font-medium uppercase tracking-[0.22em] text-primary">
              One connected command center
            </span>
            <h2 className="mt-4 font-display text-3xl font-bold tracking-tight text-foreground text-balance md:text-4xl">
              See the whole institution. Act from one dashboard.
            </h2>
            <p className="mt-4 text-pretty text-muted-foreground md:text-base">
              Bring students, attendance, fees, examinations, events and communications into a single operational view — with the context teams need to move faster.
            </p>
            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              {[
                "Student overview",
                "Attendance trends",
                "Fee reconciliation",
                "Exam operations",
                "Upcoming events",
                "Live notifications",
              ].map((item) => (
                <div key={item} className="glass-panel flex items-center gap-3 rounded-xl px-4 py-3 text-sm text-foreground">
                  <span className="grid size-7 place-items-center rounded-lg bg-primary/10 text-primary">
                    <span className="size-1.5 rounded-full bg-primary" />
                  </span>
                  {item}
                </div>
              ))}
            </div>
          </div>
        </Reveal>
        <Reveal delay={140}>
          <DashboardMockup />
        </Reveal>
      </div>
    </section>
  );
}

export function Hero() {
  return (
    <section
      id="top"
      className="relative w-full bg-[#03141c]"
      aria-label="CampusStack hero"
    >
      <div className="relative w-full">
        {/* Mobile Image (Portrait) */}
        <img
          src="/campusstack-hero-mobile.jpg"
          alt="CampusStack smart-campus platform"
          className="block w-full h-auto md:hidden pointer-events-none"
          fetchPriority="high"
          decoding="async"
        />
        {/* Desktop Image (Landscape) */}
        <img
          src="/campusstack-hero.png"
          alt="CampusStack smart-campus platform with connected education modules"
          className="hidden md:block w-full h-auto pointer-events-none"
          fetchPriority="high"
          decoding="async"
        />

        {/* Scalable click areas for Desktop baked-in buttons */}
        <div 
          className="hidden md:flex absolute justify-between"
          style={{
            top: '37.5%',
            left: '50%',
            transform: 'translateX(-50%)',
            width: '24%', 
            height: '5.5%'
          }}
        >
          <a
            href="#consult"
            aria-label="Get a Demo"
            style={{ width: '45%' }}
            className="h-full rounded-full opacity-0 focus-visible:opacity-100 focus-visible:ring-2 focus-visible:ring-primary focus-visible:outline-none focus-visible:bg-white/10 transition-colors"
          >
            <span className="sr-only">Get a Demo</span>
          </a>
          <a
            href="#platform"
            aria-label="Explore Platform"
            style={{ width: '51%' }}
            className="h-full rounded-full opacity-0 focus-visible:opacity-100 focus-visible:ring-2 focus-visible:ring-primary focus-visible:outline-none focus-visible:bg-white/10 transition-colors"
          >
            <span className="sr-only">Explore Platform</span>
          </a>
        </div>

        {/* Real buttons for Mobile (since portrait image has no baked buttons) */}
        <div className="md:hidden absolute inset-x-0 top-[22%] flex flex-col items-center gap-3 px-6">
          <a
            href="#consult"
            className="flex h-11 w-full max-w-[200px] items-center justify-center rounded-full bg-primary px-7 text-sm font-semibold text-primary-foreground shadow-lg transition-all active:scale-95"
          >
            Get a Demo
          </a>
          <a
            href="#platform"
            className="flex h-11 w-full max-w-[200px] items-center justify-center rounded-full border border-white/30 bg-background/50 backdrop-blur-md px-7 text-sm font-semibold text-white shadow-lg transition-all active:scale-95"
          >
            Explore Platform
          </a>
        </div>
      </div>
    </section>
  );
}
