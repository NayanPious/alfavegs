import { Instagram, Linkedin, Mail, MapPin, Phone, MessageSquare } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black text-gray-400 py-16 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-12 gap-12">
        
        {/* Brand Info - Wider Column (5/12) */}
        <div className="md:col-span-5 space-y-6">
          <a href="/" className="block">
            {/* LOGO REPLACEMENT */}
            <img 
              src="/logo.png" 
              alt="ALFAVEGS Logo" 
              className="h-20 w-auto object-contain brightness-0 invert" 
            />
            {/* Note: 'brightness-0 invert' makes a black logo pure white. 
                Remove those classes if your logo is already colored/white. */}
          </a>
          <p className="font-lato text-base leading-relaxed text-gray-500 max-w-sm">
            Premium wholesale produce supply built on 6 years of industry expertise. 
            Sourcing the finest farm-fresh fruits and vegetables for Qatar's professional kitchens.
          </p>
        </div>

        {/* Navigation - (3/12) */}
        <div className="md:col-span-3">
          <h3 className="font-montserrat text-xs font-bold text-white uppercase tracking-[0.2em] mb-8">Navigation</h3>
          <ul className="space-y-4 font-lato text-sm">
            <li><a href="#about" className="hover:text-accent-citrus transition-colors">Our Story</a></li>
            <li><a href="#products" className="hover:text-accent-citrus transition-colors">Bulk Products</a></li>
            <li><a href="#why-us" className="hover:text-accent-citrus transition-colors">The ALFA Advantage</a></li>
            <li><a href="#contact" className="hover:text-accent-citrus transition-colors">Partner With Us</a></li>
          </ul>
        </div>

        {/* Direct Contact - (4/12) */}
        <div className="md:col-span-4">
          <h3 className="font-montserrat text-xs font-bold text-white uppercase tracking-[0.2em] mb-8">Head Office</h3>
          <ul className="space-y-6 font-lato text-sm">
            <li className="flex gap-4 items-start">
              <MapPin size={20} className="text-accent-citrus shrink-0" />
              <span className="text-gray-300 leading-relaxed">
                Building 11, Floor 1, Street 744<br />
                Zone 53, New Al Rayyan<br />
                Doha, Qatar
              </span>
            </li>
            <li className="flex items-center gap-4">
              <Mail size={20} className="text-accent-citrus shrink-0" />
              <span className="text-gray-300">info@alfavegs.com</span>
            </li>
            <li className="flex items-center gap-4 font-bold text-white text-lg">
              <Phone size={20} className="text-accent-citrus shrink-0" />
              <span>+974 7101 0221</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="max-w-7xl mx-auto px-6 pt-12 mt-12 border-t border-white/5">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-[10px] uppercase tracking-[0.2em] font-bold text-gray-600">
            &copy; {currentYear} ALFA VEGETABLES AND FRUITS TRADING. ALL RIGHTS RESERVED.
          </p>
          <div className="flex gap-8 text-[10px] uppercase tracking-widest font-bold text-gray-600">
            <a href="/privacy" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="/terms" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}