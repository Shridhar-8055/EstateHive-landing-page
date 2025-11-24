'use client';

import { Quote, Star, TrendingUp } from 'lucide-react';
import { useState } from 'react';

const testimonials = [
    {
        name: "Marcus T.",
        role: "Funded Trader",
        image: "M",
        profit: "$14,200",
        timeframe: "Monthly",
        rating: 5,
        quote: "QuantumAlgo completely changed my trading. I went from blowing accounts to consistent withdrawals. The automated portfolio approach means I'm not glued to screens anymore.",
        highlight: "From zero to $14K monthly"
    },
    {
        name: "Sarah K.",
        role: "Prop Desk Manager",
        image: "S",
        profit: "$48,500",
        timeframe: "Quarterly",
        rating: 5,
        quote: "Managing multiple funded accounts was overwhelming until QuantumAlgo. The diversified strategies handle all market conditions. We've scaled to 6 figures consistently.",
        highlight: "Scaled to 6-figure profits"
    },
    {
        name: "David L.",
        role: "Ex-Manual Trader",
        image: "D",
        profit: "$8,900",
        timeframe: "Monthly",
        rating: 5,
        quote: "After 3 years of manual trading losses, QuantumAlgo's systematic approach was a revelation. The education and support are unmatched. Finally making real money in forex.",
        highlight: "Turned years of losses into wins"
    },
    {
        name: "Alex P.",
        role: "Full-Time Algo Trader",
        image: "A",
        profit: "$22,100",
        timeframe: "Monthly",
        rating: 5,
        quote: "The 'Swiss Army Knife' description is perfect. Whether markets trend or range, the algos adapt. My funded accounts survive news events that would've destroyed manual trading.",
        highlight: "Survived major news events"
    }
];

export default function Testimonials() {
    const [activeIndex, setActiveIndex] = useState(0);

    return (
        <section className="relative py-20 md:py-32 bg-gradient-to-b from-[#060606] to-[#0a0a0a] overflow-hidden">
            {/* Background effects */}
            <div className="absolute inset-0">
                <div className="absolute top-1/3 left-1/4 w-[500px] h-[500px] bg-[#252A83]/10 rounded-full blur-[120px] pointer-events-none animate-float" />
                <div className="absolute bottom-1/3 right-1/4 w-[500px] h-[500px] bg-[#AA338B]/10 rounded-full blur-[120px] pointer-events-none animate-float" style={{ animationDelay: '3s' }} />
            </div>

            <div className="relative max-w-7xl mx-auto px-4 md:px-6">
                {/* Header */}
                <div className="text-center mb-16">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#AA338B]/30 bg-[#AA338B]/5 backdrop-blur-sm mb-6">
                        <Star className="w-4 h-4 text-[#AA338B] fill-[#AA338B]" />
                        <span className="text-sm font-bold text-[#AA338B] tracking-wide uppercase">
                            Success Stories
                        </span>
                    </div>
                    <h2 className="text-4xl md:text-6xl font-extrabold text-white mb-6 tracking-tight">
                        Join Traders Achieving{' '}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#252A83] to-[#AA338B]">
                            Consistent 5-Figure
                        </span>
                        {' '}Months
                    </h2>
                    <p className="text-xl text-gray-700 max-w-3xl mx-auto">
                        Real traders, real results, real withdrawals. See what's possible with QuantumAlgo.
                    </p>
                </div>

                {/* Main Featured Testimonial */}
                <div className="max-w-5xl mx-auto mb-12">
                    <div className="relative bg-gradient-to-br from-[#252A83]/20 to-[#AA338B]/20 backdrop-blur-sm border-2 border-[#252A83]/30 rounded-3xl p-8 md:p-12">
                        <div className="absolute -top-6 -left-6 w-20 h-20 rounded-2xl bg-gradient-to-br from-[#252A83] to-[#AA338B] flex items-center justify-center shadow-2xl">
                            <Quote className="w-10 h-10 text-black" />
                        </div>

                        <div className="grid md:grid-cols-3 gap-8 items-center mb-8">
                            <div className="flex flex-col items-center md:items-start gap-4">
                                <div className="w-24 h-24 rounded-2xl bg-gradient-to-br from-[#252A83] to-[#AA338B] flex items-center justify-center text-4xl font-black text-white shadow-lg">
                                    {testimonials[activeIndex].image}
                                </div>
                                <div className="text-center md:text-left">
                                    <h3 className="text-2xl font-bold text-white mb-1">{testimonials[activeIndex].name}</h3>
                                    <p className="text-gray-600 mb-2">{testimonials[activeIndex].role}</p>
                                    <div className="flex gap-1 justify-center md:justify-start">
                                        {[...Array(testimonials[activeIndex].rating)].map((_, i) => (
                                            <Star key={i} className="w-5 h-5 text-[#AA338B] fill-[#AA338B]" />
                                        ))}
                                    </div>
                                </div>
                            </div>

                            <div className="md:col-span-2">
                                <div className="flex items-center gap-4 mb-6">
                                    <div className="flex-1 bg-white/50 border border-[#252A83]/30 rounded-xl px-4 py-3">
                                        <div className="text-sm text-gray-600 mb-1">Profit</div>
                                        <div className="text-2xl font-black text-transparent bg-clip-text bg-gradient-to-r from-[#252A83] to-[#AA338B]">
                                            {testimonials[activeIndex].profit}
                                        </div>
                                    </div>
                                    <div className="flex-1 bg-white/50 border border-[#AA338B]/30 rounded-xl px-4 py-3">
                                        <div className="text-sm text-gray-600 mb-1">Timeframe</div>
                                        <div className="text-2xl font-black text-black">
                                            {testimonials[activeIndex].timeframe}
                                        </div>
                                    </div>
                                </div>

                                <blockquote className="text-xl text-gray-700 leading-relaxed mb-4 italic">
                                    "{testimonials[activeIndex].quote}"
                                </blockquote>

                                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#252A83]/20 border border-[#AA338B]/30">
                                    <TrendingUp className="w-4 h-4 text-[#AA338B]" />
                                    <span className="text-sm font-bold text-black">{testimonials[activeIndex].highlight}</span>
                                </div>
                            </div>
                        </div>

                        {/* Testimonial Navigation */}
                        <div className="flex justify-center gap-3">
                            {testimonials.map((_, index) => (
                                <button
                                    key={index}
                                    onClick={() => setActiveIndex(index)}
                                    className={`w-3 h-3 rounded-full transition-all ${
                                        index === activeIndex
                                            ? 'w-12 bg-gradient-to-r from-[#252A83] to-[#AA338B]'
                                            : 'bg-gray-600 hover:bg-gray-500'
                                    }`}
                                    aria-label={`View testimonial ${index + 1}`}
                                />
                            ))}
                        </div>
                    </div>
                </div>

                {/* Additional Testimonials Grid */}
                <div className="grid md:grid-cols-3 gap-6">
                    {testimonials.slice(1).map((testimonial, index) => (
                        <div
                            key={index}
                            className="bg-gradient-to-br from-[#252A83]/5 to-[#AA338B]/5 backdrop-blur-sm border border-[#252A83]/30 rounded-2xl p-6 hover:border-[#AA338B]/50 transition-all hover:scale-105"
                        >
                            <div className="flex items-center gap-3 mb-4">
                                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#252A83] to-[#AA338B] flex items-center justify-center text-xl font-black text-black">
                                    {testimonial.image}
                                </div>
                                <div>
                                    <h4 className="text-lg font-bold text-black">{testimonial.name}</h4>
                                    <p className="text-sm text-gray-600">{testimonial.role}</p>
                                </div>
                            </div>

                            <div className="flex gap-1 mb-4">
                                {[...Array(testimonial.rating)].map((_, i) => (
                                    <Star key={i} className="w-4 h-4 text-[#AA338B] fill-[#AA338B]" />
                                ))}
                            </div>

                            <p className="text-gray-600 text-sm leading-relaxed mb-4">"{testimonial.quote.slice(0, 120)}..."</p>

                            <div className="flex items-center justify-between pt-4 border-t border-[#252A83]/30">
                                <span className="text-2xl font-black text-transparent bg-clip-text bg-gradient-to-r from-[#252A83] to-[#AA338B]">
                                    {testimonial.profit}
                                </span>
                                <span className="text-sm text-gray-500">{testimonial.timeframe}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
