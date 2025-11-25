'use client';

import Link from 'next/link';

export default function FundingProof() {
    return (
        <section className="relative bg-[#f5f5f5] pt-16 md:pt-24 pb-24 md:pb-32 overflow-hidden">
            {/* Curved background effect */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[200%] h-[600px] bg-[#eaeaea] rounded-[50%] -translate-y-1/2" />
            </div>

            <div className="relative max-w-3xl mx-auto px-4 md:px-6">
                {/* Magenta Arrow Indicator */}
                <div className="flex justify-center mb-8">
                    <div className="flex items-center gap-1">
                        <div className="w-8 h-0.5 bg-[#A60D60]" />
                        <div className="w-0 h-0 border-t-[4px] border-t-transparent border-b-[4px] border-b-transparent border-l-[8px] border-l-[#A60D60]" />
                    </div>
                </div>

                {/* Section Header */}
                <div className="text-center mb-10">
                    <h2
                        className="text-2xl md:text-3xl lg:text-4xl font-black text-gray-900 leading-tight"
                        style={{ fontFamily: '"Clash Display", sans-serif', fontStyle: 'italic', fontWeight: 900 }}
                    >
                        <strong><em>We've Guided Traders<br />
                        To Access $200M+ In<br />
                        Funding And Consistent<br />
                        5-Figure Withdrawals</em></strong>
                    </h2>
                </div>

                {/* Content */}
                <div className="max-w-2xl mx-auto mb-8 text-gray-700 font-semibold">
                    <p className="mb-6 text-lg">
                        POW is backed by pro traders with a combined<br />
                        <span className="bg-[#E8D4F0] px-1 font-bold">20+ years of experience.</span>
                    </p>

                    <p className="mb-6 text-lg">
                        My team and I have been through all the missed trades, sleepless nights, and drawdowns that most new traders go through... and come out the other side to quit the 9-5 daily grind.
                    </p>

                    <p className="text-lg">
                        Everything we know has gone into this blueprint, that's now responsible for helping traders pass <span className="bg-[#E8D4F0] px-1 font-bold">$54 million in challenges</span> themselves, we've passed over <span className="bg-[#E8D4F0] px-1 font-bold">$200m in funding</span>, plus multiple 7 figs in withdrawals across members profits, personal profits and capital using our strategies (no shit).
                    </p>
                </div>

                {/* CTA Button - Positioned to overlap next section */}
                <div className="max-w-2xl mx-auto relative z-10 translate-y-1/2">
                    <Link
                        href="#apply"
                        className="block w-full bg-[#A60D60] hover:bg-[#A60D60]/90 text-white font-extrabold py-5 rounded-full text-lg md:text-xl uppercase tracking-wide text-center transition-all hover:shadow-[0_0_30px_rgba(166,13,96,0.4)]"
                    >
                        Apply Now
                    </Link>
                </div>
            </div>
        </section>
    );
}
