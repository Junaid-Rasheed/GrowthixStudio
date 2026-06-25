import { ArrowRight } from "lucide-react";
import Reveal from "./Reveal";

export default function CTA() {
  return (
    <section
      id="contact"
      className="mx-auto max-w-7xl px-6 pb-40"
    >
      <Reveal>
        <div className="rounded-[50px] border border-white/10 bg-[#0A0A0A] p-16 md:p-24">
          <h2 className="max-w-4xl text-[50px] leading-[0.95] md:text-[90px]">
            Let's build your next
            <span className="text-[#B8FF1A]">
              {" "}
              ecommerce success.
            </span>
          </h2>

          <a
            href="https://wa.me/923008085087"
            target="_blank"
            rel="noreferrer"
            className="mt-12 inline-flex items-center gap-3 rounded-full bg-[#B8FF1A] px-8 py-4 text-black transition hover:scale-[1.02]"
          >
            Start Project
            <ArrowRight size={18} />
          </a>
        </div>
      </Reveal>
    </section>
  );
}