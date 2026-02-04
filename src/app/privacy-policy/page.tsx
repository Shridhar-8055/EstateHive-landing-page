'use client';

import Link from 'next/link';

export default function PrivacyPolicy() {
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
                <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">Privacy Policy</h1>

                <p className="text-gray-600 mb-8">
                    Last updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
                </p>

                <div className="prose prose-gray max-w-none">
                    <section className="mb-8">
                        <h2 className="text-xl font-semibold text-gray-900 mb-4">1. Introduction</h2>
                        <p className="text-gray-600 mb-4">
                            Estate Hive ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our real estate services.
                        </p>
                        <p className="text-gray-600">
                            Please read this privacy policy carefully. If you do not agree with the terms of this privacy policy, please do not access our website or use our services.
                        </p>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-xl font-semibold text-gray-900 mb-4">2. Information We Collect</h2>
                        <p className="text-gray-600 mb-4">
                            We may collect information about you in a variety of ways. The information we may collect includes:
                        </p>

                        <h3 className="text-lg font-medium text-gray-800 mb-2 mt-4">Personal Data</h3>
                        <p className="text-gray-600 mb-4">
                            When you contact us or fill out forms on our website, we may collect personally identifiable information, such as:
                        </p>
                        <ul className="list-disc list-inside text-gray-600 space-y-2 ml-4 mb-4">
                            <li>Full name</li>
                            <li>Email address</li>
                            <li>Phone number</li>
                            <li>Property preferences and requirements</li>
                            <li>Budget range for property investment</li>
                            <li>Any other information you choose to provide</li>
                        </ul>

                        <h3 className="text-lg font-medium text-gray-800 mb-2 mt-4">Automatically Collected Data</h3>
                        <p className="text-gray-600 mb-4">
                            When you access our website, we may automatically collect certain information, including:
                        </p>
                        <ul className="list-disc list-inside text-gray-600 space-y-2 ml-4">
                            <li>IP address</li>
                            <li>Browser type and version</li>
                            <li>Device type</li>
                            <li>Operating system</li>
                            <li>Pages visited and time spent on pages</li>
                            <li>Referring website addresses</li>
                        </ul>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-xl font-semibold text-gray-900 mb-4">3. How We Use Your Information</h2>
                        <p className="text-gray-600 mb-4">
                            We use the information we collect for various purposes, including:
                        </p>
                        <ul className="list-disc list-inside text-gray-600 space-y-2 ml-4">
                            <li>To provide and maintain our real estate services</li>
                            <li>To respond to your inquiries and fulfill your requests</li>
                            <li>To send you property recommendations matching your preferences</li>
                            <li>To communicate with you about our services, updates, and promotions</li>
                            <li>To improve our website and services</li>
                            <li>To analyze usage patterns and trends</li>
                            <li>To comply with legal obligations</li>
                            <li>To protect against fraudulent or illegal activity</li>
                        </ul>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-xl font-semibold text-gray-900 mb-4">4. Cookies and Tracking Technologies</h2>
                        <p className="text-gray-600 mb-4">
                            We may use cookies, web beacons, and other tracking technologies to collect information about your browsing activities. Cookies are small data files stored on your device that help us improve your experience on our website.
                        </p>
                        <p className="text-gray-600 mb-4">
                            Types of cookies we use:
                        </p>
                        <ul className="list-disc list-inside text-gray-600 space-y-2 ml-4">
                            <li><strong>Essential Cookies:</strong> Required for the website to function properly</li>
                            <li><strong>Analytics Cookies:</strong> Help us understand how visitors interact with our website</li>
                            <li><strong>Marketing Cookies:</strong> Used to deliver relevant advertisements</li>
                        </ul>
                        <p className="text-gray-600 mt-4">
                            You can control cookies through your browser settings. However, disabling certain cookies may limit your ability to use some features of our website.
                        </p>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-xl font-semibold text-gray-900 mb-4">5. Sharing Your Information</h2>
                        <p className="text-gray-600 mb-4">
                            We may share your information in the following circumstances:
                        </p>
                        <ul className="list-disc list-inside text-gray-600 space-y-2 ml-4">
                            <li><strong>With Property Developers:</strong> To facilitate property transactions and inquiries</li>
                            <li><strong>With Service Providers:</strong> Third parties who perform services on our behalf (e.g., hosting, analytics)</li>
                            <li><strong>For Legal Purposes:</strong> When required by law or to protect our rights</li>
                            <li><strong>Business Transfers:</strong> In connection with a merger, acquisition, or sale of assets</li>
                        </ul>
                        <p className="text-gray-600 mt-4">
                            We do not sell your personal information to third parties for their marketing purposes.
                        </p>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-xl font-semibold text-gray-900 mb-4">6. Data Security</h2>
                        <p className="text-gray-600">
                            We implement appropriate technical and organizational security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the Internet or electronic storage is 100% secure, and we cannot guarantee absolute security.
                        </p>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-xl font-semibold text-gray-900 mb-4">7. Data Retention</h2>
                        <p className="text-gray-600">
                            We retain your personal information only for as long as necessary to fulfill the purposes outlined in this Privacy Policy, unless a longer retention period is required or permitted by law. When your information is no longer needed, we will securely delete or anonymize it.
                        </p>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-xl font-semibold text-gray-900 mb-4">8. Your Rights</h2>
                        <p className="text-gray-600 mb-4">
                            Depending on your location, you may have certain rights regarding your personal information, including:
                        </p>
                        <ul className="list-disc list-inside text-gray-600 space-y-2 ml-4">
                            <li><strong>Access:</strong> Request a copy of the personal information we hold about you</li>
                            <li><strong>Correction:</strong> Request correction of inaccurate or incomplete information</li>
                            <li><strong>Deletion:</strong> Request deletion of your personal information</li>
                            <li><strong>Opt-out:</strong> Unsubscribe from marketing communications</li>
                            <li><strong>Data Portability:</strong> Request transfer of your data to another service</li>
                        </ul>
                        <p className="text-gray-600 mt-4">
                            To exercise any of these rights, please contact us using the information provided below.
                        </p>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-xl font-semibold text-gray-900 mb-4">9. Third-Party Websites</h2>
                        <p className="text-gray-600">
                            Our website may contain links to third-party websites. We are not responsible for the privacy practices or content of these external sites. We encourage you to review the privacy policies of any third-party websites you visit.
                        </p>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-xl font-semibold text-gray-900 mb-4">10. Children's Privacy</h2>
                        <p className="text-gray-600">
                            Our services are not intended for individuals under the age of 18. We do not knowingly collect personal information from children. If you believe we have collected information from a child, please contact us immediately.
                        </p>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-xl font-semibold text-gray-900 mb-4">11. International Data Transfers</h2>
                        <p className="text-gray-600">
                            Your information may be transferred to and processed in countries other than your country of residence. These countries may have different data protection laws. By using our services, you consent to the transfer of your information to the United Arab Emirates and other jurisdictions where we operate.
                        </p>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-xl font-semibold text-gray-900 mb-4">12. Changes to This Privacy Policy</h2>
                        <p className="text-gray-600">
                            We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last updated" date. We encourage you to review this Privacy Policy periodically for any changes.
                        </p>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-xl font-semibold text-gray-900 mb-4">13. Contact Us</h2>
                        <p className="text-gray-600 mb-4">
                            If you have any questions about this Privacy Policy or our data practices, please contact us:
                        </p>
                        <ul className="list-none text-gray-600 space-y-2">
                            <li><strong>Email:</strong> privacy@estatehive.ae</li>
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
