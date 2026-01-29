'use client';

import ScrollAnimate from './ScrollAnimate';

export default function FundingProof() {
    return (
        <section className="bg-[#f5f5f5] py-16 sm:py-20 lg:py-24">
            <div className="max-w-4xl mx-auto px-4 md:px-8">
                {/* Section Header */}
                <ScrollAnimate>
                    <h2
                        className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-[#000000] mb-4 sm:mb-6"
                        style={{ fontFamily: '"Clash Display", sans-serif' }}
                    >
                        THE MATH THAT ENDS THE DEBATE
                    </h2>
                </ScrollAnimate>

                <ScrollAnimate delay={100}>
                    <p className="text-[#000000] font-bold text-lg sm:text-xl mb-8">
                        Stop thinking about this emotionally. Look at the numbers.
                    </p>
                </ScrollAnimate>

                {/* Comparison Table */}
                <ScrollAnimate delay={150}>
                    <div className="overflow-x-auto mb-8 -mx-4 px-4 sm:mx-0 sm:px-0">
                        <table className="w-full border-collapse min-w-[320px]">
                            <thead>
                                <tr className="bg-[#000000]">
                                    <th className="py-3 px-2 sm:py-4 sm:px-4 text-left text-white font-bold text-sm sm:text-base md:text-lg"></th>
                                    <th className="py-3 px-2 sm:py-4 sm:px-4 text-center text-white font-bold text-sm sm:text-base md:text-lg">MUMBAI</th>
                                    <th className="py-3 px-2 sm:py-4 sm:px-4 text-center text-[#D4AF37] font-bold text-sm sm:text-base md:text-lg">DUBAI</th>
                                </tr>
                            </thead>
                            <tbody className="bg-white">
                                <tr className="border-b border-gray-200">
                                    <td className="py-3 px-2 sm:py-4 sm:px-4 font-semibold text-gray-800 text-sm sm:text-base">Rental Yield</td>
                                    <td className="py-3 px-2 sm:py-4 sm:px-4 text-center text-gray-600 text-sm sm:text-base">2-3%</td>
                                    <td className="py-3 px-2 sm:py-4 sm:px-4 text-center text-[#D4AF37] font-bold text-sm sm:text-base">6-8%</td>
                                </tr>
                                <tr className="border-b border-gray-200">
                                    <td className="py-3 px-2 sm:py-4 sm:px-4 font-semibold text-gray-800 text-sm sm:text-base">Income Tax on Rent</td>
                                    <td className="py-3 px-2 sm:py-4 sm:px-4 text-center text-gray-600 text-sm sm:text-base">30%+</td>
                                    <td className="py-3 px-2 sm:py-4 sm:px-4 text-center text-[#D4AF37] font-bold text-sm sm:text-base">0%</td>
                                </tr>
                                <tr className="border-b border-gray-200">
                                    <td className="py-3 px-2 sm:py-4 sm:px-4 font-semibold text-gray-800 text-sm sm:text-base">Capital Gains Tax</td>
                                    <td className="py-3 px-2 sm:py-4 sm:px-4 text-center text-gray-600 text-sm sm:text-base">12.5-20%</td>
                                    <td className="py-3 px-2 sm:py-4 sm:px-4 text-center text-[#D4AF37] font-bold text-sm sm:text-base">0%</td>
                                </tr>
                                <tr className="border-b border-gray-200">
                                    <td className="py-3 px-2 sm:py-4 sm:px-4 font-semibold text-gray-800 text-sm sm:text-base">Property Tax</td>
                                    <td className="py-3 px-2 sm:py-4 sm:px-4 text-center text-gray-600 text-sm sm:text-base">Yes</td>
                                    <td className="py-3 px-2 sm:py-4 sm:px-4 text-center text-[#D4AF37] font-bold text-sm sm:text-base">No</td>
                                </tr>
                                <tr>
                                    <td className="py-3 px-2 sm:py-4 sm:px-4 font-semibold text-gray-800 text-sm sm:text-base">Currency Trend</td>
                                    <td className="py-3 px-2 sm:py-4 sm:px-4 text-center text-gray-600 text-sm sm:text-base">Weakening</td>
                                    <td className="py-3 px-2 sm:py-4 sm:px-4 text-center text-[#D4AF37] font-bold text-sm sm:text-base">Pegged to USD</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </ScrollAnimate>

                {/* Comparison Example */}
                <ScrollAnimate delay={200}>
                    <div className="space-y-4 mb-6">
                        <p className="text-gray-700 text-base sm:text-lg">
                            A ₹2 crore apartment in Mumbai gives you ₹50,000/month rent—before tax.
                        </p>
                        <p className="text-[#000000] font-bold text-lg sm:text-xl">
                            The same money in Dubai gives you ₹1,00,000+/month—tax-free. In dollars.
                        </p>
                    </div>
                </ScrollAnimate>

                <ScrollAnimate delay={250}>
                    <p className="text-[#D4AF37] italic text-lg sm:text-xl font-semibold">
                        This isn't opinion. It's arithmetic.
                    </p>
                </ScrollAnimate>
            </div>
        </section>
    );
}
