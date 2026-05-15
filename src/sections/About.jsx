import { motion } from 'framer-motion';
import { CheckCircle2, ArrowRight } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-24 bg-slate-950 relative overflow-hidden">
      {/* Decorative Blur Elements */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-pink-500/5 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-violet-500/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Column: Images */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-white/10 aspect-[4/5] sm:aspect-square lg:aspect-[4/5]">
              {/* Using a high quality Unsplash placeholder for Adama/Cityscape */}
              <img 
                src="https://images.unsplash.com/photo-1542361345-89e58247f2d5?q=80&w=2070&auto=format&fit=crop" 
                alt="Adama City Landscape" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />
            </div>

            {/* Floating Info Card */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="absolute -bottom-8 -right-8 sm:-bottom-10 sm:-right-10 bg-slate-900/80 backdrop-blur-xl p-6 rounded-2xl border border-white/10 shadow-2xl max-w-[200px]"
            >
              <h4 className="text-4xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500 mb-2">
                1916
              </h4>
              <p className="text-sm text-slate-300 font-medium">Year Established</p>
              <div className="h-1 w-12 bg-pink-500 mt-4 rounded-full" />
            </motion.div>
          </motion.div>

          {/* Right Column: Text Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
          >
            <div className="inline-block px-4 py-1.5 rounded-full bg-white/5 border border-white/10 mb-6">
              <span className="text-sm font-semibold tracking-wide text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-violet-400 uppercase">
                About Adama
              </span>
            </div>

            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6 leading-tight">
              The Heartbeat of <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-violet-500">Oromia</span>
            </h2>

            <p className="text-lg text-slate-400 mb-8 leading-relaxed">
              Strategically located in the Great Rift Valley, Adama (formerly Nazret) is one of Ethiopia's most dynamic and fastest-growing cities. Serving as a crucial transportation hub connecting the capital to eastern regions, it represents the perfect synthesis of rich cultural heritage and rapid modernization.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
              {[
                'Prime Economic Hub',
                'Pleasant Rift Valley Climate',
                'Rich Oromo Heritage',
                'Modern Infrastructure',
                'Academic Center of Excellence',
                'Vibrant Tourism Scene'
              ].map((item, index) => (
                <div key={index} className="flex items-center gap-3">
                  <CheckCircle2 className="h-5 w-5 text-pink-500 shrink-0" />
                  <span className="text-slate-300">{item}</span>
                </div>
              ))}
            </div>

            <a 
              href="#culture" 
              className="inline-flex items-center text-pink-400 font-semibold hover:text-pink-300 transition-colors group"
            >
              Discover our history 
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </a>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default About;
