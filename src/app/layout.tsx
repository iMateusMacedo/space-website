import type { Metadata } from "next";
import "@/styles/globals.css";
import { Bellefair, Barlow, Barlow_Condensed } from "next/font/google";

import Navigation from "@/components/navigation";

export const metadata: Metadata = {
  title: "Space Website",
  description: "",
};

const bellefair = Bellefair({ weight: "400", variable: "--font-bellefair" });
const barlow = Barlow({ weight: "400", variable: "--font-barlow" })
const barlowCond = Barlow_Condensed({ weight: "400", variable: "--font-barlow-condensed" })

console.log("oi")

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${bellefair.variable} ${barlow.variable} ${barlowCond.variable}`}>
      <body
        className="antialias"
      >
        <Navigation />
        {children}
      </body>
    </html>
  );
}
