"use client";

import Image from "next/image";
import ScrollReveal from "./ScrollReveal";

const products = [
  {
    name: "Bolo de Formigueiro",
    desc: "O clássico de sempre com chocolate granulado. Sabor de infância que nunca sai de moda.",
    price: 65,
    image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=600&h=600&fit=crop&q=80",
    badge: { text: "⭐ Mais Pedido", color: "bg-wine" },
    whatsappMsg: "Olá! Quero encomendar um Bolo de Formigueiro 🎂",
  },
  {
    name: "Bolo de Chocolate",
    desc: "Irresistível massa de chocolate com cobertura cremosa. Para quem ama o clássico.",
    price: 70,
    image: "https://images.unsplash.com/photo-1606890737304-57a1ca8a5b62?w=600&h=600&fit=crop&q=80",
    badge: { text: "Especial", color: "bg-gold text-chocolate" },
    whatsappMsg: "Olá! Quero encomendar um Bolo de Chocolate 🍫",
  },
  {
    name: "Bolo de Limão",
    desc: "Refrescante e delicioso. A acidez do limão em perfeita harmonia com a massa macia.",
    price: 65,
    image: "https://images.unsplash.com/photo-1519869325930-281384f7e56d?w=600&h=600&fit=crop&q=80",
    badge: null,
    whatsappMsg: "Olá! Quero encomendar um Bolo de Limão 🍋",
  },
  {
    name: "Bolo de Coco",
    desc: "Cremoso e aromático. Com coco fresco ralado na massa e na cobertura.",
    price: 68,
    image: "https://images.unsplash.com/photo-1614707267537-b85aaf00c4b7?w=600&h=600&fit=crop&q=80",
    badge: null,
    whatsappMsg: "Olá! Quero encomendar um Bolo de Coco 🥥",
  },
  {
    name: "Bolo de Cenoura",
    desc: "Com calda de chocolate por cima. O favorito do café da tarde para toda a família.",
    price: 62,
    image: "https://images.unsplash.com/photo-1621303837174-89787a7d4729?w=600&h=600&fit=crop&q=80",
    badge: { text: "Pronta Entrega", color: "bg-whatsapp" },
    whatsappMsg: "Olá! Quero encomendar um Bolo de Cenoura 🍮",
  },
  {
    name: "Bolo com Frutas",
    desc: "Decorado com frutas frescas da estação. Para datas especiais e presentear com carinho.",
    price: 80,
    image: "https://images.unsplash.com/photo-1565958011703-44f9829ba187?w=600&h=600&fit=crop&q=80",
    badge: null,
    whatsappMsg: "Olá! Quero encomendar um Bolo com Frutas 🍓",
  },
];

export default function Products() {
  return (
    <section id="produtos" className="px-[5%] lg:px-[6%] py-20 lg:py-[100px] bg-nude">
      <ScrollReveal>
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-14 gap-5">
          <div>
            <p className="text-[0.78rem] font-bold tracking-[0.15em] uppercase text-caramel mb-4">
              Nosso Cardápio
            </p>
            <h2 className="font-playfair text-[clamp(2rem,4vw,3rem)] font-bold leading-tight text-chocolate">
              Cada bolo conta
              <br />
              uma <em className="italic text-caramel">história</em>
            </h2>
          </div>
          <a
            href="#pedido"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-chocolate text-white px-8 py-4 rounded-full font-bold text-[0.95rem] no-underline transition-all duration-300 shadow-[0_8px_30px_rgba(78,52,46,0.25)] hover:bg-wine hover:-translate-y-0.5"
          >
            Ver todos os sabores
          </a>
        </div>
      </ScrollReveal>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-7">
        {products.map((product) => (
          <ScrollReveal key={product.name}>
            <div className="bg-white rounded-3xl overflow-hidden shadow-card transition-all duration-[350ms] cursor-pointer hover:-translate-y-2 hover:shadow-cake-hover group">
              <div className="aspect-square relative overflow-hidden">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                  sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
                />
                {product.badge && (
                  <span
                    className={`absolute top-3.5 left-3.5 ${product.badge.color} text-white text-[0.7rem] font-bold tracking-[0.08em] uppercase px-3 py-1 rounded-full z-1`}
                  >
                    {product.badge.text}
                  </span>
                )}
              </div>
              <div className="p-6">
                <div className="font-playfair text-[1.2rem] font-semibold text-chocolate mb-2">
                  {product.name}
                </div>
                <div className="text-[0.85rem] text-light-brown leading-relaxed mb-5">
                  {product.desc}
                </div>
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
                  <div className="font-playfair text-[1.4rem] font-bold text-chocolate">
                    <span className="font-lato text-[0.85rem] font-normal text-light-brown mr-1">
                      R$
                    </span>
                    {product.price}
                  </div>
                  <a
                    href={`https://wa.me/5591984955101?text=${encodeURIComponent(product.whatsappMsg)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:w-auto bg-caramel text-white px-5 py-2.5 rounded-full text-[0.82rem] font-bold no-underline inline-flex items-center justify-center gap-1.5 transition-all duration-300 hover:bg-chocolate"
                  >
                    Pedir <span>&#10148;</span>
                  </a>
                </div>
              </div>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </section>
  );
}
