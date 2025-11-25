'use client';

import Link from 'next/link';
import { Star } from 'lucide-react';

export default function Hero() {
    return (
        <section className="relative bg-[#230859] pt-6 pb-12 overflow-hidden">
            {/* Background gradient effects */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-[#A60D60]/5 rounded-full blur-[150px]" />
            </div>

            <div className="relative max-w-7xl mx-auto px-4 md:px-8 lg:px-12">
                {/* Header with Logo and Button */}
                <div className="flex justify-between items-center mb-12 pt-2">
                    {/* QA Logo */}
                    <div>
                        <img
                            src="/QA%20logo.png"
                            alt="QA"
                            className="h-12 md:h-16 w-auto"
                        />
                    </div>

                    {/* Apply Now Button */}
                    <Link
                        href="#apply"
                        className="bg-transparent hover:bg-white/10 text-white font-bold py-2 px-6 md:px-8 rounded-full text-sm md:text-base uppercase tracking-wide border-2 border-white transition-all"
                    >
                        APPLY NOW
                    </Link>
                </div>

                <div className="text-center">
                    {/* Pre-headline */}
                    <p className="text-white font-bold text-sm md:text-base mb-4">
                        For Traders Who Want 3-5 Fig Withdrawals
                    </p>

                {/* Main Headline with Clash Display font - 3 lines */}
                <h1
                    className="text-2xl md:text-3xl lg:text-4xl xl:text-[2.75rem] font-semibold text-white leading-[1.15] mb-6"
                    style={{ fontFamily: '"Clash Display", sans-serif' }}
                >
                    Finally, Discover How To Develop Consistent Multi-Strategy Algo Portfolios And Avoid Emotional Decisions Without Technical Analysis.
                </h1>

                {/* Subheadline */}
                <p className="text-white font-bold text-sm md:text-base max-w-3xl mx-auto mb-8">
                    Stack the odds in your favor with our diversified automated strategies & coaching{' '}
                    <span className="text-[#A60D60]">with $100,000 in guaranteed funding available.</span>
                </p>

                {/* Video Embed */}
                <div className="relative max-w-2xl mx-auto mb-4">
                    <div className="relative aspect-video bg-black rounded-lg overflow-hidden shadow-2xl">
                        <iframe
                            className="absolute inset-0 w-full h-full"
                            src="https://www.youtube.com/embed/hmkHPI32D5Y"
                            title="POW Trading"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                        />
                    </div>
                </div>

                {/* CTA Button - Full Width */}
                <div className="max-w-2xl mx-auto mb-6">
                    <Link
                        href="#apply"
                        className="block w-full bg-[#A60D60] hover:bg-[#A60D60]/90 text-white font-extrabold py-5 rounded-full text-lg md:text-xl uppercase tracking-wide transition-all hover:shadow-[0_0_30px_rgba(166,13,96,0.4)]"
                    >
                        Apply Now
                    </Link>
                </div>

                {/* Trustpilot Stars */}
                <div className="flex justify-center gap-1 mb-2">
                    {[1, 2, 3, 4, 5].map((star) => (
                        <Star key={star} className="w-7 h-7 md:w-8 md:h-8 text-[#A60D60] fill-[#A60D60]" />
                    ))}
                </div>

                {/* User Avatars and Rating */}
                <div className="flex items-center justify-center gap-3 mb-3">
                    <div className="flex -space-x-2">
                        {[1, 2, 3, 4, 5].map((i) => (
                            <div
                                key={i}
                                className="w-7 h-7 md:w-8 md:h-8 rounded-full border-2 border-[#2B2265] overflow-hidden"
                                style={{
                                    background: `linear-gradient(135deg, ${['#667eea', '#f093fb', '#4facfe', '#43e97b', '#fa709a'][i-1]}, ${['#764ba2', '#f5576c', '#00f2fe', '#38f9d7', '#fee140'][i-1]})`
                                }}
                            />
                        ))}
                    </div>
                    <span className="text-white text-sm">4.8/5 from 388 reviews</span>
                </div>

                {/* Application note */}
                <p className="text-white font-bold text-sm mb-10 max-w-2xl mx-auto">
                    It's a 2 min application, if accepted you'll get all our strategies, coaching, education, support and a funded account to trade with.
                </p>

                {/* Trust Badges - Award Style */}
                <div className="flex flex-wrap justify-center gap-4 md:gap-8 items-center">
                    {/* $54M Funded Badge */}
                    <div className="w-[120px] h-[120px] md:w-[140px] md:h-[140px]">
                        <img
                            src="/54funded%20logo.svg"
                            alt="$54M Funded"
                            className="w-full h-full object-contain"
                        />
                    </div>

                    {/* Low Risk Badge */}
                    <div className="w-[120px] h-[120px] md:w-[140px] md:h-[140px]">
                        <img
                            src="/low%20risk.svg"
                            alt="1-5% Drawdowns Low Risk"
                            className="w-full h-full object-contain"
                        />
                    </div>

                    {/* 100% of Profits Badge */}
                    <div className="w-[160px] h-[160px] md:w-[180px] md:h-[180px]">
                        <img
                            src="/100%25%20Profits.png"
                            alt="100% of Profits"
                            className="w-full h-full object-contain"
                        />
                    </div>

                    {/* Guaranteed Badge */}
                    <div className="w-[120px] h-[120px] md:w-[140px] md:h-[140px]">
                        <img
                            src="/gauranteed.svg"
                            alt="Guaranteed"
                            className="w-full h-full object-contain"
                        />
                    </div>
                </div>
                </div>
            </div>
        </section>
    );
}
