import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Bus, Lightbulb, Map, ShieldAlert, Factory, GraduationCap, X, Network } from 'lucide-react';

const locations = [
  {
    id: 'transport',
    title: 'Smart Transport Hub',
    icon: Bus,
    color: '#60a5fa',
    glow: 'rgba(96,165,250,0.6)',
    x: 22,
    y: 55,
    status: 'Operational',
    description: 'Central transit node managing 12 routes, digital ticketing, and real-time vehicle tracking across the city.',
    stats: [{ label: 'Active Routes', val: '12' }, { label: 'Vehicles', val: '340' }, { label: 'Uptime', val: '99%' }],
  },
  {
    id: 'innovation',
    title: 'Innovation Center',
    icon: Lightbulb,
    color: '#f59e0b',
    glow: 'rgba(245,158,11,0.6)',
    x: 55,
    y: 25,
    status: 'Active',
    description: 'ASTU-based hub for tech startups, research labs, and smart city pilot programs.',
    stats: [{ label: 'Startups', val: '48' }, { label: 'Researchers', val: '200+' }, { label: 'Projects', val: '31' }],
  },
  {
    id: 'tourism',
    title: 'Tourism District',
    icon: Map,
    color: '#a78bfa',
    glow: 'rgba(167,139,250,0.6)',
    x: 75,
    y: 40,
    status: 'Live',
    description: 'Digital heritage and tourism management zone including Aba Gada Center and Rift Valley sites.',
    stats: [{ label: 'Visitors Today', val: '3,420' }, { label: 'Active Sites', val: '14' }, { label: 'Avg Stay', val: '3.2 hrs' }],
  },
  {
    id: 'emergency',
    title: 'Emergency Center',
    icon: ShieldAlert,
    color: '#f43f5e',
    glow: 'rgba(244,63,94,0.6)',
    x: 45,
    y: 70,
    status: 'Standby',
    description: 'AI-integrated emergency coordination hub managing police, fire, and ambulance dispatch.',
    stats: [{ label: 'Units Ready', val: '12' }, { label: 'Response Time', val: '< 8 min' }, { label: 'AI Alerts', val: '0' }],
  },
  {
    id: 'industrial',
    title: 'Industrial Zone',
    icon: Factory,
    color: '#34d399',
    glow: 'rgba(52,211,153,0.6)',
    x: 20,
    y: 30,
    status: 'Operational',
    description: 'Adama Industrial Park with smart energy monitoring, IoT sensors, and automated logistics systems.',
    stats: [{ label: 'Factories', val: '67' }, { label: 'Energy Use', val: '94 MW' }, { label: 'Efficiency', val: '+45%' }],
  },
  {
    id: 'university',
    title: 'University Area',
    icon: GraduationCap,
    color: '#22d3ee',
    glow: 'rgba(34,211,238,0.6)',
    x: 65,
    y: 68,
    status: 'Active',
    description: 'Smart campus zone for Adama University and affiliated institutes with fiber connectivity and digital infrastructure.',
    stats: [{ label: 'Students', val: '22,000' }, { label: 'Faculties', val: '14' }, { label: 'Wifi Nodes', val: '220' }],
  },
];

// SVG connection paths between nodes (pairs of node ids)
const connections = [
  ['transport', 'industrial'],
  ['transport', 'emergency'],
  ['industrial', 'innovation'],
  ['innovation', 'tourism'],
  ['tourism', 'university'],
  ['emergency', 'university'],
  ['innovation', 'emergency'],
];

const getNodePos = (id) => {
  const node = locations.find((l) => l.id === id);
  return { x: node.x, y: node.y };
};

const CityMap = () => {
  const [activeNode, setActiveNode] = useState(null);

  return (
    <section id="city-map" className="py-24 bg-slate-900 border-t border-slate-800 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-cyan-500/5 blur-[150px] rounded-full" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/20 mb-6"
          >
            <Network className="h-4 w-4 text-cyan-400" />
            <span className="text-sm font-semibold tracking-wide text-cyan-400 uppercase">Digital Twin</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold text-white mb-4"
          >
            Adama <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">City Grid</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-slate-400 max-w-xl mx-auto"
          >
            Explore the interconnected smart infrastructure network powering Adama's city services in real time.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">

          {/* Map Canvas */}
          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-8 relative"
          >
            {/* Outer glow border */}
            <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500/20 via-blue-500/20 to-violet-500/20 rounded-3xl blur-lg opacity-60" />

            <div className="relative bg-slate-950/80 backdrop-blur-xl border border-white/10 rounded-2xl overflow-hidden"
              style={{ paddingBottom: '65%' }}
            >
              <div className="absolute inset-0">
                {/* Subtle grid overlay */}
                <div className="absolute inset-0 opacity-[0.04]"
                  style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)', backgroundSize: '30px 30px' }}
                />

                {/* SVG for connection lines */}
                <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                  <defs>
                    <filter id="glow">
                      <feGaussianBlur stdDeviation="0.5" result="coloredBlur"/>
                      <feMerge><feMergeNode in="coloredBlur"/><feMergeNode in="SourceGraphic"/></feMerge>
                    </filter>
                  </defs>
                  {connections.map(([fromId, toId], i) => {
                    const from = getNodePos(fromId);
                    const to = getNodePos(toId);
                    return (
                      <motion.line
                        key={i}
                        x1={from.x} y1={from.y} x2={to.x} y2={to.y}
                        stroke="rgba(34,211,238,0.15)"
                        strokeWidth="0.3"
                        strokeDasharray="2 2"
                        filter="url(#glow)"
                        initial={{ pathLength: 0, opacity: 0 }}
                        whileInView={{ pathLength: 1, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.5, delay: i * 0.2 }}
                      />
                    );
                  })}
                </svg>

                {/* Location Nodes */}
                {locations.map((loc) => {
                  const Icon = loc.icon;
                  const isActive = activeNode?.id === loc.id;
                  return (
                    <motion.button
                      key={loc.id}
                      initial={{ opacity: 0, scale: 0 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, type: 'spring', bounce: 0.5 }}
                      onClick={() => setActiveNode(isActive ? null : loc)}
                      className="absolute -translate-x-1/2 -translate-y-1/2 group z-10 focus:outline-none"
                      style={{ left: `${loc.x}%`, top: `${loc.y}%` }}
                    >
                      {/* Outer pulse ring */}
                      <motion.div
                        className="absolute inset-0 rounded-full"
                        animate={{ scale: [1, 2.5], opacity: [0.5, 0] }}
                        transition={{ repeat: Infinity, duration: 2.5, ease: 'easeOut' }}
                        style={{ backgroundColor: loc.glow, width: 32, height: 32, margin: -4 }}
                      />

                      {/* Icon Button */}
                      <div
                        className={`relative h-9 w-9 rounded-full flex items-center justify-center border-2 transition-all duration-300 ${isActive ? 'scale-125' : 'group-hover:scale-110'}`}
                        style={{ backgroundColor: `${loc.color}20`, borderColor: loc.color, boxShadow: isActive ? `0 0 24px ${loc.glow}` : 'none' }}
                      >
                        <Icon className="h-4 w-4" style={{ color: loc.color }} />
                      </div>

                      {/* Label */}
                      <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 whitespace-nowrap">
                        <span className="text-[10px] font-semibold text-slate-300 bg-slate-950/80 backdrop-blur-sm px-2 py-0.5 rounded-full border border-slate-700">
                          {loc.title}
                        </span>
                      </div>
                    </motion.button>
                  );
                })}
              </div>
            </div>
          </motion.div>

          {/* Right Side Panel */}
          <div className="lg:col-span-4 space-y-4">
            <AnimatePresence mode="wait">
              {activeNode ? (
                <motion.div
                  key={activeNode.id}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 20 }}
                  transition={{ duration: 0.3 }}
                  className="relative bg-slate-950/80 backdrop-blur-xl border border-white/10 rounded-2xl p-6"
                  style={{ boxShadow: `0 0 40px -15px ${activeNode.glow}` }}
                >
                  {/* Close button */}
                  <button
                    onClick={() => setActiveNode(null)}
                    className="absolute top-4 right-4 p-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-400 hover:text-white transition-colors"
                  >
                    <X className="h-4 w-4" />
                  </button>

                  {/* Node Icon Header */}
                  <div className="flex items-center gap-4 mb-5">
                    <div className="p-3 rounded-xl border" style={{ backgroundColor: `${activeNode.color}15`, borderColor: `${activeNode.color}40` }}>
                      <activeNode.icon className="h-7 w-7" style={{ color: activeNode.color }} />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-white">{activeNode.title}</h3>
                      <span className="text-xs font-semibold px-2 py-0.5 rounded-full border" style={{ color: activeNode.color, backgroundColor: `${activeNode.color}15`, borderColor: `${activeNode.color}30` }}>
                        ● {activeNode.status}
                      </span>
                    </div>
                  </div>

                  <p className="text-sm text-slate-400 leading-relaxed mb-6">{activeNode.description}</p>

                  <div className="grid grid-cols-3 gap-3">
                    {activeNode.stats.map((stat) => (
                      <div key={stat.label} className="bg-slate-900 border border-slate-800 rounded-xl p-3 text-center">
                        <p className="text-lg font-bold text-white">{stat.val}</p>
                        <p className="text-[10px] text-slate-500 mt-0.5">{stat.label}</p>
                      </div>
                    ))}
                  </div>
                </motion.div>
              ) : (
                <motion.div
                  key="idle"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="bg-slate-950/60 border border-slate-800 rounded-2xl p-6 text-center"
                >
                  <Network className="h-10 w-10 text-slate-700 mx-auto mb-4" />
                  <h4 className="text-lg font-semibold text-slate-300 mb-2">Select a Node</h4>
                  <p className="text-sm text-slate-500">Click any glowing marker on the map to explore that city zone.</p>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Node Legend */}
            <div className="bg-slate-950/60 border border-slate-800 rounded-2xl p-5">
              <h4 className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-4">City Zones</h4>
              <div className="space-y-3">
                {locations.map((loc) => {
                  const Icon = loc.icon;
                  return (
                    <button
                      key={loc.id}
                      onClick={() => setActiveNode(activeNode?.id === loc.id ? null : loc)}
                      className="w-full flex items-center gap-3 p-2.5 rounded-xl hover:bg-slate-900 transition-colors group"
                    >
                      <div className="h-7 w-7 rounded-lg flex items-center justify-center shrink-0 border" style={{ backgroundColor: `${loc.color}15`, borderColor: `${loc.color}30` }}>
                        <Icon className="h-3.5 w-3.5" style={{ color: loc.color }} />
                      </div>
                      <span className="text-sm text-slate-300 group-hover:text-white transition-colors text-left">{loc.title}</span>
                      <span className="ml-auto h-2 w-2 rounded-full shrink-0 animate-pulse" style={{ backgroundColor: loc.color }} />
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default CityMap;
