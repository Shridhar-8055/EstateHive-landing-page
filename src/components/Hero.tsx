'use client';

import Link from 'next/link';
import ScrollAnimate from './ScrollAnimate';

export default function Hero() {
    return (
        <section className="relative bg-[#000000] pt-4 sm:pt-6 pb-12 sm:pb-16 overflow-hidden">
            {/* Background gradient effects */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] sm:w-[1000px] h-[400px] sm:h-[600px] bg-[#000000]/10 rounded-full blur-[100px] sm:blur-[150px]" />
            </div>

            <div className="relative max-w-7xl mx-auto px-4 md:px-8 lg:px-12">
                {/* Header with Logo and Button */}
                <div className="flex justify-between items-center mb-8 sm:mb-16 py-4">
                    {/* Estate Hive Logo */}
                    <div className="flex items-center">
                        <img
                            src="/EH_WHite@300x-8.png"
                            alt="Estate Hive"
                            style={{ height: '32px', width: 'auto' }}
                            className="sm:!h-[36px] md:!h-[40px]"
                        />
                    </div>

                    {/* Book Now Button */}
                    <div className="flex items-center">
                        <Link
                            href="#apply"
                            className="bg-[#D4AF37] hover:bg-[#B8962E] hover:scale-105 text-[#000000] font-bold py-2.5 px-6 sm:px-8 rounded-full text-sm uppercase tracking-wide transition-all duration-300 shadow-lg hover:shadow-[0_0_20px_rgba(0,206,209,0.5)]"
                        >
                            BOOK CALL
                        </Link>
                    </div>
                </div>

                <div className="text-center max-w-4xl mx-auto">
                    {/* Main Headline */}
                    <ScrollAnimate delay={100}>
                        <h1
                            className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-white leading-[1.4] sm:leading-[1.3] mb-6 sm:mb-8 px-2"
                            style={{ fontFamily: '"Clash Display", sans-serif' }}
                        >
                            <span className="block lg:whitespace-nowrap">You're Not Here to Learn About Dubai.</span>
                            <span className="block lg:whitespace-nowrap text-[#D4AF37]">You're Here Because You Already Know.</span>
                        </h1>
                    </ScrollAnimate>

                    {/* YouTube Video Section */}
                    <ScrollAnimate delay={150}>
                        <div className="max-w-2xl mx-auto px-2 mb-8 sm:mb-10">
                            {/* Video Embed */}
                            <div className="relative w-full rounded-xl overflow-hidden shadow-2xl" style={{ paddingBottom: '56.25%' }}>
                                <iframe
                                    className="absolute top-0 left-0 w-full h-full"
                                    src="https://www.youtube.com/embed/VeU1tRsdzAc?rel=0"
                                    title="Estate Hive - Dubai Real Estate Investment"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen
                                />
                            </div>
                        </div>
                    </ScrollAnimate>

                    {/* Description Paragraphs */}
                    <ScrollAnimate>
                        <div className="text-white/90 text-sm sm:text-base md:text-lg space-y-4 mb-8 sm:mb-10 px-2 text-left max-w-3xl mx-auto">
                            <p>
                                You know the tax system in India is designed to extract, not reward. You know your rental yields are a joke. You know the rupee is bleeding purchasing power every single year.
                            </p>
                            <p>
                                You've seen friends, colleagues, business partners quietly move money into Dubai. You've heard the numbers. You've done some math yourself.
                            </p>
                            <p>
                                Now you want to know: <strong className="text-white">How do I actually do this? And who do I trust to help me?</strong>
                            </p>
                            <p className="font-bold text-white">
                                That's what this call is for.
                            </p>
                        </div>
                    </ScrollAnimate>

                    {/* CTA Button */}
                    <div className="max-w-md mx-auto mb-6 px-2">
                        <Link
                            href="#apply"
                            className="block w-full bg-[#D4AF37] hover:bg-[#B8962E] text-[#000000] font-extrabold py-4 sm:py-5 rounded-lg text-base sm:text-lg md:text-xl uppercase tracking-wide transition-all hover:shadow-[0_0_30px_rgba(201,162,39,0.4)]"
                        >
                            BOOK YOUR CALL NOW
                        </Link>
                    </div>
                </div>

            </div>
        </section>
    );
}
