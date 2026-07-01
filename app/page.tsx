import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Differentials from "@/components/Differentials";
import Process from "@/components/Process";
import Testimonials from "@/components/Testimonials";
import CTA from "@/components/CTA";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";
import WhatsAppFloatButton from "@/components/WhatsAppFloatButton";
import Head from 'next/head'

export default function Home() {
  return (
    <main className="relative">
      <Head>
        <link rel="icon" href="favicon.ico.ico" />
        <title>Joel Júnior | Corretor de Imóveis — CRECI-MG 46.381</title>
        <meta name="description" content="Joel Júnior é um corretor de imóveis, especializado em ajudar clientes a encontrar soluções imobiliárias. Com anos de experiência no mercado imobiliário, Joel oferece um serviço personalizado e confiável para garantir que cada transação seja tranquila e bem-sucedida." />
      </Head>
      <Header />
      <Hero />
      <About />
      <Services />
      <Differentials />
      <Process />
      <Testimonials />
      <CTA />
      <ContactForm />
      <Footer />
      <WhatsAppFloatButton />
    </main>
  );
}
