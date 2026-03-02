import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import TrustStrip from "@/components/TrustStrip";
import About from "@/components/About";
import Products from "@/components/Products";
import Benefits from "@/components/Benefits";
import Testimonials from "@/components/Testimonials";
import OrderSection from "@/components/OrderSection";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <TrustStrip />
      <About />
      <Products />
      <Benefits />
      <Testimonials />
      <OrderSection />
      <Footer />
      <WhatsAppFloat />
    </>
  );
}
