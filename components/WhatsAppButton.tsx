"use client";
import { MessageCircle } from 'lucide-react';

export default function WhatsAppButton() {
  const phoneNumber = "97471010221"; // Replace with your actual Qatar WhatsApp number
  const message = encodeURIComponent("Hello ALFA VEGETABLES AND FRUITS, I'm interested in your premium produce. Can you share your daily list?");
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;

  return (
    <a 
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-8 right-8 z-50 flex items-center justify-center w-16 h-16 bg-[#25D366] text-white rounded-full shadow-2xl hover:scale-110 transition-transform duration-300 group"
      aria-label="Contact ALFA on WhatsApp"
    >
      <MessageCircle size={32} />
      <span className="absolute right-20 bg-white text-gray-800 px-4 py-2 rounded-lg text-sm font-bold opacity-0 group-hover:opacity-100 transition-opacity shadow-md pointer-events-none whitespace-nowrap">
        Message us on WhatsApp
      </span>
    </a>
  );
}