import Image from "next/image";

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1920&q=80"
          alt="Luxe villa"
          fill
          className="object-cover"
          priority
          unoptimized
        />
        <div className="absolute inset-0 bg-gradient-to-b from-dark-950/70 via-dark-950/50 to-dark-950" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 text-center pt-20">
        <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6">
          <span className="text-white">Investeer in vastgoed wereldwijd,</span>
          <br />
          <span className="text-gradient-gold">met Nederlandse begeleiding</span>
        </h1>
        <p className="text-dark-300 text-lg sm:text-xl md:text-2xl max-w-3xl mx-auto mb-10 leading-relaxed font-light">
          Van Marrakech tot Dubai, van Curaçao tot Belgrado. Wij begeleiden Nederlandse investeerders bij elke stap van het aankoopproces.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#contact"
            className="bg-gold-500 hover:bg-gold-600 text-dark-950 px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 hover:shadow-xl hover:shadow-gold-500/30 hover:-translate-y-0.5"
          >
            Plan een gratis gesprek
          </a>
          <a
            href="#landen"
            className="border-2 border-gold-400/40 hover:border-gold-400 text-gold-400 px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 hover:-translate-y-0.5"
          >
            Bekijk onze landen
          </a>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce-slow">
        <svg
          className="w-6 h-6 text-gold-400/60"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 14l-7 7m0 0l-7-7m7 7V3"
          />
        </svg>
      </div>
    </section>
  );
}
