import { useMemo } from "react";

// Lightweight SVG sparkline with area glow — used across demo market widgets.
const Sparkline = ({ data, color = "#00E59B", width = 120, height = 36, id }) => {
  const { points, area } = useMemo(() => {
    const min = Math.min(...data);
    const max = Math.max(...data);
    const range = max - min || 1;
    const stepX = width / (data.length - 1);
    const pts = data
      .map((v, i) => `${(i * stepX).toFixed(1)},${(height - 4 - ((v - min) / range) * (height - 8)).toFixed(1)}`)
      .join(" ");
    return { points: pts, area: `0,${height} ${pts} ${width},${height}` };
  }, [data, width, height]);

  return (
    <svg width={width} height={height} viewBox={`0 0 ${width} ${height}`} className="overflow-visible" aria-hidden="true">
      <defs>
        <linearGradient id={`sg-${id}`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor={color} stopOpacity="0.35" />
          <stop offset="100%" stopColor={color} stopOpacity="0" />
        </linearGradient>
      </defs>
      <polygon points={area} fill={`url(#sg-${id})`} />
      <polyline points={points} fill="none" stroke={color} strokeWidth="1.8" strokeLinejoin="round" strokeLinecap="round" />
    </svg>
  );
};

export default Sparkline;
