'use client';

import ScrollAnimate from './ScrollAnimate';

export default function GetStarted() {
    return (
        <section className="bg-[#f5f5f5] py-16 sm:py-20 lg:py-24">
            <div className="max-w-4xl mx-auto px-4 md:px-8">
                {/* Section Header */}
                <ScrollAnimate>
                    <h2
                        className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-[#000000] mb-6 sm:mb-8"
                        style={{ fontFamily: '"Clash Display", sans-serif' }}
                    >
                        WHO WE ARE
                    </h2>
                </ScrollAnimate>

                <ScrollAnimate delay={100}>
                    <p className="text-[#000000] font-bold text-lg sm:text-xl mb-6">
                        We don't work with everyone.
                    </p>
                </ScrollAnimate>

                <ScrollAnimate delay={150}>
                    <p className="text-gray-700 text-base sm:text-lg mb-6">
                        We work with serious buyers who've already decided that Dubai is the right move—and want a team that executes flawlessly.
                    </p>
                </ScrollAnimate>

                <ScrollAnimate delay={200}>
                    <p className="text-[#000000] font-bold text-lg sm:text-xl mb-4">
                        What we offer:
                    </p>
                </ScrollAnimate>

                <ScrollAnimate delay={250}>
                    <ul className="text-gray-700 text-base sm:text-lg mb-8 space-y-2 list-disc list-inside">
                        <li>Access to pre-launch inventory and developer pricing most agents never see</li>
                        <li>On-ground presence in Dubai—we're not sitting in a call center in India</li>
                        <li>End-to-end execution: bank account, property registration, golden visa filing</li>
                        <li>Post-purchase management: tenant placement, rent collection, resale when you're ready</li>
                    </ul>
                </ScrollAnimate>

                <ScrollAnimate delay={300}>
                    <p className="text-gray-700 text-base sm:text-lg mb-6">
                        We've moved crores for Indian families. Clean process. No surprises. No last-minute "extra fees."
                    </p>
                </ScrollAnimate>

                <ScrollAnimate delay={350}>
                    <p className="text-[#000000] font-bold text-lg sm:text-xl">
                        You focus on the decision. We handle everything else.
                    </p>
                </ScrollAnimate>
            </div>
        </section>
    );
}
