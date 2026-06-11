import { site } from "../lib/site";
import { WhatsAppIcon } from "./icons";

export default function FloatingWhatsApp() {
  return (
    <a
      href={site.whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="WhatsApp"
      className="animate-em-pulse fixed bottom-[26px] right-[26px] z-[60] flex h-[58px] w-[58px] items-center justify-center rounded-full bg-whatsapp text-white no-underline shadow-[0_12px_30px_-8px_rgba(37,211,102,0.6)]"
    >
      <WhatsAppIcon size={30} />
    </a>
  );
}
