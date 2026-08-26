import { toast } from "sonner";
import { MessageCircle, Phone, ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import { site, hasValue } from "../config/site";

// WhatsApp / Call actions — numbers come from src/config/site.js (or .env).
// Until real numbers are provided, buttons show a "coming soon" notice.
export const DEFAULT_WA_MESSAGE = "Hi, I want to book a free demo class at Arts Of Finance.";

export const whatsAppUrl = (message = DEFAULT_WA_MESSAGE) =>
  `https://wa.me/${site.contact.whatsapp.replace(/\D/g, "")}?text=${encodeURIComponent(message)}`;

export const useContactActions = () => {
  const openWhatsApp = (message = DEFAULT_WA_MESSAGE) => {
    if (hasValue(site.contact.whatsapp)) {
      window.open(whatsAppUrl(message), "_blank", "noopener");
    } else {
      toast.info("WhatsApp line opening soon", {
        description: "Our mentor WhatsApp number is being set up. Book a free demo and we will reach out to you.",
      });
    }
  };

  const callNow = () => {
    if (hasValue(site.contact.phone)) {
      window.location.href = `tel:${site.contact.phone.replace(/\s/g, "")}`;
    } else {
      toast.info("Call line opening soon", {
        description: "Our phone number is being set up. Book a free demo and we will call you back.",
      });
    }
  };

  return { openWhatsApp, callNow };
};

export const BookDemoButton = ({ className = "", label = "Book Free Demo", testId = "book-demo-btn" }) => (
  <Link
    to="/contact"
    data-testid={testId}
    className={`btn-glow group inline-flex items-center justify-center gap-2 rounded-full bg-bull px-7 py-3.5 font-heading text-sm font-bold uppercase tracking-[0.12em] text-ink-950 transition-transform duration-300 hover:-translate-y-0.5 ${className}`}
  >
    {label}
    <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
  </Link>
);

export const WhatsAppButton = ({ className = "", label = "WhatsApp a Mentor", testId = "whatsapp-btn" }) => {
  const { openWhatsApp } = useContactActions();
  return (
    <button
      onClick={() => openWhatsApp()}
      data-testid={testId}
      className={`inline-flex items-center justify-center gap-2 rounded-full border border-bull/40 bg-bull/5 px-7 py-3.5 font-heading text-sm font-bold uppercase tracking-[0.12em] text-bull transition-all duration-300 hover:-translate-y-0.5 hover:bg-bull/10 ${className}`}
    >
      <MessageCircle className="h-4 w-4" />
      {label}
    </button>
  );
};

export const CallButton = ({ className = "", label = "Call Now", testId = "call-btn" }) => {
  const { callNow } = useContactActions();
  return (
    <button
      onClick={callNow}
      data-testid={testId}
      className={`inline-flex items-center justify-center gap-2 rounded-full border border-white/15 px-7 py-3.5 font-heading text-sm font-bold uppercase tracking-[0.12em] text-white transition-all duration-300 hover:-translate-y-0.5 hover:border-white/30 ${className}`}
    >
      <Phone className="h-4 w-4" />
      {label}
    </button>
  );
};
