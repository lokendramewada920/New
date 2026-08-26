import { Link, useParams, Navigate } from "react-router-dom";
import { ChevronRight, CheckCircle2, Users, FlaskConical, MonitorSmartphone, MessagesSquare, AlertTriangle, IndianRupee, Clock3, CalendarClock, Signal } from "lucide-react";
import { SEO, courseSchema, breadcrumbSchema, faqSchema } from "../components/seo/SEO";
import { Reveal, Stagger, StaggerItem } from "../components/motion/Reveal";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "../components/ui/accordion";
import CourseCard from "../components/CourseCard";
import CTABand from "../components/CTABand";
import { BookDemoButton, WhatsAppButton } from "../components/ContactActions";
import { getCourse, courses } from "../data/courses";
import { site } from "../config/site";

const chunk = (arr, n) => {
  const size = Math.ceil(arr.length / n);
  return Array.from({ length: n }, (_, i) => arr.slice(i * size, (i + 1) * size)).filter((c) => c.length);
};

const CourseDetailPage = () => {
  const { slug } = useParams();
  const course = getCourse(slug);
  if (!course) return <Navigate to="/courses" replace />;

  const related = courses.filter((c) => c.slug !== slug).slice(0, 3);
  const phases = chunk(course.modules, 3);
  const courseFaqs = [
    { q: `Who is the ${course.name} course for?`, a: `${course.name} at Arts Of Finance is designed for: ${course.whoFor.join(", ").toLowerCase()}. The program is mentor-led and available offline in Bhopal and online.` },
    { q: `What is the fee for the ${course.name} course?`, a: "Course fees, duration and batch timings are shared on enquiry or during the free demo session, so you get the current schedule and any applicable offers directly from the team." },
    { q: `Is the ${course.name} course available online?`, a: "Yes. Major programs at Arts Of Finance run in both offline (Bhopal classroom) and live online modes with the same mentor-led structure." },
    { q: "Does the course guarantee profits?", a: "No — and you should be cautious of anyone who does. We teach structured frameworks, practical skills and risk management. Market outcomes always involve risk." },
  ];

  return (
    <>
      <SEO
        title={`${course.name} Course in Bhopal | Arts Of Finance`}
        description={`${course.name} — ${course.tagline}. Mentor-led ${course.name} training in Bhopal with structured curriculum and practical chart-based learning. Book a free demo.`}
        path={`/courses/${course.slug}`}
        schema={[
          courseSchema(course, site),
          breadcrumbSchema([{ name: "Home", path: "/" }, { name: "Courses", path: "/courses" }, { name: course.name, path: `/courses/${course.slug}` }]),
          faqSchema(courseFaqs),
        ]}
      />

      {/* Hero */}
      <section className="noise relative overflow-hidden pb-16 pt-40 lg:pb-24 lg:pt-52" data-testid="course-hero">
        <div className="grid-bg absolute inset-0 opacity-50" />
        <div className="pointer-events-none absolute inset-0" style={{ background: `radial-gradient(ellipse at top, ${course.accent}14, transparent 55%)` }} />
        <div className="relative mx-auto max-w-7xl px-5 lg:px-8">
          <Reveal>
            <nav className="flex items-center gap-1.5 font-mono text-[10px] uppercase tracking-[0.2em] text-slate-500" data-testid="course-breadcrumb">
              <Link to="/" className="hover:text-bull">Home</Link>
              <ChevronRight className="h-3 w-3" />
              <Link to="/courses" className="hover:text-bull">Courses</Link>
              <ChevronRight className="h-3 w-3" />
              <span className="text-bull">{course.name}</span>
            </nav>
            <h1 className="mt-6 font-heading text-4xl font-extrabold tracking-tighter text-white sm:text-5xl lg:text-6xl">
              {course.name}
            </h1>
            <p className="mt-3 font-heading text-sm font-semibold uppercase tracking-[0.2em]" style={{ color: course.accent }}>
              {course.tagline}
            </p>
            <p className="mt-6 max-w-2xl text-base leading-relaxed text-slate-400 lg:text-lg">{course.description}</p>
            <div className="mt-8 flex flex-wrap gap-3">
              {[
                { icon: Signal, label: course.level },
                { icon: IndianRupee, label: course.fees },
                { icon: Clock3, label: course.duration },
                { icon: CalendarClock, label: course.timings },
              ].map(({ icon: Icon, label }, i) => (
                <span key={i} className="flex items-center gap-2 rounded-full border border-slate-700/80 bg-ink-900/70 px-4 py-2 font-mono text-[10px] uppercase tracking-wider text-slate-300">
                  <Icon className="h-3.5 w-3.5" style={{ color: course.accent }} />
                  {label}
                </span>
              ))}
            </div>
            <div className="mt-9 flex flex-wrap gap-4">
              <BookDemoButton testId="course-book-demo-btn" />
              <WhatsAppButton testId="course-whatsapp-btn" />
            </div>
          </Reveal>
        </div>
      </section>

      {course.disclaimer && (
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <Reveal className="flex items-start gap-3 rounded-xl border border-gold/30 bg-gold/5 p-5" >
            <AlertTriangle className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
            <p className="text-xs leading-relaxed text-slate-300" data-testid="course-disclaimer">{course.disclaimer}</p>
          </Reveal>
        </div>
      )}

      {/* Who for + outcomes */}
      <section className="py-20 lg:py-28">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 lg:grid-cols-2 lg:px-8">
          <Reveal>
            <p className="overline-tag">Who Is This Course For</p>
            <h2 className="mt-4 font-heading text-2xl font-bold tracking-tighter text-white lg:text-3xl">Built For Learners Like You</h2>
            <div className="mt-7 flex flex-wrap gap-2.5">
              {course.whoFor.map((w) => (
                <span key={w} className="flex items-center gap-2 rounded-full border border-slate-700 bg-ink-900/60 px-4 py-2 text-sm text-slate-300">
                  <Users className="h-3.5 w-3.5" style={{ color: course.accent }} />
                  {w}
                </span>
              ))}
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="overline-tag">What You Will Learn</p>
            <h2 className="mt-4 font-heading text-2xl font-bold tracking-tighter text-white lg:text-3xl">Outcomes You Can Measure</h2>
            <ul className="mt-7 space-y-3.5">
              {course.outcomes.map((o) => (
                <li key={o} className="flex items-start gap-3 text-sm leading-relaxed text-slate-300">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-bull" />
                  {o}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      {/* Curriculum accordion */}
      <section className="border-y border-white/5 bg-ink-900/30 py-20 lg:py-28" data-testid="course-curriculum">
        <div className="mx-auto max-w-4xl px-5 lg:px-8">
          <Reveal className="text-center">
            <p className="overline-tag">Curriculum</p>
            <h2 className="mt-4 font-heading text-2xl font-bold tracking-tighter text-white lg:text-3xl">
              {course.modules.length} Premium Modules
            </h2>
          </Reveal>
          <Reveal delay={0.1} className="mt-12">
            <Accordion type="single" collapsible className="space-y-3">
              {phases.map((phase, pi) => (
                <AccordionItem key={pi} value={`phase-${pi}`} className="rounded-xl border border-slate-800 bg-ink-900/60 px-5 data-[state=open]:border-bull/30">
                  <AccordionTrigger data-testid={`curriculum-phase-${pi}`} className="py-5 text-left font-heading text-sm font-semibold text-white hover:text-bull hover:no-underline">
                    Phase {String(pi + 1).padStart(2, "0")} — Modules {pi * phase.length + 1} to {pi * phase.length + phase.length}
                  </AccordionTrigger>
                  <AccordionContent className="pb-5">
                    <ul className="grid gap-2 sm:grid-cols-2">
                      {phase.map((m, mi) => (
                        <li key={m} className="flex items-center gap-3 rounded-lg border border-slate-800 bg-slate-950/60 px-4 py-3">
                          <span className="font-mono text-[10px]" style={{ color: course.accent }}>{String(pi * phase.length + mi + 1).padStart(2, "0")}</span>
                          <span className="font-mono text-[11px] uppercase tracking-wider text-slate-300">{m}</span>
                        </li>
                      ))}
                    </ul>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </Reveal>
        </div>
      </section>

      {/* Learning method + practical */}
      <section className="py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <Reveal>
            <p className="overline-tag">Learning Method</p>
            <h2 className="mt-4 font-heading text-2xl font-bold tracking-tighter text-white lg:text-3xl">How The Course Is Delivered</h2>
          </Reveal>
          <Stagger className="mt-10 grid gap-5 md:grid-cols-3">
            {[
              { icon: FlaskConical, t: "Concept + Chart", d: "Every concept is paired with its behavior on real charts — you see it work before you practice it." },
              { icon: MonitorSmartphone, t: "Offline + Online", d: "Attend in the Bhopal classroom or join live online batches — same mentors, same structure." },
              { icon: MessagesSquare, t: "Mentor Review", d: "Your analysis gets reviewed. Questions get answered. Progress gets tracked beyond the classroom." },
            ].map(({ icon: Icon, t, d }) => (
              <StaggerItem key={t} className="terminal-card p-7 transition-colors duration-300 hover:border-slate-600">
                <Icon className="h-5 w-5" style={{ color: course.accent }} />
                <h3 className="mt-4 font-heading text-base font-bold text-white">{t}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-400">{d}</p>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* Course FAQs */}
      <section className="pb-20 lg:pb-28">
        <div className="mx-auto max-w-4xl px-5 lg:px-8">
          <Reveal className="text-center">
            <p className="overline-tag">Course FAQs</p>
            <h2 className="mt-4 font-heading text-2xl font-bold tracking-tighter text-white lg:text-3xl">Before You Enroll</h2>
          </Reveal>
          <Reveal delay={0.1} className="mt-10">
            <Accordion type="single" collapsible className="space-y-3">
              {courseFaqs.map((f, i) => (
                <AccordionItem key={i} value={`cf-${i}`} className="rounded-xl border border-slate-800 bg-ink-900/60 px-5 data-[state=open]:border-bull/30">
                  <AccordionTrigger data-testid={`course-faq-${i}`} className="py-5 text-left font-heading text-sm font-semibold text-white hover:text-bull hover:no-underline">
                    {f.q}
                  </AccordionTrigger>
                  <AccordionContent className="pb-5 text-sm leading-relaxed text-slate-400">{f.a}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </Reveal>
        </div>
      </section>

      <CTABand title={`Experience ${course.name} — Free Demo`} sub="Sit through a real session before you decide anything." />

      {/* Related */}
      <section className="py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <Reveal>
            <p className="overline-tag">Keep Exploring</p>
            <h2 className="mt-4 font-heading text-2xl font-bold tracking-tighter text-white lg:text-3xl">Related Courses</h2>
          </Reveal>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {related.map((c, i) => (
              <CourseCard key={c.slug} course={c} index={i} tall />
            ))}
          </div>
        </div>
      </section>

      {/* Sticky desktop CTA */}
      <div className="fixed bottom-6 right-6 z-40 hidden md:block">
        <BookDemoButton testId="course-sticky-demo-btn" className="shadow-2xl" label="Book Free Demo" />
      </div>
    </>
  );
};

export default CourseDetailPage;
