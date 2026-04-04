import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const testimonials = [
  {
    name: "Priya S.",
    location: "Delhi",
    rating: 5,
    text: "Maine 6kg lose kiya sirf ek mahine mein! No diet, no gym. Seriously kaam karta hai! Yeh product ne meri life change kar di. Highly recommend 🙌",
    avatar: "/assets/generated/happy-customer-1.dim_400x400.jpg",
    verified: true,
    result: "Lost 6kg",
  },
  {
    name: "Rahul M.",
    location: "Mumbai",
    rating: 5,
    text: "Belly fat 4 weeks mein kaafi reduce hua. Energy level bhi badha hai. Bilkul natural formula hai, koi side effects nahi. Main dusra bottle order kar raha hun!",
    avatar: "/assets/rahul_m-019d5814-d15a-76ac-815a-3642ea6ecefe.jfif",
    verified: true,
    result: "Lost 8kg",
  },
  {
    name: "Neha T.",
    location: "Hyderabad",
    rating: 5,
    text: "Pehle bahut sceptical thi, par results dekh ke shocked ho gayi. 5 stars deserve karta hai! Subah leti hun aur din bhar active rehti hun.",
    avatar: "/assets/anjali-019d5818-7da3-73ca-a268-642a37d33662.jfif",
    verified: true,
    result: "Lost 5kg",
  },
];

const starValues = [1, 2, 3, 4, 5];

function StarRating({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5" aria-label={`${count} out of 5 stars`}>
      {starValues.map((val) => (
        <svg
          key={val}
          className="w-4 h-4"
          fill={val <= count ? "#f4b942" : "#e5e7eb"}
          viewBox="0 0 20 20"
          aria-hidden="true"
        >
          <title>{val <= count ? "Filled star" : "Empty star"}</title>
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

export function TestimonialsSection() {
  return (
    <section id="testimonials" className="bg-brand-green-pale py-16 lg:py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12">
          <span className="inline-block bg-yellow-100 text-yellow-800 text-xs font-bold uppercase tracking-widest px-4 py-2 rounded-full mb-4">
            Verified Reviews
          </span>
          <h2
            className="text-3xl sm:text-4xl font-bold mb-4"
            style={{ color: "oklch(0.178 0.038 155)" }}
          >
            10,000+ Customers Love Us ⭐⭐⭐⭐⭐
          </h2>
          <p className="text-gray-600 text-lg max-w-xl mx-auto">
            Real customers, real results – padhiye unki kahaniyan
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <div
              key={t.name}
              className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow flex flex-col"
              data-ocid={`testimonials.item.${i + 1}`}
            >
              <div className="flex items-start gap-4 mb-4">
                <Avatar className="w-12 h-12">
                  {t.avatar && <AvatarImage src={t.avatar} alt={t.name} />}
                  <AvatarFallback
                    className="font-bold text-white"
                    style={{ background: "oklch(0.52 0.115 140)" }}
                  >
                    {t.name[0]}
                  </AvatarFallback>
                </Avatar>
                <div className="flex-1">
                  <div className="flex items-center gap-2">
                    <p className="font-bold text-gray-800">{t.name}</p>
                    {t.verified && (
                      <span className="text-xs text-green-600 font-semibold">
                        ✓ Verified
                      </span>
                    )}
                  </div>
                  <p className="text-gray-400 text-xs">{t.location}</p>
                  <StarRating count={t.rating} />
                </div>
              </div>
              <p className="text-gray-600 text-sm leading-relaxed flex-1 mb-4">
                "{t.text}"
              </p>
              <div
                className="text-center py-2 rounded-xl text-sm font-bold"
                style={{
                  background: "oklch(0.95 0.04 140)",
                  color: "oklch(0.35 0.1 140)",
                }}
              >
                🎉 {t.result}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
