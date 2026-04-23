import React from "react";
import {
  ComposableMap,
  Geographies,
  Geography,
  Marker,
  Line
} from "react-simple-maps";

const geoUrl = "https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json";

const markers = [
  { name: "HQ (BE)", coordinates: [4.3517, 50.8503] as [number, number] },
  { name: "Hub (TR)", coordinates: [35.2433, 38.9637] as [number, number] },
  { name: "Hub (CN)", coordinates: [104.1954, 35.8617] as [number, number] }
];

const lines = [
  { from: markers[0].coordinates, to: markers[1].coordinates }, // BE to TR
  { from: markers[0].coordinates, to: markers[2].coordinates }  // BE to CN
];

export default function SupplyChainMap({ bgTransparent = false }: { bgTransparent?: boolean } = {}) {
  return (
    <div className={`w-full h-full absolute inset-0 ${bgTransparent ? 'bg-transparent' : 'bg-slate-900'} overflow-hidden`}>
      <style>{`
        @keyframes dashAnim {
          from { stroke-dashoffset: 24; }
          to { stroke-dashoffset: 0; }
        }
        .anim-line {
          stroke-dasharray: 6 6;
          animation: dashAnim 1s linear infinite backwards;
        }
      `}</style>
      
      {/* Background Gradient to blend into the section */}
      <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-slate-900 z-10 pointer-events-none opacity-50" />
      <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-transparent to-slate-900 z-10 pointer-events-none opacity-50" />

      <ComposableMap
        projection="geoMercator"
        projectionConfig={{
          scale: 220,
          center: [50, 40] 
        }}
        className="w-full h-full"
      >
        <defs>
          <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="3" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        <Geographies geography={geoUrl}>
          {({ geographies }) =>
            geographies.map((geo) => (
              <Geography
                key={geo.rsmKey}
                geography={geo}
                fill="#334155" // slate-700 (much lighter than slate-800)
                stroke="#64748b" // slate-500
                strokeWidth={0.5}
                style={{
                  default: { outline: "none" },
                  hover: { fill: "#475569", outline: "none" },
                  pressed: { outline: "none" },
                }}
              />
            ))
          }
        </Geographies>

        {lines.map((line, i) => (
          <g key={i}>
            {/* The faint background track */}
            <Line
              from={line.from}
              to={line.to}
              stroke="#6366f1" // indigo-500
              strokeWidth={3}
              strokeOpacity={0.8}
              strokeLinecap="round"
            />
            {/* The animated moving flow line */}
            <Line
              from={line.from}
              to={line.to}
              stroke="#0ea5e9" // sky-500
              strokeWidth={3}
              strokeLinecap="round"
              className="anim-line"
            />
          </g>
        ))}

        {markers.map(({ name, coordinates }, i) => (
          <Marker key={name} coordinates={coordinates}>
            {/* Outer sonar wave expanding ring */}
            <circle cx={0} cy={0} r={4} fill="#0ea5e9">
              <animate 
                attributeName="r" 
                values="4; 28" 
                dur={`${2 + i * 0.3}s`} 
                repeatCount="indefinite" 
              />
              <animate 
                attributeName="opacity" 
                values="0.8; 0" 
                dur={`${2 + i * 0.3}s`} 
                repeatCount="indefinite" 
              />
            </circle>

            {/* Inner solid dot with subtle scale and color pulse */}
            <circle cx={0} cy={0} r={4} fill="#ffffff">
              <animate 
                attributeName="fill" 
                values="#ffffff; #7dd3fc; #ffffff" 
                dur="2s" 
                repeatCount="indefinite" 
              />
              <animate 
                attributeName="r" 
                values="4; 5.5; 4" 
                dur="2s" 
                repeatCount="indefinite" 
              />
            </circle>
            
            {/* Conditional text positioning based on location */}
            <text 
              textAnchor={i === 2 ? "end" : (i === 1 ? "start" : "middle")} 
              y={i === 0 ? -20 : 25} 
              dx={i === 2 ? -12 : (i === 1 ? 12 : 0)}
              style={{ fill: "#ffffff", fontSize: "14px", fontWeight: "bold", textShadow: "0px 2px 6px rgba(0,0,0,1)" }}
            >
              {name}
            </text>
          </Marker>
        ))}
      </ComposableMap>
    </div>
  );
}
