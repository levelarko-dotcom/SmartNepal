import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ 
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Smart Nepal | Digital Citizen Platform (स्मार्ट नेपाल)",
  description: "Nepal's unified digital citizen platform for government services, healthcare, emergency alerts, and employment.",
  keywords: ["Smart Nepal", "Government Services", "Nepal Passport", "Driving License Nepal", "E-Governance Nepal"],
  authors: [{ name: "Smart Nepal Team" }],
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth" suppressHydrationWarning>
      <body
        className={`${inter.variable} font-sans bg-slate-950 text-slate-100 min-h-screen antialiased selection:bg-blue-600 selection:text-white`}
      >
        {children}
      </body>
    </html>
  );
}