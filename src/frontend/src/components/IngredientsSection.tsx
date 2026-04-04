const ingredients = [
  {
    emoji: "🌿",
    name: "Garcinia Cambogia",
    subtitle: "HCA Extract – The Star Ingredient",
    desc: "Contains Hydroxycitric Acid (HCA) that blocks an enzyme your body uses to make fat. Also suppresses appetite and reduces belly fat.",
    badge: "Primary Ingredient",
  },
  {
    emoji: "🍎",
    name: "Apple Cider Vinegar",
    subtitle: "Metabolism Booster",
    desc: "Boosts metabolism, detoxifies your body, regulates blood sugar levels, and promotes healthy digestion for faster weight loss.",
    badge: "Metabolic Support",
  },
  {
    emoji: "🍵",
    name: "Green Tea Extract",
    subtitle: "Antioxidant Powerhouse",
    desc: "Rich in EGCG antioxidants that accelerate fat burning, boost energy naturally, and protect your cells from damage.",
    badge: "Fat Oxidizer",
  },
];

export function IngredientsSection() {
  return (
    <section id="ingredients" className="bg-white py-16 lg:py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-10">
          <span className="inline-block bg-green-100 text-green-800 text-xs font-bold uppercase tracking-widest px-4 py-2 rounded-full mb-4">
            Pure & Natural
          </span>
          <h2
            className="text-3xl sm:text-4xl font-bold mb-4"
            style={{ color: "oklch(0.178 0.038 155)" }}
          >
            100% Natural Ingredients
          </h2>
          <p className="text-gray-500 text-lg max-w-xl mx-auto">
            Carefully selected from nature, scientifically tested for results
          </p>
        </div>
        <div className="rounded-3xl overflow-hidden mb-12 shadow-md">
          <img
            src="/assets/generated/ingredients-flatlay.dim_800x500.jpg"
            alt="Natural ingredients"
            className="w-full h-56 sm:h-72 object-cover"
          />
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {ingredients.map((ing) => (
            <div
              key={ing.name}
              className="rounded-2xl border-2 border-gray-100 p-6 hover:border-green-200 transition-colors"
            >
              <div className="text-5xl mb-3">{ing.emoji}</div>
              <span
                className="inline-block text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full mb-3"
                style={{
                  background: "oklch(0.95 0.04 140)",
                  color: "oklch(0.35 0.1 140)",
                }}
              >
                {ing.badge}
              </span>
              <h3 className="font-bold text-xl mb-1 text-gray-800">
                {ing.name}
              </h3>
              <p
                className="text-sm font-semibold mb-3"
                style={{ color: "oklch(0.52 0.115 140)" }}
              >
                {ing.subtitle}
              </p>
              <p className="text-gray-500 text-sm leading-relaxed">
                {ing.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
