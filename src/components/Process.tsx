'use client';

import { CheckCircle2, TrendingUp, Wallet, Repeat } from 'lucide-react';
import Link from 'next/link';

const steps = [
    {
        step: "01",
        icon: <Wallet className="w-8 h-8" />,
        title: "Secure Your Capital",
        description: "Get funded with a $50,000 prop firm account. We handle the challenge - you focus on trading with our proven algorithms.",
        highlight: "$50K Starting Capital"
    },
    {
        step: "02",
        icon: <TrendingUp className="w-8 h-8" />,
        title: "Deploy Adaptive Strategies",
        description: "Use our multi-strategy algo portfolio designed to return 3-5% monthly with low drawdown, trained to adapt to all market conditions.",
        highlight: "3-5% Monthly Returns"
    },
    {
        step: "03",
        icon: <Repeat className="w-8 h-8" />,
        title: "Scale & Compound",
        description: "Funnel prop profits into live capital. Scale to $100K+ in 12 months through systematic compounding and consistency.",
        highlight: "Scale to $100K+"
    }
];

export default function Process() {
    return (
        <section className="relative py-20 md:py-32 bg-white overflow-hidden">
            {/* Background effects */}
            <div className="absolute inset-0">
                <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-[#252A83]/20 rounded-full blur-[120px] pointer-events-none" />
                <div className="absolute bottom-0 left-1/4 w-[500px] h-[500px] bg-[#AA338B]/20 rounded-full blur-[120px] pointer-events-none" />
            </div>

            <div className="relative max-w-7xl mx-auto px-4 md:px-6">
                {/* Header */}
                <div className="max-w-4xl mx-auto text-center mb-16">
                    <h2 className="text-4xl md:text-6xl font-extrabold text-white mb-6 tracking-tight leading-tight">
                        The Algorithmic Way To Trade That Generates{' '}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#252A83] to-[#AA338B]">
                            $2-5K+ Monthly
                        </span>
                        {' '}Trading Forex
                    </h2>
                    <p className="text-xl text-gray-700 leading-relaxed mb-8">
                        Want to get funded and stay funded so you can withdraw profits and scale your capital?
                    </p>
                    <p className="text-lg text-gray-600 leading-relaxed max-w-3xl mx-auto">
                        Without studying charts all night, failing prop challenges, or blowing accounts. Most traders are stuck in 'challenge mode' – we provide the complete solution.
                    </p>
                </div>

                {/* 3 Step Process */}
                <div className="mb-16">
                    <div className="text-center mb-12">
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#252A83]/30 bg-[#252A83]/5 backdrop-blur-sm mb-4">
                            <span className="text-sm font-bold text-[#252A83] tracking-wide uppercase">
                                Our Proven System
                            </span>
                        </div>
                        <h3 className="text-3xl md:text-5xl font-bold text-black">
                            3 Steps to Consistent Profits
                        </h3>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                        {steps.map((item, index) => (
                            <div key={index} className="group relative">
                                {/* Connection line */}
                                {index < steps.length - 1 && (
                                    <div className="hidden md:block absolute top-24 left-[60%] w-[80%] h-0.5 bg-gradient-to-r from-[#252A83] to-[#AA338B] opacity-30" />
                                )}

                                <div className="relative h-full bg-gradient-to-br from-[#252A83]/10 to-[#AA338B]/10 backdrop-blur-sm border-2 border-[#252A83]/30 rounded-3xl p-8 hover:border-[#AA338B]/50 transition-all duration-300">
                                    {/* Step number */}
                                    <div className="absolute -top-4 -right-4 w-16 h-16 rounded-2xl bg-gradient-to-br from-[#252A83] to-[#AA338B] flex items-center justify-center text-2xl font-black text-white shadow-lg">
                                        {item.step}
                                    </div>

                                    {/* Icon */}
                                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#252A83] to-[#AA338B] flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform">
                                        {item.icon}
                                    </div>

                                    {/* Content */}
                                    <h4 className="text-2xl font-bold text-white mb-4">{item.title}</h4>
                                    <p className="text-gray-700 leading-relaxed mb-4">{item.description}</p>

                                    {/* Highlight */}
                                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/50 border border-[#AA338B]/30">
                                        <CheckCircle2 className="w-4 h-4 text-[#AA338B]" />
                                        <span className="text-sm font-bold text-black">{item.highlight}</span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Results Statement */}
                <div className="max-w-4xl mx-auto text-center">
                    <div className="relative bg-gradient-to-r from-[#252A83]/20 to-[#AA338B]/20 backdrop-blur-sm border border-[#252A83]/30 rounded-3xl p-8 md:p-12">
                        <div className="absolute inset-0 bg-gradient-to-r from-[#252A83]/10 to-[#AA338B]/10 rounded-3xl blur-xl" />
                        <div className="relative">
                            <p className="text-2xl md:text-3xl font-bold text-white mb-6 leading-relaxed">
                                Repeat steps 1-3 and watch your growth compound to{' '}
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#252A83] to-[#AA338B]">
                                    $100K+ in under 12 months
                                </span>
                                {' '}through systematic consistency and sensible risk management.
                            </p>
                            <p className="text-lg text-gray-700 mb-8">
                                While systematically scaling your Prop Trading Capital across multiple funded accounts.
                            </p>
                            <Link
                                href="#apply"
                                className="inline-flex items-center gap-2 px-8 py-4 text-lg font-black text-white rounded-full bg-gradient-to-r from-[#252A83] to-[#AA338B] hover:scale-105 transition-all shadow-lg hover:shadow-[#AA338B]/50"
                            >
                                <span>START YOUR JOURNEY</span>
                                <TrendingUp className="w-5 h-5" />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
