import logo from "/logo.png";

export default function Header() {
  return (
    <header className="w-full py-8">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-8">
        {/* Logo */}
        <a href="/" className="flex items-center">
          <img
            src={logo}
            alt="Growthix"
            className="h-20 w-auto"
          />
        </a>

        {/* Navigation */}
        <nav className="hidden items-center gap-14 md:flex">
          <a
            href="#about"
            className="text-[18px] font-light text-zinc-300 transition hover:text-white"
          >
            About
          </a>

          <a
            href="#services"
            className="text-[18px] font-light text-zinc-300 transition hover:text-white"
          >
            Services
          </a>

          <a
            href="#work"
            className="text-[18px] font-light text-zinc-300 transition hover:text-white"
          >
            Our Work
          </a>

          <a
            href="#contact"
            className="text-[18px] font-light text-zinc-300 transition hover:text-white"
          >
            Contact
          </a>
        </nav>

        {/* CTA */}
        <a
          href="https://wa.me/923008085087"
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-full border border-white/60 px-10 py-4 text-[18px] font-light text-white transition-all duration-300 hover:bg-white hover:text-black"
        >
          Start New Project
        </a>
      </div>
    </header>
  );
}
