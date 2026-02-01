import { MessageSquare, ClipboardCheck, Truck, Package } from 'lucide-react';

export default function OrderProcess() {
  const steps = [
    {
      icon: <MessageSquare size={32} />,
      title: "Send Your List",
      desc: "Send your requirements via WhatsApp or Email. We accept handwritten lists, voice notes, or spreadsheets."
    },
    {
      icon: <ClipboardCheck size={32} />,
      title: "Instant Confirmation",
      desc: "Our team verifies availability and sends you a digital quote for approval within minutes."
    },
    {
      icon: <Package size={32} />,
      title: "Quality Sorting",
      desc: "At midnight, our team hand-picks and packs your order, ensuring only Grade-A produce makes the cut."
    },
    {
      icon: <Truck size={32} />,
      title: "Early Delivery",
      desc: "Orders arrive at your kitchen between 4 AM and 8 AM, ready for your morning prep shift."
    }
  ];

  return (
    <section className="py-24 bg-white" id='order-process'>
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-montserrat text-4xl md:text-5xl font-black text-emerald-950 mb-4">
            How We <span className="text-accent-citrus">Fuel Your Kitchen</span>
          </h2>
          <p className="text-gray-500 font-lato text-lg">A seamless supply chain designed for the pace of professional catering.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          {/* Connecting Line (Desktop) */}
          <div className="hidden lg:block absolute top-1/2 left-0 w-full h-0.5 bg-slate-100 -translate-y-12 z-0" />

          {steps.map((step, i) => (
            <div key={i} className="relative z-10 flex flex-col items-center text-center group">
              <div className="w-20 h-20 bg-emerald-50 text-emerald-700 rounded-3xl flex items-center justify-center mb-6 group-hover:bg-accent-citrus transition-all duration-300 shadow-sm group-hover:shadow-xl group-hover:-translate-y-2">
                {step.icon}
              </div>
              <div className="bg-emerald-950 text-white w-8 h-8 rounded-full flex items-center justify-center text-xs font-black mb-4 border-4 border-white shadow-md">
                {i + 1}
              </div>
              <h3 className="font-montserrat text-xl font-bold text-emerald-950 mb-3">{step.title}</h3>
              <p className="font-lato text-gray-500 text-sm leading-relaxed px-4">{step.desc}</p>
            </div>
          ))}
        </div>

        {/* B2B Shortcut Button */}
        <div className="mt-16 flex justify-center">
          <a 
            href="https://wa.me/97471010221" 
            className="flex items-center gap-3 bg-[#25D366] text-white px-8 py-4 rounded-2xl font-black hover:bg-emerald-600 transition-all shadow-lg hover:-translate-y-1"
          >
            <MessageSquare fill="white" /> START YOUR FIRST ORDER
          </a>
        </div>
      </div>
    </section>
  );
}