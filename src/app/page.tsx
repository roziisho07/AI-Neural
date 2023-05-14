import Image from "next/image";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Recents from "./components/Recents";
import Newsletter from "./components/Newsletter";
import Facts from "./components/Facts";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main className="bg-[#0D1721] h-[100vh] w-auto">
      {/* Heder */}
      <Header />
      {/* Hero */}
      <Hero />
      {/* DEMOS */}
      <Recents />
      {/* CUSTOMER BENIFITS */}
      <Newsletter />
      <Facts />
      <Footer />
    </main>
  );
}
