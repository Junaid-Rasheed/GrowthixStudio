import { ArrowRight } from "lucide-react";
import Reveal from "./Reveal";

export default function Hero() {
  return (
    <section className="mx-auto max-w-7xl px-6 pt-20 pb-24">
      <div className="max-w-6xl">
        <Reveal>
          <span className="text-sm uppercase tracking-[0.4em] text-zinc-400">
            Ecommerce Growth Agency
          </span>
        </Reveal>

        <Reveal delay={0.1}>
          <h1 className="mt-6 text-[56px] leading-[0.88] md:text-[140px]">
            Powering
            <span className="text-[#B8FF1A]"> growth</span>
            <br />
            for modern brands.
          </h1>
        </Reveal>

        <Reveal delay={0.2}>
          <p className="mt-8 max-w-2xl text-lg tracking-[0.1em] leading-relaxed text-zinc-400">
            Strategy, advertising, creative, and operations
            for modern ecommerce brands.
          </p>
        </Reveal>

        {/* <Reveal delay={0.3}>
          <div className="mt-12 flex flex-wrap items-center gap-4">
            <a
              href="https://wa.me/923008085087"
              target="_blank"
              rel="noreferrer"
              className="group inline-flex items-center gap-3 rounded-full bg-[#B8FF1A] px-8 py-4 text-black transition-all duration-300 hover:scale-[1.02]"
            >
              Book Consultation

              <ArrowRight
                size={18}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </a>

            <a
              href="#services"
              className="inline-flex items-center rounded-full border border-white/10 px-8 py-4 text-white transition hover:border-[#B8FF1A] hover:text-[#B8FF1A]"
            >
              Our Services
            </a>
          </div>
        </Reveal> */}
      </div>
    </section>
  );
}