import { motion } from "framer-motion";

/* ─── Animated SVG Icons ─────────────────────────────────────────────── */

const IconDiscovery = () => (
  <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-8 h-8">
    <style>{`
      @keyframes draw-circle { to { stroke-dashoffset: 0; } }
      @keyframes draw-handle { to { stroke-dashoffset: 0; } }
      @keyframes fade-in     { to { opacity: 1; } }
      .ic-circle { stroke-dasharray: 75; stroke-dashoffset: 75; animation: draw-circle 1s ease forwards 0.2s; }
      .ic-inner  { stroke-dasharray: 50; stroke-dashoffset: 50; animation: draw-circle 1s ease forwards 0.5s; }
      .ic-handle { stroke-dasharray: 20; stroke-dashoffset: 20; animation: draw-handle 0.5s ease forwards 1s; }
      .ic-cross  { opacity: 0; animation: fade-in 0.4s ease forwards 1.3s; }
    `}</style>
    <circle className="ic-circle" cx="20" cy="20" r="12" stroke="rgba(255,255,255,0.7)" strokeWidth="1.8"/>
    <circle className="ic-inner"  cx="20" cy="20" r="7"  stroke="rgba(255,255,255,0.4)" strokeWidth="1"/>
    <line   className="ic-handle" x1="29" y1="29" x2="41" y2="41" stroke="rgba(255,255,255,0.7)" strokeWidth="2.5" strokeLinecap="round"/>
    <line   className="ic-cross"  x1="20" y1="14" x2="20" y2="17" stroke="rgba(255,255,255,0.6)" strokeWidth="1.2" strokeLinecap="round"/>
    <line   className="ic-cross"  x1="20" y1="23" x2="20" y2="26" stroke="rgba(255,255,255,0.6)" strokeWidth="1.2" strokeLinecap="round"/>
    <line   className="ic-cross"  x1="14" y1="20" x2="17" y2="20" stroke="rgba(255,255,255,0.6)" strokeWidth="1.2" strokeLinecap="round"/>
    <line   className="ic-cross"  x1="23" y1="20" x2="26" y2="20" stroke="rgba(255,255,255,0.6)" strokeWidth="1.2" strokeLinecap="round"/>
  </svg>
);

const IconPlanning = () => (
  <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-8 h-8">
    <style>{`
      .ip-board { stroke-dasharray: 160; stroke-dashoffset: 160; animation: draw-circle 0.9s ease forwards 0.1s; }
      .ip-clip  { stroke-dasharray: 50;  stroke-dashoffset: 50;  animation: draw-circle 0.6s ease forwards 0.7s; }
      .ip-line1 { stroke-dasharray: 20;  stroke-dashoffset: 20;  animation: draw-handle 0.4s ease forwards 1s;   }
      .ip-line2 { stroke-dasharray: 20;  stroke-dashoffset: 20;  animation: draw-handle 0.4s ease forwards 1.15s; }
      .ip-line3 { stroke-dasharray: 20;  stroke-dashoffset: 20;  animation: draw-handle 0.4s ease forwards 1.3s;  }
      .ip-line4 { stroke-dasharray: 20;  stroke-dashoffset: 20;  animation: draw-handle 0.4s ease forwards 1.45s; }
      .ip-pen   { stroke-dasharray: 24;  stroke-dashoffset: 24;  animation: draw-handle 0.5s ease forwards 1.6s;  }
    `}</style>
    <rect className="ip-board" x="9" y="11" width="30" height="34" rx="2" stroke="rgba(255,255,255,0.7)" strokeWidth="1.6"/>
    <rect className="ip-clip"  x="17" y="8"  width="14" height="7"  rx="3" stroke="rgba(255,255,255,0.7)" strokeWidth="1.4"/>
    <line className="ip-line1" x1="15" y1="22" x2="33" y2="22" stroke="rgba(255,255,255,0.4)" strokeWidth="1" strokeLinecap="round"/>
    <line className="ip-line2" x1="15" y1="27" x2="33" y2="27" stroke="rgba(255,255,255,0.4)" strokeWidth="1" strokeLinecap="round"/>
    <line className="ip-line3" x1="15" y1="32" x2="33" y2="32" stroke="rgba(255,255,255,0.4)" strokeWidth="1" strokeLinecap="round"/>
    <line className="ip-line4" x1="15" y1="37" x2="26" y2="37" stroke="rgba(255,255,255,0.4)" strokeWidth="1" strokeLinecap="round"/>
    <line className="ip-pen"   x1="36" y1="28" x2="43" y2="18" stroke="rgba(255,255,255,0.6)" strokeWidth="1.5" strokeLinecap="round"/>
  </svg>
);

const IconDesign = () => (
  <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-8 h-8">
    <style>{`
      @keyframes bulb-glow { 0%,100%{opacity:0.05} 50%{opacity:0.15} }
      .id-glow  { animation: bulb-glow 2.5s ease-in-out infinite 1.5s; }
      .id-bulb  { stroke-dasharray: 80; stroke-dashoffset: 80; animation: draw-circle 1.1s ease forwards 0.2s; }
      .id-base1 { stroke-dasharray: 14; stroke-dashoffset: 14; animation: draw-handle 0.4s ease forwards 1s; }
      .id-base2 { stroke-dasharray: 12; stroke-dashoffset: 12; animation: draw-handle 0.4s ease forwards 1.1s; }
      .id-ray   { opacity: 0; animation: fade-in 0.3s ease forwards; }
    `}</style>
    <circle className="id-glow" cx="24" cy="20" r="16" fill="white" opacity="0"/>
    <path   className="id-bulb" d="M16 20a8 8 0 1 1 16 0c0 4-2.5 6-2.5 9H18.5c0-3-2.5-5-2.5-9Z" stroke="rgba(255,255,255,0.7)" strokeWidth="1.6"/>
    <line   className="id-base1" x1="18.5" y1="31" x2="29.5" y2="31" stroke="rgba(255,255,255,0.7)" strokeWidth="1.4" strokeLinecap="round"/>
    <line   className="id-base2" x1="19.5" y1="34" x2="28.5" y2="34" stroke="rgba(255,255,255,0.7)" strokeWidth="1.4" strokeLinecap="round"/>
    {[0,45,90,135,180,225,270,315].map((deg, i) => {
      const r = 17, r2 = 20, rad = deg * Math.PI / 180;
      return <line key={deg} className="id-ray"
        x1={24 + r * Math.cos(rad)} y1={20 + r * Math.sin(rad)}
        x2={24 + r2 * Math.cos(rad)} y2={20 + r2 * Math.sin(rad)}
        stroke="rgba(255,255,255,0.4)" strokeWidth="1" strokeLinecap="round" opacity="0.5"
        style={{ animationDelay: `${1.2 + i * 0.07}s` }}
      />;
    })}
  </svg>
);

const IconTechnical = () => (
  <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-8 h-8">
    <style>{`
      @keyframes spin-cw  { to { transform: rotate(360deg);  } }
      @keyframes spin-ccw { to { transform: rotate(-360deg); } }
      .it-gear-big { transform-origin: 19px 22px; animation: spin-cw  8s linear infinite 1s; }
      .it-gear-sm  { transform-origin: 34px 30px; animation: spin-ccw 5s linear infinite 1s; }
      .it-big-ring { stroke-dasharray: 90; stroke-dashoffset: 90; animation: draw-circle 0.9s ease forwards 0.2s; }
      .it-sm-ring  { stroke-dasharray: 56; stroke-dashoffset: 56; animation: draw-circle 0.7s ease forwards 0.7s; }
    `}</style>
    <g className="it-gear-big">
      <circle className="it-big-ring" cx="19" cy="22" r="7"  stroke="rgba(255,255,255,0.7)" strokeWidth="1.6"/>
      <circle cx="19" cy="22" r="2.5" stroke="rgba(255,255,255,0.5)" strokeWidth="1.2"/>
      {[0,30,60,90,120,150,180,210,240,270,300,330].map(d => {
        const rad = d * Math.PI / 180;
        return <rect key={d}
          x={19 + 8.5 * Math.cos(rad) - 1.2} y={22 + 8.5 * Math.sin(rad) - 2.5}
          width="2.4" height="5" rx="0.8" fill="rgba(255,255,255,0.6)"
          transform={`rotate(${d} ${19 + 8.5*Math.cos(rad)} ${22 + 8.5*Math.sin(rad)})`}
        />;
      })}
    </g>
    <g className="it-gear-sm">
      <circle className="it-sm-ring" cx="34" cy="30" r="5"  stroke="rgba(255,255,255,0.7)" strokeWidth="1.4"/>
      <circle cx="34" cy="30" r="1.8" stroke="rgba(255,255,255,0.5)" strokeWidth="1.1"/>
      {[0,60,120,180,240,300].map(d => {
        const rad = d * Math.PI / 180;
        return <rect key={d}
          x={34 + 6.5 * Math.cos(rad) - 1} y={30 + 6.5 * Math.sin(rad) - 2}
          width="2" height="4" rx="0.6" fill="rgba(255,255,255,0.55)"
          transform={`rotate(${d} ${34 + 6.5*Math.cos(rad)} ${30 + 6.5*Math.sin(rad)})`}
        />;
      })}
    </g>
  </svg>
);

const IconExecution = () => (
  <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-8 h-8">
    <style>{`
      @keyframes cable-bob { 0%,100%{transform:translateY(0)} 50%{transform:translateY(2px)} }
      .ie-tower  { stroke-dasharray: 40; stroke-dashoffset: 40; animation: draw-handle 0.7s ease forwards 0.1s; }
      .ie-arm    { stroke-dasharray: 26; stroke-dashoffset: 26; animation: draw-handle 0.5s ease forwards 0.6s; }
      .ie-back   { stroke-dasharray: 12; stroke-dashoffset: 12; animation: draw-handle 0.3s ease forwards 0.9s; }
      .ie-cable  { stroke-dasharray: 18; stroke-dashoffset: 18; animation: draw-handle 0.4s ease forwards 1.1s; }
      .ie-hook   { stroke-dasharray: 14; stroke-dashoffset: 14; animation: draw-handle 0.4s ease forwards 1.4s; }
      .ie-check  { stroke-dasharray: 18; stroke-dashoffset: 18; animation: draw-handle 0.5s ease forwards 1.8s; }
      .ie-sway   { animation: cable-bob 2s ease-in-out infinite 2s; }
    `}</style>
    <line className="ie-tower" x1="18" y1="43" x2="18" y2="12" stroke="rgba(255,255,255,0.7)" strokeWidth="1.8" strokeLinecap="round"/>
    <line className="ie-arm"   x1="18" y1="12" x2="40" y2="12" stroke="rgba(255,255,255,0.7)" strokeWidth="1.8" strokeLinecap="round"/>
    <line className="ie-back"  x1="18" y1="12" x2="10" y2="12" stroke="rgba(255,255,255,0.7)" strokeWidth="1.8" strokeLinecap="round"/>
    <g className="ie-sway">
      <line className="ie-cable" x1="33" y1="12" x2="33" y2="28" stroke="rgba(255,255,255,0.4)" strokeWidth="1" strokeLinecap="round"/>
      <path className="ie-hook"  d="M30 27 a4 3 0 0 0 6 0" stroke="rgba(255,255,255,0.6)" strokeWidth="1.4" strokeLinecap="round"/>
    </g>
    <line x1="18" y1="16" x2="28" y2="12" stroke="rgba(255,255,255,0.25)" strokeWidth="0.8"/>
    <line x1="18" y1="16" x2="35" y2="12" stroke="rgba(255,255,255,0.25)" strokeWidth="0.8"/>
    <rect x="13" y="40" width="10" height="3" rx="1" stroke="rgba(255,255,255,0.4)" strokeWidth="1.3"/>
    <path className="ie-check" d="M37 33 l3 4 l6-6" stroke="rgba(255,255,255,0.8)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const phaseIcons = [IconDiscovery, IconPlanning, IconDesign, IconTechnical, IconExecution];

/* ─── Step-level SVG icons ───────────────────────────────────────────── */
const StepIcons = {
  "01": () => (
    <svg viewBox="0 0 16 16" fill="none" className="w-4 h-4 flex-shrink-0">
      <circle cx="5.5" cy="5" r="2" stroke="currentColor" strokeWidth="1.1"/>
      <path d="M2 13c0-2 1.5-3 3.5-3s3.5 1 3.5 3" stroke="currentColor" strokeWidth="1.1" strokeLinecap="round"/>
      <circle cx="11.5" cy="5" r="2" stroke="currentColor" strokeWidth="1.1"/>
      <path d="M8.5 13c0-2 1.5-3 3-3s3 1 3 3" stroke="currentColor" strokeWidth="1.1" strokeLinecap="round"/>
    </svg>
  ),
  "02": () => (
    <svg viewBox="0 0 16 16" fill="none" className="w-4 h-4 flex-shrink-0">
      <path d="M8 2a4 4 0 0 1 4 4c0 3-4 8-4 8S4 9 4 6a4 4 0 0 1 4-4Z" stroke="currentColor" strokeWidth="1.1"/>
      <circle cx="8" cy="6" r="1.4" stroke="currentColor" strokeWidth="1"/>
    </svg>
  ),
  "03": () => (
    <svg viewBox="0 0 16 16" fill="none" className="w-4 h-4 flex-shrink-0">
      <rect x="2" y="2" width="12" height="12" rx="1" stroke="currentColor" strokeWidth="1.1"/>
      <line x1="2" y1="8" x2="14" y2="8" stroke="currentColor" strokeWidth="0.9"/>
      <line x1="8" y1="2" x2="8" y2="14" stroke="currentColor" strokeWidth="0.9"/>
    </svg>
  ),
  "04": () => (
    <svg viewBox="0 0 16 16" fill="none" className="w-4 h-4 flex-shrink-0">
      <circle cx="8" cy="8" r="5.5" stroke="currentColor" strokeWidth="1.1"/>
      <circle cx="6" cy="6" r="1" fill="currentColor"/>
      <circle cx="10" cy="6" r="1" fill="currentColor"/>
      <circle cx="8" cy="10" r="1" fill="currentColor"/>
    </svg>
  ),
  "05": () => (
    <svg viewBox="0 0 16 16" fill="none" className="w-4 h-4 flex-shrink-0">
      <rect x="1" y="6" width="14" height="4" rx="1" stroke="currentColor" strokeWidth="1.1"/>
      <line x1="4" y1="6" x2="4" y2="10" stroke="currentColor" strokeWidth="0.9"/>
      <line x1="7" y1="6" x2="7" y2="8.5" stroke="currentColor" strokeWidth="0.9"/>
      <line x1="10" y1="6" x2="10" y2="10" stroke="currentColor" strokeWidth="0.9"/>
      <line x1="13" y1="6" x2="13" y2="8.5" stroke="currentColor" strokeWidth="0.9"/>
    </svg>
  ),
  "06": () => (
    <svg viewBox="0 0 16 16" fill="none" className="w-4 h-4 flex-shrink-0">
      <path d="M8 2L14 5.5V10.5L8 14L2 10.5V5.5L8 2Z" stroke="currentColor" strokeWidth="1.1"/>
      <line x1="8" y1="2" x2="8" y2="8" stroke="currentColor" strokeWidth="0.9"/>
      <line x1="2" y1="5.5" x2="8" y2="8" stroke="currentColor" strokeWidth="0.9"/>
      <line x1="14" y1="5.5" x2="8" y2="8" stroke="currentColor" strokeWidth="0.9"/>
    </svg>
  ),
  "07": () => (
    <svg viewBox="0 0 16 16" fill="none" className="w-4 h-4 flex-shrink-0">
      <rect x="2" y="2" width="5" height="5" rx="0.8" stroke="currentColor" strokeWidth="1.1"/>
      <rect x="9" y="2" width="5" height="5" rx="0.8" stroke="currentColor" strokeWidth="1.1"/>
      <rect x="2" y="9" width="5" height="5" rx="0.8" stroke="currentColor" strokeWidth="1.1"/>
      <rect x="9" y="9" width="5" height="5" rx="0.8" stroke="currentColor" strokeWidth="1.1"/>
    </svg>
  ),
  "08": () => (
    <svg viewBox="0 0 16 16" fill="none" className="w-4 h-4 flex-shrink-0">
      <path d="M8 2L14 5L8 8L2 5L8 2Z" stroke="currentColor" strokeWidth="1.1"/>
      <path d="M2 8.5L8 11.5L14 8.5" stroke="currentColor" strokeWidth="1" strokeLinecap="round"/>
      <path d="M2 11.5L8 14.5L14 11.5" stroke="currentColor" strokeWidth="1" strokeLinecap="round"/>
    </svg>
  ),
  "09": () => (
    <svg viewBox="0 0 16 16" fill="none" className="w-4 h-4 flex-shrink-0">
      <rect x="2" y="3" width="12" height="9" rx="1" stroke="currentColor" strokeWidth="1.1"/>
      <path d="M2 9l3-3 3 3 2-2 4 4" stroke="currentColor" strokeWidth="0.9" strokeLinecap="round" strokeLinejoin="round"/>
      <circle cx="5.5" cy="6.5" r="1" stroke="currentColor" strokeWidth="0.8"/>
      <line x1="8" y1="12" x2="8" y2="14" stroke="currentColor" strokeWidth="1.1" strokeLinecap="round"/>
    </svg>
  ),
  "10": () => (
    <svg viewBox="0 0 16 16" fill="none" className="w-4 h-4 flex-shrink-0">
      <path d="M8 1l1.8 3.8 4.2.6-3 3 .7 4.2L8 10.5l-3.7 2.1.7-4.2-3-3 4.2-.6L8 1Z" stroke="currentColor" strokeWidth="1.1" strokeLinejoin="round"/>
    </svg>
  ),
  "11": () => (
    <svg viewBox="0 0 16 16" fill="none" className="w-4 h-4 flex-shrink-0">
      <path d="M2 5c2-2 4-2 6 0s4 2 6 0" stroke="currentColor" strokeWidth="1.1" strokeLinecap="round"/>
      <path d="M2 8c2-2 4-2 6 0s4 2 6 0" stroke="currentColor" strokeWidth="1.1" strokeLinecap="round"/>
      <path d="M2 11c2-2 4-2 6 0s4 2 6 0" stroke="currentColor" strokeWidth="1.1" strokeLinecap="round"/>
    </svg>
  ),
  "12": () => (
    <svg viewBox="0 0 16 16" fill="none" className="w-4 h-4 flex-shrink-0">
      <rect x="2" y="7" width="12" height="5" rx="1" stroke="currentColor" strokeWidth="1.1"/>
      <rect x="4" y="5" width="8" height="3" rx="1" stroke="currentColor" strokeWidth="1"/>
      <line x1="4" y1="12" x2="4" y2="14" stroke="currentColor" strokeWidth="1.1" strokeLinecap="round"/>
      <line x1="12" y1="12" x2="12" y2="14" stroke="currentColor" strokeWidth="1.1" strokeLinecap="round"/>
    </svg>
  ),
  "13": () => (
    <svg viewBox="0 0 16 16" fill="none" className="w-4 h-4 flex-shrink-0">
      <path d="M5 8l3-5 3 5H5Z" stroke="currentColor" strokeWidth="1.1" strokeLinejoin="round"/>
      <line x1="8" y1="8" x2="8" y2="13" stroke="currentColor" strokeWidth="1.1" strokeLinecap="round"/>
      <line x1="6" y1="13" x2="10" y2="13" stroke="currentColor" strokeWidth="1.1" strokeLinecap="round"/>
      <line x1="3" y1="5" x2="4.5" y2="6" stroke="currentColor" strokeWidth="0.9" strokeLinecap="round"/>
      <line x1="13" y1="5" x2="11.5" y2="6" stroke="currentColor" strokeWidth="0.9" strokeLinecap="round"/>
      <line x1="2" y1="8" x2="4" y2="8" stroke="currentColor" strokeWidth="0.9" strokeLinecap="round"/>
      <line x1="14" y1="8" x2="12" y2="8" stroke="currentColor" strokeWidth="0.9" strokeLinecap="round"/>
    </svg>
  ),
  "14": () => (
    <svg viewBox="0 0 16 16" fill="none" className="w-4 h-4 flex-shrink-0">
      <rect x="2" y="2" width="12" height="12" rx="1" stroke="currentColor" strokeWidth="1.1"/>
      <line x1="5" y1="2" x2="5" y2="14" stroke="currentColor" strokeWidth="0.7" strokeOpacity="0.5"/>
      <line x1="8" y1="2" x2="8" y2="14" stroke="currentColor" strokeWidth="0.7" strokeOpacity="0.5"/>
      <line x1="11" y1="2" x2="11" y2="14" stroke="currentColor" strokeWidth="0.7" strokeOpacity="0.5"/>
      <line x1="2" y1="5" x2="14" y2="5" stroke="currentColor" strokeWidth="0.7" strokeOpacity="0.5"/>
      <line x1="2" y1="8" x2="14" y2="8" stroke="currentColor" strokeWidth="0.7" strokeOpacity="0.5"/>
      <line x1="2" y1="11" x2="14" y2="11" stroke="currentColor" strokeWidth="0.7" strokeOpacity="0.5"/>
      <path d="M4 10V6h3v4" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"/>
      <line x1="4" y1="8" x2="7" y2="8" stroke="currentColor" strokeWidth="1"/>
    </svg>
  ),
  "15": () => (
    <svg viewBox="0 0 16 16" fill="none" className="w-4 h-4 flex-shrink-0">
      <rect x="3" y="2" width="10" height="12" rx="1" stroke="currentColor" strokeWidth="1.1"/>
      <rect x="5" y="4" width="6" height="2.5" rx="0.5" stroke="currentColor" strokeWidth="0.9"/>
      <circle cx="5.5" cy="10" r="0.8" fill="currentColor"/>
      <circle cx="8" cy="10" r="0.8" fill="currentColor"/>
      <circle cx="10.5" cy="10" r="0.8" fill="currentColor"/>
      <circle cx="5.5" cy="12.5" r="0.8" fill="currentColor"/>
      <circle cx="8" cy="12.5" r="0.8" fill="currentColor"/>
      <circle cx="10.5" cy="12.5" r="0.8" fill="currentColor"/>
    </svg>
  ),
  "16": () => (
    <svg viewBox="0 0 16 16" fill="none" className="w-4 h-4 flex-shrink-0">
      <path d="M1 8s2.5-5 7-5 7 5 7 5-2.5 5-7 5S1 8 1 8Z" stroke="currentColor" strokeWidth="1.1"/>
      <circle cx="8" cy="8" r="2" stroke="currentColor" strokeWidth="1.1"/>
    </svg>
  ),
  "17": () => (
    <svg viewBox="0 0 16 16" fill="none" className="w-4 h-4 flex-shrink-0">
      <circle cx="5.5" cy="7" r="3" stroke="currentColor" strokeWidth="1.1"/>
      <line x1="7.8" y1="9" x2="15" y2="14" stroke="currentColor" strokeWidth="1.1" strokeLinecap="round"/>
      <line x1="11.5" y1="11.5" x2="11.5" y2="13.5" stroke="currentColor" strokeWidth="1" strokeLinecap="round"/>
      <line x1="13.5" y1="12.5" x2="13.5" y2="14" stroke="currentColor" strokeWidth="1" strokeLinecap="round"/>
    </svg>
  ),
  "18": () => (
    <svg viewBox="0 0 16 16" fill="none" className="w-4 h-4 flex-shrink-0">
      <circle cx="8" cy="8" r="2" stroke="currentColor" strokeWidth="1"/>
      <ellipse cx="8" cy="4" rx="1.5" ry="2" stroke="currentColor" strokeWidth="0.9"/>
      <ellipse cx="8" cy="12" rx="1.5" ry="2" stroke="currentColor" strokeWidth="0.9"/>
      <ellipse cx="4" cy="8" rx="2" ry="1.5" stroke="currentColor" strokeWidth="0.9"/>
      <ellipse cx="12" cy="8" rx="2" ry="1.5" stroke="currentColor" strokeWidth="0.9"/>
    </svg>
  ),
  "19": () => (
    <svg viewBox="0 0 16 16" fill="none" className="w-4 h-4 flex-shrink-0">
      <rect x="3" y="2" width="10" height="13" rx="1" stroke="currentColor" strokeWidth="1.1"/>
      <circle cx="11" cy="8.5" r="0.9" fill="currentColor"/>
      <path d="M5.5 7.5l2 2 3-3" stroke="currentColor" strokeWidth="1.1" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  ),
};

const phases = [
  {
    label: "Discovery",
    steps: 2,
    steps_data: [
      { n: "01", title: "Client Meet", desc: "Vision, lifestyle, brand and budget." },
      { n: "02", title: "Site Visit", desc: "Detailed survey and accurate measurements." },
    ],
  },
  {
    label: "Planning",
    steps: 4,
    steps_data: [
      { n: "03", title: "Space Planning", desc: "Functional, intuitive layouts." },
      { n: "04", title: "Theme Selection", desc: "Choosing the design direction together." },
      { n: "05", title: "2D Drawings", desc: "Precise plans, elevations and sections." },
      { n: "06", title: "3D Visualizations", desc: "Photorealistic walkthroughs of your space." },
    ],
  },
  {
    label: "Design",
    steps: 4,
    steps_data: [
      { n: "07", title: "Color Palette", desc: "Curated tones across walls, fabrics and finishes." },
      { n: "08", title: "Materials", desc: "Sustainable, durable and beautiful selections." },
      { n: "09", title: "Mood Boards", desc: "Style, texture and atmosphere in one frame." },
      { n: "10", title: "Style Selection", desc: "Locking the final aesthetic direction." },
    ],
  },
  {
    label: "Technical",
    steps: 5,
    steps_data: [
      { n: "11", title: "HVAC", desc: "Climate, airflow and comfort engineered in." },
      { n: "12", title: "Furniture Layout", desc: "Loose and built-in furniture planning." },
      { n: "13", title: "Lighting Design", desc: "Layered ambient, task and accent lighting." },
      { n: "14", title: "Working Drawings", desc: "Construction-ready technical documentation." },
      { n: "15", title: "BOQ & Costing", desc: "Transparent, line-item budgeting." },
    ],
  },
  {
    label: "Execution",
    steps: 4,
    steps_data: [
      { n: "16", title: "Supervision", desc: "On-site quality and timeline management." },
      { n: "17", title: "Turnkey", desc: "Single-point delivery of the full project." },
      { n: "18", title: "Styling & Décor", desc: "Final layering of art, accessories and soft goods." },
      { n: "19", title: "Handover", desc: "Walkthrough, snag list and the keys to your space." },
    ],
  },
];

/* ─── Arrows ─────────────────────────────────────────────────────────── */
const HArrow = () => (
  <div className="hidden lg:flex items-start justify-center pt-5 flex-shrink-0 w-5">
    <svg width="20" height="16" viewBox="0 0 20 16" fill="none">
      <path
        d="M0 8 H14 M8 2 L16 8 L8 14"
        stroke="rgba(255,255,255,0.2)"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  </div>
);

const VArrow = () => (
  <div className="flex lg:hidden items-center justify-center h-6 w-full">
    <svg width="16" height="20" viewBox="0 0 16 20" fill="none">
      <path
        d="M8 0 V14 M2 8 L8 16 L14 8"
        stroke="rgba(255,255,255,0.2)"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  </div>
);

/* ─── Step card — cream bg, black text ───────────────────────────────── */
const StepCard = ({ n, title, desc }) => {
  const IconComp = StepIcons[n];
  return (
    <div
      className="group rounded-md px-2.5 py-2 cursor-default transition-all duration-150 hover:-translate-y-px hover:shadow-md"
      style={{
        background: "#F5F0E8",
        border: "0.5px solid rgba(0,0,0,0.08)",
      }}
    >
      <div className="flex items-start gap-2">
        <div className="mt-0.5 flex-shrink-0 text-neutral-400">
          {IconComp && <IconComp />}
        </div>
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-1.5 mb-0.5">
            <p className="text-[9px] font-medium tracking-wide text-neutral-400">
              {n}
            </p>
            <p className="text-[12px] font-semibold leading-snug text-neutral-900">
              {title}
            </p>
          </div>
          <p
            className="text-[11px] leading-snug text-neutral-500
              max-h-10 opacity-100
              lg:max-h-0 lg:overflow-hidden lg:opacity-0
              lg:group-hover:max-h-10 lg:group-hover:opacity-100
              transition-all duration-200"
          >
            {desc}
          </p>
        </div>
      </div>
    </div>
  );
};

/* ─── Phase card — monochrome ────────────────────────────────────────── */
const PhaseCard = ({ phase, index }) => {
  const Icon = phaseIcons[index];
  return (
    <motion.div
      className="flex-1 min-w-0 rounded-md overflow-hidden flex flex-col"
      style={{
        border: "0.5px solid rgba(255,255,255,0.1)",
      }}
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.35, delay: index * 0.07 }}
    >
      {/* Header */}
      <div
        className="flex items-center gap-2 px-3 py-2.5"
        style={{ background: "rgba(255,255,255,0.06)" }}
      >
        <span
          className="w-2 h-2 rounded-full flex-shrink-0"
          style={{ background: "rgba(255,255,255,0.5)" }}
        />
        <span className="text-[10px] font-medium tracking-widest uppercase flex-1 text-white/70">
          {phase.label}
        </span>
        {/* <span className="text-[9px] text-white/30">{phase.steps}</span> */}
      </div>

      {/* Animated icon strip */}
      <div
        className="flex items-center justify-center py-3"
        style={{
          background: "rgba(255,255,255,0.03)",
          borderBottom: "0.5px solid rgba(255,255,255,0.05)",
        }}
      >
        <Icon />
      </div>

      {/* Steps */}
      <div
        className="flex flex-col gap-1.5 p-2 rounded-b-md flex-1"
        style={{ background: "rgba(255,255,255,0.02)" }}
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-1.5">
          {phase.steps_data.map((s) => (
            <StepCard key={s.n} {...s} />
          ))}
        </div>
      </div>
    </motion.div>
  );
};

/* ─── Main section ───────────────────────────────────────────────────── */
const Approach = () => (
  <section
    id="approach"
    className="py-20 md:py-28 bg-espresso text-cream relative overflow-hidden"
  >
    <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_30%_20%,hsl(var(--gold))_0%,transparent_50%)]" />

    <div className="container relative max-w-7xl">
      {/* Header row */}
      <div className="relative flex items-start justify-between mb-10">
        <div>
          <p className="text-gold tracking-[0.3em] text-[10px] uppercase mb-3">Our Approach</p>
          <h2 className="font-display text-4xl md:text-5xl leading-tight">
            From concept<br />to completion.
          </h2>
        </div>
        <div className="hidden md:block absolute right-0 top-[-100px] w-[140px] lg:w-[200px] xl:w-[280px] pointer-events-none select-none">
          <img
            src="https://i.ibb.co/sp2xJM3f/yu.png"
            alt="building"
            className="w-full h-full object-contain"
            style={{ opacity: 0.85 }}
          />
        </div>
      </div>

      {/* Desktop: horizontal flex with arrows */}
      <div className="hidden lg:flex items-start gap-0">
        {phases.map((phase, pi) => (
          <div key={phase.label} className="flex items-start gap-0 flex-1 min-w-0">
            <PhaseCard phase={phase} index={pi} />
            {pi < phases.length - 1 && <HArrow />}
          </div>
        ))}
      </div>

      {/* Tablet: 2-column grid */}
      <div className="hidden sm:grid lg:hidden grid-cols-2 gap-4">
        {phases.map((phase, pi) => (
          <PhaseCard key={phase.label} phase={phase} index={pi} />
        ))}
      </div>

      {/* Mobile: single column with vertical arrows */}
      <div className="flex sm:hidden flex-col">
        {phases.map((phase, pi) => (
          <div key={phase.label} className="flex flex-col">
            <PhaseCard phase={phase} index={pi} />
            {pi < phases.length - 1 && <VArrow />}
          </div>
        ))}
      </div>

      {/* Footer */}
      <div className="mt-6 pt-4 border-t border-cream/8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2">
        <span className="text-[10px] uppercase tracking-[.2em] text-cream/25">
          End-to-end process
        </span>
        <div className="flex items-center gap-2">
          <span className="text-[11px] text-cream/30 hidden sm:inline">Hover any step to preview</span>
          <span className="text-cream/20 text-[11px] hidden sm:inline">·</span>
          <span className="text-[11px] text-cream/40">19 steps · 5 phases</span>
        </div>
      </div>
    </div>
  </section>
);

export default Approach;