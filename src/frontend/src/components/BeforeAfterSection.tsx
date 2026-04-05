const transformations = [
  {
    name: "Priya S.",
    location: "Delhi",
    result: "Lost 8kg in 7 weeks! 🔥",
    duration: "7 weeks",
    before: "68 kg",
    after: "60 kg",
    extraImage:
      "/assets/chatgpt_image_apr_5_2026_10_44_33_am-019d5c12-c4c9-7265-bded-828b308f0bc6.png",
  },
  {
    name: "Rahul M.",
    location: "Mumbai",
    result: "Belly fat gone in 6 weeks!",
    duration: "6 weeks",
    before: "88 kg",
    after: "80 kg",
    extraImage: undefined,
  },
  {
    name: "Anjali K.",
    location: "Bangalore",
    result: "6kg down, confidence up! ✨",
    duration: "5 weeks",
    before: "72 kg",
    after: "66 kg",
    extraImage:
      "/assets/chatgpt_image_apr_5_2026_10_22_36_am-019d5bfd-a2c2-771e-8d80-b27b3142412c.png",
  },
];

export function BeforeAfterSection() {
  const scrollToOrder = () => {
    const el = document.querySelector("#order-form");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="before-after" className="bg-brand-dark py-16 lg:py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12">
          <span
            className="inline-block text-xs font-bold uppercase tracking-widest px-4 py-2 rounded-full mb-4"
            style={{
              background: "oklch(0.52 0.115 140 / 0.3)",
              color: "oklch(0.78 0.1 140)",
            }}
          >
            Real Transformations
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Real Results, Real People
          </h2>
          <p className="text-white/60 text-lg max-w-xl mx-auto">
            Yeh koi filters nahi hain – yeh asli results hain hamare customers
            ke
          </p>
        </div>
        <div className="rounded-3xl overflow-hidden mb-10 shadow-2xl border border-white/10">
          <img
            src="/assets/generated/before-after-1.dim_800x500.jpg"
            alt="Weight loss transformation"
            className="w-full h-64 sm:h-80 object-cover"
          />
        </div>
        <div className="grid md:grid-cols-3 gap-6 mb-10">
          {transformations.map((t) => (
            <div key={t.name} className="flex flex-col">
              {t.extraImage && (
                <div className="rounded-2xl overflow-hidden mb-3 border border-white/10">
                  <img
                    src={t.extraImage}
                    alt={`${t.name} transformation`}
                    className="w-full object-cover"
                    style={{ maxHeight: "220px" }}
                  />
                </div>
              )}
              <div
                className="rounded-2xl p-6 border border-white/10 flex-1"
                style={{ background: "oklch(0.22 0.04 155 / 0.8)" }}
              >
                <div className="flex justify-between items-center mb-4">
                  <div>
                    <p className="text-white font-bold">{t.name}</p>
                    <p className="text-white/50 text-xs">{t.location}</p>
                  </div>
                  <span
                    className="text-xs font-bold px-3 py-1 rounded-full"
                    style={{
                      background: "oklch(0.68 0.148 65 / 0.2)",
                      color: "oklch(0.76 0.16 70)",
                    }}
                  >
                    {t.duration}
                  </span>
                </div>
                <div className="flex gap-4 mb-4">
                  <div
                    className="flex-1 text-center py-3 rounded-xl"
                    style={{ background: "oklch(0.55 0.18 30 / 0.2)" }}
                  >
                    <p className="text-white/50 text-xs mb-1">Before</p>
                    <p className="text-white font-bold">{t.before}</p>
                  </div>
                  <div className="flex items-center text-white/40 font-bold">
                    →
                  </div>
                  <div
                    className="flex-1 text-center py-3 rounded-xl"
                    style={{ background: "oklch(0.52 0.115 140 / 0.25)" }}
                  >
                    <p className="text-white/50 text-xs mb-1">After</p>
                    <p
                      className="font-bold"
                      style={{ color: "oklch(0.78 0.12 140)" }}
                    >
                      {t.after}
                    </p>
                  </div>
                </div>
                <p className="text-white font-semibold text-sm text-center">
                  {t.result}
                </p>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center">
          <button
            type="button"
            onClick={scrollToOrder}
            className="btn-amber py-4 px-10 rounded-full text-base font-bold shadow-amber"
            data-ocid="before-after.primary_button"
          >
            🌟 Start My Transformation
          </button>
        </div>
      </div>
    </section>
  );
}
