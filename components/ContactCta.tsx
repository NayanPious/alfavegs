import { Phone, MessageCircle, Mail, MapPin, Send } from 'lucide-react';
import ContactForm from './ContactForm';

export default function ContactSection() {

  return (
    <section id="contact" className="h-screen w-full snap-start bg-emerald-950 text-white flex flex-col justify-center overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          
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
              {/* WhatsApp Row - High Visibility */}
              <a href="https://wa.me/97471010221" className="flex items-center gap-6 bg-white/5 p-6 rounded-[2rem] border border-white/5 hover:border-[#25D366]/50 transition-all group">
                <div className="w-14 h-14 bg-[#25D366]/20 rounded-full flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                  <MessageCircle className="text-[#25D366]" size={28} />
                </div>
                <div>
                  <p className="text-xs text-emerald-500 uppercase font-bold tracking-[0.2em] mb-1">Fastest Response</p>
                  <p className="text-2xl font-black">+974 7101 0221</p>
                </div>
              </a>

              {/* Direct Call Lines */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <a href="tel:+97471010221" className="flex items-center gap-4 bg-white/5 p-5 rounded-2xl border border-white/5 hover:bg-white/10 transition-colors">
                  <Phone className="text-accent-citrus" size={20} />
                  <span className="font-bold">+974 7101 0221</span>
                </a>
                <a href="tel:+97430098981" className="flex items-center gap-4 bg-white/5 p-5 rounded-2xl border border-white/5 hover:bg-white/10 transition-colors">
                  <Phone className="text-accent-citrus" size={20} />
                  <span className="font-bold">+974 3009 8981</span>
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
          <ContactForm />
        </div>
      </div>
    </section>
  );
}