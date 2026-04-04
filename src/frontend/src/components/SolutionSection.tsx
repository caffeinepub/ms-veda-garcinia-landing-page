import { Ban, Flame, Utensils, Zap } from "lucide-react";

const benefits = [
  {
    icon: Flame,
    title: "Boost Metabolism",
    desc: "Speed up fat burning process naturally with HCA extract",
    color: "oklch(0.65 0.2 30)",
    bg: "oklch(0.97 0.03 30)",
  },
  {
    icon: Utensils,
    title: "Reduce Appetite",
    desc: "Eat less, crave less – feel full longer throughout the day",
    color: "oklch(0.52 0.115 140)",
    bg: "oklch(0.95 0.03 140)",
  },
  {
    icon: Ban,
    title: "Block Fat Production",
    desc: "Stop new fat from forming at the cellular level",
    color: "oklch(0.55 0.18 265)",
    bg: "oklch(0.95 0.03 265)",
  },
  {
    icon: Zap,
    title: "Increase Energy",
    desc: "Stay active, alert, and energized all day long",
    color: "oklch(0.68 0.148 65)",
    bg: "oklch(0.97 0.04 65)",
  },
];

export function SolutionSection() {
  const scrollToOrder = () => {
    const el = document.querySelector("#order-form");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="solution" className="bg-brand-green-pale py-16 lg:py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12">
          <span className="inline-block bg-green-100 text-green-800 text-xs font-bold uppercase tracking-widest px-4 py-2 rounded-full mb-4">
            The Solution
          </span>
          <h2
            className="text-3xl sm:text-4xl font-bold mb-4"
            style={{ color: "oklch(0.178 0.038 155)" }}
          >
            Ab Solution Mil Gaya! ✅
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            M S Veda Garcinia-Cambogia Capsules – ek powerful natural formula jo
            kaam karta hai
          </p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
          {benefits.map((b) => (
            <div
              key={b.title}
              className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow text-center"
            >
              <div
                className="w-14 h-14 rounded-2xl flex items-center justify-center mx-auto mb-4"
                style={{ background: b.bg }}
              >
                <b.icon className="w-7 h-7" style={{ color: b.color }} />
              </div>
              <h3 className="font-bold text-lg mb-2 text-gray-800">
                {b.title}
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed">{b.desc}</p>
            </div>
          ))}
        </div>
        <div className="text-center">
          <button
            type="button"
            onClick={scrollToOrder}
            className="btn-green py-4 px-10 rounded-full text-base font-bold shadow-green"
            data-ocid="solution.primary_button"
          >
            🛒 Try It Now – ₹999 Only
          </button>
        </div>
      </div>
    </section>
  );
}
