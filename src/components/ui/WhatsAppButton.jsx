import { MessageCircle } from 'lucide-react';
import { school } from '../../data/schoolData';

export default function WhatsAppButton() {
  return (
    <a
      href={`https://wa.me/${school.whatsapp}`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-green-500 text-white w-14 h-14 rounded-full flex items-center justify-center shadow-lg hover:bg-green-600 transition-colors group"
      title="Chat with us on WhatsApp"
    >
      <span className="absolute inset-0 rounded-full border-2 border-green-400 animate-ping opacity-30" />
      <MessageCircle size={28} />
      <span className="absolute bottom-full right-0 mb-2 bg-brand-navy text-white text-xs px-3 py-1 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
        Chat with us on WhatsApp
      </span>
    </a>
  );
}
