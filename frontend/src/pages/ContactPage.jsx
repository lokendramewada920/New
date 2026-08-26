import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { SEO, orgSchema, breadcrumbSchema } from "../components/seo/SEO";
import { Reveal } from "../components/motion/Reveal";
import LeadForm from "../components/LeadForm";
import MapSection from "../components/MapSection";
import { CallButton, WhatsAppButton } from "../components/ContactActions";
import { site, displayOr } from "../config/site";

const ContactPage = () => (
  <>
    <SEO
      title="Contact & Book Free Demo | Arts Of Finance Bhopal"
      description="Book a free demo session at Arts Of Finance — Bhopal's premium stock market training institute. Offline and online batches available."
      path="/contact"
      schema={[orgSchema(site), breadcrumbSchema([{ name: "Home", path: "/" }, { name: "Contact", path: "/contact" }])]}
    />

    <section className="noise relative overflow-hidden pb-16 pt-40 lg:pb-24 lg:pt-52" data-testid="contact-hero">
      <div className="grid-bg absolute inset-0 opacity-50" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(0,229,155,0.07),transparent_55%)]" />
      <div className="relative mx-auto max-w-7xl px-5 lg:px-8">
        <Reveal>
          <p className="overline-tag">Book Free Demo</p>
          <h1 className="mt-4 max-w-3xl font-heading text-4xl font-extrabold tracking-tighter text-white sm:text-5xl lg:text-6xl">
            Let's Start Your <span className="text-gradient-green">Market Learning Journey</span>
          </h1>
          <p className="mt-6 max-w-2xl text-base text-slate-400 lg:text-lg">
            Fill the form and a mentor will call you back to schedule your free demo session — offline in Bhopal or live online.
          </p>
        </Reveal>
      </div>
    </section>

    <section className="pb-24 lg:pb-32">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 lg:grid-cols-[1.1fr_0.9fr] lg:px-8">
        <Reveal className="glass rounded-2xl p-7 lg:p-10" data-testid="contact-form-card">
          <LeadForm source="contact-page" />
        </Reveal>

        <div className="space-y-4">
          {[
            { icon: MapPin, label: "Visit", value: displayOr(site.contact.address, "Bhopal, Madhya Pradesh — full address to be announced") },
            { icon: Phone, label: "Call", value: displayOr(site.contact.phone) },
            { icon: Mail, label: "Email", value: displayOr(site.contact.email) },
            { icon: Clock, label: "Hours", value: site.contact.hours },
          ].map(({ icon: Icon, label, value }, i) => (
            <Reveal key={label} delay={i * 0.07} className="terminal-card flex items-start gap-4 p-5" data-testid={`contact-info-${label.toLowerCase()}`}>
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-bull/20 bg-bull/5 text-bull">
                <Icon className="h-5 w-5" />
              </span>
              <div>
                <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-slate-500">{label}</p>
                <p className={`mt-1 text-sm ${String(value).includes("[") || value.includes("to be") ? "text-slate-500" : "text-slate-200"}`}>{value}</p>
              </div>
            </Reveal>
          ))}
          <Reveal delay={0.3} className="flex flex-wrap gap-3 pt-2">
            <WhatsAppButton testId="contact-whatsapp-btn" className="flex-1" />
            <CallButton testId="contact-call-btn" className="flex-1" />
          </Reveal>
        </div>
      </div>
    </section>

    <MapSection />
  </>
);

export default ContactPage;
