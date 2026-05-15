import { useState, useEffect } from 'react';
import { Menu, X, MapPin, Bot } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

const navLinks = [
  { name: 'Home', to: '/' },
  { name: 'Dashboard', to: '/dashboard' },
  { name: 'Transport', to: '/transport' },
  { name: 'Innovation', to: '/innovation' },
  { name: 'Tourism', to: '/tourism' },
  { name: 'Vision 2035', to: '/vision-2035' },
  { name: 'Smart Map', to: '/smart-map' },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  // Handle scroll effect for glassmorphism
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-slate-950/80 backdrop-blur-xl border-b border-white/10 shadow-lg shadow-black/20 py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo */}
          <Link to="/" className="flex-shrink-0 flex items-center gap-2 cursor-pointer group">
            <div className="p-2 bg-gradient-to-br from-pink-500 to-violet-500 rounded-xl shadow-lg shadow-pink-500/20 group-hover:scale-110 transition-transform duration-300">
              <MapPin className="h-6 w-6 text-white" />
            </div>
            <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white via-slate-200 to-slate-400">
              Adama
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:block">
            <div className="ml-10 flex items-center space-x-6">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.to}
                  className={`group relative px-1 py-2 text-sm font-medium transition-colors ${
                    location.pathname === link.to ? 'text-white' : 'text-slate-400 hover:text-white'
                  }`}
                >
                  {link.name}
                  <span className={`absolute left-0 bottom-0 h-0.5 bg-gradient-to-r from-pink-500 to-violet-500 transition-all duration-300 rounded-full ${
                    location.pathname === link.to ? 'w-full' : 'w-0 group-hover:w-full'
                  }`}></span>
                </Link>
              ))}
              
              <Link
                to="/ai-assistant"
                className="ml-4 flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-pink-500/10 to-violet-500/10 hover:from-pink-500/20 hover:to-violet-500/20 border border-pink-500/30 hover:border-pink-500/60 text-white text-sm font-medium transition-all duration-300 hover:shadow-[0_0_20px_-5px_rgba(236,72,153,0.4)]"
              >
                <Bot className="h-4 w-4 text-pink-400" />
                Ask AI
              </Link>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-xl text-slate-300 hover:text-white hover:bg-white/10 focus:outline-none transition-colors border border-transparent hover:border-white/10"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden absolute top-full left-0 w-full bg-slate-950/95 backdrop-blur-2xl border-b border-white/10 overflow-hidden"
          >
            <div className="px-4 py-6 space-y-2">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.to}
                  onClick={() => setIsOpen(false)}
                  className={`block px-4 py-3 rounded-xl text-base font-medium transition-all ${
                    location.pathname === link.to ? 'text-white bg-white/5' : 'text-slate-400 hover:text-white hover:bg-white/5'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
              <div className="pt-4 px-4">
                <Link
                  to="/ai-assistant"
                  onClick={() => setIsOpen(false)}
                  className="flex items-center justify-center gap-2 w-full px-6 py-4 rounded-xl bg-gradient-to-r from-pink-500 to-violet-500 text-white text-base font-medium"
                >
                  <Bot className="h-5 w-5" />
                  Ask Adama AI
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
