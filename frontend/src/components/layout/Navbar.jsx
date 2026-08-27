import { useEffect, useState } from "react";
import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { ThemeToggle } from "../ThemeToggle";

const LINKS = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/courses", label: "Courses" },
  { to: "/#why-us", label: "Why Us", hash: "why-us" },
  { to: "/#mentor", label: "Mentor", hash: "mentor" },
  { to: "/blog", label: "Blog" },
  { to: "/faq", label: "FAQ" },
  { to: "/contact", label: "Contact" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setOpen(false), [location]);

  const goHash = (e, hash) => {
    e.preventDefault();
    setOpen(false);
    if (location.pathname !== "/") {
      navigate(`/#${hash}`);
    } else {
      document.getElementById(hash)?.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled ? "border-b border-white/10 bg-slate-950/80 backdrop-blur-xl" : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex h-[72px] max-w-7xl items-center justify-between px-5 lg:px-8">
        <Link to="/" data-testid="nav-logo" className="group flex items-center gap-2.5">
          <img src="/logo-bull.png" alt="Arts Of Finance bull logo" className="h-9 w-auto transition-transform duration-300 group-hover:scale-105" />
          <span className="font-heading text-sm font-bold uppercase tracking-[0.18em] text-white">
            Arts <span className="text-bull">Of</span> Finance
          </span>
        </Link>

        <div className="hidden items-center gap-7 lg:flex">
          {LINKS.map((l) =>
            l.hash ? (
              <a
                key={l.label}
                href={l.to}
                onClick={(e) => goHash(e, l.hash)}
                data-testid={`nav-link-${l.label.toLowerCase().replace(/\s+/g, "-")}`}
                className="text-[13px] font-medium uppercase tracking-[0.14em] text-slate-300 transition-colors duration-200 hover:text-bull"
              >
                {l.label}
              </a>
            ) : (
              <NavLink
                key={l.label}
                to={l.to}
                data-testid={`nav-link-${l.label.toLowerCase().replace(/\s+/g, "-")}`}
                className={({ isActive }) =>
                  `text-[13px] font-medium uppercase tracking-[0.14em] transition-colors duration-200 ${
                    isActive ? "text-bull" : "text-slate-300 hover:text-bull"
                  }`
                }
              >
                {l.label}
              </NavLink>
            )
          )}
          <ThemeToggle />
          <Link
            to="/contact"
            data-testid="nav-book-demo-btn"
            className="btn-glow group flex items-center gap-1.5 rounded-full bg-bull px-5 py-2.5 font-heading text-[12px] font-bold uppercase tracking-[0.12em] text-ink-950 transition-transform duration-300 hover:-translate-y-0.5"
          >
            Book Free Demo
            <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </div>

        <div className="flex items-center gap-2 lg:hidden">
          <ThemeToggle />
          <button
            data-testid="nav-mobile-menu-btn"
            onClick={() => setOpen(!open)}
            className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 text-white"
            aria-label="Toggle menu"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden border-b border-white/10 bg-slate-950/95 backdrop-blur-2xl lg:hidden"
          >
            <div className="flex flex-col gap-1 px-5 py-6">
              {LINKS.map((l, i) => (
                <motion.div
                  key={l.label}
                  initial={{ opacity: 0, x: -16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                >
                  {l.hash ? (
                    <a
                      href={l.to}
                      onClick={(e) => goHash(e, l.hash)}
                      data-testid={`mobile-nav-link-${l.label.toLowerCase().replace(/\s+/g, "-")}`}
                      className="block rounded-lg px-3 py-3 font-heading text-sm font-semibold uppercase tracking-[0.16em] text-slate-200 hover:bg-white/5 hover:text-bull"
                    >
                      {l.label}
                    </a>
                  ) : (
                    <NavLink
                      to={l.to}
                      data-testid={`mobile-nav-link-${l.label.toLowerCase().replace(/\s+/g, "-")}`}
                      className={({ isActive }) =>
                        `block rounded-lg px-3 py-3 font-heading text-sm font-semibold uppercase tracking-[0.16em] ${
                          isActive ? "text-bull" : "text-slate-200 hover:bg-white/5 hover:text-bull"
                        }`
                      }
                    >
                      {l.label}
                    </NavLink>
                  )}
                </motion.div>
              ))}
              <Link
                to="/contact"
                data-testid="mobile-nav-book-demo-btn"
                className="btn-glow mt-4 flex items-center justify-center gap-2 rounded-full bg-bull px-5 py-3.5 font-heading text-sm font-bold uppercase tracking-[0.12em] text-ink-950"
              >
                Book Free Demo <ArrowUpRight className="h-4 w-4" />
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
