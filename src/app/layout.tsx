import type { Metadata } from "next";
import { Playfair_Display, IBM_Plex_Sans } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

const ibmPlex = IBM_Plex_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-ibm-plex",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Dutch Realtor | Investeer in Vastgoed Wereldwijd",
  description:
    "Van Marrakech tot Dubai, van Curaçao tot Belgrado. Wij begeleiden Nederlandse investeerders bij elke stap van het aankoopproces in buitenlands vastgoed.",
  keywords:
    "vastgoed buitenland, investeren vastgoed, Nederlandse makelaar, Dubai vastgoed, Marokko vastgoed, Spanje vastgoed",
  openGraph: {
    title: "Dutch Realtor | Investeer in Vastgoed Wereldwijd",
    description:
      "Wij begeleiden Nederlandse investeerders bij elke stap van het aankoopproces in buitenlands vastgoed.",
    type: "website",
    locale: "nl_NL",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="nl" className={`${playfair.variable} ${ibmPlex.variable}`}>
      <body className="font-body antialiased">{children}</body>
    </html>
  );
}
