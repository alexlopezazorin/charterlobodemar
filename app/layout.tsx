import type { Metadata } from "next";
import {Outfit} from "next/font/google";
import "./globals.css";
import Header from "@/components/common/header";
import Footer from "@/components/common/footer";
import CookieBanner from "@/components/cookies";


const outfit = Outfit({subsets:['latin']});

export const metadata: Metadata = {
  title: "Charter Lobodemar",
  description: "Charters en velero en La Manga, Murcia",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={`${outfit.className}`}>
        <Header/>
        <main className="md:pt-28">
          {children}
        </main>
        <Footer/>
        <CookieBanner />
      </body>
    </html>
  );
}
