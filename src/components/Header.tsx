"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

const navLinks = [
  { href: "/servicos", label: "Serviços" },
  { href: "/galeria", label: "Galeria" },
  { href: "/sobre", label: "Sobre Nós" },
  { href: "/blog", label: "Blog" },
  { href: "/contato", label: "Contato" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <header
        id="site-header"
        className="fixed top-4 left-6 right-6 z-50 flex items-center justify-between px-8 h-16 rounded-full"
        style={{
          background: "rgba(255, 248, 239, 0.85)",
          backdropFilter: "blur(24px)",
          WebkitBackdropFilter: "blur(24px)",
          boxShadow: "0 20px 40px rgba(138,72,83,0.07)",
        }}
      >
        {/* Logo */}
        <Link href="/" aria-label="Espaço da Arte — Início" className="flex-shrink-0">
          <Image
            src="/images/logotipo.jpg"
            alt="Espaço da Arte"
            width={180}
            height={72}
            className="h-14 w-auto object-contain rounded-lg mix-blend-multiply"
            priority
          />
        </Link>

        {/* Desktop nav links */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="font-body text-sm font-semibold transition-colors"
              style={{ color: "var(--color-on-surface-variant)" }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "#8a4853")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "var(--color-on-surface-variant)")}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden md:flex items-center gap-3">
          <a
            href="https://wa.me/5519999999999"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary text-sm px-6 py-2.5"
          >
            Agendar Aula
          </a>
        </div>

        {/* Mobile menu button */}
        <button
          aria-label="Menu"
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden w-9 h-9 flex flex-col justify-center items-center gap-1.5 rounded-full transition-colors"
          style={{ background: menuOpen ? "rgba(255,217,221,0.4)" : "transparent" }}
        >
          <span
            className="block w-5 h-0.5 rounded transition-all duration-300"
            style={{
              background: "#8a4853",
              transform: menuOpen ? "rotate(45deg) translateY(6px)" : undefined,
            }}
          />
          <span
            className="block w-5 h-0.5 rounded transition-all duration-300"
            style={{ background: "#8a4853", opacity: menuOpen ? 0 : 1 }}
          />
          <span
            className="block w-5 h-0.5 rounded transition-all duration-300"
            style={{
              background: "#8a4853",
              transform: menuOpen ? "rotate(-45deg) translateY(-6px)" : undefined,
            }}
          />
        </button>
      </header>

      {/* Mobile overlay nav */}
      {menuOpen && (
        <div
          className="fixed inset-0 z-40 flex flex-col items-center justify-center gap-8 md:hidden"
          style={{ background: "rgba(255,248,239,0.97)", backdropFilter: "blur(24px)" }}
        >
          <button
            onClick={() => setMenuOpen(false)}
            className="absolute top-6 right-6"
            style={{ color: "#524345" }}
          >
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          {navLinks.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setMenuOpen(false)}
              className="font-headline text-4xl font-bold italic"
              style={{ color: "#8a4853" }}
            >
              {item.label}
            </Link>
          ))}
          <a
            href="https://wa.me/5519999999999"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary mt-4 px-10 py-4 text-lg"
            onClick={() => setMenuOpen(false)}
          >
            Agendar Aula
          </a>
        </div>
      )}
    </>
  );
}
