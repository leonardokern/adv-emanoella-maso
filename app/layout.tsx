import type { Metadata } from "next";
import { Cormorant_Garamond, Mulish } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
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
  title: "Emanoella Krauzer Maso · Advocacia & Consultoria",
  description:
    "Advocacia e consultoria em Direito Previdenciário, do Consumidor e Civil em Florianópolis/SC. Atendimento presencial e online.",
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
