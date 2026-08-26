import { useEffect, useState } from "react";
import { TrendingUp, TrendingDown, Activity } from "lucide-react";
import Sparkline from "./Sparkline";

// ============================================================
// MARKET DATA PREVIEW — demo/static values only.
// Swap `DEMO_MARKETS` with a live feed when MARKET_DATA_API_KEY
// is provided (see src/config/site.js -> integrations).
// ============================================================
const DEMO_MARKETS = [
  { symbol: "NIFTY 50", price: 24312.55, change: 0.62, spark: [12, 14, 13, 16, 18, 17, 21, 23, 22, 26, 28, 30], vol: [40, 55, 35, 70, 62, 80, 48, 66] },
  { symbol: "BANK NIFTY", price: 51208.4, change: -0.18, spark: [30, 28, 29, 26, 24, 25, 22, 23, 21, 22, 20, 21], vol: [60, 42, 55, 38, 66, 44, 58, 40] },
  { symbol: "SENSEX", price: 79842.1, change: 0.44, spark: [15, 17, 16, 19, 18, 22, 21, 24, 26, 25, 28, 29], vol: [50, 62, 44, 58, 71, 49, 63, 52] },
  { symbol: "BTC / USDT", price: 97430, change: 1.85, spark: [10, 12, 18, 15, 22, 26, 24, 30, 34, 31, 38, 42], vol: [80, 62, 90, 55, 74, 88, 60, 95] },
  { symbol: "GOLD", price: 2412.3, change: 0.21, spark: [20, 21, 20, 22, 23, 22, 24, 23, 25, 26, 25, 27], vol: [35, 42, 38, 50, 44, 52, 46, 55] },
  { symbol: "USD / INR", price: 83.52, change: -0.05, spark: [26, 25, 26, 24, 25, 23, 24, 22, 23, 22, 21, 22], vol: [30, 36, 28, 40, 33, 38, 31, 36] },
];

const fmt = (n) => n.toLocaleString("en-IN", { minimumFractionDigits: 2, maximumFractionDigits: 2 });

const MarketCards = ({ compact = false }) => {
  const [tick, setTick] = useState(0);

  // Subtle demo jitter so the terminal feels alive — still clearly demo data.
  useEffect(() => {
    const id = setInterval(() => setTick((t) => t + 1), 3200);
    return () => clearInterval(id);
  }, []);

  return (
    <div data-testid="market-preview-widget" className="w-full">
      <div className="mb-3 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-pulse-dot rounded-full bg-gold" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-gold" />
          </span>
          <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-slate-400">
            Market Data Preview
          </span>
        </div>
        <span className="rounded border border-gold/30 bg-gold/10 px-2 py-0.5 font-mono text-[9px] uppercase tracking-[0.2em] text-gold">
          Demo · Not Live
        </span>
      </div>

      <div className={`grid gap-3 ${compact ? "grid-cols-2" : "grid-cols-2 sm:grid-cols-3"}`}>
        {DEMO_MARKETS.map((m, i) => {
          const up = m.change >= 0;
          const jitter = ((tick + i) % 3) * 0.01 * (up ? 1 : -1);
          const price = m.price * (1 + jitter / 100);
          const color = up ? "#00E59B" : "#fa3812";
          return (
            <div
              key={m.symbol}
              data-testid={`market-card-${m.symbol.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`}
              className="terminal-card group p-3 transition-colors duration-300 hover:border-slate-600"
              style={{ animationDelay: `${i * 120}ms` }}
            >
              <div className="flex items-start justify-between">
                <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-slate-400">{m.symbol}</span>
                {up ? <TrendingUp className="h-3.5 w-3.5 text-bull" /> : <TrendingDown className="h-3.5 w-3.5 text-bear" />}
              </div>
              <div className="mt-1.5 font-mono text-sm font-medium text-white sm:text-base">{fmt(price)}</div>
              <div className={`font-mono text-[11px] ${up ? "text-bull" : "text-bear"}`}>
                {up ? "+" : ""}
                {(m.change + jitter).toFixed(2)}%
              </div>
              <div className="mt-2 flex items-end justify-between gap-2">
                <Sparkline data={m.spark} color={color} width={86} height={30} id={`${i}-${compact ? "c" : "f"}`} />
                <div className="flex h-7 items-end gap-[2px]">
                  {m.vol.map((v, vi) => (
                    <span
                      key={vi}
                      className="w-[3px] rounded-sm bg-slate-700 transition-colors duration-300 group-hover:bg-slate-600"
                      style={{ height: `${(v / 100) * 28}px` }}
                    />
                  ))}
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <p className="mt-3 flex items-center gap-1.5 font-mono text-[10px] text-slate-500">
        <Activity className="h-3 w-3" />
        Static demo values for interface preview. Live feed activates when market data API is connected.
      </p>
    </div>
  );
};

export default MarketCards;
