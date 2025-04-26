import type { Metadata } from "next";
import "./globals.css";
import { Footer } from "@/components/Footer";
import { GoogleAnalytics } from '@next/third-parties/google'

export const metadata: Metadata = {
  title: "Felix Mairamhof",
  description: "Personal Website of Felix Mairamhof ",
  icons: "/ghibli-removebg-preview.png",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">

      <body className="flex flex-col min-h-screen">

        <main className="flex-grow">
          {children}
        </main>
        <Footer />
      </body>
      <GoogleAnalytics gaId="G-B5M5WPLVMM" />
    </html>
  );
}