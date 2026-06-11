"use client";

import { useEffect } from "react";
import { site } from "../lib/site";

const sectionTitle =
  "font-display text-[22px] font-semibold text-charcoal-700 mt-7 mb-2";
const paragraph = "text-[14.5px] leading-[1.75] text-slate-600";

export default function PrivacyModal({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-[80] flex items-center justify-center bg-charcoal-900/80 p-4 backdrop-blur-sm md:p-8"
      onClick={onClose}
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="privacy-title"
        onClick={(e) => e.stopPropagation()}
        className="animate-em-fade relative flex max-h-[85vh] w-full max-w-[680px] flex-col border-t-[3px] border-gold-500 bg-cream-100 text-ink-900 shadow-[0_40px_90px_-40px_rgba(0,0,0,0.8)]"
      >
        <div className="flex items-start justify-between gap-6 px-7 pt-7 pb-4 md:px-10 md:pt-9">
          <div>
            <span className="text-[11px] font-bold uppercase tracking-[3px] text-gold-600">
              LGPD · Lei nº 13.709/2018
            </span>
            <h2
              id="privacy-title"
              className="mt-2 font-display text-[30px] font-semibold leading-[1.1] text-charcoal-700 md:text-[34px]"
            >
              Política de Privacidade
            </h2>
          </div>
          <button
            type="button"
            onClick={onClose}
            aria-label="Fechar política de privacidade"
            className="flex h-10 w-10 shrink-0 cursor-pointer items-center justify-center border-[1.5px] border-charcoal-700/25 text-xl leading-none text-charcoal-700 transition-colors hover:border-gold-500 hover:text-gold-600"
          >
            ×
          </button>
        </div>

        <div className="overflow-y-auto px-7 pb-8 md:px-10">
          <p className={paragraph}>
            Esta política descreve como os seus dados pessoais são tratados ao
            utilizar o formulário de contato deste site, em conformidade com a
            Lei Geral de Proteção de Dados (LGPD).
          </p>

          <h3 className={sectionTitle}>1. Dados coletados</h3>
          <p className={paragraph}>
            Ao enviar o formulário, coletamos apenas os dados que você informa:
            nome, e-mail, assunto e o conteúdo da mensagem. Nenhum outro dado
            pessoal é coletado por este site.
          </p>

          <h3 className={sectionTitle}>2. Finalidade</h3>
          <p className={paragraph}>
            Os dados são utilizados exclusivamente para responder ao seu
            contato e dar andamento à conversa que você iniciou. Não são usados
            para envio de publicidade nem adicionados a listas de e-mail.
          </p>

          <h3 className={sectionTitle}>3. Base legal</h3>
          <p className={paragraph}>
            O tratamento se baseia no seu consentimento, manifestado no envio
            voluntário do formulário, e nos procedimentos preliminares a uma
            eventual contratação de serviços jurídicos (art. 7º, I e V, da
            LGPD).
          </p>

          <h3 className={sectionTitle}>4. Compartilhamento e armazenamento</h3>
          <p className={paragraph}>
            As mensagens são recebidas na caixa de e-mail profissional da
            advogada e não são compartilhadas com terceiros, salvo obrigação
            legal. As informações trocadas estão protegidas pelo sigilo
            profissional da advocacia.
          </p>

          <h3 className={sectionTitle}>5. Seus direitos</h3>
          <p className={paragraph}>
            Nos termos do art. 18 da LGPD, você pode solicitar a qualquer
            momento a confirmação do tratamento, o acesso, a correção ou a
            exclusão dos seus dados, bastando enviar um pedido para{" "}
            <a
              href={`mailto:${site.email}`}
              className="font-semibold text-gold-600 underline"
            >
              {site.email}
            </a>
            .
          </p>

          <h3 className={sectionTitle}>6. Controladora</h3>
          <p className={paragraph}>
            {site.name} — Advocacia &amp; Consultoria, {site.location}.
            Dúvidas sobre esta política podem ser enviadas pelo mesmo e-mail
            acima.
          </p>

          <p className="mt-7 text-xs text-slate-400">
            Última atualização: junho de 2026.
          </p>
        </div>
      </div>
    </div>
  );
}
