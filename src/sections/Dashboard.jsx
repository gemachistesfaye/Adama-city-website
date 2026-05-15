import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import {
  Car, Zap, Plane, ShieldCheck, Wind, Wifi,
  Activity, TrendingUp, TrendingDown, Minus
} from 'lucide-react';

// Reusable mini progress bar
const ProgressBar = ({ value, color }) => (
  <div className="w-full h-1.5 bg-slate-800 rounded-full overflow-hidden">
    <motion.div
      initial={{ width: 0 }}
      whileInView={{ width: `${value}%` }}
      viewport={{ once: true }}
      transition={{ duration: 1.5, ease: 'easeOut', delay: 0.3 }}
      className={`h-full rounded-full ${color}`}
    />
  </div>
);

// Animated counting number
const Counter = ({ value, suffix = '' }) => {
  const [count, setCount] = useState(0);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const duration = 1800;
    const step = Math.ceil(value / (duration / 16));
    const timer = setInterval(() => {
      start += step;
      if (start >= value) { setCount(value); clearInterval(timer); }
      else setCount(start);
    }, 16);
    return () => clearInterval(timer);
  }, [inView, value]);

  return (
    <motion.span onViewportEnter={() => setInView(true)} viewport={{ once: true }}>
      {count.toLocaleString()}{suffix}
    </motion.span>
  );
};

const StatusBadge = ({ status }) => {
  const styles = {
    live: 'text-emerald-400 bg-emerald-400/10 border-emerald-400/20',
    warning: 'text-amber-400 bg-amber-400/10 border-amber-400/20',
    critical: 'text-red-400 bg-red-400/10 border-red-400/20',
  };
  return (
    <div className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full border text-xs font-semibold ${styles[status]}`}>
      <span className={`h-1.5 w-1.5 rounded-full animate-pulse ${
        status === 'live' ? 'bg-emerald-400' : status === 'warning' ? 'bg-amber-400' : 'bg-red-400'
      }`} />
      {status.toUpperCase()}
    </div>
  );
};

const TrendIcon = ({ trend }) => {
  if (trend === 'up') return <TrendingUp className="h-4 w-4 text-emerald-400" />;
  if (trend === 'down') return <TrendingDown className="h-4 w-4 text-red-400" />;
  return <Minus className="h-4 w-4 text-slate-400" />;
};

const cards = [
  {
    title: 'Traffic Flow',
    icon: Car,
    iconColor: 'text-blue-400',
    iconBg: 'bg-blue-400/10 border-blue-400/20',
    glow: 'group-hover:shadow-[0_0_30px_-10px_rgba(96,165,250,0.4)]',
    status: 'live',
    value: 87,
    suffix: '%',
    label: 'Road Capacity Used',
    sub: '2,340 vehicles active',
    progress: 87,
    progressColor: 'bg-blue-400',
    trend: 'up',
    trendLabel: '+5% since 1hr',
  },
  {
    title: 'Smart Energy',
    icon: Zap,
    iconColor: 'text-amber-400',
    iconBg: 'bg-amber-400/10 border-amber-400/20',
    glow: 'group-hover:shadow-[0_0_30px_-10px_rgba(251,191,36,0.4)]',
    status: 'live',
    value: 94,
    suffix: 'MW',
    label: 'Grid Output',
    sub: '67% renewable sources',
    progress: 67,
    progressColor: 'bg-amber-400',
    trend: 'up',
    trendLabel: '+12% efficiency',
  },
  {
    title: 'Tourism Activity',
    icon: Plane,
    iconColor: 'text-violet-400',
    iconBg: 'bg-violet-400/10 border-violet-400/20',
    glow: 'group-hover:shadow-[0_0_30px_-10px_rgba(167,139,250,0.4)]',
    status: 'live',
    value: 3420,
    suffix: '',
    label: 'Active Visitors Today',
    sub: '14 sites being accessed',
    progress: 74,
    progressColor: 'bg-violet-400',
    trend: 'up',
    trendLabel: '+8% vs yesterday',
  },
  {
    title: 'Emergency Readiness',
    icon: ShieldCheck,
    iconColor: 'text-emerald-400',
    iconBg: 'bg-emerald-400/10 border-emerald-400/20',
    glow: 'group-hover:shadow-[0_0_30px_-10px_rgba(52,211,153,0.4)]',
    status: 'live',
    value: 100,
    suffix: '%',
    label: 'Units Operational',
    sub: '12 units on standby',
    progress: 100,
    progressColor: 'bg-emerald-400',
    trend: 'stable',
    trendLabel: 'All systems nominal',
  },
  {
    title: 'Air Quality',
    icon: Wind,
    iconColor: 'text-cyan-400',
    iconBg: 'bg-cyan-400/10 border-cyan-400/20',
    glow: 'group-hover:shadow-[0_0_30px_-10px_rgba(34,211,238,0.4)]',
    status: 'live',
    value: 42,
    suffix: ' AQI',
    label: 'Good Quality',
    sub: 'PM2.5 within safe limits',
    progress: 42,
    progressColor: 'bg-cyan-400',
    trend: 'down',
    trendLabel: '-3 AQI since morning',
  },
  {
    title: 'Public Connectivity',
    icon: Wifi,
    iconColor: 'text-pink-400',
    iconBg: 'bg-pink-400/10 border-pink-400/20',
    glow: 'group-hover:shadow-[0_0_30px_-10px_rgba(244,114,182,0.4)]',
    status: 'live',
    value: 98,
    suffix: '%',
    label: 'Network Uptime',
    sub: '145 hotspots active',
    progress: 98,
    progressColor: 'bg-pink-400',
    trend: 'stable',
    trendLabel: '99.9% SLA maintained',
  },
];

const Dashboard = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="dashboard" className="py-24 bg-slate-950 border-t border-slate-800 relative overflow-hidden">
      {/* Background Grid Pattern */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.03]"
        style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)', backgroundSize: '40px 40px' }}
      />
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-blue-500/5 blur-[120px] rounded-full" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 mb-6"
            >
              <Activity className="h-4 w-4 text-blue-400" />
              <span className="text-sm font-semibold tracking-wide text-blue-400 uppercase">Live City Pulse</span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl font-bold text-white leading-tight"
            >
              Smart City <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">Command Center</span>
            </motion.h2>
          </div>

          {/* Live Clock */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-3 bg-slate-900/80 backdrop-blur-md border border-slate-800 px-5 py-3 rounded-2xl"
          >
            <span className="flex h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
            <div>
              <p className="text-xs text-slate-500 font-medium uppercase tracking-wider">System Time</p>
              <p className="text-lg font-bold text-white font-mono tabular-nums">
                {time.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', second: '2-digit' })}
              </p>
            </div>
          </motion.div>
        </div>

        {/* Dashboard Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {cards.map((card, index) => {
            const Icon = card.icon;
            return (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                whileHover={{ y: -6, transition: { duration: 0.2 } }}
                className={`group relative bg-slate-900/60 backdrop-blur-xl border border-slate-800 hover:border-slate-700 rounded-2xl p-6 overflow-hidden transition-all duration-300 ${card.glow}`}
              >
                {/* Subtle inner glow on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/[0.02] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl" />

                {/* Top Row */}
                <div className="flex items-start justify-between mb-6 relative z-10">
                  <div className={`p-3 rounded-xl border ${card.iconBg}`}>
                    <Icon className={`h-6 w-6 ${card.iconColor}`} />
                  </div>
                  <StatusBadge status={card.status} />
                </div>

                {/* Value */}
                <div className="relative z-10 mb-4">
                  <h3 className="text-sm font-semibold text-slate-400 mb-1">{card.title}</h3>
                  <p className={`text-4xl font-extrabold tracking-tight ${card.iconColor}`}>
                    <Counter value={card.value} suffix={card.suffix} />
                  </p>
                  <p className="text-sm text-slate-400 mt-1">{card.label}</p>
                </div>

                {/* Progress Bar */}
                <div className="relative z-10 mb-4">
                  <ProgressBar value={card.progress} color={card.progressColor} />
                </div>

                {/* Footer Row */}
                <div className="flex items-center justify-between relative z-10">
                  <p className="text-xs text-slate-500">{card.sub}</p>
                  <div className="flex items-center gap-1">
                    <TrendIcon trend={card.trend} />
                    <span className="text-xs text-slate-400">{card.trendLabel}</span>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default Dashboard;
