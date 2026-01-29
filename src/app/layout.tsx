import type { Metadata } from "next";
import { Montserrat, Merriweather } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-montserrat",
});

const merriweather = Merriweather({
  subsets: ["latin"],
  weight: ["300", "400", "700", "900"],
  variable: "--font-merriweather",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://estatehive.com"),
  title: "Estate Hive | Dubai Real Estate Investment for Indian Investors",
  description: "Invest in Dubai real estate with Estate Hive. Get tax-free rental income, golden visa opportunities, and expert guidance for Indian investors looking to diversify their portfolio.",
  keywords: [
    "Dubai real estate",
    "Dubai property investment",
    "Indian investors Dubai",
    "Dubai golden visa",
    "tax-free property investment",
    "Dubai off-plan properties",
    "EMAAR properties",
    "DAMAC properties",
    "Dubai rental yield",
    "UAE property investment",
    "Dubai freehold property"
  ],
  authors: [{ name: "Estate Hive" }],
  creator: "Estate Hive",
  publisher: "Estate Hive",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://estatehive.com",
    siteName: "Estate Hive",
    title: "Estate Hive | Dubai Real Estate Investment for Indian Investors",
    description: "Invest in Dubai real estate with Estate Hive. Get tax-free rental income, golden visa opportunities, and expert guidance.",
    images: [
      {
        url: "/EH_WHite@300x-8.png",
        width: 1200,
        height: 630,
        alt: "Estate Hive - Dubai Real Estate Investment",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Estate Hive | Dubai Real Estate Investment for Indian Investors",
    description: "Invest in Dubai real estate with Estate Hive. Get tax-free rental income, golden visa opportunities, and expert guidance.",
    images: ["/EH_WHite@300x-8.png"],
    creator: "@estatehive",
  },
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/EH_WHite@300x-8.png", type: "image/png" },
    ],
    apple: [
      { url: "/EH_WHite@300x-8.png" },
    ],
    shortcut: "/EH_WHite@300x-8.png",
  },
  manifest: "/manifest.json",
  alternates: {
    canonical: "https://estatehive.com",
  },
  category: "Real Estate",
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
        {/* Additional SEO meta tags */}
        <meta name="theme-color" content="#230859" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <meta name="format-detection" content="telephone=no" />
        <link rel="icon" href="/EH_WHite@300x-8.png" />
        <link rel="apple-touch-icon" href="/EH_WHite@300x-8.png" />
      </head>
      <body className={`${montserrat.className} ${merriweather.variable} antialiased`}>{children}</body>
    </html>
  );
}
