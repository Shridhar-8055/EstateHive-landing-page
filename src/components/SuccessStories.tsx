'use client';

import ScrollAnimate from './ScrollAnimate';

export default function SuccessStories() {
    return (
        <section className="bg-white pt-0 pb-0">

            <div className="relative max-w-3xl mx-auto px-4 md:px-6">
                {/* Title at top */}
                <ScrollAnimate>
                    <div className="text-left mb-6 sm:mb-8">
                        <h2
                            className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-black text-gray-900 leading-tight"
                            style={{ fontFamily: '"Clash Display", sans-serif', fontStyle: 'italic', fontWeight: 900 }}
                        >
                            <strong><em>Traders like Logan, who were able to withdraw $12,420 from The Funded Trader...</em></strong>
                        </h2>
                    </div>
                </ScrollAnimate>

                {/* Discord Screenshot - Logan */}
                <ScrollAnimate delay={100}>
                    <div className="rounded-lg overflow-hidden shadow-2xl">
                        <img
                            src="/1.png"
                            alt="Logan's Trading Success - $12,420 Withdrawal Certificate"
                            className="w-full h-auto"
                        />
                    </div>
                </ScrollAnimate>

                {/* Mack's Story */}
                <div className="mt-8 sm:mt-12">
                    {/* Title */}
                    <ScrollAnimate>
                        <div className="text-left mb-6 sm:mb-8">
                            <h2
                                className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-black text-gray-900 leading-tight"
                                style={{ fontFamily: '"Clash Display", sans-serif', fontStyle: 'italic', fontWeight: 900 }}
                            >
                                <strong><em>And Mack who withdrew $7,604...</em></strong>
                            </h2>
                        </div>
                    </ScrollAnimate>

                    {/* Discord Screenshot - Mack */}
                    <ScrollAnimate delay={100}>
                        <div className="rounded-lg overflow-hidden shadow-2xl">
                            <img
                                src="/2.png"
                                alt="Mack's Trading Success - $7,604 Withdrawal Certificate"
                                className="w-full h-auto"
                            />
                        </div>
                    </ScrollAnimate>

                    {/* Additional content */}
                    <ScrollAnimate delay={200}>
                        <div className="mt-6 sm:mt-10 text-left">
                            <p className="text-gray-800 font-semibold text-base sm:text-xl leading-relaxed mb-4 sm:mb-6">
                                Best of all, you don't need <span className="font-bold">$10,000s</span> in capital just to get started.
                            </p>

                            <p className="text-gray-800 font-semibold text-base sm:text-xl leading-relaxed mb-4 sm:mb-6">
                                With your guaranteed $200,000 funded account you don't need to risk your own cash first.
                            </p>

                            <p className="text-gray-800 font-semibold text-base sm:text-xl leading-relaxed">
                                So you can <span className="bg-[#E8D4F0] px-1">access funding straight away</span> and profit by trading with other people's money using our strategies, without any chart time.
                            </p>
                        </div>
                    </ScrollAnimate>
                </div>
            </div>

            {/* More Proof Section */}
            <div className="pt-10 sm:pt-16 md:pt-24 mt-10 sm:mt-16">
                {/* Section Header */}
                <ScrollAnimate>
                    <div className="max-w-6xl mx-auto px-4 md:px-6 text-center mb-8 sm:mb-12">
                        <p className="text-gray-900 font-black text-lg sm:text-xl md:text-2xl lg:text-3xl mb-3 sm:mb-4">
                            "YEaH RigHT... Those Are Fake"...
                        </p>
                        <h2
                            className="text-2xl sm:text-4xl md:text-6xl lg:text-7xl font-black text-[#A60D60]"
                            style={{ fontFamily: '"Clash Display", sans-serif', fontStyle: 'italic', fontWeight: 900 }}
                        >
                            <strong><em>Here's even more PROOF!</em></strong>
                        </h2>
                    </div>
                </ScrollAnimate>

                {/* Proof Images - Full Width */}
                <div className="relative space-y-4 sm:space-y-8">
                    <img
                        src="/first-image.png"
                        alt="More Proof - Discord Screenshots showing trading success"
                        className="w-full h-auto"
                    />
                    <img
                        src="/second-image.png"
                        alt="Additional Proof - More Discord Screenshots"
                        className="w-full h-auto"
                    />
                </div>
            </div>
        </section>
    );
}
