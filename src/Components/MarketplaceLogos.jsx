import Reveal from "./Reveal";

export default function MarketplaceLogos() {
  const logos = [
    { src: "/ecom/amazon.png", alt: "Amazon" },
    { src: "/ecom/tiktok.webp", alt: "TikTok Shop" },
    { src: "/ecom/Etsy.png", alt: "Etsy" },
    { src: "/ecom/EBay.svg", alt: "eBay" },
    { src: "/ecom/Shopify.png", alt: "Shopify" },
    { src: "/ecom/temu.jpg", alt: "Temu" },
  ];

  return (
    <section className=" ">
      <Reveal>
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="
            rounded-3xl
            border border-white/10
            bg-zinc-100
            px-6 py-8
            md:px-10 md:py-10
          ">
            <div
              className="
                grid
                grid-cols-2
                gap-y-10
                gap-x-6
                sm:grid-cols-3
                lg:flex
                lg:flex-wrap
                lg:items-center
                lg:justify-between
                lg:gap-12
              "
            >
              {logos.map((logo, index) => (
                <div
                  key={index}
                  className="flex items-center justify-center"
                >
                  <img
                    src={logo.src}
                    alt={logo.alt}
                    className="
                      h-10
                      sm:h-12
                      md:h-14
                      object-contain
                      opacity-80
                      transition-all
                      duration-300
                      hover:scale-110
                      hover:opacity-100
                    "
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}