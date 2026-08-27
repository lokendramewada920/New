import { MapPin, Phone, Mail, Clock, Navigation } from "lucide-react";
import { Reveal } from "./motion/Reveal";
import { site, hasValue, displayOr } from "../config/site";

// Map container is ready for the Google Maps embed/API.
// Set REACT_APP_GOOGLE_MAP_EMBED_URL in frontend/.env to activate the live map.
const MapSection = () => (
  <section className="relative py-24 lg:py-32" data-testid="map-section">
    <div className="mx-auto max-w-7xl px-5 lg:px-8">
      <Reveal className="max-w-2xl">
        <p className="overline-tag">07 — Visit Us</p>
        <h2 className="mt-4 font-heading text-3xl font-bold tracking-tighter text-white sm:text-4xl lg:text-5xl">
          Visit Arts Of Finance
        </h2>
        <p className="mt-4 text-base text-slate-400 lg:text-lg">Learn. Practice. Understand the Market.</p>
      </Reveal>

      <div className="mt-12 grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
        <Reveal delay={0.1} className="space-y-4">
          {[
            { icon: MapPin, label: "Institute Address", value: displayOr(site.contact.address, "Bhopal, Madhya Pradesh — [ ADDRESS TO BE PROVIDED ]"), testId: "map-address" },
            { icon: Phone, label: "Phone", value: displayOr(site.contact.phone, "[ PHONE NUMBER TO BE PROVIDED ]"), testId: "map-phone" },
            { icon: Mail, label: "Email", value: displayOr(site.contact.email, "[ EMAIL TO BE PROVIDED ]"), testId: "map-email" },
            { icon: Clock, label: "Working Hours", value: site.contact.hours, testId: "map-hours" },
          ].map(({ icon: Icon, label, value, testId }) => (
            <div key={label} className="terminal-card flex items-start gap-4 p-5" data-testid={testId}>
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-bull/20 bg-bull/5 text-bull">
                <Icon className="h-4.5 w-4.5 h-5 w-5" />
              </span>
              <div>
                <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-slate-500">{label}</p>
                <p className="mt-1 text-sm text-slate-200">{value}</p>
              </div>
            </div>
          ))}
          <a
            href={hasValue(site.contact.mapLink) ? site.contact.mapLink : "#"}
            onClick={hasValue(site.contact.mapLink) ? undefined : (e) => e.preventDefault()}
            data-testid="directions-btn"
            className={`inline-flex items-center gap-2 rounded-full border border-bull/40 bg-bull/5 px-6 py-3 font-heading text-xs font-bold uppercase tracking-[0.15em] text-bull transition-all duration-300 ${
              hasValue(site.contact.mapLink) ? "hover:-translate-y-0.5 hover:bg-bull/10" : "cursor-not-allowed opacity-50"
            }`}
          >
            <Navigation className="h-4 w-4" />
            Get Directions
          </a>
        </Reveal>

        <Reveal delay={0.15}>
          <div className="relative h-full min-h-[380px] overflow-hidden rounded-2xl border border-slate-800" data-testid="google-map-container">
            {hasValue(site.contact.mapEmbedUrl) ? (
              <iframe
                title="Arts Of Finance — Google Map"
                src={site.contact.mapEmbedUrl}
                className="h-full min-h-[380px] w-full"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
            ) : (
              <div className="grid-bg relative flex h-full min-h-[380px] flex-col items-center justify-center gap-4 bg-ink-900">
                <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,229,155,0.06),transparent_60%)]" />
                <span className="relative flex h-16 w-16 items-center justify-center rounded-2xl border border-bull/30 bg-bull/10 text-bull">
                  <MapPin className="h-7 w-7" />
                  <span className="absolute -inset-3 rounded-2xl border border-bull/10" />
                </span>
                <p className="font-heading text-sm font-bold uppercase tracking-[0.2em] text-slate-300">Google Map Loads Here</p>
                <p className="max-w-xs text-center font-mono text-[10px] leading-relaxed tracking-wider text-slate-500">
                  [ GOOGLE MAP EMBED / API WILL BE PROVIDED LATER ] — container is production-ready, drop in the embed URL to activate.
                </p>
              </div>
            )}
          </div>
        </Reveal>
      </div>
    </div>
  </section>
);

export default MapSection;
