import Link from 'next/link';
import { Twitter, Linkedin, Github, Sparkles, Mail } from 'lucide-react';

export default function Footer() {
    return (
        <footer className="relative py-16 bg-white border-t border-[#252A83]/30 overflow-hidden">
            {/* Background gradient */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[200px] bg-gradient-to-b from-[#252A83]/10 to-transparent blur-3xl pointer-events-none" />

            <div className="relative max-w-7xl mx-auto px-4 md:px-6">
                <div className="grid md:grid-cols-3 gap-12 mb-12">
                    {/* Brand Section */}
                    <div className="text-center md:text-left">
                        <div className="flex items-center gap-2 mb-4 justify-center md:justify-start">
                            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#252A83] to-[#AA338B] flex items-center justify-center shadow-lg">
                                <Sparkles className="w-6 h-6 text-black" />
                            </div>
                            <h3 className="text-2xl font-black text-white tracking-tight">QUANTUM ALGO</h3>
                        </div>
                        <p className="text-gray-600 text-sm leading-relaxed mb-4">
                            Precision automation built for currency traders who demand excellence.
                        </p>
                        <p className="text-gray-500 text-xs">
                            © {new Date().getFullYear()} Quantum Algo. All rights reserved.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div className="text-center md:text-left">
                        <h4 className="text-white font-bold mb-4 text-sm uppercase tracking-wider">Quick Links</h4>
                        <nav className="flex flex-col gap-3">
                            <Link href="#features" className="text-gray-600 hover:text-[#AA338B] transition-colors text-sm">
                                Features
                            </Link>
                            <Link href="#about" className="text-gray-600 hover:text-[#AA338B] transition-colors text-sm">
                                About
                            </Link>
                            <Link href="#apply" className="text-gray-600 hover:text-[#AA338B] transition-colors text-sm">
                                Get Funded
                            </Link>
                        </nav>
                    </div>

                    {/* Contact & Social */}
                    <div className="text-center md:text-left">
                        <h4 className="text-white font-bold mb-4 text-sm uppercase tracking-wider">Connect With Us</h4>
                        <div className="flex items-center gap-4 mb-6 justify-center md:justify-start">
                            <Link
                                href="#"
                                className="w-10 h-10 rounded-lg bg-[#252A83]/20 border border-[#252A83]/30 flex items-center justify-center text-gray-600 hover:text-white hover:bg-[#252A83]/40 hover:border-[#AA338B]/50 transition-all"
                            >
                                <Twitter className="w-5 h-5" />
                            </Link>
                            <Link
                                href="#"
                                className="w-10 h-10 rounded-lg bg-[#252A83]/20 border border-[#252A83]/30 flex items-center justify-center text-gray-600 hover:text-white hover:bg-[#252A83]/40 hover:border-[#AA338B]/50 transition-all"
                            >
                                <Linkedin className="w-5 h-5" />
                            </Link>
                            <Link
                                href="#"
                                className="w-10 h-10 rounded-lg bg-[#252A83]/20 border border-[#252A83]/30 flex items-center justify-center text-gray-600 hover:text-white hover:bg-[#252A83]/40 hover:border-[#AA338B]/50 transition-all"
                            >
                                <Github className="w-5 h-5" />
                            </Link>
                            <Link
                                href="mailto:contact@quantumalgo.com"
                                className="w-10 h-10 rounded-lg bg-[#252A83]/20 border border-[#252A83]/30 flex items-center justify-center text-gray-600 hover:text-white hover:bg-[#252A83]/40 hover:border-[#AA338B]/50 transition-all"
                            >
                                <Mail className="w-5 h-5" />
                            </Link>
                        </div>
                        <p className="text-gray-600 text-xs">
                            Join our community of 500+ successful traders
                        </p>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="pt-8 border-t border-[#252A83]/20 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-500">
                    <div className="flex gap-6">
                        <Link href="#" className="hover:text-[#AA338B] transition-colors">Privacy Policy</Link>
                        <Link href="#" className="hover:text-[#AA338B] transition-colors">Terms of Service</Link>
                        <Link href="#" className="hover:text-[#AA338B] transition-colors">Disclaimer</Link>
                    </div>
                    <div className="text-center">
                        Made with precision for traders worldwide
                    </div>
                </div>
            </div>
        </footer>
    );
}
