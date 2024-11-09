import type { Metadata } from "next";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import Head from "next/head";
import { Footer } from "@/components/Footer";

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
      <body className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}