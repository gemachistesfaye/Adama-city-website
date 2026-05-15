import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-16 overflow-hidden">
      {/* Background Gradients */}
      <div className="absolute inset-0 bg-slate-950">
        <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-pink-500/10 blur-[120px] rounded-full mix-blend-screen" />
        <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-violet-500/10 blur-[120px] rounded-full mix-blend-screen" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="text-center max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-block py-1 px-3 rounded-full bg-slate-800/50 border border-slate-700 text-pink-400 text-sm font-medium mb-6">
              Welcome to the Heart of Oromia
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-5xl md:text-7xl font-extrabold tracking-tight mb-8"
          >
            Discover{' '}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-500 via-purple-500 to-violet-500">
              Adama City
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-xl md:text-2xl text-slate-400 mb-10"
          >
            A vibrant hub of culture, commerce, and natural beauty. Experience the perfect blend of tradition and modern progress.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <a
              href="#explore"
              className="inline-flex items-center justify-center px-8 py-4 text-base font-medium rounded-lg text-white bg-pink-600 hover:bg-pink-700 transition-colors"
            >
              Explore City
              <ArrowRight className="ml-2 h-5 w-5" />
            </a>
            <a
              href="#tourism"
              className="inline-flex items-center justify-center px-8 py-4 text-base font-medium rounded-lg text-slate-300 bg-slate-800 hover:bg-slate-700 hover:text-white transition-colors border border-slate-700"
            >
              Plan Your Visit
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
