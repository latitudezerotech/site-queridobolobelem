import { Playfair_Display, Lato } from "next/font/google";
import "./globals.css";
import type { Metadata } from "next";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
  weight: ["400", "600", "700"],
  style: ["normal", "italic"],
});

const lato = Lato({
  subsets: ["latin"],
  variable: "--font-lato",
  display: "swap",
  weight: ["300", "400", "700"],
});

export const metadata: Metadata = {
  title: "Querido Bolo Belém | Bolos Artesanais com Sabor Afetivo",
  description:
    "Bolos caseiros artesanais a partir de R$ 60. Sabor de infância com pronta entrega em Belém do Pará.",
  keywords:
    "bolo artesanal, bolo caseiro, Belém do Pará, encomenda de bolo, bolo de formigueiro, bolo de chocolate, confeitaria artesanal",
  icons: {
    icon: "/logo.png",
    apple: "/logo.png",
  },
  openGraph: {
    title: "Querido Bolo Belém | Bolos Artesanais com Sabor Afetivo",
    description:
      "Bolos caseiros artesanais a partir de R$ 60. Sabor de infância com pronta entrega em Belém do Pará.",
    images: ["/logo.png"],
    locale: "pt_BR",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={`${playfair.variable} ${lato.variable}`}>
      <body className="font-lato bg-white text-dark-text overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
