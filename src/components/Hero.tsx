"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

export default function Hero() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setLoaded(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const line1 = ["Uma", "viagem", "de", "sabor"];
  const line2 = ["no", "tempo."];

  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image with Ken Burns effect */}
      <div className="absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=1920&h=1080&fit=crop&q=80"
          alt=""
          fill
          className={`object-cover transition-transform duration-[3s] ease-out ${
            loaded ? "scale-100" : "scale-110"
          }`}
          priority
          sizes="100vw"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to top, rgba(26,15,12,0.93) 0%, rgba(44,26,21,0.72) 40%, rgba(44,26,21,0.55) 100%)",
          }}
        />
      </div>

      {/* SVG Grid Decorations — Bruta style */}
      <svg
        className={`absolute top-0 right-0 w-[220px] h-[220px] lg:w-[320px] lg:h-[320px] transition-opacity duration-[2s] delay-[1800ms] ${
          loaded ? "opacity-[0.04]" : "opacity-0"
        }`}
        viewBox="0 0 100 100"
      >
        <pattern
          id="heroGrid1"
          width="8"
          height="8"
          patternUnits="userSpaceOnUse"
        >
          <path
            d="M 8 0 L 0 0 0 8"
            fill="none"
            stroke="white"
            strokeWidth="0.3"
          />
        </pattern>
        <rect width="100" height="100" fill="url(#heroGrid1)" />
      </svg>
      <svg
        className={`absolute bottom-0 left-0 w-[220px] h-[220px] lg:w-[320px] lg:h-[320px] rotate-180 transition-opacity duration-[2s] delay-[2000ms] ${
          loaded ? "opacity-[0.04]" : "opacity-0"
        }`}
        viewBox="0 0 100 100"
      >
        <pattern
          id="heroGrid2"
          width="8"
          height="8"
          patternUnits="userSpaceOnUse"
        >
          <path
            d="M 8 0 L 0 0 0 8"
            fill="none"
            stroke="white"
            strokeWidth="0.3"
          />
        </pattern>
        <rect width="100" height="100" fill="url(#heroGrid2)" />
      </svg>

      {/* Ambient glow */}
      <div
        className={`absolute top-[20%] left-[15%] w-[300px] h-[300px] rounded-full blur-[120px] transition-opacity duration-[2.5s] delay-[1000ms] pointer-events-none ${
          loaded ? "opacity-100" : "opacity-0"
        }`}
        style={{ background: "rgba(197,139,69,0.06)" }}
      />

      {/* Content */}
      <div className="relative z-10 text-center px-[5%] max-w-5xl mx-auto pt-20">
        {/* Badge */}
        <div className="overflow-hidden mb-10">
          <div
            className={`inline-flex items-center gap-2.5 bg-white/[0.06] backdrop-blur-sm border border-white/[0.1] text-white/80 text-[0.75rem] font-semibold tracking-[0.18em] uppercase px-6 py-3 rounded-full transition-all duration-700 delay-300 ${
              loaded
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
          >
            <span className="w-1.5 h-1.5 rounded-full bg-caramel inline-block" />
            Feito com Memória Afetiva
          </div>
        </div>

        {/* Headline — word-by-word reveal */}
        <h1 className="font-playfair text-[clamp(2.8rem,7vw,5.5rem)] font-bold leading-[1.05] text-white mb-8">
          <span className="block">
            {line1.map((word, i) => (
              <span
                key={word}
                className="inline-block overflow-hidden mr-[0.25em] last:mr-0"
              >
                <span
                  className={`inline-block transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] ${
                    loaded
                      ? "translate-y-0 opacity-100"
                      : "translate-y-[110%] opacity-0"
                  }`}
                  style={{ transitionDelay: `${500 + i * 100}ms` }}
                >
                  {word === "sabor" ? (
                    <em className="italic text-caramel-light">{word}</em>
                  ) : (
                    word
                  )}
                </span>
              </span>
            ))}
          </span>

          <span className="block">
            {line2.map((word, i) => (
              <span
                key={word}
                className="inline-block overflow-hidden mr-[0.25em] last:mr-0"
              >
                <span
                  className={`inline-block transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] ${
                    loaded
                      ? "translate-y-0 opacity-100"
                      : "translate-y-[110%] opacity-0"
                  }`}
                  style={{ transitionDelay: `${900 + i * 100}ms` }}
                >
                  {word.replace(".", "") === "tempo" ? (
                    <>
                      <em className="italic text-caramel-light">tempo</em>.
                    </>
                  ) : (
                    word
                  )}
                </span>
              </span>
            ))}
          </span>
        </h1>

        {/* Subtitle */}
        <p
          className={`text-[clamp(1rem,1.5vw,1.15rem)] leading-relaxed text-white/60 max-w-[540px] mx-auto mb-14 font-light transition-all duration-700 delay-[1200ms] ease-[cubic-bezier(0.22,1,0.36,1)] ${
            loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          Bolos caseiros artesanais feitos com o carinho de quem ama.
          <br className="hidden sm:block" /> Como se estivesse na casa da sua
          mãe — disponíveis para pronta entrega em Belém do Pará.
        </p>

        {/* CTAs */}
        <div
          className={`flex flex-col sm:flex-row items-center justify-center gap-4 transition-all duration-700 delay-[1500ms] ease-[cubic-bezier(0.22,1,0.36,1)] ${
            loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          <a
            href="#pedido"
            className="group w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-caramel text-white px-10 py-4 rounded-full font-bold text-[0.95rem] tracking-wide no-underline transition-all duration-300 shadow-[0_8px_30px_rgba(197,139,69,0.25)] hover:shadow-[0_12px_40px_rgba(197,139,69,0.4)] hover:-translate-y-0.5 hover:bg-caramel-light"
          >
            Encomendar Agora
            <svg
              className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2.5}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
              />
            </svg>
          </a>
          <a
            href="#produtos"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 text-white/80 px-10 py-4 rounded-full font-bold text-[0.95rem] border border-white/20 no-underline transition-all duration-300 hover:bg-white/[0.06] hover:text-white hover:-translate-y-0.5 hover:border-white/30"
          >
            Ver Cardápio
          </a>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div
        className={`absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 transition-all duration-700 delay-[2200ms] ${
          loaded ? "opacity-100" : "opacity-0"
        }`}
      >
        <span className="text-white/35 text-[0.7rem] tracking-[0.2em] uppercase font-light">
          Role para ver mais
        </span>
        <div className="relative w-[22px] h-[36px] rounded-full border border-white/20">
          <div className="absolute top-[6px] left-1/2 -translate-x-1/2 w-[3px] h-[8px] rounded-full bg-white/60 animate-scroll-dot" />
        </div>
      </div>
    </section>
  );
}
