import { motion } from 'framer-motion';
import { Building2, Sun, HeartHandshake, Map } from 'lucide-react';

const features = [
  {
    name: 'Economic Hub',
    description: 'A thriving center for trade and industry, connecting regions and fostering growth.',
    icon: Building2,
    color: 'text-blue-500',
    bg: 'bg-blue-500/10',
  },
  {
    name: 'Pleasant Climate',
    description: 'Enjoy beautiful weather year-round, making it a perfect destination for relaxation.',
    icon: Sun,
    color: 'text-amber-500',
    bg: 'bg-amber-500/10',
  },
  {
    name: 'Rich Culture',
    description: 'Experience the warm hospitality and vibrant traditions of the Oromo people.',
    icon: HeartHandshake,
    color: 'text-pink-500',
    bg: 'bg-pink-500/10',
  },
  {
    name: 'Strategic Location',
    description: 'Located at the heart of Ethiopia, serving as a gateway to the eastern and southern routes.',
    icon: Map,
    color: 'text-violet-500',
    bg: 'bg-violet-500/10',
  },
];

const Features = () => {
  return (
    <section id="features" className="py-24 bg-slate-900 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold mb-4"
          >
            Why Adama?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-slate-400 max-w-2xl mx-auto"
          >
            Discover what makes Adama one of the fastest-growing and most exciting cities in Ethiopia.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={feature.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-slate-950 p-6 rounded-2xl border border-slate-800 hover:border-slate-700 transition-colors"
              >
                <div className={`w-12 h-12 rounded-lg flex items-center justify-center mb-6 ${feature.bg} ${feature.color}`}>
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-semibold mb-3">{feature.name}</h3>
                <p className="text-slate-400 leading-relaxed">{feature.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Features;
