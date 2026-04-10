import { Scale, Globe, ShieldAlert, Calculator } from "lucide-react";

export default function PainPoints() {
  const points = [
    {
      icon: <Scale size={28} strokeWidth={1.5} />,
      title: "Lokale wetgeving die je niet kent",
      desc: "Elk land heeft eigen regels rondom eigendom, vergunningen en buitenlandse kopers. Zonder kennis loop je vast.",
    },
    {
      icon: <Globe size={28} strokeWidth={1.5} />,
      title: "Taalbarrieres bij notaris en makelaar",
      desc: "Contracten in een vreemde taal, onderhandelingen die je niet volgt. Een misverstand kan duizenden euros kosten.",
    },
    {
      icon: <ShieldAlert size={28} strokeWidth={1.5} />,
      title: "Risico op oplichting of verborgen kosten",
      desc: "Onbetrouwbare partijen, dubbele commissies, gebrekkige eigendomsaktes. Het komt vaker voor dan je denkt.",
    },
    {
      icon: <Calculator size={28} strokeWidth={1.5} />,
      title: "Fiscale valkuilen (dubbele belasting, box 3)",
      desc: "Hoe zit het met belasting in Nederland en het buitenland? Zonder goed advies betaal je onnodig te veel.",
    },
  ];

  return (
    <section className="py-24 md:py-32 bg-dark-950">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-16 scroll-animate">
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-semibold text-dark-50 mb-4 tracking-tight">
            Investeren in buitenlands vastgoed klinkt aantrekkelijk,{" "}
            <span className="text-gradient-gold">maar...</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {points.map((point, i) => (
            <div
              key={i}
              className={`scroll-animate scroll-animate-delay-${i + 1} bg-dark-800/40 border border-dark-700/50 rounded-2xl p-8 hover:border-gold-500/30 hover:scale-[1.02] hover:shadow-xl hover:shadow-gold-500/5 transition-all duration-300 group`}
            >
              <div className="w-14 h-14 bg-gold-500/10 rounded-xl flex items-center justify-center text-gold-400 mb-5 group-hover:bg-gold-500/20 transition-colors">
                {point.icon}
              </div>
              <h3 className="font-heading text-xl font-medium text-dark-50 mb-3 group-hover:text-gold-400 transition-colors">
                {point.title}
              </h3>
              <p className="text-dark-50/50 leading-relaxed font-extralight">{point.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
