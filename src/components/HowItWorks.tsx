import { MessageCircle, FileSearch, Key } from "lucide-react";

export default function HowItWorks() {
  const steps = [
    {
      num: "01",
      icon: <MessageCircle size={24} strokeWidth={1.5} />,
      title: "Orientatiegesprek",
      desc: "Gratis en vrijblijvend. We bespreken je wensen, budget en doelen.",
    },
    {
      num: "02",
      icon: <FileSearch size={24} strokeWidth={1.5} />,
      title: "Persoonlijk advies",
      desc: "Landselectie, objectselectie en financiele doorrekening op maat.",
    },
    {
      num: "03",
      icon: <Key size={24} strokeWidth={1.5} />,
      title: "Begeleiding tot sleuteloverdracht",
      desc: "Van bod tot notaris, wij regelen het volledige traject.",
    },
  ];

  return (
    <section id="werkwijze" className="py-24 md:py-32 bg-dark-900/30">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-16 scroll-animate">
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-black text-dark-50 mb-4 tracking-tight">
            In 3 stappen naar jouw{" "}
            <span className="text-gradient-gold">buitenlandse woning</span>
          </h2>
        </div>

        <div className="relative">
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-gold-500/50 via-gold-500/20 to-transparent" />

          <div className="space-y-12 md:space-y-16">
            {steps.map((step, i) => (
              <div
                key={i}
                className={`scroll-animate scroll-animate-delay-${i + 1} relative flex flex-col md:flex-row items-center gap-6 md:gap-12 ${
                  i % 2 === 1 ? "md:flex-row-reverse" : ""
                }`}
              >
                <div className="relative z-10 flex-shrink-0 w-20 h-20 bg-dark-950 border-2 border-gold-500/60 rounded-full flex items-center justify-center">
                  <span className="font-heading text-2xl font-black text-gold-400">
                    {step.num}
                  </span>
                </div>

                <div
                  className={`flex-1 bg-dark-800/40 border border-dark-700/50 rounded-2xl p-8 text-center md:text-left ${
                    i % 2 === 1 ? "md:text-right" : ""
                  }`}
                >
                  <div className={`flex items-center gap-3 mb-3 justify-center ${i % 2 === 1 ? "md:justify-end" : "md:justify-start"}`}>
                    <span className="text-gold-400">{step.icon}</span>
                    <h3 className="font-heading text-2xl font-bold text-dark-50">
                      {step.title}
                    </h3>
                  </div>
                  <p className="text-dark-50/50 text-lg leading-relaxed font-light">
                    {step.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
