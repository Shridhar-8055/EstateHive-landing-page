'use client';

import ScrollAnimate from './ScrollAnimate';

export default function Features() {
    return (
        <section className="bg-white py-16 sm:py-20 lg:py-24">
            <div className="max-w-4xl mx-auto px-4 md:px-8">
                {/* Section Header */}
                <ScrollAnimate>
                    <h2
                        className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-[#000000] mb-6 sm:mb-8"
                        style={{ fontFamily: '"Clash Display", sans-serif' }}
                    >
                        WHAT THE WEALTHY ALREADY KNOW
                    </h2>
                </ScrollAnimate>

                <ScrollAnimate delay={100}>
                    <p className="text-[#000000] font-bold text-lg sm:text-xl mb-6">
                        The people flying business class to Dubai aren't going for shopping trips anymore.
                    </p>
                </ScrollAnimate>

                <ScrollAnimate delay={150}>
                    <p className="text-gray-700 text-base sm:text-lg mb-6">
                        They're going to sign papers.
                    </p>
                </ScrollAnimate>

                <ScrollAnimate delay={200}>
                    <ul className="text-gray-700 text-base sm:text-lg mb-6 space-y-2 list-disc list-inside">
                        <li>Opening UAE bank accounts</li>
                        <li>Registering freehold properties in their name</li>
                        <li>Securing 10-year golden visas for their entire family</li>
                        <li>Building a financial base outside India's jurisdiction</li>
                    </ul>
                </ScrollAnimate>

                <ScrollAnimate delay={250}>
                    <p className="text-gray-700 text-base sm:text-lg mb-6">
                        This isn't about leaving India. It's about not having all your eggs in one basket—a basket that keeps getting taxed, regulated, and watched more closely every year.
                    </p>
                </ScrollAnimate>

                <ScrollAnimate delay={300}>
                    <p className="text-[#000000] font-bold text-lg sm:text-xl">
                        You already understand this. That's why you're reading this page.
                    </p>
                </ScrollAnimate>
            </div>
        </section>
    );
}
