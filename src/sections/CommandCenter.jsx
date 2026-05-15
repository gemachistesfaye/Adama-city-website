import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Car, ShieldAlert, Zap, Server, Wifi, Radio, Activity, AlertCircle, CheckCircle2, Terminal } from 'lucide-react';

// Simulated sparkline mini-bar chart
const Sparkline = ({ color, values }) => (
  <div className="flex items-end gap-0.5 h-8">
    {values.map((v, i) => (
      <motion.div
        key={i}
        initial={{ height: 0 }}
        animate={{ height: `${v}%` }}
        transition={{ duration: 0.8, delay: i * 0.05, ease: 'easeOut' }}
        className="flex-1 rounded-sm"
        style={{ backgroundColor: color, opacity: 0.4 + (v / 200) }}
      />
    ))}
  </div>
);

// Animated ring gauge
const RingGauge = ({ value, color, size = 60 }) => {
  const radius = 24;
  const circumference = 2 * Math.PI * radius;
  const strokeDash = (value / 100) * circumference;

  return (
    <div className="relative" style={{ width: size, height: size }}>
      <svg width={size} height={size} viewBox="0 0 60 60" className="-rotate-90">
        <circle cx="30" cy="30" r={radius} fill="none" stroke="rgba(255,255,255,0.05)" strokeWidth="5" />
        <motion.circle
          cx="30" cy="30" r={radius}
          fill="none"
          stroke={color}
          strokeWidth="5"
          strokeLinecap="round"
          strokeDasharray={circumference}
          initial={{ strokeDashoffset: circumference }}
          whileInView={{ strokeDashoffset: circumference - strokeDash }}
          viewport={{ once: true }}
          transition={{ duration: 1.5, ease: 'easeOut' }}
          style={{ filter: `drop-shadow(0 0 4px ${color})` }}
        />
      </svg>
      <div className="absolute inset-0 flex items-center justify-center">
        <span className="text-[10px] font-bold text-white">{value}%</span>
      </div>
    </div>
  );
};

const systems = [
  {
    id: 'traffic',
    title: 'Traffic Systems',
    icon: Car,
    color: '#60a5fa',
    status: 'NOMINAL',
    statusIcon: CheckCircle2,
    statusColor: 'text-emerald-400',
    metric: '87%',
    metricLabel: 'Flow Efficiency',
    uptime: '99.2%',
    alerts: 0,
    gauge: 87,
    sparkValues: [60, 72, 65, 80, 87, 75, 88, 82, 90, 87, 80, 85],
  },
  {
    id: 'emergency',
    title: 'Emergency Services',
    icon: ShieldAlert,
    color: '#f43f5e',
    status: 'STANDBY',
    statusIcon: CheckCircle2,
    statusColor: 'text-emerald-400',
    metric: '100%',
    metricLabel: 'Units Ready',
    uptime: '100%',
    alerts: 0,
    gauge: 100,
    sparkValues: [100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100],
  },
  {
    id: 'energy',
    title: 'Energy Grid',
    icon: Zap,
    color: '#f59e0b',
    status: 'OPTIMAL',
    statusIcon: CheckCircle2,
    statusColor: 'text-emerald-400',
    metric: '94 MW',
    metricLabel: 'Grid Output',
    uptime: '99.8%',
    alerts: 0,
    gauge: 94,
    sparkValues: [80, 85, 90, 88, 92, 95, 93, 96, 94, 91, 94, 94],
  },
  {
    id: 'infrastructure',
    title: 'Digital Infrastructure',
    icon: Server,
    color: '#a78bfa',
    status: 'WARNING',
    statusIcon: AlertCircle,
    statusColor: 'text-amber-400',
    metric: '96.4%',
    metricLabel: 'Server Health',
    uptime: '96.4%',
    alerts: 2,
    gauge: 96,
    sparkValues: [99, 98, 97, 99, 96, 94, 97, 95, 96, 98, 96, 96],
  },
  {
    id: 'connectivity',
    title: 'Public Connectivity',
    icon: Wifi,
    color: '#34d399',
    status: 'NOMINAL',
    statusIcon: CheckCircle2,
    statusColor: 'text-emerald-400',
    metric: '145',
    metricLabel: 'Active Hotspots',
    uptime: '98.1%',
    alerts: 0,
    gauge: 98,
    sparkValues: [90, 95, 92, 97, 96, 98, 94, 99, 98, 96, 98, 98],
  },
  {
    id: 'sensors',
    title: 'Smart Sensors',
    icon: Radio,
    color: '#22d3ee',
    status: 'NOMINAL',
    statusIcon: CheckCircle2,
    statusColor: 'text-emerald-400',
    metric: '1,198',
    metricLabel: 'Sensors Online',
    uptime: '99.8%',
    alerts: 0,
    gauge: 99,
    sparkValues: [98, 99, 98, 100, 99, 99, 98, 100, 99, 99, 98, 99],
  },
];

// Simulated live log entries
const logMessages = [
  { time: '21:52:14', msg: 'Traffic route R-07 recalculated via AI optimizer', type: 'info' },
  { time: '21:50:33', msg: 'Server node SRV-04 CPU spike detected — auto-scaled', type: 'warn' },
  { time: '21:48:01', msg: 'Solar array SE-12 sync completed. Output: +4.2 MW', type: 'success' },
  { time: '21:46:55', msg: 'Ambulance AMB-03 dispatched — Sector 7 emergency', type: 'warn' },
  { time: '21:44:22', msg: 'Hotspot HSP-67 reinstated after maintenance window', type: 'success' },
  { time: '21:41:10', msg: 'Air quality sensor AQ-09 reading updated: AQI 41', type: 'info' },
];

const CommandCenter = () => {
  const [time, setTime] = useState(new Date());
  const [logs] = useState(logMessages);

  useEffect(() => {
    const t = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(t);
  }, []);

  const totalAlerts = systems.reduce((sum, s) => sum + s.alerts, 0);

  return (
    <section id="command-center" className="py-24 bg-slate-900 border-t border-slate-800 relative overflow-hidden">

      {/* Ambient */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-blue-500/5 blur-[150px] rounded-full" />
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-violet-500/5 blur-[150px] rounded-full" />
        <div className="absolute inset-0 opacity-[0.02]"
          style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)', backgroundSize: '40px 40px' }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-12 gap-6">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 mb-6"
            >
              <Activity className="h-4 w-4 text-blue-400" />
              <span className="text-sm font-semibold tracking-wide text-blue-400 uppercase">Ops Center</span>
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl font-bold text-white"
            >
              Smart Operations{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-violet-400">
                Command Center
              </span>
            </motion.h2>
          </div>

          {/* Top Status Bar */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex flex-wrap items-center gap-4"
          >
            <div className="flex items-center gap-2.5 bg-slate-950/80 border border-slate-800 px-4 py-2.5 rounded-xl">
              <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
              <span className="text-sm font-mono text-slate-300 tabular-nums">
                {time.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', second: '2-digit' })}
              </span>
            </div>
            <div className={`flex items-center gap-2 px-4 py-2.5 rounded-xl border text-sm font-semibold ${totalAlerts > 0 ? 'bg-amber-400/10 border-amber-400/30 text-amber-400' : 'bg-emerald-400/10 border-emerald-400/30 text-emerald-400'}`}>
              {totalAlerts > 0
                ? <><AlertCircle className="h-4 w-4" /> {totalAlerts} Alert{totalAlerts > 1 ? 's' : ''}</>
                : <><CheckCircle2 className="h-4 w-4" /> All Systems Nominal</>
              }
            </div>
          </motion.div>
        </div>

        {/* System Monitoring Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-8">
          {systems.map((sys, i) => {
            const Icon = sys.icon;
            const StatusIcon = sys.statusIcon;
            return (
              <motion.div
                key={sys.id}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                whileHover={{ y: -5, scale: 1.01, transition: { duration: 0.2 } }}
                className="group bg-slate-950/70 backdrop-blur-xl border border-slate-800 hover:border-slate-600 rounded-2xl p-6 overflow-hidden relative transition-all duration-300"
                style={{ '--glow': sys.color }}
              >
                {/* Subtle corner glow */}
                <div className="absolute top-0 right-0 w-32 h-32 rounded-full blur-3xl opacity-0 group-hover:opacity-10 transition-opacity duration-500"
                  style={{ backgroundColor: sys.color }} />

                {/* Top Row */}
                <div className="flex items-start justify-between mb-5">
                  <div className="flex items-center gap-3">
                    <div className="p-2.5 rounded-xl border" style={{ backgroundColor: `${sys.color}15`, borderColor: `${sys.color}30` }}>
                      <Icon className="h-5 w-5" style={{ color: sys.color }} />
                    </div>
                    <div>
                      <h3 className="text-sm font-bold text-white">{sys.title}</h3>
                      <div className={`flex items-center gap-1 text-xs font-semibold ${sys.statusColor}`}>
                        <StatusIcon className="h-3 w-3" />
                        {sys.status}
                      </div>
                    </div>
                  </div>
                  <RingGauge value={sys.gauge} color={sys.color} />
                </div>

                {/* Sparkline */}
                <div className="mb-5">
                  <Sparkline color={sys.color} values={sys.sparkValues} />
                </div>

                {/* Metric row */}
                <div className="flex items-end justify-between">
                  <div>
                    <p className="text-2xl font-extrabold text-white">{sys.metric}</p>
                    <p className="text-xs text-slate-500 mt-0.5">{sys.metricLabel}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm font-bold text-slate-300">{sys.uptime}</p>
                    <p className="text-xs text-slate-500">Uptime</p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Live Activity Log */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-slate-950/80 backdrop-blur-xl border border-slate-800 rounded-2xl overflow-hidden"
        >
          <div className="flex items-center justify-between px-6 py-4 border-b border-slate-800">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-lg bg-slate-900 border border-slate-700">
                <Terminal className="h-4 w-4 text-emerald-400" />
              </div>
              <span className="font-bold text-white text-sm">System Activity Log</span>
            </div>
            <div className="flex items-center gap-1.5 text-xs text-emerald-400 font-semibold">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" /> LIVE
            </div>
          </div>
          <div className="divide-y divide-slate-800/50">
            {logs.map((log, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.07 }}
                className="flex items-start gap-4 px-6 py-3.5 hover:bg-slate-900/40 transition-colors"
              >
                <span className="text-xs font-mono text-slate-500 shrink-0 mt-0.5">{log.time}</span>
                <div className={`h-2 w-2 rounded-full shrink-0 mt-1.5 ${
                  log.type === 'success' ? 'bg-emerald-400' : log.type === 'warn' ? 'bg-amber-400' : 'bg-blue-400'
                }`} />
                <span className="text-sm text-slate-300">{log.msg}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default CommandCenter;
