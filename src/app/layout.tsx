import "./globals.css";
import { Montserrat, Oxanium } from "next/font/google";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Connect",
};

const oxanium = Oxanium({
  weight: ["500", "600"],
  subsets: ["latin"],
  variable: "--font-oxanium",
});

const montserrat = Montserrat({
  weight: ["500", "600"],
  subsets: ["latin"],
  variable: "--font-monteserrat",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${oxanium.variable} ${montserrat.variable}`}>
      <body className="bg-gray-900 text-gray-100 antialiased bg-[url(/background.png)] bg-no-repeat bg-top md:bg-right-top">
        {children}
      </body>
    </html>
  );
}
