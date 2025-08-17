// components/Orbit.tsx
import React, { type CSSProperties } from "react";

type OrbitItem = {
  id: string;
  orbit: number;                 // 0–1 from center
  speed?: number;                // seconds per revolution
  direction?: "cw" | "ccw";
  startAngle?: number;           // degrees, 0 = top
  sizePx?: number;               // bubble size
  render: React.ReactNode;       // SVG / <Image/> / etc.
  zIndex?: number;               // NEW: control stacking
};

type Props = {
  center?: React.ReactNode;
  items: OrbitItem[];
  rings?: number[];
  className?: string;
};

export default function Orbit({
  center,
  items,
  rings = [1, 0.78, 0.58, 0.4],
  className,
}: Props) {
  return (
    <div className={`relative aspect-square w-full ${className ?? ""}`}>
      {/* rings behind everything */}
      {rings.map((s, i) => (
        <div key={`ring-${i}`} className="absolute inset-0 z-0 flex items-center justify-center">
          <div
            className="rounded-[42.375rem] border border-[#222228] opacity-50"
            style={{ width: `${s * 100}%`, height: `${s * 100}%` }}
          />
        </div>
      ))}

      {/* center */}
      {center && (
        <div className="absolute inset-0 z-10 grid place-items-center">
          <div className="flex items-center justify-center w-28 h-28 rounded-full bg-white/[0.06] ring-1 ring-white/10">
            {center}
          </div>
        </div>
      )}

      {/* satellites */}
      {items.map((it) => {
        const speed = it.speed ?? 20;
        const size = it.sizePx ?? 48;
        const dir: CSSProperties["animationDirection"] =
          it.direction === "ccw" ? "reverse" : "normal";
        const oppositeDir: CSSProperties["animationDirection"] =
          dir === "normal" ? "reverse" : "normal";
        const start = it.startAngle ?? 0;

        return (
          <div
            key={it.id}
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 motion-safe:animate-spin will-change-transform"
            style={{
              width: `${it.orbit * 100}%`,
              height: `${it.orbit * 100}%`,
              animationDuration: `${speed}s`,
              animationDirection: dir,
              zIndex: it.zIndex ?? 1, // <- control stacking per item
            }}
          >
            {/* position marker at 'top', rotate the orbit to the start angle */}
            <div className="relative w-full h-full will-change-transform" style={{ transform: `rotate(${start}deg)` }}>
              <div className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2">
                {/* counter-spin to cancel continuous spin */}
                <div
                  className="motion-safe:animate-spin will-change-transform"
                  style={{
                    animationDuration: `${speed}s`,
                    animationDirection: oppositeDir,
                  }}
                >
                  {/* static un-rotate to cancel initial startAngle so content is upright at t=0 */}
                  <div style={{ transform: `rotate(${-start}deg)` }}>
                    <div
                      className="relative overflow-hidden flex items-center justify-center rounded-full bg-black/60 ring-1 ring-white/15 shadow-lg backdrop-blur"
                      style={{ width: size, height: size }}
                    >
                      {it.render}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
