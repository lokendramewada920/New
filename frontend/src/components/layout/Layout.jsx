import { useEffect, useRef } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Lenis from "lenis";
import { motion, useScroll, useSpring, useMotionValue } from "framer-motion";
import { Toaster } from "sonner";
import Navbar from "./Navbar";
import Footer from "./Footer";
import MobileBar from "./MobileBar";

const Layout = () => {
  const location = useLocation();
  const lenisRef = useRef(null);
  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 30 });

  // Cursor glow (desktop)
  const gx = useMotionValue(-400);
  const gy = useMotionValue(-400);
  const glowX = useSpring(gx, { stiffness: 60, damping: 20 });
  const glowY = useSpring(gy, { stiffness: 60, damping: 20 });

  useEffect(() => {
    const lenis = new Lenis({ lerp: 0.1, smoothWheel: true });
    lenisRef.current = lenis;
    let raf;
    const loop = (t) => {
      lenis.raf(t);
      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);
    return () => {
      cancelAnimationFrame(raf);
      lenis.destroy();
    };
  }, []);

  useEffect(() => {
    if (location.hash) {
      const el = document.getElementById(location.hash.slice(1));
      if (el) {
        setTimeout(() => lenisRef.current?.scrollTo(el, { offset: -80 }), 60);
        return;
      }
    }
    lenisRef.current?.scrollTo(0, { immediate: true });
    window.scrollTo(0, 0);
  }, [location.pathname, location.hash]);

  useEffect(() => {
    const move = (e) => {
      gx.set(e.clientX - 250);
      gy.set(e.clientY - 250);
    };
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, [gx, gy]);

  return (
    <div className="relative min-h-screen bg-ink-950">
      <motion.div
        className="fixed left-0 top-0 z-[60] h-[2px] w-full origin-left bg-gradient-to-r from-bull via-bull to-gold"
        style={{ scaleX: progress }}
      />
      <motion.div
        aria-hidden="true"
        className="pointer-events-none fixed z-0 hidden h-[500px] w-[500px] rounded-full md:block"
        style={{
          x: glowX,
          y: glowY,
          background: "radial-gradient(circle, rgba(0,229,155,0.05) 0%, transparent 60%)",
        }}
      />
      <Navbar />
      <main className="relative z-10">
        <Outlet />
      </main>
      <Footer />
      <MobileBar />
      <Toaster theme="dark" position="top-center" richColors />
    </div>
  );
};

export default Layout;
