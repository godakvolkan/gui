import React from 'react';
import { MessageCircle } from 'lucide-react';

interface WhatsAppButtonProps {
  openWhatsApp: () => void;
}

const WhatsAppButton: React.FC<WhatsAppButtonProps> = ({ openWhatsApp }) => {
  return (
    <button
      onClick={openWhatsApp}
      className="fixed bottom-6 right-6 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg z-50 transition-all duration-300 hover:scale-110"
    >
      <MessageCircle size={24} />
    </button>
  );
};

export default WhatsAppButton; 