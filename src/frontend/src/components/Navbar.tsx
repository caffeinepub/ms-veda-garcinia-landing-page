import { Leaf, Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

const navLinks = [
  { label: "Home", href: "#hero" },
  { label: "How it Works", href: "#how-it-works" },
  { label: "Benefits", href: "#solution" },
  { label: "Ingredients", href: "#ingredients" },
  { label: "Before/After", href: "#before-after" },
  { label: "Reviews", href: "#testimonials" },
];

function scrollToSection(href: string) {
  const el = document.querySelector(href);
  if (el) el.scrollIntoView({ behavior: "smooth" });
}

export function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "shadow-lg" : ""
      }`}
      style={{ minHeight: "72px", background: "oklch(0.145 0.028 155)" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-[72px]">
        <button
          type="button"
          onClick={() => scrollToSection("#hero")}
          className="flex items-center gap-2 bg-transparent border-0 cursor-pointer"
          data-ocid="nav.link"
        >
          <div
            className="w-9 h-9 rounded-full flex items-center justify-center"
            style={{ background: "oklch(0.52 0.115 140)" }}
          >
            <Leaf className="w-5 h-5 text-white" />
          </div>
          <div className="flex flex-col leading-none">
            <span
              className="font-bold text-lg tracking-wide"
              style={{ color: "oklch(0.73 0.1 80)" }}
            >
              M S Veda
            </span>
            <span className="text-xs text-white/50 tracking-wider">
              GARCINIA CAMBOGIA
            </span>
          </div>
        </button>

        <nav className="hidden lg:flex items-center gap-6">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => {
                e.preventDefault();
                scrollToSection(link.href);
              }}
              className="text-white/80 hover:text-white text-sm font-medium transition-colors"
              data-ocid="nav.link"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden lg:block">
          <button
            type="button"
            onClick={() => scrollToSection("#order-form")}
            className="btn-green px-6 py-2.5 rounded-full text-sm font-semibold"
            data-ocid="nav.primary_button"
          >
            Order Now
          </button>
        </div>

        <button
          type="button"
          className="lg:hidden text-white p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
          data-ocid="nav.toggle"
        >
          {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {menuOpen && (
        <div
          style={{ background: "oklch(0.12 0.025 155)" }}
          className="lg:hidden border-t border-white/10"
        >
          <nav className="px-4 py-4 flex flex-col gap-3">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  setMenuOpen(false);
                  scrollToSection(link.href);
                }}
                className="text-white/80 hover:text-white py-2 text-sm font-medium border-b border-white/5"
                data-ocid="nav.link"
              >
                {link.label}
              </a>
            ))}
            <button
              type="button"
              onClick={() => {
                setMenuOpen(false);
                scrollToSection("#order-form");
              }}
              className="btn-amber mt-2 py-3 rounded-full text-sm font-semibold w-full"
              data-ocid="nav.primary_button"
            >
              Order Now – ₹999 Only
            </button>
          </nav>
        </div>
      )}
    </header>
  );
}
