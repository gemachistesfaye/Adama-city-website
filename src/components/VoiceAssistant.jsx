import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mic, MicOff, X, Sparkles } from 'lucide-react';

const simulatedResponses = [
  'Searching city services for you...',
  'Adama AI is processing your request...',
  'Fetching real-time city data...',
  'Connecting to smart city network...',
  'Analyzing your query...',
];

const waveHeights = [30, 60, 45, 80, 55, 70, 40, 65, 35, 75, 50, 85, 45, 60, 30];

const VoiceAssistant = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isListening, setIsListening] = useState(false);
  const [statusText, setStatusText] = useState('Tap to speak');
  const [responseText, setResponseText] = useState('');
  const [responseIndex, setResponseIndex] = useState(0);

  // Simulate listening cycle
  useEffect(() => {
    if (!isListening) return;

    setStatusText('Listening...');
    setResponseText('');

    const listeningTimer = setTimeout(() => {
      setIsListening(false);
      setStatusText('Processing...');

      const processingTimer = setTimeout(() => {
        const res = simulatedResponses[responseIndex % simulatedResponses.length];
        setResponseText(res);
        setResponseIndex((prev) => prev + 1);
        setStatusText('Tap to speak');
      }, 1500);

      return () => clearTimeout(processingTimer);
    }, 3000);

    return () => clearTimeout(listeningTimer);
  }, [isListening]);

  const handleMicClick = () => {
    if (isListening) {
      setIsListening(false);
      setStatusText('Tap to speak');
    } else {
      setIsListening(true);
    }
  };

  return (
    <>
      {/* Floating Trigger Button */}
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 1.5, type: 'spring', bounce: 0.5 }}
        className="fixed bottom-8 right-8 z-50"
      >
        <button
          onClick={() => setIsOpen(true)}
          className="relative group h-16 w-16 rounded-full flex items-center justify-center focus:outline-none"
        >
          {/* Breathing outer ring */}
          <motion.div
            animate={{ scale: [1, 1.4, 1], opacity: [0.6, 0, 0.6] }}
            transition={{ repeat: Infinity, duration: 2.5, ease: 'easeInOut' }}
            className="absolute inset-0 rounded-full bg-gradient-to-br from-pink-500 to-violet-500"
          />
          {/* Button core */}
          <div className="relative h-16 w-16 rounded-full bg-gradient-to-br from-pink-500 to-violet-600 shadow-[0_0_30px_rgba(236,72,153,0.6)] flex items-center justify-center group-hover:shadow-[0_0_50px_rgba(236,72,153,0.8)] transition-shadow duration-300">
            <Mic className="h-7 w-7 text-white" />
          </div>
        </button>
      </motion.div>

      {/* Full Voice UI Modal */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4"
            style={{ backdropFilter: 'blur(20px)', backgroundColor: 'rgba(2,6,23,0.85)' }}
          >
            {/* Ambient Glow Background */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden">
              <motion.div
                animate={{ scale: [1, 1.2, 1], opacity: [0.15, 0.25, 0.15] }}
                transition={{ repeat: Infinity, duration: 4, ease: 'easeInOut' }}
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-radial from-pink-500 to-transparent rounded-full"
                style={{ background: 'radial-gradient(circle, rgba(236,72,153,0.3) 0%, transparent 70%)' }}
              />
              <motion.div
                animate={{ scale: [1.2, 1, 1.2], opacity: [0.1, 0.2, 0.1] }}
                transition={{ repeat: Infinity, duration: 5, ease: 'easeInOut', delay: 1 }}
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px]"
                style={{ background: 'radial-gradient(circle, rgba(139,92,246,0.2) 0%, transparent 70%)' }}
              />
            </div>

            {/* Modal Card */}
            <motion.div
              initial={{ scale: 0.85, y: 40, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.85, y: 40, opacity: 0 }}
              transition={{ type: 'spring', damping: 20, stiffness: 200 }}
              className="relative w-full max-w-sm bg-slate-950/70 backdrop-blur-3xl border border-white/10 rounded-3xl p-8 shadow-2xl overflow-hidden"
            >
              {/* Inner top gradient shine */}
              <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
              <div className="absolute inset-0 bg-gradient-to-b from-pink-500/5 to-violet-500/5 pointer-events-none" />

              {/* Close Button */}
              <button
                onClick={() => { setIsOpen(false); setIsListening(false); setStatusText('Tap to speak'); setResponseText(''); }}
                className="absolute top-4 right-4 p-2 rounded-full bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white transition-colors border border-white/10"
              >
                <X className="h-4 w-4" />
              </button>

              {/* Header */}
              <div className="flex items-center gap-3 mb-8 relative z-10">
                <div className="p-2 rounded-xl bg-gradient-to-br from-pink-500/20 to-violet-500/20 border border-pink-500/20">
                  <Sparkles className="h-5 w-5 text-pink-400" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white">Adama Voice AI</h3>
                  <div className="flex items-center gap-1.5">
                    <span className={`h-1.5 w-1.5 rounded-full ${isListening ? 'bg-pink-500 animate-pulse' : 'bg-emerald-500'}`} />
                    <span className="text-xs font-medium text-slate-400">
                      {isListening ? 'Listening...' : 'Ready'}
                    </span>
                  </div>
                </div>
              </div>

              {/* Center Mic Ring + Waveform */}
              <div className="flex flex-col items-center relative z-10 mb-8">

                {/* Mic Button + Concentric Rings */}
                <div className="relative flex items-center justify-center mb-8">
                  {/* Outer pulse rings — only when listening */}
                  <AnimatePresence>
                    {isListening && (
                      <>
                        {[1, 2, 3].map((i) => (
                          <motion.div
                            key={i}
                            initial={{ scale: 0.8, opacity: 0.6 }}
                            animate={{ scale: 2.5 + i * 0.4, opacity: 0 }}
                            exit={{ opacity: 0 }}
                            transition={{ repeat: Infinity, duration: 2, delay: i * 0.5, ease: 'easeOut' }}
                            className="absolute h-20 w-20 rounded-full"
                            style={{ border: `1px solid rgba(236,72,153,${0.5 / i})` }}
                          />
                        ))}
                      </>
                    )}
                  </AnimatePresence>

                  {/* Mic Core */}
                  <button
                    onClick={handleMicClick}
                    className="relative h-20 w-20 rounded-full focus:outline-none group"
                  >
                    <motion.div
                      animate={isListening
                        ? { boxShadow: ['0 0 20px rgba(236,72,153,0.4)', '0 0 60px rgba(236,72,153,0.8)', '0 0 20px rgba(236,72,153,0.4)'] }
                        : { boxShadow: '0 0 20px rgba(236,72,153,0.3)' }
                      }
                      transition={{ repeat: isListening ? Infinity : 0, duration: 1.2 }}
                      className="h-20 w-20 rounded-full bg-gradient-to-br from-pink-500 to-violet-600 flex items-center justify-center"
                    >
                      {isListening
                        ? <MicOff className="h-8 w-8 text-white" />
                        : <Mic className="h-8 w-8 text-white" />
                      }
                    </motion.div>
                  </button>
                </div>

                {/* Waveform Bars */}
                <div className="flex items-center justify-center gap-0.5 h-14 w-full max-w-[220px]">
                  {waveHeights.map((h, i) => (
                    <motion.div
                      key={i}
                      className="rounded-full flex-1"
                      style={{ backgroundColor: i % 2 === 0 ? '#ec4899' : '#8b5cf6' }}
                      animate={isListening
                        ? { scaleY: [0.2, (Math.random() * 0.8 + 0.3), 0.2], opacity: [0.5, 1, 0.5] }
                        : { scaleY: 0.15, opacity: 0.3 }
                      }
                      transition={isListening
                        ? { repeat: Infinity, duration: 0.5 + Math.random() * 0.5, delay: i * 0.04, ease: 'easeInOut' }
                        : { duration: 0.3 }
                      }
                      initial={{ scaleY: 0.15 }}
                      style={{ height: `${h}%`, backgroundColor: i % 2 === 0 ? '#ec4899' : '#8b5cf6' }}
                    />
                  ))}
                </div>

                {/* Status Text */}
                <motion.p
                  key={statusText}
                  initial={{ opacity: 0, y: 5 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-sm font-medium text-slate-400 mt-4"
                >
                  {statusText}
                </motion.p>
              </div>

              {/* AI Response Box */}
              <AnimatePresence>
                {responseText && (
                  <motion.div
                    initial={{ opacity: 0, y: 10, height: 0 }}
                    animate={{ opacity: 1, y: 0, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    className="relative z-10 bg-gradient-to-br from-pink-500/10 to-violet-500/10 border border-white/10 rounded-2xl p-4 mb-2"
                  >
                    <div className="flex items-start gap-3">
                      <Sparkles className="h-4 w-4 text-pink-400 shrink-0 mt-0.5" />
                      <p className="text-sm text-slate-200 leading-relaxed">{responseText}</p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Hint */}
              <p className="text-center text-xs text-slate-600 relative z-10 mt-4">
                Tap the microphone to speak. Tap again to stop.
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default VoiceAssistant;
