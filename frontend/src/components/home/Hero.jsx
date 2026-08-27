import { useRef } from "react";
import { Link } from "react-router-dom";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, ChevronDown } from "lucide-react";
import CandleField from "../market/CandleField";
import MarketCards from "../market/MarketCards";
import { LineReveal } from "../motion/Reveal";
import { BookDemoButton, WhatsAppButton } from "../ContactActions";

const TICKER = [
  "Technical Analysis", "Fundamental Analysis", "Options Trading", "Crypto Market",
  "Forex Market", "Stock Market Foundation", "NISM Learning", "Risk Management", "Trading Psychology",
];

const Hero = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const chartY = useTransform(scrollYProgress, [0, 1], [0, 140]);
  const chartOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0.15]);
  const cardsY = useTransform(scrollYProgress, [0, 1], [0, -70]);

  return (
    <section ref={ref} className="noise relative overflow-hidden" data-testid="hero-section">
      {/* Animated market environment */}
      <motion.div className="absolute inset-0" style={{ y: chartY, opacity: chartOpacity }}>
        <CandleField />
      </motion.div>
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(45,125,210,0.10),transparent_55%)]" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,rgba(0,229,155,0.07),transparent_55%)]" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-ink-950 to-transparent" />

      <div className="relative mx-auto grid max-w-7xl gap-14 px-5 pb-20 pt-36 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:px-8 lg:pb-28 lg:pt-44">
        <div>
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="inline-flex items-center gap-2.5 rounded-full border border-bull/25 bg-bull/5 px-4 py-2"
          >
            <span className="relative flex h-1.5 w-1.5">
              <span className="absolute h-full w-full animate-pulse-dot rounded-full bg-bull" />
              <span className="relative h-1.5 w-1.5 rounded-full bg-bull" />
            </span>
            <span className="font-mono text-[10px] uppercase tracking-[0.28em] text-bull">
              Best Stock Market Training in Bhopal
            </span>
          </motion.div>

          <h1 className="mt-7 font-heading text-4xl font-extrabold leading-[1.05] tracking-tighter text-white sm:text-5xl lg:text-6xl">
            <LineReveal text="MASTER THE MARKET." delay={0.25} />
            <LineReveal
              text="LEARN FROM A SEBI REGISTERED"
              delay={0.42}
              className="text-gradient-green mt-2 text-[0.52em] leading-snug"
            />
            <LineReveal
              text="RESEARCH ANALYST & PG FROM"
              delay={0.52}
              className="text-gradient-green text-[0.52em] leading-snug"
            />
            <LineReveal
              text="SEBI NISM, MUMBAI"
              delay={0.62}
              className="text-gradient-gold text-[0.52em] leading-snug"
            />
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.7 }}
            className="mt-6 max-w-xl text-base leading-relaxed text-slate-400 lg:text-lg"
          >
            Learn Technical Analysis, Fundamental Analysis, Options, Crypto, Forex and advanced market
            concepts through structured, practical and mentor-led learning.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.85 }}
            className="mt-9 flex flex-wrap items-center gap-4"
          >
            <BookDemoButton testId="hero-book-demo-btn" />
            <Link
              to="/courses"
              data-testid="hero-explore-courses-btn"
              className="group inline-flex items-center gap-2 rounded-full border border-white/15 px-7 py-3.5 font-heading text-sm font-bold uppercase tracking-[0.12em] text-white transition-all duration-300 hover:-translate-y-0.5 hover:border-white/35"
            >
              Explore Courses
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
            <WhatsAppButton testId="hero-whatsapp-btn" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.1 }}
            className="mt-12 flex flex-wrap items-center gap-x-6 gap-y-3 font-mono text-[10px] uppercase tracking-[0.2em] text-slate-500"
          >
            <span className="text-gold" data-testid="hero-sebi-line">SEBI Registered Research Analyst Mentor</span>
            <span className="h-3 w-px bg-slate-700" />
            <span>Offline + Online</span>
            <span className="h-3 w-px bg-slate-700" />
            <span>Mentor-Led</span>
            <span className="h-3 w-px bg-slate-700" />
            <span>Risk-First Curriculum</span>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.55, ease: [0.22, 1, 0.36, 1] }}
          style={{ y: cardsY }}
          className="animate-float"
        >
          <MarketCards />
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4 }}
        className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 lg:block"
      >
        <ChevronDown className="h-5 w-5 animate-bounce text-slate-500" />
      </motion.div>

      {/* Editorial marquee */}
      <div className="relative border-y border-white/5 bg-ink-900/40 py-4 backdrop-blur-sm">
        <div className="flex overflow-hidden" data-testid="discipline-marquee">
          <div className="flex min-w-full shrink-0 animate-marquee items-center gap-10 pr-10">
            {[...TICKER, ...TICKER].map((t, i) => (
              <span key={i} className="flex items-center gap-10 whitespace-nowrap">
                <span className="font-heading text-xs font-semibold uppercase tracking-[0.3em] text-slate-400">{t}</span>
                <span className="text-[8px] text-gold">◆</span>
              </span>
            ))}
          </div>
          <div aria-hidden className="flex min-w-full shrink-0 animate-marquee items-center gap-10 pr-10">
            {[...TICKER, ...TICKER].map((t, i) => (
              <span key={i} className="flex items-center gap-10 whitespace-nowrap">
                <span className="font-heading text-xs font-semibold uppercase tracking-[0.3em] text-slate-400">{t}</span>
                <span className="text-[8px] text-gold">◆</span>
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
