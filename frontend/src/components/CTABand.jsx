import { Reveal } from "./motion/Reveal";
import { BookDemoButton, WhatsAppButton } from "./ContactActions";

const CTABand = ({ title = "Your Market Edge Starts With One Session", sub = "Book a free demo. Sit through a real class. Then decide — no pressure, no obligations." }) => (
  <section className="relative overflow-hidden border-y border-bull/15 py-20 lg:py-28" data-testid="cta-band">
    <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(0,229,155,0.08),transparent_60%)]" />
    <div className="grid-bg pointer-events-none absolute inset-0 opacity-50" />
    <div className="relative mx-auto max-w-4xl px-5 text-center lg:px-8">
      <Reveal>
        <p className="overline-tag">Free Demo Session</p>
        <h2 className="mt-4 font-heading text-3xl font-bold tracking-tighter text-white sm:text-4xl lg:text-5xl">{title}</h2>
        <p className="mx-auto mt-5 max-w-xl text-base text-slate-400">{sub}</p>
        <div className="mt-9 flex flex-wrap items-center justify-center gap-4">
          <BookDemoButton testId="cta-band-book-demo-btn" />
          <WhatsAppButton testId="cta-band-whatsapp-btn" />
        </div>
      </Reveal>
    </div>
  </section>
);

export default CTABand;
