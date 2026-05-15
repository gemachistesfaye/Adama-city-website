import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import VoiceAssistant from '../components/VoiceAssistant';
import { motion } from 'framer-motion';

const PageLayout = ({ children, showVoice = false }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className="min-h-screen bg-[#020617] text-slate-50 flex flex-col"
    >
      <Navbar />
      <main className="flex-grow pt-16">
        {children}
      </main>
      <Footer />
      {showVoice && <VoiceAssistant />}
    </motion.div>
  );
};

export default PageLayout;
