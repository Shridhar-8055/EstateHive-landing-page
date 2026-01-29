'use client';

import Link from 'next/link';
import ScrollAnimate from './ScrollAnimate';

export default function NotForEveryone() {
    return (
        <section className="bg-white py-16 sm:py-20 lg:py-24">
            <div className="max-w-4xl mx-auto px-4 md:px-8">
                {/* Section Header */}
                <ScrollAnimate>
                    <h2
                        className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-[#000000] mb-6 sm:mb-8"
                        style={{ fontFamily: '"Clash Display", sans-serif' }}
                    >
                        WHAT HAPPENS ON THE CALL
                    </h2>
                </ScrollAnimate>

                <ScrollAnimate delay={100}>
                    <p className="text-[#000000] font-bold text-lg sm:text-xl mb-6">
                        This isn't a pitch. It's a planning session.
                    </p>
                </ScrollAnimate>

                <ScrollAnimate delay={150}>
                    <p className="text-gray-700 text-base sm:text-lg mb-4">
                        You'll tell us:
                    </p>
                </ScrollAnimate>

                <ScrollAnimate delay={200}>
                    <ul className="text-gray-700 text-base sm:text-lg mb-8 space-y-2 list-disc list-inside">
                        <li>Your budget</li>
                        <li>Your goals (income, appreciation, visa, diversification)</li>
                        <li>Your timeline</li>
                    </ul>
                </ScrollAnimate>

                <ScrollAnimate delay={250}>
                    <p className="text-gray-700 text-base sm:text-lg mb-4">
                        We'll tell you:
                    </p>
                </ScrollAnimate>

                <ScrollAnimate delay={300}>
                    <ul className="text-gray-700 text-base sm:text-lg mb-8 space-y-2 list-disc list-inside">
                        <li>Exactly which areas and projects match your criteria</li>
                        <li>What the real numbers look like (not developer brochures—actual rental data)</li>
                        <li>How the buying process works step-by-step for an Indian resident</li>
                        <li>What paperwork you'll need and how long it takes</li>
                    </ul>
                </ScrollAnimate>

                <ScrollAnimate delay={350}>
                    <p className="text-gray-700 text-base sm:text-lg mb-6">
                        By the end of 30 minutes, you'll have a clear picture. Not theory. A real plan.
                    </p>
                </ScrollAnimate>

                <ScrollAnimate delay={400}>
                    <p className="text-[#000000] font-bold text-lg sm:text-xl mb-8">
                        If it makes sense, we move forward. If it doesn't, you'll know why—and you won't have wasted months figuring it out yourself.
                    </p>
                </ScrollAnimate>

                {/* CTA Button */}
                <ScrollAnimate delay={450}>
                    <div className="text-center">
                        <Link
                            href="#apply"
                            className="inline-block bg-[#D4AF37] hover:bg-[#B8962E] text-[#000000] font-extrabold py-3 px-8 sm:py-4 sm:px-12 rounded-lg text-sm sm:text-base md:text-lg uppercase tracking-wide transition-all hover:shadow-[0_0_30px_rgba(201,162,39,0.4)]"
                        >
                            LET'S BUILD YOUR PLAN
                        </Link>
                    </div>
                </ScrollAnimate>
            </div>
        </section>
    );
}
