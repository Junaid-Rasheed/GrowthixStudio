import Reveal from "./Reveal";

const services = [
  "Marketplace Management",
  "Performance Advertising",
  "Creative Production",
  "Virtual Assistants",
];

export default function Services() {
  return (
    <section
      id="services"
      className="mx-auto max-w-7xl px-4 py-20 sm:px-6 "
    >
      <div className="mb-10">
        <p className="mb-4 text-sm uppercase tracking-[0.3em] text-[#B8FF1A]">
          How We Scale Brands
        </p>

        <h2 className="max-w-3xl text-3xl leading-tight text-white sm:text-5xl">
          Everything Your Brand Needs To Scale.
        </h2>
      </div>

      <div className="border-t border-white/10">
        {services.map((service, index) => (
          <Reveal key={service} delay={index * 0.1}>
            <div className="group border-b border-white/10 py-6 sm:py-8">
              <div className="flex items-center justify-between gap-4">
                <div className="flex items-start gap-4 sm:gap-8">
                  <span className="mt-2 text-sm text-zinc-500">
                    0{index + 1}
                  </span>

                  <h3 className="text-3xl leading-none text-zinc-500 transition-all duration-300 group-hover:translate-x-3 group-hover:text-[#B8FF1A] sm:text-5xl lg:text-7xl">
                    {service}
                  </h3>
                </div>

                <div className="hidden h-12 w-12 items-center justify-center rounded-full border border-white/10 transition-all duration-300 group-hover:border-[#B8FF1A] group-hover:bg-[#B8FF1A] md:flex">
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