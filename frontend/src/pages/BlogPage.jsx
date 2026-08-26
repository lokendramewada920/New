import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Clock3 } from "lucide-react";
import { SEO, breadcrumbSchema } from "../components/seo/SEO";
import { Reveal, Stagger, StaggerItem } from "../components/motion/Reveal";
import CTABand from "../components/CTABand";
import { posts, blogCategories } from "../data/blog";

const BlogPage = () => {
  const [cat, setCat] = useState("All");
  const filtered = cat === "All" ? posts : posts.filter((p) => p.category === cat);

  return (
    <>
      <SEO
        title="Market Intelligence Blog | Arts Of Finance Bhopal"
        description="Educational market writing from Arts Of Finance — technical analysis, fundamentals, options, risk management and trading psychology. Educational only, never tips."
        path="/blog"
        schema={[breadcrumbSchema([{ name: "Home", path: "/" }, { name: "Blog", path: "/blog" }])]}
      />

      <section className="noise relative overflow-hidden pb-14 pt-40 lg:pb-20 lg:pt-52" data-testid="blog-hero">
        <div className="grid-bg absolute inset-0 opacity-50" />
        <div className="relative mx-auto max-w-7xl px-5 lg:px-8">
          <Reveal>
            <p className="overline-tag">Market Intelligence</p>
            <h1 className="mt-4 font-heading text-4xl font-extrabold tracking-tighter text-white sm:text-5xl lg:text-6xl">
              Reading The Market, <span className="text-gradient-green">In Writing</span>
            </h1>
            <p className="mt-6 max-w-2xl text-base text-slate-400 lg:text-lg">
              Educational essays from the institute — no tips, no predictions, no noise.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="pb-24 lg:pb-32">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="flex flex-wrap gap-2" data-testid="blog-category-filter">
            {["All", ...blogCategories].map((c) => (
              <button
                key={c}
                onClick={() => setCat(c)}
                data-testid={`blog-filter-${c.toLowerCase().replace(/\s+/g, "-")}`}
                className={`rounded-full border px-4 py-2 font-mono text-[10px] uppercase tracking-[0.15em] transition-colors duration-200 ${
                  cat === c ? "border-bull/60 bg-bull/10 text-bull" : "border-slate-700 text-slate-400 hover:border-slate-500 hover:text-slate-200"
                }`}
              >
                {c}
              </button>
            ))}
          </div>

          <Stagger className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {filtered.map((p) => (
              <StaggerItem key={p.slug}>
                <Link
                  to={`/blog/${p.slug}`}
                  data-testid={`blog-card-${p.slug}`}
                  className="group flex h-full flex-col rounded-2xl border border-slate-800 bg-ink-900/60 p-7 transition-all duration-300 hover:-translate-y-1 hover:border-slate-600"
                >
                  <div className="flex items-center justify-between">
                    <span className="rounded-full border border-gold/30 bg-gold/5 px-3 py-1 font-mono text-[9px] uppercase tracking-[0.18em] text-gold">
                      {p.category}
                    </span>
                    <span className="flex items-center gap-1.5 font-mono text-[10px] text-slate-500">
                      <Clock3 className="h-3 w-3" /> {p.readTime}
                    </span>
                  </div>
                  <h2 className="mt-5 font-heading text-lg font-bold leading-snug tracking-tight text-white transition-colors group-hover:text-bull">
                    {p.title}
                  </h2>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-slate-400">{p.excerpt}</p>
                  <span className="mt-6 inline-flex items-center gap-2 font-heading text-[11px] font-bold uppercase tracking-[0.18em] text-white group-hover:text-bull">
                    Read Article <ArrowRight className="h-3.5 w-3.5 text-bull transition-transform duration-300 group-hover:translate-x-1" />
                  </span>
                </Link>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      <CTABand />
    </>
  );
};

export default BlogPage;
