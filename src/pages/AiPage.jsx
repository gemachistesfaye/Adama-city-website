import AiAssistant from '../sections/AiAssistant';
import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const AiPage = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className="min-h-screen bg-slate-950 text-slate-50 flex flex-col"
    >
      {/* Top Navigation Bar */}
      <div className="sticky top-0 z-50 bg-slate-950/80 backdrop-blur-xl border-b border-white/10 px-4 sm:px-8 py-4 flex items-center justify-between">
        <Link
          to="/"
          className="flex items-center gap-2 text-slate-300 hover:text-white transition-colors group"
        >
          <ArrowLeft className="h-5 w-5 group-hover:-translate-x-1 transition-transform" />
          <span className="font-medium">Back to Adama City</span>
        </Link>
        <div className="flex items-center gap-2">
          <span className="flex h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
          <span className="text-xs font-semibold text-emerald-400">Adama AI Online</span>
        </div>
      </div>

      {/* AI Assistant Section (full page) */}
      <div className="flex-grow flex flex-col">
        <AiAssistant fullPage />
      </div>
    </motion.div>
  );
};

export default AiPage;
