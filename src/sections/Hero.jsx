import { motion } from 'framer-motion';
import { ArrowRight, Users, Plane, Smartphone, TrendingUp, ChevronRight } from 'lucide-react';
import ParticleField from '../components/ParticleField';

const stats = [
  {
    title: 'Population',
    value: '500K+',
    label: 'Active Residents',
    icon: Users,
    color: 'text-pink-500',
    delay: 0.2,
  },
  {
    title: 'Tourism',
    value: '1.2M',
    label: 'Annual Visitors',
    icon: Plane,
    color: 'text-violet-500',
    delay: 0.4,
  },
  {
    title: 'Smart Services',
    value: '100%',
    label: 'Digital Access',
    icon: Smartphone,
    color: 'text-blue-500',
    delay: 0.6,
  },
  {
    title: 'Business Growth',
    value: '+45%',
    label: 'Yearly Expansion',
    icon: TrendingUp,
    color: 'text-emerald-500',
    delay: 0.8,
  },
];

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-slate-950 pt-20 pb-16">
      
      {/* Cinematic Background Gradients */}
      <div className="absolute inset-0 pointer-events-none">
        <ParticleField />
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-pink-600/20 blur-[150px] rounded-full mix-blend-screen" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-violet-600/20 blur-[150px] rounded-full mix-blend-screen" />
        <div className="absolute top-[20%] right-[20%] w-[30%] h-[30%] bg-blue-600/10 blur-[120px] rounded-full mix-blend-screen" />
        
        {/* Subtle grid pattern */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGcgc3Ryb2tlPSIjZmZmZmZmIiBzdHJva2Utb3BhY2l0eT0iMC4wNSIgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj48cGF0aCBkPSJNNjAgMEwwIDBMMCA2MCIvPjwvZz48L3N2Zz4=')] opacity-20" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Column: Text & CTAs */}
          <div className="text-left">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-md mb-8">
                <span className="flex h-2 w-2 rounded-full bg-pink-500 animate-pulse"></span>
                <span className="text-sm font-medium text-slate-300">The Future of Oromia</span>
              </div>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
              className="text-5xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white mb-6 leading-[1.1]"
            >
              Discover the <br className="hidden sm:block" />
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-500 via-purple-500 to-violet-500">
                Smart City
              </span> of Tomorrow
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
              className="text-lg sm:text-xl text-slate-400 mb-10 max-w-xl leading-relaxed"
            >
              Experience seamless digital infrastructure, thriving commerce, and rich cultural heritage combined in Ethiopia's fastest-growing technological hub.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
              className="flex flex-col sm:flex-row gap-5"
            >
              <a
                href="#services"
                className="group inline-flex items-center justify-center px-8 py-4 text-base font-semibold rounded-xl text-white bg-gradient-to-r from-pink-600 to-violet-600 hover:from-pink-500 hover:to-violet-500 transition-all duration-300 shadow-[0_0_40px_-10px_rgba(236,72,153,0.5)] hover:shadow-[0_0_60px_-15px_rgba(236,72,153,0.7)]"
              >
                Access Services
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="#tourism"
                className="group inline-flex items-center justify-center px-8 py-4 text-base font-semibold rounded-xl text-white bg-white/5 hover:bg-white/10 border border-white/10 backdrop-blur-md transition-all duration-300"
              >
                Explore Tourism
                <ChevronRight className="ml-1 h-5 w-5 text-slate-400 group-hover:text-white transition-colors" />
              </a>
            </motion.div>
          </div>

          {/* Right Column: Floating Stat Cards */}
          <div className="relative h-[500px] hidden md:block">
            <div className="absolute inset-0 grid grid-cols-2 gap-4 place-content-center">
              {stats.map((stat, index) => {
                const Icon = stat.icon;
                return (
                  <motion.div
                    key={stat.title}
                    initial={{ opacity: 0, scale: 0.8, y: 50 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: stat.delay, type: "spring", bounce: 0.4 }}
                    whileHover={{ y: -5, transition: { duration: 0.2 } }}
                    className={`bg-slate-900/40 backdrop-blur-xl border border-white/10 p-6 rounded-2xl shadow-2xl relative overflow-hidden group ${
                      index % 2 === 0 ? 'translate-y-12' : '-translate-y-4'
                    }`}
                  >
                    {/* Subtle inner gradient hover */}
                    <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    
                    <div className="flex items-center justify-between mb-4 relative z-10">
                      <div className={`p-3 rounded-xl bg-white/5 border border-white/5 ${stat.color}`}>
                        <Icon className="h-6 w-6" />
                      </div>
                    </div>
                    
                    <div className="relative z-10">
                      <h3 className="text-3xl font-bold text-white mb-1 tracking-tight">{stat.value}</h3>
                      <p className="text-sm font-medium text-slate-300 mb-1">{stat.title}</p>
                      <p className="text-xs text-slate-500">{stat.label}</p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
          
          {/* Mobile Stat Cards (simplified grid) */}
          <div className="grid grid-cols-2 gap-4 md:hidden mt-8">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <motion.div
                  key={`mobile-${stat.title}`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 + (index * 0.1) }}
                  className="bg-slate-900/60 backdrop-blur-md border border-white/10 p-4 rounded-xl"
                >
                  <Icon className={`h-5 w-5 mb-3 ${stat.color}`} />
                  <h3 className="text-2xl font-bold text-white mb-1">{stat.value}</h3>
                  <p className="text-xs font-medium text-slate-300">{stat.title}</p>
                </motion.div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
