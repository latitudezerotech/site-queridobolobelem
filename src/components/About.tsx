"use client";

import Image from "next/image";
import ScrollReveal from "./ScrollReveal";

const values = [
  {
    icon: "🌿",
    title: "Ingredientes com Carinho",
    desc: "Cada bolo feito com ingredientes selecionados e muito amor em cada detalhe.",
  },
  {
    icon: "👩‍🍳",
    title: "Produção Artesanal",
    desc: "Receitas tradicionais passadas de geração em geração, preparadas com técnica e afeto.",
  },
  {
    icon: "❤️",
    title: "Atendimento Próximo",
    desc: "Cada cliente é tratado como da família — com carinho, atenção e dedicação.",
  },
];

export default function About() {
  return (
    <section
      id="sobre"
      className="px-[5%] lg:px-[6%] py-20 lg:py-[100px] grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-center bg-white"
    >
      {/* Visual */}
      <ScrollReveal>
        <div className="relative">
          <div className="w-full rounded-3xl aspect-[4/5] shadow-cake-lg overflow-hidden relative">
            <Image
              src="https://images.unsplash.com/photo-1607478900766-efe13248b125?w=600&h=750&fit=crop&q=80"
              alt="Confeiteira preparando bolo artesanal"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
          <div className="absolute -bottom-8 -right-4 lg:-right-8 bg-chocolate text-white px-7 py-6 rounded-[20px] shadow-[0_20px_50px_rgba(78,52,46,0.3)] text-center">
            <div className="font-playfair text-[2.8rem] font-bold text-caramel leading-none">
              100%
            </div>
            <div className="text-[0.78rem] font-semibold tracking-[0.1em] uppercase opacity-80 mt-1">
              Sabor Caseiro
            </div>
          </div>
        </div>
      </ScrollReveal>

      {/* Content */}
      <ScrollReveal>
        <div>
          <p className="text-[0.78rem] font-bold tracking-[0.15em] uppercase text-caramel mb-4">
            Nossa História
          </p>
          <h2 className="font-playfair text-[clamp(2rem,4vw,3rem)] font-bold leading-tight text-chocolate mb-5">
            Nascemos do amor
            <br />
            pelo <em className="italic text-caramel">sabor verdadeiro</em>
          </h2>
          <p className="text-[1.05rem] leading-relaxed text-light-brown max-w-[540px] font-light">
            O Querido Bolo nasceu da saudade daqueles momentos especiais na
            cozinha da avó — do cheiro que tomava conta da casa, do bolo saindo
            do forno, dos sorrisos ao redor da mesa. Nossa missão é simples:
            devolver esses momentos para a sua vida.
          </p>

          <div className="flex flex-col gap-5 mt-10">
            {values.map((v) => (
              <div key={v.title} className="flex items-start gap-4">
                <div className="w-12 h-12 min-w-[48px] bg-caramel/10 rounded-[14px] flex items-center justify-center text-xl">
                  {v.icon}
                </div>
                <div>
                  <div className="font-bold text-chocolate text-[0.95rem] mb-1">
                    {v.title}
                  </div>
                  <div className="text-[0.88rem] text-light-brown leading-relaxed">
                    {v.desc}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </ScrollReveal>
    </section>
  );
}
