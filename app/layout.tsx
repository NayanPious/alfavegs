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
  title: 'ALFAVEGS | Premium Produce Doha',
  description: 'Chef-grade fruits and vegetables for Qatar\'s best kitchens.',
  icons: {
    icon: [
      { url: '/favicon.png' }, // Standard favicon
      { url: '/icon.png', type: 'image/png' }, // Modern browsers
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
  },
  // This makes the mobile status bar look professional
  appleWebApp: {
    title: 'ALFAVEGS',
    statusBarStyle: 'black-translucent',
    capable: true,
  },
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