'use client';

import { Bot, Layers, TrendingUp, Moon, Shield, Briefcase, Settings, BarChart3 } from 'lucide-react';
import Link from 'next/link';

const benefits = [
    {
        icon: <Layers className="w-8 h-8" />,
        title: "Multi-Strategy 'Swiss Army Knife'",
        description: "Unlike single-strategy EAs that fail when markets change, QuantumAlgo adapts. Trending or ranging, high-impact news - we dominate in ALL market conditions.",
        badge: "Adaptive"
    },
    {
        icon: <Bot className="w-8 h-8" />,
        title: "The NEW Way To Trade With Algos",
        description: "Most EAs stop working after weeks because markets change. We show you how to overcome this with systematic optimization and portfolio diversification.",
        badge: "Revolutionary"
    },
    {
        icon: <Shield className="w-8 h-8" />,
        title: "20+ Years Combined Experience",
        description: "Don't get ghosted by 'gurus' – get 24/7 support from pro traders. Avoid beginner mistakes that could cost thousands with our proven guidance.",
        badge: "Expert Support"
    },
    {
        icon: <Moon className="w-8 h-8" />,
        title: "Trade On Autopilot While You Sleep",
        description: "Wake up rested with profitable trades made automatically. No chart staring, no sleepless nights - just consistent algorithmic execution.",
        badge: "Automated"
    },
    {
        icon: <Briefcase className="w-8 h-8" />,
        title: "Get Funded Account - Guaranteed",
        description: "Don't waste $1,000s on failed prop challenges or risk your money first. We pass it for you with a $50K funded account in just 30 days.",
        badge: "Guaranteed"
    },
    {
        icon: <TrendingUp className="w-8 h-8" />,
        title: "Stay Ahead Of Changing Markets",
        description: "Cover all market conditions simultaneously. Diversify strategies to adapt as markets evolve, moving systematically with optimization.",
        badge: "Dynamic"
    },
    {
        icon: <Settings className="w-8 h-8" />,
        title: "Proprietary Portfolio Builder",
        description: "Our exclusive software helps review data for better decision-making. Set up diversified portfolios backed by data, not guesswork.",
        badge: "Exclusive"
    },
    {
        icon: <BarChart3 className="w-8 h-8" />,
        title: "Low-Risk, High Consistency",
        description: "Achieve 3-5% monthly returns with 1-8% drawdowns. Risk management built-in to protect capital while maximizing steady growth.",
        badge: "Proven"
    }
];

export default function WhyQuantum() {
    return (
        <section className="relative py-20 md:py-32 bg-white overflow-hidden">
            {/* Background effects */}
            <div className="absolute inset-0">
                <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-[#252A83]/15 rounded-full blur-[120px] pointer-events-none" />
                <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-[#AA338B]/15 rounded-full blur-[120px] pointer-events-none" />
                <div className="absolute inset-0 bg-[linear-gradient(rgba(37,42,131,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(37,42,131,0.05)_1px,transparent_1px)] bg-[size:50px_50px]" />
            </div>

            <div className="relative max-w-7xl mx-auto px-4 md:px-6">
                {/* Header */}
                <div className="text-center mb-16 max-w-4xl mx-auto">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#252A83]/30 bg-[#252A83]/5 backdrop-blur-sm mb-6">
                        <Bot className="w-4 h-4 text-[#252A83]" />
                        <span className="text-sm font-bold text-[#252A83] tracking-wide uppercase">
                            Complete Trading System
                        </span>
                    </div>
                    <h2 className="text-4xl md:text-6xl font-extrabold text-white mb-6 tracking-tight leading-tight">
                        Why This Forex{' '}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#252A83] to-[#AA338B]">
                            'Swiss Army Knife'
                        </span>
                        {' '}Is The ONLY System You'll Ever Need
                    </h2>
                    <p className="text-xl text-gray-700 leading-relaxed">
                        So many traders try algo trading with EAs and fail... That's because EAs are not 'set and forget'.
                        Markets change, and we must move with them.
                    </p>
                </div>

                {/* Benefits Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
                    {benefits.map((benefit, index) => (
                        <div
                            key={index}
                            className="group relative bg-gradient-to-br from-[#252A83]/5 to-[#AA338B]/5 backdrop-blur-sm border border-[#252A83]/30 rounded-2xl p-6 hover:border-[#AA338B]/50 transition-all duration-300 hover:scale-105"
                        >
                            {/* Badge */}
                            <div className="absolute -top-3 -right-3 px-3 py-1 rounded-full bg-gradient-to-r from-[#252A83] to-[#AA338B] text-xs font-black text-white shadow-lg">
                                {benefit.badge}
                            </div>

                            {/* Icon */}
                            <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[#252A83] to-[#AA338B] flex items-center justify-center text-white mb-4 group-hover:scale-110 transition-transform shadow-lg">
                                {benefit.icon}
                            </div>

                            {/* Content */}
                            <h3 className="text-lg font-bold text-white mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-[#252A83] group-hover:to-[#AA338B] transition-all">
                                {benefit.title}
                            </h3>
                            <p className="text-sm text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors">
                                {benefit.description}
                            </p>
                        </div>
                    ))}
                </div>

                {/* Call-out Box */}
                <div className="max-w-5xl mx-auto">
                    <div className="relative bg-gradient-to-r from-[#252A83]/20 to-[#AA338B]/20 backdrop-blur-sm border-2 border-[#252A83]/30 rounded-3xl p-8 md:p-12">
                        <div className="absolute inset-0 bg-gradient-to-r from-[#252A83]/10 to-[#AA338B]/10 rounded-3xl blur-2xl" />

                        <div className="relative text-center">
                            <h3 className="text-3xl md:text-4xl font-extrabold text-white mb-6 leading-tight">
                                QuantumAlgo is an incredibly powerful tool...
                            </h3>
                            <p className="text-xl text-gray-700 mb-6 leading-relaxed">
                                But only if you know how to use it. Having a tool is one thing - <span className="text-white font-bold">having the skills is another</span>.
                            </p>
                            <p className="text-lg text-gray-600 mb-8">
                                We give you industry-leading guidance, support, and training materials to master the markets
                                and become a wildly successful trader. Not just the algo - the complete education.
                            </p>

                            <Link
                                href="#apply"
                                className="inline-flex items-center gap-3 px-10 py-5 text-xl font-black text-white rounded-full bg-gradient-to-r from-[#252A83] to-[#AA338B] hover:scale-105 transition-all shadow-2xl hover:shadow-[#AA338B]/50"
                            >
                                <span>GET STARTED NOW</span>
                                <TrendingUp className="w-6 h-6" />
                            </Link>

                            {/* Mini Stats */}
                            <div className="grid grid-cols-3 gap-6 mt-12 pt-12 border-t border-[#252A83]/30">
                                <div>
                                    <div className="text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-[#252A83] to-[#AA338B] mb-2">
                                        $180M+
                                    </div>
                                    <div className="text-sm text-gray-600 font-medium">Funding Secured</div>
                                </div>
                                <div>
                                    <div className="text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-[#252A83] to-[#AA338B] mb-2">
                                        3-5%
                                    </div>
                                    <div className="text-sm text-gray-600 font-medium">Monthly Returns</div>
                                </div>
                                <div>
                                    <div className="text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-[#252A83] to-[#AA338B] mb-2">
                                        1-8%
                                    </div>
                                    <div className="text-sm text-gray-600 font-medium">Max Drawdown</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
