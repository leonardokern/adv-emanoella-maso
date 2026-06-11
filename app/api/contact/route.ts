import { NextResponse } from "next/server";
import { Resend } from "resend";
import { siteUrl } from "../../lib/site";

const MAX_LENGTHS = { nome: 200, email: 254, assunto: 200, mensagem: 5000 };
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function escapeHtml(value: string): string {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

function buildEmailHtml(data: {
  nome: string;
  email: string;
  assunto: string;
  mensagem: string;
}): string {
  const nome = escapeHtml(data.nome);
  const email = escapeHtml(data.email);
  const assunto = escapeHtml(data.assunto);
  const mensagem = escapeHtml(data.mensagem).replaceAll("\n", "<br>");
  const primeiroNome = escapeHtml(data.nome.split(" ")[0]);
  const recebidaEm = new Intl.DateTimeFormat("pt-BR", {
    dateStyle: "long",
    timeStyle: "short",
    timeZone: "America/Sao_Paulo",
  }).format(new Date());

  return `<!DOCTYPE html>
<html lang="pt-BR">
<body style="margin:0;padding:0;background:#f4f1ea;">
  <div style="background:#f4f1ea;padding:28px 16px;">
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="max-width:520px;margin:0 auto;border-collapse:collapse;">
      <tr>
        <td style="background:#b08d57;height:4px;font-size:0;line-height:0;">&nbsp;</td>
      </tr>
      <tr>
        <td style="background:#1a1a1f;padding:26px 32px;text-align:center;">
          <img src="${siteUrl}/logo.png" alt="EM" width="56" height="46" style="display:inline-block;border:0;">
          <div style="font-family:Georgia,'Times New Roman',serif;font-size:20px;color:#f4f1ea;margin-top:12px;">Emanoella Krauzer Maso</div>
          <div style="font-family:Arial,sans-serif;font-size:11px;letter-spacing:3px;color:#b08d57;margin-top:6px;">ADVOCACIA &amp; CONSULTORIA</div>
        </td>
      </tr>
      <tr>
        <td style="background:#ffffff;padding:32px;font-family:Arial,sans-serif;">
          <div style="font-size:12px;letter-spacing:2px;color:#936f3c;">NOVA MENSAGEM PELO SITE</div>
          <div style="font-family:Georgia,'Times New Roman',serif;font-size:24px;color:#25252a;margin-top:10px;line-height:1.25;">${assunto}</div>
          <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="margin-top:22px;border-collapse:collapse;font-size:14px;font-family:Arial,sans-serif;">
            <tr>
              <td style="padding:9px 0;border-top:1px solid #e8e4da;color:#7b7a82;width:96px;">Nome</td>
              <td style="padding:9px 0;border-top:1px solid #e8e4da;color:#232327;">${nome}</td>
            </tr>
            <tr>
              <td style="padding:9px 0;border-top:1px solid #e8e4da;color:#7b7a82;">E-mail</td>
              <td style="padding:9px 0;border-top:1px solid #e8e4da;"><a href="mailto:${email}" style="color:#936f3c;">${email}</a></td>
            </tr>
            <tr>
              <td style="padding:9px 0;border-top:1px solid #e8e4da;color:#7b7a82;">Recebida em</td>
              <td style="padding:9px 0;border-top:1px solid #e8e4da;color:#232327;">${recebidaEm}</td>
            </tr>
          </table>
          <div style="margin-top:22px;background:#faf8f3;border-left:3px solid #b08d57;padding:18px 20px;font-size:14.5px;line-height:1.7;color:#4b4a52;">${mensagem}</div>
          <div style="text-align:center;margin-top:26px;">
            <a href="mailto:${email}" style="display:inline-block;background:#25252a;color:#f4f1ea;font-size:13px;letter-spacing:.5px;padding:13px 28px;text-decoration:none;">Responder para ${primeiroNome}</a>
          </div>
          <div style="text-align:center;font-size:12px;color:#7b7a82;margin-top:14px;">Ou simplesmente responda este e-mail — a resposta vai direto para quem escreveu.</div>
        </td>
      </tr>
      <tr>
        <td style="background:#1a1a1f;padding:18px 32px;text-align:center;font-family:Arial,sans-serif;">
          <div style="font-size:11.5px;color:#8a8880;line-height:1.6;">Mensagem enviada automaticamente pelo formulário de contato de <a href="${siteUrl}" style="color:#b08d57;text-decoration:none;">emanoellamaso.adv.br</a></div>
        </td>
      </tr>
    </table>
  </div>
</body>
</html>`;
}

export async function POST(request: Request) {
  let body: Record<string, unknown>;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Requisição inválida." }, { status: 400 });
  }

  // Honeypot: o campo "website" é invisível para humanos; se vier preenchido,
  // é um bot — respondemos sucesso sem enviar nada.
  if (typeof body.website === "string" && body.website.trim() !== "") {
    return NextResponse.json({ ok: true });
  }

  const nome = typeof body.nome === "string" ? body.nome.trim() : "";
  const email = typeof body.email === "string" ? body.email.trim() : "";
  const assunto = typeof body.assunto === "string" ? body.assunto.trim() : "";
  const mensagem = typeof body.mensagem === "string" ? body.mensagem.trim() : "";

  if (!nome || !email || !assunto || !mensagem) {
    return NextResponse.json(
      { error: "Preencha todos os campos." },
      { status: 400 }
    );
  }
  if (!EMAIL_REGEX.test(email)) {
    return NextResponse.json({ error: "E-mail inválido." }, { status: 400 });
  }
  if (
    nome.length > MAX_LENGTHS.nome ||
    email.length > MAX_LENGTHS.email ||
    assunto.length > MAX_LENGTHS.assunto ||
    mensagem.length > MAX_LENGTHS.mensagem
  ) {
    return NextResponse.json(
      { error: "Mensagem excede o tamanho permitido." },
      { status: 400 }
    );
  }

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.error("RESEND_API_KEY não configurada.");
    return NextResponse.json(
      { error: "Serviço de e-mail indisponível no momento." },
      { status: 500 }
    );
  }

  const resend = new Resend(apiKey);
  const { error } = await resend.emails.send({
    from:
      process.env.CONTACT_FROM_EMAIL ??
      "Site Emanoella <site@emanoellamaso.adv.br>",
    to: [process.env.CONTACT_TO_EMAIL ?? "contato@emanoellamaso.adv.br"],
    replyTo: email,
    subject: `[Site] ${assunto}`,
    html: buildEmailHtml({ nome, email, assunto, mensagem }),
    text: [
      `Nova mensagem enviada pelo site:`,
      ``,
      `Nome: ${nome}`,
      `E-mail: ${email}`,
      `Assunto: ${assunto}`,
      ``,
      `Mensagem:`,
      mensagem,
    ].join("\n"),
  });

  if (error) {
    console.error("Falha no envio via Resend:", error);
    return NextResponse.json(
      { error: "Não foi possível enviar a mensagem. Tente novamente ou fale pelo WhatsApp." },
      { status: 502 }
    );
  }

  return NextResponse.json({ ok: true });
}
