import Reveal from "./Reveal";

export default function MarketplaceLogos() {
  const logos = [
    { src: "/ecom/tiktok.webp", alt: "TikTok Shop" },
    { src: "/ecom/Etsy.png", alt: "Etsy" },
        { src: "/ecom/amazon.png", alt: "Amazon" },

    { src: "/ecom/EBay.svg", alt: "eBay" },
    { src: "/ecom/shopify.webp", alt: "Shopify" },
    { src: "/ecom/temu.jpg", alt: "Temu" },
        { src: "/ecom/onbuy.png", alt: "OnBuy" },

  ];

  return (
    <section className="relative overflow-hidden ">
      {/* Subtle Brand Glow */}
      <div className="absolute left-1/2 top-1/2 -z-10 h-40 w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#B8FF1A]/5 blur-[120px]" />

      <Reveal>
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div
            className="
              overflow-hidden
              rounded-full
              border border-white/15
              bg-white/[0.04]
              backdrop-blur-xl
              py-8
            "
          >
            <div
              className="
                flex
                overflow-hidden
                [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]
              "
            >
              {/* First Row */}
              <ul className="flex min-w-full shrink-0 items-center justify-around gap-20 animate-infinite-scroll">
                {logos.map((logo, index) => (
                  <li key={index} className="flex-shrink-0">
                    <img
                      src={logo.src}
                      alt={logo.alt}
                      className="
                        h-10
                        sm:h-12
                        md:h-14
                        object-contain
                        opacity-90
                        transition-all
                        duration-300
                        hover:scale-110
                        hover:opacity-100
                      "
                    />
                  </li>
                ))}
              </ul>

              {/* Duplicate Row */}
              <ul
                className="flex min-w-full shrink-0 items-center justify-around gap-20 animate-infinite-scroll"
                aria-hidden="true"
              >
                {logos.map((logo, index) => (
                  <li
                    key={`duplicate-${index}`}
                    className="flex-shrink-0"
                  >
                    <img
                      src={logo.src}
                      alt={logo.alt}
                      className="
                        h-10
                        sm:h-12
                        md:h-14
                        object-contain
                        opacity-90
                        transition-all
                        duration-300
                        hover:scale-110
                        hover:opacity-100
                      "
                    />
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}