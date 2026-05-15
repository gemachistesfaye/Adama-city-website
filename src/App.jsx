import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar';
import Hero from './sections/Hero';
import About from './sections/About';
import Stats from './sections/Stats';
import Services from './sections/Services';
import Dashboard from './sections/Dashboard';
import CommandCenter from './sections/CommandCenter';
import CityMap from './sections/CityMap';
import Transportation from './sections/Transportation';
import Innovation from './sections/Innovation';
import Vision2035 from './sections/Vision2035';
import Tourism from './sections/Tourism';
import Events from './sections/Events';
import Footer from './components/Footer';
import VoiceAssistant from './components/VoiceAssistant';
import AiPage from './pages/AiPage';
import PageLoader from './components/PageLoader';

// Main homepage layout
const Home = () => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 0.8, ease: 'easeOut' }}
    className="min-h-screen bg-[#020617] text-slate-50 flex flex-col"
  >
    <Navbar />
    <main className="flex-grow">
      <Hero />
      <About />
      <Stats />
      <Services />
      <Dashboard />
      <CommandCenter />
      <CityMap />
      <Transportation />
      <Innovation />
      <Vision2035 />
      <Tourism />
      <Events />
    </main>
    <Footer />
    <VoiceAssistant />
  </motion.div>
);

function App() {
  const [loaded, setLoaded] = useState(false);

  return (
    <>
      <AnimatePresence>
        {!loaded && <PageLoader key="loader" onComplete={() => setLoaded(true)} />}
      </AnimatePresence>

      {loaded && (
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/ai-assistant" element={<AiPage />} />
        </Routes>
      )}
    </>
  );
}

export default App;
