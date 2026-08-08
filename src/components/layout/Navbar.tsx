"use client";

import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useState } from "react";

import Button from "@/src/components/ui/Button";
import Container from "@/src/components/ui/Container";

const navigation = [
  {
    label: "About",
    href: "#about",
  },
  {
    label: "Services",
    href: "#services",
  },
  {
    label: "Projects",
    href: "#projects",
  },
  {
    label: "Contact",
    href: "#contact",
  },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <header className="absolute inset-x-0 top-0 z-50">
      <Container>
        <nav
          aria-label="Main navigation"
          className="relative flex h-24 items-center justify-between"
        >
          {/* ─────────────────────────────────────
              BRAND
          ───────────────────────────────────── */}

          <Link
            href="/"
            aria-label="Pashupati Infrastructure home"
            className="group relative flex items-center"
          >
            <div className="relative">
              <span className="block text-xl font-semibold tracking-[0.08em] text-white">
                PASUPATI
              </span>

              <span className="absolute -bottom-2 left-0 h-px w-0 bg-(--color-gold) transition-all duration-500 group-hover:w-full" />
            </div>
          </Link>

          {/* ─────────────────────────────────────
              DESKTOP NAVIGATION
          ───────────────────────────────────── */}

          <div className="hidden items-center gap-9 lg:flex">
            {navigation.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="group relative py-2 text-sm font-medium tracking-wide text-white/75 transition-colors duration-300 hover:text-white"
              >
                {item.label}

                <span className="absolute bottom-0 left-0 h-px w-0 bg-(--color-gold) transition-all duration-300 group-hover:w-full" />
              </Link>
            ))}
          </div>

          {/* ─────────────────────────────────────
              DESKTOP CTA
          ───────────────────────────────────── */}

          <div className="hidden lg:block">
            <Button
              href="#contact"
              variant="gold"
              className="px-5 py-2.5 text-xs"
            >
              Get in Touch
            </Button>
          </div>

          {/* ─────────────────────────────────────
              MOBILE MENU BUTTON
          ───────────────────────────────────── */}

          <button
            type="button"
            onClick={() => setIsOpen((prev) => !prev)}
            aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={isOpen}
            className="flex h-11 w-11 items-center justify-center border border-white/20 text-white transition-all duration-300 hover:border-(--color-gold) hover:text-(--color-gold) lg:hidden"
          >
            {isOpen ? (
              <X size={21} strokeWidth={1.7} />
            ) : (
              <Menu size={21} strokeWidth={1.7} />
            )}
          </button>
        </nav>

        {/* ─────────────────────────────────────
            MOBILE NAVIGATION
        ───────────────────────────────────── */}

        <div
          className={`overflow-hidden transition-all duration-500 lg:hidden ${
            isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="border-t border-white/10 bg-(--color-navy)/95 px-6 py-6 backdrop-blur-xl">
            <div className="flex flex-col">
              {navigation.map((item, index) => (
                <Link
                  key={item.label}
                  href={item.href}
                  onClick={closeMenu}
                  className={`flex items-center justify-between border-b border-white/10 py-4 text-sm font-medium tracking-wide text-white/80 transition-colors duration-300 hover:text-(--color-gold) ${
                    index === navigation.length - 1
                      ? "border-b-0"
                      : ""
                  }`}
                >
                  <span>{item.label}</span>

                  <span className="text-(--color-gold)">↗</span>
                </Link>
              ))}

              <Button
                href="#contact"
                variant="gold"
                className="mt-5 w-full"
              >
                Get in Touch
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </header>
  );
}