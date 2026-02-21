import React, { useState, useEffect } from "react";
import { ComposableMap, Geographies, Geography, Marker } from "react-simple-maps";
import { motion, AnimatePresence } from "framer-motion";

const geoUrl = "https://cdn.jsdelivr.net/npm/us-atlas@3/states-10m.json";

// Basin geometry generated from outer bounds of producing core
const basins = [
    {
        name: 'Permian',
        color: '#E53935',
        prod: 6180000,
        prodLabel: '6.18M bpd',
        activeWells: '160,500',
        rigCount: '303',
        reserves: '50B+ bbl',
        extraction: '5-10%',
        region: 'TX / NM',
        center: [-103.4, 31.8],
        path: "M-40,-30 L-25,-55 L0,-60 L35,-40 L50,0 L30,45 L0,55 L-35,35 L-50,0 Z"
    },
    {
        name: 'Eagle Ford',
        color: '#43A047',
        prod: 1100000,
        prodLabel: '1.10M bpd',
        activeWells: '27,100',
        rigCount: '40',
        reserves: '8.4B bbl',
        extraction: '8-12%',
        region: 'South TX',
        center: [-99.0, 28.5],
        path: "M-40,15 L-15,5 L25,-25 L40,-15 L15,15 L-25,30 Z"
    },
    {
        name: 'Bakken',
        color: '#1E88E5',
        prod: 1310000,
        prodLabel: '1.31M bpd',
        activeWells: '25,400',
        rigCount: '34',
        reserves: '7.4B bbl',
        extraction: '4-8%',
        region: 'ND / MT',
        center: [-103.0, 48.0],
        path: "M-30,-15 L-15,-25 L15,-15 L25,10 L10,25 L-15,15 Z"
    },
    {
        name: 'DJ Basin',
        color: '#FDD835',
        prod: 700000,
        prodLabel: '700k bpd',
        activeWells: '28,200',
        rigCount: '12',
        reserves: '4B+ bbl',
        extraction: '5-10%',
        region: 'CO / WY',
        center: [-104.5, 40.5],
        path: "M-10,-20 L20,-15 L30,15 L0,25 L-20,10 Z"
    },
    {
        name: 'SCOOP/STACK',
        color: '#FB8C00',
        prod: 380000,
        prodLabel: '380k bpd',
        activeWells: '18,300',
        rigCount: '35',
        reserves: '2.5B bbl',
        extraction: '6-12%',
        region: 'Oklahoma',
        center: [-98.0, 35.5],
        path: "M-15,-15 L10,-20 L15,10 L-10,15 Z"
    },
    {
        name: 'Marcellus',
        color: '#8E24AA',
        prod: 135000,
        prodLabel: '28.6 Bcf/d',
        activeWells: '12,400',
        rigCount: '26',
        reserves: '85 TSCF',
        extraction: '14-38%',
        region: 'PA / WV / OH',
        center: [-78.0, 41.0],
        path: "M-25,-30 L0,-40 L30,-15 L40,15 L10,40 L-25,15 Z"
    },
    {
        name: 'Haynesville',
        color: '#00ACC1',
        prod: 85000,
        prodLabel: '14.6 Bcf/d',
        activeWells: '14,800',
        rigCount: '34',
        reserves: '40+ TSCF',
        extraction: '10-20%',
        region: 'LA / TX',
        center: [-93.5, 32.5],
        path: "M-10,-15 L15,-10 L20,15 L-5,20 L-15,5 Z"
    },
    {
        name: 'Uinta',
        color: '#8D6E63',
        prod: 190000,
        prodLabel: '190k bpd',
        activeWells: '11,200',
        rigCount: '8',
        reserves: '1.2B bbl',
        extraction: '10-15%',
        region: 'Utah',
        center: [-110.0, 40.0],
        path: "M-15,-10 L15,-15 L25,5 L5,15 L-10,10 Z"
    },
    {
        name: 'Powder River',
        color: '#FFB300',
        prod: 140000,
        prodLabel: '140k bpd',
        activeWells: '15,600',
        rigCount: '10',
        reserves: '1.5B bbl',
        extraction: '8-15%',
        region: 'Wyoming',
        center: [-106.0, 43.5],
        path: "M-10,-20 L15,-15 L20,20 L-5,25 L-15,10 Z"
    },
    {
        name: 'Alaska North Slope',
        color: '#00E676',
        prod: 477000,
        prodLabel: '477k bpd',
        activeWells: '2,340',
        rigCount: '9',
        reserves: '25B+ bbl',
        extraction: '35-40%',
        region: 'Alaska',
        center: [-150.0, 70.0],
        path: "M-30,-10 L30,-10 L40,5 L-40,5 Z"
    },
    {
        name: 'San Joaquin',
        color: '#FF4081',
        prod: 285000,
        prodLabel: '285k bpd',
        activeWells: '39,500',
        rigCount: '4',
        reserves: '2B bbl',
        extraction: '15-25%',
        region: 'California',
        center: [-119.5, 35.5],
        path: "M-15,-25 L5,-15 L20,15 L-5,35 L-25,-5 Z"
    },
    {
        name: 'Gulf of America',
        color: '#00B0FF',
        prod: 1900000,
        prodLabel: '1.9M bpd',
        activeWells: '3,200',
        rigCount: '19',
        reserves: '4.5B bbl',
        extraction: '40-50%',
        region: 'Federal Waters',
        center: [-90.0, 27.5],
        path: "M-40,0 L-20,-10 L20,-10 L40,0 L20,15 L-20,15 Z"
    },
    {
        name: 'Appalachian',
        color: '#8E24AA',
        prod: 135000,
        prodLabel: '135k bpd & 35Bcf/d',
        activeWells: '110,000+',
        rigCount: '41',
        reserves: '100+ TSCF',
        extraction: '15-25%',
        region: 'PA / OH / WV',
        center: [-79.0, 40.0],
        path: "M-15,-30 L10,-40 L25,10 L-10,35 L-25,5 Z"
    },
    {
        name: 'Anadarko',
        color: '#F4511E',
        prod: 385000,
        prodLabel: '385k bpd',
        activeWells: '14,300',
        rigCount: '38',
        reserves: '3B bbl',
        extraction: '10-20%',
        region: 'OK / TX',
        center: [-99.0, 35.5],
        path: "M-20,-10 L20,-20 L25,10 L-10,15 Z"
    },
    {
        name: 'San Juan',
        color: '#FDD835',
        prod: 95000,
        prodLabel: '3.2 Bcf/d',
        activeWells: '38,000',
        rigCount: '2',
        reserves: '15 TSCF',
        extraction: '60+%',
        region: 'NM / CO',
        center: [-107.5, 36.5],
        path: "M-10,-10 L10,-10 L10,10 L-10,10 Z"
    },
    {
        name: 'Illinois',
        color: '#43A047',
        prod: 20000,
        prodLabel: '20k bpd',
        activeWells: '32,000',
        rigCount: '1',
        reserves: '300M bbl',
        extraction: '25-30%',
        region: 'IL / IN / KY',
        center: [-88.5, 38.5],
        path: "M-10,-20 L10,-15 L15,15 L-5,20 Z"
    },
    {
        name: 'Michigan',
        color: '#1E88E5',
        prod: 12300,
        prodLabel: '12.3k bpd',
        activeWells: '11,000',
        rigCount: '1',
        reserves: '120M bbl',
        extraction: '20-30%',
        region: 'Michigan',
        center: [-84.5, 43.5],
        path: "M-15,-15 L15,-15 L15,15 L-15,15 Z"
    },
    {
        name: 'Green River',
        color: '#D81B60',
        prod: 85000,
        prodLabel: '85k BOE',
        activeWells: '14,000',
        rigCount: '3',
        reserves: 'Trillions (Oil Shale)',
        extraction: '< 1%',
        region: 'Wyoming',
        center: [-109.0, 41.5],
        path: "M-15,-10 L15,-10 L15,10 L-15,10 Z"
    },
    {
        name: 'Fayetteville',
        color: '#BA68C8',
        prod: 35000,
        prodLabel: '2.1 Bcf/d',
        activeWells: '6,200',
        rigCount: '0',
        reserves: '7.1 TSCF',
        extraction: '10-20%',
        region: 'Arkansas',
        center: [-92.5, 35.3],
        path: "M-15,-5 L15,-8 L18,5 L-12,8 Z"
    },
    {
        name: 'Cotton Valley',
        color: '#4DD0E1',
        prod: 50000,
        prodLabel: '1.8 Bcf/d',
        activeWells: '12,000',
        rigCount: '12',
        reserves: '10+ TSCF',
        extraction: '15-25%',
        region: 'East TX / LA',
        center: [-94.5, 32.0],
        path: "M-10,-15 L15,-20 L10,15 L-15,20 Z"
    },
    {
        name: 'Austin Chalk',
        color: '#FFD54F',
        prod: 180000,
        prodLabel: '180k bpd',
        activeWells: '9,500',
        rigCount: '14',
        reserves: '1.2B bbl',
        extraction: '5-15%',
        region: 'Texas',
        center: [-97.5, 29.5],
        path: "M-25,10 L-5,5 L15,-15 L25,-5 L5,15 L-15,25 Z"
    },
    {
        name: 'Granite Wash',
        color: '#FF8A65',
        prod: 90000,
        prodLabel: '90k bpd',
        activeWells: '4,000',
        rigCount: '8',
        reserves: '600M bbl',
        extraction: '10-20%',
        region: 'TX Panhandle / OK',
        center: [-100.5, 35.5],
        path: "M-15,-10 L10,-15 L15,10 L-10,15 Z"
    },
    {
        name: 'Black Warrior',
        color: '#A1887F',
        prod: 15000,
        prodLabel: 'High CBM Gas',
        activeWells: '6,500',
        rigCount: '1',
        reserves: '1.5 TSCF',
        extraction: '30-40%',
        region: 'Alabama / MS',
        center: [-87.5, 33.5],
        path: "M-10,-10 L15,-5 L10,10 L-15,5 Z"
    },
    {
        name: 'Sedgwick',
        color: '#81C784',
        prod: 25000,
        prodLabel: '25k bpd',
        activeWells: '18,000',
        rigCount: '2',
        reserves: '200M bbl',
        extraction: '25-35%',
        region: 'Kansas',
        center: [-97.5, 37.5],
        path: "M-15,-15 L15,-10 L10,20 L-10,15 Z"
    },
    {
        name: 'Pine Valley',
        color: '#E0E0E0',
        prod: 5000,
        prodLabel: '1.2k bpd',
        activeWells: '120',
        rigCount: '0',
        reserves: '15M bbl',
        extraction: '15-20%',
        region: 'Nevada',
        center: [-116.0, 40.0],
        path: "M-5,-10 L5,-10 L5,10 L-5,10 Z"
    },
    {
        name: 'Paradox',
        color: '#FFB74D',
        prod: 15000,
        prodLabel: '15k bpd',
        activeWells: '1,500',
        rigCount: '1',
        reserves: '150M bbl',
        extraction: '20-30%',
        region: 'UT / CO',
        center: [-109.5, 38.0],
        path: "M-10,-15 L10,-10 L15,10 L-10,15 Z"
    },
    {
        name: 'Piceance',
        color: '#7986CB',
        prod: 45000,
        prodLabel: '1.5 Bcf/d',
        activeWells: '12,500',
        rigCount: '3',
        reserves: '18 TSCF',
        extraction: '10-20%',
        region: 'Colorado',
        center: [-108.0, 39.5],
        path: "M-12,-15 L12,-12 L10,15 L-15,10 Z"
    },
    {
        name: 'Los Angeles Basin',
        color: '#F06292',
        prod: 85000,
        prodLabel: '85k bpd',
        activeWells: '3,800',
        rigCount: '1',
        reserves: '1B+ bbl',
        extraction: '25-35%',
        region: 'California',
        center: [-118.2, 33.9],
        path: "M-5,-5 L10,-2 L8,8 L-8,5 Z"
    },
    {
        name: 'Barnett',
        color: '#4DD0E1',
        prod: 60000,
        prodLabel: '2.5 Bcf/d',
        activeWells: '14,500',
        rigCount: '1',
        reserves: '12 TSCF',
        extraction: '8-15%',
        region: 'Texas',
        center: [-97.5, 33.0],
        path: "M-15,-10 L15,-15 L10,15 L-12,12 Z"
    },
    {
        name: 'Bighorn',
        color: '#9575CD',
        prod: 18000,
        prodLabel: '18k bpd',
        activeWells: '2,200',
        rigCount: '0',
        reserves: '150M bbl',
        extraction: '30-40%',
        region: 'Wyoming',
        center: [-108.5, 44.5],
        path: "M-10,-15 L10,-10 L8,15 L-12,10 Z"
    },
    {
        name: 'Hanna-Carbon',
        color: '#4DB6AC',
        prod: 12000,
        prodLabel: '12k BOE',
        activeWells: '1,100',
        rigCount: '0',
        reserves: '80M bbl',
        extraction: '25-35%',
        region: 'Wyoming',
        center: [-106.5, 41.5],
        path: "M-8,-8 L8,-5 L5,8 L-8,5 Z"
    },
    {
        name: 'Sacramento',
        color: '#DCE775',
        prod: 15000,
        prodLabel: 'Dry Gas',
        activeWells: '1,800',
        rigCount: '2',
        reserves: '1.2 TSCF',
        extraction: '45-60%',
        region: 'California',
        center: [-121.5, 38.5],
        path: "M-5,-15 L5,-12 L2,15 L-8,12 Z"
    }
];

const oailLogoCoords = [-70.0, 30.0]; // Offshore Atlantic

const maxProd = Math.max(...basins.map(b => b.prod));
const getScale = (prod) => {
    // We scale the SVG path dimensions so the visual area matches the production scaling
    return Math.max(0.4, Math.sqrt(prod / maxProd));
};

export default function CoverageMap() {
    const [activeBasin, setActiveBasin] = useState(null);
    const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

    const handleMouseMove = (e) => {
        setMousePos({ x: e.clientX, y: e.clientY });
    };

    // Removed outside click handler as we are moving to hover interaction

    return (
        <div
            className="relative w-full h-[500px] md:h-[600px] overflow-hidden"
            onMouseMove={handleMouseMove}
        >
            <ComposableMap projection="geoAlbersUsa" className="w-full h-full object-cover">
                <Geographies geography={geoUrl}>
                    {({ geographies }) =>
                        geographies.map((geo) => (
                            <Geography
                                key={geo.rsmKey}
                                geography={geo}
                                fill="#0f0f0f"
                                stroke="#444444"
                                strokeWidth={0.8}
                                style={{
                                    default: { outline: "none" },
                                    hover: { outline: "none" },
                                    pressed: { outline: "none" },
                                }}
                            />
                        ))
                    }
                </Geographies>



                {/* Traced Basin Boundaries */}
                {basins.map((basin, i) => {
                    const scale = getScale(basin.prod);
                    const isActive = activeBasin && activeBasin.name === basin.name;
                    const isFaded = activeBasin && !isActive;

                    return (
                        <Marker
                            key={`marker-${i}`}
                            coordinates={basin.center}
                            onMouseEnter={(e) => {
                                e.stopPropagation();
                                setActiveBasin(basin);
                            }}
                            onMouseLeave={(e) => {
                                e.stopPropagation();
                                setActiveBasin(null);
                            }}
                            className="basin-marker cursor-pointer"
                            style={{
                                opacity: isFaded ? 0.2 : 1,
                                transition: 'opacity 0.3s'
                            }}
                        >
                            <g transform={`scale(${scale * 1.5})`}>
                                <path
                                    d={basin.path}
                                    fill={basin.color}
                                    fillOpacity={isActive ? 0.6 : 0.3}
                                    stroke={basin.color}
                                    strokeWidth={3 / (scale * 1.5)}
                                    style={{
                                        filter: `drop-shadow(0 0 12px ${basin.color})`,
                                        transition: 'fill-opacity 0.3s'
                                    }}
                                />
                            </g>
                        </Marker>
                    );
                })}

                {/* OAIL Hub Logo */}
                <Marker coordinates={oailLogoCoords}>
                    <image
                        href="/OAIL3_nobg.png"
                        x="-100"
                        y="-100"
                        width="200"
                        height="200"
                        style={{ filter: 'drop-shadow(0 0 35px rgba(229, 57, 53, 0.9)) drop-shadow(0 0 15px rgba(229, 57, 53, 0.5))' }}
                    />
                </Marker>
            </ComposableMap>

            {/* Interactive Tooltip Overlay dynamically mapped to cursor */}
            <AnimatePresence>
                {activeBasin && (
                    <motion.div
                        className="basin-tooltip fixed border border-[rgba(241,240,234,0.1)] rounded-sm min-w-[240px] z-50 pointer-events-none"
                        style={{
                            left: typeof window !== 'undefined' ? Math.min(mousePos.x + 20, window.innerWidth - 280) : mousePos.x + 20,
                            top: typeof window !== 'undefined' ? Math.min(mousePos.y + 20, window.innerHeight - 300) : mousePos.y + 20,
                            backgroundColor: 'rgba(5, 5, 5, 0.95)',
                            backdropFilter: 'blur(10px)',
                            boxShadow: `0 20px 40px rgba(0,0,0,0.8), 0 0 25px ${activeBasin.color}40`,
                        }}
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.9 }}
                        transition={{ duration: 0.15 }}
                    >
                        {/* Status bar */}
                        <div className="h-1 w-full" style={{ backgroundColor: activeBasin.color }} />

                        <div className="p-5">
                            <div className="flex items-center gap-3 mb-1">
                                <h3 className="text-xl font-bold tracking-tight text-[var(--cream)]">{activeBasin.name}</h3>
                            </div>
                            <p className="text-[10px] uppercase tracking-widest text-[var(--ink-tertiary)] mb-5 font-semibold">
                                {activeBasin.region}
                            </p>

                            <div className="grid grid-cols-2 gap-x-4 gap-y-3">
                                {activeBasin.prodLabel && (
                                    <div>
                                        <p className="text-[9px] font-semibold tracking-[0.1em] uppercase text-[var(--ink-tertiary)] mb-0.5">Production</p>
                                        <p className="text-lg font-black tabular-nums text-[var(--cream)]">{activeBasin.prodLabel}</p>
                                    </div>
                                )}
                                {activeBasin.activeWells && (
                                    <div>
                                        <p className="text-[9px] font-semibold tracking-[0.1em] uppercase text-[var(--ink-tertiary)] mb-0.5">Active Wells</p>
                                        <p className="text-lg font-black tabular-nums text-[var(--cream)]">{activeBasin.activeWells}</p>
                                    </div>
                                )}
                                {activeBasin.rigCount && (
                                    <div>
                                        <p className="text-[9px] font-semibold tracking-[0.1em] uppercase text-[var(--ink-tertiary)] mb-0.5">Rig Count</p>
                                        <p className="text-lg font-black tabular-nums text-[var(--cream)]">{activeBasin.rigCount}</p>
                                    </div>
                                )}
                                {activeBasin.extraction && (
                                    <div>
                                        <p className="text-[9px] font-semibold tracking-[0.1em] uppercase text-[var(--ink-tertiary)] mb-0.5">Est. Recovery</p>
                                        <p className="text-lg font-black tabular-nums text-[#00E676]">{activeBasin.extraction}</p>
                                    </div>
                                )}
                                {activeBasin.reserves && (
                                    <div className="col-span-2">
                                        <p className="text-[9px] font-semibold tracking-[0.1em] uppercase text-[var(--ink-tertiary)] mb-0.5">Proven Reserves</p>
                                        <p className="text-lg font-black tabular-nums text-[var(--cream)]">{activeBasin.reserves}</p>
                                    </div>
                                )}
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}
