import { useState } from "react";
import { FiMenu, FiShield, FiX } from "react-icons/fi";

const navItems = [
  ["Home", "/"],
  ["About", "/about/"],
  ["Projects", "/projects/"],
  ["Skills", "/skills/"],
  ["Research", "/research/"],
  ["Contact", "/contact/"],
];

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);
  const path = window.location.pathname.replace(/^\/|\/$/g, "") || "home";
  const currentPage = navItems.find(([, href]) => href === `/${path}/`)?.[0] || "Home";

  return (
    <header className="fixed left-0 right-0 top-0 z-50 border-b border-white/10 bg-brand-teal-deep/75 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        <a href="/" className="group flex items-center gap-2.5" aria-label="Raj Kumar Singh home">
          <span className="relative grid h-10 w-10 place-items-center overflow-hidden border border-brand-green/45 bg-brand-green/10 text-brand-green shadow-[0_0_30px_rgba(77,124,255,0.16)]">
            <FiShield />
            <span className="absolute inset-x-0 top-0 h-px bg-brand-green opacity-70 transition-transform duration-500 group-hover:translate-y-9" />
          </span>
          <span className="font-mono text-caption uppercase tracking-[0.24em] text-brand-green">
            RAJ K. SINGH
          </span>
        </a>

        <nav className="hidden items-center gap-1 md:flex" aria-label="Primary navigation">
          {navItems.map(([label, href]) => (
            <a
              key={label}
              href={href}
              className="rounded-sm px-3 py-2 font-mono text-caption uppercase tracking-[0.16em] text-zinc-400 transition duration-300 hover:bg-white/5 hover:text-brand-green"
            >
              {label}
            </a>
          ))}
        </nav>

        <a
          href="/contact/"
          className="hidden border border-brand-green/35 bg-white/[0.03] px-4 py-2 font-mono text-caption uppercase tracking-[0.14em] text-brand-green transition duration-300 hover:border-brand-green hover:bg-brand-green hover:text-black sm:inline-flex"
        >
          Contact
        </a>

        <button
          type="button"
          className="grid h-10 w-10 place-items-center border border-brand-green/35 bg-brand-green/10 text-brand-green transition duration-300 hover:border-brand-green hover:bg-brand-green hover:text-black md:hidden"
          aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={isOpen}
          aria-controls="mobile-navigation"
          onClick={() => setIsOpen((value) => !value)}
        >
          {isOpen ? <FiX /> : <FiMenu />}
        </button>
      </div>
      <div
        id="mobile-navigation"
        className={`overflow-hidden border-t border-white/10 bg-brand-teal-deep/95 transition-[max-height,opacity] duration-300 md:hidden ${
          isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <nav className="mx-auto grid max-w-7xl gap-1 px-4 py-3" aria-label="Mobile navigation">
          {navItems.map(([label, href]) => (
            <a
              key={label}
              href={href}
              onClick={() => setIsOpen(false)}
              className={`border border-transparent px-3 py-3 font-mono text-caption uppercase tracking-[0.18em] transition duration-300 ${
                currentPage === label
                  ? "border-brand-green/30 bg-brand-green/10 text-brand-green"
                  : "text-zinc-400 hover:border-white/10 hover:bg-white/5 hover:text-white"
              }`}
            >
              {label}
            </a>
          ))}
          <a
            href="/contact/"
            onClick={() => setIsOpen(false)}
            className="mt-2 border border-brand-green/35 bg-white/[0.03] px-3 py-3 font-mono text-caption uppercase tracking-[0.16em] text-brand-green"
          >
            Contact
          </a>
        </nav>
      </div>
      {path !== "home" && (
        <nav className="border-t border-white/10 px-4 py-2 font-mono text-micro-uppercase uppercase tracking-[0.18em] text-zinc-500 md:hidden" aria-label="Breadcrumb">
          <ol className="mx-auto flex max-w-7xl items-center gap-2">
            <li>
              <a href="/" className="text-brand-green">Home</a>
            </li>
            <li aria-hidden="true">/</li>
            <li aria-current="page" className="text-zinc-300">{currentPage}</li>
          </ol>
        </nav>
      )}
    </header>
  );
}
