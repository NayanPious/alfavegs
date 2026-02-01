import Hero from '@/components/Hero';
import About from '@/components/About';
import ProductGallery from '@/components/ProductGallery'; // Renamed to ProductGallery as per request
import WhyChooseUs from '@/components/WhyChooseUs';     // New component for benefits & stats
import ContactCta from '@/components/ContactCta';       // New component for dark CTA
import OrderProcess from '@/components/OrderProcess';   // New component for order process steps

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <ProductGallery />
      <section className="py-24 bg-white relative">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-16 bg-gradient-to-b from-slate-200 to-transparent" />
        <OrderProcess />
      </section>
      <WhyChooseUs />
      <ContactCta />
    </main>
  );
}