import { values } from "../lib/site";

export default function Values() {
  return (
    <section id="valores" className="bg-gold-500 text-charcoal-800">
      <div className="mx-auto max-w-[1280px] px-6 py-[62px] md:px-10 md:py-20">
        <div className="mb-[50px] text-center">
          <span className="text-xs font-extrabold uppercase tracking-[4px] text-charcoal-800/60">
            Princípios que me guiam
          </span>
          <h2 className="mt-2.5 font-display text-[36px] font-semibold text-charcoal-800 md:text-[44px]">
            Compromisso em cada detalhe
          </h2>
        </div>
        <div className="grid grid-cols-1 gap-y-9 md:grid-cols-3 md:gap-0">
          {values.map((value, i) => (
            <div
              key={value.numeral}
              className={`px-2 text-center md:px-10 ${
                i < values.length - 1 ? "md:border-r md:border-charcoal-800/20" : ""
              }`}
            >
              <span className="font-display text-[30px] italic text-charcoal-800">
                {value.numeral}
              </span>
              <h3 className="my-2.5 mb-3 font-display text-[27px] font-bold text-charcoal-800">
                {value.title}
              </h3>
              <p className="text-[14.5px] leading-[1.7] text-charcoal-800/80">
                {value.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
