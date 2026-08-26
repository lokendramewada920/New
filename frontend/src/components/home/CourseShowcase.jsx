import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Reveal } from "../motion/Reveal";
import CourseCard from "../CourseCard";
import { courses, getCourse } from "../../data/courses";

// ---------------- COURSE ECOSYSTEM GRID ----------------
export const CourseEcosystem = () => (
  <section className="relative py-24 lg:py-32" data-testid="course-ecosystem">
    <div className="pointer-events-none absolute left-1/2 top-0 h-80 w-80 -translate-x-1/2 rounded-full bg-bull/5 blur-3xl" />
    <div className="mx-auto max-w-7xl px-5 lg:px-8">
      <Reveal className="max-w-3xl">
        <p className="overline-tag">03 — Course Ecosystem</p>
        <h2 className="mt-4 font-heading text-3xl font-bold tracking-tighter text-white sm:text-4xl lg:text-5xl">
          Explore The <span className="text-gradient-green">Market Mastery</span> Ecosystem
        </h2>
        <p className="mt-5 text-base text-slate-400 lg:text-lg">
          One learning destination. Multiple market disciplines.
        </p>
      </Reveal>

      <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {courses.map((c, i) => (
          <div key={c.slug} className={i < 2 ? "lg:col-span-2" : ""}>
            <CourseCard course={c} index={i} tall />
          </div>
        ))}
      </div>
    </div>
  </section>
);

// ---------------- COURSE SPOTLIGHTS (TA / FA / Options / Crypto+Forex) ----------------
const Spotlight = ({ slug, index, flip = false }) => {
  const course = getCourse(slug);
  if (!course) return null;
  return (
    <Reveal delay={0.05}>
      <div
        data-testid={`spotlight-${slug}`}
        className={`group grid items-stretch overflow-hidden rounded-2xl border border-slate-800 bg-ink-900/50 lg:grid-cols-2 ${
          flip ? "lg:[&>*:first-child]:order-2" : ""
        }`}
      >
        <div className="p-8 lg:p-12">
          <p className="font-mono text-[10px] uppercase tracking-[0.3em]" style={{ color: course.accent }}>
            Spotlight {String(index).padStart(2, "0")}
          </p>
          <h3 className="mt-4 font-heading text-2xl font-bold tracking-tighter text-white lg:text-4xl">{course.name}</h3>
          <p className="mt-2 font-heading text-sm font-semibold uppercase tracking-[0.15em] text-slate-400">{course.tagline}</p>
          <p className="mt-5 max-w-lg text-sm leading-relaxed text-slate-400 lg:text-base">{course.description}</p>
          <div className="mt-6 flex flex-wrap gap-2">
            {course.modules.slice(0, 6).map((m) => (
              <span key={m} className="rounded-full border border-slate-700/80 px-3 py-1.5 font-mono text-[10px] uppercase tracking-wider text-slate-400">
                {m}
              </span>
            ))}
            <span className="rounded-full border border-slate-700/80 px-3 py-1.5 font-mono text-[10px] tracking-wider text-slate-500">
              +{course.modules.length - 6} more
            </span>
          </div>
          <Link
            to={`/courses/${course.slug}`}
            data-testid={`spotlight-explore-${slug}`}
            className="group/link mt-8 inline-flex items-center gap-2 font-heading text-xs font-bold uppercase tracking-[0.18em] text-white transition-colors hover:text-bull"
          >
            Explore Course
            <ArrowRight className="h-4 w-4 text-bull transition-transform duration-300 group-hover/link:translate-x-1.5" />
          </Link>
        </div>
        <div className="relative min-h-[260px] overflow-hidden border-t border-slate-800 lg:border-l lg:border-t-0">
          <div className="grid-bg absolute inset-0 opacity-60" />
          <div
            className="absolute inset-0 opacity-20 transition-opacity duration-500 group-hover:opacity-30"
            style={{ background: `radial-gradient(circle at 60% 40%, ${course.accent}33, transparent 65%)` }}
          />
          <div className="absolute inset-0 flex items-center justify-center p-10">
            <div className="w-full max-w-sm space-y-2.5">
              {course.modules.slice(0, 5).map((m, i) => (
                <div
                  key={m}
                  className="flex items-center gap-3 rounded-lg border border-white/5 bg-slate-950/70 px-4 py-2.5 backdrop-blur-sm transition-transform duration-300 group-hover:translate-x-1"
                  style={{ transitionDelay: `${i * 40}ms` }}
                >
                  <span className="font-mono text-[10px] text-slate-600">{String(i + 1).padStart(2, "0")}</span>
                  <span className="font-mono text-[11px] uppercase tracking-wider text-slate-300">{m}</span>
                  <span className="ml-auto h-1 w-1 rounded-full" style={{ background: course.accent }} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Reveal>
  );
};

export const CourseSpotlights = () => (
  <section className="relative py-10 lg:py-16" data-testid="course-spotlights">
    <div className="mx-auto max-w-7xl space-y-6 px-5 lg:px-8">
      <Spotlight slug="technical-analysis" index={1} />
      <Spotlight slug="fundamental-analysis" index={2} flip />
      <Spotlight slug="options-trading" index={3} />
      <div className="grid gap-6 lg:grid-cols-2">
        {["crypto", "forex"].map((slug, i) => {
          const c = getCourse(slug);
          return (
            <Reveal key={slug} delay={i * 0.1}>
              <Link
                to={`/courses/${slug}`}
                data-testid={`spotlight-${slug}`}
                className="group relative block overflow-hidden rounded-2xl border border-slate-800 bg-ink-900/50 p-8 transition-all duration-300 hover:-translate-y-1 hover:border-slate-600 lg:p-10"
              >
                <div
                  className="pointer-events-none absolute -right-14 -top-14 h-44 w-44 rounded-full opacity-10 blur-3xl transition-opacity duration-500 group-hover:opacity-25"
                  style={{ background: c.accent }}
                />
                <p className="font-mono text-[10px] uppercase tracking-[0.3em]" style={{ color: c.accent }}>
                  Spotlight {String(i + 4).padStart(2, "0")}
                </p>
                <h3 className="mt-4 font-heading text-2xl font-bold tracking-tighter text-white">{c.name}</h3>
                <p className="mt-1.5 font-heading text-xs font-semibold uppercase tracking-[0.15em] text-slate-400">{c.tagline}</p>
                <p className="mt-4 text-sm leading-relaxed text-slate-400">{c.description}</p>
                <span className="mt-6 inline-flex items-center gap-2 font-heading text-xs font-bold uppercase tracking-[0.18em] text-white group-hover:text-bull">
                  Explore Course
                  <ArrowRight className="h-4 w-4 text-bull transition-transform duration-300 group-hover:translate-x-1.5" />
                </span>
              </Link>
            </Reveal>
          );
        })}
      </div>
    </div>
  </section>
);
