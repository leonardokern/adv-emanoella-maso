import { areas } from "../lib/site";

export default function Areas() {
  return (
    <section id="areas" className="bg-charcoal-700">
      <div className="mx-auto max-w-[1280px] px-6 py-[62px] md:px-10 md:py-24">
        <div className="mx-auto mb-[58px] max-w-[640px] text-center">
          <span className="text-xs font-bold uppercase tracking-[4px] text-gold-500">
            Qual a sua necessidade?
          </span>
          <h2 className="mt-3.5 font-display text-[42px] font-medium leading-[1.06] text-cream-100 md:text-[50px]">
            Áreas de Atuação
          </h2>
        </div>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {areas.map((area) => (
            <article
              key={area.number}
              className="border border-gold-500/30 bg-charcoal-800 px-[34px] py-[42px]"
            >
              <div className="mb-[18px] flex items-baseline justify-between">
                <span className="font-display text-[40px] font-semibold text-gold-500">
                  {area.number}
                </span>
                <span className="h-px w-[30px] bg-gold-500/50" />
              </div>
              <h3 className="mb-3.5 font-display text-[28px] font-semibold text-cream-100">
                {area.title}
              </h3>
              <p className="text-[14.5px] leading-[1.72] text-cream-100/65">
                {area.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
