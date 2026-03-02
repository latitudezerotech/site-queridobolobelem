"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-9999 flex items-center justify-between px-[6%] py-4 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-xl shadow-[0_4px_30px_rgba(78,52,46,0.1)]"
          : "bg-white/95 backdrop-blur-xl"
      } border-b border-chocolate/8`}
    >
      <a href="#inicio" className="flex items-center gap-2.5">
        <Image
          src="/logo.png"
          alt="Querido Bolo Belém"
          width={48}
          height={48}
          className="w-10 h-10 sm:w-12 sm:h-12 object-contain drop-shadow-md"
        />
        <span className="font-playfair text-[1.3rem] font-bold text-chocolate tracking-wide">
          Querido <span className="text-caramel">Bolo</span>
        </span>
      </a>

      {/* Desktop Links */}
      <ul className="hidden md:flex items-center gap-9 list-none">
        <li>
          <a
            href="#sobre"
            className="text-chocolate text-[0.88rem] font-normal tracking-[0.08em] uppercase no-underline hover:text-caramel transition-colors duration-300"
          >
            Nossa História
          </a>
        </li>
        <li>
          <a
            href="#produtos"
            className="text-chocolate text-[0.88rem] font-normal tracking-[0.08em] uppercase no-underline hover:text-caramel transition-colors duration-300"
          >
            Produtos
          </a>
        </li>
        <li>
          <a
            href="#pedido"
            className="text-chocolate text-[0.88rem] font-normal tracking-[0.08em] uppercase no-underline hover:text-caramel transition-colors duration-300"
          >
            Fazer Pedido
          </a>
        </li>
        <li>
          <a
            href="#pedido"
            className="bg-caramel text-white px-6 py-2.5 rounded-full text-[0.88rem] font-bold tracking-[0.08em] uppercase no-underline hover:bg-chocolate transition-colors duration-300"
          >
            Encomendar Agora
          </a>
        </li>
      </ul>

      {/* Mobile Menu Button */}
      <button
        className="md:hidden flex flex-col gap-1.5 p-2"
        onClick={() => setMobileOpen(!mobileOpen)}
        aria-label="Menu"
      >
        <span
          className={`block w-6 h-0.5 bg-chocolate transition-all duration-300 ${
            mobileOpen ? "rotate-45 translate-y-2" : ""
          }`}
        />
        <span
          className={`block w-6 h-0.5 bg-chocolate transition-all duration-300 ${
            mobileOpen ? "opacity-0" : ""
          }`}
        />
        <span
          className={`block w-6 h-0.5 bg-chocolate transition-all duration-300 ${
            mobileOpen ? "-rotate-45 -translate-y-2" : ""
          }`}
        />
      </button>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="absolute top-full left-0 right-0 bg-white/98 backdrop-blur-xl border-b border-chocolate/8 shadow-lg md:hidden">
          <ul className="flex flex-col items-stretch gap-6 py-8 px-[5%] list-none">
            <li className="text-center">
              <a
                href="#sobre"
                onClick={() => setMobileOpen(false)}
                className="text-chocolate text-sm font-normal tracking-[0.08em] uppercase no-underline hover:text-caramel transition-colors"
              >
                Nossa História
              </a>
            </li>
            <li className="text-center">
              <a
                href="#produtos"
                onClick={() => setMobileOpen(false)}
                className="text-chocolate text-sm font-normal tracking-[0.08em] uppercase no-underline hover:text-caramel transition-colors"
              >
                Produtos
              </a>
            </li>
            <li className="text-center">
              <a
                href="#pedido"
                onClick={() => setMobileOpen(false)}
                className="text-chocolate text-sm font-normal tracking-[0.08em] uppercase no-underline hover:text-caramel transition-colors"
              >
                Fazer Pedido
              </a>
            </li>
            <li>
              <a
                href="#pedido"
                onClick={() => setMobileOpen(false)}
                className="block w-full text-center bg-caramel text-white py-3.5 rounded-full text-sm font-bold tracking-[0.08em] uppercase no-underline hover:bg-chocolate transition-colors"
              >
                Encomendar Agora
              </a>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}
