import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { SEO } from "../components/seo/SEO";

const NotFoundPage = () => (
  <>
    <SEO title="Page Not Found | Arts Of Finance" description="The page you are looking for does not exist." path="/404" />
    <section className="noise relative flex min-h-screen items-center overflow-hidden" data-testid="not-found-page">
      <div className="grid-bg absolute inset-0 opacity-50" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(0,229,155,0.06),transparent_55%)]" />
      <div className="relative mx-auto max-w-2xl px-5 text-center">
        <p className="font-mono text-[11px] uppercase tracking-[0.3em] text-bull">Error 404</p>
        <h1 className="mt-4 font-heading text-6xl font-extrabold tracking-tighter text-white sm:text-7xl">
          Off The <span className="text-gradient-green">Charts</span>
        </h1>
        <p className="mx-auto mt-5 max-w-md text-base text-slate-400">
          This page moved, or never existed. The market always offers another entry — so do we.
        </p>
        <Link
          to="/"
          data-testid="not-found-home-btn"
          className="btn-glow mt-9 inline-flex items-center gap-2 rounded-full bg-bull px-7 py-3.5 font-heading text-sm font-bold uppercase tracking-[0.12em] text-ink-950 transition-transform duration-300 hover:-translate-y-0.5"
        >
          <ArrowLeft className="h-4 w-4" /> Back To Home
        </Link>
      </div>
    </section>
  </>
);

export default NotFoundPage;
