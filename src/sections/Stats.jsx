import { useEffect, useRef } from 'react';
import { motion, useInView, useMotionValue, useSpring } from 'framer-motion';
import { Users, Plane, GraduationCap, Smartphone } from 'lucide-react';

const AnimatedCounter = ({ value, suffix = '' }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  
  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, {
    damping: 50,
    stiffness: 100,
    duration: 3000,
  });

  useEffect(() => {
    if (isInView) {
      motionValue.set(value);
    }
  }, [isInView, value, motionValue]);

  useEffect(() => {
    springValue.on("change", (latest) => {
      if (ref.current) {
        // Format with commas and no decimal places
        ref.current.textContent = Math.floor(latest).toLocaleString() + suffix;
      }
    });
  }, [springValue, suffix]);

  return <span ref={ref}>0{suffix}</span>;
};

const stats = [
  {
    title: 'Total Population',
    value: 500000,
    suffix: '+',
    icon: Users,
    color: 'from-pink-500 to-rose-500',
    delay: 0.1,
  },
  {
    title: 'Annual Visitors',
    value: 1200000,
    suffix: '+',
    icon: Plane,
    color: 'from-violet-500 to-purple-500',
    delay: 0.2,
  },
  {
    title: 'Top Universities',
    value: 5,
    suffix: '',
    icon: GraduationCap,
    color: 'from-amber-500 to-orange-500',
    delay: 0.3,
  },
  {
    title: 'Smart Services',
    value: 120,
    suffix: '+',
    icon: Smartphone,
    color: 'from-blue-500 to-cyan-500',
    delay: 0.4,
  },
];

const Stats = () => {
  return (
    <section className="py-24 bg-slate-900 border-t border-slate-800 relative overflow-hidden">
      
      {/* Background Decor */}
      <div className="absolute inset-0 pointer-events-none opacity-40">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-gradient-to-r from-pink-500/10 via-purple-500/10 to-blue-500/10 blur-[100px] rounded-full" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={stat.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: stat.delay }}
                whileHover={{ y: -8, scale: 1.02, transition: { duration: 0.2 } }}
                className="relative bg-slate-950/60 backdrop-blur-xl border border-slate-800 hover:border-slate-700 rounded-3xl p-8 overflow-hidden group shadow-xl"
              >
                {/* Glow Effect */}
                <div className={`absolute inset-0 bg-gradient-to-br ${stat.color} opacity-0 group-hover:opacity-[0.05] transition-opacity duration-500`} />
                
                <div className="flex flex-col items-center text-center relative z-10">
                  <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-6 bg-slate-900 border border-slate-800 shadow-lg group-hover:scale-110 transition-transform duration-500`}>
                    <div className={`bg-gradient-to-br ${stat.color} text-transparent bg-clip-text`}>
                      <Icon className="h-8 w-8 text-white drop-shadow-md" />
                    </div>
                  </div>
                  
                  <h4 className="text-4xl md:text-5xl font-extrabold text-white mb-2 tracking-tight">
                    <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                  </h4>
                  
                  <p className="text-sm md:text-base font-medium text-slate-400">
                    {stat.title}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Stats;
