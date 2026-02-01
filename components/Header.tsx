"use client";
import { useState, useEffect } from 'react';
import Image from 'next/image';
import { Menu, X, MessageSquare } from 'lucide-react';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
      isScrolled 
        ? 'py-2 bg-white/80 backdrop-blur-md shadow-sm border-b border-white/20' 
        : 'py-4 bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        
        {/* LOGO: Increased size from w-60 to w-80 on desktop */}
        <a href="/" className="relative block w-52 md:w-80 h-14 md:h-20 transition-transform hover:scale-105 active:scale-95">
          <Image
            src="/logo.png"
            alt="ALFAVEGS Logo"
            fill
            className={`object-contain object-left transition-all duration-300 scale-110 ${
              !isScrolled ? 'brightness-0 invert' : 'brightness-0'
            }`}
            priority
          />
        </a>

        {/* Navigation Links */}
        <div className={`hidden lg:flex items-center gap-10 font-lato font-bold text-sm tracking-widest uppercase ${
          isScrolled ? 'text-emerald-950' : 'text-white drop-shadow-md'
        }`}>
          <a href="#about" className="hover:text-accent-citrus transition-colors">About</a>
          <a href="#products" className="hover:text-accent-citrus transition-colors">Products</a>
          <a href="#order-process" className="hover:text-accent-citrus transition-colors">How it Works</a>
          {/* CTA BUTTON */}
          <a 
            href="https://wa.me/97471010221"
            className="bg-accent-citrus hover:bg-yellow-400 text-emerald-950 px-6 py-2.5 rounded-full font-bold text-sm flex items-center gap-2 transition-transform active:scale-95"
          >
            <MessageSquare size={18} />
            ORDER NOW
          </a>
        </div>

        {/* Mobile Toggle */}
        <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="lg:hidden p-2">
          {isMobileMenuOpen ? (
            <X size={32} className={isScrolled ? 'text-emerald-950' : 'text-white'} />
          ) : (
            <Menu size={32} className={isScrolled ? 'text-emerald-950' : 'text-white'} />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 w-full bg-white/95 backdrop-blur-xl border-t border-gray-100 py-10 px-6 flex flex-col items-center gap-8 shadow-2xl">
           <a href="#about" onClick={() => setIsMobileMenuOpen(false)} className="text-emerald-950 font-black text-2xl tracking-tighter uppercase">About Us</a>
           <a href="#products" onClick={() => setIsMobileMenuOpen(false)} className="text-emerald-950 font-black text-2xl tracking-tighter uppercase">Our Products</a>
           <a href="#contact-cta" onClick={() => setIsMobileMenuOpen(false)} className="bg-accent-citrus text-white w-full py-5 rounded-2xl text-center font-black text-xl shadow-xl">SHOP FRESH</a>
        </div>
      )}
    </nav>
  );
}