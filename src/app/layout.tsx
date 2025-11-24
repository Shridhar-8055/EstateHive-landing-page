import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Quantum Algo | Precision Automation for Currency Traders",
  description: "Advanced algorithmic trading powered by adaptive AI. Deploy disciplined strategies that analyze macro trends, price action, and liquidity flows in real-time.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://api.fontshare.com" />
      </head>
      <body>{children}</body>
    </html>
  );
}
