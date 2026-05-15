import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import { MapPin } from 'lucide-react';

const PageLoader = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((p) => {
        if (p >= 100) {
          clearInterval(interval);
          setTimeout(onComplete, 300);
          return 100;
        }
        return p + Math.random() * 18;
      });
    }, 100);
    return () => clearInterval(interval);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8, ease: 'easeInOut' }}
      className="fixed inset-0 z-[999] flex flex-col items-center justify-center bg-slate-950 overflow-hidden"
    >
      {/* Background Ambient */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full blur-[200px] opacity-20"
        style={{ background: 'radial-gradient(circle, #ec4899 0%, #8b5cf6 50%, transparent 70%)' }}
      />

      {/* Logo */}
      <motion.div
        initial={{ scale: 0.5, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5, type: 'spring' }}
        className="flex items-center gap-3 mb-10"
      >
        <div className="p-3 bg-gradient-to-br from-pink-500 to-violet-500 rounded-2xl shadow-lg shadow-pink-500/30">
          <MapPin className="h-8 w-8 text-white" />
        </div>
        <div>
          <span className="text-3xl font-extrabold text-white">Adama</span>
          <p className="text-xs text-slate-400 font-medium tracking-[0.2em] uppercase">Smart City Platform</p>
        </div>
      </motion.div>

      {/* Progress bar */}
      <div className="w-48 h-0.5 bg-slate-800 rounded-full overflow-hidden mb-4">
        <motion.div
          className="h-full bg-gradient-to-r from-pink-500 to-violet-500 rounded-full"
          animate={{ width: `${Math.min(progress, 100)}%` }}
          transition={{ ease: 'easeOut', duration: 0.2 }}
        />
      </div>

      <p className="text-xs text-slate-500 font-mono tracking-widest uppercase">
        {progress < 100 ? 'Initializing systems...' : 'Ready'}
      </p>
    </motion.div>
  );
};

export default PageLoader;
