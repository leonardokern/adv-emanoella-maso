"use client";

import { useState } from "react";
import Image from "next/image";
import { site } from "../lib/site";

const navLinks = [
  { href: "/#areas", label: "Áreas" },
  { href: "/#sobre", label: "Sobre" },
  { href: "/#valores", label: "Valores" },
  { href: "/#contato", label: "Contato" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-gold-500/30 bg-charcoal-800/80 backdrop-blur-[14px]">
      <div className="mx-auto flex max-w-[1280px] items-center justify-between gap-6 px-6 py-[18px] md:px-10">
        <a href="/" className="flex shrink-0 items-center gap-3.5 text-cream-100 no-underline">
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
        </a>

        <nav className="hidden items-center gap-[30px] md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-xs font-bold uppercase tracking-[1.5px] text-cream-100/80 no-underline transition-colors hover:text-gold-500"
            >
              {link.label}
            </a>
          ))}
          <a
            href={site.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-gold-500 px-5 py-[11px] text-[12.5px] font-extrabold uppercase tracking-[0.5px] text-charcoal-800 no-underline transition-colors hover:bg-gold-400"
          >
            Agendar conversa
          </a>
        </nav>

        <button
          type="button"
          aria-label={open ? "Fechar menu" : "Abrir menu"}
          aria-expanded={open}
          onClick={() => setOpen(!open)}
          className="flex h-10 w-10 flex-col items-center justify-center gap-[5px] border-[1.5px] border-gold-500/50 md:hidden"
        >
          <span
            className={`h-[1.5px] w-5 bg-cream-100 transition-transform ${open ? "translate-y-[6.5px] rotate-45" : ""}`}
          />
          <span className={`h-[1.5px] w-5 bg-cream-100 transition-opacity ${open ? "opacity-0" : ""}`} />
          <span
            className={`h-[1.5px] w-5 bg-cream-100 transition-transform ${open ? "-translate-y-[6.5px] -rotate-45" : ""}`}
          />
        </button>
      </div>

      {open && (
        <nav className="flex flex-col border-t border-gold-500/25 bg-charcoal-800 px-6 py-4 md:hidden">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="border-b border-cream-100/10 py-3.5 text-[13px] font-bold uppercase tracking-[1.5px] text-cream-100/85 no-underline last:border-b-0"
            >
              {link.label}
            </a>
          ))}
          <a
            href={site.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setOpen(false)}
            className="mt-4 inline-flex items-center justify-center gap-2 bg-gold-500 px-5 py-3 text-[12.5px] font-extrabold uppercase tracking-[0.5px] text-charcoal-800 no-underline"
          >
            Agendar conversa
          </a>
        </nav>
      )}
    </header>
  );
}
