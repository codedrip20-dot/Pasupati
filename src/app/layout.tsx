import type { Metadata } from "next";

import Navbar from "@/src/components/layout/Navbar";
import Footer from "@/src/components/layout/Footer";

import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Pasupati Infrastructure",
    template: "%s | Pasupati Infrastructure",
  },
  description:
    "Pasupati Infrastructure delivers construction, commercial, residential and infrastructure development solutions with a commitment to quality, reliability and lasting value.",
  keywords: [
    "Pasupati Infrastructure",
    "construction",
    "infrastructure",
    "commercial construction",
    "residential construction",
    "infrastructure development",
  ],
  authors: [
    {
      name: "Pasupati Infrastructure",
    },
  ],
  creator: "Pasupati Infrastructure",
  publisher: "Pasupati Infrastructure",
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000"
  ),
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-white text-slate-900 antialiased">
        {/* Global Navigation */}
        <Navbar />

        {/* Page Content */}
        <main className="min-h-screen">
          {children}
        </main>

        {/* Global Footer */}
        <Footer />
      </body>
    </html>
  );
}