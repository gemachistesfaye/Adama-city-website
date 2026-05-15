import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Bot, Send, Sparkles, User, Map, HeartPulse, Bus, Calendar, ShieldAlert, Lightbulb } from 'lucide-react';

const predefinedResponses = {
  "Best places to visit in Adama": "I highly recommend visiting the Aba Gada Center for cultural heritage, Sodere Hot Springs for relaxation, and the stunning Rift Valley viewpoints. Would you like directions to any of these?",
  "Nearby hospitals": "Adama General Hospital and the ASTU Medical Center are highly rated. Both are fully integrated with our smart emergency coordination system. Should I call an ambulance?",
  "Smart transportation info": "You can access the city's smart transit via the 'Adama Go' app. Real-time tracking, digital ticketing, and route optimization are currently active across all 12 major city routes.",
  "Upcoming city events": "This week features the Adama Tech Innovation Summit at the Convention Center, and the Oromo Cultural Festival starting Friday. You can register instantly via the e-Gov portal.",
  "Emergency contacts": "For immediate emergencies: \n• Police: 911\n• Ambulance: 912\n• Fire Response: 913\nOur AI-driven dispatch system ensures an average response time of under 8 minutes.",
  "Innovation hubs": "The primary innovation hub is located at Adama Science and Technology University (ASTU). It features startup incubators, high-speed fiber connectivity, and state-of-the-art collaborative maker spaces."
};

const suggestedPrompts = [
  { text: "Best places to visit in Adama", icon: Map },
  { text: "Nearby hospitals", icon: HeartPulse },
  { text: "Smart transportation info", icon: Bus },
  { text: "Upcoming city events", icon: Calendar },
  { text: "Emergency contacts", icon: ShieldAlert },
  { text: "Innovation hubs", icon: Lightbulb }
];

const AiAssistant = () => {
  const [messages, setMessages] = useState([
    { id: 1, sender: 'ai', text: 'Hello! I am Adama AI, your intelligent city companion. How can I help you navigate the city today?' }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping]);

  const handleSend = (text) => {
    if (!text.trim()) return;

    const newUserMsg = { id: Date.now(), sender: 'user', text };
    setMessages((prev) => [...prev, newUserMsg]);
    setInputValue('');
    setIsTyping(true);

    // Simulate AI thinking and responding
    setTimeout(() => {
      setIsTyping(false);
      const responseText = predefinedResponses[text] || "I'm currently a frontend simulation. While I don't have access to live data for that specific query right now, I'm constantly learning! Try asking me about tourism, events, or emergencies.";
      
      setMessages((prev) => [...prev, { id: Date.now() + 1, sender: 'ai', text: responseText }]);
    }, 1500);
  };

  return (
    <section id="ai-assistant" className="py-24 bg-slate-950 relative border-t border-slate-800 overflow-hidden">
      
      {/* Background Neon Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[500px] h-[500px] bg-pink-600/10 blur-[150px] rounded-full mix-blend-screen" />
        <div className="absolute bottom-0 right-0 w-[600px] h-[400px] bg-violet-600/10 blur-[150px] rounded-full mix-blend-screen" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Content */}
          <div className="lg:col-span-5">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-pink-500/10 border border-pink-500/20 mb-6 shadow-[0_0_20px_-5px_rgba(236,72,153,0.3)]"
            >
              <Sparkles className="h-4 w-4 text-pink-400" />
              <span className="text-sm font-semibold tracking-wide text-pink-400 uppercase">
                Adama Smart Brain
              </span>
            </motion.div>
            
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-4xl sm:text-5xl font-bold text-white mb-6 leading-tight"
            >
              Ask <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-violet-500">Adama AI</span>
            </motion.h2>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-lg text-slate-400 mb-10 leading-relaxed"
            >
              Experience the future of city navigation. Our intelligent assistant is integrated with live city data to provide instant answers, directions, and smart recommendations.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="space-y-4"
            >
              <h4 className="text-sm font-semibold text-slate-500 uppercase tracking-wider mb-4">Suggested Queries</h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {suggestedPrompts.map((prompt, index) => {
                  const Icon = prompt.icon;
                  return (
                    <button
                      key={index}
                      onClick={() => handleSend(prompt.text)}
                      className="flex items-center text-left p-3 rounded-xl bg-slate-900 border border-slate-800 hover:border-pink-500/50 hover:bg-slate-800 transition-all duration-300 group"
                    >
                      <Icon className="h-4 w-4 text-slate-500 group-hover:text-pink-400 mr-3 transition-colors shrink-0" />
                      <span className="text-sm text-slate-300 group-hover:text-white transition-colors line-clamp-1">{prompt.text}</span>
                    </button>
                  );
                })}
              </div>
            </motion.div>
          </div>

          {/* Right Chat Interface */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, type: "spring", bounce: 0.3 }}
            className="lg:col-span-7 relative"
          >
            {/* Glow border effect */}
            <div className="absolute -inset-1 bg-gradient-to-r from-pink-500 via-purple-500 to-violet-500 rounded-[2.5rem] blur-lg opacity-20" />
            
            <div className="relative bg-slate-900/80 backdrop-blur-2xl border border-white/10 rounded-[2rem] shadow-2xl overflow-hidden flex flex-col h-[600px]">
              
              {/* Chat Header */}
              <div className="flex items-center justify-between p-6 border-b border-white/5 bg-slate-950/50">
                <div className="flex items-center gap-4">
                  <div className="relative">
                    <div className="h-12 w-12 rounded-full bg-gradient-to-br from-pink-500 to-violet-500 p-[2px]">
                      <div className="h-full w-full bg-slate-900 rounded-full flex items-center justify-center">
                        <Bot className="h-6 w-6 text-white" />
                      </div>
                    </div>
                    {/* Pulsing indicator */}
                    <div className="absolute bottom-0 right-0 h-3 w-3 rounded-full bg-green-500 border-2 border-slate-900 animate-pulse" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white">Adama AI</h3>
                    <p className="text-xs text-emerald-400 font-medium flex items-center gap-1">
                      <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" /> Online
                    </p>
                  </div>
                </div>
              </div>

              {/* Chat Messages */}
              <div className="flex-1 overflow-y-auto p-6 space-y-6 scrollbar-hide">
                <AnimatePresence>
                  {messages.map((msg) => (
                    <motion.div
                      key={msg.id}
                      initial={{ opacity: 0, y: 10, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      transition={{ duration: 0.3 }}
                      className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                    >
                      <div className={`flex gap-3 max-w-[80%] ${msg.sender === 'user' ? 'flex-row-reverse' : 'flex-row'}`}>
                        {/* Avatar */}
                        <div className="shrink-0 mt-auto">
                          <div className={`h-8 w-8 rounded-full flex items-center justify-center ${msg.sender === 'user' ? 'bg-slate-800' : 'bg-gradient-to-br from-pink-500 to-violet-500'}`}>
                            {msg.sender === 'user' ? <User className="h-4 w-4 text-slate-400" /> : <Bot className="h-4 w-4 text-white" />}
                          </div>
                        </div>
                        
                        {/* Bubble */}
                        <div className={`px-5 py-3.5 rounded-2xl ${
                          msg.sender === 'user' 
                            ? 'bg-slate-800 text-white rounded-br-sm' 
                            : 'bg-gradient-to-br from-pink-500/10 to-violet-500/10 border border-white/5 text-slate-200 rounded-bl-sm whitespace-pre-line'
                        }`}>
                          <p className="text-sm md:text-base leading-relaxed">{msg.text}</p>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                  
                  {/* Typing Indicator */}
                  {isTyping && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, scale: 0.9 }}
                      className="flex justify-start"
                    >
                      <div className="flex gap-3">
                        <div className="shrink-0 mt-auto">
                          <div className="h-8 w-8 rounded-full flex items-center justify-center bg-gradient-to-br from-pink-500 to-violet-500">
                            <Bot className="h-4 w-4 text-white" />
                          </div>
                        </div>
                        <div className="px-5 py-4 rounded-2xl bg-gradient-to-br from-pink-500/10 to-violet-500/10 border border-white/5 rounded-bl-sm flex items-center gap-1.5">
                          <motion.div animate={{ y: [0, -5, 0] }} transition={{ repeat: Infinity, duration: 0.6, delay: 0 }} className="h-2 w-2 rounded-full bg-pink-500" />
                          <motion.div animate={{ y: [0, -5, 0] }} transition={{ repeat: Infinity, duration: 0.6, delay: 0.2 }} className="h-2 w-2 rounded-full bg-violet-500" />
                          <motion.div animate={{ y: [0, -5, 0] }} transition={{ repeat: Infinity, duration: 0.6, delay: 0.4 }} className="h-2 w-2 rounded-full bg-purple-500" />
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
                <div ref={messagesEndRef} />
              </div>

              {/* Chat Input */}
              <div className="p-4 bg-slate-950/80 border-t border-white/5">
                <form 
                  onSubmit={(e) => { e.preventDefault(); handleSend(inputValue); }}
                  className="relative flex items-center"
                >
                  <input
                    type="text"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    placeholder="Ask Adama AI anything..."
                    className="w-full bg-slate-900 border border-slate-700 rounded-full py-4 pl-6 pr-14 text-white placeholder:text-slate-500 focus:outline-none focus:border-pink-500 focus:ring-1 focus:ring-pink-500 transition-all"
                  />
                  <button
                    type="submit"
                    disabled={!inputValue.trim() || isTyping}
                    className="absolute right-2 p-2.5 rounded-full bg-gradient-to-r from-pink-500 to-violet-500 text-white disabled:opacity-50 disabled:cursor-not-allowed hover:scale-105 active:scale-95 transition-all shadow-lg shadow-pink-500/25"
                  >
                    <Send className="h-4 w-4" />
                  </button>
                </form>
              </div>

            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default AiAssistant;
