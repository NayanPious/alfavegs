import { Handshake, Award, Globe } from 'lucide-react';

export default function About() {
  const features = [
    { icon: Handshake, title: "Direct Farm Partnerships", description: "Cultivating strong relationships for consistent quality and fair trade." },
    { icon: Award, title: "Uncompromising Quality Standards", description: "Rigorous selection process ensures only the best produce reaches you." },
    { icon: Globe, title: "Global & Local Sourcing", description: "A diverse portfolio from trusted local farms and international partners." },
  ];

  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
        {/* Image Section */}
        <div className="relative h-[450px] md:h-[600px] rounded-[3rem] overflow-hidden shadow-2xl group">
          <img 
            src="/harvesting.avif" 
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
            alt="Quality inspection of fresh produce" 
          />
        </div>

        {/* Content Section */}
        <div>
          <h2 className="font-montserrat text-4xl md:text-5xl font-black text-emerald-950 leading-tight mb-8">
            Your Dedicated <br />
            <span className="text-accent-citrus italic">Freshness Partner.</span>
          </h2>
          <p className="font-lato text-lg text-gray-700 mb-8 max-w-lg">
            At ALFA, we believe that the best meals start with the best ingredients. As a rising force in produce trading, we focus on bridgeing the gap between farm harvests and your professional kitchen.
          </p>
          
          <p className="font-lato text-md text-gray-500 mb-12 max-w-lg">
            We specialize in serving restaurants and catering companies who demand consistent quality and punctual delivery—no matter the volume.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {features.map((feature, i) => (
              <div key={i} className="flex items-start gap-4">
                <div className="bg-emerald-50 p-3 rounded-2xl">
                  <feature.icon size={24} className="text-emerald-700 flex-shrink-0" />
                </div>
                <div>
                  <h3 className="font-montserrat text-lg font-bold text-emerald-900 mb-1">{feature.title}</h3>
                  <p className="font-lato text-sm text-gray-600">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}