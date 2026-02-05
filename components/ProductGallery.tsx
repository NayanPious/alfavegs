import { ArrowRight, ClipboardList, CheckCircle } from 'lucide-react';

export default function ProductGallery() {
  const categories = [
    { 
      name: "Kitchen Staples", 
      desc: "Bulk Sacks: Onions, Potatoes, Carrots & Garlic", 
      img: "/produce/staples.avif",
      volume: "25kg+ Sacks"
    },
    { 
      name: "Salad Station", 
      desc: "High-Volume Lettuce, Cucumbers & Greenhouse Tomatoes", 
      img: "/produce/salad.avif",
      volume: "Crate-Ready"
    },
    { 
      name: "Banquet Fruits", 
      desc: "Melons, Grapes & Citrus for large-scale platters", 
      img: "/produce/fruits.avif",
      volume: "Pallet Options"
    },
    { 
      name: "Specialty Peppers", 
      desc: "Tri-color Capsicums, Chilies & Exotic Peppers", 
      img: "/produce/peppers.avif",
      volume: "Uniform Grading"
    },
    { 
      name: "Culinary Herbs", 
      desc: "Fresh Mint, Parsley, Cilantro & Aromatic Roots", 
      img: "/produce/herbs.avif",
      volume: "Daily Harvest"
    },
    { 
      name: "Global Exotics", 
      desc: "Imported specialty items for international menus", 
      img: "/produce/exotic.avif",
      volume: "Sourced to Order"
    },
  ];

  return (
    <section id="products" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-montserrat text-4xl md:text-6xl font-black text-emerald-950 mb-6">
            Wholesale <span className="text-accent-citrus">Inventory</span>
          </h2>
          <p className="text-gray-600 font-lato text-xl max-w-2xl mx-auto">
            Premium produce sourced specifically for high-volume catering and restaurant requirements.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((cat, i) => (
            <div key={i} className="group bg-white rounded-[2rem] p-4 shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-100">
              <div className="relative h-64 rounded-[1.5rem] overflow-hidden mb-6">
                <img src={cat.img} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" alt={cat.name} />
                <div className="absolute top-4 left-4 bg-emerald-950 text-white text-[10px] font-black px-3 py-1 rounded-lg uppercase tracking-widest shadow-lg">
                  {cat.volume}
                </div>
              </div>
              
              <div className="px-2 pb-2">
                <h3 className="font-montserrat text-2xl font-black text-emerald-950 mb-2">{cat.name}</h3>
                <p className="text-gray-500 text-sm font-lato leading-relaxed mb-6 h-10">{cat.desc}</p>
                
                {/* Replaced "Daily Price" with B2B Action */}
                <a href="#contact" className="w-full flex items-center justify-center gap-3 px-6 py-4 bg-emerald-950 text-white rounded-xl hover:bg-accent-citrus transition-all font-black text-sm uppercase tracking-wider">
                  <ClipboardList size={18} /> Inquire for Volume
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* B2B Assurance Bar */}
        <div className="mt-16 bg-white rounded-3xl p-8 border border-slate-100 flex flex-wrap justify-center md:justify-around gap-8 text-center md:text-left">
          <div className="flex items-center gap-3">
            <CheckCircle className="text-accent-citrus" />
            <span className="font-bold text-emerald-950 uppercase text-xs tracking-tight">Consistent Grading</span>
          </div>
          <div className="flex items-center gap-3">
            <CheckCircle className="text-accent-citrus" />
            <span className="font-bold text-emerald-950 uppercase text-xs tracking-tight">Direct Farm Sourcing</span>
          </div>
          <div className="flex items-center gap-3">
            <CheckCircle className="text-accent-citrus" />
            <span className="font-bold text-emerald-950 uppercase text-xs tracking-tight">B2B Logistic Support</span>
          </div>
        </div>
      </div>
    </section>
  );
}