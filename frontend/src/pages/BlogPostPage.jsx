import { useParams, Navigate, Link } from "react-router-dom";
import { ArrowLeft, Clock3, CalendarDays } from "lucide-react";
import { SEO, breadcrumbSchema } from "../components/seo/SEO";
import { Reveal } from "../components/motion/Reveal";
import CTABand from "../components/CTABand";
import { getPost } from "../data/blog";
import { MARKET_DISCLAIMER } from "../config/site";

const BlogPostPage = () => {
  const { slug } = useParams();
  const post = getPost(slug);
  if (!post) return <Navigate to="/blog" replace />;

  return (
    <>
      <SEO
        title={`${post.title} | Arts Of Finance Blog`}
        description={post.excerpt}
        path={`/blog/${post.slug}`}
        schema={[
          breadcrumbSchema([{ name: "Home", path: "/" }, { name: "Blog", path: "/blog" }, { name: post.title, path: `/blog/${post.slug}` }]),
          {
            "@context": "https://schema.org",
            "@type": "Article",
            headline: post.title,
            description: post.excerpt,
            datePublished: post.date,
            author: { "@type": "Organization", name: "Arts Of Finance" },
          },
        ]}
      />

      <article className="noise relative overflow-hidden pb-24 pt-40 lg:pt-52" data-testid="blog-post">
        <div className="grid-bg absolute inset-0 opacity-40" />
        <div className="relative mx-auto max-w-3xl px-5 lg:px-8">
          <Reveal>
            <Link to="/blog" data-testid="blog-back-link" className="group inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.2em] text-slate-400 hover:text-bull">
              <ArrowLeft className="h-3.5 w-3.5 transition-transform group-hover:-translate-x-1" /> Market Intelligence
            </Link>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <span className="rounded-full border border-gold/30 bg-gold/5 px-3 py-1 font-mono text-[9px] uppercase tracking-[0.18em] text-gold">{post.category}</span>
              <span className="flex items-center gap-1.5 font-mono text-[10px] text-slate-500"><CalendarDays className="h-3 w-3" /> {post.date}</span>
              <span className="flex items-center gap-1.5 font-mono text-[10px] text-slate-500"><Clock3 className="h-3 w-3" /> {post.readTime}</span>
            </div>
            <h1 className="mt-6 font-heading text-3xl font-extrabold leading-tight tracking-tighter text-white sm:text-4xl lg:text-5xl">
              {post.title}
            </h1>
          </Reveal>

          <Reveal delay={0.1} className="mt-10 space-y-6">
            {post.body.map((para, i) => (
              <p key={i} className="text-base leading-[1.85] text-slate-300">{para}</p>
            ))}
          </Reveal>

          <Reveal delay={0.15} className="mt-12 rounded-xl border border-white/5 bg-white/[0.02] p-5">
            <p className="text-xs leading-relaxed text-slate-500">{MARKET_DISCLAIMER}</p>
          </Reveal>
        </div>
      </article>

      <CTABand title="Learn This Properly — In a Classroom, With a Mentor" sub="Reading is step one. Structured practice is the rest. Book a free demo session." />
    </>
  );
};

export default BlogPostPage;
