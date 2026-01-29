'use client';

import Link from 'next/link';
import ScrollAnimate from './ScrollAnimate';

export default function PropFunding() {
    return (
        <section>
            {/* THE DECISION YOU'RE ACTUALLY MAKING Section */}
            <div className="bg-white py-16 sm:py-20 lg:py-24">
                <div className="max-w-4xl mx-auto px-4 md:px-8">
                    <ScrollAnimate>
                        <h2
                            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-[#000000] mb-6 sm:mb-8"
                            style={{ fontFamily: '"Clash Display", sans-serif' }}
                        >
                            THE DECISION YOU'RE ACTUALLY MAKING
                        </h2>
                    </ScrollAnimate>

                    <ScrollAnimate delay={100}>
                        <p className="text-[#000000] font-bold text-lg sm:text-xl mb-6">
                            This isn't about buying an apartment.
                        </p>
                    </ScrollAnimate>

                    <ScrollAnimate delay={150}>
                        <p className="text-gray-700 text-base sm:text-lg mb-6">
                            It's about building optionality.
                        </p>
                    </ScrollAnimate>

                    <ScrollAnimate delay={200}>
                        <ul className="text-gray-700 text-base sm:text-lg mb-8 space-y-2 list-disc list-inside">
                            <li>A UAE bank account your money can sit in—outside the Indian banking system</li>
                            <li>A golden visa that lets you and your family live, work, and travel freely</li>
                            <li>An asset appreciating in a stable currency while you earn tax-free income</li>
                            <li>A door that's open whenever you need it—for yourself, your children, your future</li>
                        </ul>
                    </ScrollAnimate>

                    <ScrollAnimate delay={250}>
                        <p className="text-gray-700 text-base sm:text-lg mb-6">
                            You're not spending money. You're repositioning it.
                        </p>
                    </ScrollAnimate>

                    <ScrollAnimate delay={300}>
                        <p className="text-gray-700 text-base sm:text-lg mb-4">
                            The question isn't "should I invest in Dubai."
                        </p>
                    </ScrollAnimate>

                    <ScrollAnimate delay={350}>
                        <p className="text-[#D4AF37] italic text-lg sm:text-xl font-semibold mb-8">
                            The question is "why am I still waiting."
                        </p>
                    </ScrollAnimate>
                </div>
            </div>

            {/* Final CTA Section */}
            <div className="bg-[#000000] py-16 sm:py-20 lg:py-24">
                <div className="max-w-4xl mx-auto px-4 md:px-8 text-center">
                    <ScrollAnimate>
                        <h2
                            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-white mb-8 sm:mb-10"
                            style={{ fontFamily: '"Clash Display", sans-serif' }}
                        >
                            You've done the thinking.<br />
                            <span className="text-[#D4AF37]">Let's do the doing.</span>
                        </h2>
                    </ScrollAnimate>

                    <ScrollAnimate delay={100}>
                        <Link
                            href="#apply"
                            className="inline-block bg-[#D4AF37] hover:bg-[#B8962E] text-[#000000] font-extrabold py-4 sm:py-5 px-10 sm:px-16 rounded-lg text-base sm:text-lg md:text-xl uppercase tracking-wide transition-all hover:shadow-[0_0_30px_rgba(201,162,39,0.4)]"
                        >
                            BOOK YOUR STRATEGY CALL
                        </Link>
                    </ScrollAnimate>
                </div>
            </div>
        </section>
    );
}
