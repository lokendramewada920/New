import { useEffect, useRef } from "react";

// Animated candlestick + line-chart canvas. Purely decorative; no live data.
const CandleField = ({ className = "" }) => {
  const canvasRef = useRef(null);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return undefined;
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    let raf;
    let candles = [];
    let w = 0;
    let h = 0;
    const CW = 14; // candle slot width
    let offset = 0;
    let last = 0;

    const seed = (fromX) => {
      let price = h * 0.5;
      const arr = [];
      const n = Math.ceil(w / CW) + 4;
      for (let i = 0; i < n; i++) {
        const drift = (Math.random() - 0.48) * h * 0.06;
        const open = price;
        const close = Math.min(h * 0.85, Math.max(h * 0.15, price + drift));
        const high = Math.max(open, close) + Math.random() * h * 0.03;
        const low = Math.min(open, close) - Math.random() * h * 0.03;
        arr.push({ x: fromX + i * CW, open, close, high, low });
        price = close;
      }
      return arr;
    };

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 1.5);
      w = canvas.clientWidth;
      h = canvas.clientHeight;
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      candles = seed(0);
    };

    const drawGrid = (light) => {
      ctx.strokeStyle = light ? "rgba(51,65,85,0.08)" : "rgba(148,163,184,0.06)";
      ctx.lineWidth = 1;
      for (let x = -offset % 44; x < w; x += 44) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, h);
        ctx.stroke();
      }
      for (let y = 0; y < h; y += 44) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(w, y);
        ctx.stroke();
      }
    };

    const frame = (t) => {
      if (t - last > 40) {
        offset += 0.35;
        last = t;
      }
      ctx.clearRect(0, 0, w, h);
      const light = document.documentElement.classList.contains("light");
      drawGrid(light);

      // line chart through closes
      ctx.beginPath();
      ctx.strokeStyle = light ? "rgba(0,140,96,0.3)" : "rgba(0,229,155,0.28)";
      ctx.lineWidth = 1.5;
      candles.forEach((c, i) => {
        const x = c.x - offset;
        if (i === 0) ctx.moveTo(x, c.close);
        else ctx.lineTo(x, c.close);
      });
      ctx.stroke();

      candles.forEach((c) => {
        const x = c.x - offset;
        if (x < -CW) return;
        const up = c.close <= c.open;
        const color = up
          ? light
            ? "rgba(0,150,104,0.55)"
            : "rgba(0,229,155,0.5)"
          : light
            ? "rgba(200,45,30,0.5)"
            : "rgba(250,56,18,0.45)";
        ctx.strokeStyle = color;
        ctx.fillStyle = color;
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.moveTo(x + 4, c.low);
        ctx.lineTo(x + 4, c.high);
        ctx.stroke();
        const top = Math.min(c.open, c.close);
        const height = Math.max(2, Math.abs(c.open - c.close));
        ctx.fillRect(x, top, 8, height);
      });

      // recycle candles
      while (candles.length && candles[0].x - offset < -CW * 2) candles.shift();
      const lastC = candles[candles.length - 1];
      if (lastC && lastC.x - offset < w + CW * 2) {
        const more = seed(lastC.x + CW);
        // continue price walk from last close
        let price = lastC.close;
        more.forEach((c) => {
          const drift = (Math.random() - 0.48) * h * 0.06;
          c.open = price;
          c.close = Math.min(h * 0.85, Math.max(h * 0.15, price + drift));
          c.high = Math.max(c.open, c.close) + Math.random() * h * 0.03;
          c.low = Math.min(c.open, c.close) - Math.random() * h * 0.03;
          price = c.close;
        });
        candles = candles.concat(more);
      }

      raf = requestAnimationFrame(frame);
    };

    resize();
    raf = requestAnimationFrame(frame);
    window.addEventListener("resize", resize);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return <canvas ref={canvasRef} className={`h-full w-full ${className}`} aria-hidden="true" />;
};

export default CandleField;
