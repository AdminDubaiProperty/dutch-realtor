import Image from "next/image";

const countries = [
  { flag: "🇲🇦", name: "Marokko", price: "€45.000", tag: "Hoog huurrendement", image: "https://images.unsplash.com/photo-1539020140153-e479b8c22e70?w=800&q=80", featured: true },
  { flag: "🇪🇸", name: "Spanje", price: "€95.000", tag: "Golden Visa", image: "https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=800&q=80", featured: true },
  { flag: "🇦🇪", name: "Dubai", price: "€150.000", tag: "0% inkomstenbelasting", image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=800&q=80", featured: true },
  { flag: "🇬🇷", name: "Griekenland", price: "€70.000", tag: "Golden Visa EU", image: "https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?w=800&q=80", featured: true },
  { flag: "🇨🇼", name: "Curaçao", price: "€85.000", tag: "Koninkrijksband", image: "https://images.unsplash.com/photo-1580237072617-771c3ecc4a24?w=800&q=80", featured: false },
  { flag: "🇬🇪", name: "Georgië", price: "€25.000", tag: "0% vermogensbelasting", image: "https://images.unsplash.com/photo-1565008576549-57569a49371d?w=800&q=80", featured: false },
  { flag: "🇦🇱", name: "Albanië", price: "€55.000", tag: "Opkomende markt", image: "https://images.unsplash.com/photo-1596422846543-75c6fc197f07?w=800&q=80", featured: false },
  { flag: "🇸🇦", name: "Saudi-Arabië", price: "€120.000", tag: "Vision 2030", image: "https://images.unsplash.com/photo-1586724237569-9c8ee6a67277?w=800&q=80", featured: false },
  { flag: "🇸🇷", name: "Suriname", price: "€35.000", tag: "Nederlandse taal", image: null, featured: false },
  { flag: "🇳🇱", name: "Nederland", price: "€180.000", tag: "Thuismarkt", image: null, featured: false },
  { flag: "🇦🇼", name: "Aruba", price: "€95.000", tag: "Caribisch paradijs", image: null, featured: false },
  { flag: "🇧🇶", name: "Bonaire", price: "€110.000", tag: "Bijzondere gemeente NL", image: null, featured: false },
  { flag: "🇦🇪", name: "Ras Al Khaimah", price: "€80.000", tag: "Opkomend alternatief", image: null, featured: false },
  { flag: "🇦🇪", name: "Abu Dhabi", price: "€130.000", tag: "Stabiele groei", image: null, featured: false },
  { flag: "🇷🇸", name: "Servië", price: "€40.000", tag: "EU-kandidaat", image: null, featured: false },
  { flag: "🇨🇳", name: "China", price: "€60.000", tag: "Grootste markt ter wereld", image: null, featured: false },
];

export default function Countries() {
  const featured = countries.filter((c) => c.featured);
  const rest = countries.filter((c) => !c.featured);

  return (
    <section id="landen" className="py-20 md:py-28 bg-dark-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-16 scroll-animate">
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
            Ontdek onze <span className="text-gradient-gold">bestemmingen</span>
          </h2>
          <p className="text-dark-400 text-lg max-w-2xl mx-auto">
            Van het Caribisch gebied tot het Midden-Oosten. Wij zijn actief in 15+ landen.
          </p>
        </div>

        {/* Bento Grid - Featured */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
          {featured.map((country, i) => (
            <div
              key={country.name}
              className={`scroll-animate scroll-animate-delay-${i + 1} relative group rounded-2xl overflow-hidden ${
                i === 0 ? "md:col-span-2 md:row-span-2 min-h-[300px] md:min-h-[400px]" : "min-h-[200px] md:min-h-[200px]"
              }`}
            >
              {country.image && (
                <Image
                  src={country.image}
                  alt={country.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  unoptimized
                  loading="lazy"
                />
              )}
              <div className="absolute inset-0 bg-gradient-to-t from-dark-950/90 via-dark-950/30 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-5">
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-2xl">{country.flag}</span>
                  <h3 className="font-heading text-xl font-bold text-white">
                    {country.name}
                  </h3>
                </div>
                <p className="text-gold-400 font-semibold text-sm mb-2">
                  Vanaf {country.price}
                </p>
                <span className="inline-block bg-gold-500/20 text-gold-300 text-xs px-3 py-1 rounded-full border border-gold-500/30">
                  {country.tag}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Smaller Cards Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {rest.map((country, i) => (
            <div
              key={country.name}
              className={`scroll-animate scroll-animate-delay-${(i % 4) + 1} relative group rounded-2xl overflow-hidden min-h-[180px] ${
                country.image ? "" : "bg-gradient-to-br from-dark-800 to-dark-900"
              } border border-dark-800 hover:border-gold-500/30 transition-all duration-300`}
            >
              {country.image ? (
                <>
                  <Image
                    src={country.image}
                    alt={country.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    unoptimized
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-dark-950/90 via-dark-950/40 to-transparent" />
                </>
              ) : null}
              <div className="absolute bottom-0 left-0 right-0 p-4">
                <div className="flex items-center gap-1.5 mb-1">
                  <span className="text-lg">{country.flag}</span>
                  <h3 className="font-heading text-base font-bold text-white">
                    {country.name}
                  </h3>
                </div>
                <p className="text-gold-400 font-semibold text-xs mb-1.5">
                  Vanaf {country.price}
                </p>
                <span className="inline-block bg-gold-500/15 text-gold-300 text-[10px] px-2 py-0.5 rounded-full border border-gold-500/20">
                  {country.tag}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
