import Reveal from "./Reveal";

const stats = [
  {
    number: "$970K+",
    label: "Revenue Generated",
  },
  {
    number: "102+",
    label: "Stores Scaled",
  },
  {
    number: "96%",
    label: "Client Retention",
  },
];

export default function Stats() {
  return (
    <section
      id="results"
      className="mx-auto max-w-7xl px-4 py-20 sm:px-6 "
    >
      <Reveal>
        <div className="mb-12 text-center">
          <p className="mb-4 text-sm uppercase tracking-[0.3em] text-[#B8FF1A]">
            Results
          </p>

          <h2 className="mx-auto max-w-3xl text-3xl leading-tight text-white sm:text-5xl">
            Numbers That Speak For Themselves
          </h2>
        </div>
      </Reveal>

      <div className="grid gap-6 md:grid-cols-3">
        {stats.map((item, index) => (
          <Reveal key={item.label} delay={index * 0.15}>
            <div className="group rounded-3xl border border-white/10 bg-zinc-900/60 p-8 backdrop-blur-md transition-all duration-300 hover:-translate-y-2 hover:border-[#B8FF1A]/30">
              <h3 className="text-center text-5xl text-[#B8FF1A] transition-transform duration-300 group-hover:scale-105 sm:text-6xl lg:text-7xl">
                {item.number}
              </h3>

              <div className="mx-auto my-6 h-px w-12 bg-white/10 group-hover:bg-[#B8FF1A]/50" />

              <p className="text-center text-sm uppercase tracking-[0.2em] text-zinc-400 sm:text-base">
                {item.label}
              </p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}