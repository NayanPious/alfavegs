import './globals.css';
import { Montserrat, Lato } from 'next/font/google';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton'; // For the floating button

// Configure Montserrat for headings
const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-montserrat',
  weight: ['400', '700', '800', '900'], // Adjusted weights for bold and black styles
  display: 'swap',
});

// Configure Lato for body text
const lato = Lato({
  subsets: ['latin'],
  variable: '--font-lato',
  weight: ['400', '700'], // Normal and bold weights for body
  display: 'swap',
});

export const metadata = {
  title: 'ALFA | Premium Fresh Produce - From Farm to Table',
  description: 'Your trusted partner for premium, hand-selected fruits and vegetables. Supplying restaurants, cafes, and catering with 100% fresh, sustainably grown produce for 15+ years.',
  // Add more SEO tags as needed, e.g., keywords, Open Graph tags
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${montserrat.variable} ${lato.variable} scroll-smooth`}>
      <body className="font-lato antialiased text-gray-800 bg-white">
        <Header />
        {children}
        <WhatsAppButton /> {/* Floating WhatsApp button */}
        <Footer />
      </body>
    </html>
  );
}