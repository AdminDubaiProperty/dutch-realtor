import type { Metadata } from "next";
import { Outfit, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  variable: "--font-outfit",
  display: "swap",
});

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
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
    <html lang="nl" className={`${outfit.variable} ${plusJakarta.variable}`}>
      <body className="font-body antialiased">{children}</body>
    </html>
  );
}
