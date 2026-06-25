import { ArrowUpRight } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-white/10">
      <div className="mx-auto max-w-7xl px-6 py-20">
        <div className="grid gap-16 lg:grid-cols-[2fr_1fr_1fr_1.2fr]">
          {/* Brand */}
          <div>
            <img
              src="/logo.png"
              alt="Growthix Logo"
              className="h-32 w-auto object-contain"
            />

            <p className="mt-6 max-w-sm leading-relaxed text-zinc-400">
              We help ambitious brands scale on Amazon, TikTok Shop,
              Etsy, and eBay through strategy, operations,
              advertising, and creative excellence.
            </p>
          </div>

          {/* Platforms */}
          <div>
            <h3 className="text-sm uppercase tracking-[0.25em] text-zinc-500">
              Platforms
            </h3>

            <ul className="mt-6 space-y-4 text-zinc-300">
              <li>Amazon</li>
              <li>TikTok Shop</li>
              <li>Etsy</li>
              <li>eBay</li>
              <li>Shopify</li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-sm uppercase tracking-[0.25em] text-zinc-500">
              Company
            </h3>

            <ul className="mt-6 space-y-4">
              <li>
                <a href="#services" className="text-zinc-300 hover:text-white">
                  Services
                </a>
              </li>

              <li>
                <a href="#process" className="text-zinc-300 hover:text-white">
                  Process
                </a>
              </li>

              <li>
                <a href="#contact" className="text-zinc-300 hover:text-white">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-sm uppercase tracking-[0.25em] text-zinc-500">
              Contact
            </h3>

            <div className="mt-6 space-y-4">
              <a
                href="mailto:hello@growthix.com"
                className="block text-zinc-300 hover:text-white"
              >
                hello@growthix.com
              </a>

              <a
                href="https://wa.me/923008085087"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-zinc-300 hover:text-white"
              >
                WhatsApp
                <ArrowUpRight size={16} />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-20 flex flex-col items-center justify-between gap-6 border-t border-white/10 pt-8 text-sm text-zinc-500 md:flex-row">
          <p>
            © {new Date().getFullYear()} All Rights Reserved.
          </p>

          <div className="flex gap-8">
            <a href="#" className="hover:text-white">
              Privacy Policy
            </a>

            <a href="#" className="hover:text-white">
              Terms & Conditions
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}