import Reveal from "./Reveal";

export default function MarketplaceLogos() {
  return (
    <section className="border-y border-white/10 py-16">
      <Reveal>
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-16 px-6 opacity-70">

          <img
            src="/ecom/amazon.png"
            className="h-8 object-contain"
            alt="Amazon"
          />

          <img
            src="/ecom/tiktok.webp"
            className="h-8 object-contain"
            alt="TikTok Shop"
          />

          <img
            src="/ecom/Etsy.png"
            className="h-8 object-contain"
            alt="Etsy"
          />

          <img
            src="/ecom/EBay.svg"
            className="h-8 object-contain"
            alt="eBay"
          />

          <img
            src="/ecom/Shopify.png"
            className="h-8 object-contain"
            alt="Shopify"
          />

          <img
            src="/ecom/temu.jpg"
            className="h-8 object-contain"
            alt="Temu"
          />

        </div>
      </Reveal>
    </section>
  );
}