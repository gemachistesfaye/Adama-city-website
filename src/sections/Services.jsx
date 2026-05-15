import { motion } from 'framer-motion';
import { Bus, HeartPulse, Map, GraduationCap, ShieldAlert, Briefcase, ArrowRight } from 'lucide-react';

const services = [
  {
    title: 'Smart Transportation',
    description: 'Real-time transit tracking, digital ticketing, and integrated traffic management systems.',
    icon: Bus,
    color: 'from-blue-500 to-cyan-500',
    shadow: 'shadow-blue-500/20',
  },
  {
    title: 'Digital Healthcare',
    description: 'E-health records, telemedicine portals, and smart emergency response coordination.',
    icon: HeartPulse,
    color: 'from-pink-500 to-rose-500',
    shadow: 'shadow-pink-500/20',
  },
  {
    title: 'Tourism & Culture',
    description: 'Interactive city guides, digital heritage mapping, and smart facility booking.',
    icon: Map,
    color: 'from-violet-500 to-purple-500',
    shadow: 'shadow-violet-500/20',
  },
  {
    title: 'E-Education',
    description: 'Connected classrooms, digital libraries, and seamless remote learning infrastructure.',
    icon: GraduationCap,
    color: 'from-amber-500 to-orange-500',
    shadow: 'shadow-amber-500/20',
  },
  {
    title: 'Emergency Services',
    description: 'AI-driven incident detection, rapid response dispatch, and community alert systems.',
    icon: ShieldAlert,
    color: 'from-red-500 to-rose-600',
    shadow: 'shadow-red-500/20',
  },
  {
    title: 'Business Solutions',
    description: 'Streamlined digital licensing, e-taxation, and integrated commercial data hubs.',
    icon: Briefcase,
    color: 'from-emerald-500 to-teal-500',
    shadow: 'shadow-emerald-500/20',
  },
];

const Services = () => {
  return (
    <section id="services" className="py-24 bg-slate-900 relative border-t border-slate-800 overflow-hidden">
      
      {/* Background Decor */}
      <div className="absolute inset-0 pointer-events-none opacity-30">
        <div className="absolute top-1/4 left-1/4 w-[300px] h-[300px] bg-blue-500/10 blur-[100px] rounded-full" />
        <div className="absolute bottom-1/4 right-1/4 w-[300px] h-[300px] bg-pink-500/10 blur-[100px] rounded-full" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center justify-center px-4 py-1.5 rounded-full bg-slate-800/50 border border-slate-700 mb-6"
          >
            <span className="text-sm font-semibold tracking-wide text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400 uppercase">
              Digital Infrastructure
            </span>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold text-white mb-6"
          >
            Smart City <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-cyan-500">Services</span>
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-slate-400"
          >
            Empowering citizens and businesses with next-generation digital services. Access everything you need from a single, unified smart platform.
          </motion.p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -8, transition: { duration: 0.2 } }}
                className="group relative bg-slate-950/50 backdrop-blur-sm border border-slate-800 hover:border-slate-700 rounded-2xl p-8 transition-all hover:bg-slate-900 overflow-hidden"
              >
                {/* Glow Effect */}
                <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-[0.03] transition-opacity duration-300`} />
                
                {/* Icon Container */}
                <div className={`w-14 h-14 rounded-xl flex items-center justify-center mb-6 bg-slate-900 border border-slate-800 shadow-lg ${service.shadow} group-hover:scale-110 transition-transform duration-300`}>
                  <div className={`bg-gradient-to-br ${service.color} text-transparent bg-clip-text`}>
                    <Icon className="h-7 w-7 text-white drop-shadow-md" />
                  </div>
                </div>

                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-slate-300 transition-colors">
                  {service.title}
                </h3>
                
                <p className="text-slate-400 leading-relaxed mb-6">
                  {service.description}
                </p>

                <a href="#learn-more" className="inline-flex items-center text-sm font-semibold text-slate-300 hover:text-white transition-colors group/link">
                  Learn more
                  <ArrowRight className="ml-1 h-4 w-4 group-hover/link:translate-x-1 transition-transform" />
                </a>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default Services;
