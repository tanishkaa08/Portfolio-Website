import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import "./globals.css";

export const metadata: Metadata = {
  title: "Tanishka Nibariya",
  description: "Portfolio of Tanishka Nibariya, Software Developer at IIITDM Jabalpur. Summer of Bitcoin 2026, C4GT'25, SIH'25 Grand Finalist. Building systems, mobile apps, and open source.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${GeistSans.variable} ${GeistMono.variable} scroll-smooth`}
      style={{ colorScheme: 'light' }}
      suppressHydrationWarning
    >
      <body className="antialiased" suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
