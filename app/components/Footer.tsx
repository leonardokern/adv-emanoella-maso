import Image from "next/image";
import { site } from "../lib/site";

export default function Footer() {
  return (
    <footer className="bg-charcoal-900 text-cream-100/60">
      <div className="mx-auto max-w-[1280px] px-6 pt-14 pb-[34px] md:px-10">
        <div className="flex flex-wrap items-start justify-between gap-7 border-b border-white/10 pb-8">
          <div className="flex items-center gap-[13px]">
            <Image
              src="/logo.png"
              alt="Logo EM — Emanoella Krauzer Maso"
              width={183}
              height={150}
              className="h-10 w-auto"
            />
            <div className="flex flex-col leading-[1.2]">
              <span className="font-display text-[19px] text-cream-100">
                {site.name}
              </span>
              <span className="text-xs text-cream-100/50">
                Advocacia e assessoria jurídica · {site.location}
              </span>
            </div>
          </div>
          <div className="flex flex-wrap gap-7">
            <a
              href={site.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[13px] text-cream-100/70 no-underline transition-colors hover:text-gold-500"
            >
              {site.whatsappDisplay}
            </a>
            <a
              href={`mailto:${site.email}`}
              className="text-[13px] text-cream-100/70 no-underline transition-colors hover:text-gold-500"
            >
              {site.email}
            </a>
            <a
              href={site.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[13px] text-cream-100/70 no-underline transition-colors hover:text-gold-500"
            >
              {site.linkedinHandle}
            </a>
          </div>
        </div>
        <p className="mt-6 text-center text-xs tracking-[0.3px] text-cream-100/40">
          © 2023–2026 {site.name} · Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
}
