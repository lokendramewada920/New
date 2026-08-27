import { SEO, breadcrumbSchema } from "../components/seo/SEO";
import { Reveal } from "../components/motion/Reveal";
import CourseCard from "../components/CourseCard";
import { CourseSpotlights } from "../components/home/CourseShowcase";
import CTABand from "../components/CTABand";
import { courses } from "../data/courses";

const CoursesPage = () => (
  <>
    <SEO
      title="Stock Market Courses in Bhopal | Arts Of Finance"
      description="Explore the Market Mastery Ecosystem — Technical Analysis, Fundamental Analysis, Options Trading, Crypto, Forex, Stock Market Foundation and NISM-oriented learning in Bhopal."
      path="/courses"
      schema={[breadcrumbSchema([{ name: "Home", path: "/" }, { name: "Courses", path: "/courses" }])]}
    />

    <section className="noise relative overflow-hidden pb-16 pt-40 lg:pb-24 lg:pt-52" data-testid="courses-hero">
      <div className="grid-bg absolute inset-0 opacity-60" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(212,175,55,0.06),transparent_55%)]" />
      <div className="relative mx-auto max-w-7xl px-5 lg:px-8">
        <Reveal>
          <p className="overline-tag">Course Ecosystem</p>
          <h1 className="mt-4 max-w-3xl font-heading text-4xl font-extrabold tracking-tighter text-white sm:text-5xl lg:text-6xl">
            Explore The <span className="text-gradient-green">Market Mastery</span> Ecosystem
          </h1>
          <p className="mt-6 max-w-2xl text-base text-slate-400 lg:text-lg">
            One learning destination. Multiple market disciplines. Fees, duration and batch timings are
            shared on enquiry or during your free demo session.
          </p>
        </Reveal>
      </div>
    </section>

    <section className="pb-24 lg:pb-32">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3" data-testid="courses-grid">
          {courses.map((c, i) => (
            <CourseCard key={c.slug} course={c} index={i} tall />
          ))}
        </div>
        <Reveal className="mt-12 rounded-2xl border border-gold/20 bg-gold/5 p-6 text-center">
          <p className="text-sm text-slate-300">
            Not sure which course fits you? Book a free demo — a mentor will map your goals to the right program.
          </p>
        </Reveal>
      </div>
    </section>

    <section className="pb-10 lg:pb-14">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <Reveal>
          <p className="overline-tag">Course Spotlights</p>
          <h2 className="mt-4 font-heading text-3xl font-bold tracking-tighter text-white sm:text-4xl">
            A Closer Look At <span className="text-gradient-green">Each Program</span>
          </h2>
        </Reveal>
      </div>
    </section>
    <CourseSpotlights />

    <CTABand title="Confused Between Courses? Start With a Free Demo" sub="One session with a mentor will tell you exactly where to begin." />
  </>
);

export default CoursesPage;
