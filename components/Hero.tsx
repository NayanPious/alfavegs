"use client";
import { motion } from 'framer-motion';
import { CheckCircle2, Leaf, Truck } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-slate-900">
      {/* Background Image Container */}
      <div className="absolute inset-0 z-0">
        <img 
          src="/hero-bg.avif" 
          alt="Premium Farm Selection" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 z-10">
          <div className="absolute top-0 w-full h-80 bg-gradient-to-b from-black/90 via-black/40 to-transparent" />
          <div className="absolute inset-0 bg-black/30" />
        </div>
      </div>

      <div className="relative z-20 max-w-7xl mx-auto px-6 pt-52 pb-20 w-full text-center lg:text-left">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="font-montserrat text-4xl md:text-6xl lg:text-7xl font-black text-white leading-[0.85] mb-8 drop-shadow-2xl uppercase tracking-tighter"
        >
          Grown with Care. <br /> <span className="text-accent-citrus">Delivered with Passion.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="font-lato text-xl md:text-2xl text-slate-100 max-w-2xl mx-auto lg:mx-0 mb-12 leading-relaxed"
        >
          We started ALFA with a simple mission: to bring the crispest, most vibrant vegetables and fruits directly from the farm to your business. Freshness is our first priority.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col sm:flex-row justify-center lg:justify-start gap-5 mb-16"
        >
          <a href="#products" className="bg-accent-citrus text-white font-black px-10 py-5 rounded-full text-lg hover:bg-orange-600 transition-all shadow-xl hover:-translate-y-1">
            VIEW OUR SELECTION
          </a>
          <a href="#contact" className="bg-white/10 backdrop-blur-md text-white border-2 border-white/30 font-black px-10 py-5 rounded-full text-lg hover:bg-white hover:text-emerald-950 transition-all shadow-xl hover:-translate-y-1">
            GET A QUOTE
          </a>
        </motion.div>

        {/* trust signals */}
        <motion.div
           initial={{ opacity: 0 }}
           animate={{ opacity: 1 }}
           transition={{ delay: 0.6 }}
           className="flex flex-wrap justify-center lg:justify-start gap-8"
        >
            <div className="flex items-center gap-2 text-white/90 font-bold">
                <CheckCircle2 className="text-accent-citrus" size={20} />
                Global Sourcing
            </div>
            <div className="flex items-center gap-2 text-white/90 font-bold">
                <Leaf className="text-accent-citrus" size={20} />
                100% Organic Options
            </div>
            <div className="flex items-center gap-2 text-white/90 font-bold">
                <Truck className="text-accent-citrus" size={20} />
                Express B2B Delivery
            </div>
        </motion.div>
      </div>
    </section>
  );
}