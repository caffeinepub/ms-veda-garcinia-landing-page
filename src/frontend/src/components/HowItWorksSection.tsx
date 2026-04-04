const steps = [
  {
    title: "Take 1 Capsule Daily",
    desc: "Subah khaane se 30 minutes pehle 1 capsule warm water ke saath lein. Simple aur easy!",
    emoji: "💊",
  },
  {
    title: "Boost Your Metabolism",
    desc: "HCA and natural extracts aapke metabolism ko activate karte hain – body fat burning mode mein aa jaati hai.",
    emoji: "⚡",
  },
  {
    title: "Watch Fat Melt Away!",
    desc: "2-4 hafte mein visible results! Belly fat reduce, energy badhe, aur aap feel karein amazing!",
    emoji: "🔥",
  },
];

export function HowItWorksSection() {
  const scrollToOrder = () => {
    const el = document.querySelector("#order-form");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="how-it-works" className="bg-white py-16 lg:py-24">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12">
          <span className="inline-block bg-green-100 text-green-800 text-xs font-bold uppercase tracking-widest px-4 py-2 rounded-full mb-4">
            Simple & Effective
          </span>
          <h2
            className="text-3xl sm:text-4xl font-bold mb-4"
            style={{ color: "oklch(0.178 0.038 155)" }}
          >
            Sirf 3 Steps Mein Results!
          </h2>
          <p className="text-gray-500 text-lg">
            Itna easy hai ki aap believe nahi karenge
          </p>
        </div>
        <div className="relative">
          <div
            className="hidden lg:block absolute top-16 h-0.5"
            style={{
              left: "calc(16.67% + 32px)",
              right: "calc(16.67% + 32px)",
              background:
                "linear-gradient(90deg, oklch(0.52 0.115 140), oklch(0.68 0.148 65))",
            }}
          />
          <div className="grid md:grid-cols-3 gap-8">
            {steps.map((step, i) => (
              <div
                key={step.title}
                className="flex flex-col items-center text-center"
                data-ocid={`how-it-works.item.${i + 1}`}
              >
                <div
                  className="relative w-20 h-20 rounded-full flex items-center justify-center text-3xl mb-4 shadow-green z-10"
                  style={{ background: "oklch(0.178 0.038 155)" }}
                >
                  {step.emoji}
                  <span
                    className="absolute -top-2 -right-2 w-7 h-7 rounded-full text-xs font-black flex items-center justify-center text-white"
                    style={{ background: "oklch(0.68 0.148 65)" }}
                  >
                    {i + 1}
                  </span>
                </div>
                <h3 className="font-bold text-xl mb-3 text-gray-800">
                  {step.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed max-w-xs mx-auto">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
        <div className="text-center mt-12">
          <button
            type="button"
            onClick={scrollToOrder}
            className="btn-green py-4 px-10 rounded-full text-base font-bold shadow-green"
            data-ocid="how-it-works.primary_button"
          >
            🚀 Start Today – Order Now
          </button>
        </div>
      </div>
    </section>
  );
}
