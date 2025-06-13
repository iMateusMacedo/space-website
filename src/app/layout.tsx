import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Space Website",
  description: "Site do espaço",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className= "antialias"
      >
        {children}
      </body>
    </html>
  );
}
