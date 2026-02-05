"use client";

import { Send } from 'lucide-react';
import { useState } from 'react';

export default function ContactForm() {
  const [result, setResult] = useState("");
  const [isSending, setIsSending] = useState(false);

  const onSubmit = async (event: any) => {
    event.preventDefault();
    setIsSending(true);
    setResult("Sending...");
    
    const formData = new FormData(event.target);
    formData.append("access_key", "776c5152-6f35-45e3-baa9-bf321362e186");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });

      const data = await response.json();

      if (data.success) {
        setResult("Success! We will contact you shortly.");
        event.target.reset();
      } else {
        setResult("Something went wrong. Please try again.");
      }
    } catch (error) {
      setResult("Error connecting to server.");
    } finally {
      setIsSending(false);
    }
  };

  return (
    <div className="bg-white/5 backdrop-blur-xl p-8 md:p-12 rounded-[3rem] border border-white/10 shadow-2xl relative">
      <h3 className="font-montserrat text-2xl font-bold mb-8 flex items-center gap-4 text-white">
        <span className="w-10 h-1 bg-accent-citrus rounded-full"></span>
        Direct Inquiry
      </h3>
      
      <form onSubmit={onSubmit} className="space-y-6">
        <div className="space-y-2">
          <label className="text-[10px] uppercase font-bold text-emerald-500 tracking-widest">Kitchen / Company Name</label>
          <input name="company" required type="text" placeholder="Enter your company or kitchen name" className="w-full bg-emerald-950/50 border border-white/10 rounded-2xl px-5 py-4 focus:border-accent-citrus outline-none transition-all text-white" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <label className="text-[10px] uppercase font-bold text-emerald-500 tracking-widest">Contact Number</label>
            <input name="phone" required type="tel" placeholder="+974 ..." className="w-full bg-emerald-950/50 border border-white/10 rounded-2xl px-5 py-4 focus:border-accent-citrus outline-none transition-all text-white" />
          </div>
          <div className="space-y-2">
            <label className="text-[10px] uppercase font-bold text-emerald-500 tracking-widest">Supply Type</label>
            <select name="type" className="w-full bg-emerald-950/50 border border-white/10 rounded-2xl px-5 py-4 focus:border-accent-citrus outline-none transition-all text-white/50 appearance-none">
              <option>Daily Wholesale</option>
              <option>Contract Sourcing</option>
              <option>Urgent Event Supply</option>
            </select>
          </div>
        </div>
        
        <div className="space-y-2">
          <label className="text-[10px] uppercase font-bold text-emerald-500 tracking-widest">Detailed Requirements</label>
          <textarea name="message" required rows={4} placeholder="List items or ask for our latest price list..." className="w-full bg-emerald-950/50 border border-white/10 rounded-2xl px-5 py-4 focus:border-accent-citrus outline-none transition-all resize-none text-white"></textarea>
        </div>

        <button 
          disabled={isSending}
          type="submit" 
          className="w-full bg-accent-citrus hover:bg-yellow-400 disabled:bg-gray-600 text-emerald-950 font-black py-4 md:py-5 px-4 rounded-2xl transition-all flex items-center justify-center gap-2 md:gap-3 shadow-lg shadow-accent-citrus/10 active:scale-[0.98] whitespace-nowrap text-sm md:text-base"
        >
          <Send size={20} className="flex-shrink-0" />
          <span className="truncate">
            {result || "REQUEST CATALOGUE & QUOTE"}
          </span>
        </button>
      </form>
    </div>
  );
}