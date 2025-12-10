'use client';

import Link from 'next/link';
import { Star } from 'lucide-react';
import ScrollAnimate from './ScrollAnimate';

export default function Hero() {
    return (
        <section className="relative bg-[#250E50] pt-4 sm:pt-6 pb-8 sm:pb-12 overflow-hidden">
            {/* Background gradient effects */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] sm:w-[1000px] h-[400px] sm:h-[600px] bg-[#A60D60]/5 rounded-full blur-[100px] sm:blur-[150px]" />
            </div>

            <div className="relative max-w-7xl mx-auto px-4 md:px-8 lg:px-12">
                {/* Header with Logo and Button */}
                <div className="flex justify-between items-center mb-6 sm:mb-12 pt-2">
                    {/* QA Logo */}
                    <div>
                        <img
                            src="/QA%20logo.png"
                            alt="Quantum Algo"
                            className="h-8 sm:h-12 md:h-16 w-auto"
                        />
                    </div>

                    {/* Apply Now Button */}
                    <Link
                        href="#apply"
                        className="bg-transparent hover:bg-white/10 text-white font-bold py-1.5 sm:py-2 px-4 sm:px-6 md:px-8 rounded-full text-xs sm:text-sm md:text-base uppercase tracking-wide border-2 border-white transition-all"
                    >
                        APPLY NOW
                    </Link>
                </div>

                <div className="text-center">
                    {/* Pre-headline */}
                    <ScrollAnimate>
                        <p className="text-white font-bold text-xs sm:text-sm md:text-base mb-3 sm:mb-4">
                            For UAE Traders Who Want Consistent, Stress-Free, AI-Driven Profits
                        </p>
                    </ScrollAnimate>

                {/* Main Headline with Clash Display font */}
                <ScrollAnimate delay={100}>
                    <h1
                        className="text-lg sm:text-2xl md:text-3xl lg:text-4xl xl:text-[2.75rem] font-semibold text-white leading-[1.2] sm:leading-[1.15] mb-4 sm:mb-6 px-2"
                        style={{ fontFamily: '"Clash Display", sans-serif' }}
                    >
                        Finally, Unlock Consistent AI-driven Trading And Ditch Emotional Decisions. No Complex Technical Analysis Required.
                    </h1>
                </ScrollAnimate>

                {/* Subheadline */}
                <p className="text-white font-bold text-xs sm:text-sm md:text-base max-w-3xl mx-auto mb-6 sm:mb-8 px-2">
                    Stack the odds in your favor with Quantum Algo's automated momentum strategies, volatility detection, and AI-powered risk management.{' '}
                    <span className="text-sky-400">Built for large UAE accounts and serious traders, not beginners.</span>
                </p>

                {/* Video Embed */}
                <div className="relative max-w-2xl mx-auto mb-3 sm:mb-4 px-2 sm:px-0">
                    <div className="relative aspect-video bg-black rounded-lg overflow-hidden shadow-2xl">
                        <iframe
                            className="absolute inset-0 w-full h-full"
                            src="https://www.youtube.com/embed/VeU1tRsdzAc?si=IVebvOM5ugb4N-KF"
                            title="YouTube video player"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            referrerPolicy="strict-origin-when-cross-origin"
                            allowFullScreen
                        />
                    </div>
                </div>

                {/* CTA Button - Full Width */}
                <div className="max-w-2xl mx-auto mb-4 sm:mb-6 px-2 sm:px-0">
                    <Link
                        href="#apply"
                        className="block w-full bg-[#A60D60] hover:bg-[#A60D60]/90 text-white font-extrabold py-3 sm:py-5 rounded-full text-base sm:text-lg md:text-xl uppercase tracking-wide transition-all hover:shadow-[0_0_30px_rgba(166,13,96,0.4)]"
                    >
                        Apply Now & Unlock Your AI Trading Setup
                    </Link>
                </div>

                {/* Urgency Text */}
                <p className="text-sky-400 font-bold text-xs sm:text-sm mb-4">
                    HURRY! Only 4 onboarding slots left until December 2025.
                </p>

                {/* Trustpilot Stars */}
                <div className="flex justify-center gap-1 mb-2">
                    {[1, 2, 3, 4, 5].map((star) => (
                        <Star key={star} className="w-5 h-5 sm:w-7 sm:h-7 md:w-8 md:h-8 text-[#A60D60] fill-[#A60D60]" />
                    ))}
                </div>

                {/* User Avatars and Rating */}
                <div className="flex items-center justify-center gap-2 sm:gap-3 mb-3">
                    <div className="flex -space-x-2">
                        {[1, 2, 3, 4, 5].map((i) => (
                            <div
                                key={i}
                                className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 rounded-full border-2 border-[#2B2265] overflow-hidden"
                                style={{
                                    background: `linear-gradient(135deg, ${['#667eea', '#f093fb', '#4facfe', '#43e97b', '#fa709a'][i-1]}, ${['#764ba2', '#f5576c', '#00f2fe', '#38f9d7', '#fee140'][i-1]})`
                                }}
                            />
                        ))}
                    </div>
                    <span className="text-white text-xs sm:text-sm">4.9/5 from 1,400+ UAE investors</span>
                </div>

                {/* Application note */}
                <p className="text-white font-bold text-xs sm:text-sm mb-6 sm:mb-10 max-w-2xl mx-auto px-4">
                    It's a fast setup. Approved users get instant access to the full algorithm, expert support, and their own automated trading dashboard.
                </p>

                {/* Trust Badge */}
                <div className="flex justify-center px-2">
                    <img
                        src="/L100%25%20Profits.png"
                        alt="100% of Profits No Profit Share"
                        className="w-full max-w-4xl h-auto"
                    />
                </div>
                </div>
            </div>
        </section>
    );
}
