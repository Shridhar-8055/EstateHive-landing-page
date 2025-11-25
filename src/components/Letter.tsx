'use client';

export default function Letter() {
    return (
        <section className="bg-white py-16 md:py-20">
            <div className="max-w-2xl mx-auto px-4 md:px-6">
                {/* Section Title */}
                <h2 className="text-xl md:text-2xl font-black text-gray-900 text-center mb-10">
                    The NEW Way To Trade Using Algos That Makes Me{' '}
                    <span className="text-[#A60D60]">$1-4K In Daily Returns</span> Trading Forex
                </h2>

                {/* Letter Card */}
                <div className="p-6 md:p-8 text-gray-800">
                    <p className="text-[#A60D60] font-bold mb-4 text-lg">Dear trader,</p>

                    <p className="mb-4 leading-relaxed font-semibold">
                        Want to get funded and stay funded so you can withdraw profits and then scale your own live capital?
                    </p>

                    <p className="mb-4 leading-relaxed font-semibold">
                        Without studying charts, staying up all night to trade, failing prop challenges, or blowing your accounts?
                    </p>

                    <p className="mb-6 leading-relaxed font-semibold">
                        Most traders are stuck in 'challenge mode' not knowing how to set up their funded accounts to make profits, constantly stuck in a vicious cycle of constant failure.
                    </p>

                    <p className="text-[#A60D60] font-bold mb-4 text-lg">We provide a 3 step process...</p>

                    <div className="space-y-4 mb-6">
                        <p className="leading-relaxed font-semibold">
                            <span className="font-bold">Step 1:</span> Secure Prop Firm Capital $50,000 account. Done for you.
                        </p>

                        <p className="leading-relaxed font-semibold">
                            <span className="font-bold">Step 2:</span> Develop a diversified, algo traded portfolio designed to return 2-4% per month (we will train you to do this) for your $50k account.
                        </p>

                        <p className="leading-relaxed font-semibold">
                            <span className="font-bold">Step 3:</span> Funnel your prop firm profits into live trading capital and use the <span className="underline">same portfolio</span> to net 6%+ in monthly returns (you can aim for more if you wish - it's all relative to your risk appetite).
                        </p>
                    </div>

                    <p className="text-[#A60D60] font-bold mb-4 leading-relaxed">
                        Repeat steps 1-3 and watch your growth stack up to $100k+ in under 12 months - just with compounding and sensible consistency.
                    </p>

                    <p className="text-[#A60D60] font-bold leading-relaxed">
                        Whilst systematically scaling your Prop Trading Capital.
                    </p>
                </div>

                {/* Chart Image with Verified Results Overlay */}
                <div className="mt-10 relative -mx-4 md:-mx-20 lg:-mx-32">
                    <div className="rounded-2xl overflow-hidden shadow-xl border border-gray-200">
                        <img
                            src="https://cdn.prod.website-files.com/654a3c02805675afd5ab4e67/654b5fa19318b600d8957524_Rectangle%2019694.webp"
                            alt="MyFXBook Live Performance Chart - Verified Results"
                            className="w-full h-auto"
                        />
                    </div>

                    {/* Verified Results Overlay */}
                    <div className="absolute -bottom-20 left-1/2 -translate-x-1/2 w-[90%] max-w-2xl">
                        <div className="bg-white rounded-xl shadow-xl p-6 flex items-start gap-4">
                            <div className="w-14 h-14 flex items-center justify-center flex-shrink-0">
                                <img
                                    src="/bagde%20logo.svg"
                                    alt="Verified Badge"
                                    className="w-14 h-14"
                                />
                            </div>
                            <div>
                                <p className="text-[#A60D60] font-black text-2xl md:text-3xl italic mb-2">^ Verified Results...</p>
                                <p className="text-gray-700 text-lg md:text-xl leading-relaxed">
                                    <span className="font-semibold">Still think it's BS? I even give out investor account access, just to silence the haters</span> <span className="font-bold">(you'll get this after you apply)</span>.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Spacer for overlay */}
                <div className="h-28"></div>
            </div>
        </section>
    );
}
