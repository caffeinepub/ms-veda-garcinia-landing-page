export function StickyOrderCTA() {
  const scrollToOrder = () => {
    const el = document.querySelector("#order-form");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div
      className="md:hidden fixed bottom-0 left-0 right-0 z-[9998] p-3"
      style={{
        background: "oklch(0.145 0.028 155)",
        borderTop: "1px solid oklch(1 0 0 / 0.1)",
      }}
    >
      <button
        type="button"
        onClick={scrollToOrder}
        className="btn-amber w-full py-4 rounded-xl text-base font-black"
        data-ocid="sticky.primary_button"
      >
        🛒 Order Now – ₹999 Only
      </button>
    </div>
  );
}
