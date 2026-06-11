"use client";

import { useState } from "react";
import { site } from "../lib/site";
import { CheckIcon, MailIcon, WhatsAppIcon } from "./icons";

const inputClass =
  "border-0 border-b-[1.5px] border-charcoal-700/20 bg-transparent px-0.5 py-[11px] text-[15px] text-ink-900 outline-none transition-colors focus:border-gold-500";

const labelClass =
  "text-xs font-bold uppercase tracking-[1.5px] text-slate-400";

export default function Contact() {
  const [sent, setSent] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    // TODO: conectar a um backend de envio (API route + Resend/Formspree).
    setSent(true);
  }

  return (
    <section id="contato" className="bg-charcoal-700">
      <div className="mx-auto grid max-w-[1280px] grid-cols-1 items-start gap-[34px] px-6 py-[62px] md:grid-cols-[1fr_1.05fr] md:gap-16 md:px-10 md:py-[100px]">
        <div>
          <span className="text-xs font-bold uppercase tracking-[4px] text-gold-500">
            Posso te ajudar?
          </span>
          <h2 className="my-4 mb-[22px] font-display text-[40px] font-medium leading-[1.04] text-balance text-cream-100 md:text-[54px]">
            Vamos conversar sobre o seu caso
          </h2>
          <p className="mb-[42px] max-w-[420px] text-[16.5px] leading-[1.75] text-cream-100/70">
            Entre em contato e agende uma conversa. Respondo pessoalmente cada
            mensagem, com a atenção que o seu momento exige.
          </p>
          <div className="flex flex-col gap-5">
            <a
              href={site.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 text-cream-100 no-underline"
            >
              <span className="flex h-[46px] w-[46px] shrink-0 items-center justify-center border-[1.5px] border-gold-500 text-gold-500">
                <WhatsAppIcon size={18} />
              </span>
              <span>
                <span className="block text-[11px] font-bold uppercase tracking-[2px] text-gold-500">
                  WhatsApp
                </span>
                <span className="text-base font-semibold">
                  {site.whatsappDisplay}
                </span>
              </span>
            </a>
            <a
              href={`mailto:${site.email}`}
              className="flex items-center gap-4 text-cream-100 no-underline"
            >
              <span className="flex h-[46px] w-[46px] shrink-0 items-center justify-center border-[1.5px] border-gold-500 text-gold-500">
                <MailIcon size={18} />
              </span>
              <span>
                <span className="block text-[11px] font-bold uppercase tracking-[2px] text-gold-500">
                  E-mail
                </span>
                <span className="text-base font-semibold">{site.email}</span>
              </span>
            </a>
          </div>
        </div>

        <div className="border-t-[3px] border-gold-500 bg-cream-100 px-6 py-9 text-ink-900 md:px-[42px] md:py-11">
          {sent ? (
            <div className="animate-em-fade px-3 py-[46px] text-center">
              <span className="mb-[22px] inline-flex h-[60px] w-[60px] items-center justify-center border-[1.5px] border-gold-500 text-gold-500">
                <CheckIcon size={26} />
              </span>
              <h3 className="mb-3 font-display text-[30px] font-semibold text-charcoal-700">
                Obrigada pela sua mensagem!
              </h3>
              <p className="text-[15.5px] leading-[1.7] text-slate-600">
                Em breve entrarei em contato com você.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-[18px]">
              <label className="flex flex-col gap-[7px]">
                <span className={labelClass}>Nome</span>
                <input
                  type="text"
                  name="nome"
                  required
                  placeholder="Seu nome completo"
                  className={inputClass}
                />
              </label>
              <label className="flex flex-col gap-[7px]">
                <span className={labelClass}>E-mail</span>
                <input
                  type="email"
                  name="email"
                  required
                  placeholder="voce@email.com"
                  className={inputClass}
                />
              </label>
              <label className="flex flex-col gap-[7px]">
                <span className={labelClass}>Assunto</span>
                <input
                  type="text"
                  name="assunto"
                  required
                  placeholder="Sobre o que deseja falar?"
                  className={inputClass}
                />
              </label>
              <label className="flex flex-col gap-[7px]">
                <span className={labelClass}>Mensagem</span>
                <textarea
                  name="mensagem"
                  rows={4}
                  required
                  placeholder="Conte um pouco sobre o seu caso..."
                  className={`${inputClass} resize-y`}
                />
              </label>
              <button
                type="submit"
                className="mt-2 cursor-pointer border-0 bg-charcoal-700 p-4 text-[14.5px] font-bold tracking-[0.4px] text-cream-100 transition-colors hover:bg-charcoal-800"
              >
                Enviar mensagem
              </button>
              <p className="text-center text-xs text-slate-400">
                Ao enviar, você concorda com a{" "}
                <a href="#" className="font-semibold text-gold-600 underline">
                  Política de Privacidade
                </a>
                .
              </p>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
