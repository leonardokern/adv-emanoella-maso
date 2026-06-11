import type { Metadata } from "next";
import { Cormorant_Garamond, Mulish } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { siteUrl } from "./lib/site";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
});

const mulish = Mulish({
  variable: "--font-mulish",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default:
      "Advogada em Florianópolis · Emanoella Krauzer Maso | Direito Previdenciário, do Consumidor e Civil",
    template: "%s · Emanoella Krauzer Maso",
  },
  description:
    "Advogada em Florianópolis/SC. Atuação e consultoria em Direito Previdenciário (INSS, aposentadorias, auxílios), Direito do Consumidor e Direito Civil. Atendimento presencial e online. Agende uma conversa.",
  keywords: [
    "advogada em Florianópolis",
    "advogada Florianópolis SC",
    "advogada previdenciária Florianópolis",
    "advogado INSS Florianópolis",
    "advogada direito do consumidor Florianópolis",
    "advogada direito civil Florianópolis",
    "direito previdenciário",
    "direito do consumidor",
    "direito civil",
    "aposentadoria INSS",
    "revisão da vida toda",
    "auxílio-doença negado",
    "negativação indevida",
    "cobrança indevida",
    "Emanoella Krauzer Maso",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: siteUrl,
    siteName: "Emanoella Krauzer Maso · Advocacia & Consultoria",
    title:
      "Advogada em Florianópolis · Emanoella Krauzer Maso | Previdenciário, Consumidor e Civil",
    description:
      "Advocacia e consultoria jurídica em Florianópolis/SC: Direito Previdenciário, do Consumidor e Civil. Atendimento presencial e online.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Advogada em Florianópolis · Emanoella Krauzer Maso",
    description:
      "Advocacia e consultoria jurídica em Florianópolis/SC: Direito Previdenciário, do Consumidor e Civil.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  applicationName: "Emanoella Krauzer Maso · Advocacia",
  authors: [{ name: "Emanoella Krauzer Maso", url: siteUrl }],
  creator: "Emanoella Krauzer Maso",
  category: "law",
  other: {
    "geo.region": "BR-SC",
    "geo.placename": "Florianópolis",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      className={`${cormorant.variable} ${mulish.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-charcoal-800 text-cream-100">
        {children}
        <Analytics />
      </body>
    </html>
  );
}
