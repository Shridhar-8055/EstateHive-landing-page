'use client';

import { CheckCircle2, Clock, Award, Shield, TrendingUp, Zap, DollarSign } from 'lucide-react';
import Link from 'next/link';

const guarantees = [
    {
        icon: <DollarSign className="w-6 h-6" />,
        title: "$50,000 Funded Account",
        description: "Guaranteed funded account within 30 days - no more failed prop challenges wasting your money."
    },
    {
        icon: <Clock className="w-6 h-6" />,
        title: "Time Freedom",
        description: "Give yourself back 800+ hours yearly. No more exhausting chart analysis and manual decision-making."
    },
    {
        icon: <Shield className="w-6 h-6" />,
        title: "Complete Training System",
        description: "All tools, strategies, coaching, and education necessary to succeed - nothing held back."
    },
    {
        icon: <TrendingUp className="w-6 h-6" />,
        title: "Proven Results",
        description: "$180M+ in funding secured and $8.2M+ in withdrawals prove this system works."
    }
];

export default function Guarantee() {
    return (
        <section id="apply" className="relative py-20 md:py-32 bg-white overflow-hidden">
            {/* Dramatic background effects */}
            <div className="absolute inset-0">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1200px] h-[1200px] bg-gradient-to-r from-[#252A83]/30 to-[#AA338B]/30 rounded-full blur-[150px] pointer-events-none" />
            </div>

            <div className="relative max-w-7xl mx-auto px-4 md:px-6">
                {/* Main Guarantee Box */}
                <div className="max-w-5xl mx-auto">
                    <div className="relative bg-gradient-to-br from-[#252A83]/30 to-[#AA338B]/30 backdrop-blur-xl border-2 border-[#252A83]/50 rounded-[3rem] p-1">
                        {/* Animated glow */}
                        <div className="absolute inset-0 rounded-[3rem] bg-gradient-to-r from-[#252A83] to-[#AA338B] opacity-50 blur-3xl animate-pulse" />

                        <div className="relative bg-white rounded-[2.8rem] p-8 md:p-16">
                            {/* Badge */}
                            <div className="flex justify-center mb-8">
                                <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-[#252A83] to-[#AA338B] shadow-2xl">
                                    <Award className="w-5 h-5 text-black" />
                                    <span className="text-sm font-black text-white tracking-wide uppercase">
                                        Our Guarantee To You
                                    </span>
                                </div>
                            </div>

                            {/* Main Headline */}
                            <h2 className="text-4xl md:text-6xl font-extrabold text-white text-center mb-6 tracking-tight leading-tight">
                                Get Your{' '}
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#252A83] to-[#AA338B]">
                                    $50,000 Account
                                </span>
                                {' '}+ Complete System
                            </h2>

                            <p className="text-xl md:text-2xl text-gray-700 text-center mb-12 max-w-3xl mx-auto leading-relaxed">
                                It's a 2-minute application. If accepted, you'll get all our strategies, coaching, education, support,
                                and a <span className="text-white font-bold">6-figure funded account</span> to trade with.
                            </p>

                            {/* Guarantees Grid */}
                            <div className="grid md:grid-cols-2 gap-6 mb-12">
                                {guarantees.map((item, index) => (
                                    <div
                                        key={index}
                                        className="flex gap-4 bg-gradient-to-br from-[#252A83]/10 to-[#AA338B]/10 backdrop-blur-sm border border-[#252A83]/30 rounded-2xl p-6"
                                    >
                                        <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-[#252A83] to-[#AA338B] flex items-center justify-center text-black">
                                            {item.icon}
                                        </div>
                                        <div>
                                            <h3 className="text-lg font-bold text-white mb-2">{item.title}</h3>
                                            <p className="text-gray-600 text-sm leading-relaxed">{item.description}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            {/* Stats Bar */}
                            <div className="grid grid-cols-3 gap-6 mb-12 pb-12 border-b border-[#252A83]/30">
                                <div className="text-center">
                                    <div className="text-4xl md:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-[#252A83] to-[#AA338B] mb-2">
                                        $180M+
                                    </div>
                                    <div className="text-sm text-gray-600 font-medium">Total Funding</div>
                                </div>
                                <div className="text-center">
                                    <div className="text-4xl md:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-[#252A83] to-[#AA338B] mb-2">
                                        2,500+
                                    </div>
                                    <div className="text-sm text-gray-600 font-medium">Active Traders</div>
                                </div>
                                <div className="text-center">
                                    <div className="text-4xl md:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-[#252A83] to-[#AA338B] mb-2">
                                        94.7%
                                    </div>
                                    <div className="text-sm text-gray-600 font-medium">Success Rate</div>
                                </div>
                            </div>

                            {/* CTA Button */}
                            <div className="text-center">
                                <Link
                                    href="#apply"
                                    className="group inline-flex items-center gap-4 px-12 py-6 text-2xl md:text-3xl font-black text-white rounded-full overflow-hidden transition-all hover:scale-105 shadow-2xl relative"
                                >
                                    <div className="absolute inset-0 bg-gradient-to-r from-[#252A83] via-[#AA338B] to-[#252A83] animate-gradient" />
                                    <div className="absolute inset-0 bg-gradient-to-r from-[#252A83] via-[#AA338B] to-[#252A83] blur-2xl opacity-50 group-hover:opacity-100 transition-opacity" />
                                    <span className="relative z-10">APPLY NOW</span>
                                    <Zap className="relative z-10 w-8 h-8 group-hover:rotate-12 transition-transform" />
                                </Link>

                                <p className="text-gray-600 text-sm mt-6 mb-4">
                                    Limited spots available - serious traders only
                                </p>

                                {/* Trust badges */}
                                <div className="flex flex-wrap justify-center gap-4 text-xs text-gray-500">
                                    <div className="flex items-center gap-2">
                                        <CheckCircle2 className="w-4 h-4 text-[#AA338B]" />
                                        <span>No credit card required</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <CheckCircle2 className="w-4 h-4 text-[#AA338B]" />
                                        <span>2-minute application</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <CheckCircle2 className="w-4 h-4 text-[#AA338B]" />
                                        <span>Instant decision</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Warning Box */}
                <div className="max-w-3xl mx-auto mt-12 text-center">
                    <div className="bg-gradient-to-r from-[#AA338B]/10 to-[#252A83]/10 backdrop-blur-sm border border-[#AA338B]/30 rounded-2xl p-6">
                        <p className="text-lg font-bold text-white mb-2">
                            ⚠️ It's Not For Everyone
                        </p>
                        <p className="text-gray-600">
                            This program is for serious traders ready to commit to algorithmic excellence.
                            If you're looking for get-rich-quick schemes, this isn't it. This is for those who want
                            systematic, sustainable growth.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
