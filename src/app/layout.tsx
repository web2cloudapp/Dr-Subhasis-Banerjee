import type { Metadata } from "next";
import "./globals.css";
import { Lato } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const lato = Lato({
  weight: ["400", "700"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Dr. Subhasis Banerjee - Visva-Bharati University",
  description: "Dr. Subhasis Banerjee - Assistant Professor at Department of Computer & System Sciences, Visva-Bharati University",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={lato.className}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
