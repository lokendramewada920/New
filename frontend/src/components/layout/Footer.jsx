import { Link } from "react-router-dom";
import { MapPin, Phone, Mail, Instagram, Youtube, Facebook, Linkedin } from "lucide-react";
import { site, displayOr, MARKET_DISCLAIMER } from "../../config/site";
import { courses } from "../../data/courses";

const Footer = () => {
  const socials = [
    { icon: Instagram, href: site.socials.instagram, label: "Instagram" },
    { icon: Youtube, href: site.socials.youtube, label: "YouTube" },
    { icon: Facebook, href: site.socials.facebook, label: "Facebook" },
    { icon: Linkedin, href: site.socials.linkedin, label: "LinkedIn" },
  ];

  return (
    <footer className="relative border-t border-white/10 bg-ink-950 pb-24 md:pb-0" data-testid="site-footer">
      <div className="mx-auto max-w-7xl px-5 py-16 lg:px-8">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <Link to="/" className="flex items-center gap-2.5">
              <img src="/logo-bull.png" alt="Arts Of Finance bull logo" className="h-9 w-auto" loading="lazy" />
              <span className="font-heading text-sm font-bold uppercase tracking-[0.18em] text-white">
                Arts <span className="text-bull">Of</span> Finance
              </span>
            </Link>
            <p className="mt-4 text-sm leading-relaxed text-slate-400">
              {site.tagline}. Structured, practical and mentor-led market education — offline in Bhopal and online everywhere.
            </p>
            <div className="mt-5 flex gap-3">
              {socials.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href || "#"}
                  aria-label={label}
                  data-testid={`footer-social-${label.toLowerCase()}`}
                  onClick={href ? undefined : (e) => e.preventDefault()}
                  className={`flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 text-slate-400 transition-colors duration-300 ${
                    href ? "hover:border-bull/50 hover:text-bull" : "opacity-40"
                  }`}
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="font-mono text-[11px] uppercase tracking-[0.25em] text-slate-500">Courses</h3>
            <ul className="mt-4 space-y-2.5">
              {courses.map((c) => (
                <li key={c.slug}>
                  <Link
                    to={`/courses/${c.slug}`}
                    data-testid={`footer-course-${c.slug}`}
                    className="text-sm text-slate-400 transition-colors duration-200 hover:text-bull"
                  >
                    {c.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-mono text-[11px] uppercase tracking-[0.25em] text-slate-500">Institute</h3>
            <ul className="mt-4 space-y-2.5">
              {[
                { to: "/about", label: "About Us" },
                { to: "/courses", label: "All Courses" },
                { to: "/stock-market-classes-bhopal", label: "Stock Market Classes Bhopal" },
                { to: "/blog", label: "Market Intelligence" },
                { to: "/faq", label: "FAQ" },
                { to: "/contact", label: "Contact" },
              ].map((l) => (
                <li key={l.to}>
                  <Link to={l.to} className="text-sm text-slate-400 transition-colors duration-200 hover:text-bull">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-mono text-[11px] uppercase tracking-[0.25em] text-slate-500">Reach Us</h3>
            <ul className="mt-4 space-y-3 text-sm text-slate-400">
              <li className="flex gap-2.5" data-testid="footer-address">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-bull" />
                <span>{displayOr(site.contact.address, "Bhopal, Madhya Pradesh — full address to be announced")}</span>
              </li>
              <li className="flex gap-2.5" data-testid="footer-phone">
                <Phone className="mt-0.5 h-4 w-4 shrink-0 text-bull" />
                <span>{displayOr(site.contact.phone)}</span>
              </li>
              <li className="flex gap-2.5" data-testid="footer-email">
                <Mail className="mt-0.5 h-4 w-4 shrink-0 text-bull" />
                <span>{displayOr(site.contact.email)}</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 rounded-xl border border-white/5 bg-white/[0.02] p-5">
          <p className="text-xs leading-relaxed text-slate-500" data-testid="footer-disclaimer">{MARKET_DISCLAIMER}</p>
        </div>

        <div className="mt-8 flex flex-col items-center justify-between gap-4 border-t border-white/5 pt-8 sm:flex-row">
          <p className="font-mono text-[11px] text-slate-500">
            © {new Date().getFullYear()} {site.legalName}. All rights reserved.
          </p>
          <div className="flex flex-wrap gap-5">
            {[
              { to: "/privacy-policy", label: "Privacy Policy" },
              { to: "/terms", label: "Terms" },
              { to: "/disclaimer", label: "Disclaimer" },
              { to: "/refund-policy", label: "Refund Policy" },
            ].map((l) => (
              <Link key={l.to} to={l.to} className="font-mono text-[11px] text-slate-500 transition-colors hover:text-bull">
                {l.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
