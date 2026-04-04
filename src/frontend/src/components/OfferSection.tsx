import { useEffect, useState } from "react";

const timeUnits = [
  { key: "h", label: "Hours" },
  { key: "m", label: "Minutes" },
  { key: "s", label: "Seconds" },
] as const;

function useCountdown() {
  const [time, setTime] = useState(() => {
    const stored = sessionStorage.getItem("countdownEnd");
    if (stored) {
      const end = Number.parseInt(stored, 10);
      const remaining = Math.max(0, Math.floor((end - Date.now()) / 1000));
      if (remaining > 0) return remaining;
    }
    const secs = 24 * 60 * 60;
    sessionStorage.setItem("countdownEnd", String(Date.now() + secs * 1000));
    return secs;
  });

  useEffect(() => {
    if (time <= 0) return;
    const id = setInterval(() => {
      setTime((prev) => (prev <= 1 ? 0 : prev - 1));
    }, 1000);
    return () => clearInterval(id);
  }, [time]);

  return {
    h: String(Math.floor(time / 3600)).padStart(2, "0"),
    m: String(Math.floor((time % 3600) / 60)).padStart(2, "0"),
    s: String(time % 60).padStart(2, "0"),
  };
}

export function OfferSection() {
  const countdown = useCountdown();
  const scrollToOrder = () => {
    const el = document.querySelector("#order-form");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="offer" className="gradient-offer py-16 lg:py-24">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 bg-red-500/20 border border-red-400/30 text-red-300 text-sm font-bold px-4 py-2 rounded-full mb-6 pulse-red">
            🔥 Limited Time Offer – Sirf Aaj Ke Liye!
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-white mb-8">
            Special Offer Ends In:
          </h2>
          <div className="flex items-center justify-center gap-3 mb-8">
            {timeUnits.map((unit, i) => (
              <div key={unit.key} className="flex items-center gap-3">
                <div
                  className="flex flex-col items-center bg-white/10 backdrop-blur rounded-xl px-5 py-4 min-w-[80px]"
                  style={{ border: "1px solid oklch(1 0 0 / 0.15)" }}
                >
                  <span className="text-4xl sm:text-5xl font-black text-white countdown-glow tabular-nums">
                    {countdown[unit.key]}
                  </span>
                  <span className="text-white/50 text-xs uppercase tracking-wider mt-1">
                    {unit.label}
                  </span>
                </div>
                {i < 2 && (
                  <span className="text-3xl font-black text-white/60">:</span>
                )}
              </div>
            ))}
          </div>
        </div>
        <div
          className="rounded-3xl p-8 sm:p-10 border border-white/15 text-center mb-8"
          style={{ background: "oklch(0.22 0.05 155 / 0.7)" }}
        >
          <div
            className="inline-block text-white text-base font-black px-6 py-2 rounded-full mb-6"
            style={{ background: "oklch(0.65 0.2 30)" }}
          >
            🎁 BUY 1 GET 1 FREE!
          </div>
          <div className="flex items-center justify-center gap-4 mb-4">
            <span className="text-white/40 line-through text-2xl font-bold">
              ₹1,999
            </span>
            <span
              className="text-5xl sm:text-6xl font-black"
              style={{ color: "oklch(0.76 0.16 70)" }}
            >
              ₹999
            </span>
          </div>
          <div
            className="inline-block text-white text-sm font-black px-4 py-1.5 rounded-full mb-6"
            style={{ background: "oklch(0.55 0.18 30)" }}
          >
            50% OFF – Save ₹1,000!
          </div>
          <p className="text-white/70 text-base mb-2">
            📦 Free Delivery Across India
          </p>
          <p className="text-white/70 text-base mb-8">
            💳 COD Available | 🔒 Secure Payment
          </p>
          <button
            type="button"
            onClick={scrollToOrder}
            className="btn-amber py-5 px-14 rounded-full text-xl font-black shadow-amber w-full sm:w-auto"
            data-ocid="offer.primary_button"
          >
            🛒 Order Now – ₹999 Only!
          </button>
        </div>
        <p className="text-center text-white/40 text-sm">
          ⚠️ Offer valid while stocks last. Price may increase after the timer
          ends.
        </p>
      </div>
    </section>
  );
}
