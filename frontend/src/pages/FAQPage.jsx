import { SEO, faqSchema, breadcrumbSchema } from "../components/seo/SEO";
import { Reveal } from "../components/motion/Reveal";
import FAQAccordion from "../components/FAQAccordion";
import CTABand from "../components/CTABand";
import { faqs } from "../data/faqs";

const FAQPage = () => (
  <>
    <SEO
      title="FAQs | Stock Market Courses in Bhopal — Arts Of Finance"
      description="Direct answers about stock market classes in Bhopal — courses, modes, NISM, technical analysis, options, risk management and how to choose the right institute."
      path="/faq"
      schema={[faqSchema(faqs), breadcrumbSchema([{ name: "Home", path: "/" }, { name: "FAQ", path: "/faq" }])]}
    />

    <section className="noise relative overflow-hidden pb-14 pt-40 lg:pb-20 lg:pt-52" data-testid="faq-hero">
      <div className="grid-bg absolute inset-0 opacity-50" />
      <div className="relative mx-auto max-w-4xl px-5 text-center lg:px-8">
        <Reveal>
          <p className="overline-tag">Answers, Direct</p>
          <h1 className="mt-4 font-heading text-4xl font-extrabold tracking-tighter text-white sm:text-5xl lg:text-6xl">
            Frequently Asked <span className="text-gradient-green">Questions</span>
          </h1>
          <p className="mx-auto mt-6 max-w-xl text-base text-slate-400">
            Straight answers about markets, courses, and learning with Arts Of Finance.
          </p>
        </Reveal>
      </div>
    </section>

    <section className="pb-24 lg:pb-32">
      <div className="mx-auto max-w-4xl px-5 lg:px-8">
        <Reveal>
          <FAQAccordion items={faqs} idPrefix="faq-page" />
        </Reveal>
      </div>
    </section>

    <CTABand title="Still Have a Question? Ask a Mentor Directly" sub="Book a free demo or send us a message — a real mentor answers, not a bot." />
  </>
);

export default FAQPage;
