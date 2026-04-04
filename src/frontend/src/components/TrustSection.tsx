const badges = [
  {
    emoji: "✅",
    title: "100% Natural",
    desc: "No synthetic chemicals or artificial fillers",
  },
  {
    emoji: "🚫",
    title: "No Side Effects",
    desc: "Clinically tested, completely safe for daily use",
  },
  {
    emoji: "🌿",
    title: "Ayurvedic Formula",
    desc: "Time-tested ancient wisdom, modern science",
  },
  {
    emoji: "🏭",
    title: "GMP Certified",
    desc: "Manufactured in certified, hygienic facilities",
  },
];

export function TrustSection() {
  return (
    <section id="trust" className="bg-white py-16 lg:py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-10">
          <h2
            className="text-3xl sm:text-4xl font-bold mb-4"
            style={{ color: "oklch(0.178 0.038 155)" }}
          >
            100% Safe & Trusted
          </h2>
          <p className="text-gray-500 text-lg max-w-xl mx-auto">
            Aapki safety humaari priority hai. Isliye har capsule quality tested
            hai.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {badges.map((b, i) => (
            <div
              key={b.title}
              className="flex flex-col items-center text-center p-6 rounded-2xl border-2 hover:border-green-200 transition-colors"
              style={{ borderColor: "oklch(0.90 0.02 140)" }}
              data-ocid={`trust.item.${i + 1}`}
            >
              <div
                className="w-16 h-16 rounded-full flex items-center justify-center text-3xl mb-4"
                style={{ background: "oklch(0.95 0.04 140)" }}
              >
                {b.emoji}
              </div>
              <h3
                className="font-bold text-lg mb-2"
                style={{ color: "oklch(0.178 0.038 155)" }}
              >
                {b.title}
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed">{b.desc}</p>
            </div>
          ))}
        </div>
        <div
          className="mt-10 rounded-2xl p-6 flex flex-wrap items-center justify-center gap-6"
          style={{ background: "oklch(0.178 0.038 155)" }}
        >
          {[
            "🏆 FSSAI Approved",
            "🧪 Lab Tested",
            "🌱 Vegan Friendly",
            "♻️ Eco Packaging",
            "🚚 Pan India Delivery",
          ].map((item) => (
            <span key={item} className="text-white/80 text-sm font-medium">
              {item}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
