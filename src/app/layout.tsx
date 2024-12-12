import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "CacheLogic | Innovative IT Solutions",
  description:
    "CacheLogic provides cutting-edge IT solutions to fast-track your business evolution. Discover our services, project catalog, and expertise in delivering tailored solutions for your success.",
  keywords: [
    "CacheLogic",
    "IT solutions",
    "business innovation",
    "project catalog",
    "technology consulting",
    "IT services",
    "enterprise solutions",
    "cloud computing",
    "custom software development",
    "project management",
    "digital transformation",
    "software solutions",
    "cloud services",
    "technology strategies",
    "business automation",
    "data analytics",
    "AI integration",
    "IoT solutions",
    "IT infrastructure",
    "cybersecurity",
  ],
  robots: "index, follow",
  applicationName: "CacheLogic Team",
  viewport: "width=device-width, initial-scale=1.0",
  themeColor: "#1E40AF",
  category: "IT Services",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
