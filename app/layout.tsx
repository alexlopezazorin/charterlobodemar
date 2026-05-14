import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";
import Header from "@/components/common/header";
import Footer from "@/components/common/footer";
import CookieBanner from "@/components/cookies";
import WhatsAppButton from "@/components/common/whatsapp-button";

const outfit = Outfit({ subsets: ['latin'] });

export const SITE_URL = "https://charterlobodemar.es";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Charter Barco La Manga del Mar Menor | Lobo de Mar",
    template: "%s | Charter Lobo de Mar",
  },
  description: "Alquila un velero con patrón en La Manga del Mar Menor. Excursiones privadas para grupos de hasta 6 personas desde el Puerto Tomás Maestre, Murcia. ¡Reserva ya!",
  keywords: [
    "charter barco La Manga",
    "alquiler velero La Manga del Mar Menor",
    "excursión barco Mar Menor",
    "charter privado con patrón",
    "velero grupos Murcia",
    "charter velero Cabo de Palos",
    "barco con patrón La Manga",
    "excursión velero La Manga",
  ],
  authors: [{ name: "alexlopezazorin@gmail.com" }],
  creator: "Charter Lobo de Mar",
  publisher: "Charter Lobo de Mar",
  openGraph: {
    type: "website",
    locale: "es_ES",
    url: SITE_URL,
    siteName: "Charter Lobo de Mar",
    title: "Charter Barco La Manga del Mar Menor | Lobo de Mar",
    description: "Alquila un velero con patrón en La Manga del Mar Menor. Excursiones privadas para grupos de hasta 6 personas desde el Puerto Tomás Maestre, Murcia.",
    images: [
      {
        url: "/home/hero-section/hero.png",
        width: 1200,
        height: 630,
        alt: "Charter Lobo de Mar — Velero Katmandú navegando por La Manga del Mar Menor",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Charter Barco La Manga del Mar Menor | Lobo de Mar",
    description: "Alquila un velero con patrón en La Manga del Mar Menor. Grupos de hasta 6 personas desde el Puerto Tomás Maestre.",
    images: ["/home/hero-section/hero.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "/",
  },
};

const jsonLdBusiness = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": `${SITE_URL}/#business`,
  "name": "Charter Lobo de Mar",
  "alternateName": "Lobo de Mar Charter",
  "description": "Charter privado en velero por La Manga del Mar Menor. Excursiones con patrón incluido para grupos de hasta 6 personas desde el Puerto Tomás Maestre.",
  "url": SITE_URL,
  "telephone": "+34637715281",
  "email": "lobodemarcharter@gmail.com",
  "image": `${SITE_URL}/home/hero-section/hero.png`,
  "priceRange": "€€",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Puerto Tomás Maestre",
    "addressLocality": "La Manga del Mar Menor",
    "addressRegion": "Murcia",
    "postalCode": "30380",
    "addressCountry": "ES",
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 37.6647,
    "longitude": -0.7338,
  },
  "sameAs": [
    "https://www.instagram.com/charterlobodemar/",
    "https://www.facebook.com/profile.php?id=61571894465835",
    "https://maps.app.goo.gl/7nqsUgrXmdJUkgA27",
  ],
  "hasMap": "https://maps.app.goo.gl/7nqsUgrXmdJUkgA27",
  "areaServed": {
    "@type": "Place",
    "name": "La Manga del Mar Menor, Murcia, España",
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "5",
    "reviewCount": "11",
    "bestRating": "5",
    "worstRating": "1",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={`${outfit.className}`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdBusiness) }}
        />
        <Header />
        <main className="md:pt-28">
          {children}
        </main>
        <Footer />
        <CookieBanner />
        <WhatsAppButton />
      </body>
    </html>
  );
}
