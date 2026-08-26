import { Navigate } from "react-router-dom";
import { CheckCircle2 } from "lucide-react";
import { SEO, breadcrumbSchema } from "../components/seo/SEO";
import { Reveal } from "../components/motion/Reveal";
import CourseCard from "../components/CourseCard";
import CTABand from "../components/CTABand";
import MapSection from "../components/MapSection";
import { getSeoPage } from "../data/seoPages";
import { getCourse } from "../data/courses";

const SEOLandingPage = ({ slug }) => {
  const page = getSeoPage(slug);
  if (!page) return <Navigate to="/" replace />;

  return (
    <>
      <SEO
        title={page.title}
        description={page.description}
        path={`/${page.slug}`}
        schema={[breadcrumbSchema([{ name: "Home", path: "/" }, { name: page.h1, path: `/${page.slug}` }])]}
      />

      <section className="noise relative overflow-hidden pb-16 pt-40 lg:pb-24 lg:pt-52" data-testid="seo-page-hero">
        <div className="grid-bg absolute inset-0 opacity-50" />
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(0,229,155,0.07),transparent_55%)]" />
        <div className="relative mx-auto max-w-7xl px-5 lg:px-8">
          <Reveal>
            <p className="overline-tag">Arts Of Finance · Bhopal</p>
            <h1 className="mt-4 max-w-3xl font-heading text-4xl font-extrabold tracking-tighter text-white sm:text-5xl lg:text-6xl">
              {page.h1}
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-relaxed text-slate-400 lg:text-lg">{page.intro}</p>
          </Reveal>
        </div>
      </section>

      <section className="py-16 lg:py-24">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 lg:grid-cols-[1.1fr_0.9fr] lg:px-8">
          <Reveal className="space-y-5 text-base leading-relaxed text-slate-400">
            {page.body.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </Reveal>
          <Reveal delay={0.1} className="terminal-card h-fit p-7">
            <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-slate-500">Why Learners Choose Us</p>
            <ul className="mt-5 space-y-3.5">
              {page.highlights.map((h) => (
                <li key={h} className="flex items-start gap-3 text-sm text-slate-300">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-bull" />
                  {h}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      <section className="pb-16 lg:pb-24">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <Reveal>
            <h2 className="font-heading text-2xl font-bold tracking-tighter text-white lg:text-3xl">Programs To Explore</h2>
          </Reveal>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {page.relatedCourses.map((slug, i) => {
              const c = getCourse(slug);
              return c ? <CourseCard key={slug} course={c} index={i} tall /> : null;
            })}
          </div>
        </div>
      </section>

      <CTABand />
      <MapSection />
    </>
  );
};

export default SEOLandingPage;
