import Image from "next/image";
import { site } from "../lib/site";
import { LinkedInIcon, MailIcon } from "./icons";

export default function About() {
  return (
    <section id="sobre" className="bg-charcoal-800">
      <div className="mx-auto grid max-w-[1280px] grid-cols-1 items-center gap-[34px] px-6 py-[62px] md:grid-cols-[0.9fr_1.1fr] md:gap-16 md:px-10 md:py-[100px]">
        <div className="relative mx-auto w-full max-w-[300px] md:max-w-[360px]">
          <span
            aria-hidden
            className="absolute -bottom-4 -right-4 z-0 h-[62%] w-[78%] border-[1.5px] border-gold-500"
          />
          <Image
            src="/manu.png"
            alt={`Retrato da advogada ${site.name}`}
            width={767}
            height={808}
            sizes="(max-width: 768px) 100vw, 40vw"
            className="relative z-[1] h-auto w-full [mask-image:linear-gradient(to_bottom,black_70%,transparent_98%)]"
          />
        </div>
        <div>
          <h2 className="sr-only">
            Quem sou eu — {site.name}, advogada em Florianópolis
          </h2>
          <span className="text-xs font-bold uppercase tracking-[4px] text-gold-500">
            Quem sou eu
          </span>
          <p className="my-[18px] mb-[26px] font-display text-[32px] font-medium leading-[1.16] text-balance text-cream-100 md:text-[42px]">
            “O seu caso recebe estudo dedicado e uma{" "}
            <span className="italic text-gold-500">
              estratégia construída junto a você.
            </span>
            ”
          </p>
          <p className="mb-[30px] text-[16.5px] leading-[1.8] text-cream-100/75">
            Sou {site.name}, formada em Direito pela Universidade Comunitária
            da Região de Chapecó (Unochapecó) e pós-graduada pela Damásio
            Educacional. Atuo na mediação e na prestação de serviços jurídicos,
            sempre orientada pela transparência e pelo comprometimento.
          </p>
          <div className="flex flex-wrap gap-x-[30px] gap-y-3.5 border-t border-gold-500/30 pt-6">
            <a
              href={site.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 text-[13.5px] font-bold tracking-[0.3px] text-cream-100 no-underline transition-colors hover:text-gold-500"
            >
              <LinkedInIcon size={16} className="shrink-0 text-gold-500" />
              LinkedIn {site.linkedinHandle} →
            </a>
            <a
              href={`mailto:${site.email}`}
              className="inline-flex items-center gap-2.5 text-[13.5px] font-bold tracking-[0.3px] text-cream-100 no-underline transition-colors hover:text-gold-500"
            >
              <MailIcon size={16} className="shrink-0 text-gold-500" />
              {site.email}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
