import { brandConfig, whatsappMessages } from "../config/amyg";
import { MessageCircle } from "lucide-react";

export function StickyWhatsApp() {
  const link = `https://wa.me/${brandConfig.whatsapp}?text=${encodeURIComponent(
    whatsappMessages.general
  )}`;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden">
      <div className="bg-brand-black/95 backdrop-blur-md border-t border-brand-gold/20 px-4 py-3">
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 w-full py-3.5 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-xl transition-all duration-200 touch-target pulse-gold"
        >
          <MessageCircle size={20} />
          <span>Chat on WhatsApp</span>
        </a>
      </div>
    </div>
  );
}
