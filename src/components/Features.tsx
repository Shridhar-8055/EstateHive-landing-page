'use client';

import { Shield, Zap, BarChart3, Cpu, Globe, Lock } from 'lucide-react';
import { GlowingEffect } from "@/components/ui/glowing-effect";

const features = [
    {
        icon: <Zap className="h-7 w-7 text-black" />,
        title: "Adaptive Trade Engine",
        description: "React to volatility in milliseconds, not minutes. Our engine adjusts to market speed instantly.",
        gradient: "from-[#252A83] to-[#AA338B]"
    },
    {
        icon: <Cpu className="h-7 w-7 text-black" />,
        title: "Layered Algorithms",
        description: "Adjust lot sizes, entries, and stops as spreads widen or compress, protecting capital in fast-moving sessions.",
        gradient: "from-[#AA338B] to-[#252A83]"
    },
    {
        icon: <Shield className="h-7 w-7 text-black" />,
        title: "Drawdown Shield",
        description: "Risk Guard alerts send instant notifications when equity drawdown thresholds are approached.",
        gradient: "from-[#252A83] to-[#AA338B]"
    },
    {
        icon: <BarChart3 className="h-7 w-7 text-black" />,
        title: "95% Automated Coverage",
        description: "Cover major trading sessions automatically, ensuring you never miss a macro trend or liquidity flow.",
        gradient: "from-[#AA338B] to-[#252A83]"
    },
    {
        icon: <Lock className="h-7 w-7 text-black" />,
        title: "Prop Desk Ready",
        description: "Funded traders and prop desks rely on QuantumAlgo to scale consistent, low-drawdown accounts.",
        gradient: "from-[#252A83] to-[#AA338B]"
    },
    {
        icon: <Globe className="h-7 w-7 text-black" />,
        title: "Macro Trend Analysis",
        description: "Analyses macro trends and price action in real-time to deploy disciplined strategies.",
        gradient: "from-[#AA338B] to-[#252A83]"
    }
];

interface GridItemProps {
    icon: React.ReactNode;
    title: string;
    description: React.ReactNode;
    gradient: string;
}

const GridItem = ({ icon, title, description, gradient }: GridItemProps) => {
    return (
        <div className="group min-h-[16rem] list-none relative">
            <div className="relative h-full rounded-2xl border border-[#252A83]/30 p-[2px] bg-gradient-to-br from-[#252A83]/20 to-[#AA338B]/20 hover:from-[#252A83]/40 hover:to-[#AA338B]/40 transition-all duration-300">
                <GlowingEffect
                    spread={50}
                    glow={true}
                    disabled={false}
                    proximity={72}
                    inactiveZone={0.01}
                    borderWidth={2}
                />
                <div className="relative flex h-full flex-col gap-6 overflow-hidden rounded-2xl bg-white p-7 backdrop-blur-sm">
                    <div className="relative flex flex-1 flex-col gap-4">
                        <div className={`w-fit rounded-xl bg-gradient-to-br ${gradient} p-3 shadow-lg`}>
                            {icon}
                        </div>
                        <div className="space-y-3">
                            <h3 className="text-2xl font-bold text-white tracking-tight group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-[#252A83] group-hover:to-[#AA338B] transition-all duration-300">
                                {title}
                            </h3>
                            <p className="text-base leading-relaxed text-gray-600 group-hover:text-gray-700 transition-colors">
                                {description}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default function Features() {
    return (
        <section id="features" className="relative py-20 md:py-32 bg-white overflow-hidden">
            {/* Background decorations */}
            <div className="absolute top-0 left-1/4 w-[400px] h-[400px] bg-[#252A83]/10 rounded-full blur-[100px] pointer-events-none" />
            <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-[#AA338B]/10 rounded-full blur-[100px] pointer-events-none" />

            <div className="relative max-w-7xl mx-auto px-4 md:px-6">
                <div className="text-center mb-16 md:mb-20">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#AA338B]/30 bg-[#AA338B]/5 backdrop-blur-sm mb-6">
                        <span className="text-sm font-bold text-[#AA338B] tracking-wide uppercase">
                            Powerful Features
                        </span>
                    </div>
                    <h2 className="text-4xl md:text-6xl font-extrabold text-white mb-6 tracking-tight">
                        Why{' '}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#252A83] to-[#AA338B]">
                            Quantum Algo
                        </span>
                        ?
                    </h2>
                    <p className="text-gray-600 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
                        Leveraging cutting-edge technology and adaptive algorithms to deliver superior trading performance with precision and consistency.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                    {features.map((feature, index) => (
                        <GridItem
                            key={index}
                            icon={feature.icon}
                            title={feature.title}
                            description={feature.description}
                            gradient={feature.gradient}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}
