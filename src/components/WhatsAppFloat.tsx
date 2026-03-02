export default function WhatsAppFloat() {
  return (
    <a
      href="https://wa.me/5591984955101?text=Olá! Quero encomendar um bolo 🎂"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-7 right-7 z-99999 bg-whatsapp w-[62px] h-[62px] rounded-full flex items-center justify-center text-3xl shadow-[0_8px_30px_rgba(37,211,102,0.4)] no-underline text-white transition-all duration-300 animate-pulse-whatsapp hover:scale-110 hover:shadow-[0_12px_40px_rgba(37,211,102,0.5)]"
      aria-label="Fale conosco pelo WhatsApp"
    >
      💬
    </a>
  );
}
