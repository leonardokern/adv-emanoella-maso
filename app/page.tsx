import Header from "./components/Header";
import Hero from "./components/Hero";
import Areas from "./components/Areas";
import About from "./components/About";
import Values from "./components/Values";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import FloatingWhatsApp from "./components/FloatingWhatsApp";
import { site, siteUrl } from "./lib/site";

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "LegalService",
      "@id": `${siteUrl}/#legalservice`,
      name: "Emanoella Krauzer Maso · Advocacia & Consultoria",
      description:
        "Advocacia e consultoria jurídica em Direito Previdenciário, do Consumidor e Civil em Florianópolis/SC. Atendimento presencial e online.",
      url: siteUrl,
      image: `${siteUrl}/manu.png`,
      logo: `${siteUrl}/logo.png`,
      telephone: "+55-49-99905-6160",
      email: site.email,
      address: {
        "@type": "PostalAddress",
        addressLocality: "Florianópolis",
        addressRegion: "SC",
        addressCountry: "BR",
      },
      areaServed: [
        { "@type": "City", name: "Florianópolis" },
        { "@type": "State", name: "Santa Catarina" },
      ],
      knowsAbout: [
        "Direito Previdenciário",
        "Direito do Consumidor",
        "Direito Civil",
        "Aposentadorias INSS",
        "Revisão da Vida Toda",
      ],
      founder: { "@id": `${siteUrl}/#person` },
      sameAs: [site.linkedinUrl],
    },
    {
      "@type": "Person",
      "@id": `${siteUrl}/#person`,
      name: site.name,
      jobTitle: "Advogada",
      image: `${siteUrl}/manu.png`,
      url: siteUrl,
      email: site.email,
      telephone: "+55-49-99905-6160",
      workLocation: {
        "@type": "Place",
        address: {
          "@type": "PostalAddress",
          addressLocality: "Florianópolis",
          addressRegion: "SC",
          addressCountry: "BR",
        },
      },
      alumniOf: [
        {
          "@type": "CollegeOrUniversity",
          name: "Universidade Comunitária da Região de Chapecó (Unochapecó)",
        },
        { "@type": "EducationalOrganization", name: "Damásio Educacional" },
      ],
      sameAs: [site.linkedinUrl],
    },
    {
      "@type": "WebSite",
      "@id": `${siteUrl}/#website`,
      url: siteUrl,
      name: "Emanoella Krauzer Maso · Advocacia & Consultoria",
      inLanguage: "pt-BR",
      publisher: { "@id": `${siteUrl}/#person` },
    },
  ],
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Header />
      <main>
        <Hero />
        <Areas />
        <About />
        <Values />
        <Contact />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </>
  );
}
