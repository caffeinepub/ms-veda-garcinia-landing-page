const painPoints = [
  {
    emoji: "😩",
    title: "Belly fat nahi ja raha?",
    desc: "Kitni bhi koshish karo, tummy fat stubborn hi rehta hai. Frustrated ho gaye ho!",
  },
  {
    emoji: "🐢",
    title: "Metabolism slow hai?",
    desc: "Weight badhta hi ja raha hai aur aap thaka hua mehsoos karte ho. Kuch bhi kaam nahi karta.",
  },
  {
    emoji: "⏰",
    title: "Gym ka time nahi?",
    desc: "Busy life mein gym aur strict diet follow karna practically impossible lagta hai.",
  },
];

export function ProblemSection() {
  return (
    <section id="problem" className="bg-white py-16 lg:py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12">
          <h2
            className="text-3xl sm:text-4xl font-bold mb-4"
            style={{ color: "oklch(0.178 0.038 155)" }}
          >
            Kya Aap Bhi Pareshan Hain? 😔
          </h2>
          <p className="text-gray-500 text-lg max-w-xl mx-auto">
            Aap akele nahi hain. Lakhon Indians face karte hain yeh problems…
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {painPoints.map((point) => (
            <div
              key={point.title}
              className="rounded-2xl p-6 border-2 border-gray-100 hover:border-red-200 transition-colors"
              style={{ background: "#fff8f8" }}
            >
              <div className="text-5xl mb-4">{point.emoji}</div>
              <h3 className="font-bold text-xl mb-2 text-gray-800">
                {point.title}
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                {point.desc}
              </p>
            </div>
          ))}
        </div>
        <div className="text-center">
          <div
            className="inline-block rounded-2xl px-8 py-6 max-w-2xl mx-auto"
            style={{ background: "oklch(0.178 0.038 155)" }}
          >
            <p
              className="text-xl sm:text-2xl font-bold mb-2"
              style={{
                fontFamily: "'Noto Sans Devanagari', sans-serif",
                background:
                  "linear-gradient(135deg, #ffffff 0%, oklch(0.88 0.18 70) 40%, oklch(0.76 0.20 130) 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              सब कुछ Try किया, फिर भी कोई असर नहीं हुआ?
            </p>
            <p className="text-white/70 text-base">
              Diet ki, gym join kiya, supplements liye – phir bhi koi fark nahi
              pada?
              <span className="text-yellow-300 font-semibold">
                {" "}
                Ab sab badlega.
              </span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
