'use client';

import Link from 'next/link';
import { ArrowRight, X, Check } from 'lucide-react';

export default function CapitalComparison() {
    return (
        <section className="bg-[#f5f5f5] py-16 md:py-24">
            <div className="max-w-4xl mx-auto px-4 md:px-6">
                {/* Section Header */}
                <h2 className="text-2xl md:text-3xl font-black text-[#1B1B59] text-center mb-4">
                    Stop Trading With Your 'Lunch Money' And Start Making{' '}
                    <span className="text-[#1B1B59]">Life-changing Trades</span> With Prop Funding
                </h2>
                <p className="text-gray-400 text-center mb-12 max-w-2xl mx-auto">
                    See the difference between trading with a small account vs a properly funded account.
                </p>

                {/* Comparison Cards */}
                <div className="grid md:grid-cols-2 gap-6 mb-12">
                    {/* Small Account */}
                    <div className="bg-white border border-[#F44336]/30 rounded-2xl p-6">
                        <div className="flex items-center gap-2 mb-4">
                            <X className="w-6 h-6 text-[#F44336]" />
                            <h3 className="text-xl font-bold text-[#1B1B59]">Small Account</h3>
                        </div>
                        <div className="text-center py-8">
                            <p className="text-gray-500 text-sm mb-2">Monthly Withdrawal</p>
                            <p className="text-4xl font-black text-[#F44336]">$200</p>
                            <p className="text-gray-500 text-xs mt-2">Trading with $5,000</p>
                        </div>
                        <ul className="space-y-2 text-sm text-gray-400">
                            <li className="flex items-center gap-2">
                                <X className="w-4 h-4 text-[#F44336]" />
                                Limited growth potential
                            </li>
                            <li className="flex items-center gap-2">
                                <X className="w-4 h-4 text-[#F44336]" />
                                Your capital at risk
                            </li>
                            <li className="flex items-center gap-2">
                                <X className="w-4 h-4 text-[#F44336]" />
                                Emotional trading decisions
                            </li>
                        </ul>
                    </div>

                    {/* Funded Account */}
                    <div className="bg-white border-2 border-[#1B1B59] rounded-2xl p-6 relative">
                        <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#1B1B59] text-black text-xs font-bold px-4 py-1 rounded-full">
                            RECOMMENDED
                        </div>
                        <div className="flex items-center gap-2 mb-4">
                            <Check className="w-6 h-6 text-[#1B1B59]" />
                            <h3 className="text-xl font-bold text-[#1B1B59]">Funded Account</h3>
                        </div>
                        <div className="text-center py-8">
                            <p className="text-gray-500 text-sm mb-2">Monthly Withdrawal</p>
                            <p className="text-4xl font-black text-[#1B1B59]">$18,000</p>
                            <p className="text-gray-500 text-xs mt-2">Trading with $600,000</p>
                        </div>
                        <ul className="space-y-2 text-sm text-gray-400">
                            <li className="flex items-center gap-2">
                                <Check className="w-4 h-4 text-[#1B1B59]" />
                                Massive growth potential
                            </li>
                            <li className="flex items-center gap-2">
                                <Check className="w-4 h-4 text-[#1B1B59]" />
                                No personal capital at risk
                            </li>
                            <li className="flex items-center gap-2">
                                <Check className="w-4 h-4 text-[#1B1B59]" />
                                Trade without emotion
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Explanation */}
                <div className="bg-[#f9f9f9] border border-[#1B1B59]/20 rounded-xl p-6 text-center mb-8">
                    <p className="text-gray-400 leading-relaxed">
                        With <span className="text-[#1B1B59] font-bold">$600k</span> in prop firm capital at{' '}
                        <span className="text-[#1B1B59] font-bold">4% monthly</span> withdrawal, traders can earn approximately{' '}
                        <span className="text-[#1B1B59] font-bold">$18,000/month</span> after profit splits.
                    </p>
                </div>

                {/* CTA */}
                <div className="text-center">
                    <Link
                        href="#apply"
                        className="inline-flex items-center gap-2 bg-[#1B1B59] hover:bg-[#1B1B59]/90 text-black font-black px-10 py-4 rounded-full text-lg uppercase tracking-wider transition-all hover:scale-105"
                    >
                        Get Funded Now
                        <ArrowRight className="w-5 h-5" />
                    </Link>
                </div>
            </div>
        </section>
    );
}
