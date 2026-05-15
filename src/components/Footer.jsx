import { MapPin, Mail, Phone, MessageCircle, Globe, Share2, ArrowRight } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="relative bg-slate-950 pt-20 pb-10 overflow-hidden border-t border-slate-800">
      {/* Decorative Background Blur */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-gradient-to-b from-pink-500/5 to-transparent blur-[100px] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 mb-16">
          
          {/* Brand Column */}
          <div className="lg:col-span-4">
            <div className="flex items-center gap-2 mb-6 cursor-pointer">
              <div className="p-2 bg-gradient-to-br from-pink-500 to-violet-500 rounded-xl shadow-lg shadow-pink-500/20">
                <MapPin className="h-6 w-6 text-white" />
              </div>
              <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white via-slate-200 to-slate-400">
                Adama
              </span>
            </div>
            <p className="text-slate-400 mb-8 leading-relaxed max-w-sm">
              The vibrant heart of Oromia. A city of progress, culture, and endless opportunities. Experience the smart city of tomorrow, today.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="p-2.5 bg-slate-900 border border-slate-800 rounded-lg text-slate-400 hover:text-white hover:bg-pink-500 hover:border-pink-500 transition-all duration-300" aria-label="Website">
                <Globe className="h-5 w-5" />
              </a>
              <a href="#" className="p-2.5 bg-slate-900 border border-slate-800 rounded-lg text-slate-400 hover:text-white hover:bg-violet-500 hover:border-violet-500 transition-all duration-300" aria-label="Community">
                <MessageCircle className="h-5 w-5" />
              </a>
              <a href="#" className="p-2.5 bg-slate-900 border border-slate-800 rounded-lg text-slate-400 hover:text-white hover:bg-blue-500 hover:border-blue-500 transition-all duration-300" aria-label="Share">
                <Share2 className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2 lg:col-start-6">
            <h4 className="text-lg font-bold text-white mb-6">Explore</h4>
            <ul className="space-y-3">
              {['Home', 'About City', 'Smart Services', 'Tourism', 'Events'].map((link) => (
                <li key={link}>
                  <a href={`#${link.split(' ')[0].toLowerCase()}`} className="text-slate-400 hover:text-pink-400 transition-colors inline-flex items-center group">
                    <ArrowRight className="h-3 w-3 mr-2 opacity-0 -ml-5 group-hover:opacity-100 group-hover:ml-0 transition-all duration-300" />
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Citizen Services */}
          <div className="lg:col-span-2">
            <h4 className="text-lg font-bold text-white mb-6">Services</h4>
            <ul className="space-y-3">
              {['E-Government', 'Healthcare', 'Transportation', 'Education', 'Business'].map((link) => (
                <li key={link}>
                  <a href="#services" className="text-slate-400 hover:text-violet-400 transition-colors inline-flex items-center group">
                    <ArrowRight className="h-3 w-3 mr-2 opacity-0 -ml-5 group-hover:opacity-100 group-hover:ml-0 transition-all duration-300" />
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Column */}
          <div className="lg:col-span-3">
            <h4 className="text-lg font-bold text-white mb-6">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-4 text-slate-400 group cursor-pointer">
                <div className="p-2 rounded-lg bg-slate-900 border border-slate-800 group-hover:bg-pink-500/10 group-hover:border-pink-500/30 transition-colors">
                  <MapPin className="h-5 w-5 text-slate-300 group-hover:text-pink-400 transition-colors" />
                </div>
                <span className="mt-1 group-hover:text-slate-200 transition-colors">Adama City Administration Building,<br />Oromia, Ethiopia</span>
              </li>
              <li className="flex items-center gap-4 text-slate-400 group cursor-pointer">
                <div className="p-2 rounded-lg bg-slate-900 border border-slate-800 group-hover:bg-violet-500/10 group-hover:border-violet-500/30 transition-colors">
                  <Phone className="h-5 w-5 text-slate-300 group-hover:text-violet-400 transition-colors" />
                </div>
                <span className="group-hover:text-slate-200 transition-colors">+251 22 111 2233</span>
              </li>
              <li className="flex items-center gap-4 text-slate-400 group cursor-pointer">
                <div className="p-2 rounded-lg bg-slate-900 border border-slate-800 group-hover:bg-blue-500/10 group-hover:border-blue-500/30 transition-colors">
                  <Mail className="h-5 w-5 text-slate-300 group-hover:text-blue-400 transition-colors" />
                </div>
                <span className="group-hover:text-slate-200 transition-colors">info@adamacity.gov.et</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Copyright */}
        <div className="pt-8 border-t border-slate-800/50 flex flex-col md:flex-row items-center justify-between text-sm text-slate-500">
          <p className="mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} Adama Smart City. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-white transition-colors">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
