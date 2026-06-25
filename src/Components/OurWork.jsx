import { useEffect, useRef, useState } from "react";
import { X } from "lucide-react";
import Reveal from "./Reveal";

const works = [
  {
    image: "/work/7days.png",
    title: "7 Days Marketplace",
  },
  {
    image: "/work/28days.png",
    title: "28 Days Store",
  },
  {
    image: "/work/health.png",
    title: "Health Brand Store",
  },
  {
    image: "/work/last28.png",
    title: "Growth Analytics Dashboard",
  },
  {
    image: "/work/NK.png",
    title: "NK Marketplace",
  },
  {
    image: "/work/store.png",
    title: "Shopify Store",
  },
  {
    image: "/work/usama.png",
    title: "Brand Operations Dashboard",
  },
  {
    image: "/work/zliuk28.png",
    title: "Revenue Dashboard",
  },
];

export default function OurWork() {
  const [selectedImage, setSelectedImage] = useState(null);
  const scrollRef = useRef(null);

  // Auto Scroll
  useEffect(() => {
    const container = scrollRef.current;

    if (!container) return;

    const interval = setInterval(() => {
      if (
        container.scrollLeft + container.clientWidth >=
        container.scrollWidth - 10
      ) {
        container.scrollTo({
          left: 0,
          behavior: "smooth",
        });
      } else {
        container.scrollBy({
          left: 600,
          behavior: "smooth",
        });
      }
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <section
        id="work"
        className="mx-auto max-w-7xl px-4 py-4 sm:px-6 "
      >
        {/* Heading */}
        <Reveal>
          <div className="mb-20 text-center">
            <p className="mb-4 text-sm uppercase tracking-[0.3em] text-[#B8FF1A]">
              Portfolio
            </p>

            <h2 className="mx-auto max-w-4xl text-4xl leading-tight text-white sm:text-5xl lg:text-7xl">
              Stores We've Helped Scale
            </h2>

            <p className="mx-auto mt-8 max-w-2xl text-lg leading-relaxed text-zinc-400">
              A showcase of ecommerce brands, storefronts, and
              marketplace assets we've managed and optimized.
            </p>
          </div>
        </Reveal>

        {/* Gallery */}
        <div className="relative">
          {/* Scroll Hint */}
          <div className="absolute left-1/2 top-0 z-10 -translate-x-1/2 rounded-full border border-white/10 bg-black/70 px-5 py-2 text-sm text-zinc-300 backdrop-blur-md">
            ← Swipe / Drag →
          </div>

          <div
            ref={scrollRef}
            className="hide-scrollbar flex gap-8 overflow-x-auto pt-16"
          >
            {works.map((work, index) => (
              <Reveal key={index}>
                <div
                  onClick={() => setSelectedImage(work)}
                  className="group min-w-[90vw] cursor-pointer overflow-hidden rounded-3xl border border-white/10 bg-zinc-900/50 transition-all duration-300 hover:border-[#B8FF1A]/40 lg:min-w-[75vw]"
                >
                  {/* Fixed Height Image */}
                  <div className="h-[260px] overflow-hidden sm:h-[340px] lg:h-[500px]">
                    <img
                      src={work.image}
                      alt={work.title}
                      className="h-full w-full object-cover object-top transition duration-700 group-hover:scale-[1.02]"
                    />
                  </div>

                  {/* Title */}
                  <div className="border-t border-white/10 p-6">
                    <h3 className="text-2xl text-white">
                      {work.title}
                    </h3>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Modal */}
      {selectedImage && (
        <div
          onClick={() => setSelectedImage(null)}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 p-4 backdrop-blur-md"
        >
          {/* Close Button */}
          <button
            onClick={() => setSelectedImage(null)}
            className="absolute right-6 top-6 rounded-full bg-white/10 p-3 text-white transition hover:bg-white/20"
          >
            <X size={28} />
          </button>

          {/* Full Image */}
          <div
            onClick={(e) => e.stopPropagation()}
            className="hide-scrollbar max-h-[92vh] max-w-7xl overflow-auto rounded-3xl"
          >
            <img
              src={selectedImage.image}
              alt={selectedImage.title}
              className="w-full rounded-3xl"
            />
          </div>
        </div>
      )}
    </>
  );
}