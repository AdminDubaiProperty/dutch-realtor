export default function Footer() {
  return (
    <footer className="bg-dark-950 border-t border-dark-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Logo & Tagline */}
          <div className="md:col-span-1">
            <span className="text-gold-400 text-2xl font-heading font-bold">
              Dutch Realtor
            </span>
            <p className="text-dark-500 mt-3 text-sm leading-relaxed">
              Jouw Nederlandse makelaar voor vastgoed wereldwijd. Betrouwbaar, transparant en persoonlijk.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Navigatie</h4>
            <ul className="space-y-2">
              {["Home", "Landen", "Werkwijze", "Over Ons", "Contact"].map(
                (link) => (
                  <li key={link}>
                    <a
                      href={`#${link.toLowerCase().replace(" ", "-")}`}
                      className="text-dark-500 hover:text-gold-400 text-sm transition-colors"
                    >
                      {link}
                    </a>
                  </li>
                )
              )}
            </ul>
          </div>

          {/* Popular Countries */}
          <div>
            <h4 className="text-white font-semibold mb-4">Populaire landen</h4>
            <ul className="space-y-2">
              {["Marokko", "Spanje", "Dubai", "Griekenland", "Curaçao", "Georgië"].map(
                (country) => (
                  <li key={country}>
                    <a
                      href="#landen"
                      className="text-dark-500 hover:text-gold-400 text-sm transition-colors"
                    >
                      {country}
                    </a>
                  </li>
                )
              )}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold mb-4">Contact</h4>
            <ul className="space-y-3 text-sm text-dark-500">
              <li className="flex items-center gap-2">
                <span>📧</span>
                <a
                  href="mailto:info@dutch-realtor.nl"
                  className="hover:text-gold-400 transition-colors"
                >
                  info@dutch-realtor.nl
                </a>
              </li>
              <li className="flex items-center gap-2">
                <span>📞</span>
                <a
                  href="tel:+31201234567"
                  className="hover:text-gold-400 transition-colors"
                >
                  +31 20 123 4567
                </a>
              </li>
              <li className="flex items-center gap-2">
                <span>💬</span>
                <span>WhatsApp: +31 6 12345678</span>
              </li>
            </ul>
            {/* Social Icons */}
            <div className="flex gap-4 mt-5">
              {["Instagram", "LinkedIn", "Facebook", "YouTube"].map((social) => (
                <a
                  key={social}
                  href="#"
                  className="w-9 h-9 bg-dark-800 hover:bg-gold-500/20 rounded-lg flex items-center justify-center text-dark-500 hover:text-gold-400 transition-colors text-xs font-medium"
                  title={social}
                >
                  {social[0]}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-dark-800 text-center text-dark-600 text-sm">
          © 2026 Dutch Realtor. Alle rechten voorbehouden.
        </div>
      </div>
    </footer>
  );
}
