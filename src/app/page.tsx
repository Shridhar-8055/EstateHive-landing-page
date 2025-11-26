import Hero from '@/components/Hero';
import AsSeenIn from '@/components/AsSeenIn';
import Letter from '@/components/Letter';
import FundingProof from '@/components/FundingProof';
import Testimonials from '@/components/Testimonials';
import Features from '@/components/Features';
import SuccessStories from '@/components/SuccessStories';
import WhyUAE from '@/components/WhyUAE';
import NotForEveryone from '@/components/NotForEveryone';
import GetStarted from '@/components/GetStarted';
import PropFunding from '@/components/PropFunding';

export default function Home() {
  return (
    <main className="min-h-screen bg-[#2B2265]">
      <Hero />
      <AsSeenIn />
      <Letter />
      <FundingProof />
      <Testimonials />
      <Features />
      <SuccessStories />
      <WhyUAE />
      <NotForEveryone />
      <GetStarted />
      <PropFunding />
    </main>
  );
}
