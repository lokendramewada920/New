import { Target, Compass, User, CalendarDays } from "lucide-react";
import { SEO, orgSchema, breadcrumbSchema } from "../components/seo/SEO";
import { Reveal, Stagger, StaggerItem } from "../components/motion/Reveal";
import CTABand from "../components/CTABand";
import { site } from "../config/site";

const AboutPage = () => (
  <>
    <SEO
      title="About Arts Of Finance | Stock Market Institute in Bhopal"
      description="Arts Of Finance is Bhopal's premium stock market training institute — structured curriculum, mentor-led practical learning and risk-first education."
      path="/about"
      schema={[orgSchema(site), breadcrumbSchema([{ name: "Home", path: "/" }, { name: "About", path: "/about" }])]}
    />

    <section className="noise relative overflow-hidden pb-20 pt-40 lg:pb-28 lg:pt-52" data-testid="about-hero">
      <div className="grid-bg absolute inset-0 opacity-60" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(0,229,155,0.07),transparent_55%)]" />
      <div className="relative mx-auto max-w-7xl px-5 lg:px-8">
        <Reveal>
          <p className="overline-tag">About The Institute</p>
          <h1 className="mt-4 max-w-3xl font-heading text-4xl font-extrabold tracking-tighter text-white sm:text-5xl lg:text-6xl">
            Where Market Knowledge Meets <span className="text-gradient-green">Practical Learning</span>
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-slate-400 lg:text-lg">
            Arts Of Finance is a dedicated stock market training institute in Bhopal. We teach markets the way
            they deserve to be taught — structured, chart-first, mentor-led and honest about risk. No tips.
            No profit promises. Just disciplined, professional market education.
          </p>
        </Reveal>
      </div>
    </section>

    <section className="py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <Stagger className="grid gap-5 md:grid-cols-2">
          {[
            { icon: Target, title: "Our Mission", value: site.institute.mission === "[MISSION — TO BE PROVIDED]" ? "To make serious, risk-first market education accessible — replacing tips and hype with structure, practice and mentorship." : site.institute.mission },
            { icon: Compass, title: "Our Vision", value: site.institute.vision === "[VISION — TO BE PROVIDED]" ? "To be Central India's most trusted destination for professional stock market education." : site.institute.vision },
            { icon: User, title: "Founder & Management", value: site.institute.founder },
            { icon: CalendarDays, title: "Established", value: site.established },
          ].map(({ icon: Icon, title, value }) => (
            <StaggerItem key={title} className="terminal-card p-8">
              <Icon className="h-5 w-5 text-bull" />
              <h2 className="mt-4 font-heading text-lg font-bold tracking-tight text-white">{title}</h2>
              <p className={`mt-2 text-sm leading-relaxed ${String(value).includes("[") ? "font-mono text-slate-500" : "text-slate-400"}`}>{value}</p>
            </StaggerItem>
          ))}
        </Stagger>

        <Reveal className="mt-20">
          <div className="relative overflow-hidden rounded-2xl border border-white/10">
            <img
              src="https://images.pexels.com/photos/5831259/pexels-photo-5831259.jpeg?auto=compress&cs=tinysrgb&w=1400"
              alt="Student analyzing stock market charts during a practical training session in Bhopal"
              className="h-[380px] w-full object-cover"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-ink-950 via-ink-950/50 to-transparent" />
            <div className="absolute inset-0 flex items-center p-8 lg:p-14">
              <div className="max-w-md">
                <p className="overline-tag">How We Teach</p>
                <h2 className="mt-3 font-heading text-2xl font-bold tracking-tighter text-white lg:text-3xl">
                  Charts On Screen. Concepts On Board. Mentor Beside You.
                </h2>
                <p className="mt-4 text-sm leading-relaxed text-slate-300">
                  Every session pairs a concept with its live chart behavior. Learners practice, get reviewed,
                  and build the discipline that markets demand.
                </p>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>

    <CTABand />
  </>
);

export default AboutPage;
