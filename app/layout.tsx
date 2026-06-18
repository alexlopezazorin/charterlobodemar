import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import Header from "@/components/common/header";
import Footer from "@/components/common/footer";
import CookieBanner from "@/components/cookies";
import WhatsAppButton from "@/components/common/whatsapp-button";

const outfit = Outfit({ subsets: ['latin'] });

export const SITE_URL = "https://www.charterlobodemar.es";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Charter Velero La Manga del Mar Menor | Alquiler con Patrón | Lobo de Mar",
    template: "%s | Lobo de Mar - Charter La Manga",
  },
  description: "Alquila un velero con patrón en La Manga del Mar Menor. Excursiones privadas para grupos de hasta 6 personas desde el Puerto Tomás Maestre. Snorkel, puesta de sol, fondeo. ¡Reserva ya!",
  icons: {
    icon: [
      { url: "/logo.png", sizes: "any" },
      { url: "/logo.png", sizes: "192x192", type: "image/png" },
    ],
  },
  keywords: [
    "charter velero La Manga",
    "alquiler barco con patrón",
    "excursión privada Mar Menor",
    "velero snorkel La Manga",
    "charter puesta de sol",
    "alquiler barco grupos",
    "fondeo La Manga del Mar Menor",
    "barco familias Murcia",
    "charter eventos La Manga",
    "reserva excursión velero",
    "actividades acuáticas Mar Menor",
    "Cabo de Palos navegación",
    "Isla Grosa charter",
    "Calblanque barco",
    "Puerto Tomás Maestre salidas",
  ],
  authors: [{ name: "alexlopezazorin@gmail.com" }],
  creator: "Charter Lobo de Mar",
  publisher: "Charter Lobo de Mar",
  openGraph: {
    type: "website",
    locale: "es_ES",
    url: SITE_URL,
    siteName: "Charter Lobo de Mar",
    title: "Charter Velero La Manga del Mar Menor | Alquiler con Patrón",
    description: "Alquila un velero con patrón en La Manga del Mar Menor. Excursiones privadas para grupos de hasta 6 personas. Snorkel, puesta de sol, fondeo.",
    images: [
      {
        url: "/home/hero-section/hero.png",
        width: 1200,
        height: 630,
        alt: "Charter Lobo de Mar — Velero Katmandú navegando por La Manga del Mar Menor, Mar Menor, Murcia",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Charter Velero La Manga | Alquiler con Patrón | Lobo de Mar",
    description: "Alquila un velero con patrón en La Manga. Excursiones privadas para grupos. Snorkel, puesta de sol, fondeo.",
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
    canonical: SITE_URL,
  },
};

const jsonLdBusiness = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": `${SITE_URL}/#business`,
  "name": "Charter Lobo de Mar",
  "alternateName": "Lobo de Mar Charter",
  "description": "Charter privado en velero por La Manga del Mar Menor. Excursiones con patrón incluido para grupos de hasta 6 personas desde el Puerto Tomás Maestre. Disponemos de snorkel, paddle surf y bar.",
  "url": SITE_URL,
  "telephone": "+34637715281",
  "email": "lobodemarcharter@gmail.com",
  "image": `${SITE_URL}/home/hero-section/hero.png`,
  "priceRange": "€€€",
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
  "contactPoint": {
    "@type": "ContactPoint",
    "contactType": "Customer Service",
    "telephone": "+34637715281",
    "email": "lobodemarcharter@gmail.com",
    "availableLanguage": ["es", "en"],
  },
  "sameAs": [
    "https://www.instagram.com/charterlobodemar/",
    "https://www.facebook.com/profile.php?id=61571894465835",
    "https://maps.app.goo.gl/7nqsUgrXmdJUkgA27",
  ],
  "hasMap": "https://maps.app.goo.gl/7nqsUgrXmdJUkgA27",
  "areaServed": [
    {
      "@type": "Place",
      "name": "La Manga del Mar Menor",
    },
    {
      "@type": "Place",
      "name": "Cabo de Palos",
    },
    {
      "@type": "Place",
      "name": "Mar Menor",
    },
    {
      "@type": "Place",
      "name": "Murcia",
    },
  ],
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "5",
    "reviewCount": "11",
    "bestRating": "5",
    "worstRating": "1",
  },
  "openingHoursSpecification": [
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
      "opens": "08:00",
      "closes": "22:00",
    },
  ],
  "knowsAbout": [
    "Sailing Charter",
    "Boat Rental",
    "Water Activities",
    "Snorkeling",
    "Paddle Boarding",
    "Group Excursions",
    "Private Charter",
    "Coastal Tours",
  ],
};

const jsonLdBreadcrumb = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "Inicio",
      "item": `${SITE_URL}/`
    },
    {
      "@type": "ListItem",
      "position": 2,
      "name": "La Manga",
      "item": `${SITE_URL}/la-manga`
    },
    {
      "@type": "ListItem",
      "position": 3,
      "name": "Preguntas Frecuentes",
      "item": `${SITE_URL}/preguntas-frecuentes`
    },
    {
      "@type": "ListItem",
      "position": 4,
      "name": "Contacto",
      "item": `${SITE_URL}/contacto`
    }
  ]
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <Script defer src="https://cloud.umami.is/script.js" data-website-id="c596e9ae-36c2-41e5-8ead-bd3b39fd1d7d" strategy="afterInteractive" />
      </head>
      <body className={`${outfit.className}`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdBusiness) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdBreadcrumb) }}
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
