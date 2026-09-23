import { GraduationCap, Phone, ArrowRight } from "lucide-react";

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-border/70 bg-[#03141C]/80 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        <a href="#top" className="flex items-center gap-2.5">
          <span className="grid size-9 place-items-center rounded-xl bg-primary text-primary-foreground card-shadow">
            <GraduationCap className="size-5" strokeWidth={2.2} />
          </span>
          <span className="font-display text-lg font-700 font-bold tracking-tight text-foreground">
            Campus<span className="text-primary">Stack</span>
          </span>
        </a>
        <div className="flex items-center gap-5">
          <a
            href="tel:+910000000000"
            className="hidden items-center gap-2 text-sm font-medium text-muted-foreground transition-colors hover:text-primary sm:flex"
          >
            <Phone className="size-4" />
            +91 00000 00000
          </a>
          <a
            href="#consult"
            className="inline-flex h-9 items-center gap-1.5 whitespace-nowrap rounded-full bg-primary px-3.5 text-xs font-semibold text-primary-foreground card-shadow transition-all hover:-translate-y-0.5 hover:bg-royal-deep sm:h-10 sm:px-5 sm:text-sm"
          >
            Book a Consultation
            <ArrowRight className="size-4" />
          </a>
        </div>
      </div>
    </header>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-border bg-[#061A22]">
      <div className="mx-auto max-w-7xl px-6 py-12">
        <div className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-center">
          <div className="flex items-center gap-2.5">
            <span className="grid size-9 place-items-center rounded-xl bg-primary text-primary-foreground">
              <GraduationCap className="size-5" strokeWidth={2.2} />
            </span>
            <div>
              <div className="font-display text-base font-bold tracking-tight">
                Campus<span className="text-primary">Stack</span>
              </div>
              <div className="text-xs text-muted-foreground">
                Mission-critical digital infrastructure for education
              </div>
            </div>
          </div>
          <div className="grid gap-1 text-sm text-muted-foreground">
            <span>hello@yourdomain.com</span>
            <span>+91 00000 00000</span>
          </div>
          <div className="grid gap-1 text-sm text-muted-foreground md:text-right">
            <span>Your office address line one</span>
            <span>City, State — PIN</span>
          </div>
        </div>
        <div className="mt-10 flex flex-col items-start justify-between gap-3 border-t border-border pt-6 text-xs text-muted-foreground sm:flex-row sm:items-center">
          <span>© 2026 CampusStack. All rights reserved.</span>
          <span className="font-mono tracking-wide">
            FERPA · GDPR · SOC 2 aligned infrastructure
          </span>
        </div>
      </div>
    </footer>
  );
}
