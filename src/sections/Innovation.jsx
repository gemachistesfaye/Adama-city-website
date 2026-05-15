import { motion } from 'framer-motion';
import { Rocket, MonitorSmartphone, Cpu, BrainCircuit, Users2, FlaskConical, ArrowUpRight } from 'lucide-react';

const initiatives = [
  {
    title: 'Startup Ecosystem',
    icon: Rocket,
    color: 'from-pink-500 to-rose-500',
    textColor: 'text-pink-400',
    borderColor: 'border-pink-500/20',
    bgColor: 'bg-pink-500/10',
    glow: 'hover:shadow-[0_0_40px_-15px_rgba(236,72,153,0.5)]',
    description: 'Adama hosts a growing ecosystem of 48+ technology startups supported by ASTU incubators, venture seed grants, and government-backed accelerator programs.',
    highlights: ['48+ active startups', 'ETB 12M in seed funding', '3 incubation cohorts/yr'],
    featured: true,
  },
  {
    title: 'Digital Services',
    icon: MonitorSmartphone,
    color: 'from-blue-500 to-cyan-500',
    textColor: 'text-blue-400',
    borderColor: 'border-blue-500/20',
    bgColor: 'bg-blue-500/10',
    glow: 'hover:shadow-[0_0_40px_-15px_rgba(96,165,250,0.5)]',
    description: 'End-to-end digitization of citizen services including e-ID, digital licensing, permit applications, and integrated tax management portals.',
    highlights: ['120+ e-services', '400K citizens served', '72h avg resolution'],
    featured: false,
  },
  {
    title: 'Smart Infrastructure',
    icon: Cpu,
    color: 'from-violet-500 to-purple-500',
    textColor: 'text-violet-400',
    borderColor: 'border-violet-500/20',
    bgColor: 'bg-violet-500/10',
    glow: 'hover:shadow-[0_0_40px_-15px_rgba(167,139,250,0.5)]',
    description: 'Fiber optic backbone, city-wide IoT sensor networks, and edge computing nodes deliver ultra-low-latency data for real-time governance decisions.',
    highlights: ['1,200 IoT sensors', '98% network uptime', '5G-ready corridors'],
    featured: false,
  },
  {
    title: 'AI Innovation',
    icon: BrainCircuit,
    color: 'from-amber-500 to-orange-500',
    textColor: 'text-amber-400',
    borderColor: 'border-amber-500/20',
    bgColor: 'bg-amber-500/10',
    glow: 'hover:shadow-[0_0_40px_-15px_rgba(245,158,11,0.5)]',
    description: 'Machine learning systems deployed for traffic prediction, energy grid balancing, healthcare triage, and city maintenance scheduling.',
    highlights: ['6 AI pilot projects', '40% faster decisions', 'Open data platform'],
    featured: false,
  },
  {
    title: 'Youth Tech Programs',
    icon: Users2,
    color: 'from-emerald-500 to-teal-500',
    textColor: 'text-emerald-400',
    borderColor: 'border-emerald-500/20',
    bgColor: 'bg-emerald-500/10',
    glow: 'hover:shadow-[0_0_40px_-15px_rgba(52,211,153,0.5)]',
    description: 'Hands-on coding bootcamps, drone engineering workshops, and civic hackathons empowering the next generation of smart city builders.',
    highlights: ['2,800+ youth trained', '14 annual programs', '94% job placement'],
    featured: false,
  },
  {
    title: 'Research & Development',
    icon: FlaskConical,
    color: 'from-cyan-500 to-blue-500',
    textColor: 'text-cyan-400',
    borderColor: 'border-cyan-500/20',
    bgColor: 'bg-cyan-500/10',
    glow: 'hover:shadow-[0_0_40px_-15px_rgba(34,211,238,0.5)]',
    description: 'ASTU-led research centers publish breakthroughs in sustainable urban technology, renewable energy, and community-centered digital design.',
    highlights: ['31 active projects', '200+ researchers', '18 patents filed'],
    featured: false,
  },
];

const Innovation = () => {
  return (
    <section id="innovation" className="py-24 bg-slate-900 border-t border-slate-800 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/3 w-[600px] h-[400px] bg-pink-500/5 blur-[150px] rounded-full" />
        <div className="absolute bottom-0 right-1/4 w-[500px] h-[400px] bg-violet-500/5 blur-[150px] rounded-full" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-pink-500/10 border border-pink-500/20 mb-6"
          >
            <BrainCircuit className="h-4 w-4 text-pink-400" />
            <span className="text-sm font-semibold tracking-wide text-pink-400 uppercase">Tech Ecosystem</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold text-white mb-4"
          >
            Innovation &{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-violet-500">
              Technology Hub
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-slate-400 max-w-2xl mx-auto"
          >
            Building Adama's future through bold civic technology, empowered youth, and world-class research
            that places us at the forefront of African smart city development.
          </motion.p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {initiatives.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5, delay: index * 0.09 }}
                whileHover={{ y: -8, transition: { duration: 0.2 } }}
                className={`group relative bg-slate-950/60 backdrop-blur-md border border-slate-800 hover:border-slate-700 rounded-2xl p-8 overflow-hidden transition-all duration-300 ${item.glow} flex flex-col`}
              >
                {/* Hover gradient bleed */}
                <div className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-0 group-hover:opacity-[0.04] transition-opacity duration-500`} />

                {/* Top Row */}
                <div className="flex items-center justify-between mb-7 relative z-10">
                  <div className={`p-3.5 rounded-xl border ${item.bgColor} ${item.borderColor} group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className={`h-7 w-7 ${item.textColor}`} />
                  </div>
                  <ArrowUpRight className={`h-5 w-5 text-slate-600 group-hover:${item.textColor} group-hover:-translate-y-1 group-hover:translate-x-1 transition-all duration-300`} />
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-white mb-3 relative z-10">{item.title}</h3>

                {/* Description */}
                <p className="text-sm text-slate-400 leading-relaxed mb-7 flex-grow relative z-10">{item.description}</p>

                {/* Highlights */}
                <div className="space-y-2 relative z-10 border-t border-slate-800 pt-5">
                  {item.highlights.map((h) => (
                    <div key={h} className="flex items-center gap-2">
                      <div className={`h-1.5 w-1.5 rounded-full bg-gradient-to-r ${item.color} shrink-0`} />
                      <span className="text-xs text-slate-400">{h}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* CTA Banner */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-14 relative overflow-hidden rounded-3xl border border-white/10 p-10 md:p-16 text-center"
          style={{ background: 'linear-gradient(135deg, rgba(236,72,153,0.08) 0%, rgba(139,92,246,0.08) 50%, rgba(59,130,246,0.08) 100%)' }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-pink-500/10 via-violet-500/10 to-blue-500/10 blur-2xl opacity-50 pointer-events-none" />
          <div className="relative z-10">
            <h3 className="text-3xl md:text-4xl font-extrabold text-white mb-4">
              Shape the Future of Adama
            </h3>
            <p className="text-slate-400 text-lg max-w-xl mx-auto mb-8">
              Are you a developer, researcher, or innovator? Join the Adama Innovation Network and help build the city of tomorrow.
            </p>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-pink-500 to-violet-500 text-white font-semibold text-base hover:from-pink-400 hover:to-violet-400 transition-all shadow-lg shadow-pink-500/25 hover:shadow-pink-500/40"
            >
              Join the Hub
              <ArrowUpRight className="h-5 w-5" />
            </a>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default Innovation;
