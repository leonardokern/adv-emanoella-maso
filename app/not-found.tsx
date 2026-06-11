import Image from "next/image";
import Link from "next/link";
import { site } from "./lib/site";
import { WhatsAppIcon } from "./components/icons";

export default function NotFound() {
  return (
    <main className="relative flex min-h-screen flex-col overflow-hidden bg-charcoal-800">
      <span
        aria-hidden
        className="pointer-events-none absolute -top-10 -right-[30px] z-0 font-display text-[340px] font-semibold leading-none text-gold-500/[0.06]"
      >
        §
      </span>

      <div className="relative z-[1] mx-auto flex w-full max-w-[1280px] flex-1 flex-col px-6 py-[18px] md:px-10">
        <Link href="/" className="flex w-fit items-center gap-3.5 text-cream-100 no-underline">
          <Image
            src="/logo.png"
            alt="Logo EM — Emanoella Krauzer Maso"
            width={183}
            height={150}
            priority
            className="h-[42px] w-auto shrink-0"
          />
          <span className="flex flex-col leading-[1.15]">
            <span className="whitespace-nowrap font-display text-[19px] font-semibold">
              {site.name}
            </span>
            <span className="mt-[3px] text-[9.5px] font-bold uppercase tracking-[3.5px] text-gold-500">
              {site.eyebrow}
            </span>
          </span>
        </Link>

        <div className="flex flex-1 flex-col items-center justify-center py-20 text-center">
          <div className="mb-[26px] flex items-center gap-3.5">
            <span className="h-px w-[46px] bg-gold-500" />
            <span className="text-xs font-bold uppercase tracking-[4px] text-gold-500">
              Erro 404
            </span>
            <span className="h-px w-[46px] bg-gold-500" />
          </div>
          <p className="font-display text-[110px] font-medium leading-none text-gold-500 md:text-[150px]">
            404
          </p>
          <h1 className="mt-6 mb-5 font-display text-[clamp(34px,6vw,56px)] font-medium leading-[1.05] text-balance text-cream-100">
            Esta página não foi{" "}
            <span className="italic text-gold-500">localizada nos autos.</span>
          </h1>
          <p className="mb-10 max-w-[440px] text-base leading-[1.7] text-cream-100/70">
            O endereço que você acessou não existe ou foi movido. Volte ao
            início ou fale diretamente comigo.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3.5">
            <Link
              href="/"
              className="inline-flex items-center gap-2.5 bg-gold-500 px-[30px] py-[17px] text-[14.5px] font-extrabold tracking-[0.4px] text-charcoal-800 no-underline transition-colors hover:bg-gold-400"
            >
              Voltar ao início
            </Link>
            <a
              href={site.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 border-[1.5px] border-cream-100/30 px-7 py-[17px] text-[14.5px] font-bold tracking-[0.3px] text-cream-100 no-underline transition-colors hover:border-gold-500 hover:text-gold-500"
            >
              <WhatsAppIcon size={17} />
              Falar no WhatsApp
            </a>
          </div>
        </div>

        <p className="pb-4 text-center text-xs tracking-[0.3px] text-cream-100/40">
          © 2023–2026 {site.name} · Todos os direitos reservados.
        </p>
      </div>
    </main>
  );
}
