import { useRef } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import { BookOpen, ScanSearch, PenLine, Blocks, Scale, BrainCircuit, Send } from "lucide-react";
import { Reveal } from "../motion/Reveal";

const STEPS = [
  { icon: BookOpen, title: "Understand", desc: "Understand the market — how exchanges, participants and price actually work." },
  { icon: ScanSearch, title: "Analyze", desc: "Learn market frameworks — structure, trends, value and volatility." },
  { icon: PenLine, title: "Practice", desc: "Work with charts and examples until concepts become instinct." },
  { icon: Blocks, title: "Build", desc: "Develop structured setups with clear entry, exit and invalidation." },
  { icon: Scale, title: "Manage", desc: "Understand risk — position sizing, stops and drawdown discipline." },
  { icon: BrainCircuit, title: "Discipline", desc: "Develop trading psychology — process over impulse, every session." },
  { icon: Send, title: "Apply", desc: "Apply knowledge responsibly, with risk awareness at every step." },
];

const Journey = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 0.75", "end 0.6"] });
  const lineScale = useSpring(scrollYProgress, { stiffness: 90, damping: 25 });

  return (
    <section className="relative overflow-hidden py-24 lg:py-32" data-testid="learning-journey">
      <div className="pointer-events-none absolute right-0 top-1/3 h-96 w-96 rounded-full bg-fblue/5 blur-3xl" />
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <Reveal className="max-w-2xl">
          <p className="overline-tag">04 — The Learning Journey</p>
          <h2 className="mt-4 font-heading text-3xl font-bold tracking-tighter text-white sm:text-4xl lg:text-5xl">
            Seven Steps. <span className="text-gradient-green">One Transformation.</span>
          </h2>
        </Reveal>

        <div ref={ref} className="relative mx-auto mt-16 max-w-3xl lg:max-w-4xl">
          {/* glowing progress line */}
          <div className="absolute left-[27px] top-0 h-full w-px bg-slate-800 lg:left-1/2" />
          <motion.div
            className="absolute left-[27px] top-0 h-full w-px origin-top bg-bull shadow-[0_0_14px_rgba(0,229,155,0.7)] lg:left-1/2"
            style={{ scaleY: lineScale }}
          />

          <div className="space-y-10 lg:space-y-14">
            {STEPS.map(({ icon: Icon, title, desc }, i) => {
              const left = i % 2 === 0;
              return (
                <Reveal key={title} delay={0.05}>
                  <div className={`relative flex items-start gap-6 lg:w-1/2 ${left ? "lg:pr-14" : "lg:ml-auto lg:pl-14"}`}>
                    <span
                      className={`absolute top-1 z-10 flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border border-bull/30 bg-ink-900 text-bull lg:absolute ${
                        left ? "lg:-right-7 lg:left-auto" : "lg:-left-7"
                      } left-0`}
                    >
                      <Icon className="h-6 w-6" />
                    </span>
                    <div className={`terminal-card ml-20 w-full p-6 lg:ml-0 ${left ? "lg:text-right" : ""}`}>
                      <span className="font-mono text-[10px] tracking-[0.3em] text-bull">{String(i + 1).padStart(2, "0")}</span>
                      <h3 className="mt-2 font-heading text-lg font-bold uppercase tracking-[0.12em] text-white">{title}</h3>
                      <p className="mt-2 text-sm leading-relaxed text-slate-400">{desc}</p>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Journey;
