import type { Metadata } from "next";
import { Cormorant_Garamond, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-heading",
  display: "swap",
});

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500"],
  variable: "--font-plus-jakarta",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://thedutchrealtor.nl"),
  title: {
    default: "The Dutch Realtor | Buitenlands vastgoed kopen met Nederlandse begeleiding",
    template: "%s | The Dutch Realtor",
  },
  description:
    "The Dutch Realtor helpt Nederlanders buitenlands vastgoed vergelijken op kosten, aankoopproces, locatie, servicekosten en huurscenario's. Geen garanties, wel betere voorbereiding.",
  keywords: [
    "vastgoed buitenland kopen",
    "buitenlands vastgoed vergelijken",
    "Dubai vastgoed kopen",
    "Marokko vastgoed kopen",
    "Nederlandse begeleiding vastgoed",
    "servicekosten Dubai vastgoed",
  ],
  alternates: { canonical: "https://thedutchrealtor.nl" },
  openGraph: {
    title: "The Dutch Realtor | Buitenlands vastgoed kopen met Nederlandse begeleiding",
    description:
      "Nederlandse gidsen, checklists en projectinformatie voor vastgoedoriëntatie in Dubai, Marokko, Spanje, Curaçao en Georgië.",
    type: "website",
    locale: "nl_NL",
    url: "https://thedutchrealtor.nl",
    siteName: "The Dutch Realtor",
  },
  twitter: {
    card: "summary_large_image",
    title: "The Dutch Realtor",
    description: "Buitenlands vastgoed beter vergelijken met Nederlandse begeleiding.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-snippet": -1, "max-image-preview": "large", "max-video-preview": -1 },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="nl" className={`${cormorant.variable} ${plusJakarta.variable}`}>
      <body className="font-body antialiased">{children}</body>
    </html>
  );
}
