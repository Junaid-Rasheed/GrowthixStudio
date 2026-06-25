import { useState } from "react";
import { ArrowRight, Menu, X } from "lucide-react";
import logo from "/logo.png";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: "Home", id: "hero" },
    // { name: "About", id: "about" },
    { name: "Services", id: "services" },
    { name: "Our Work", id: "work" },
    { name: "Contact", id: "contact" },
  ];

  const handleScroll = (id) => {
    const element = document.getElementById(id);

    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }

    setIsOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[#050505]/80 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-5 sm:px-6 lg:px-8">
        {/* Logo */}
        <button
          onClick={() => handleScroll("hero")}
          className="flex items-center"
        >
          <img
            src={logo}
            alt="Growthix"
            className="h-14 w-auto sm:h-16"
          />
        </button>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-10 md:flex">
          {navItems.map((item) => (
            <button
              key={item.name}
              onClick={() => handleScroll(item.id)}
              className="text-[17px] text-zinc-300 transition hover:text-[#B8FF1A]"
            >
              {item.name}
            </button>
          ))}
        </nav>

        {/* CTA */}
        <a
          href="https://wa.me/923008085087"
          target="_blank"
          rel="noreferrer"
          className="group hidden items-center gap-3 rounded-full bg-[#B8FF1A] px-6 py-3 text-black transition-all duration-300 hover:scale-105 lg:inline-flex"
        >
          Book Consultation

          <ArrowRight
            size={18}
            className="transition-transform duration-300 group-hover:translate-x-1"
          />
        </a>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-white md:hidden"
        >
          {isOpen ? <X size={30} /> : <Menu size={30} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`overflow-hidden transition-all duration-300 md:hidden ${
          isOpen ? "max-h-[500px]" : "max-h-0"
        }`}
      >
        <div className="space-y-6 border-t border-white/10 bg-[#050505] px-6 py-8">
          {navItems.map((item) => (
            <button
              key={item.name}
              onClick={() => handleScroll(item.id)}
              className="block text-xl text-zinc-300"
            >
              {item.name}
            </button>
          ))}

          <a
            href="https://wa.me/923008085087"
            target="_blank"
            rel="noreferrer"
            className="mt-4 inline-flex items-center gap-3 rounded-full bg-[#B8FF1A] px-6 py-3 text-black"
          >
            Book Consultation
            <ArrowRight size={18} />
          </a>
        </div>
      </div>
    </header>
  );
}