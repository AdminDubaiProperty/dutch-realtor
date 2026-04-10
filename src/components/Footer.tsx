import { Mail, Phone, MessageCircle, Globe, Users, Share2, Play } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-dark-950 border-t border-dark-700/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          <div className="md:col-span-1">
            <span className="text-gold-400 text-2xl font-heading font-extrabold tracking-tight">
              Dutch Realtor
            </span>
            <p className="text-dark-50/40 mt-3 text-sm leading-relaxed font-light">
              Jouw Nederlandse makelaar voor vastgoed wereldwijd. Betrouwbaar, transparant en persoonlijk.
            </p>
          </div>

          <div>
            <h4 className="text-dark-50 font-semibold mb-4">Navigatie</h4>
            <ul className="space-y-2">
              {["Home", "Landen", "Werkwijze", "Over Ons", "Contact"].map(
                (link) => (
                  <li key={link}>
                    <a
                      href={`#${link.toLowerCase().replace(" ", "-")}`}
                      className="text-dark-50/40 hover:text-gold-400 text-sm transition-colors"
                    >
                      {link}
                    </a>
                  </li>
                )
              )}
            </ul>
          </div>

          <div>
            <h4 className="text-dark-50 font-semibold mb-4">Populaire landen</h4>
            <ul className="space-y-2">
              {["Marokko", "Spanje", "Dubai", "Griekenland", "Curacao", "Georgie"].map(
                (country) => (
                  <li key={country}>
                    <a
                      href="#landen"
                      className="text-dark-50/40 hover:text-gold-400 text-sm transition-colors"
                    >
                      {country}
                    </a>
                  </li>
                )
              )}
            </ul>
          </div>

          <div>
            <h4 className="text-dark-50 font-semibold mb-4">Contact</h4>
            <ul className="space-y-3 text-sm text-dark-50/40">
              <li className="flex items-center gap-2">
                <Mail size={16} strokeWidth={1.5} className="text-gold-400/60" />
                <a
                  href="mailto:info@dutch-realtor.nl"
                  className="hover:text-gold-400 transition-colors"
                >
                  info@dutch-realtor.nl
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Phone size={16} strokeWidth={1.5} className="text-gold-400/60" />
                <a
                  href="tel:+31201234567"
                  className="hover:text-gold-400 transition-colors"
                >
                  +31 20 123 4567
                </a>
              </li>
              <li className="flex items-center gap-2">
                <MessageCircle size={16} strokeWidth={1.5} className="text-gold-400/60" />
                <span>WhatsApp: +31 6 12345678</span>
              </li>
            </ul>
            <div className="flex gap-3 mt-5">
              {[
                { icon: <Globe size={18} strokeWidth={1.5} />, label: "Instagram" },
                { icon: <Share2 size={18} strokeWidth={1.5} />, label: "LinkedIn" },
                { icon: <Users size={18} strokeWidth={1.5} />, label: "Facebook" },
                { icon: <Play size={18} strokeWidth={1.5} />, label: "YouTube" },
              ].map((social) => (
                <a
                  key={social.label}
                  href="#"
                  className="w-9 h-9 bg-dark-800/60 hover:bg-gold-500/15 border border-dark-700/50 hover:border-gold-500/30 rounded-lg flex items-center justify-center text-dark-50/40 hover:text-gold-400 transition-all duration-200"
                  title={social.label}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-dark-700/50 text-center text-dark-50/30 text-sm">
          2026 Dutch Realtor. Alle rechten voorbehouden.
        </div>
      </div>
    </footer>
  );
}
