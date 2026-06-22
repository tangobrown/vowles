import type { Metadata } from "next";
import { Inter, Bricolage_Grotesque } from "next/font/google";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-inter",
  display: "swap",
});

const bricolage = Bricolage_Grotesque({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-bricolage",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Vowles Carpentry & Building — Local Builder in South Devon",
  description:
    "Skilled, local carpentry and building across Torquay, Teignmouth, Newton Abbot, Torbay and Exeter. Run by Paul Vowles in Bishopsteignton — no job too small. Free, no-obligation quotes.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en-GB" className={`${inter.variable} ${bricolage.variable}`}>
      <body className="font-sans bg-ink text-white antialiased">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
