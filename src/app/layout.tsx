import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-montserrat",
});

export const metadata: Metadata = {
  title: "POW | Progress Overcome Win - Algorithmic Forex Trading",
  description: "Discover how to develop consistent multi-strategy algo portfolios. Get $100,000+ in guaranteed funding and achieve 3-5 figure monthly withdrawals trading forex.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        {/* Clash Display Font from Fontshare */}
        <link
          href="https://api.fontshare.com/v2/css?f[]=clash-display@200,300,400,500,600,700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className={`${montserrat.className} antialiased`}>{children}</body>
    </html>
  );
}
