import Reveal from "../Components/Reveal";

export default function About() {
  return (
    <section
      id="about"
      className="mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-28 lg:py-40"
    >
      <div className="grid gap-16 lg:grid-cols-2 lg:items-center">
        {/* Left Side */}
        <Reveal>
          <div>
            <p className="mb-4 text-sm uppercase tracking-[0.3em] text-[#B8FF1A]">
              About Us
            </p>

            <h2 className="mb-8 text-4xl leading-tight text-white sm:text-5xl lg:text-6xl">
              We Build Systems That Scale Ecommerce Brands.
            </h2>

            <p className="mb-6 text-lg leading-relaxed text-zinc-400">
              We are a growth-focused ecommerce agency helping brands
              unlock sustainable revenue across marketplaces and paid
              advertising channels.
            </p>

            <p className="mb-10 text-lg leading-relaxed text-zinc-400">
              From marketplace operations and performance advertising
              to creative production and dedicated virtual assistants,
              we provide the infrastructure ambitious brands need to
              scale faster and operate efficiently.
            </p>

            <div className="grid grid-cols-2 gap-8">
              <div>
                <h3 className="text-4xl text-[#B8FF1A]">5+</h3>
                <p className="mt-2 text-zinc-500">
                  Years Experience
                </p>
              </div>

              <div>
                <h3 className="text-4xl text-[#B8FF1A]">100+</h3>
                <p className="mt-2 text-zinc-500">
                  Brands Supported
                </p>
              </div>
            </div>
          </div>
        </Reveal>

        {/* Right Side */}
        <Reveal delay={0.2}>
          <div className="rounded-3xl border border-white/10 bg-zinc-900/60 p-8 backdrop-blur-md">
            <div className="space-y-8">
              <div className="border-b border-white/10 pb-6">
                <h3 className="mb-3 text-2xl text-white">
                  Our Mission
                </h3>

                <p className="text-zinc-400">
                  To empower ecommerce brands with the strategies,
                  systems, and execution required to achieve
                  long-term growth.
                </p>
              </div>

              <div className="border-b border-white/10 pb-6">
                <h3 className="mb-3 text-2xl text-white">
                  Our Vision
                </h3>

                <p className="text-zinc-400">
                  To become the trusted growth partner for ambitious
                  ecommerce businesses worldwide.
                </p>
              </div>

              <div>
                <h3 className="mb-3 text-2xl text-white">
                  What Makes Us Different
                </h3>

                <ul className="space-y-3 text-zinc-400">
                  <li>✓ Data-driven growth strategies</li>
                  <li>✓ Dedicated ecommerce specialists</li>
                  <li>✓ End-to-end execution</li>
                  <li>✓ Creative + performance under one roof</li>
                </ul>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}