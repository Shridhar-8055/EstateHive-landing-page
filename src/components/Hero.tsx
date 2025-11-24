'use client';

import { Star, Play, TrendingUp, Zap, Shield } from 'lucide-react';
import Link from 'next/link';
import { useEffect, useState } from 'react';

export default function Hero() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        setIsVisible(true);
    }, []);

    return (
        <section className="relative flex flex-col items-center justify-start min-h-screen px-4 pt-28 pb-12 md:pt-32 md:pb-20 overflow-hidden text-center bg-white">
            {/* Animated Background Effects */}
            <div className="absolute inset-0 overflow-hidden">
                {/* Primary gradient orb */}
                <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-[#252A83]/30 rounded-full blur-[120px] animate-float pointer-events-none" />
                {/* Accent gradient orb */}
                <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-[#AA338B]/20 rounded-full blur-[120px] animate-float pointer-events-none" style={{ animationDelay: '2s' }} />
                {/* Grid overlay */}
                <div className="absolute inset-0 bg-[linear-gradient(rgba(37,42,131,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(37,42,131,0.1)_1px,transparent_1px)] bg-[size:50px_50px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,#000_70%,transparent_110%)]" />
            </div>

            <div className={`relative z-10 w-full max-w-6xl mx-auto flex flex-col items-center transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>

                {/* Top Badge */}
                <div className="mb-6 md:mb-8 inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#252A83]/50 bg-[#252A83]/10 backdrop-blur-sm">
                    <Zap className="w-4 h-4 text-[#AA338B]" />
                    <span className="text-xs md:text-sm font-semibold text-white tracking-wide uppercase">
                        For Currency Traders Who Demand Precision
                    </span>
                    <TrendingUp className="w-4 h-4 text-[#AA338B]" />
                </div>

                {/* Main Headline - Ultra Bold */}
                <h1 className="mb-6 md:mb-8 text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-extrabold tracking-tight text-white leading-[1.05] px-2 max-w-5xl">
                    Finally, Discover{' '}
                    <span className="relative inline-block">
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#252A83] via-[#AA338B] to-[#252A83] animate-gradient">
                            Precision Trading
                        </span>
                        <div className="absolute -inset-1 bg-gradient-to-r from-[#252A83] via-[#AA338B] to-[#252A83] blur-lg opacity-30 animate-gradient" />
                    </span>
                    {' '}That Actually Works
                </h1>

                {/* Subheadline */}
                <p className="max-w-3xl mx-auto mb-10 md:mb-12 text-lg md:text-2xl text-gray-700 leading-relaxed px-4 font-medium">
                    QuantumAlgo analyses <span className="text-[#AA338B] font-bold">macro trends</span>, <span className="text-[#252A83] font-bold">price action</span>, and liquidity flows in real-time. Deploy disciplined strategies without staring at charts all day.
                </p>

                {/* Video/Demo Section */}
                <div className="relative w-full max-w-5xl aspect-video mb-10 md:mb-12 rounded-3xl overflow-hidden border-2 border-[#252A83]/30 shadow-2xl bg-gradient-to-br from-[#252A83]/20 to-[#AA338B]/20 group cursor-pointer backdrop-blur-sm">
                    {/* Animated border glow */}
                    <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-[#252A83] via-[#AA338B] to-[#252A83] opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl" />

                    {/* Content */}
                    <div className="relative h-full flex items-center justify-center">
                        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_transparent_0%,_#060606_100%)] opacity-60" />

                        {/* Play Button */}
                        <div className="relative w-20 h-20 md:w-28 md:h-28 rounded-full bg-gradient-to-r from-[#252A83] to-[#AA338B] flex items-center justify-center group-hover:scale-110 transition-all duration-300 glow-primary cursor-pointer">
                            <div className="w-[90%] h-[90%] rounded-full bg-white flex items-center justify-center">
                                <Play className="w-8 h-8 md:w-12 md:h-12 text-white fill-white ml-1" />
                            </div>
                        </div>

                        {/* Floating stats */}
                        <div className="absolute top-6 left-6 bg-white/90 backdrop-blur-md border border-[#252A83]/50 rounded-xl px-4 py-3 flex items-center gap-2">
                            <TrendingUp className="w-5 h-5 text-[#AA338B]" />
                            <div className="text-left">
                                <div className="text-xs text-gray-600">Avg. Monthly Return</div>
                                <div className="text-lg font-bold text-black">+24.7%</div>
                            </div>
                        </div>

                        <div className="absolute bottom-6 right-6 bg-white/90 backdrop-blur-md border border-[#AA338B]/50 rounded-xl px-4 py-3 flex items-center gap-2">
                            <Shield className="w-5 h-5 text-[#252A83]" />
                            <div className="text-left">
                                <div className="text-xs text-gray-600">Max Drawdown</div>
                                <div className="text-lg font-bold text-black">-8.3%</div>
                            </div>
                        </div>
                    </div>

                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-[#060606] to-transparent py-6 text-center">
                        <p className="text-white/90 font-bold text-base md:text-xl">Watch Live Trading Performance</p>
                    </div>
                </div>

                {/* CTA Button */}
                <Link
                    href="#apply"
                    className="group relative w-full md:w-auto min-w-[320px] px-10 py-5 md:py-6 text-xl md:text-2xl font-black text-white rounded-full transition-all transform hover:scale-105 mb-8 md:mb-10 text-center overflow-hidden"
                >
                    <div className="absolute inset-0 bg-gradient-to-r from-[#252A83] via-[#AA338B] to-[#252A83] animate-gradient" />
                    <div className="absolute inset-0 bg-gradient-to-r from-[#252A83] via-[#AA338B] to-[#252A83] blur-xl opacity-50 group-hover:opacity-100 transition-opacity glow-accent" />
                    <span className="relative z-10">GET FUNDED NOW</span>
                </Link>

                {/* Social Proof */}
                <div className="flex flex-col items-center gap-4">
                    <div className="flex gap-1">
                        {[1, 2, 3, 4, 5].map((star) => (
                            <Star key={star} className="w-6 h-6 md:w-7 md:h-7 text-[#AA338B] fill-[#AA338B]" />
                        ))}
                    </div>
                    <div className="flex items-center gap-3 text-sm md:text-base">
                        <div className="flex -space-x-3">
                            {[1, 2, 3, 4].map((i) => (
                                <div key={i} className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-gradient-to-br from-[#252A83] to-[#AA338B] border-2 border-[#060606] flex items-center justify-center text-xs font-bold text-black">
                                    {String.fromCharCode(64 + i)}
                                </div>
                            ))}
                        </div>
                        <div className="text-left">
                            <div className="font-black text-white text-lg md:text-xl">4.9/5</div>
                            <div className="text-xs md:text-sm text-gray-600">from <span className="text-[#AA338B] font-bold">500+</span> active traders</div>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
}
