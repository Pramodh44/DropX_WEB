import { useState } from "react";
import { Plus, ShieldCheck, Clock, CheckCircle2, ArrowRight } from "lucide-react";
import { Reveal } from "./motion";
import { cn } from "@/lib/utils";

/* ---------------- FAQ ---------------- */

const FAQS = [
  {
    q: "How do you handle data migration from legacy systems?",
    a: "We run automated extraction and sanitization pipelines that map decade-old student records, fee sheets, and transcripts into isolated cloud schemas. Dual-write and shadow-read verification continues until reconciliation reaches 100% parity — only then do we cut over, with zero downtime.",
  },
  {
    q: "Are your platforms compliant with student data privacy standards?",
    a: "Yes. FERPA and GDPR controls are enforced in-platform: encryption at rest and in transit, granular role-based access for deans, teachers, parents, and students, and exportable audit trails for every action taken on student data.",
  },
  {
    q: "What kind of SLA and response guarantees do you offer?",
    a: "A contractual response window of under 15 minutes for critical incidents, backed by dedicated site reliability engineers who monitor telemetry actively through admission surges and exam seasons. You can view the same live telemetry we do.",
  },
  {
    q: "Can we customize the platform to fit our specific workflows?",
    a: "Every module is configurable at the schema and workflow layer — grading rubrics, fee structures, approval chains, and report formats adapt to your institution, not the other way around.",
  },
];

export function Faq() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section className="mx-auto max-w-3xl px-6 py-20">
      <Reveal>
        <div className="text-center">
          <span className="font-mono text-xs font-medium uppercase tracking-[0.22em] text-primary">
            Answers
          </span>
          <h2 className="mt-4 font-display text-3xl font-bold tracking-tight text-foreground text-balance md:text-4xl">
            Frequently asked questions
          </h2>
        </div>
      </Reveal>
      <div className="mt-10 space-y-3">
        {FAQS.map((f, i) => {
          const isOpen = open === i;
          return (
            <Reveal key={f.q} delay={i * 60}>
              <div
                className={cn(
                  "overflow-hidden rounded-2xl border bg-card transition-colors",
                  isOpen ? "border-primary/40 card-shadow" : "border-border",
                )}
              >
                <button
                  type="button"
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
                >
                  <span className="font-display text-sm font-bold text-foreground md:text-base">
                    {f.q}
                  </span>
                  <Plus
                    className={cn(
                      "size-5 shrink-0 text-primary transition-transform duration-300",
                      isOpen && "rotate-45",
                    )}
                  />
                </button>
                <div
                  className={cn(
                    "grid transition-all duration-300 ease-out",
                    isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0",
                  )}
                >
                  <div className="overflow-hidden">
                    <p className="px-6 pb-6 text-sm leading-relaxed text-muted-foreground">
                      {f.a}
                    </p>
                  </div>
                </div>
              </div>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}

/* ---------------- Consultation form ---------------- */

const inputClass =
  "h-11 w-full rounded-xl border border-input bg-background px-4 text-sm text-foreground placeholder:text-muted-foreground/60 outline-none transition-all focus:border-primary focus:ring-2 focus:ring-primary/20";

export function Contact() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <section id="consult" className="dot-grid relative overflow-hidden py-24">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal>
          <div className="overflow-hidden rounded-3xl border border-border card-shadow-lg lg:grid lg:grid-cols-[0.9fr_1.1fr]">
            {/* Left panel */}
            <div className="navy-gradient relative p-8 md:p-12">
              <div className="dot-grid-light pointer-events-none absolute inset-0 opacity-30" />
              <div className="relative">
                <span className="font-mono text-xs font-medium uppercase tracking-[0.22em] text-sky">
                  Begin the transformation
                </span>
                <h2 className="mt-4 font-display text-3xl font-bold leading-tight tracking-tight text-primary-foreground text-balance md:text-4xl">
                  Scope your institution's digital transformation.
                </h2>
                <p className="mt-4 text-sm leading-relaxed text-primary-foreground/70 md:text-base">
                  Connect directly with a solutions architect. We will review your
                  current technical bottlenecks and deliver a migration roadmap
                  within 48 hours.
                </p>
                <ul className="mt-8 space-y-4">
                  {[
                    { icon: ShieldCheck, text: "Protected by NDA — talk to builders, not salespeople" },
                    { icon: Clock, text: "Migration roadmap delivered within 48 hours" },
                    { icon: CheckCircle2, text: "Zero-obligation technical feasibility review" },
                  ].map((item) => (
                    <li key={item.text} className="flex items-center gap-3 text-sm text-primary-foreground/85">
                      <span className="grid size-8 shrink-0 place-items-center rounded-lg bg-primary-foreground/10 text-sky">
                        <item.icon className="size-4" />
                      </span>
                      {item.text}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Form */}
            <div className="bg-card p-8 md:p-12">
              {submitted ? (
                <div className="flex h-full flex-col items-center justify-center py-10 text-center">
                  <span className="grid size-14 place-items-center rounded-full bg-accent text-primary">
                    <CheckCircle2 className="size-7" />
                  </span>
                  <h3 className="mt-5 font-display text-xl font-bold text-foreground">
                    Request received
                  </h3>
                  <p className="mt-2 max-w-sm text-sm leading-relaxed text-muted-foreground">
                    A solutions architect will reach out within one business day to
                    schedule your technical feasibility review.
                  </p>
                </div>
              ) : (
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    setSubmitted(true);
                  }}
                  className="grid gap-4 sm:grid-cols-2"
                >
                  <div>
                    <label className="mb-1.5 block text-xs font-semibold text-foreground">First Name</label>
                    <input required className={inputClass} placeholder="John" />
                  </div>
                  <div>
                    <label className="mb-1.5 block text-xs font-semibold text-foreground">Last Name</label>
                    <input required className={inputClass} placeholder="Doe" />
                  </div>
                  <div className="sm:col-span-2">
                    <label className="mb-1.5 block text-xs font-semibold text-foreground">Work Email</label>
                    <input required type="email" className={inputClass} placeholder="john@university.edu" />
                  </div>
                  <div>
                    <label className="mb-1.5 block text-xs font-semibold text-foreground">Phone Number</label>
                    <input className={inputClass} placeholder="+91 00000 00000" />
                  </div>
                  <div>
                    <label className="mb-1.5 block text-xs font-semibold text-foreground">Institution Name</label>
                    <input required className={inputClass} placeholder="State University" />
                  </div>
                  <div className="sm:col-span-2">
                    <label className="mb-1.5 block text-xs font-semibold text-foreground">
                      Current Bottleneck <span className="font-normal text-muted-foreground">(optional)</span>
                    </label>
                    <textarea
                      rows={3}
                      className="w-full rounded-xl border border-input bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/60 outline-none transition-all focus:border-primary focus:ring-2 focus:ring-primary/20"
                      placeholder="e.g. Exam results take two weeks to compile; fee reconciliation is manual…"
                    />
                  </div>
                  <button
                    type="submit"
                    className="inline-flex h-12 items-center justify-center gap-2 rounded-full bg-primary text-sm font-semibold text-primary-foreground card-shadow transition-all hover:-translate-y-0.5 hover:bg-royal-deep sm:col-span-2"
                  >
                    Request Technical Feasibility Review
                    <ArrowRight className="size-4" />
                  </button>
                  <p className="text-center text-xs text-muted-foreground sm:col-span-2">
                    Protected by NDA. Direct consultation with an engineering lead,
                    not a sales representative.
                  </p>
                </form>
              )}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
