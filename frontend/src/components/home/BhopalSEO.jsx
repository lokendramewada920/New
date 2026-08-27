import { Link } from "react-router-dom";
import { MapPin, ArrowRight } from "lucide-react";
import { Reveal } from "../motion/Reveal";
import { seoPages } from "../../data/seoPages";

const BhopalSEO = () => (
  <section className="grid-bg relative border-y border-white/5 py-24 lg:py-32" data-testid="bhopal-seo-section">
    <div className="mx-auto grid max-w-7xl gap-12 px-5 lg:grid-cols-[1.1fr_0.9fr] lg:px-8">
      <Reveal>
        <p className="overline-tag">06 — Bhopal's Market Campus</p>
        <h2 className="mt-4 font-heading text-3xl font-bold tracking-tighter text-white sm:text-4xl lg:text-5xl">
          Stock Market Classes in <span className="text-gradient-green">Bhopal</span>
        </h2>
        <div className="mt-6 space-y-4 text-base leading-relaxed text-slate-400">
          <p>
            Bhopal's investing culture is changing fast — from MP Nagar's coaching hubs to professionals across
            the city learning to participate in markets seriously. Arts Of Finance brings a dedicated,
            mentor-led stock market institute to the heart of that shift.
          </p>
          <p>
            Our share market classes in Bhopal cover the complete arc: stock market foundation for beginners,
            technical and fundamental analysis for serious learners, and advanced tracks in options, crypto
            and forex — with NISM-oriented learning for those building market careers. Classroom batches run
            in Bhopal, and live online batches serve learners across Madhya Pradesh.
          </p>
          <p>
            If you are comparing trading classes in Bhopal, ask every institute the same questions: Is the
            curriculum written and structured? Is risk management taught, or just strategies? Can you attend
            a demo first? We built Arts Of Finance to answer all three with a yes.
          </p>
        </div>
      </Reveal>

      <div className="space-y-4">
        <Reveal delay={0.1} className="terminal-card p-6">
          <div className="flex items-center gap-2.5">
            <MapPin className="h-4 w-4 text-bull" />
            <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-slate-500">Serving Learners Across</p>
          </div>
          <div className="mt-4 flex flex-wrap gap-2">
            {["MP Nagar", "MP Nagar Zone 2", "Arera Colony", "New Market", "Kolar", "Hoshangabad Road", "Lalghati", "Indrapuri", "Awadhpuri", "Minal", "Misrod", "Bhopal + Online"].map((a) => (
              <span key={a} className="rounded-full border border-slate-700 px-3 py-1.5 font-mono text-[10px] uppercase tracking-wider text-slate-400">
                {a}
              </span>
            ))}
          </div>
        </Reveal>
        {seoPages.slice(1).map((p, i) => (
          <Reveal key={p.slug} delay={0.12 + i * 0.06}>
            <Link
              to={`/${p.slug}`}
              data-testid={`bhopal-link-${p.slug}`}
              className="group flex items-center justify-between rounded-xl border border-slate-800 bg-ink-900/50 px-6 py-4 transition-all duration-300 hover:-translate-y-0.5 hover:border-bull/40"
            >
              <span className="font-heading text-sm font-semibold text-white group-hover:text-bull">{p.h1}</span>
              <ArrowRight className="h-4 w-4 text-bull transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </Reveal>
        ))}
      </div>
    </div>
  </section>
);

export default BhopalSEO;
