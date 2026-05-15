import Navbar from './components/Navbar';
import Hero from './sections/Hero';
import About from './sections/About';
import Features from './sections/Features';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-50 flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <About />
        <Features />
      </main>
      <Footer />
    </div>
  );
}

export default App;
