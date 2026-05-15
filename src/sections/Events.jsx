import { motion } from 'framer-motion';
import { Calendar, MapPin, Clock, ArrowRight } from 'lucide-react';

const events = [
  {
    id: 1,
    title: 'Adama Tech Innovation Summit',
    category: 'Technology',
    date: 'Oct 24',
    fullDate: 'October 24, 2026',
    time: '09:00 AM - 05:00 PM',
    location: 'Aba Gada Convention Center',
    image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=2000&auto=format&fit=crop',
  },
  {
    id: 2,
    title: 'Oromo Cultural Festival',
    category: 'Culture',
    date: 'Nov 12',
    fullDate: 'November 12, 2026',
    time: '10:00 AM - 08:00 PM',
    location: 'Adama City Stadium',
    image: 'https://images.unsplash.com/photo-1533174000220-4ee415413008?q=80&w=2000&auto=format&fit=crop',
  },
  {
    id: 3,
    title: 'Rift Valley Trade Expo',
    category: 'Business',
    date: 'Dec 05',
    fullDate: 'December 05, 2026',
    time: '08:30 AM - 06:00 PM',
    location: 'Adama Industrial Park',
    image: 'https://images.unsplash.com/photo-1556761175-5973dc0f32b7?q=80&w=2000&auto=format&fit=crop',
  },
];

const Events = () => {
  return (
    <section id="events" className="py-24 bg-slate-900 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-5xl font-bold text-white mb-4"
            >
              Upcoming <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-500">Events</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-lg text-slate-400"
            >
              Stay connected with the latest summits, cultural festivals, and business expos happening across Adama.
            </motion.p>
          </div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <button className="flex items-center text-sm font-semibold text-emerald-400 hover:text-emerald-300 transition-colors group">
              View Event Calendar
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </motion.div>
        </div>

        {/* Events Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {events.map((event, index) => (
            <motion.div
              key={event.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="group bg-slate-950 border border-slate-800 hover:border-slate-700 rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-[0_0_30px_-10px_rgba(52,211,153,0.15)] flex flex-col h-full"
            >
              {/* Event Image */}
              <div className="relative h-56 overflow-hidden">
                <img 
                  src={event.image} 
                  alt={event.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 to-transparent opacity-80" />
                
                {/* Date Badge */}
                <div className="absolute top-4 right-4 bg-slate-950/80 backdrop-blur-md border border-white/10 rounded-xl p-3 text-center min-w-[70px]">
                  <span className="block text-2xl font-bold text-white leading-none mb-1">
                    {event.date.split(' ')[1]}
                  </span>
                  <span className="block text-xs font-semibold text-emerald-400 uppercase tracking-wider">
                    {event.date.split(' ')[0]}
                  </span>
                </div>
                
                {/* Category Pill */}
                <div className="absolute bottom-4 left-4">
                  <span className="px-3 py-1 bg-white/10 backdrop-blur-md border border-white/10 rounded-full text-xs font-medium text-white">
                    {event.category}
                  </span>
                </div>
              </div>

              {/* Event Content */}
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-bold text-white mb-4 group-hover:text-emerald-400 transition-colors">
                  {event.title}
                </h3>
                
                <div className="space-y-3 mb-6 flex-grow">
                  <div className="flex items-center text-sm text-slate-400">
                    <Calendar className="h-4 w-4 mr-3 text-slate-500" />
                    {event.fullDate}
                  </div>
                  <div className="flex items-center text-sm text-slate-400">
                    <Clock className="h-4 w-4 mr-3 text-slate-500" />
                    {event.time}
                  </div>
                  <div className="flex items-center text-sm text-slate-400">
                    <MapPin className="h-4 w-4 mr-3 text-slate-500" />
                    {event.location}
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-800">
                  <button className="w-full py-2.5 rounded-lg bg-slate-900 text-sm font-semibold text-white hover:bg-emerald-600 transition-colors">
                    Register Now
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Events;
