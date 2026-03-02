"use client";

import ScrollReveal from "./ScrollReveal";

const testimonials = [
  {
    text: "Comprei o bolo de formigueiro para o aniversário da minha mãe e ela ficou emocionada. Disse que lembrou da infância dela. É exatamente assim que bolo precisa ser!",
    name: "Ana Clara M.",
    avatar: "👩",
  },
  {
    text: "Peço toda semana. O sabor é incomparável com qualquer confeitaria de Belém. Você sente que foi feito com amor de verdade. Recomendo muito!",
    name: "Roberto F.",
    avatar: "👨",
  },
  {
    text: "A entrega foi super rápida e o bolo chegou perfeito. Comprei de última hora para um encontro e todo mundo adorou. Virei cliente fiel!",
    name: "Fernanda S.",
    avatar: "👩",
  },
];

export default function Testimonials() {
  return (
    <section
      id="depoimentos"
      className="px-[5%] lg:px-[6%] py-20 lg:py-[100px] bg-white"
    >
      <ScrollReveal>
        <div className="mb-14">
          <p className="text-[0.78rem] font-bold tracking-[0.15em] uppercase text-caramel mb-4">
            Quem Prova, Volta
          </p>
          <h2 className="font-playfair text-[clamp(2rem,4vw,3rem)] font-bold leading-tight text-chocolate">
            O que nossos
            <br />
            clientes <em className="italic text-caramel">dizem</em>
          </h2>
        </div>
      </ScrollReveal>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-7">
        {testimonials.map((t) => (
          <ScrollReveal key={t.name} className="h-full">
            <div className="bg-nude p-9 rounded-3xl relative h-full flex flex-col">
              <div className="font-playfair text-5xl text-caramel leading-[0.5] mb-5 opacity-50">
                &ldquo;
              </div>
              <p className="text-[0.95rem] leading-relaxed text-dark-text mb-6 italic flex-1">
                {t.text}
              </p>
              <div className="flex items-center gap-3.5">
                <div className="w-[46px] h-[46px] rounded-full bg-gradient-to-br from-caramel to-chocolate flex items-center justify-center text-xl">
                  {t.avatar}
                </div>
                <div>
                  <div className="font-bold text-[0.9rem] text-chocolate">
                    {t.name}
                  </div>
                  <div className="text-gold text-[0.8rem] mt-0.5">
                    ★★★★★
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </section>
  );
}
