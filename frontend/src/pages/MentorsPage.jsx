import { SEO, breadcrumbSchema } from "../components/seo/SEO";
import { Reveal } from "../components/motion/Reveal";
import { Mentor } from "../components/home/People";
import CTABand from "../components/CTABand";
import { site } from "../config/site";

const MentorsPage = () => (
  <>
    <SEO
      title="Our Mentors | SEBI Registered Research Analyst | Arts Of Finance Bhopal"
      description={`Meet the mentor team at Arts Of Finance, Bhopal — led by a SEBI Registered Research Analyst (Reg. No. ${site.sebiRegistration}), with directors and guest industry experts guiding every program.`}
      path="/mentors"
      schema={[breadcrumbSchema([{ name: "Home", path: "/" }, { name: "Mentors", path: "/mentors" }])]}
    />

    <section className="noise relative overflow-hidden pb-4 pt-40 lg:pt-52" data-testid="mentors-hero">
      <div className="grid-bg absolute inset-0 opacity-60" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(212,175,55,0.07),transparent_55%)]" />
      <div className="relative mx-auto max-w-7xl px-5 pb-12 lg:px-8">
        <Reveal>
          <p className="overline-tag text-gold">The Team</p>
          <h1 className="mt-4 max-w-3xl font-heading text-4xl font-extrabold tracking-tighter text-white sm:text-5xl lg:text-6xl">
            The Mentors Behind <span className="text-gradient-gold">Arts Of Finance</span>
          </h1>
          <p className="mt-6 max-w-2xl text-base text-slate-400 lg:text-lg">
            A core team of three mentors — supported by guest industry experts — leads every program with a
            structured, risk-first approach to market education.
          </p>
        </Reveal>
      </div>
    </section>

    <Mentor />

    <CTABand
      title="Meet Your Mentor In a Free Demo Session"
      sub="Experience the teaching style before you enrol — offline in Bhopal or live online."
    />
  </>
);

export default MentorsPage;
