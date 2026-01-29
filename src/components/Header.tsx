'use client';

import Link from 'next/link';

export default function Header() {
    return (
        <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-[#1B1B59]/10">
            <div className="max-w-7xl mx-auto px-4 md:px-6">
                <div className="flex items-center justify-between h-16">
                    {/* Logo */}
                    <Link href="/" className="flex items-center gap-2">
                        <span className="text-2xl font-black text-[#1B1B59] tracking-tight">
                            P<span className="text-[#1B1B59]">O</span>W
                        </span>
                    </Link>

                    {/* CTA Button */}
                    <Link
                        href="#apply"
                        className="px-6 py-2 bg-transparent border-2 border-[#1B1B59] text-[#1B1B59] font-bold rounded-full hover:bg-[#1B1B59] hover:text-black transition-all text-sm uppercase tracking-wider"
                    >
                        Apply Now
                    </Link>
                </div>
            </div>
        </header>
    );
}
