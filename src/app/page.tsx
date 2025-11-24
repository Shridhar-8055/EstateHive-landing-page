import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Process from '@/components/Process';
import Proof from '@/components/Proof';
import Features from '@/components/Features';
import WhyQuantum from '@/components/WhyQuantum';
import About from '@/components/About';
import Testimonials from '@/components/Testimonials';
import Guarantee from '@/components/Guarantee';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-black selection:bg-gradient-to-r selection:from-[#252A83] selection:to-[#AA338B] selection:text-white">
      <Header />
      <Hero />
      <Process />
      <Proof />
      <Features />
      <WhyQuantum />
      <About />
      <Testimonials />
      <Guarantee />
      <Footer />
    </main>
  );
}
