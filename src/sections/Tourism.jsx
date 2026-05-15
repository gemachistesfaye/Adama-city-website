import { motion } from 'framer-motion';
import { MapPin, Navigation } from 'lucide-react';

const destinations = [
  {
    title: 'Sodere Hot Springs',
    category: 'Wellness & Nature',
    description: 'Experience natural volcanic hot springs surrounded by lush vegetation and exotic wildlife in the heart of the Rift Valley.',
    image: 'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?q=80&w=2000&auto=format&fit=crop',
    featured: true,
  },
  {
    title: 'Aba Gada Center',
    category: 'Culture & Heritage',
    description: 'A magnificent cultural landmark celebrating the traditional democratic Gadaa system of the Oromo people.',
    image: 'https://images.unsplash.com/photo-1528127269322-539801943592?q=80&w=2000&auto=format&fit=crop',
    featured: false,
  },
  {
    title: 'Adama Wind Farm',
    category: 'Modern Engineering',
    description: 'Witness the intersection of modern renewable energy and striking landscapes at one of Africa\'s largest wind farms.',
    image: 'https://images.unsplash.com/photo-1466611653911-95081537e5b7?q=80&w=2000&auto=format&fit=crop',
    featured: false,
  },
  {
    title: 'Rift Valley Panoramas',
    category: 'Adventure',
    description: 'Take guided tours through the stunning geological formations and dramatic cliffs overlooking the valley.',
    image: 'https://images.unsplash.com/photo-1501785888041-af3ef285b470?q=80&w=2000&auto=format&fit=crop',
    featured: false,
  },
];

const Tourism = () => {
  return (
    <section id="tourism" className="py-24 bg-slate-950 relative border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header section */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-900 border border-slate-800 mb-6"
            >
              <Navigation className="h-4 w-4 text-pink-500" />
              <span className="text-sm font-semibold tracking-wide text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-rose-400 uppercase">
                Explore Adama
              </span>
            </motion.div>
            
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl font-bold text-white leading-tight mb-4"
            >
              Discover the <span className="italic text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-orange-400">Beauty</span> of the Rift Valley
            </motion.h2>
          </div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <button className="px-6 py-3 rounded-full bg-white text-slate-950 font-semibold hover:bg-slate-200 transition-colors">
              View All Destinations
            </button>
          </motion.div>
        </div>

        {/* Tourism Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {destinations.map((dest, index) => (
            <motion.div
              key={dest.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className={`group relative rounded-3xl overflow-hidden cursor-pointer ${
                dest.featured ? 'md:col-span-2 lg:col-span-2 aspect-[16/9] md:aspect-auto' : 'aspect-[4/5] md:aspect-auto md:h-[450px]'
              }`}
            >
              {/* Image Background */}
              <div className="absolute inset-0">
                <img 
                  src={dest.image} 
                  alt={dest.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>
              
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-300" />

              {/* Content Box */}
              <div className="absolute inset-0 flex flex-col justify-end p-8">
                <div className="translate-y-8 group-hover:translate-y-0 transition-transform duration-300">
                  <div className="inline-block px-3 py-1 mb-4 rounded-full bg-white/20 backdrop-blur-md border border-white/20">
                    <span className="text-xs font-semibold text-white tracking-wide uppercase">
                      {dest.category}
                    </span>
                  </div>
                  
                  <h3 className="text-2xl md:text-3xl font-bold text-white mb-2 flex items-center gap-2">
                    {dest.title}
                  </h3>
                  
                  <div className="flex items-start gap-2 mb-4">
                    <MapPin className="h-5 w-5 text-pink-500 shrink-0 mt-0.5" />
                    <p className="text-slate-300 text-sm md:text-base leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100 line-clamp-2">
                      {dest.description}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Tourism;
