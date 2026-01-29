'use client';

import Link from 'next/link';

export default function Footer() {
    return (
        <footer className="bg-white py-8 border-t border-gray-200">
            <div className="max-w-4xl mx-auto px-4 md:px-8 text-center">
                {/* Logo */}
                <Link href="/" className="inline-block mb-4">
                    <img
                        src="/EH_logo_without property@300x-8.png"
                        alt="Estate Hive"
                        style={{ height: '28px', width: 'auto' }}
                        className="mx-auto sm:!h-[32px]"
                    />
                </Link>

                {/* Copyright */}
                <p className="text-gray-600 text-sm mb-4">
                    &copy; {new Date().getFullYear()} Estate Hive. All rights reserved.
                </p>

                {/* Links */}
                <div className="flex justify-center gap-6 text-sm text-gray-500">
                    <Link href="#" className="hover:text-[#000000] transition-colors">Privacy Policy</Link>
                    <Link href="#" className="hover:text-[#000000] transition-colors">Terms of Service</Link>
                </div>
            </div>
        </footer>
    );
}
