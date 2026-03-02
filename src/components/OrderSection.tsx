"use client";

import { useState } from "react";
import Image from "next/image";
import ScrollReveal from "./ScrollReveal";

const steps = [
  {
    num: "1",
    title: "Escolha seu bolo",
    desc: "Selecione o sabor que mais te apetece no nosso cardápio.",
  },
  {
    num: "2",
    title: "Entre em contato",
    desc: "Envie sua encomenda pelo formulário ou pelo WhatsApp direto.",
  },
  {
    num: "3",
    title: "Combinamos entrega",
    desc: "Confirmamos disponibilidade e combinamos o horário de entrega em Belém.",
  },
  {
    num: "4",
    title: "Aproveite! 🎉",
    desc: "Seu bolo chega fresquinho com sabor de carinho. Bom apetite!",
  },
];

const sabores = [
  { value: "formigueiro", label: "Bolo de Formigueiro — R$ 65" },
  { value: "chocolate", label: "Bolo de Chocolate — R$ 70" },
  { value: "limao", label: "Bolo de Limão — R$ 65" },
  { value: "coco", label: "Bolo de Coco — R$ 68" },
  { value: "cenoura", label: "Bolo de Cenoura — R$ 62" },
  { value: "frutas", label: "Bolo com Frutas — R$ 80" },
  { value: "outro", label: "Outro (descrever abaixo)" },
];

export default function OrderSection() {
  const [nome, setNome] = useState("");
  const [telefone, setTelefone] = useState("");
  const [sabor, setSabor] = useState("");
  const [obs, setObs] = useState("");

  function enviarPedido() {
    if (!telefone) {
      alert("Por favor, informe seu telefone para continuar! 📱");
      return;
    }

    const saborLabel =
      sabores.find((s) => s.value === sabor)?.label || "A definir";
    const msg = encodeURIComponent(
      `Olá! Quero fazer uma encomenda 🎂\n\n` +
        `👤 Nome: ${nome || "Não informado"}\n` +
        `📱 Telefone: ${telefone}\n` +
        `🎂 Sabor: ${saborLabel}\n` +
        `📝 Observações: ${obs || "Nenhuma"}`
    );

    window.open(`https://wa.me/5591984955101?text=${msg}`, "_blank");
  }

  return (
    <section
      id="pedido"
      className="px-[5%] lg:px-[6%] py-20 lg:py-[100px] bg-gradient-to-br from-nude to-nude-dark grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-center"
    >
      {/* How it works */}
      <ScrollReveal>
        <div>
          <p className="text-[0.78rem] font-bold tracking-[0.15em] uppercase text-caramel mb-4">
            Como Funciona
          </p>
          <h2 className="font-playfair text-[clamp(2rem,4vw,3rem)] font-bold leading-tight text-chocolate mb-9">
            Encomendar é
            <br />
            <em className="italic text-caramel">simples assim</em>
          </h2>

          <div className="flex flex-col gap-5">
            {steps.map((s) => (
              <div
                key={s.num}
                className="flex items-start gap-5 p-6 bg-white rounded-[18px] shadow-card"
              >
                <div className="w-11 h-11 min-w-[44px] bg-chocolate text-white rounded-full flex items-center justify-center font-playfair font-bold text-[1.1rem]">
                  {s.num}
                </div>
                <div>
                  <div className="font-bold text-chocolate mb-1">{s.title}</div>
                  <div className="text-[0.85rem] text-light-brown leading-relaxed">
                    {s.desc}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Decorative image below steps */}
          <div className="mt-10 rounded-[20px] overflow-hidden shadow-cake relative h-[200px] hidden lg:block">
            <Image
              src="https://images.unsplash.com/photo-1558961363-fa8fdf82db35?w=800&h=300&fit=crop&q=80"
              alt="Bolos artesanais variados"
              fill
              className="object-cover"
              sizes="50vw"
            />
          </div>
        </div>
      </ScrollReveal>

      {/* Form */}
      <ScrollReveal>
        <div className="bg-white p-8 sm:p-11 rounded-[28px] shadow-form">
          <div className="font-playfair text-[1.8rem] font-bold text-chocolate mb-2">
            Fazer Encomenda
          </div>
          <div className="text-[0.9rem] text-light-brown mb-9">
            Preencha abaixo e entraremos em contato em breve
          </div>

          <div className="mb-5">
            <label className="block text-[0.82rem] font-bold uppercase tracking-[0.08em] text-chocolate mb-2">
              Seu Nome
            </label>
            <input
              type="text"
              placeholder="Como devemos te chamar?"
              value={nome}
              onChange={(e) => setNome(e.target.value)}
              className="w-full px-[18px] py-3.5 border-[1.5px] border-chocolate/15 rounded-xl font-lato text-[0.95rem] text-dark-text bg-nude transition-all duration-300 outline-none focus:border-caramel focus:bg-white focus:shadow-[0_0_0_3px_rgba(197,139,69,0.1)]"
            />
          </div>

          <div className="mb-5">
            <label className="block text-[0.82rem] font-bold uppercase tracking-[0.08em] text-chocolate mb-2">
              Telefone / WhatsApp *
            </label>
            <input
              type="tel"
              placeholder="(91) 9 0000-0000"
              value={telefone}
              onChange={(e) => setTelefone(e.target.value)}
              className="w-full px-[18px] py-3.5 border-[1.5px] border-chocolate/15 rounded-xl font-lato text-[0.95rem] text-dark-text bg-nude transition-all duration-300 outline-none focus:border-caramel focus:bg-white focus:shadow-[0_0_0_3px_rgba(197,139,69,0.1)]"
            />
          </div>

          <div className="mb-5">
            <label className="block text-[0.82rem] font-bold uppercase tracking-[0.08em] text-chocolate mb-2">
              Sabor Desejado
            </label>
            <select
              value={sabor}
              onChange={(e) => setSabor(e.target.value)}
              className="w-full px-[18px] py-3.5 border-[1.5px] border-chocolate/15 rounded-xl font-lato text-[0.95rem] text-dark-text bg-nude transition-all duration-300 outline-none appearance-none focus:border-caramel focus:bg-white focus:shadow-[0_0_0_3px_rgba(197,139,69,0.1)]"
            >
              <option value="">Selecione o sabor...</option>
              {sabores.map((s) => (
                <option key={s.value} value={s.value}>
                  {s.label}
                </option>
              ))}
            </select>
          </div>

          <div className="mb-5">
            <label className="block text-[0.82rem] font-bold uppercase tracking-[0.08em] text-chocolate mb-2">
              Mensagem / Observações
            </label>
            <textarea
              placeholder="Data desejada, quantidade, endereço de entrega, personalização..."
              value={obs}
              onChange={(e) => setObs(e.target.value)}
              rows={4}
              className="w-full px-[18px] py-3.5 border-[1.5px] border-chocolate/15 rounded-xl font-lato text-[0.95rem] text-dark-text bg-nude transition-all duration-300 outline-none resize-y focus:border-caramel focus:bg-white focus:shadow-[0_0_0_3px_rgba(197,139,69,0.1)]"
            />
          </div>

          <button
            onClick={enviarPedido}
            className="w-full py-[18px] bg-gradient-to-r from-chocolate to-chocolate-light text-white border-none rounded-[14px] font-lato text-base font-bold tracking-[0.05em] transition-all duration-300 flex items-center justify-center gap-2.5 mt-2 hover:from-wine hover:to-wine-light hover:-translate-y-0.5 hover:shadow-[0_10px_30px_rgba(78,52,46,0.3)]"
          >
            <span>&#127874;</span> Enviar Encomenda
          </button>

          <div className="text-center mt-5 pt-5 border-t border-chocolate/10 text-[0.88rem] text-light-brown">
            Prefere chamar direto?{" "}
            <a
              href="https://wa.me/5591984955101?text=Olá! Quero fazer uma encomenda de bolo 🎂"
              target="_blank"
              rel="noopener noreferrer"
              className="text-whatsapp font-bold no-underline inline-flex items-center gap-1.5"
            >
              📱 Chame no WhatsApp
            </a>
          </div>
        </div>
      </ScrollReveal>
    </section>
  );
}
