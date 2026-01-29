'use client';

import ScrollAnimate from './ScrollAnimate';

export default function WhyUAE() {
    return (
        <section className="bg-[#f5f5f5] py-16 sm:py-20 lg:py-24">
            <div className="max-w-4xl mx-auto px-4 md:px-8">
                {/* Section Header */}
                <ScrollAnimate>
                    <h2
                        className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-[#000000] mb-6 sm:mb-8"
                        style={{ fontFamily: '"Clash Display", sans-serif' }}
                    >
                        WHY THE WINDOW IS NOW
                    </h2>
                </ScrollAnimate>

                <ScrollAnimate delay={100}>
                    <ul className="text-gray-700 text-base sm:text-lg mb-8 space-y-3 list-disc list-inside">
                        <li>Dubai's population: growing 4-5% per year</li>
                        <li>New supply: not keeping pace</li>
                        <li>Off-plan projects: selling out in 48 hours</li>
                        <li>Developer payment plans: 60/40, 70/30, some with post-handover options</li>
                        <li>The Indian rupee: weaker this year than last. Weaker last year than before.</li>
                    </ul>
                </ScrollAnimate>

                <ScrollAnimate delay={150}>
                    <p className="text-gray-700 text-base sm:text-lg mb-6">
                        Every quarter you delay, you need more rupees to buy the same property. That's not a scare tactic. That's the exchange rate chart.
                    </p>
                </ScrollAnimate>

                <ScrollAnimate delay={200}>
                    <p className="text-[#000000] font-bold text-lg sm:text-xl">
                        The people who bought in 2021 and 2022 are sitting on 25-40% appreciation. They didn't time the market. They just made the decision.
                    </p>
                </ScrollAnimate>
            </div>
        </section>
    );
}
