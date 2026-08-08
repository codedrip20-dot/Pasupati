"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  ArrowUpRight,
  Menu,
  X,
} from "lucide-react";
import { useEffect, useState } from "react";

import Container from "@/src/components/ui/Container";

const navigation = [
  {
    label: "Home",
    href: "/",
  },
  {
    label: "About",
    href: "/about",
  },
  {
    label: "Projects",
    href: "/projects",
  },
  {
    label: "Contact",
    href: "/contact",
  },
] as const;

export default function Navbar() {
  const pathname = usePathname();

  const [isOpen, setIsOpen] = useState(false);

  /* =========================================================
     ACTIVE ROUTE
  ========================================================= */

  const isActive = (href: string) => {
    if (href === "/") {
      return pathname === "/";
    }

    return pathname.startsWith(href);
  };

  /* =========================================================
     MENU CONTROLS
  ========================================================= */

  const openMenu = () => {
    setIsOpen(true);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  /* =========================================================
     ESCAPE KEY
  ========================================================= */

  useEffect(() => {
    if (!isOpen) {
      return;
    }

    const handleKeyDown = (
      event: KeyboardEvent
    ) => {
      if (event.key === "Escape") {
        closeMenu();
      }
    };

    document.addEventListener(
      "keydown",
      handleKeyDown
    );

    return () => {
      document.removeEventListener(
        "keydown",
        handleKeyDown
      );
    };
  }, [isOpen]);

  /* =========================================================
     LOCK BODY SCROLL
  ========================================================= */

  useEffect(() => {
    if (!isOpen) {
      return;
    }

    const previousOverflow =
      document.body.style.overflow;

    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow =
        previousOverflow;
    };
  }, [isOpen]);

  return (
    <>
      {/* =====================================================
          DESKTOP + MOBILE NAVBAR
      ===================================================== */}

      <header
        className="
          absolute
          inset-x-0
          top-0
          z-50
          px-4
          pt-5
          sm:px-6
          lg:px-8
        "
      >
        <Container>
          <nav
            aria-label="Main navigation"
            className="
              flex
              h-16
              items-center
              rounded-2xl
              border
              border-white/15
              bg-[#07131c]/75
              px-3
              shadow-[0_10px_35px_rgba(0,0,0,0.22)]
              backdrop-blur-xl
              sm:h-[68px]
              sm:px-4
              lg:px-5
              text-white
            "
          >
            {/* =================================================
                BRAND
            ================================================= */}

            <Link
              href="/"
              aria-label="Pasupati Infrastructure home"
              className="
                group
                shrink-0
                text-white
                transition-opacity
                duration-300
                hover:opacity-80
              "
            >
              <div className="flex items-baseline gap-2">
                <span
                  className="
                    text-[15px]
                    font-semibold
                    uppercase
                    tracking-[0.16em]
                    sm:text-base
                    text-white
                  "
                >
                  Pasupati
                </span>

                <span
                  className="
                    hidden
                    text-[8px]
                    font-medium
                    uppercase
                    tracking-[0.16em]
                    text-white/50
                    sm:block
                    text-white
                  "
                >
                  Infrastructure
                </span>
              </div>
            </Link>

            {/* =================================================
                DESKTOP NAVIGATION
            ================================================= */}

            <div
              className="
                mx-auto
                hidden
                items-center
                gap-1
                md:flex
              "
            >
              {navigation.map((item) => {
                const active = isActive(
                  item.href
                );

                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    aria-current={
                      active
                        ? "page"
                        : undefined
                    }
                    className={`
                      group
                      relative
                      flex
                      h-10
                      items-center
                      rounded-lg
                      px-4
                      text-[12px]
                      font-medium
                      tracking-wide
                    
                      transition-colors
                      duration-200
                      hover:bg-white/10
                      text-white
                      ${
                        active
                          ? "bg-white/[0.06]"
                          : ""
                      }
                    `}
                  >
                    {item.label}

                    {/* Active indicator */}

                    <span
                      aria-hidden="true"
                      className={`
                        absolute
                        bottom-1
                        left-1/2
                        h-[2px]
                        -translate-x-1/2
                        rounded-full
                        bg-[var(--color-gold)]
                        transition-all
                        duration-200
                        text-white
                        ${
                          active
                            ? "w-5"
                            : "w-0 group-hover:w-4"
                        }
                      `}
                    />
                  </Link>
                );
              })}
            </div>

            {/* =================================================
                DESKTOP CTA
            ================================================= */}

            <Link
              href="/contact"
              className="
                group
                hidden
                h-10
                shrink-0
                items-center
                gap-2
                rounded-lg
               
                px-4
                text-[10px]
                font-semibold
                uppercase
                tracking-[0.08em]
               
                transition-all
                duration-200
                hover:brightness-105
                focus-visible:outline-none
                focus-visible:ring-2
                focus-visible:ring-white/70
                md:flex
               
              "
            >
              Get in Touch

              <ArrowUpRight
                aria-hidden="true"
                size={13}
                strokeWidth={1.8}
                className="
                  transition-transform
                  duration-200
                  group-hover:-translate-y-0.5
                  group-hover:translate-x-0.5
                "
              />
            </Link>

            {/* =================================================
                MOBILE MENU BUTTON
            ================================================= */}

            <button
              type="button"
              onClick={openMenu}
              aria-label="Open navigation menu"
              aria-expanded={isOpen}
              aria-controls="mobile-navigation"
              className="
                ml-auto
                flex
                h-10
                w-10
                items-center
                justify-center
                rounded-lg
                border
                border-white/20
                bg-white/[0.05]
             
                transition-colors
                duration-200
                hover:border-white/40
                hover:bg-white/10
                focus-visible:outline-none
                focus-visible:ring-2
                focus-visible:ring-white/70
                md:hidden
              "
            >
              <Menu
                aria-hidden="true"
                size={20}
                strokeWidth={1.7}
              />
            </button>
          </nav>
        </Container>
      </header>

      {/* =====================================================
          MOBILE NAVIGATION
      ===================================================== */}

      <div
        id="mobile-navigation"
        role="dialog"
        aria-modal="true"
        aria-label="Mobile navigation"
        className={`
          fixed
          inset-0
          z-[100]
          bg-[#06121b]
          transition-opacity
          duration-300
          md:hidden
          ${
            isOpen
              ? "pointer-events-auto opacity-100"
              : "pointer-events-none opacity-0"
          }
        `}
      >
        <div
          className="
            mx-auto
            flex
            min-h-screen
            max-w-xl
            flex-col
            px-5
            pb-6
            pt-5
            sm:px-7
          "
        >
          {/* =================================================
              MOBILE HEADER
          ================================================= */}

          <div
            className="
              flex
              h-16
              items-center
              justify-between
              rounded-2xl
              border
              border-white/15
              bg-white/[0.04]
              px-4
            "
          >
            <Link
              href="/"
              onClick={closeMenu}
              className="text-white"
            >
              <span
                className="
                  text-[15px]
                  font-semibold
                  uppercase
                  text-white
                  tracking-[0.16em]
                "
              >
                Pasupati
              </span>

              <span
                className="
                  ml-2
                  text-[8px]
                  uppercase
                  tracking-[0.16em]
                  text-white/45
                "
              >
                Infrastructure
              </span>
            </Link>

            <button
              type="button"
              onClick={closeMenu}
              aria-label="Close navigation menu"
              className="
                flex
                h-10
                w-10
                items-center
                justify-center
                rounded-lg
                border
                border-white/20
                text-white
                transition-colors
                duration-200
                hover:bg-white/10
                focus-visible:outline-none
                focus-visible:ring-2
                focus-visible:ring-white/70
              "
            >
              <X
                aria-hidden="true"
                size={19}
                strokeWidth={1.7}
              />
            </button>
          </div>

          {/* =================================================
              MOBILE LINKS
          ================================================= */}

          <div className="mt-10">
            {navigation.map(
              (item, index) => {
                const active =
                  isActive(item.href);

                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={closeMenu}
                    aria-current={
                      active
                        ? "page"
                        : undefined
                    }
                    className="
                      group
                      flex
                      items-center
                      justify-between
                      border-b
                      text-white
                      border-white/10
                      py-5
                    "
                  >
                    <div className="flex items-center gap-5">
                      <span
                        className={`
                          w-5
                          text-[9px]
                          tracking-[0.15em]
                          ${
                            active
                              ? "text-[var(--color-gold)]"
                              : "text-white/30"
                          }
                        `}
                      >
                        0{index + 1}
                      </span>

                      <span
                        className="
                          text-[24px]
                          font-medium
                          tracking-tight
                          text-white
                          transition-transform
                          duration-200
                          group-hover:translate-x-1
                        "
                      >
                        {item.label}
                      </span>
                    </div>

                    <span
                      className={`
                        flex
                        h-9
                        w-9
                        items-center
                        justify-center
                        rounded-full
                        border
                        ${
                          active
                            ? "border-[var(--color-gold)]/50 text-[var(--color-gold)]"
                            : "border-white/10 text-white/40"
                        }
                      `}
                    >
                      <ArrowUpRight
                        aria-hidden="true"
                        size={16}
                        strokeWidth={1.6}
                      />
                    </span>
                  </Link>
                );
              }
            )}
          </div>

          {/* =================================================
              MOBILE CTA
          ================================================= */}

          <div className="mt-auto pt-8">
            <Link
              href="/contact"
              onClick={closeMenu}
              className="
                group
                flex
                h-12
                w-full
                items-center
                justify-center
                gap-2
                rounded-lg
                bg-[var(--color-gold)]
                text-[10px]
                font-semibold
                uppercase
                tracking-[0.1em]
                text-[var(--color-navy)]
                transition-all
                duration-200
                hover:brightness-105
              "
            >
              Start a Conversation

              <ArrowUpRight
                aria-hidden="true"
                size={14}
                strokeWidth={1.8}
                className="
                  transition-transform
                  duration-200
                  group-hover:-translate-y-0.5
                  group-hover:translate-x-0.5
                "
              />
            </Link>

            <div
              className="
                mt-5
                flex
                items-center
                justify-between
                border-t
                border-white/10
                pt-4
                text-[8px]
                uppercase
                tracking-[0.18em]
                text-white/30
              "
            >
              <span>
                Pasupati Infrastructure
              </span>

              <span>
                India
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}