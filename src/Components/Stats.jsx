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
      className="mx-auto max-w-7xl px-6 py-32"
    >
      <div className="grid gap-20 md:grid-cols-3">
        {stats.map((item, index) => (
          <Reveal key={item.label} delay={index * 0.15}>
            <div>
              <h3 className="text-7xl text-[#B8FF1A]">
                {item.number}
              </h3>

              <p className="mt-4 text-zinc-500">
                {item.label}
              </p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}