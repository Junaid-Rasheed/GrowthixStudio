import Reveal from "./Reveal";

const services = [
  {
    number: "01",
    title: "Marketplace Management",
    description:
      "Complete management and optimization for Amazon, TikTok Shop, Shopify, Etsy, and eBay stores.",
  },
  {
    number: "02",
    title: "Performance Advertising",
    description:
      "Data-driven advertising strategies designed to maximize ROAS and scale revenue.",
  },
  {
    number: "03",
    title: "Creative Production",
    description:
      "High-converting creatives, UGC ads, product videos, and brand assets built for growth.",
  },
  {
    number: "04",
    title: "Virtual Assistants",
    description:
      "Dedicated ecommerce specialists handling operations, support, listings, and daily tasks.",
  },
];

export default function Services() {
  return (
    <section
      id="services"
      className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:py-32"
    >
      {/* Heading */}
      <div className="mb-16 text-center">
        <p className="mb-4 text-sm uppercase tracking-[0.3em] text-[#B8FF1A]">
          How We Scale Brands
        </p>

        <h2 className="mx-auto max-w-4xl text-4xl leading-tight text-white sm:text-5xl lg:text-7xl">
          Everything Your Brand Needs To Scale.
        </h2>
      </div>

      {/* Services Grid */}
      <div className="grid gap-6 md:grid-cols-2">
        {services.map((service, index) => (
          <Reveal key={service.title} delay={index * 0.1}>
            <div
              className="
                group
                flex
                h-full
                flex-col
                rounded-3xl
                border border-white/10
                bg-white/[0.02]
                p-8
                transition-all
                duration-300
                hover:-translate-y-1
                hover:border-[#B8FF1A]/40
                hover:bg-white/[0.04]
              "
            >
              {/* Number */}
              <span className="text-sm text-[#B8FF1A]">
                {service.number}
              </span>

              {/* Title */}
              <h3
                className="
                  mt-6
                  text-3xl
                  text-white
                  transition-all
                  duration-300
                  group-hover:text-[#B8FF1A]
                  lg:text-4xl
                "
              >
                {service.title}
              </h3>

              {/* Description */}
              <p className="mt-5 flex-grow text-lg leading-relaxed text-zinc-400">
                {service.description}
              </p>

              {/* Arrow */}
              <div className="mt-8 flex justify-end">
                <div
                  className="
                    flex
                    h-12
                    w-12
                    items-center
                    justify-center
                    rounded-full
                    border border-white/10
                    transition-all
                    duration-300
                    group-hover:border-[#B8FF1A]
                    group-hover:bg-[#B8FF1A]
                  "
                >
                  <span className="text-xl text-white group-hover:text-black">
                    ↗
                  </span>
                </div>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}