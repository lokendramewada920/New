import { User, Star, Quote, ShieldCheck, Mic2, Sparkles } from "lucide-react";
import { Reveal, Stagger, StaggerItem } from "../motion/Reveal";
import { site, hasValue } from "../../config/site";

// ---------------- MENTORS ----------------
export const Mentor = () => (
  <section id="mentor" className="relative border-y border-white/5 bg-ink-900/30 py-24 lg:py-32" data-testid="mentor-section">
    <div className="mx-auto max-w-7xl px-5 lg:px-8">
      <Reveal className="max-w-3xl">
        <p className="overline-tag text-gold">Your Mentors</p>
        <h2 className="mt-4 font-heading text-3xl font-bold tracking-tighter text-white sm:text-4xl lg:text-5xl">
          Learn From Mentors Who <span className="text-gradient-gold">Read Markets Daily</span>
        </h2>
        <div
          className="gold-border mt-6 inline-flex flex-wrap items-center gap-2.5 rounded-full bg-gold/5 px-5 py-2.5"
          data-testid="sebi-badge"
        >
          <ShieldCheck className="h-4 w-4 text-gold" />
          <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-gold">
            Our mentor is a SEBI Registered Research Analyst · Reg. No. {site.sebiRegistration}
          </span>
        </div>
        <p className="mt-5 text-base text-slate-400">
          A core team of three mentors leads every program — supported by guest experts who join for special
          sessions on live markets, careers and specialised strategies.
        </p>
      </Reveal>

      <Stagger className="mt-14 grid gap-6 md:grid-cols-3">
        {site.mentors.map((m, i) => (
          <StaggerItem key={i} data-testid={`mentor-card-${i}`} className="group relative overflow-hidden rounded-2xl border border-white/10 bg-ink-900/60">
            {m.photo ? (
              <img src={m.photo} alt={`${m.name} — ${m.role} at Arts Of Finance`} className="h-64 w-full object-cover" loading="lazy" />
            ) : (
              <div className="grid-bg flex h-64 w-full flex-col items-center justify-center gap-3 bg-ink-900">
                <span className="flex h-16 w-16 items-center justify-center rounded-2xl border border-gold/30 bg-gold/5 text-gold">
                  <User className="h-7 w-7" />
                </span>
                <span className="font-mono text-[9px] uppercase tracking-[0.25em] text-slate-500">[ Photo — To Be Provided ]</span>
              </div>
            )}
            <div className="p-6">
              <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-gold">{m.role}</p>
              <p className="mt-2 font-heading text-lg font-bold text-white">
                {hasValue(m.name) ? m.name : "Name To Be Announced"}
              </p>
              {m.sebi && (
                <p className="mt-2 flex items-center gap-1.5 font-mono text-[10px] uppercase tracking-wider text-bull">
                  <ShieldCheck className="h-3.5 w-3.5" />
                  SEBI Registered Research Analyst
                </p>
              )}
              {m.sebi && (
                <p className="mt-1 font-mono text-[10px] uppercase tracking-wider text-gold">
                  PG — SEBI NISM, Mumbai
                </p>
              )}
              <p className="mt-3 flex items-center gap-1.5 text-xs text-slate-400">
                <Sparkles className="h-3.5 w-3.5 text-gold" />
                {hasValue(m.expertise) ? m.expertise : "Expertise details coming soon"}
              </p>
            </div>
          </StaggerItem>
        ))}
      </Stagger>

      {/* Guest lectures */}
      <Reveal delay={0.1} className="mt-16">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="overline-tag text-gold">Guest Lectures</p>
            <h3 className="mt-3 font-heading text-2xl font-bold tracking-tighter text-white lg:text-3xl">
              Industry Experts, <span className="text-gradient-gold">In The Classroom</span>
            </h3>
          </div>
          <p className="max-w-md text-sm text-slate-400">
            Special guest sessions by market practitioners — profiles will be announced here.
          </p>
        </div>
      </Reveal>
      <Stagger className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
        {site.guestLecturers.map((g, i) => (
          <StaggerItem
            key={i}
            data-testid={`guest-lecturer-card-${i}`}
            className="rounded-xl border border-dashed border-slate-700 bg-ink-900/40 p-5 text-center"
          >
            <span className="mx-auto flex h-11 w-11 items-center justify-center rounded-full border border-slate-700 text-slate-500">
              <Mic2 className="h-4.5 w-4.5 h-5 w-5" />
            </span>
            <p className="mt-3 font-mono text-[10px] uppercase tracking-wider text-slate-500">Guest Mentor {i + 1}</p>
            <p className="mt-1 font-mono text-[9px] text-slate-600">To Be Announced</p>
          </StaggerItem>
        ))}
      </Stagger>

      <Reveal delay={0.15}>
        <div className="gold-border mt-10 rounded-xl bg-gold/5 p-6">
          <Quote className="h-5 w-5 text-gold" />
          <p className="mt-3 text-sm italic leading-relaxed text-slate-300" data-testid="mentor-message">
            "{site.mentor.message === "[MENTOR MESSAGE — TO BE PROVIDED]"
              ? "A personal note from your mentors is on its way. Until then — our promise is simple: honest, structured, risk-first market education."
              : site.mentor.message}"
          </p>
        </div>
      </Reveal>
    </div>
  </section>
);

// ---------------- TESTIMONIALS (placeholders only — no invented reviews) ----------------
const PLACEHOLDER_REVIEWS = [0, 1, 2];

export const Testimonials = () => (
  <section className="relative py-24 lg:py-32" data-testid="testimonials-section">
    <div className="mx-auto max-w-7xl px-5 lg:px-8">
      <Reveal className="max-w-2xl">
        <p className="overline-tag">05 — Student Voices</p>
        <h2 className="mt-4 font-heading text-3xl font-bold tracking-tighter text-white sm:text-4xl lg:text-5xl">
          Reviews, <span className="text-gradient-green">The Honest Way</span>
        </h2>
        <p className="mt-5 text-base text-slate-400">
          Verified student reviews will appear here exactly as shared with us — names, courses and ratings included.
          We don't publish invented testimonials.
        </p>
      </Reveal>

      <Stagger className="mt-14 grid gap-5 md:grid-cols-3">
        {PLACEHOLDER_REVIEWS.map((i) => (
          <StaggerItem
            key={i}
            data-testid={`testimonial-placeholder-${i}`}
            className="rounded-2xl border border-dashed border-slate-700 bg-ink-900/40 p-7"
          >
            <div className="flex gap-1">
              {Array.from({ length: 5 }).map((_, s) => (
                <Star key={s} className="h-4 w-4 text-slate-700" />
              ))}
            </div>
            <p className="mt-5 font-mono text-xs leading-relaxed text-slate-500">[ Student Review — To Be Provided ]</p>
            <div className="mt-6 flex items-center gap-3 border-t border-slate-800 pt-5">
              <span className="flex h-9 w-9 items-center justify-center rounded-full border border-slate-700 text-slate-600">
                <User className="h-4 w-4" />
              </span>
              <div>
                <p className="font-mono text-[11px] uppercase tracking-wider text-slate-500">[ Student Name ]</p>
                <p className="font-mono text-[10px] text-slate-600">[ Course ]</p>
              </div>
            </div>
          </StaggerItem>
        ))}
      </Stagger>
    </div>
  </section>
);
