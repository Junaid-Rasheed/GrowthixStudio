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
      className="mx-auto max-w-7xl px-6 py-40"
    >
      <div className="space-y-10">
        {services.map((service, index) => (
          <Reveal key={service} delay={index * 0.1}>
            <h2 className="text-[60px] leading-none text-zinc-700 transition hover:text-[#B8FF1A] md:text-[110px]">
              {service}
            </h2>
          </Reveal>
        ))}
      </div>
    </section>
  );
}