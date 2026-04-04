import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { CheckCircle, Loader2, Package } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";
import { useSubmitOrder, useTotalOrderCount } from "../hooks/useQueries";

export function OrderFormSection() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [orderId, setOrderId] = useState<bigint | null>(null);
  const [errors, setErrors] = useState<{
    name?: string;
    phone?: string;
    address?: string;
  }>({});

  const { data: totalCount } = useTotalOrderCount();
  const submitOrder = useSubmitOrder();

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
    try {
      const id = await submitOrder.mutateAsync({
        name: name.trim(),
        phone: phone.trim(),
        address: address.trim(),
      });
      setOrderId(id as bigint);
      toast.success("Order placed successfully! 🎉", {
        description: `Order ID: #${(id as bigint).toString()}`,
      });
    } catch {
      toast.error("Something went wrong. Please try again or WhatsApp us.");
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
                #{orderId.toString()}
              </p>
            </div>
            <p className="text-white/60 text-sm mb-6">
              📦 3-5 business days mein delivery. WhatsApp par message karein.
            </p>
            <a
              href="https://wa.me/918447829877"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block btn-green py-3 px-8 rounded-full text-sm font-bold"
            >
              💬 WhatsApp Us for Updates
            </a>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="order-form" className="bg-brand-green-pale py-16 lg:py-24">
      <div className="max-w-xl mx-auto px-4 sm:px-6">
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
          {totalCount !== undefined && (
            <p className="text-gray-500 text-base">
              Join{" "}
              <span
                className="font-bold"
                style={{ color: "oklch(0.52 0.115 140)" }}
              >
                {(Number(totalCount) + 10247).toLocaleString("en-IN")}
              </span>{" "}
              happy customers!
            </p>
          )}
        </div>
        <div
          className="flex items-center justify-between rounded-2xl px-6 py-4 mb-8 text-white"
          style={{ background: "oklch(0.178 0.038 155)" }}
        >
          <div>
            <p className="text-white/60 text-xs uppercase tracking-wider mb-1">
              Total Amount
            </p>
            <div className="flex items-center gap-3">
              <span className="text-white/40 line-through text-sm">₹1,999</span>
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
              Complete Address * (including city & pincode)
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
            disabled={submitOrder.isPending}
            className="btn-amber w-full py-4 rounded-xl text-lg font-bold flex items-center justify-center gap-2"
            data-ocid="order.submit_button"
          >
            {submitOrder.isPending ? (
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
    </section>
  );
}
