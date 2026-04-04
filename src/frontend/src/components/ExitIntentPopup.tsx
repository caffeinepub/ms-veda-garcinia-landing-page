import { Dialog, DialogContent } from "@/components/ui/dialog";
import { X } from "lucide-react";

interface Props {
  onClose: () => void;
}

export function ExitIntentPopup({ onClose }: Props) {
  const handleOrderClick = () => {
    onClose();
    const el = document.querySelector("#order-form");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <Dialog open onOpenChange={onClose}>
      <DialogContent
        className="max-w-md border-0 p-0 overflow-hidden"
        style={{ background: "oklch(0.145 0.028 155)" }}
        data-ocid="exit.dialog"
      >
        <div
          className="h-2 w-full"
          style={{
            background:
              "linear-gradient(90deg, oklch(0.52 0.115 140), oklch(0.68 0.148 65))",
          }}
        />
        <button
          type="button"
          onClick={onClose}
          className="absolute top-4 right-4 text-white/50 hover:text-white transition-colors z-10"
          aria-label="Close"
          data-ocid="exit.close_button"
        >
          <X className="w-5 h-5" />
        </button>
        <div className="p-8 text-center">
          <div className="text-5xl mb-4">🛑</div>
          <h2 className="text-2xl font-black text-white mb-2">
            Ruko! Ek Special Offer Hai!
          </h2>
          <p className="text-white/70 text-sm mb-6 leading-relaxed">
            Abhi order karein aur extra{" "}
            <span className="text-yellow-300 font-bold">10% OFF</span> paayein!
          </p>
          <div
            className="rounded-2xl px-6 py-5 mb-6 border-2"
            style={{
              background: "oklch(0.22 0.05 155 / 0.7)",
              borderColor: "oklch(0.68 0.148 65 / 0.4)",
            }}
          >
            <p className="text-white/60 text-xs uppercase tracking-widest mb-2">
              Your Coupon Code
            </p>
            <div
              className="text-2xl font-black tracking-widest"
              style={{ color: "oklch(0.76 0.16 70)" }}
            >
              MSVEDAFAT10
            </div>
            <p className="text-white/50 text-xs mt-2">Sirf aaj ke liye valid</p>
          </div>
          <button
            type="button"
            onClick={handleOrderClick}
            className="btn-amber w-full py-4 rounded-xl text-base font-black mb-3"
            data-ocid="exit.confirm_button"
          >
            Haan! Mujhe Discount Chahiye 🎉
          </button>
          <button
            type="button"
            onClick={onClose}
            className="w-full text-white/40 text-sm hover:text-white/70 transition-colors py-2"
            data-ocid="exit.cancel_button"
          >
            Nahi, mujhe full price pe chahiye
          </button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
