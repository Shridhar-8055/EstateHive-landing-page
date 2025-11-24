'use client';

import { Target, TrendingUp, Users, Award } from 'lucide-react';

const stats = [
    { icon: <Users className="w-6 h-6" />, value: "500+", label: "Active Traders" },
    { icon: <TrendingUp className="w-6 h-6" />, value: "24.7%", label: "Avg Monthly Return" },
    { icon: <Award className="w-6 h-6" />, value: "$50M+", label: "Capital Managed" },
    { icon: <Target className="w-6 h-6" />, value: "95%", label: "Automation Rate" }
];

export default function About() {
    return (
        <section id="about" className="relative py-20 md:py-32 bg-white overflow-hidden">
            {/* Background effects */}
            <div className="absolute inset-0">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-[#252A83]/20 to-[#AA338B]/20 rounded-full blur-[120px] pointer-events-none" />
            </div>

            <div className="relative max-w-6xl mx-auto px-4 md:px-6">
                {/* Header */}
                <div className="text-center mb-16">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#252A83]/30 bg-[#252A83]/5 backdrop-blur-sm mb-6">
                        <span className="text-sm font-bold text-[#252A83] tracking-wide uppercase">
                            About Us
                        </span>
                    </div>
                    <h2 className="text-4xl md:text-6xl font-extrabold text-white mb-6 tracking-tight">
                        Built for{' '}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#252A83] to-[#AA338B]">
                            Disciplined Traders
                        </span>
                    </h2>
                </div>

                {/* Content Grid */}
                <div className="grid md:grid-cols-2 gap-12 mb-16">
                    <div className="space-y-6">
                        <p className="text-xl text-gray-700 leading-relaxed">
                            QuantumAlgo is designed for traders who <span className="text-[#AA338B] font-bold">refuse to stare at charts all day</span>. We analyse macro trends, price action, and liquidity flows in real time, allowing you to deploy disciplined strategies with precision.
                        </p>
                        <p className="text-xl text-gray-700 leading-relaxed">
                            Whether you are a funded trader or managing a prop desk, our <span className="text-[#252A83] font-bold">adaptive trade engine</span> and layered algorithms help you scale consistent, low-drawdown accounts by reacting to volatility in milliseconds.
                        </p>
                    </div>

                    <div className="relative">
                        <div className="absolute inset-0 bg-gradient-to-br from-[#252A83]/20 to-[#AA338B]/20 rounded-3xl blur-xl" />
                        <div className="relative bg-white/80 backdrop-blur-sm border border-[#252A83]/30 rounded-3xl p-8">
                            <h3 className="text-2xl font-bold text-white mb-6">Key Advantages</h3>
                            <ul className="space-y-4">
                                {[
                                    "Real-time macro trend analysis",
                                    "Millisecond volatility reaction",
                                    "Adaptive risk management",
                                    "95% session automation",
                                    "Low-drawdown consistency",
                                    "Prop desk scalability"
                                ].map((item, i) => (
                                    <li key={i} className="flex items-center gap-3 text-gray-700">
                                        <div className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-[#252A83] to-[#AA338B]" />
                                        <span className="text-base">{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Stats Grid */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                    {stats.map((stat, index) => (
                        <div
                            key={index}
                            className="group relative bg-gradient-to-br from-[#252A83]/10 to-[#AA338B]/10 backdrop-blur-sm border border-[#252A83]/30 rounded-2xl p-6 hover:border-[#AA338B]/50 transition-all duration-300"
                        >
                            <div className="flex flex-col items-center text-center gap-3">
                                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#252A83] to-[#AA338B] flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform">
                                    {stat.icon}
                                </div>
                                <div className="text-3xl md:text-4xl font-black text-black">{stat.value}</div>
                                <div className="text-sm text-gray-600 font-medium">{stat.label}</div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
