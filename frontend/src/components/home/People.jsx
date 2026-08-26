import { User, Star, Quote, GraduationCap, Award, Briefcase, Sparkles, ExternalLink } from "lucide-react";
import { Reveal, Stagger, StaggerItem } from "../motion/Reveal";
import { site } from "../../config/site";

// ---------------- MENTOR ----------------
export const Mentor = () => (
  <section id="mentor" className="relative border-y border-white/5 bg-ink-900/30 py-24 lg:py-32" data-testid="mentor-section">
    <div className="mx-auto grid max-w-7xl items-center gap-14 px-5 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
      <Reveal className="relative">
        <div className="relative overflow-hidden rounded-2xl border border-white/10">
          {site.mentor.photo ? (
            <img src={site.mentor.photo} alt={`${site.mentor.name} — mentor at Arts Of Finance`} className="h-[460px] w-full object-cover" loading="lazy" />
          ) : (
            <div className="grid-bg flex h-[460px] w-full flex-col items-center justify-center gap-4 bg-ink-900">
              <span className="flex h-20 w-20 items-center justify-center rounded-2xl border border-gold/30 bg-gold/5 text-gold">
                <User className="h-9 w-9" />
              </span>
              <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-slate-500">[ Mentor Photo — To Be Provided ]</span>
            </div>
          )}
          <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-ink-950 to-transparent p-6 pt-16">
            <p className="font-heading text-xl font-bold text-white" data-testid="mentor-name">{site.mentor.name}</p>
            <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-bull">{site.mentor.designation}</p>
          </div>
        </div>
        <div className="absolute -bottom-4 -right-4 -z-10 h-full w-full rounded-2xl border border-gold/20" />
      </Reveal>

      <div>
        <Reveal>
          <p className="overline-tag text-gold">05 — Your Mentor</p>
          <h2 className="mt-4 font-heading text-3xl font-bold tracking-tighter text-white sm:text-4xl lg:text-5xl">
            Learn From Someone Who <span className="text-gradient-gold">Reads Markets Daily</span>
          </h2>
        </Reveal>
        <Stagger className="mt-10 grid gap-4 sm:grid-cols-2">
          {[
            { icon: GraduationCap, label: "Qualifications", value: site.mentor.qualifications },
            { icon: Award, label: "Certifications", value: site.mentor.certifications },
            { icon: Briefcase, label: "Experience", value: site.mentor.experience },
            { icon: Sparkles, label: "Areas of Expertise", value: site.mentor.expertise.join(" · ") },
          ].map(({ icon: Icon, label, value }) => (
            <StaggerItem key={label} className="terminal-card p-5">
              <Icon className="h-4.5 w-4.5 h-5 w-5 text-gold" />
              <p className="mt-2.5 font-mono text-[10px] uppercase tracking-[0.22em] text-slate-500">{label}</p>
              <p className="mt-1 text-sm text-slate-300">{value}</p>
            </StaggerItem>
          ))}
        </Stagger>
        <Reveal delay={0.2}>
          <div className="gold-border mt-8 rounded-xl bg-gold/5 p-6">
            <Quote className="h-5 w-5 text-gold" />
            <p className="mt-3 text-sm italic leading-relaxed text-slate-300" data-testid="mentor-message">
              "{site.mentor.message === "[MENTOR MESSAGE — TO BE PROVIDED]"
                ? "A personal note from your mentor is on its way. Until then — our promise is simple: honest, structured, risk-first market education."
                : site.mentor.message}"
            </p>
          </div>
        </Reveal>
      </div>
    </div>
  </section>
);

// ---------------- TESTIMONIALS (placeholders only — no invented reviews) ----------------
const PLACEHOLDER_REVIEWS = [0, 1, 2];

export const Testimonials = () => (
  <section className="relative py-24 lg:py-32" data-testid="testimonials-section">
    <div className="mx-auto max-w-7xl px-5 lg:px-8">
      <Reveal className="max-w-2xl">
        <p className="overline-tag">06 — Student Voices</p>
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

      <Reveal delay={0.15}>
        <div className="glass mt-8 flex flex-col items-start justify-between gap-5 rounded-2xl p-7 sm:flex-row sm:items-center">
          <div>
            <p className="font-heading text-base font-bold text-white">Google Reviews</p>
            <p className="mt-1 text-sm text-slate-400">
              Our verified Google Business reviews will be linked here. [ GOOGLE REVIEW PROFILE LINK — TO BE PROVIDED ]
            </p>
          </div>
          <span className="inline-flex cursor-not-allowed items-center gap-2 rounded-full border border-white/15 px-6 py-3 font-heading text-xs font-bold uppercase tracking-[0.15em] text-slate-500" data-testid="google-reviews-placeholder-btn">
            View Google Reviews <ExternalLink className="h-3.5 w-3.5" />
          </span>
        </div>
      </Reveal>
    </div>
  </section>
);
