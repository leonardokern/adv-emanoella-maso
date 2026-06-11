import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Header from "../../components/Header";
import Contact from "../../components/Contact";
import Footer from "../../components/Footer";
import FloatingWhatsApp from "../../components/FloatingWhatsApp";
import { WhatsAppIcon } from "../../components/icons";
import { areas, site, siteUrl } from "../../lib/site";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return areas.map((area) => ({ slug: area.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const area = areas.find((a) => a.slug === slug);
  if (!area) return {};
  return {
    title: area.seoTitle,
    description: area.metaDescription,
    alternates: { canonical: `/areas/${area.slug}` },
    openGraph: {
      title: `${area.seoTitle} · ${site.name}`,
      description: area.metaDescription,
      url: `${siteUrl}/areas/${area.slug}`,
      type: "website",
      locale: "pt_BR",
    },
  };
}

export default async function AreaPage({ params }: Props) {
  const { slug } = await params;
  const area = areas.find((a) => a.slug === slug);
  if (!area) notFound();

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "@id": `${siteUrl}/areas/${area.slug}#service`,
        serviceType: area.title,
        name: area.seoTitle,
        description: area.metaDescription,
        url: `${siteUrl}/areas/${area.slug}`,
        provider: { "@id": `${siteUrl}/#legalservice` },
        areaServed: [
          { "@type": "City", name: "Florianópolis" },
          { "@type": "State", name: "Santa Catarina" },
        ],
      },
      {
        "@type": "FAQPage",
        "@id": `${siteUrl}/areas/${area.slug}#faq`,
        mainEntity: area.faq.map((item) => ({
          "@type": "Question",
          name: item.question,
          acceptedAnswer: { "@type": "Answer", text: item.answer },
        })),
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${siteUrl}/areas/${area.slug}#breadcrumb`,
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Início", item: siteUrl },
          {
            "@type": "ListItem",
            position: 2,
            name: area.title,
            item: `${siteUrl}/areas/${area.slug}`,
          },
        ],
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Header />
      <main>
        {/* HERO DA ÁREA */}
        <section className="relative overflow-hidden border-b border-gold-500/25">
          <span
            aria-hidden
            className="pointer-events-none absolute -top-10 -right-[30px] z-0 font-display text-[340px] font-semibold leading-none text-gold-500/[0.06]"
          >
            §
          </span>
          <div className="relative z-[1] mx-auto max-w-[1280px] px-6 py-16 md:px-10 md:pt-[72px] md:pb-20">
            <nav
              aria-label="Trilha de navegação"
              className="mb-9 text-xs font-bold uppercase tracking-[2px] text-cream-100/50"
            >
              <Link href="/" className="text-cream-100/50 no-underline transition-colors hover:text-gold-500">
                Início
              </Link>
              <span className="mx-2 text-gold-500">/</span>
              <span className="text-gold-500">{area.title}</span>
            </nav>
            <div className="mb-[26px] flex items-center gap-3.5">
              <span className="h-px w-[46px] bg-gold-500" />
              <span className="text-xs font-bold uppercase tracking-[4px] text-gold-500">
                {area.title} · Florianópolis/SC
              </span>
            </div>
            <h1 className="mb-[26px] max-w-[820px] font-display text-[clamp(36px,6.4vw,64px)] font-medium leading-[1.04] tracking-[-0.5px] text-balance text-cream-100">
              {area.headline}{" "}
              <span className="italic text-gold-500">{area.headlineHighlight}</span>
            </h1>
            <div className="max-w-[640px]">
              {area.intro.map((paragraph) => (
                <p
                  key={paragraph.slice(0, 24)}
                  className="mb-5 text-[16.5px] leading-[1.75] text-cream-100/75"
                >
                  {paragraph}
                </p>
              ))}
            </div>
            <div className="mt-9 flex flex-wrap items-center gap-3.5">
              <a
                href={site.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 bg-gold-500 px-[30px] py-[17px] text-[14.5px] font-extrabold tracking-[0.4px] text-charcoal-800 no-underline transition-colors hover:bg-gold-400"
              >
                <WhatsAppIcon size={17} />
                Falar sobre meu caso
              </a>
              <a
                href="#contato"
                className="inline-flex items-center gap-2 border-[1.5px] border-cream-100/30 px-7 py-[17px] text-[14.5px] font-bold tracking-[0.3px] text-cream-100 no-underline transition-colors hover:border-gold-500 hover:text-gold-500"
              >
                Enviar mensagem
              </a>
            </div>
          </div>
        </section>

        {/* SERVIÇOS */}
        <section className="bg-charcoal-700">
          <div className="mx-auto max-w-[1280px] px-6 py-[62px] md:px-10 md:py-24">
            <div className="mx-auto mb-[58px] max-w-[640px] text-center">
              <span className="text-xs font-bold uppercase tracking-[4px] text-gold-500">
                Como posso te ajudar
              </span>
              <h2 className="mt-3.5 font-display text-[38px] font-medium leading-[1.06] text-cream-100 md:text-[46px]">
                Atuação em {area.title}
              </h2>
            </div>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
              {area.services.map((service) => (
                <article
                  key={service.title}
                  className="border border-gold-500/30 bg-charcoal-800 px-[30px] py-8"
                >
                  <h3 className="mb-3 font-display text-[24px] font-semibold text-cream-100">
                    {service.title}
                  </h3>
                  <p className="text-[14.5px] leading-[1.72] text-cream-100/65">
                    {service.description}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="bg-charcoal-800">
          <div className="mx-auto max-w-[860px] px-6 py-[62px] md:px-10 md:py-24">
            <div className="mb-12 text-center">
              <span className="text-xs font-bold uppercase tracking-[4px] text-gold-500">
                Dúvidas comuns
              </span>
              <h2 className="mt-3.5 font-display text-[38px] font-medium leading-[1.06] text-cream-100 md:text-[46px]">
                Perguntas frequentes
              </h2>
            </div>
            <div className="flex flex-col">
              {area.faq.map((item) => (
                <details
                  key={item.question}
                  className="group border-t border-gold-500/25 last:border-b"
                >
                  <summary className="flex cursor-pointer list-none items-baseline justify-between gap-6 py-6 [&::-webkit-details-marker]:hidden">
                    <span className="font-display text-[22px] font-semibold leading-[1.3] text-cream-100 md:text-[24px]">
                      {item.question}
                    </span>
                    <span
                      aria-hidden
                      className="shrink-0 font-display text-[26px] leading-none text-gold-500 transition-transform group-open:rotate-45"
                    >
                      +
                    </span>
                  </summary>
                  <p className="pb-7 text-[15.5px] leading-[1.8] text-cream-100/72">
                    {item.answer}
                  </p>
                </details>
              ))}
            </div>
            <div className="mt-12 border border-gold-500/30 bg-charcoal-700 px-7 py-8 text-center md:px-10">
              <p className="mx-auto mb-6 max-w-[480px] font-display text-[26px] font-medium leading-[1.3] text-cream-100">
                Não encontrou a sua dúvida?{" "}
                <span className="italic text-gold-500">Fale comigo.</span>
              </p>
              <a
                href={site.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 bg-gold-500 px-7 py-3.5 text-[13.5px] font-extrabold tracking-[0.4px] text-charcoal-800 no-underline transition-colors hover:bg-gold-400"
              >
                <WhatsAppIcon size={16} />
                Falar no WhatsApp
              </a>
            </div>
          </div>
        </section>

        {/* OUTRAS ÁREAS */}
        <section className="border-t border-gold-500/20 bg-charcoal-700">
          <div className="mx-auto max-w-[1280px] px-6 py-[52px] md:px-10">
            <span className="text-xs font-bold uppercase tracking-[4px] text-gold-500">
              Outras áreas de atuação
            </span>
            <div className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-2">
              {areas
                .filter((other) => other.slug !== area.slug)
                .map((other) => (
                  <Link
                    key={other.slug}
                    href={`/areas/${other.slug}`}
                    className="group flex items-baseline justify-between gap-6 border border-gold-500/25 bg-charcoal-800 px-6 py-5 no-underline transition-colors hover:border-gold-500"
                  >
                    <span className="font-display text-[22px] font-semibold text-cream-100">
                      {other.title}
                    </span>
                    <span className="font-display text-[22px] text-gold-500 transition-transform group-hover:translate-x-1">
                      →
                    </span>
                  </Link>
                ))}
            </div>
          </div>
        </section>

        <Contact />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </>
  );
}
