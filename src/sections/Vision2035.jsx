import { motion } from 'framer-motion';
import { Building2, Leaf, ShieldCheck, Bus, BrainCircuit, TreePine } from 'lucide-react';

const milestones = [
  {
    year: '2025',
    title: 'Digital Foundation',
    phase: 'Phase 1',
    description: 'Deploy city-wide fiber, IoT sensor grid, and e-governance portal serving all 500K citizens.',
    color: '#60a5fa',
    glow: 'rgba(96,165,250,0.4)',
  },
  {
    year: '2027',
    title: 'Mobility Revolution',
    phase: 'Phase 2',
    description: 'Launch full smart transit network, AI traffic management, and integrated digital ticketing.',
    color: '#a78bfa',
    glow: 'rgba(167,139,250,0.4)',
  },
  {
    year: '2030',
    title: 'Green Energy Grid',
    phase: 'Phase 3',
    description: 'Achieve 80% renewable energy coverage through solar, wind, and hydro-integrated smart grid.',
    color: '#34d399',
    glow: 'rgba(52,211,153,0.4)',
  },
  {
    year: '2032',
    title: 'AI Governance',
    phase: 'Phase 4',
    description: 'Deploy AI-powered public service delivery, predictive maintenance, and civic data platforms.',
    color: '#f59e0b',
    glow: 'rgba(245,158,11,0.4)',
  },
  {
    year: '2035',
    title: 'Adama 2035',
    phase: 'Vision',
    description: 'A fully realized smart city — carbon-neutral, digitally inclusive, and globally recognized as Africa\'s innovation capital.',
    color: '#ec4899',
    glow: 'rgba(236,72,153,0.6)',
    isFinal: true,
  },
];

const pillars = [
  {
    title: 'Smart Infrastructure',
    icon: Building2,
    color: 'text-blue-400',
    bg: 'bg-blue-400/10 border-blue-400/20',
    description: 'Intelligent buildings, connected grids, and resilient urban architecture built for the next century.',
  },
  {
    title: 'Green Energy',
    icon: Leaf,
    color: 'text-emerald-400',
    bg: 'bg-emerald-400/10 border-emerald-400/20',
    description: '80% renewable energy powered by solar farms, Rift Valley wind corridors, and smart distribution.',
  },
  {
    title: 'Digital Governance',
    icon: ShieldCheck,
    color: 'text-violet-400',
    bg: 'bg-violet-400/10 border-violet-400/20',
    description: 'Transparent, data-driven government operations ensuring every decision is open, efficient, and citizen-first.',
  },
  {
    title: 'Connected Transport',
    icon: Bus,
    color: 'text-cyan-400',
    bg: 'bg-cyan-400/10 border-cyan-400/20',
    description: 'Fully integrated mobility network with EV transit, real-time routing, and zero-emission corridors.',
  },
  {
    title: 'AI Public Services',
    icon: BrainCircuit,
    color: 'text-amber-400',
    bg: 'bg-amber-400/10 border-amber-400/20',
    description: 'Predictive healthcare, AI-powered emergency response, and intelligent civic administration systems.',
  },
  {
    title: 'Sustainable Growth',
    icon: TreePine,
    color: 'text-pink-400',
    bg: 'bg-pink-400/10 border-pink-400/20',
    description: 'Urban expansion guided by ecology-first planning, green corridors, and carbon-offset infrastructure.',
  },
];

const Vision2035 = () => {
  return (
    <section id="vision" className="py-24 bg-slate-950 border-t border-slate-800 relative overflow-hidden">

      {/* Ambient Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[500px] bg-gradient-to-b from-pink-500/8 via-violet-500/5 to-transparent blur-[160px] rounded-full" />
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-emerald-500/5 blur-[150px] rounded-full" />
        {/* Grid */}
        <div className="absolute inset-0 opacity-[0.025]"
          style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.4) 1px, transparent 1px)', backgroundSize: '50px 50px' }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Header */}
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-pink-500/10 border border-pink-500/20 mb-6"
          >
            <span className="h-2 w-2 rounded-full bg-pink-500 animate-pulse" />
            <span className="text-sm font-semibold tracking-wide text-pink-400 uppercase">Strategic Roadmap</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.8 }}
            className="text-5xl md:text-7xl font-extrabold text-white tracking-tight mb-6 leading-none"
          >
            Adama{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-violet-500 to-cyan-400">
              Vision 2035
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed"
          >
            A bold, decade-long transformation into Africa's most forward-thinking, connected, and sustainable smart city.
          </motion.p>
        </div>

        {/* Timeline */}
        <div className="relative mb-24">
          {/* Connecting vertical line */}
          <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-blue-500/30 via-pink-500/30 to-transparent hidden lg:block" />

          <div className="space-y-8 lg:space-y-0">
            {milestones.map((m, i) => {
              const isEven = i % 2 === 0;
              return (
                <div
                  key={m.year}
                  className={`relative lg:grid lg:grid-cols-2 lg:gap-16 lg:items-center ${i > 0 ? 'lg:-mt-6' : ''}`}
                >
                  {/* Content */}
                  <motion.div
                    initial={{ opacity: 0, x: isEven ? -30 : 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: i * 0.08 }}
                    className={`${isEven ? 'lg:text-right lg:pr-12' : 'lg:col-start-2 lg:pl-12'} mb-6 lg:mb-0`}
                  >
                    <div className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full border mb-4 ${
                      m.isFinal
                        ? 'bg-pink-500/15 border-pink-500/30 text-pink-400'
                        : 'bg-slate-900 border-slate-700 text-slate-400'
                    }`}>
                      <span className="text-xs font-bold tracking-wider uppercase">{m.phase}</span>
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-3">{m.title}</h3>
                    <p className="text-slate-400 leading-relaxed">{m.description}</p>
                  </motion.div>

                  {/* Center Node — only shows on desktop */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: i * 0.1, type: 'spring' }}
                    className={`hidden lg:flex absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 flex-col items-center z-10`}
                  >
                    <motion.div
                      animate={{ boxShadow: [`0 0 0px ${m.glow}`, `0 0 20px ${m.glow}`, `0 0 0px ${m.glow}`] }}
                      transition={{ repeat: Infinity, duration: 3, delay: i * 0.5 }}
                      className="h-12 w-12 rounded-full border-2 flex items-center justify-center bg-slate-950"
                      style={{ borderColor: m.color }}
                    >
                      <span className="text-xs font-extrabold" style={{ color: m.color }}>{m.year}</span>
                    </motion.div>
                  </motion.div>

                  {/* Spacer for alternate side */}
                  {!isEven && <div className="lg:col-start-1 lg:row-start-1" />}
                </div>
              );
            })}
          </div>
        </div>

        {/* Vision Pillars */}
        <div>
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center text-2xl md:text-3xl font-bold text-white mb-10"
          >
            Six Pillars of the{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-violet-500">
              Smart City Vision
            </span>
          </motion.h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {pillars.map((pillar, i) => {
              const Icon = pillar.icon;
              return (
                <motion.div
                  key={pillar.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.09 }}
                  whileHover={{ y: -5, transition: { duration: 0.2 } }}
                  className="group flex items-start gap-5 p-6 bg-slate-900/50 border border-slate-800 hover:border-slate-700 rounded-2xl transition-all duration-300"
                >
                  <div className={`p-3 rounded-xl border shrink-0 ${pillar.bg} group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className={`h-6 w-6 ${pillar.color}`} />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-white mb-2">{pillar.title}</h4>
                    <p className="text-sm text-slate-400 leading-relaxed">{pillar.description}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
};

export default Vision2035;
