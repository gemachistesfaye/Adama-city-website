import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  ArrowRight, LayoutDashboard, Bus, BrainCircuit,
  Map, Sparkles, Network, Bot, Users, Plane, Smartphone, TrendingUp
} from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import VoiceAssistant from '../components/VoiceAssistant';
import Hero from '../sections/Hero';
import About from '../sections/About';
import ParticleField from '../components/ParticleField';

// ─── Preview Cards ───────────────────────────────────────────────
const previewModules = [
  {
    title: 'Smart Dashboard',
    description: 'Live city metrics, energy grid, traffic systems, and operations command center.',
    icon: LayoutDashboard,
    color: 'text-blue-400',
    bg: 'bg-blue-400/10 border-blue-400/20',
    glow: 'hover:shadow-[0_0_40px_-15px_rgba(96,165,250,0.5)]',
    gradient: 'from-blue-500/5 to-cyan-500/5',
    to: '/dashboard',
    stats: [{ label: 'Systems Live', val: '6' }, { label: 'Uptime', val: '99.2%' }],
  },
  {
    title: 'Transportation',
    description: 'AI-powered transit, real-time route tracking, and connected mobility network.',
    icon: Bus,
    color: 'text-cyan-400',
    bg: 'bg-cyan-400/10 border-cyan-400/20',
    glow: 'hover:shadow-[0_0_40px_-15px_rgba(34,211,238,0.5)]',
    gradient: 'from-cyan-500/5 to-blue-500/5',
    to: '/transport',
    stats: [{ label: 'Active Routes', val: '12' }, { label: 'Vehicles', val: '2,340' }],
  },
  {
    title: 'Innovation Hub',
    description: 'Startups, research labs, AI programs and youth technology shaping tomorrow.',
    icon: BrainCircuit,
    color: 'text-pink-400',
    bg: 'bg-pink-400/10 border-pink-400/20',
    glow: 'hover:shadow-[0_0_40px_-15px_rgba(236,72,153,0.5)]',
    gradient: 'from-pink-500/5 to-violet-500/5',
    to: '/innovation',
    stats: [{ label: 'Startups', val: '48+' }, { label: 'R&D Projects', val: '31' }],
  },
  {
    title: 'Tourism Experience',
    description: 'Explore the breathtaking destinations and cultural landmarks of the Rift Valley.',
    icon: Map,
    color: 'text-violet-400',
    bg: 'bg-violet-400/10 border-violet-400/20',
    glow: 'hover:shadow-[0_0_40px_-15px_rgba(167,139,250,0.5)]',
    gradient: 'from-violet-500/5 to-purple-500/5',
    to: '/tourism',
    stats: [{ label: 'Destinations', val: '14' }, { label: 'Daily Visitors', val: '3.4K' }],
  },
  {
    title: 'Vision 2035',
    description: 'A bold decade-long transformation into Africa\'s most innovative smart city.',
    icon: Sparkles,
    color: 'text-amber-400',
    bg: 'bg-amber-400/10 border-amber-400/20',
    glow: 'hover:shadow-[0_0_40px_-15px_rgba(245,158,11,0.5)]',
    gradient: 'from-amber-500/5 to-orange-500/5',
    to: '/vision-2035',
    stats: [{ label: 'Milestones', val: '5' }, { label: 'Pillars', val: '6' }],
  },
  {
    title: 'City Grid Map',
    description: 'Interactive digital twin of Adama\'s smart infrastructure — explore every node.',
    icon: Network,
    color: 'text-emerald-400',
    bg: 'bg-emerald-400/10 border-emerald-400/20',
    glow: 'hover:shadow-[0_0_40px_-15px_rgba(52,211,153,0.5)]',
    gradient: 'from-emerald-500/5 to-teal-500/5',
    to: '/smart-map',
    stats: [{ label: 'City Zones', val: '6' }, { label: 'IoT Sensors', val: '1,200+' }],
  },
];

const quickStats = [
  { label: 'Population', value: '500K+', icon: Users },
  { label: 'Annual Visitors', value: '1.2M', icon: Plane },
  { label: 'Smart Services', value: '120+', icon: Smartphone },
  { label: 'Growth Rate', value: '+45%', icon: TrendingUp },
];

// ─── Homepage ─────────────────────────────────────────────────────
const HomePage = () => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 0.8, ease: 'easeOut' }}
    className="min-h-screen bg-[#020617] text-slate-50 flex flex-col"
  >
    <Navbar />

    <main className="flex-grow">
      {/* Hero */}
      <Hero />

      {/* Quick Stats Strip */}
      <div className="py-10 bg-slate-900/60 border-y border-slate-800 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {quickStats.map((s, i) => {
              const Icon = s.icon;
              return (
                <motion.div
                  key={s.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  className="flex items-center gap-4"
                >
                  <div className="p-2.5 rounded-xl bg-pink-500/10 border border-pink-500/20 shrink-0">
                    <Icon className="h-5 w-5 text-pink-400" />
                  </div>
                  <div>
                    <p className="text-2xl font-extrabold text-white">{s.value}</p>
                    <p className="text-xs text-slate-500">{s.label}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>

      {/* About */}
      <About />

      {/* Platform Modules Preview */}
      <section className="py-24 bg-slate-950 relative overflow-hidden border-t border-slate-800">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-gradient-to-b from-violet-500/5 to-transparent blur-[120px] rounded-full" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-14">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-6"
            >
              <span className="h-2 w-2 rounded-full bg-pink-500 animate-pulse" />
              <span className="text-sm font-semibold text-slate-300 uppercase tracking-wide">Platform Modules</span>
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl font-bold text-white mb-4"
            >
              Explore the <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-violet-500">Smart Ecosystem</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-lg text-slate-400 max-w-2xl mx-auto"
            >
              Each module is a fully immersive experience. Dive deep into any dimension of Adama's intelligent city platform.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {previewModules.map((mod, i) => {
              const Icon = mod.icon;
              return (
                <motion.div
                  key={mod.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.09 }}
                  whileHover={{ y: -8, transition: { duration: 0.2 } }}
                  className={`group relative bg-slate-900/50 border border-slate-800 hover:border-slate-700 rounded-2xl p-7 overflow-hidden transition-all duration-300 ${mod.glow} flex flex-col`}
                >
                  <div className={`absolute inset-0 bg-gradient-to-br ${mod.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

                  <div className="flex items-start justify-between mb-6 relative z-10">
                    <div className={`p-3.5 rounded-xl border ${mod.bg} group-hover:scale-110 transition-transform duration-300`}>
                      <Icon className={`h-7 w-7 ${mod.color}`} />
                    </div>
                    <div className="flex gap-3">
                      {mod.stats.map((st) => (
                        <div key={st.label} className="text-right">
                          <p className="text-lg font-bold text-white">{st.val}</p>
                          <p className="text-[10px] text-slate-500">{st.label}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-white mb-3 relative z-10">{mod.title}</h3>
                  <p className="text-sm text-slate-400 leading-relaxed flex-grow mb-6 relative z-10">{mod.description}</p>

                  <Link
                    to={mod.to}
                    className={`relative z-10 flex items-center gap-2 text-sm font-semibold ${mod.color} hover:gap-3 transition-all duration-200`}
                  >
                    Explore Module <ArrowRight className="h-4 w-4" />
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* AI Assistant CTA */}
      <section className="py-20 relative overflow-hidden border-t border-slate-800 bg-slate-900">
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <ParticleField />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px]"
            style={{ background: 'radial-gradient(ellipse, rgba(236,72,153,0.1) 0%, rgba(139,92,246,0.08) 40%, transparent 70%)' }}
          />
        </div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center justify-center h-20 w-20 rounded-3xl bg-gradient-to-br from-pink-500 to-violet-600 shadow-[0_0_50px_rgba(236,72,153,0.4)] mb-8 mx-auto">
              <Bot className="h-10 w-10 text-white" />
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-5">
              Meet <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-violet-500">Adama AI</span>
            </h2>
            <p className="text-xl text-slate-400 mb-10 max-w-xl mx-auto leading-relaxed">
              Your intelligent city companion. Ask anything about Adama — services, directions, events, emergencies, and more.
            </p>
            <Link
              to="/ai-assistant"
              className="inline-flex items-center gap-3 px-10 py-5 rounded-2xl text-white font-semibold text-lg bg-gradient-to-r from-pink-500 to-violet-600 hover:from-pink-400 hover:to-violet-500 transition-all shadow-[0_0_40px_rgba(236,72,153,0.3)] hover:shadow-[0_0_60px_rgba(236,72,153,0.5)]"
            >
              <Bot className="h-6 w-6" />
              Open AI Assistant
              <ArrowRight className="h-5 w-5" />
            </Link>
          </motion.div>
        </div>
      </section>
    </main>

    <Footer />
    <VoiceAssistant />
  </motion.div>
);

export default HomePage;
