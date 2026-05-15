import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

// Pages
import HomePage from './pages/HomePage';
import DashboardPage from './pages/DashboardPage';
import TransportPage from './pages/TransportPage';
import InnovationPage from './pages/InnovationPage';
import TourismPage from './pages/TourismPage';
import Vision2035Page from './pages/Vision2035Page';
import SmartMapPage from './pages/SmartMapPage';
import AiPage from './pages/AiPage';

// Components
import PageLoader from './components/PageLoader';

function App() {
  const [loaded, setLoaded] = useState(false);

  return (
    <>
      <AnimatePresence mode="wait">
        {!loaded && <PageLoader key="loader" onComplete={() => setLoaded(true)} />}
      </AnimatePresence>

      {loaded && (
        <AnimatePresence mode="wait">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/dashboard" element={<DashboardPage />} />
            <Route path="/transport" element={<TransportPage />} />
            <Route path="/innovation" element={<InnovationPage />} />
            <Route path="/tourism" element={<TourismPage />} />
            <Route path="/vision-2035" element={<Vision2035Page />} />
            <Route path="/smart-map" element={<SmartMapPage />} />
            <Route path="/ai-assistant" element={<AiPage />} />
          </Routes>
        </AnimatePresence>
      )}
    </>
  );
}

export default App;
