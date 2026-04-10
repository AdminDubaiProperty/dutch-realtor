export default function Solution() {
  const features = [
    {
      icon: "🔍",
      title: "Landselectie & marktanalyse",
      desc: "Wij analyseren markten op rendement, wetgeving en groei. Zo kiezen we samen het land dat bij jouw strategie past.",
    },
    {
      icon: "📋",
      title: "Juridische begeleiding",
      desc: "Onze juristen controleren contracten, eigendomsaktes en vergunningen. In het Nederlands uitgelegd, zodat je altijd weet waar je aan toe bent.",
    },
    {
      icon: "🤝",
      title: "Lokale partners in 15+ landen",
      desc: "In elk land werken we met betrouwbare makelaars, notarissen en aannemers. Gecontroleerd en beoordeeld door ons team.",
    },
    {
      icon: "💰",
      title: "Fiscaal advies & box 3 optimalisatie",
      desc: "Voorkom dubbele belasting en optimaliseer je vermogen. Wij werken samen met gespecialiseerde belastingadviseurs.",
    },
  ];

  return (
    <section id="over-ons" className="py-20 md:py-28 bg-dark-900/30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-16 scroll-animate">
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
            Wij zijn jouw Nederlandse makelaar{" "}
            <span className="text-gradient-gold">in het buitenland</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 lg:gap-8">
          {features.map((f, i) => (
            <div
              key={i}
              className={`scroll-animate scroll-animate-delay-${i + 1} bg-gradient-to-br from-dark-900 to-dark-950 border border-dark-800 rounded-2xl p-8 hover:border-gold-500/40 transition-all duration-300 group hover:-translate-y-1`}
            >
              <div className="w-14 h-14 bg-gold-500/10 rounded-xl flex items-center justify-center text-3xl mb-5 group-hover:bg-gold-500/20 transition-colors">
                {f.icon}
              </div>
              <h3 className="font-heading text-xl font-bold text-white mb-3">
                {f.title}
              </h3>
              <p className="text-dark-400 leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
