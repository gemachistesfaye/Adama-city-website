import { motion } from 'framer-motion';
import Navbar from './components/Navbar';
import Hero from './sections/Hero';
import About from './sections/About';
import Stats from './sections/Stats';
import Services from './sections/Services';
import Tourism from './sections/Tourism';
import Events from './sections/Events';
import AiAssistant from './sections/AiAssistant';
import Footer from './components/Footer';

function App() {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.2, ease: "easeOut" }}
      className="min-h-screen bg-slate-950 text-slate-50 flex flex-col font-sans selection:bg-pink-500/30 selection:text-white"
    >
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <About />
        <Stats />
        <Services />
        <Tourism />
        <Events />
        <AiAssistant />
      </main>
      <Footer />
    </motion.div>
  );
}

export default App;
