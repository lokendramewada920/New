import { useNavigate } from "react-router-dom";
import { CalendarCheck, MessageCircle, Phone } from "lucide-react";
import { useContactActions } from "../ContactActions";

// Sticky mobile action bar — Book Demo / WhatsApp / Call
const MobileBar = () => {
  const navigate = useNavigate();
  const { openWhatsApp, callNow } = useContactActions();

  return (
    <div
      data-testid="mobile-action-bar"
      className="fixed inset-x-0 bottom-0 z-50 grid grid-cols-3 border-t border-white/10 bg-slate-950/90 backdrop-blur-xl md:hidden"
      style={{ paddingBottom: "env(safe-area-inset-bottom)" }}
    >
      <button
        data-testid="mobile-bar-book-demo"
        onClick={() => navigate("/contact")}
        className="flex flex-col items-center gap-1 bg-bull py-3 font-heading text-[11px] font-bold uppercase tracking-wider text-ink-950"
      >
        <CalendarCheck className="h-4 w-4" />
        Book Demo
      </button>
      <button
        data-testid="mobile-bar-whatsapp"
        onClick={openWhatsApp}
        className="flex flex-col items-center gap-1 py-3 font-heading text-[11px] font-bold uppercase tracking-wider text-bull"
      >
        <MessageCircle className="h-4 w-4" />
        WhatsApp
      </button>
      <button
        data-testid="mobile-bar-call"
        onClick={callNow}
        className="flex flex-col items-center gap-1 py-3 font-heading text-[11px] font-bold uppercase tracking-wider text-slate-300"
      >
        <Phone className="h-4 w-4" />
        Call
      </button>
    </div>
  );
};

export default MobileBar;
