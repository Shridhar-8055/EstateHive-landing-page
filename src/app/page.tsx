import Hero from '@/components/Hero';
import Letter from '@/components/Letter';
import FundingProof from '@/components/FundingProof';
import Features from '@/components/Features';
import WhyUAE from '@/components/WhyUAE';
import NotForEveryone from '@/components/NotForEveryone';
import GetStarted from '@/components/GetStarted';
import PropFunding from '@/components/PropFunding';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Hero />
      <Letter />
      <FundingProof />
      <Features />
      <WhyUAE />
      <NotForEveryone />
      <GetStarted />
      <PropFunding />
      <Footer />
    </main>
  );
}
