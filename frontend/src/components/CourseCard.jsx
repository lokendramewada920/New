import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import * as icons from "lucide-react";
import { ArrowRight } from "lucide-react";

const CourseIcon = ({ name, className }) => {
  const Icon = icons[name] || icons.CandlestickChart;
  return <Icon className={className} />;
};

const CourseCard = ({ course, index = 0, tall = false }) => (
  <motion.div
    initial={{ opacity: 0, y: 28 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-60px" }}
    transition={{ duration: 0.6, delay: (index % 3) * 0.1, ease: [0.22, 1, 0.36, 1] }}
    className={tall ? "h-full" : ""}
  >
    <Link
      to={`/courses/${course.slug}`}
      data-testid={`course-card-${course.slug}`}
      className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-slate-800 bg-ink-900/70 p-6 transition-all duration-300 hover:-translate-y-1.5 hover:border-slate-600 lg:p-7"
    >
      <div
        className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full opacity-[0.08] blur-3xl transition-opacity duration-500 group-hover:opacity-[0.18]"
        style={{ background: course.accent }}
      />
      <div className="flex items-start justify-between">
        <span
          className="flex h-11 w-11 items-center justify-center rounded-xl border"
          style={{ borderColor: `${course.accent}40`, background: `${course.accent}12`, color: course.accent }}
        >
          <CourseIcon name={course.icon} className="h-5 w-5" />
        </span>
        <span className="rounded-full border border-slate-700 px-2.5 py-1 font-mono text-[9px] uppercase tracking-[0.18em] text-slate-400">
          {course.level}
        </span>
      </div>

      <h3 className="mt-5 font-heading text-lg font-bold tracking-tight text-white transition-colors duration-300 group-hover:text-bull lg:text-xl">
        {course.name}
      </h3>
      <p className="mt-1 font-mono text-[10px] uppercase tracking-[0.2em]" style={{ color: course.accent }}>
        {course.tagline}
      </p>
      <p className="mt-3 flex-1 text-sm leading-relaxed text-slate-400">{course.description}</p>

      <div className="mt-4 flex flex-wrap gap-1.5">
        {course.modules.slice(0, 3).map((m) => (
          <span key={m} className="rounded border border-slate-800 bg-slate-900/60 px-2 py-1 font-mono text-[9px] uppercase tracking-wider text-slate-500">
            {m.replace(/\[|\]/g, "").split(" — ")[0]}
          </span>
        ))}
        {course.modules.length > 3 && (
          <span className="rounded border border-slate-800 bg-slate-900/60 px-2 py-1 font-mono text-[9px] tracking-wider text-slate-500">
            +{course.modules.length - 3} modules
          </span>
        )}
      </div>

      <span className="mt-6 inline-flex items-center gap-2 font-heading text-xs font-bold uppercase tracking-[0.15em] text-white">
        Explore Course
        <ArrowRight className="h-4 w-4 text-bull transition-transform duration-300 group-hover:translate-x-1.5" />
      </span>
    </Link>
  </motion.div>
);

export default CourseCard;
