import type { Metadata } from "next";
import "./globals.css";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "Felix Mairamhof",
  description: "Personal Website of Felix Mairamhof ",
  icons: "/favicon.jpg",
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
    </html>
  );
}