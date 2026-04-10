"use client";

import { useState } from "react";
import { BookOpen } from "lucide-react";

const countryOptions = [
  "Marokko", "Spanje", "Dubai", "Griekenland", "Curacao", "Georgie",
  "Albanie", "Saudi-Arabie", "Suriname", "Nederland", "Aruba", "Bonaire",
  "Ras Al Khaimah", "Abu Dhabi", "Servie", "China",
];

export default function ContactForm() {
  const [selectedCountries, setSelectedCountries] = useState<string[]>([]);

  const toggleCountry = (country: string) => {
    setSelectedCountries((prev) =>
      prev.includes(country)
        ? prev.filter((c) => c !== country)
        : [...prev, country]
    );
  };

  return (
    <section id="contact" className="py-24 md:py-32 bg-dark-950 relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-gold-500/5 rounded-full blur-3xl" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="text-center mb-12 scroll-animate">
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-semibold text-dark-50 mb-4 tracking-tight">
            Ontdek welk land bij jouw{" "}
            <span className="text-gradient-gold">investering</span> past
          </h2>
          <p className="text-dark-50/50 text-lg max-w-2xl mx-auto font-extralight">
            Plan een gratis orientatiegesprek of download ons e-book
          </p>
        </div>

        <div className="scroll-animate bg-gradient-to-br from-dark-800/60 to-dark-950 border border-dark-700/50 rounded-3xl p-6 sm:p-10">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              alert("Bedankt voor je aanvraag! We nemen snel contact met je op.");
            }}
            className="space-y-6"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-dark-50/60 mb-2">
                  Naam
                </label>
                <input
                  type="text"
                  required
                  className="w-full bg-dark-800/50 border border-dark-700/50 rounded-xl px-4 py-3 text-dark-50 placeholder-dark-50/30 focus:border-gold-400 focus:ring-1 focus:ring-gold-400 transition-colors outline-none"
                  placeholder="Je volledige naam"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-dark-50/60 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  required
                  className="w-full bg-dark-800/50 border border-dark-700/50 rounded-xl px-4 py-3 text-dark-50 placeholder-dark-50/30 focus:border-gold-400 focus:ring-1 focus:ring-gold-400 transition-colors outline-none"
                  placeholder="je@email.nl"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-dark-50/60 mb-2">
                  Telefoon
                </label>
                <input
                  type="tel"
                  className="w-full bg-dark-800/50 border border-dark-700/50 rounded-xl px-4 py-3 text-dark-50 placeholder-dark-50/30 focus:border-gold-400 focus:ring-1 focus:ring-gold-400 transition-colors outline-none"
                  placeholder="+31 6 12345678"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-dark-50/60 mb-2">
                  Budget
                </label>
                <select
                  className="w-full bg-dark-800/50 border border-dark-700/50 rounded-xl px-4 py-3 text-dark-50 focus:border-gold-400 focus:ring-1 focus:ring-gold-400 transition-colors outline-none appearance-none"
                >
                  <option value="">Selecteer budget</option>
                  <option value="<50k">&lt; 50.000 euro</option>
                  <option value="50-100k">50.000 - 100.000 euro</option>
                  <option value="100-200k">100.000 - 200.000 euro</option>
                  <option value="200k+">200.000+ euro</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-dark-50/60 mb-3">
                Voorkeurslanden
              </label>
              <div className="flex flex-wrap gap-2">
                {countryOptions.map((country) => (
                  <button
                    key={country}
                    type="button"
                    onClick={() => toggleCountry(country)}
                    className={`px-3 py-1.5 rounded-full text-sm border transition-all duration-200 ${
                      selectedCountries.includes(country)
                        ? "bg-gold-500/20 border-gold-500/60 text-gold-300"
                        : "bg-dark-800/30 border-dark-700/50 text-dark-50/40 hover:border-dark-50/20"
                    }`}
                  >
                    {country}
                  </button>
                ))}
              </div>
            </div>

            <button
              type="submit"
              className="w-full bg-gold-500 hover:bg-gold-600 text-dark-950 py-4 rounded-xl text-lg font-medium transition-all duration-300 hover:shadow-xl hover:shadow-gold-500/20"
            >
              Verstuur aanvraag
            </button>
          </form>

          <div className="mt-8 pt-8 border-t border-dark-700/50 text-center">
            <button className="inline-flex items-center gap-2 text-gold-400 hover:text-gold-300 font-medium transition-colors">
              <BookOpen size={18} strokeWidth={1.5} />
              <span>Download gratis e-book: De 5 beste landen voor Nederlandse vastgoedinvesteerders in 2026</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
