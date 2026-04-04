export function HeroSection() {
  const scrollToOrder = () => {
    const el = document.querySelector("#order-form");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      className="relative overflow-hidden bg-black"
      style={{ minHeight: "100svh" }}
    >
      {/* Subtle ambient background */}
      <div
        className="absolute top-20 right-0 w-96 h-96 rounded-full opacity-10 z-0"
        style={{
          background:
            "radial-gradient(circle, oklch(0.62 0.12 140), transparent)",
          filter: "blur(60px)",
        }}
      />
      <div
        className="absolute bottom-10 left-0 w-72 h-72 rounded-full opacity-10 z-0"
        style={{
          background:
            "radial-gradient(circle, oklch(0.68 0.148 65), transparent)",
          filter: "blur(60px)",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20 pt-[88px]">
        <div className="flex flex-col items-center text-center gap-6">
          {/* Headline */}
          <h1
            id="ik3i8a"
            className="text-3xl sm:text-4xl lg:text-5xl font-black leading-tight tracking-tight"
            style={{
              fontFamily: "'Noto Sans Devanagari', sans-serif",
              background:
                "linear-gradient(135deg, #ffffff 0%, oklch(0.88 0.18 70) 40%, oklch(0.76 0.20 130) 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
              textShadow: "none",
              lineHeight: "1.3",
            }}
          >
            नेचुरल तरीके से वजन घटाएं,{" "}
            <span
              style={{
                background:
                  "linear-gradient(135deg, oklch(0.9 0.22 70) 0%, oklch(0.82 0.20 55) 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              बिना किसी साइड इफेक्ट के
            </span>
          </h1>

          {/* Hero Image — between headline and subheadline */}
          <div className="w-full max-w-md mx-auto rounded-2xl overflow-hidden shadow-2xl">
            <img
              src="/assets/hhggdhh-019d5804-cfbf-76be-82da-26fc23ee6866.jpg"
              alt="MS Veda Garcinia Cambogia"
              className="w-full h-auto object-cover"
              style={{ maxHeight: "420px", objectPosition: "center" }}
            />
          </div>

          {/* Subheadline */}
          <p
            className="text-white/85 text-base sm:text-lg leading-relaxed font-semibold max-w-2xl"
            style={{
              fontFamily: "'Noto Sans Devanagari', sans-serif",
            }}
          >
            <span
              className="font-bold"
              style={{ color: "oklch(0.82 0.16 75)" }}
            >
              MS Veda Garcinia Cambogia
            </span>{" "}
            के साथ तेजी से वजन कम करें और पाएं{" "}
            <span
              className="font-bold"
              style={{ color: "oklch(0.80 0.18 140)" }}
            >
              स्लिम, फिट और कॉन्फिडेंट लुक
            </span>
          </p>

          <div className="inline-flex items-center gap-2 bg-red-600/90 text-white text-xs font-bold px-4 py-2 rounded-full pulse-red">
            <span className="w-2 h-2 bg-white rounded-full inline-block" />⚡
            Limited Stock Available!
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              type="button"
              onClick={scrollToOrder}
              className="btn-amber py-4 px-10 rounded-full text-lg font-black shadow-amber"
              data-ocid="hero.primary_button"
            >
              🛒 Order Now – ₹999 Only
            </button>
          </div>

          <div className="flex items-center gap-3 justify-center">
            <div className="flex -space-x-2">
              {["P", "R", "A", "N"].map((letter) => (
                <div
                  key={letter}
                  className="w-8 h-8 rounded-full border-2 border-white flex items-center justify-center text-white text-xs font-bold"
                  style={{ background: "oklch(0.52 0.115 140)" }}
                >
                  {letter}
                </div>
              ))}
            </div>
            <p className="text-white/70 text-sm">
              <span className="text-white font-bold">10,000+</span> happy
              customers!
            </p>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/10 flex flex-wrap gap-6 items-center justify-center">
          {[
            "✅ 100% Natural",
            "🌿 Ayurvedic Formula",
            "🏭 GMP Certified",
            "🚀 Fast Delivery",
          ].map((item) => (
            <span key={item} className="text-white/70 text-sm font-medium">
              {item}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
