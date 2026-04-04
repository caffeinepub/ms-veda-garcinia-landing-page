import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { CheckCircle, Loader2, Package } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

const GOOGLE_SHEET_URL =
  "https://script.google.com/macros/s/AKfycbxPai-wTWBJU10QQVjrlyjxy_MeKbDdR954rv-R6XIywVSNF3MSnIA-1CbNv0v6r0t5_A/exec";

function generateOrderId(): string {
  const timestamp = Date.now().toString(36).toUpperCase();
  const random = Math.random().toString(36).substring(2, 6).toUpperCase();
  return `ORD-${timestamp}-${random}`;
}

async function sendToGoogleSheet(data: {
  orderId: string;
  name: string;
  phone: string;
  address: string;
}): Promise<boolean> {
  try {
    const params = new URLSearchParams({
      orderId: data.orderId,
      name: data.name,
      phone: data.phone,
      address: data.address,
    });
    await fetch(`${GOOGLE_SHEET_URL}?${params.toString()}`, {
      method: "GET",
      mode: "no-cors",
    });
    return true;
  } catch {
    return false;
  }
}

export function OrderFormSection() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [orderId, setOrderId] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState<{
    name?: string;
    phone?: string;
    address?: string;
  }>({});

  const validate = () => {
    const newErrors: { name?: string; phone?: string; address?: string } = {};
    if (!name.trim()) newErrors.name = "Please enter your full name";
    if (!phone.trim() || !/^\d{10}$/.test(phone.trim()))
      newErrors.phone = "Enter a valid 10-digit phone number";
    if (!address.trim())
      newErrors.address = "Please enter your complete address";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setIsSubmitting(true);
    try {
      const newOrderId = generateOrderId();

      // Send to Google Sheet — primary action
      await sendToGoogleSheet({
        orderId: newOrderId,
        name: name.trim(),
        phone: phone.trim(),
        address: address.trim(),
      });

      setOrderId(newOrderId);
      toast.success("Order placed successfully! 🎉", {
        description: `Order ID: #${newOrderId}`,
      });
    } catch {
      toast.error("Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (orderId !== null) {
    return (
      <section id="order-form" className="bg-brand-green-pale py-16 lg:py-24">
        <div className="max-w-lg mx-auto px-4 sm:px-6 text-center">
          <div
            className="rounded-3xl p-10 shadow-xl"
            style={{ background: "oklch(0.178 0.038 155)" }}
            data-ocid="order.success_state"
          >
            <div className="flex justify-center mb-6">
              <div className="w-20 h-20 rounded-full bg-green-400/20 flex items-center justify-center">
                <CheckCircle className="w-12 h-12 text-green-400" />
              </div>
            </div>
            <h3 className="text-3xl font-black text-white mb-3">
              Order Confirmed! 🎉
            </h3>
            <p className="text-white/70 mb-4">
              Aapka order successfully place ho gaya hai!
            </p>
            <div
              className="rounded-xl px-6 py-4 mb-6"
              style={{ background: "oklch(0.22 0.05 155 / 0.7)" }}
            >
              <p className="text-white/60 text-sm mb-1">Order ID</p>
              <p
                className="text-2xl font-black"
                style={{ color: "oklch(0.76 0.16 70)" }}
              >
                #{orderId}
              </p>
            </div>
            <p className="text-white/60 text-sm mb-6">
              📦 3-5 business days mein delivery ho jaayegi.
            </p>
            <a
              href="tel:+918447829877"
              className="inline-block btn-green py-3 px-8 rounded-full text-sm font-bold"
            >
              📞 Call Us for Updates
            </a>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="order-form" className="bg-brand-green-pale py-16 lg:py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-10">
          <span className="inline-block bg-green-100 text-green-800 text-xs font-bold uppercase tracking-widest px-4 py-2 rounded-full mb-4">
            Secure Order
          </span>
          <h2
            className="text-3xl sm:text-4xl font-bold mb-4"
            style={{ color: "oklch(0.178 0.038 155)" }}
          >
            Place Your Order Now 📦
          </h2>
        </div>

        {/* Two-column layout: image left, form right */}
        <div className="flex flex-col lg:flex-row gap-8 items-stretch">
          {/* Image column — 50% width on desktop */}
          <div className="w-full lg:w-1/2 flex-shrink-0">
            <div
              className="h-full rounded-3xl overflow-hidden shadow-xl"
              style={{ minHeight: "400px" }}
            >
              <img
                src="/assets/chatgpt_image_apr_4_2026_04_42_13_pm-019d5833-9b90-729e-8dbf-894e65ee6fdf.png"
                alt="MS Veda Garcinia Cambogia"
                className="w-full h-full object-cover"
                style={{ minHeight: "400px" }}
              />
            </div>
          </div>

          {/* Form column — 50% width on desktop */}
          <div className="w-full lg:w-1/2">
            <div
              className="flex items-center justify-between rounded-2xl px-6 py-4 mb-8 text-white"
              style={{ background: "oklch(0.178 0.038 155)" }}
            >
              <div>
                <p className="text-white/60 text-xs uppercase tracking-wider mb-1">
                  Total Amount
                </p>
                <div className="flex items-center gap-3">
                  <span className="text-white/40 line-through text-sm">
                    ₹1,999
                  </span>
                  <span
                    className="text-2xl font-black"
                    style={{ color: "oklch(0.76 0.16 70)" }}
                  >
                    ₹999
                  </span>
                </div>
              </div>
              <div className="text-right">
                <span
                  className="inline-block text-xs font-bold px-3 py-1 rounded-full text-white"
                  style={{ background: "oklch(0.65 0.2 30)" }}
                >
                  50% OFF
                </span>
                <p className="text-white/60 text-xs mt-1">Buy 1 Get 1 Free</p>
              </div>
            </div>

            <form
              onSubmit={handleSubmit}
              noValidate
              className="space-y-5"
              data-ocid="order.modal"
            >
              <div>
                <Label
                  htmlFor="order-name"
                  className="text-gray-700 font-semibold mb-1.5 block"
                >
                  Full Name *
                </Label>
                <Input
                  id="order-name"
                  type="text"
                  placeholder="Apna poora naam likhein"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="h-12 text-base rounded-xl"
                  autoComplete="name"
                  data-ocid="order.input"
                />
                {errors.name && (
                  <p
                    className="text-red-500 text-xs mt-1"
                    data-ocid="order.error_state"
                  >
                    {errors.name}
                  </p>
                )}
              </div>
              <div>
                <Label
                  htmlFor="order-phone"
                  className="text-gray-700 font-semibold mb-1.5 block"
                >
                  Phone Number * (10 digits)
                </Label>
                <Input
                  id="order-phone"
                  type="tel"
                  placeholder="10-digit mobile number"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="h-12 text-base rounded-xl"
                  autoComplete="tel"
                  maxLength={10}
                  data-ocid="order.input"
                />
                {errors.phone && (
                  <p
                    className="text-red-500 text-xs mt-1"
                    data-ocid="order.error_state"
                  >
                    {errors.phone}
                  </p>
                )}
              </div>
              <div>
                <Label
                  htmlFor="order-address"
                  className="text-gray-700 font-semibold mb-1.5 block"
                >
                  Complete Address * (including city &amp; pincode)
                </Label>
                <Textarea
                  id="order-address"
                  placeholder="Ghar ka address, city, state aur pincode likhein"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  className="text-base rounded-xl min-h-[100px]"
                  autoComplete="street-address"
                  data-ocid="order.textarea"
                />
                {errors.address && (
                  <p
                    className="text-red-500 text-xs mt-1"
                    data-ocid="order.error_state"
                  >
                    {errors.address}
                  </p>
                )}
              </div>
              <button
                type="submit"
                disabled={isSubmitting}
                className="btn-amber w-full py-4 rounded-xl text-lg font-bold flex items-center justify-center gap-2"
                data-ocid="order.submit_button"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-5 h-5 animate-spin" /> Placing Order…
                  </>
                ) : (
                  "🛒 Place Order Now – ₹999 Only"
                )}
              </button>
              <div className="flex items-start gap-3 bg-green-50 rounded-xl p-4">
                <Package className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                <p className="text-green-800 text-xs leading-relaxed">
                  🔒 Your information is safe. Get 10% extra discount on online
                  payment.
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
