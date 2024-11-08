import type { Metadata } from "next";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import Head from "next/head";

export const metadata: Metadata = {
  title: "Home | Felix Mairamhof",
  description: "Personal Website of Felix Mairamhof, Tech | Finance | Business "
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    
    <html lang="en">
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  );
}