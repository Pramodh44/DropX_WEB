import {
  Users,
  BookOpen,
  ClipboardCheck,
  Wallet,
  UserPlus,
  CalendarClock,
  Fingerprint,
  Bus,
  Library,
  Briefcase,
  MessageSquare,
  BarChart3,
  X,
  Check,
  ArrowRight,
  GraduationCap,
  HeartHandshake,
  Plug,
} from "lucide-react";
import { Reveal, CountUp } from "./motion";

/* ---------------- Stats band ---------------- */

const STATS = [
  { to: 12, suffix: "+", label: "Years engineering for education" },
  { to: 340, suffix: "+", label: "Institutions migrated & live" },
  { to: 500, suffix: "K+", label: "Daily active learners served" },
  { to: 99.95, decimals: 2, suffix: "%", label: "Peak examination uptime" },
  { to: 45, suffix: "+", label: "Production modules shipped" },
  { prefix: "<", to: 15, suffix: " min", label: "Critical incident response SLA" },
];

export function StatsBand() {
  return (
    <section className="border-y border-border bg-[#061A22]">
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-x-6 gap-y-10 px-6 py-14 sm:grid-cols-3 lg:grid-cols-6">
        {STATS.map((s, i) => (
          <Reveal key={s.label} delay={i * 70}>
            <div className="text-center lg:text-left">
              <div className="font-display text-3xl font-bold tracking-tight text-primary md:text-4xl">
                <CountUp
                  to={s.to}
                  decimals={s.decimals ?? 0}
                  prefix={s.prefix ?? ""}
                  suffix={s.suffix}
                />
              </div>
              <div className="mt-2 text-xs leading-snug text-muted-foreground">{s.label}</div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

/* ---------------- Logo cloud (placeholders) ---------------- */

export function LogoCloud() {
  return (
    <section className="relative mx-auto max-w-7xl px-6 py-16">
      <Reveal>
        <p className="text-center font-mono text-xs uppercase tracking-[0.22em] text-muted-foreground">
          Trusted by institutions across the globe
        </p>
      </Reveal>
      <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-4 lg:grid-cols-8">
        {Array.from({ length: 8 }, (_, i) => (
          <Reveal key={i} delay={i * 50}>
            <div className="grid h-16 place-items-center rounded-xl border border-dashed border-input bg-card transition-colors hover:border-primary/40">
              <span className="flex items-center gap-1.5 text-[10px] font-medium uppercase tracking-wider text-muted-foreground/70">
                <GraduationCap className="size-3.5" />
                Logo {String(i + 1).padStart(2, "0")}
              </span>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

/* ---------------- Platform modules ---------------- */

const MODULE_STORIES = [
  {
    image: "/module-images/module-students.jpg",
    eyebrow: "01 · Student lifecycle",
    title: "One connected record from admission to graduation.",
    description: "Keep every learner's journey in one operational view, from first inquiry through enrollment, academics, attendance and beyond.",
    modules: [
      { icon: Users, name: "Student Information System", desc: "One connected record per learner — admissions to alumni." },
      { icon: UserPlus, name: "Admissions Pipeline", desc: "Inquiry-to-enrollment automation with prerequisite matching." },
    ],
  },
  {
    image: "/module-images/module-academics.jpg",
    eyebrow: "02 · Learning & assessment",
    title: "Bring academics and examinations into one flow.",
    description: "Give faculty and academic teams a unified workspace for courses, learning content, assessment and examination operations.",
    modules: [
      { icon: BookOpen, name: "Learning Management", desc: "Courses, content, and assessments in one high-throughput engine." },
      { icon: ClipboardCheck, name: "Examination Engine", desc: "Proctoring, auto-grading, and result pipelines built for peak load." },
    ],
  },
  {
    image: "/module-images/module-finance.jpg",
    eyebrow: "03 · Finance & intelligence",
    title: "Turn institutional activity into clear financial and analytical signals.",
    description: "Connect fee operations with reporting so leadership can move from fragmented records to timely decisions.",
    modules: [
      { icon: Wallet, name: "Fee & Finance Ledger", desc: "Multi-bank reconciliation, scholarships, and split settlements." },
      { icon: BarChart3, name: "Analytics & Reporting", desc: "Board-ready dashboards and compliance exports on demand." },
    ],
  },
  {
    image: "/module-images/module-operations.jpg",
    eyebrow: "04 · Daily operations",
    title: "Coordinate the moving parts of a modern campus.",
    description: "Replace disconnected schedules and attendance workflows with a shared operational layer that keeps teams aligned.",
    modules: [
      { icon: CalendarClock, name: "Timetable & Scheduling", desc: "Constraint solvers generate conflict-free faculty and hall schedules." },
      { icon: Fingerprint, name: "Biometric Attendance", desc: "Device integrations streaming attendance in real time." },
    ],
  },
  {
    image: "/module-images/module-campus.jpg",
    eyebrow: "05 · Campus services",
    title: "Connect the physical campus to the digital campus.",
    description: "Bring everyday services such as transport and library operations into the same connected ecosystem as the core academic systems.",
    modules: [
      { icon: Bus, name: "Transport Management", desc: "Routes, GPS tracking, and parent notifications built in." },
      { icon: Library, name: "Library Automation", desc: "Cataloguing, circulation, and digital resources in one module." },
    ],
  },
  {
    image: "/module-images/module-connect.jpg",
    eyebrow: "06 · People & communication",
    title: "Keep staff, parents and leadership connected.",
    description: "Give people the right information at the right time, while keeping workforce processes and communication inside one platform.",
    modules: [
      { icon: Briefcase, name: "HR & Payroll", desc: "Faculty lifecycle, leave, and payroll with audit trails." },
      { icon: MessageSquare, name: "Parent Communication", desc: "Targeted announcements, alerts, and two-way messaging." },
    ],
  },
];

export function ModulesGrid() {
  return (
    <section id="platform" className="relative overflow-hidden border-y border-border bg-[#03141C] py-24">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(39,224,208,.08),transparent_42%)]" />
      <div className="relative mx-auto max-w-7xl px-6">
        <Reveal>
          <div className="max-w-3xl">
            <span className="font-mono text-xs font-medium uppercase tracking-[0.22em] text-primary">
              One platform · every module
            </span>
            <h2 className="mt-4 font-display text-3xl font-bold tracking-tight text-foreground text-balance md:text-5xl">
              Six connected layers. One institutional ecosystem.
            </h2>
            <p className="mt-5 max-w-2xl text-pretty text-muted-foreground md:text-base">
              The platform modules are grouped into clear operational layers so visitors can understand how the system works together — without scanning a wall of cards.
            </p>
          </div>
        </Reveal>

        <div className="mt-16 space-y-10 lg:space-y-14">
          {MODULE_STORIES.map((story, i) => {
            const imageFirst = i % 2 === 0;
            return (
              <Reveal key={story.title} delay={i * 60}>
                <article className={`group grid items-stretch overflow-hidden rounded-[2rem] border border-border bg-[#08212B]/70 shadow-[0_20px_70px_-35px_rgba(0,0,0,.8)] backdrop-blur-xl lg:grid-cols-2 ${imageFirst ? "" : "lg:[&>div:first-child]:order-2"}`}>
                  <div className="relative min-h-[280px] overflow-hidden bg-[#061A22] sm:min-h-[360px] lg:min-h-[430px]">
                    <img
                      src={story.image}
                      alt=""
                      loading="lazy"
                      className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-[1.035]"
                    />
                    <div className="absolute inset-0 bg-gradient-to-tr from-[#03141C]/80 via-transparent to-cyan-300/5" />
                    <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[#03141C]/70 to-transparent" />
                    <div className="absolute left-5 top-5 rounded-full border border-white/15 bg-[#03141C]/60 px-3 py-1.5 font-mono text-[10px] uppercase tracking-[0.18em] text-cyan-100 backdrop-blur-md">
                      CampusStack
                    </div>
                  </div>

                  <div className="flex flex-col justify-center p-7 sm:p-9 lg:p-12">
                    <span className="font-mono text-xs font-medium uppercase tracking-[0.2em] text-primary">
                      {story.eyebrow}
                    </span>
                    <h3 className="mt-4 max-w-xl font-display text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
                      {story.title}
                    </h3>
                    <p className="mt-4 max-w-xl text-sm leading-7 text-muted-foreground sm:text-base">
                      {story.description}
                    </p>

                    <div className="mt-7 grid gap-3 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
                      {story.modules.map((m) => (
                        <div key={m.name} className="rounded-2xl border border-primary/15 bg-[#061A22]/75 p-4 transition-colors group-hover:border-primary/25">
                          <div className="flex items-start gap-3">
                            <span className="grid size-9 shrink-0 place-items-center rounded-xl bg-primary/10 text-primary">
                              <m.icon className="size-4" strokeWidth={1.9} />
                            </span>
                            <div>
                              <h4 className="text-sm font-semibold text-foreground">{m.name}</h4>
                              <p className="mt-1 text-xs leading-relaxed text-muted-foreground">{m.desc}</p>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ---------------- Regular → Advanced shift ---------------- */

const LEGACY = [
  "Enrollment figures scattered across five disconnected spreadsheets",
  "Attendance compiled weekly from paper registers",
  "Fee reconciliation done by hand at month end",
  "Board reports rebuilt manually every quarter",
  "Exam results delayed by manual tabulation errors",
];

const ADVANCED = [
  "One connected student record, updated the instant anything changes",
  "Biometric attendance streaming live to leadership dashboards",
  "Automated fee clearing with instant multi-bank reconciliation",
  "Board-ready analytics generated in seconds, not weeks",
  "Exam engines grading and publishing results automatically",
];

export function ShiftSection() {
  return (
    <section className="border-y border-border bg-ice py-20">
      <div className="mx-auto max-w-7xl px-6">
        <Reveal>
          <div className="mx-auto max-w-2xl text-center">
            <span className="font-mono text-xs font-medium uppercase tracking-[0.22em] text-primary">
              The transformation
            </span>
            <h2 className="mt-4 font-display text-3xl font-bold tracking-tight text-foreground text-balance md:text-4xl">
              From regular tools to advanced campus infrastructure.
            </h2>
          </div>
        </Reveal>
        <div className="mt-12 grid items-stretch gap-6 lg:grid-cols-[1fr_auto_1fr]">
          <Reveal>
            <div className="h-full rounded-3xl border border-border bg-card/80 p-7 backdrop-blur-xl">
              <span className="font-mono text-xs font-medium uppercase tracking-[0.18em] text-muted-foreground">
                Before — legacy operations
              </span>
              <ul className="mt-6 space-y-4">
                {LEGACY.map((item) => (
                  <li key={item} className="flex gap-3 text-sm leading-relaxed text-muted-foreground">
                    <X className="mt-0.5 size-4 shrink-0 text-destructive/70" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
          <div className="hidden items-center lg:flex">
            <span className="grid size-12 place-items-center rounded-full bg-primary text-primary-foreground card-shadow-lg">
              <ArrowRight className="size-5" />
            </span>
          </div>
          <Reveal delay={120}>
            <div className="relative h-full overflow-hidden rounded-3xl border border-primary/25 bg-card/80 p-7 backdrop-blur-xl card-shadow-lg">
              <div className="pointer-events-none absolute -right-16 -top-16 size-48 rounded-full bg-primary/10 blur-2xl" />
              <span className="font-mono text-xs font-medium uppercase tracking-[0.18em] text-primary">
                After — the CampusStack platform
              </span>
              <ul className="mt-6 space-y-4">
                {ADVANCED.map((item) => (
                  <li key={item} className="flex gap-3 text-sm leading-relaxed text-foreground">
                    <Check className="mt-0.5 size-4 shrink-0 text-success" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/* ---------------- Deployment framework + terminal ---------------- */

const PHASES = [
  { n: "01", title: "Discovery & Ingestion", desc: "Automated pipelines map decade-old records, fee sheets, and transcripts into isolated cloud schemas.", chip: "0% schema conflict rate" },
  { n: "02", title: "Cloud Engineering", desc: "Cloud-native microservices partition databases to absorb 100K+ concurrent requests during admissions and exams.", chip: "Sub-25ms query latency" },
  { n: "03", title: "Security & Compliance", desc: "Granular RBAC connecting deans, teachers, parents, and students with unified SSO and encrypted audit logs.", chip: "FERPA / GDPR certified" },
  { n: "04", title: "Reliability SLA", desc: "SREs monitor telemetry through exam seasons and admission deadlines with immediate on-call intervention.", chip: "<15 min incident SLA" },
];

const TERMINAL_LINES = [
  { text: "$ campusstack migrate --target northfield-erp", tone: "text-primary-foreground/60" },
  { text: "[ok] schema diff complete · 0 conflicts detected", tone: "text-success" },
  { text: "[run] replaying ledger transactions (412,880 rows)", tone: "text-primary-foreground/70" },
  { text: "[run] LMS engine warm-up · latency 18.4ms", tone: "text-primary-foreground/70" },
  { text: "[ok] FERPA audit trail sealed · hash 8f2a…c41d", tone: "text-sky" },
  { text: "[ok] cutover window armed · zero downtime", tone: "text-success" },
];

export function FrameworkSection() {
  return (
    <section className="navy-gradient dark-section-readable relative overflow-hidden py-24">
      <div className="dot-grid-light pointer-events-none absolute inset-0 opacity-40" />
      <div className="relative mx-auto max-w-7xl px-6">
        <Reveal>
          <div className="max-w-2xl">
            <span className="font-mono text-xs font-medium uppercase tracking-[0.22em] text-sky">
              Structured deployment framework
            </span>
            <h2 className="mt-4 font-display text-3xl font-bold tracking-tight text-[#F3FBFF] text-balance md:text-4xl">
              How we build & guarantee your digital campus.
            </h2>
            <p className="mt-4 text-pretty text-[#C5D8DF]">
              No unexpected downtime or lost transcripts. We execute through a
              rigorous, enterprise-grade engineering lifecycle — each phase with a
              hard, measurable guarantee.
            </p>
          </div>
        </Reveal>

        <div className="mt-14 grid items-start gap-10 lg:grid-cols-2">
          <div className="space-y-4">
            {PHASES.map((p, i) => (
              <Reveal key={p.n} delay={i * 90}>
                <div className="group rounded-2xl border border-primary-foreground/15 bg-primary-foreground/5 p-6 backdrop-blur transition-colors hover:border-sky/50">
                  <div className="flex items-center justify-between gap-4">
                    <span className="font-mono text-xs font-medium uppercase tracking-[0.16em] text-sky">
                      Phase {p.n}
                    </span>
                    <span className="rounded-full border border-sky/30 bg-sky/10 px-3 py-1 font-mono text-[10px] font-medium text-sky">
                      {p.chip}
                    </span>
                  </div>
                  <h3 className="mt-3 font-display text-lg font-bold text-[#F3FBFF]">
                    {p.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-[#AFC6CF]">
                    {p.desc}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={150}>
            <div className="lg:sticky lg:top-24">
              <div className="overflow-hidden rounded-2xl border border-primary-foreground/15 bg-navy-deep/90 card-shadow-lg">
                <div className="flex items-center justify-between border-b border-primary-foreground/10 px-5 py-3">
                  <span className="font-mono text-xs text-sky">database-sanitizer v2.4</span>
                  <span className="flex items-center gap-1.5 font-mono text-[10px] uppercase tracking-widest text-success">
                    <span className="size-1.5 rounded-full bg-success animate-pulse-dot" />
                    Connected
                  </span>
                </div>
                <div className="space-y-2 p-5 font-mono text-xs leading-relaxed">
                  {TERMINAL_LINES.map((line, i) => (
                    <div
                      key={i}
                      className={`animate-rise ${line.tone}`}
                      style={{ animationDelay: `${0.35 * i + 0.2}s` }}
                    >
                      {line.text}
                    </div>
                  ))}
                  <div className="text-primary-foreground/50">
                    ▍ <span className="animate-blink text-sky">awaiting confirmation…</span>
                  </div>
                </div>
                <div className="border-t border-primary-foreground/10 px-5 py-4">
                  <div className="flex items-center justify-between font-mono text-[10px] uppercase tracking-widest text-primary-foreground/50">
                    <span>Migration progress</span>
                    <span className="text-success">100% verified</span>
                  </div>
                  <div className="relative mt-2 h-1.5 overflow-hidden rounded-full bg-primary-foreground/10">
                    <div className="absolute inset-y-0 left-0 w-full rounded-full bg-success/80" />
                    <div className="absolute inset-y-0 w-1/3 animate-sweep bg-gradient-to-r from-transparent via-sky/70 to-transparent" />
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/* ---------------- Why us ---------------- */

const WHY = [
  {
    icon: GraduationCap,
    title: "Built for Education, Not Generic SaaS",
    desc: "Designed around academic calendars, complex grading rubrics, and dynamic semester transitions — never a repurposed business tool.",
  },
  {
    icon: HeartHandshake,
    title: "Dedicated SLA & Lifecycle Maintenance",
    desc: "We assign dedicated site reliability engineers who monitor performance through admission surges and exam seasons.",
  },
  {
    icon: Plug,
    title: "Seamless API Integrations",
    desc: "Out-of-the-box support for payment gateways, biometric systems, video conferencing, and government reporting portals.",
  },
];

export function WhyUs() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-20">
      <Reveal>
        <div className="max-w-2xl">
          <span className="font-mono text-xs font-medium uppercase tracking-[0.22em] text-primary">
            Why institutions choose us
          </span>
          <h2 className="mt-4 font-display text-3xl font-bold tracking-tight text-foreground text-balance md:text-4xl">
            Infrastructure partners, not software vendors.
          </h2>
        </div>
      </Reveal>
      <div className="mt-10 grid gap-5 md:grid-cols-3">
        {WHY.map((w, i) => (
          <Reveal key={w.title} delay={i * 90}>
            <div className="h-full rounded-2xl border border-border bg-card/80 p-7 backdrop-blur-xl transition-all hover:-translate-y-1 hover:border-primary/40 hover:card-shadow">
              <span className="grid size-11 place-items-center rounded-xl bg-primary text-primary-foreground card-shadow">
                <w.icon className="size-5" strokeWidth={1.9} />
              </span>
              <h3 className="mt-5 font-display text-base font-bold text-foreground">{w.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{w.desc}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

/* ---------------- Testimonials (placeholders) ---------------- */

const QUOTES = [
  {
    quote: "Placeholder testimonial — describe how the migration cut your reporting time from days to minutes, and how leadership finally trusts the numbers.",
    name: "Dr. Placeholder Name",
    role: "Principal · Partner School",
  },
  {
    quote: "Placeholder testimonial — highlight exam-season reliability: thousands of concurrent submissions with zero downtime and instant results.",
    name: "Prof. Placeholder Name",
    role: "Dean · Partner College",
  },
  {
    quote: "Placeholder testimonial — call out the dedicated SRE support and the 48-hour roadmap that de-risked your board's decision.",
    name: "Placeholder Name",
    role: "Registrar · Partner University",
  },
];

export function Testimonials() {
  return (
    <section className="border-y border-border bg-ice py-20">
      <div className="mx-auto max-w-7xl px-6">
        <Reveal>
          <div className="max-w-2xl">
            <span className="font-mono text-xs font-medium uppercase tracking-[0.22em] text-primary">
              In their words
            </span>
            <h2 className="mt-4 font-display text-3xl font-bold tracking-tight text-foreground text-balance md:text-4xl">
              Institutions that made the shift.
            </h2>
          </div>
        </Reveal>
        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {QUOTES.map((q, i) => (
            <Reveal key={i} delay={i * 90}>
              <figure className="flex h-full flex-col justify-between rounded-2xl border border-border bg-card/80 p-7 backdrop-blur-xl card-shadow">
                <blockquote className="text-sm leading-relaxed text-foreground">
                  “{q.quote}”
                </blockquote>
                <figcaption className="mt-6 flex items-center gap-3 border-t border-border pt-4">
                  <span className="grid size-10 place-items-center rounded-full bg-accent font-display text-xs font-bold text-primary">
                    {q.name.split(" ").slice(-2).map((n) => n[0]).join("")}
                  </span>
                  <div>
                    <div className="text-sm font-semibold text-foreground">{q.name}</div>
                    <div className="text-xs text-muted-foreground">{q.role}</div>
                  </div>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
