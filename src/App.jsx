import { Routes, Route } from 'react-router-dom';
import { motion } from 'framer-motion';
import Navbar from './components/Navbar';
import Hero from './sections/Hero';
import About from './sections/About';
import Stats from './sections/Stats';
import Services from './sections/Services';
import Tourism from './sections/Tourism';
import Events from './sections/Events';
import Footer from './components/Footer';
import AiPage from './pages/AiPage';

// Main homepage layout
const Home = () => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 1.2, ease: 'easeOut' }}
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
    </main>
    <Footer />
  </motion.div>
);

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/ai-assistant" element={<AiPage />} />
    </Routes>
  );
}

export default App;


export default App;
