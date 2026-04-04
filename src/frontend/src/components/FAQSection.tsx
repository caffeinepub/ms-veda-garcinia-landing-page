import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    q: "Kya yeh safe hai?",
    a: "Haan, bilkul safe hai! M S Veda Garcinia-Cambogia 100% natural ayurvedic formula hai. Ismein koi synthetic chemicals, steroids, ya harmful ingredients nahi hain. Yeh FSSAI approved aur GMP certified facility mein manufacture hota hai.",
  },
  {
    q: "Kitne time mein results milenge?",
    a: "Zyaadatar users 2-4 hafte mein visible results dekhte hain. Optimal results ke liye 2-3 months tak regular use recommend kiya jaata hai. Results individual ke metabolism, lifestyle, aur body type par depend karte hain.",
  },
  {
    q: "Koi side effects toh nahi hai?",
    a: "Nahi, koi side effects nahi hain. Yeh completely natural ingredients se bana hai. However, agar aap pregnant hain, breastfeeding hain, ya koi serious medical condition hai, toh use karne se pehle apne doctor se consult zaroor karein.",
  },
  {
    q: "Capsule kaise lena hai?",
    a: "Roz subah khaane se 30 minutes pehle 1 capsule warm water ke saath lein. Consistency key hai – ek bhi din miss nahi karna chahiye best results ke liye. Saath mein 8-10 glasses paani peena aur light walk karna helpful hoga.",
  },
  {
    q: "Delivery kab tak aayegi?",
    a: "Order place karne ke 3-5 business days mein delivery ho jaati hai pan India. Express delivery bhi available hai. COD (Cash on Delivery) aur online payment dono options available hain. Delivery update ke liye WhatsApp par message karein.",
  },
];

export function FAQSection() {
  return (
    <section id="faq" className="bg-white py-16 lg:py-24">
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12">
          <span className="inline-block bg-blue-50 text-blue-700 text-xs font-bold uppercase tracking-widest px-4 py-2 rounded-full mb-4">
            FAQ
          </span>
          <h2
            className="text-3xl sm:text-4xl font-bold mb-4"
            style={{ color: "oklch(0.178 0.038 155)" }}
          >
            Frequently Asked Questions
          </h2>
          <p className="text-gray-500 text-lg">
            Koi bhi sawaal hai? Yahan answer milega!
          </p>
        </div>
        <Accordion
          type="single"
          collapsible
          className="space-y-3"
          data-ocid="faq.panel"
        >
          {faqs.map((faq, i) => (
            <AccordionItem
              key={faq.q}
              value={`faq-${i}`}
              className="border-2 border-gray-100 rounded-2xl px-6 hover:border-green-200 transition-colors overflow-hidden"
              data-ocid={`faq.item.${i + 1}`}
            >
              <AccordionTrigger className="text-left font-semibold text-gray-800 py-5 hover:no-underline text-base">
                {faq.q}
              </AccordionTrigger>
              <AccordionContent className="text-gray-600 text-sm leading-relaxed pb-5">
                {faq.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
        <div
          className="mt-10 text-center rounded-2xl p-8"
          style={{ background: "oklch(0.95 0.03 140)" }}
        >
          <p
            className="font-bold text-lg mb-2"
            style={{ color: "oklch(0.178 0.038 155)" }}
          >
            Aur koi sawaal hai? 💬
          </p>
          <p className="text-gray-600 text-sm mb-4">
            Humare expert se WhatsApp par baat karein – free consultation!
          </p>
          <a
            href="https://wa.me/918447829877"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block btn-green py-3 px-8 rounded-full text-sm font-bold"
            data-ocid="faq.primary_button"
          >
            💬 WhatsApp Us Now
          </a>
        </div>
      </div>
    </section>
  );
}
