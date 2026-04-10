import { Quote } from "lucide-react";

export default function Testimonials() {
  const testimonials = [
    {
      text: "Dankzij Dutch Realtor heb ik een prachtig appartement in Marrakech gekocht. Het hele proces was transparant en professioneel.",
      name: "Jan de Vries",
      city: "Amsterdam",
      initials: "JV",
    },
    {
      text: "Ik durfde het niet alleen aan, maar met hun begeleiding was investeren in Dubai verrassend eenvoudig.",
      name: "Lisa Bakker",
      city: "Rotterdam",
      initials: "LB",
    },
    {
      text: "Van orientatie tot sleuteloverdracht in 8 weken. Topservice!",
      name: "Mohammed El Amrani",
      city: "Utrecht",
      initials: "MA",
    },
  ];

  return (
    <section className="py-24 md:py-32 bg-dark-950">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-16 scroll-animate">
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-black text-dark-50 mb-4 tracking-tight">
            Wat onze klanten <span className="text-gradient-gold">zeggen</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className={`scroll-animate scroll-animate-delay-${i + 1} relative bg-gradient-to-br from-dark-800/60 to-dark-950 border border-dark-700/50 rounded-2xl p-8 hover:border-gold-500/30 hover:scale-[1.02] hover:shadow-xl hover:shadow-gold-500/5 transition-all duration-300 overflow-hidden`}
            >
              {/* Background quote decoration */}
              <Quote
                size={120}
                strokeWidth={0.5}
                className="absolute top-4 right-4 text-gold-500/5 rotate-180"
              />

              {/* Stars */}
              <div className="flex gap-1 mb-4 relative z-10">
                {[...Array(5)].map((_, j) => (
                  <svg
                    key={j}
                    className="w-5 h-5 text-gold-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>

              <p className="text-dark-50/70 text-lg leading-relaxed mb-6 italic relative z-10 font-light">
                &ldquo;{t.text}&rdquo;
              </p>

              <div className="flex items-center gap-3 relative z-10">
                <div className="w-11 h-11 bg-gold-500/15 rounded-full flex items-center justify-center text-gold-400 font-semibold text-sm border border-gold-500/20">
                  {t.initials}
                </div>
                <div>
                  <p className="text-dark-50 font-semibold">{t.name}</p>
                  <p className="text-dark-50/40 text-sm">{t.city}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
