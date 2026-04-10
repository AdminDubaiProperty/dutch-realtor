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
  title: "Dutch Realtor | Investeer in Vastgoed Wereldwijd",
  description:
    "Van Marrakech tot Dubai, van Curacao tot Belgrado. Wij begeleiden Nederlandse investeerders bij elke stap van het aankoopproces in buitenlands vastgoed.",
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
    <html lang="nl" className={`${cormorant.variable} ${plusJakarta.variable}`}>
      <body className="font-body antialiased">{children}</body>
    </html>
  );
}
