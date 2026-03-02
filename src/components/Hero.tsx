export default function Hero() {
  return (
    <section
      id="inicio"
      className="min-h-screen grid grid-cols-1 lg:grid-cols-2 bg-nude pt-20 relative overflow-hidden"
    >
      {/* Decorative gradient orb */}
      <div className="absolute -top-[100px] -right-[100px] w-[600px] h-[600px] bg-[radial-gradient(circle,rgba(197,139,69,0.12)_0%,transparent_70%)] rounded-full pointer-events-none" />

      {/* Text Content */}
      <div className="flex flex-col justify-center px-[5%] lg:px-[8%] py-16 lg:py-20 relative z-1">
        <div className="animate-fade-in-up inline-flex items-center gap-2 bg-caramel/15 border border-caramel/30 text-caramel text-[0.78rem] font-bold tracking-[0.12em] uppercase px-4 py-2 rounded-full mb-7 w-fit">
          <span className="text-[0.7rem]">&#10022;</span>
          Feito com Memória Afetiva
        </div>

        <h1 className="animate-fade-in-up-delay-1 font-playfair text-[clamp(2.8rem,5vw,4.2rem)] font-bold leading-[1.1] text-chocolate mb-6">
          Uma viagem de sabor
          <br />
          no <em className="italic text-caramel">tempo</em>
        </h1>

        <p className="animate-fade-in-up-delay-2 text-[1.08rem] leading-relaxed text-light-brown max-w-[420px] mb-10 font-light">
          Bolos caseiros artesanais feitos com o carinho de quem ama. Como se
          estivesse na casa da sua mãe — disponíveis para pronta entrega em
          Belém do Pará.
        </p>

        <div className="animate-fade-in-up-delay-3 flex items-baseline gap-1.5 mb-10">
          <span className="text-[0.85rem] text-light-brown uppercase tracking-[0.1em]">
            A partir de
          </span>
          <span className="font-playfair text-[2.2rem] font-bold text-chocolate">
            R$ 60
          </span>
        </div>

        <div className="animate-fade-in-up-delay-4 flex flex-col sm:flex-row gap-4">
          <a
            href="#pedido"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-chocolate text-white px-8 py-4 rounded-full font-bold text-[0.95rem] tracking-wide no-underline transition-all duration-300 shadow-[0_8px_30px_rgba(78,52,46,0.25)] hover:bg-wine hover:-translate-y-0.5 hover:shadow-[0_12px_40px_rgba(78,52,46,0.35)]"
          >
            <span>&#127874;</span> Encomendar Agora
          </a>
          <a
            href="#produtos"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-transparent text-chocolate px-8 py-4 rounded-full font-bold text-[0.95rem] border-2 border-caramel no-underline transition-all duration-300 hover:bg-caramel hover:text-white hover:-translate-y-0.5"
          >
            Ver Cardápio
          </a>
        </div>
      </div>

      {/* Image Grid */}
      <div className="relative flex items-center justify-center px-[4%] lg:px-0 lg:pr-[6%] pb-16 lg:pb-0 animate-fade-in-right">
        <div className="grid grid-cols-2 gap-4 max-w-[480px] w-full">
          <div className="row-span-2 rounded-[20px] overflow-hidden shadow-cake bg-gradient-to-br from-chocolate to-caramel min-h-[300px] flex items-center justify-center">
            <span className="text-6xl animate-float">&#127874;</span>
          </div>
          <div className="rounded-[20px] overflow-hidden shadow-cake bg-gradient-to-br from-nude to-caramel aspect-square flex items-center justify-center">
            <span className="text-5xl animate-float" style={{ animationDelay: '0.5s' }}>&#127856;</span>
          </div>
          <div className="rounded-[20px] overflow-hidden shadow-cake bg-gradient-to-br from-caramel-light to-chocolate aspect-square flex items-center justify-center">
            <span className="text-5xl animate-float" style={{ animationDelay: '1s' }}>&#129473;</span>
          </div>
        </div>
      </div>
    </section>
  );
}
