import { useState } from "react";
import { ChevronDown } from "lucide-react";
import Reveal from "./Reveal";

const faqs = [
  {
    question: "What ecommerce platforms do you support?",
    answer:
      "We specialize in Amazon, Shopify, TikTok Shop, Etsy, eBay, and Walmart. Our team can manage and optimize stores across multiple marketplaces.",
  },
  {
    question: "Do you provide dedicated Virtual Assistants?",
    answer:
      "Yes. We provide trained ecommerce Virtual Assistants for product listings, customer support, order processing, inventory management, and day-to-day operations.",
  },
  {
    question: "Can you manage my entire marketplace account?",
    answer:
      "Absolutely. We offer full account management including listings, SEO optimization, PPC management, customer service, inventory tracking, and performance reporting.",
  },
  {
    question: "Do you run advertising campaigns?",
    answer:
      "Yes. We create and manage high-performing advertising campaigns across Amazon PPC, Meta Ads, TikTok Ads, and Google Ads to scale your brand profitably.",
  },
  {
    question: "How do you report performance?",
    answer:
      "We provide regular performance reports with insights on sales, advertising performance, growth opportunities, and actionable recommendations.",
  },
  {
    question: "Can you help launch a new ecommerce store?",
    answer:
      "Yes. From store setup and product listings to branding, creative assets, and launch strategy, we help brands launch and scale successfully.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section
      id="faq"
      className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:py-32"
    >
      {/* Heading */}
      <Reveal>
        <div className="mb-16 text-center">
          <p className="mb-4 text-sm uppercase tracking-[0.3em] text-[#B8FF1A]">
            Frequently Asked Questions
          </p>

          <h2 className="mx-auto max-w-4xl text-4xl leading-tight text-white sm:text-5xl lg:text-7xl">
            Everything You Need To Know
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg text-zinc-400">
            Answers to common questions about our ecommerce growth
            services, virtual assistants, and marketplace management.
          </p>
        </div>
      </Reveal>

      {/* FAQ Items */}
      <div className="mx-auto max-w-4xl space-y-4">
        {faqs.map((faq, index) => (
          <Reveal key={faq.question} delay={index * 0.05}>
            <div className="overflow-hidden rounded-3xl border border-white/10 bg-white/[0.02] transition-all duration-300 hover:border-[#B8FF1A]/30">
              <button
                onClick={() => toggleFAQ(index)}
                className="flex w-full items-center justify-between gap-6 p-6 text-left sm:p-8"
              >
                <h3 className="text-xl text-white sm:text-2xl">
                  {faq.question}
                </h3>

                <ChevronDown
                  className={`min-w-fit text-[#B8FF1A] transition-transform duration-300 ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                  size={24}
                />
              </button>

              <div
                className={`grid transition-all duration-300 ${
                  openIndex === index
                    ? "grid-rows-[1fr]"
                    : "grid-rows-[0fr]"
                }`}
              >
                <div className="overflow-hidden">
                  <p className="px-6 pb-6 text-lg leading-relaxed text-zinc-400 sm:px-8 sm:pb-8">
                    {faq.answer}
                  </p>
                </div>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}