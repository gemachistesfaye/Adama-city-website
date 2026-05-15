import PageLayout from '../layouts/PageLayout';
import Vision2035 from '../sections/Vision2035';
import { motion } from 'framer-motion';
import { Sparkles } from 'lucide-react';

const Vision2035Page = () => (
  <PageLayout>
    <div className="bg-[#020617]">
      <div className="relative py-20 border-b border-slate-800 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[300px] bg-gradient-to-b from-pink-500/10 via-violet-500/8 to-transparent blur-[120px] rounded-full" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-pink-500/10 border border-pink-500/20 mb-6">
            <Sparkles className="h-4 w-4 text-pink-400" />
            <span className="text-sm font-semibold text-pink-400 uppercase tracking-wide">Strategic Roadmap</span>
          </motion.div>
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
            className="text-5xl md:text-7xl font-extrabold text-white mb-4 leading-none">
            Adama <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-violet-500 to-cyan-400">Vision 2035</span>
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}
            className="text-xl text-slate-400 max-w-2xl mx-auto">
            A decade-long blueprint to become Africa's most forward-thinking, connected, and sustainable smart city.
          </motion.p>
        </div>
      </div>
      <Vision2035 />
    </div>
  </PageLayout>
);

export default Vision2035Page;
