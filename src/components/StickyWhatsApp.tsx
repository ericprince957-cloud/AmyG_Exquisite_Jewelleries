import { getWhatsAppLink, whatsappMessages } from "../config/amyg";
import { MessageCircle } from "lucide-react";

export function StickyWhatsApp() {
  return (
    <a
      href={getWhatsAppLink(whatsappMessages.general)}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-5 right-5 z-50 w-14 h-14 rounded-full bg-[#25D366] hover:bg-[#1EBE5D] text-white shadow-lg pulse-champagne flex items-center justify-center transition-colors"
    >
      <MessageCircle size={26} />
    </a>
  );
}
