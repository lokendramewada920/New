import { useParams, Navigate } from "react-router-dom";
import { SEO, breadcrumbSchema } from "../components/seo/SEO";
import { Reveal } from "../components/motion/Reveal";
import { legalPages } from "../data/legal";

const LegalPage = () => {
  const { type } = useParams();
  const page = legalPages[type];
  if (!page) return <Navigate to="/" replace />;

  return (
    <>
      <SEO
        title={`${page.title} | Arts Of Finance`}
        description={`${page.title} — Arts Of Finance, Bhopal. Educational stock market training institute.`}
        path={`/${type}`}
        schema={[breadcrumbSchema([{ name: "Home", path: "/" }, { name: page.title, path: `/${type}` }])]}
      />

      <section className="noise relative overflow-hidden pb-24 pt-40 lg:pt-52" data-testid="legal-page">
        <div className="grid-bg absolute inset-0 opacity-40" />
        <div className="relative mx-auto max-w-3xl px-5 lg:px-8">
          <Reveal>
            <p className="overline-tag">Legal</p>
            <h1 className="mt-4 font-heading text-4xl font-extrabold tracking-tighter text-white sm:text-5xl">{page.title}</h1>
            <p className="mt-4 font-mono text-[11px] uppercase tracking-[0.2em] text-slate-500">{page.updated}</p>
          </Reveal>
          <div className="mt-12 space-y-10">
            {page.sections.map((s, i) => (
              <Reveal key={s.h} delay={i * 0.06}>
                <h2 className="font-heading text-lg font-bold tracking-tight text-white">{s.h}</h2>
                <p className={`mt-3 text-sm leading-[1.9] ${s.p.includes("[") ? "text-slate-500" : "text-slate-400"}`}>{s.p}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default LegalPage;
