const trustItems = [
  { icon: "🤝", text: "100% Artesanal" },
  { icon: "⚡", text: "Pronta Entrega" },
  { icon: "📍", text: "Belém do Pará" },
  { icon: "💛", text: "Sabor Caseiro" },
];

export default function TrustStrip() {
  return (
    <div className="bg-chocolate px-[6%] py-5 flex justify-center gap-8 md:gap-16 flex-wrap">
      {trustItems.map((item) => (
        <div key={item.text} className="flex items-center gap-2.5 text-white">
          <span className="text-xl">{item.icon}</span>
          <span className="text-[0.85rem] font-semibold tracking-[0.05em] uppercase">
            {item.text}
          </span>
        </div>
      ))}
    </div>
  );
}
