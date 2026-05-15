import { motion } from 'framer-motion';
import {
  Bus, Car, Ambulance, Route, BarChart3, Navigation,
  ArrowRight, TrendingUp, Clock, Users
} from 'lucide-react';

const trafficLevels = [
  { label: 'Highway A1', level: 72, color: 'bg-amber-400' },
  { label: 'City Center', level: 88, color: 'bg-red-400' },
  { label: 'Industrial Rd', level: 45, color: 'bg-emerald-400' },
  { label: 'Airport Link', level: 60, color: 'bg-blue-400' },
];

const busRoutes = [
  { route: 'R-01', from: 'City Hall', to: 'Adama Station', time: '8 min', passengers: 42, status: 'On Time' },
  { route: 'R-04', from: 'University', to: 'Industrial Park', time: '14 min', passengers: 67, status: 'On Time' },
  { route: 'R-07', from: 'Market Hub', to: 'Airport Zone', time: '22 min', passengers: 29, status: 'Delayed' },
];

const mobilityStats = [
  { label: 'Active Vehicles', value: '2,340', icon: Car, color: 'text-blue-400', bg: 'bg-blue-400/10 border-blue-400/20' },
  { label: 'Avg Wait Time', value: '4.2 min', icon: Clock, color: 'text-amber-400', bg: 'bg-amber-400/10 border-amber-400/20' },
  { label: 'Daily Commuters', value: '128K', icon: Users, color: 'text-violet-400', bg: 'bg-violet-400/10 border-violet-400/20' },
  { label: 'Route Efficiency', value: '94%', icon: TrendingUp, color: 'text-emerald-400', bg: 'bg-emerald-400/10 border-emerald-400/20' },
];

const transportCards = [
  {
    title: 'Emergency Transport',
    icon: Ambulance,
    color: 'text-red-400',
    bg: 'bg-red-400/10 border-red-400/20',
    glow: 'hover:shadow-[0_0_30px_-10px_rgba(248,113,113,0.4)]',
    status: 'Standby',
    statusColor: 'text-emerald-400 bg-emerald-400/10 border-emerald-400/20',
    body: '6 ambulances and 3 fire response units are geo-tracked and pre-positioned across priority zones.',
    meta: 'Avg dispatch: < 5 min',
  },
  {
    title: 'Route Optimization',
    icon: Route,
    color: 'text-cyan-400',
    bg: 'bg-cyan-400/10 border-cyan-400/20',
    glow: 'hover:shadow-[0_0_30px_-10px_rgba(34,211,238,0.4)]',
    status: 'AI Active',
    statusColor: 'text-cyan-400 bg-cyan-400/10 border-cyan-400/20',
    body: 'AI-driven route engine updates city transit maps every 90 seconds based on live congestion data.',
    meta: 'Last update: 42s ago',
  },
  {
    title: 'Mobility Analytics',
    icon: BarChart3,
    color: 'text-violet-400',
    bg: 'bg-violet-400/10 border-violet-400/20',
    glow: 'hover:shadow-[0_0_30px_-10px_rgba(167,139,250,0.4)]',
    status: 'Live Data',
    statusColor: 'text-violet-400 bg-violet-400/10 border-violet-400/20',
    body: 'Real-time analytics dashboard tracks commuter patterns, peak hours, and modal shift trends citywide.',
    meta: '128K daily data points',
  },
];

const TrafficBar = ({ label, level, color, index }) => (
  <motion.div
    initial={{ opacity: 0, x: -20 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true }}
    transition={{ delay: index * 0.1 }}
    className="space-y-1.5"
  >
    <div className="flex justify-between items-center">
      <span className="text-sm text-slate-300">{label}</span>
      <span className={`text-xs font-bold ${level > 80 ? 'text-red-400' : level > 60 ? 'text-amber-400' : 'text-emerald-400'}`}>
        {level}%
      </span>
    </div>
    <div className="h-2 bg-slate-800 rounded-full overflow-hidden">
      <motion.div
        initial={{ width: 0 }}
        whileInView={{ width: `${level}%` }}
        viewport={{ once: true }}
        transition={{ duration: 1.2, delay: index * 0.1 + 0.3, ease: 'easeOut' }}
        className={`h-full rounded-full ${color}`}
      />
    </div>
  </motion.div>
);

const Transportation = () => {
  return (
    <section id="transport" className="py-24 bg-slate-950 border-t border-slate-800 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-500/5 blur-[150px] rounded-full" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-amber-500/5 blur-[120px] rounded-full" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 mb-6"
          >
            <Navigation className="h-4 w-4 text-blue-400" />
            <span className="text-sm font-semibold tracking-wide text-blue-400 uppercase">Intelligent Mobility</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold text-white mb-4"
          >
            Smart <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">Transportation</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-slate-400 max-w-2xl mx-auto"
          >
            AI-powered mobility systems ensuring seamless, efficient, and safe movement for every citizen of Adama.
          </motion.p>
        </div>

        {/* Mobility Stats Row */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
          {mobilityStats.map((stat, i) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -4, transition: { duration: 0.2 } }}
                className="bg-slate-900/60 border border-slate-800 hover:border-slate-700 rounded-2xl p-5 text-center"
              >
                <div className={`w-10 h-10 rounded-xl flex items-center justify-center mx-auto mb-3 border ${stat.bg}`}>
                  <Icon className={`h-5 w-5 ${stat.color}`} />
                </div>
                <p className="text-2xl font-extrabold text-white mb-1">{stat.value}</p>
                <p className="text-xs text-slate-500">{stat.label}</p>
              </motion.div>
            );
          })}
        </div>

        {/* Main Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">

          {/* Traffic Flow Panel */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-4 bg-slate-900/60 backdrop-blur-md border border-slate-800 rounded-2xl p-7"
          >
            <div className="flex items-center justify-between mb-7">
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-xl bg-amber-400/10 border border-amber-400/20">
                  <Car className="h-5 w-5 text-amber-400" />
                </div>
                <h3 className="text-lg font-bold text-white">Traffic Flow</h3>
              </div>
              <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-400/10 border border-emerald-400/20">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
                <span className="text-xs font-semibold text-emerald-400">Live</span>
              </div>
            </div>
            <div className="space-y-5">
              {trafficLevels.map((t, i) => (
                <TrafficBar key={t.label} {...t} index={i} />
              ))}
            </div>
          </motion.div>

          {/* Smart Bus Routes */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="lg:col-span-8 bg-slate-900/60 backdrop-blur-md border border-slate-800 rounded-2xl p-7"
          >
            <div className="flex items-center gap-3 mb-7">
              <div className="p-2.5 rounded-xl bg-blue-400/10 border border-blue-400/20">
                <Bus className="h-5 w-5 text-blue-400" />
              </div>
              <h3 className="text-lg font-bold text-white">Smart Bus Routes</h3>
            </div>

            <div className="space-y-4">
              {busRoutes.map((bus, i) => (
                <motion.div
                  key={bus.route}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.12 }}
                  whileHover={{ x: 4, transition: { duration: 0.2 } }}
                  className="group flex items-center justify-between bg-slate-950/60 border border-slate-800 hover:border-slate-700 rounded-xl p-4 cursor-pointer"
                >
                  <div className="flex items-center gap-4">
                    <div className="h-10 w-10 rounded-lg bg-blue-500/10 border border-blue-500/20 flex items-center justify-center shrink-0">
                      <span className="text-xs font-bold text-blue-400">{bus.route}</span>
                    </div>
                    <div>
                      <div className="flex items-center gap-2 text-sm">
                        <span className="font-semibold text-white">{bus.from}</span>
                        <ArrowRight className="h-3.5 w-3.5 text-slate-500" />
                        <span className="font-semibold text-white">{bus.to}</span>
                      </div>
                      <p className="text-xs text-slate-500 mt-0.5">
                        {bus.passengers} passengers · ETA {bus.time}
                      </p>
                    </div>
                  </div>
                  <span className={`text-xs font-semibold px-3 py-1 rounded-full border ${
                    bus.status === 'On Time'
                      ? 'text-emerald-400 bg-emerald-400/10 border-emerald-400/20'
                      : 'text-amber-400 bg-amber-400/10 border-amber-400/20'
                  }`}>
                    {bus.status}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Bottom 3 Cards */}
          {transportCards.map((card, i) => {
            const Icon = card.icon;
            return (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.12 }}
                whileHover={{ y: -6, transition: { duration: 0.2 } }}
                className={`lg:col-span-4 group relative bg-slate-900/60 backdrop-blur-md border border-slate-800 hover:border-slate-700 rounded-2xl p-7 transition-all duration-300 ${card.glow}`}
              >
                <div className="flex items-center justify-between mb-5">
                  <div className={`p-2.5 rounded-xl border ${card.bg}`}>
                    <Icon className={`h-6 w-6 ${card.color}`} />
                  </div>
                  <span className={`text-xs font-semibold px-2.5 py-1 rounded-full border ${card.statusColor}`}>
                    {card.status}
                  </span>
                </div>
                <h3 className="text-lg font-bold text-white mb-3">{card.title}</h3>
                <p className="text-sm text-slate-400 leading-relaxed mb-5">{card.body}</p>
                <p className="text-xs text-slate-500 font-medium border-t border-slate-800 pt-4">{card.meta}</p>
              </motion.div>
            );
          })}

        </div>
      </div>
    </section>
  );
};

export default Transportation;
