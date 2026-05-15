import { MapPin, Mail, Phone, Facebook, Twitter, Instagram } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-slate-950 pt-16 pb-8 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <MapPin className="h-6 w-6 text-pink-500" />
              <span className="text-xl font-bold">Adama City</span>
            </div>
            <p className="text-slate-400 mb-6 max-w-sm">
              The vibrant heart of Oromia. A city of progress, culture, and endless opportunities.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-slate-400 hover:text-pink-500 transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-slate-400 hover:text-pink-500 transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-slate-400 hover:text-pink-500 transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4 text-white">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#home" className="text-slate-400 hover:text-pink-500 transition-colors">Home</a></li>
              <li><a href="#tourism" className="text-slate-400 hover:text-pink-500 transition-colors">Tourism</a></li>
              <li><a href="#economy" className="text-slate-400 hover:text-pink-500 transition-colors">Economy</a></li>
              <li><a href="#culture" className="text-slate-400 hover:text-pink-500 transition-colors">Culture</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4 text-white">Contact</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-slate-400">
                <MapPin className="h-5 w-5 text-slate-500 shrink-0 mt-0.5" />
                <span>Adama City Administration,<br />Oromia, Ethiopia</span>
              </li>
              <li className="flex items-center gap-3 text-slate-400">
                <Phone className="h-5 w-5 text-slate-500 shrink-0" />
                <span>+251 22 111 2233</span>
              </li>
              <li className="flex items-center gap-3 text-slate-400">
                <Mail className="h-5 w-5 text-slate-500 shrink-0" />
                <span>info@adamacity.gov.et</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row items-center justify-between text-sm text-slate-500">
          <p>&copy; {new Date().getFullYear()} Adama City Portal. All rights reserved.</p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
