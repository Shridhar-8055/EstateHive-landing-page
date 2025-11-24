'use client';

import Link from 'next/link';
import { Sparkles } from 'lucide-react';

export default function Header() {
    return (
        <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-xl border-b border-[#252A83]/30">
            <div className="flex items-center justify-between px-4 md:px-6 py-4 max-w-7xl mx-auto">
                <div className="flex items-center gap-2">
                    <Link href="/" className="flex items-center gap-2 group">
                        <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#252A83] to-[#AA338B] flex items-center justify-center shadow-lg group-hover:shadow-[#AA338B]/50 transition-all">
                            <Sparkles className="w-5 h-5 text-white" />
                        </div>
                        <span className="text-xl md:text-2xl font-black tracking-tight text-black">
                            QUANTUM ALGO
                        </span>
                    </Link>
                </div>

                {/* Desktop Navigation */}
                <nav className="hidden md:flex items-center gap-8">
                    <Link
                        href="#features"
                        className="text-sm font-semibold text-gray-700 hover:text-[#AA338B] transition-colors relative group"
                    >
                        Features
                        <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-[#252A83] to-[#AA338B] group-hover:w-full transition-all duration-300" />
                    </Link>
                    <Link
                        href="#about"
                        className="text-sm font-semibold text-gray-700 hover:text-[#AA338B] transition-colors relative group"
                    >
                        About
                        <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-[#252A83] to-[#AA338B] group-hover:w-full transition-all duration-300" />
                    </Link>
                </nav>

                {/* Apply Button - Visible on all screens */}
                <div className="flex items-center gap-4">
                    <Link
                        href="#apply"
                        className="group relative px-5 py-2.5 md:px-7 md:py-3 text-xs md:text-sm font-black text-white rounded-full overflow-hidden transition-all hover:scale-105 whitespace-nowrap"
                    >
                        <div className="absolute inset-0 bg-gradient-to-r from-[#252A83] to-[#AA338B]" />
                        <div className="absolute inset-0 bg-gradient-to-r from-[#252A83] to-[#AA338B] opacity-0 group-hover:opacity-100 blur-md transition-opacity" />
                        <span className="relative z-10">GET FUNDED</span>
                    </Link>
                </div>
            </div>
        </header>
    );
}
