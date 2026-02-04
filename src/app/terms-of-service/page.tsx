'use client';

import Link from 'next/link';

export default function TermsOfService() {
    return (
        <div className="min-h-screen bg-white">
            {/* Header */}
            <header className="bg-white border-b border-gray-200 py-4">
                <div className="max-w-4xl mx-auto px-4 md:px-8">
                    <Link href="/" className="inline-block">
                        <img
                            src="/EH_logo_without property@300x-8.png"
                            alt="Estate Hive"
                            style={{ height: '28px', width: 'auto' }}
                            className="sm:!h-[32px]"
                        />
                    </Link>
                </div>
            </header>

            {/* Content */}
            <main className="max-w-4xl mx-auto px-4 md:px-8 py-12">
                <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">Terms of Service</h1>

                <p className="text-gray-600 mb-8">
                    Last updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
                </p>

                <div className="prose prose-gray max-w-none">
                    <section className="mb-8">
                        <h2 className="text-xl font-semibold text-gray-900 mb-4">1. Acceptance of Terms</h2>
                        <p className="text-gray-600 mb-4">
                            Welcome to Estate Hive. By accessing or using our website and services, you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our services.
                        </p>
                        <p className="text-gray-600">
                            These terms apply to all visitors, users, and others who access or use our real estate services, including property listings, consultations, and investment advisory services.
                        </p>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-xl font-semibold text-gray-900 mb-4">2. Our Services</h2>
                        <p className="text-gray-600 mb-4">
                            Estate Hive provides real estate brokerage and consultancy services in the United Arab Emirates. Our services include but are not limited to:
                        </p>
                        <ul className="list-disc list-inside text-gray-600 space-y-2 ml-4">
                            <li>Property sales and purchase assistance</li>
                            <li>Real estate investment consultancy</li>
                            <li>Property valuation guidance</li>
                            <li>Market analysis and insights</li>
                            <li>Off-plan property sales</li>
                            <li>Secondary market property transactions</li>
                        </ul>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-xl font-semibold text-gray-900 mb-4">3. User Responsibilities</h2>
                        <p className="text-gray-600 mb-4">
                            When using our services, you agree to:
                        </p>
                        <ul className="list-disc list-inside text-gray-600 space-y-2 ml-4">
                            <li>Provide accurate and complete information when contacting us or filling out forms</li>
                            <li>Not use our services for any unlawful purpose</li>
                            <li>Not attempt to interfere with the proper functioning of our website</li>
                            <li>Respect the intellectual property rights of Estate Hive and third parties</li>
                        </ul>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-xl font-semibold text-gray-900 mb-4">4. Property Information Disclaimer</h2>
                        <p className="text-gray-600 mb-4">
                            While we strive to provide accurate and up-to-date property information, Estate Hive does not guarantee the accuracy, completeness, or reliability of any property listings, prices, or availability shown on our website or communicated through our services.
                        </p>
                        <p className="text-gray-600">
                            Property prices, availability, and specifications are subject to change without notice. All property transactions are subject to verification and final confirmation by the relevant developers or property owners.
                        </p>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-xl font-semibold text-gray-900 mb-4">5. Investment Risks</h2>
                        <p className="text-gray-600 mb-4">
                            Real estate investments involve inherent risks. Past performance is not indicative of future results. The value of properties can go down as well as up, and you may not recover the amount invested.
                        </p>
                        <p className="text-gray-600">
                            Any projections, rental yields, or return estimates provided are for informational purposes only and should not be considered as guaranteed returns. We strongly recommend consulting with independent financial advisors before making any investment decisions.
                        </p>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-xl font-semibold text-gray-900 mb-4">6. Intellectual Property</h2>
                        <p className="text-gray-600">
                            All content on this website, including but not limited to text, graphics, logos, images, and software, is the property of Estate Hive or its content suppliers and is protected by UAE and international copyright laws. You may not reproduce, distribute, or create derivative works from any content without our express written permission.
                        </p>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-xl font-semibold text-gray-900 mb-4">7. Third-Party Links</h2>
                        <p className="text-gray-600">
                            Our website may contain links to third-party websites or services that are not owned or controlled by Estate Hive. We have no control over, and assume no responsibility for, the content, privacy policies, or practices of any third-party websites or services.
                        </p>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-xl font-semibold text-gray-900 mb-4">8. Limitation of Liability</h2>
                        <p className="text-gray-600">
                            To the maximum extent permitted by applicable law, Estate Hive shall not be liable for any indirect, incidental, special, consequential, or punitive damages, or any loss of profits or revenues, whether incurred directly or indirectly, or any loss of data, use, goodwill, or other intangible losses resulting from your use of our services.
                        </p>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-xl font-semibold text-gray-900 mb-4">9. Governing Law</h2>
                        <p className="text-gray-600">
                            These Terms of Service shall be governed by and construed in accordance with the laws of the United Arab Emirates. Any disputes arising from or relating to these terms shall be subject to the exclusive jurisdiction of the courts of Dubai, UAE.
                        </p>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-xl font-semibold text-gray-900 mb-4">10. Changes to Terms</h2>
                        <p className="text-gray-600">
                            We reserve the right to modify or replace these Terms of Service at any time. If a revision is material, we will provide at least 30 days' notice prior to any new terms taking effect. What constitutes a material change will be determined at our sole discretion.
                        </p>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-xl font-semibold text-gray-900 mb-4">11. Contact Us</h2>
                        <p className="text-gray-600 mb-4">
                            If you have any questions about these Terms of Service, please contact us:
                        </p>
                        <ul className="list-none text-gray-600 space-y-2">
                            <li><strong>Email:</strong> info@estatehive.ae</li>
                            <li><strong>Website:</strong> www.estatehive.ae</li>
                        </ul>
                    </section>
                </div>

                {/* Back to Home */}
                <div className="mt-12 pt-8 border-t border-gray-200">
                    <Link
                        href="/"
                        className="inline-flex items-center text-[#C5A572] hover:text-[#B08D57] transition-colors"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5 mr-2"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                        >
                            <path
                                fillRule="evenodd"
                                d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z"
                                clipRule="evenodd"
                            />
                        </svg>
                        Back to Home
                    </Link>
                </div>
            </main>

            {/* Footer */}
            <footer className="bg-white py-8 border-t border-gray-200 mt-12">
                <div className="max-w-4xl mx-auto px-4 md:px-8 text-center">
                    <p className="text-gray-600 text-sm">
                        &copy; {new Date().getFullYear()} Estate Hive. All rights reserved.
                    </p>
                </div>
            </footer>
        </div>
    );
}
