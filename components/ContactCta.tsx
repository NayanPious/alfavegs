import { Phone, MessageCircle, Mail, MapPin, Send } from 'lucide-react';
import ContactForm from './ContactForm';

export default function ContactSection() {

  return (
    <section id="contact" className="min-h-screen w-full snap-start bg-emerald-950 text-white flex flex-col justify-center py-20">
      <div className="max-w-7xl mx-auto px-6 w-full">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-center">
          
          {/* LEFT SIDE: DIRECT CONTACT & ADDRESS */}
          <div className="space-y-10">
            <div className="space-y-4">
              <h2 className="font-montserrat text-4xl md:text-6xl font-black leading-tight uppercase">
                Let’s Get Your <br />
                <span className="text-accent-citrus">Kitchen Started.</span>
              </h2>
              <p className="text-emerald-100/60 text-lg font-lato max-w-md">
                Experience-led produce supply for Qatar's premier culinary establishments.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-6">
              {/* WhatsApp Row */}
              <a href="https://wa.me/97471010221" className="flex items-center gap-6 bg-white/5 p-6 rounded-[2rem] border border-white/5 hover:border-[#25D366]/50 transition-all group">
                <div className="w-12 h-12 md:w-14 md:h-14 bg-[#25D366]/20 rounded-full flex items-center justify-center shrink-0">
                  <MessageCircle className="text-[#25D366]" size={24} />
                </div>
                <div>
                  <p className="text-[10px] text-emerald-500 uppercase font-bold tracking-[0.2em] mb-1">Fastest Response</p>
                  <p className="text-xl md:text-2xl font-black">+974 7101 0221</p>
                </div>
              </a>

              {/* Direct Call Lines - Stacked on tiny phones, 2-col on small tablets */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <a href="tel:+97471010221" className="flex items-center gap-4 bg-white/5 p-5 rounded-2xl border border-white/5">
                  <Phone className="text-accent-citrus" size={18} />
                  <span className="font-bold text-sm md:text-base">+974 7101 0221</span>
                </a>
                <a href="tel:+97430098981" className="flex items-center gap-4 bg-white/5 p-5 rounded-2xl border border-white/5">
                  <Phone className="text-accent-citrus" size={18} />
                  <span className="font-bold text-sm md:text-base">+974 3009 8981</span>
                </a>
              </div>

              {/* Official Address Details */}
              <div className="flex items-start gap-4 p-6 bg-emerald-900/20 rounded-[2rem] border border-white/5">
                <MapPin className="text-accent-citrus shrink-0" size={24} />
                <div className="text-sm leading-relaxed">
                  <p className="text-white font-bold mb-1 uppercase tracking-widest text-[10px]">Doha Head Office</p>
                  <p className="text-white/70">Floor 1, Building 11, Street 744, Zone 53</p>
                  <p className="text-white/70">New Al Rayyan, Doha, Qatar</p>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT SIDE: PREMIUM INQUIRY FORM */}
          <div className="w-full">
             <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
}