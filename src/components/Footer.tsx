import Image from "next/image";

const menuLinks = [
  { href: "#sobre", label: "Nossa História" },
  { href: "#produtos", label: "Nosso Cardápio" },
  { href: "#beneficios", label: "Por que escolher" },
  { href: "#pedido", label: "Fazer Encomenda" },
];

const productLinks = [
  "Bolo de Formigueiro",
  "Bolo de Chocolate",
  "Bolo de Coco",
  "Bolo de Cenoura",
  "Bolo com Frutas",
];

export default function Footer() {
  return (
    <footer className="bg-chocolate text-white px-[5%] lg:px-[6%] pt-[70px] pb-10">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 lg:gap-16 mb-14">
        {/* Brand */}
        <div className="md:col-span-1 lg:col-span-1">
          <div className="flex items-center gap-3 mb-4">
            <Image
              src="/logo.png"
              alt="Querido Bolo Belém"
              width={56}
              height={56}
              className="w-14 h-14 object-contain drop-shadow-lg brightness-110"
            />
            <div className="font-playfair text-[1.6rem] font-bold text-white">
              Querido <span className="text-caramel">Bolo</span> Belém
            </div>
          </div>
          <p className="text-[0.9rem] text-white/60 leading-relaxed mb-7 max-w-[300px]">
            Uma viagem de sabor no tempo, feita com carinho e memória afetiva.
            Bolos artesanais caseiros com pronta entrega em Belém do Pará.
          </p>
          <div className="flex flex-col gap-2.5">
            <a
              href="tel:+5591984955101"
              className="flex items-center gap-2.5 text-white/80 no-underline text-[0.88rem] hover:text-caramel transition-colors"
            >
              📞 (91) 98495-5101
            </a>
            <a
              href="mailto:dayse26ga@gmail.com"
              className="flex items-center gap-2.5 text-white/80 no-underline text-[0.88rem] hover:text-caramel transition-colors"
            >
              ✉️ dayse26ga@gmail.com
            </a>
            <a
              href="https://www.instagram.com/queridobolobelem/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2.5 text-white/80 no-underline text-[0.88rem] hover:text-caramel transition-colors"
            >
              📸 @queridobolobelem
            </a>
          </div>
        </div>

        {/* Menu */}
        <div>
          <div className="text-[0.78rem] font-bold tracking-[0.12em] uppercase text-caramel mb-5">
            Menu
          </div>
          <ul className="list-none flex flex-col gap-2.5">
            {menuLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="text-white/70 no-underline text-[0.88rem] hover:text-white transition-colors"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Products */}
        <div>
          <div className="text-[0.78rem] font-bold tracking-[0.12em] uppercase text-caramel mb-5">
            Produtos
          </div>
          <ul className="list-none flex flex-col gap-2.5">
            {productLinks.map((name) => (
              <li key={name}>
                <a
                  href="#pedido"
                  className="text-white/70 no-underline text-[0.88rem] hover:text-white transition-colors"
                >
                  {name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Bottom */}
      <div className="flex flex-col sm:flex-row justify-between items-center pt-7 border-t border-white/10 gap-4">
        <div className="text-[0.82rem] text-white/40">
          © 2025{" "}
          <strong className="text-white/60">Querido Bolo Belém</strong>. Todos
          os direitos reservados. Desenvolvido por{" "}
          <a
            href="https://www.latitudezero.tech/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white/60 hover:text-caramel transition-colors underline"
          >
            Latitude Zero
          </a>
          .
        </div>
        <div className="flex gap-3.5">
          <a
            href="https://www.instagram.com/queridobolobelem/"
            target="_blank"
            rel="noopener noreferrer"
            className="w-[38px] h-[38px] rounded-[10px] bg-white/10 flex items-center justify-center no-underline text-white text-base hover:bg-caramel hover:-translate-y-0.5 transition-all duration-300"
          >
            📸
          </a>
          <a
            href="https://wa.me/5591984955101"
            target="_blank"
            rel="noopener noreferrer"
            className="w-[38px] h-[38px] rounded-[10px] bg-white/10 flex items-center justify-center no-underline text-white text-base hover:bg-caramel hover:-translate-y-0.5 transition-all duration-300"
          >
            💬
          </a>
        </div>
      </div>
    </footer>
  );
}
