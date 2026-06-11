import Image from "next/image";
import { EtheralShadow } from "@/components/ui/etheral-shadow";
import { site } from "../lib/site";
import { WhatsAppIcon } from "./icons";

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden border-b border-gold-500/25">
      <div aria-hidden className="absolute inset-0 z-0">
        <EtheralShadow
          color="rgba(176, 141, 87, 0.45)"
          animation={{ scale: 65, speed: 22 }}
          noise={{ opacity: 0.5, scale: 1.2 }}
          sizing="fill"
        />
      </div>
      <span
        aria-hidden
        className="pointer-events-none absolute -top-10 -right-[30px] z-0 font-display text-[340px] font-semibold leading-none text-gold-500/[0.06]"
      >
        §
      </span>
      <div className="relative z-[1] mx-auto grid max-w-[1280px] grid-cols-1 items-center gap-[34px] px-6 py-16 md:grid-cols-[1.1fr_0.9fr] md:gap-[60px] md:px-10 md:pt-[76px] md:pb-[84px]">
        <div className="animate-em-fade">
          <div className="mb-[30px] flex items-center gap-3.5">
            <span className="h-px w-[46px] bg-gold-500" />
            <span className="text-xs font-bold uppercase tracking-[4px] text-gold-500">
              Advocacia &amp; Consultoria Jurídica
            </span>
          </div>
          <h1 className="mb-[30px] font-display text-[clamp(38px,8.6vw,84px)] font-medium leading-[1.03] tracking-[-0.5px] text-balance text-cream-100 md:leading-[0.98] md:tracking-[-1px]">
            Seus direitos merecem uma{" "}
            <span className="italic text-gold-500">defesa à altura.</span>
          </h1>
          <p className="mb-10 max-w-[460px] text-lg leading-[1.7] text-cream-100/75">
            Atuação e consultoria em Direito Previdenciário, do Consumidor e
            Civil — com a técnica, a discrição e a dedicação que o seu caso
            exige.
          </p>
          <div className="flex flex-wrap items-center gap-3.5">
            <a
              href={site.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 bg-gold-500 px-[30px] py-[17px] text-[14.5px] font-extrabold tracking-[0.4px] text-charcoal-800 no-underline transition-colors hover:bg-gold-400"
            >
              <WhatsAppIcon size={17} />
              Falar no WhatsApp
            </a>
            <a
              href="#areas"
              className="inline-flex items-center gap-2 border-[1.5px] border-cream-100/30 px-7 py-[17px] text-[14.5px] font-bold tracking-[0.3px] text-cream-100 no-underline transition-colors hover:border-gold-500 hover:text-gold-500"
            >
              Conhecer as áreas
            </a>
          </div>
          <p className="mt-[34px] text-[13px] tracking-[0.4px] text-cream-100/50">
            {site.locationLine}
          </p>
        </div>
        <div className="animate-em-fade-delayed flex items-center justify-center">
          <Image
            src="/justice.png"
            alt="Ilustração da deusa da Justiça segurando a balança"
            width={1200}
            height={1062}
            priority
            className="h-auto w-full max-w-[560px] brightness-0 invert opacity-90 md:max-w-none"
          />
        </div>
      </div>
    </section>
  );
}
