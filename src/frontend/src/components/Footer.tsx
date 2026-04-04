import { Leaf, Phone } from "lucide-react";

export function Footer() {
  const year = new Date().getFullYear();
  const hostname =
    typeof window !== "undefined" ? window.location.hostname : "";

  return (
    <footer
      id="footer"
      className="py-12 lg:py-16"
      style={{ background: "oklch(0.145 0.028 155)" }}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid md:grid-cols-3 gap-10 mb-10">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div
                className="w-10 h-10 rounded-full flex items-center justify-center"
                style={{ background: "oklch(0.52 0.115 140)" }}
              >
                <Leaf className="w-5 h-5 text-white" />
              </div>
              <div>
                <p
                  className="font-bold text-lg"
                  style={{ color: "oklch(0.73 0.1 80)" }}
                >
                  M S Veda
                </p>
                <p className="text-white/50 text-xs">
                  Natural Wellness, Real Results
                </p>
              </div>
            </div>
            <p className="text-white/60 text-sm leading-relaxed">
              India ka trusted natural supplement brand. Pure ayurvedic
              ingredients, science-backed formula.
            </p>
          </div>
          <div>
            <p className="text-white font-semibold mb-4 uppercase tracking-wider text-sm">
              Quick Links
            </p>
            <ul className="space-y-2">
              {[
                { label: "How It Works", href: "#how-it-works" },
                { label: "Benefits", href: "#solution" },
                { label: "Ingredients", href: "#ingredients" },
                { label: "Reviews", href: "#testimonials" },
                { label: "Order Now", href: "#order-form" },
              ].map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      document
                        .querySelector(link.href)
                        ?.scrollIntoView({ behavior: "smooth" });
                    }}
                    className="text-white/60 hover:text-white text-sm transition-colors"
                    data-ocid="footer.link"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="text-white font-semibold mb-4 uppercase tracking-wider text-sm">
              Contact Us
            </p>
            <div className="space-y-3">
              <a
                href="tel:+918447829877"
                className="flex items-center gap-3 text-white/60 hover:text-white transition-colors"
              >
                <Phone className="w-4 h-4" />
                <span className="text-sm">+91 8447829877</span>
              </a>
            </div>
          </div>
        </div>
        <div
          className="pt-8 border-t text-center space-y-3"
          style={{ borderColor: "oklch(1 0 0 / 0.1)" }}
        >
          <p className="text-white/40 text-xs leading-relaxed max-w-3xl mx-auto">
            ⚠️ <strong className="text-white/60">Disclaimer:</strong> Results may
            vary. This product is not intended to diagnose, treat, cure, or
            prevent any disease. Consult a healthcare professional before use.
            Individual results depend on age, diet, metabolism, and lifestyle.
          </p>
          <p className="text-white/40 text-xs">
            © {year} M S Veda. All rights reserved.
          </p>
          <p className="text-white/30 text-xs">
            Built with ❤️ using{" "}
            <a
              href={`https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(hostname)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white/50 transition-colors"
            >
              caffeine.ai
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
