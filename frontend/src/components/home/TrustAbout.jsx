import { Link } from "react-router-dom";
import {
  GraduationCap, Users, MonitorSmartphone, BadgeCheck, LineChart, LifeBuoy,
  Target, Layers, FlaskConical, Compass, ShieldCheck, Infinity as InfinityIcon, ArrowRight,
} from "lucide-react";
import { Reveal, Stagger, StaggerItem } from "../motion/Reveal";
import { site } from "../../config/site";

// ---------------- TRUST STRIP ----------------
const TRUST = [
  { icon: FlaskConical, label: "Practical Learning" },
  { icon: Users, label: "Mentor-Led Training" },
  { icon: MonitorSmartphone, label: "Offline + Online" },
  { icon: BadgeCheck, label: "NISM Learning" },
  { icon: LineChart, label: "Market-Oriented Curriculum" },
  { icon: LifeBuoy, label: "Student Support" },
];

export const TrustStrip = () => (
  <section className="border-b border-white/5 bg-ink-950" data-testid="trust-strip">
    <div className="mx-auto grid max-w-7xl grid-cols-2 gap-px overflow-hidden px-5 py-14 sm:grid-cols-3 lg:grid-cols-6 lg:px-8">
      {TRUST.map(({ icon: Icon, label }, i) => (
        <Reveal key={label} delay={i * 0.06} className="flex flex-col items-center gap-3 px-2 py-4 text-center">
          <span className="flex h-11 w-11 items-center justify-center rounded-xl border border-bull/20 bg-bull/5 text-bull">
            <Icon className="h-5 w-5" />
          </span>
          <span className="font-heading text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-300">{label}</span>
        </Reveal>
      ))}
    </div>
  </section>
);

// ---------------- ABOUT PREVIEW ----------------
export const AboutPreview = () => (
  <section className="relative overflow-hidden py-24 lg:py-32" data-testid="about-section">
    <div className="pointer-events-none absolute right-0 top-0 h-72 w-72 rounded-full bg-fblue/10 blur-3xl" />
    <div className="mx-auto grid max-w-7xl items-center gap-14 px-5 lg:grid-cols-2 lg:px-8">
      <div>
        <Reveal>
          <p className="overline-tag">01 — Who We Are</p>
          <h2 className="mt-4 font-heading text-3xl font-bold tracking-tighter text-white sm:text-4xl lg:text-5xl">
            Where Market Knowledge Meets <span className="text-gradient-green">Practical Learning</span>
          </h2>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-slate-400">
            Arts Of Finance is a stock market training institute in Bhopal built around one belief —
            markets are learned through structure, practice and mentorship, not tips and shortcuts.
            Every program pairs concepts with charts, examples and real market scenarios.
          </p>
        </Reveal>
        <Stagger className="mt-10 grid gap-5 sm:grid-cols-2">
          <StaggerItem className="terminal-card p-6">
            <Target className="h-5 w-5 text-bull" />
            <h3 className="mt-3 font-heading text-sm font-bold uppercase tracking-[0.15em] text-white">Mission</h3>
            <p className="mt-2 text-sm leading-relaxed text-slate-400">
              To make serious, risk-first market education accessible to every learner in Bhopal and beyond.
            </p>
          </StaggerItem>
          <StaggerItem className="terminal-card p-6">
            <Compass className="h-5 w-5 text-gold" />
            <h3 className="mt-3 font-heading text-sm font-bold uppercase tracking-[0.15em] text-white">Vision</h3>
            <p className="mt-2 text-sm leading-relaxed text-slate-400">
              To be Central India's most trusted destination for professional market education.
            </p>
          </StaggerItem>
        </Stagger>
        <Reveal delay={0.2}>
          <Link
            to="/about"
            data-testid="about-read-more-link"
            className="group mt-8 inline-flex items-center gap-2 font-heading text-xs font-bold uppercase tracking-[0.18em] text-bull"
          >
            More About The Institute
            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1.5" />
          </Link>
        </Reveal>
      </div>

      <Reveal delay={0.15} className="relative">
        <div className="relative overflow-hidden rounded-2xl border border-white/10">
          <img
            src="https://images.pexels.com/photos/5831260/pexels-photo-5831260.jpeg?auto=compress&cs=tinysrgb&w=1200"
            alt="Mentor-led practical stock market training environment with live charts"
            className="h-[420px] w-full object-cover"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-ink-950 via-ink-950/30 to-transparent" />
          <div className="glass absolute bottom-5 left-5 right-5 rounded-xl p-5">
            <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-bull">Learning Environment</p>
            <p className="mt-1.5 text-sm text-slate-300">
              Charts on screen. Concepts on the board. A mentor beside you.
            </p>
          </div>
        </div>
        <div className="absolute -left-4 -top-4 -z-10 h-full w-full rounded-2xl border border-bull/15" />
      </Reveal>
    </div>
  </section>
);

// ---------------- WHY US ----------------
const WHY = [
  { icon: LineChart, title: "Market-Focused Curriculum", desc: "Learn concepts designed around real market understanding — not textbook filler." },
  { icon: Layers, title: "Structured Learning", desc: "Progress from fundamentals to advanced concepts along a clear, written path." },
  { icon: FlaskConical, title: "Practical Approach", desc: "Understand concepts through charts, examples and live market scenarios." },
  { icon: Users, title: "Mentor Guidance", desc: "Learn with experienced market educators who review your progress." },
  { icon: ShieldCheck, title: "Risk Awareness", desc: "Understand risk management and disciplined decision-making from day one." },
  { icon: InfinityIcon, title: "Continuous Learning", desc: "Build knowledge beyond the classroom with ongoing student support." },
];

export const WhyUs = () => (
  <section id="why-us" className="grid-bg relative border-y border-white/5 py-24 lg:py-32" data-testid="why-us-section">
    <div className="mx-auto max-w-7xl px-5 lg:px-8">
      <Reveal className="max-w-2xl">
        <p className="overline-tag">02 — Why Arts Of Finance</p>
        <h2 className="mt-4 font-heading text-3xl font-bold tracking-tighter text-white sm:text-4xl lg:text-5xl">
          Learn Directly From a <span className="text-gradient-gold">SEBI-Registered Research Analyst</span>
        </h2>
      </Reveal>
      <Stagger className="mt-14 grid gap-px overflow-hidden rounded-2xl border border-slate-800 bg-slate-800 sm:grid-cols-2 lg:grid-cols-3">
        {WHY.map(({ icon: Icon, title, desc }, i) => (
          <StaggerItem
            key={title}
            data-testid={`why-card-${i}`}
            className="group bg-ink-950 p-8 transition-colors duration-300 hover:bg-ink-900"
          >
            <span className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/[0.03] text-bull transition-all duration-300 group-hover:border-bull/40 group-hover:bg-bull/10">
              <Icon className="h-5 w-5" />
            </span>
            <h3 className="mt-5 font-heading text-base font-bold tracking-tight text-white">{title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-slate-400">{desc}</p>
            <span className="mt-5 block font-mono text-[10px] tracking-[0.3em] text-slate-600 transition-colors duration-300 group-hover:text-bull/60">
              {String(i + 1).padStart(2, "0")} / {String(WHY.length).padStart(2, "0")}
            </span>
          </StaggerItem>
        ))}
      </Stagger>
    </div>
  </section>
);
