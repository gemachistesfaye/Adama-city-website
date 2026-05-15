import PageLayout from '../layouts/PageLayout';
import Innovation from '../sections/Innovation';
import { motion } from 'framer-motion';
import { BrainCircuit } from 'lucide-react';

const InnovationPage = () => (
  <PageLayout>
    <div className="bg-[#020617]">
      <div className="relative py-20 border-b border-slate-800 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-pink-500/8 blur-[120px] rounded-full" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-pink-500/10 border border-pink-500/20 mb-6">
            <BrainCircuit className="h-4 w-4 text-pink-400" />
            <span className="text-sm font-semibold text-pink-400 uppercase tracking-wide">Tech Ecosystem</span>
          </motion.div>
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl font-extrabold text-white mb-4">
            Innovation <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-violet-400">&amp; Technology</span>
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}
            className="text-xl text-slate-400 max-w-2xl mx-auto">
            Startups, research labs, AI programs, and youth innovation shaping the next generation of smart cities.
          </motion.p>
        </div>
      </div>
      <Innovation />
    </div>
  </PageLayout>
);

export default InnovationPage;
