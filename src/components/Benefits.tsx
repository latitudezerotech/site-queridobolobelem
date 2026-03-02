"use client";

import ScrollReveal from "./ScrollReveal";

const benefits = [
  {
    icon: "💝",
    title: "Sabor que Desperta Memórias",
    desc: "Como o bolo da vovó, feito com receitas tradicionais que transportam você de volta aos momentos mais felizes da infância.",
  },
  {
    icon: "⚡",
    title: "Pronta Entrega em Belém",
    desc: "Bate aquela vontade de última hora? Temos bolos prontos para entrega rápida. Sem esperar dias para ser feliz.",
  },
  {
    icon: "💰",
    title: "Preço Justo para o Dia a Dia",
    desc: "A partir de R$ 60, você tem um bolo artesanal de qualidade para o café especial ou para comemorar com quem ama.",
  },
];

export default function Benefits() {
  return (
    <section
      id="beneficios"
      className="px-[5%] lg:px-[6%] py-20 lg:py-[100px] bg-chocolate text-center relative overflow-hidden"
    >
      {/* Decorative glow */}
      <div className="absolute -top-1/2 -left-1/2 w-[200%] h-[200%] bg-[radial-gradient(ellipse_at_center,rgba(197,139,69,0.15)_0%,transparent_60%)] pointer-events-none" />

      <div className="mb-16 relative z-1">
        <p className="text-[0.78rem] font-bold tracking-[0.15em] uppercase text-gold mb-4">
          Por que escolher o Querido Bolo
        </p>
        <h2 className="font-playfair text-[clamp(2rem,4vw,3rem)] font-bold leading-tight text-white mb-5">
          Mais que um bolo —
          <br />
          uma <em className="italic text-caramel">experiência</em>
        </h2>
        <p className="text-[1.05rem] leading-relaxed text-white/70 max-w-[540px] mx-auto font-light">
          Não vendemos apenas bolo. Entregamos memória afetiva, carinho e sabor
          verdadeiro na sua porta.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 relative z-1">
        {benefits.map((b) => (
          <ScrollReveal key={b.title}>
            <div className="px-8 py-10 border border-caramel/20 rounded-3xl bg-white/[0.04] transition-all duration-300 hover:bg-white/[0.08] hover:border-caramel/40 hover:-translate-y-1">
              <span className="text-[2.8rem] block mb-5">{b.icon}</span>
              <div className="font-playfair text-[1.3rem] font-semibold text-white mb-3">
                {b.title}
              </div>
              <div className="text-[0.9rem] leading-relaxed text-white/60">
                {b.desc}
              </div>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </section>
  );
}
