import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { SEO, orgSchema, websiteSchema, faqSchema } from "../components/seo/SEO";
import { Reveal } from "../components/motion/Reveal";
import FAQAccordion from "../components/FAQAccordion";
import Hero from "../components/home/Hero";
import { TrustStrip, AboutPreview, WhyUs } from "../components/home/TrustAbout";
import { CourseEcosystem } from "../components/home/CourseShowcase";
import Journey from "../components/home/Journey";
import { Testimonials } from "../components/home/People";
import BhopalSEO from "../components/home/BhopalSEO";
import MapSection from "../components/MapSection";
import CTABand from "../components/CTABand";
import { faqs } from "../data/faqs";
import { site } from "../config/site";

const HomePage = () => (
  <>
    <SEO
      title="Arts Of Finance | Stock Market Training Institute in Bhopal"
      description={site.description}
      path="/"
      schema={[orgSchema(site), websiteSchema(site), faqSchema(faqs.slice(0, 6))]}
    />
    <Hero />
    <TrustStrip />
    <AboutPreview />
    <WhyUs />
    <CourseEcosystem />
    <Journey />
    <Testimonials />
    <BhopalSEO />
    <MapSection />
    <section className="py-24 lg:py-32" data-testid="home-faq-section">
      <div className="mx-auto max-w-4xl px-5 lg:px-8">
        <Reveal className="text-center">
          <p className="overline-tag">08 — Answers</p>
          <h2 className="mt-4 font-heading text-3xl font-bold tracking-tighter text-white sm:text-4xl">
            Questions, Answered Directly
          </h2>
        </Reveal>
        <Reveal delay={0.15} className="mt-12">
          <FAQAccordion items={faqs.slice(0, 6)} idPrefix="home-faq" />
        </Reveal>
        <Reveal delay={0.2} className="mt-8 text-center">
          <Link
            to="/faq"
            data-testid="home-faq-view-all"
            className="group inline-flex items-center gap-2 font-heading text-xs font-bold uppercase tracking-[0.18em] text-bull"
          >
            View All FAQs
            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1.5" />
          </Link>
        </Reveal>
      </div>
    </section>
    <CTABand />
  </>
);

export default HomePage;
