import Image from "next/image";
import { MapPin } from "lucide-react";

const countries = [
  { name: "Marokko", price: "\u20AC45.000", tag: "Hoog huurrendement", image: "https://images.unsplash.com/photo-1539020140153-e479b8c22e70?w=800&q=80", featured: true },
  { name: "Spanje", price: "\u20AC95.000", tag: "Golden Visa", image: "https://images.unsplash.com/photo-1509840841025-9088ba78a826?w=800&q=80", featured: true },
  { name: "Dubai", price: "\u20AC150.000", tag: "0% inkomstenbelasting", image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=800&q=80", featured: true },
  { name: "Griekenland", price: "\u20AC70.000", tag: "Golden Visa EU", image: "https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?w=800&q=80", featured: true },
  { name: "Curacao", price: "\u20AC85.000", tag: "Koninkrijksband", image: "https://images.unsplash.com/photo-1580237072617-771c3ecc4a24?w=800&q=80", featured: false },
  { name: "Georgie", price: "\u20AC25.000", tag: "0% vermogensbelasting", image: "https://images.unsplash.com/photo-1565008576549-57569a49371d?w=800&q=80", featured: false },
  { name: "Albanie", price: "\u20AC55.000", tag: "Opkomende markt", image: "https://images.unsplash.com/photo-1596422846543-75c6fc197f07?w=800&q=80", featured: false },
  { name: "Saudi-Arabie", price: "\u20AC120.000", tag: "Vision 2030", image: "https://images.unsplash.com/photo-1578895101408-1a36b834405b?w=800&q=80", featured: false },
  { name: "Suriname", price: "\u20AC35.000", tag: "Nederlandse taal", image: "https://images.unsplash.com/photo-1605130284535-11dd9eedc58a?w=800&q=80", featured: false },
  { name: "Nederland", price: "\u20AC180.000", tag: "Thuismarkt", image: "https://images.unsplash.com/photo-1583037189850-1921ae7c6c22?w=800&q=80", featured: false },
  { name: "Aruba", price: "\u20AC95.000", tag: "Caribisch paradijs", image: "https://images.unsplash.com/photo-1580237541049-2d715a09486e?w=800&q=80", featured: false },
  { name: "Bonaire", price: "\u20AC110.000", tag: "Bijzondere gemeente NL", image: "https://images.unsplash.com/photo-1590523741831-ab7e8b8f9c7f?w=800&q=80", featured: false },
  { name: "Ras Al Khaimah", price: "\u20AC80.000", tag: "Opkomend alternatief", image: "https://images.unsplash.com/photo-1597659840241-37e2b9c2f55f?w=800&q=80", featured: false },
  { name: "Abu Dhabi", price: "\u20AC130.000", tag: "Stabiele groei", image: "https://images.unsplash.com/photo-1611605698335-8b1569810432?w=800&q=80", featured: false },
  { name: "Servie", price: "\u20AC40.000", tag: "EU-kandidaat", image: "https://images.unsplash.com/photo-1556804335-2fa563e93aae?w=800&q=80", featured: false },
  { name: "China", price: "\u20AC60.000", tag: "Grootste markt ter wereld", image: "https://images.unsplash.com/photo-1547981609-4b6bfe67ca0b?w=800&q=80", featured: false },
];

export default function Countries() {
  const featured = countries.filter((c) => c.featured);
  const rest = countries.filter((c) => !c.featured);

  return (
    <section id="landen" className="py-24 md:py-32 bg-dark-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-16 scroll-animate">
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-semibold text-dark-50 mb-4 tracking-tight">
            Ontdek onze <span className="text-gradient-gold">bestemmingen</span>
          </h2>
          <p className="text-dark-50/50 text-lg max-w-2xl mx-auto font-extralight">
            Van het Caribisch gebied tot het Midden-Oosten. Wij zijn actief in 15+ landen.
          </p>
        </div>

        {/* Bento Grid - Featured */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
          {featured.map((country, i) => (
            <div
              key={country.name}
              className={`scroll-animate scroll-animate-delay-${i + 1} relative group rounded-2xl overflow-hidden hover:scale-[1.02] hover:shadow-xl hover:shadow-gold-500/5 transition-all duration-500 ${
                i === 0 ? "md:col-span-2 md:row-span-2 min-h-[300px] md:min-h-[400px]" : "min-h-[200px] md:min-h-[200px]"
              }`}
            >
              <Image
                src={country.image}
                alt={country.name}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
                unoptimized
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-dark-950/90 via-dark-950/30 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-5">
                <div className="flex items-center gap-2 mb-1">
                  <MapPin size={16} strokeWidth={1.5} className="text-gold-400" />
                  <h3 className="font-heading text-xl font-medium text-dark-50">
                    {country.name}
                  </h3>
                </div>
                <p className="text-gold-400 font-normal text-sm mb-2">
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
              className={`scroll-animate scroll-animate-delay-${(i % 4) + 1} relative group rounded-2xl overflow-hidden min-h-[180px] border border-dark-700/50 hover:border-gold-500/30 hover:scale-[1.02] hover:shadow-xl hover:shadow-gold-500/5 transition-all duration-300`}
            >
              <Image
                src={country.image}
                alt={country.name}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
                unoptimized
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-dark-950/90 via-dark-950/40 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-4">
                <div className="flex items-center gap-1.5 mb-1">
                  <MapPin size={14} strokeWidth={1.5} className="text-gold-400" />
                  <h3 className="font-heading text-base font-medium text-dark-50">
                    {country.name}
                  </h3>
                </div>
                <p className="text-gold-400 font-normal text-xs mb-1.5">
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
