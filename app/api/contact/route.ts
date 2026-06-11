import { NextResponse } from "next/server";
import { Resend } from "resend";
import { siteUrl } from "../../lib/site";

const EMAIL_LOGO_BASE64 =
  "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";

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
          <img src="cid:logo-em" alt="EM" width="56" height="46" style="display:inline-block;border:0;">
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
    attachments: [
      {
        filename: "logo.png",
        content: EMAIL_LOGO_BASE64,
        contentId: "logo-em",
      },
    ],
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
