export default function PainPoints() {
  const points = [
    {
      icon: "⚖️",
      title: "Lokale wetgeving die je niet kent",
      desc: "Elk land heeft eigen regels rondom eigendom, vergunningen en buitenlandse kopers. Zonder kennis loop je vast.",
    },
    {
      icon: "🗣️",
      title: "Taalbarrières bij notaris en makelaar",
      desc: "Contracten in een vreemde taal, onderhandelingen die je niet volgt. Eén misverstand kan duizenden euro's kosten.",
    },
    {
      icon: "🚨",
      title: "Risico op oplichting of verborgen kosten",
      desc: "Onbetrouwbare partijen, dubbele commissies, gebrekkige eigendomsaktes. Het komt vaker voor dan je denkt.",
    },
    {
      icon: "💸",
      title: "Fiscale valkuilen (dubbele belasting, box 3)",
      desc: "Hoe zit het met belasting in Nederland én het buitenland? Zonder goed advies betaal je onnodig te veel.",
    },
  ];

  return (
    <section className="py-20 md:py-28 bg-dark-950">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-16 scroll-animate">
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
            Investeren in buitenlands vastgoed klinkt aantrekkelijk,{" "}
            <span className="text-gradient-gold">maar...</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {points.map((point, i) => (
            <div
              key={i}
              className={`scroll-animate scroll-animate-delay-${i + 1} bg-dark-900/50 border border-dark-800 rounded-2xl p-8 hover:border-gold-500/30 transition-all duration-300 group`}
            >
              <span className="text-4xl mb-4 block">{point.icon}</span>
              <h3 className="font-heading text-xl font-bold text-white mb-3 group-hover:text-gold-400 transition-colors">
                {point.title}
              </h3>
              <p className="text-dark-400 leading-relaxed">{point.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
