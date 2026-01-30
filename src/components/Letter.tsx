'use client';

import ScrollAnimate from './ScrollAnimate';

export default function Letter() {
    return (
        <>
            {/* Developer Logos Section */}
            <section className="bg-white py-6 sm:py-12">
                <div className="w-full px-4 sm:px-8 sm:max-w-6xl sm:mx-auto">
                    <div className="flex items-center justify-evenly sm:justify-center sm:gap-10 md:gap-14 lg:gap-20">
                        <img
                            src="/fav emaar.png"
                            alt="EMAAR"
                            className="h-[12px] sm:h-[32px] md:h-[40px] lg:h-[48px] w-auto object-contain"
                        />
                        <img
                            src="/favdamac.png"
                            alt="DAMAC"
                            className="h-[12px] sm:h-[32px] md:h-[40px] lg:h-[48px] w-auto object-contain"
                        />
                        <img
                            src="/fav binghatti.png"
                            alt="BINGHATTI"
                            className="h-[12px] sm:h-[32px] md:h-[40px] lg:h-[48px] w-auto object-contain"
                        />
                        <img
                            src="/fav imtiaz.png"
                            alt="IMTIAZ"
                            className="h-[12px] sm:h-[32px] md:h-[40px] lg:h-[48px] w-auto object-contain"
                        />
                    </div>
                </div>
            </section>

            <section className="bg-white py-16 sm:py-20 lg:py-24">
                <div className="max-w-4xl mx-auto px-4 md:px-8">
                    <ScrollAnimate>
                        <h2
                            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-[#000000] mb-6 sm:mb-8"
                            style={{ fontFamily: '"Clash Display", sans-serif' }}
                        >
                            THE REALITY YOU ALREADY LIVE WITH
                        </h2>
                    </ScrollAnimate>

                <ScrollAnimate delay={100}>
                    <p className="text-[#000000] font-bold text-lg sm:text-xl mb-6">
                        You don't need convincing. You need confirmation.
                    </p>
                </ScrollAnimate>

                <ScrollAnimate delay={150}>
                    <p className="text-gray-700 text-base sm:text-lg mb-4">
                        Every year you hold property in India, you pay:
                    </p>
                </ScrollAnimate>

                <ScrollAnimate delay={200}>
                    <ul className="text-gray-700 text-base sm:text-lg mb-6 space-y-2 list-disc list-inside">
                        <li>Tax on rental income</li>
                        <li>Capital gains when you sell</li>
                        <li>The invisible tax of a depreciating rupee</li>
                    </ul>
                </ScrollAnimate>

                <ScrollAnimate delay={250}>
                    <p className="text-gray-700 text-base sm:text-lg mb-6">
                        Meanwhile, your net worth sits exposed—to policy changes, to tax raids on "high-value transactions," to a system that treats wealth like a problem to be solved.
                    </p>
                </ScrollAnimate>

                <ScrollAnimate delay={300}>
                    <p className="text-[#000000] font-bold text-lg sm:text-xl mb-6">
                        You're not being paranoid. You're being accurate.
                    </p>
                </ScrollAnimate>

                <ScrollAnimate delay={350}>
                    <p className="text-gray-700 text-base sm:text-lg mb-6">
                        Dubai isn't a dream. It's a decision. One that the sharpest people in your circle have already made.
                    </p>
                </ScrollAnimate>

                <ScrollAnimate delay={400}>
                    <p className="text-[#D4AF37] italic text-lg sm:text-xl font-semibold">
                        The only question left is whether you'll be early or late.
                    </p>
                </ScrollAnimate>
            </div>
        </section>
        </>
    );
}
