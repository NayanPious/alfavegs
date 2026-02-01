import { Truck, ShieldCheck, Clock, Award } from 'lucide-react';

export default function WhyChooseUs() {
  const benefits = [
    { 
      icon: Clock, 
      title: "Agile Operations", 
      description: "As a specialized supplier, we offer faster response times and more flexible delivery windows than the giants." 
    },
    { 
      icon: ShieldCheck, 
      title: "Hand-Picked Quality", 
      description: "Our 6 years in the field means we know exactly what a Sous Chef looks for in a crate of premium produce." 
    },
    { 
      icon: Truck, 
      title: "Direct Logistics", 
      description: "Zero middlemen. We manage the supply chain from the source directly to your kitchen door." 
    },
    { 
      icon: Award, 
      title: "Customized Sourcing", 
      description: "Need something specific for a seasonal menu? We use our deep industry network to find it for you." 
    },
  ];

  return (
    <section id="why-us" className="bg-emerald-950 py-24 text-white overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
          <h2 className="font-montserrat text-4xl md:text-5xl font-black text-white mb-4 uppercase">
            Built on <span className="text-accent-citrus">Experience.</span>
          </h2>
          <p className="text-emerald-200/60 max-w-2xl mx-auto font-lato">
            ALFA combines 6 years of deep-rooted market knowledge with a fresh, tech-driven approach to wholesale supply.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-24">
          {benefits.map((benefit, i) => (
            <div key={i} className="group p-8 rounded-3xl bg-white/5 border border-white/10 hover:border-accent-citrus/40 transition-all duration-300">
              <benefit.icon size={32} className="text-accent-citrus mb-6" />
              <h3 className="font-montserrat text-xl font-bold mb-3">{benefit.title}</h3>
              <p className="font-lato text-white/60 leading-relaxed text-sm">{benefit.description}</p>
            </div>
          ))}
        </div>

        {/* Stats Section - Honest & Credible */}
        <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-[2rem] p-10 shadow-2xl">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-y-12">
            
            <div className="text-center lg:border-r border-white/10">
              <div className="font-montserrat text-5xl font-black text-accent-citrus mb-2 uppercase">6+</div>
              <p className="font-lato text-white/50 uppercase tracking-widest text-[10px] font-bold">Years Industry Expertise</p>
            </div>

            <div className="text-center lg:border-r border-white/10">
              <div className="font-montserrat text-5xl font-black text-accent-citrus mb-2 uppercase">Fresh</div>
              <p className="font-lato text-white/50 uppercase tracking-widest text-[10px] font-bold">Registration / Modern Fleet</p>
            </div>

            <div className="text-center lg:border-r border-white/10">
              <div className="font-montserrat text-5xl font-black text-accent-citrus mb-2 uppercase">100%</div>
              <p className="font-lato text-white/50 uppercase tracking-widest text-[10px] font-bold">Quality Commitment</p>
            </div>

            <div className="text-center">
              <div className="font-montserrat text-5xl font-black text-accent-citrus mb-2 uppercase">24/7</div>
              <p className="font-lato text-white/50 uppercase tracking-widest text-[10px] font-bold">Direct Founder Support</p>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}