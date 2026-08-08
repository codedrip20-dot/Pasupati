"use client";

import Image from "next/image";
import { ArrowDown, ArrowUpRight } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";

import Button from "@/src/components/ui/Button";
import Container from "@/src/components/ui/Container";

export default function Hero() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section className="relative min-h-[100svh] overflow-hidden bg-(--color-navy)">
      {/* =========================================================
          BACKGROUND IMAGE
          Desktop: full-screen
          Mobile: controlled upper section
      ========================================================= */}

      <motion.div
        initial={shouldReduceMotion ? false : { scale: 1.06 }}
        animate={{ scale: 1 }}
        transition={{
          duration: 1.8,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="
          absolute inset-x-0 top-0
          h-[61%]
          sm:inset-0
          sm:h-full
        "
      >
        <Image
          src="/assets/hero.jpeg"
          alt="Pashupati Infrastructure construction project"
          fill
          priority
          sizes="100vw"
          className="
            object-cover
            object-[58%_38%]
            sm:object-center
          "
        />
      </motion.div>

      {/* =========================================================
          IMAGE TINT
      ========================================================= */}

      <div
        aria-hidden="true"
        className="
          absolute inset-x-0 top-0 h-[61%]
          bg-(--color-navy)/20
          sm:inset-0 sm:h-full sm:bg-(--color-navy)/30
        "
      />

      {/* =========================================================
          DESKTOP LEFT CONTRAST
      ========================================================= */}

      <div
        aria-hidden="true"
        className="
          absolute inset-0 hidden sm:block
        "
        style={{
          background:
            "linear-gradient(90deg, rgba(12,29,50,0.96) 0%, rgba(12,29,50,0.76) 34%, rgba(12,29,50,0.34) 68%, rgba(12,29,50,0.12) 100%)",
        }}
      />

      {/* =========================================================
          MOBILE IMAGE → NAVY TRANSITION
      ========================================================= */}

      <div
        aria-hidden="true"
        className="
          absolute inset-x-0 top-[36%] z-[1] h-[32%]
          sm:hidden
        "
        style={{
          background:
            "linear-gradient(to bottom, transparent 0%, rgba(12,29,50,0.28) 20%, rgba(12,29,50,0.72) 58%, rgba(12,29,50,1) 100%)",
        }}
      />

      {/* =========================================================
          MOBILE BOTTOM NAVY
      ========================================================= */}

      <div
        aria-hidden="true"
        className="
          absolute inset-x-0 bottom-0 h-[45%]
          bg-(--color-navy)
          sm:hidden
        "
      />

      {/* =========================================================
          DESKTOP BOTTOM CINEMATIC FADE
      ========================================================= */}

      <div
        aria-hidden="true"
        className="absolute inset-x-0 bottom-0 hidden h-72 sm:block"
        style={{
          background:
            "linear-gradient(to top, rgba(12,29,50,0.98), rgba(12,29,50,0))",
        }}
      />

      {/* =========================================================
          SUBTLE NAVY ATMOSPHERIC GLOW
      ========================================================= */}

      <div
        aria-hidden="true"
        className="
          pointer-events-none absolute
          -left-32 top-[32%]
          h-80 w-80
          rounded-full
          bg-blue-500/[0.06]
          blur-[100px]
          sm:left-[-8%] sm:top-[42%]
        "
      />

      {/* =========================================================
          SUBTLE GOLD ATMOSPHERIC GLOW
      ========================================================= */}

      <div
        aria-hidden="true"
        className="
          pointer-events-none absolute
          right-[-20%] top-[42%]
          h-72 w-72
          rounded-full
          bg-(--color-gold)/[0.055]
          blur-[110px]
          sm:right-[-8%] sm:top-[30%]
        "
      />

      {/* =========================================================
          ARCHITECTURAL GRID
      ========================================================= */}

      <div
        aria-hidden="true"
        className="
          pointer-events-none absolute inset-0
          opacity-[0.07]
        "
      >
        <div className="absolute left-[7%] top-0 h-full w-px bg-white" />

        <div className="absolute right-[7%] top-0 h-full w-px bg-white" />

        <div className="absolute left-0 right-0 top-[18%] h-px bg-white" />

        <div className="absolute bottom-[16%] left-0 right-0 h-px bg-white" />
      </div>

      {/* =========================================================
          HERO CONTENT
      ========================================================= */}

      <Container
        className="
          relative z-10
          flex min-h-[100svh]
          items-end
          pb-24
          pt-24

          sm:pb-20
          sm:pt-32

          lg:pb-24
        "
      >
        <div className="w-full">
          <div className="max-w-5xl">
            {/* =====================================================
                EYEBROW
            ===================================================== */}

            <motion.div
              initial={
                shouldReduceMotion
                  ? false
                  : { opacity: 0, x: -18 }
              }
              animate={{ opacity: 1, x: 0 }}
              transition={{
                duration: 0.7,
                delay: 0.15,
                ease: "easeOut",
              }}
              className="
                mb-5
                flex items-center gap-3

                sm:mb-7
                sm:gap-4
              "
            >
              <span
                className="
                  h-px
                  w-8
                  bg-(--color-gold)
                  shadow-[0_0_12px_rgba(255,211,159,0.35)]

                  sm:w-12
                "
              />

              <span
                className="
                  text-[10px]
                  font-medium
                  uppercase
                  tracking-[0.28em]
                  text-(--color-gold)
                  drop-shadow-[0_0_12px_rgba(255,211,159,0.12)]

                  sm:text-sm
                  sm:tracking-[0.3em]
                "
              >
                Pasupati Infrastructure
              </span>
            </motion.div>

            {/* =====================================================
                MAIN HEADING
            ===================================================== */}

            <motion.h1
              initial={
                shouldReduceMotion
                  ? false
                  : { opacity: 0, y: 28 }
              }
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.9,
                delay: 0.25,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="
                max-w-4xl
                text-[3rem]
                font-semibold
                leading-[0.94]
                tracking-[-0.045em]
                text-white

                sm:text-[clamp(4rem,7vw,7.5rem)]
              "
            >
              Building Trust.
              <br />

              <span className="text-white/90">
                Preserving Heritage.
              </span>
              <br />

              <span
                className="
                  text-(--color-gold)
                  drop-shadow-[0_0_28px_rgba(255,211,159,0.14)]
                "
              >
                Creating Futures.
              </span>
            </motion.h1>

            {/* =====================================================
                DESCRIPTION + CTA
            ===================================================== */}

            <motion.div
              initial={
                shouldReduceMotion
                  ? false
                  : { opacity: 0, y: 20 }
              }
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.8,
                delay: 0.45,
                ease: "easeOut",
              }}
              className="
                mt-7
                flex flex-col gap-6

                sm:mt-9
                sm:flex-row
                sm:items-center
                sm:gap-7
              "
            >
              <p
                className="
                  max-w-md
                  text-[13px]
                  leading-6
                  text-white/70

                  sm:text-base
                  sm:leading-7
                "
              >
                Infrastructure shaped by precision,
                responsibility and a vision for generations
                to come.
              </p>

              <Button
                href="#projects"
                variant="gold"
                className="w-fit"
              >
                Explore Projects
              </Button>
            </motion.div>
          </div>

          {/* =====================================================
              BOTTOM INFORMATION
          ===================================================== */}

          <motion.div
            initial={
              shouldReduceMotion
                ? false
                : { opacity: 0, y: 12 }
            }
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.8,
              delay: 0.7,
            }}
            className="
              mt-12
              flex
              items-end
              justify-between
              border-t
              border-white/10
              pt-4

              sm:mt-16
              sm:pt-5
            "
          >
            {/* Brand statement */}

            <div className="hidden max-w-sm sm:block">
              <p
                className="
                  text-[10px]
                  font-medium
                  uppercase
                  tracking-[0.25em]
                  text-white/35
                "
              >
                Building Trust · Preserving Heritage ·
                Creating Futures
              </p>
            </div>

            {/* Mobile / Desktop Scroll */}

            <div
              className="
                ml-auto
                flex
                items-center
                gap-3
                text-white/45
              "
            >
              <span
                className="
                  text-[9px]
                  font-medium
                  uppercase
                  tracking-[0.22em]
                "
              >
                Scroll to explore
              </span>

              <div
                className="
                  flex
                  h-9
                  w-9
                  items-center
                  justify-center
                  border
                  border-white/15
                  bg-white/[0.02]
                  shadow-[0_0_20px_rgba(255,255,255,0.03)]
                  backdrop-blur-sm
                "
              >
                <ArrowDown
                  size={14}
                  strokeWidth={1.5}
                  className="
                    text-(--color-gold)
                    drop-shadow-[0_0_8px_rgba(255,211,159,0.35)]
                  "
                />
              </div>
            </div>
          </motion.div>
        </div>
      </Container>

      {/* =========================================================
          GOLD ARCHITECTURAL ACCENT
      ========================================================= */}

      <motion.div
        initial={
          shouldReduceMotion
            ? false
            : { scaleY: 0 }
        }
        animate={{ scaleY: 1 }}
        transition={{
          duration: 1,
          delay: 0.7,
          ease: [0.22, 1, 0.36, 1],
        }}
        style={{
          transformOrigin: "bottom",
        }}
        className="
          absolute
          bottom-0
          left-0
          hidden
          h-28
          w-px
          bg-(--color-gold)
          shadow-[0_0_14px_rgba(255,211,159,0.35)]

          sm:block
        "
      />

      {/* =========================================================
          FEATURED PROJECT MARKER
      ========================================================= */}

      <motion.div
        initial={
          shouldReduceMotion
            ? false
            : { opacity: 0 }
        }
        animate={{ opacity: 1 }}
        transition={{
          duration: 0.8,
          delay: 0.9,
        }}
        className="
          absolute
          bottom-8
          right-[7%]
          hidden
          items-center
          gap-3

          lg:flex
        "
      >
        <span
          className="
            text-[9px]
            font-medium
            uppercase
            tracking-[0.25em]
            text-white/35
          "
        >
          Featured Project
        </span>

        <ArrowUpRight
          size={15}
          strokeWidth={1.5}
          className="
            text-(--color-gold)
            drop-shadow-[0_0_8px_rgba(255,211,159,0.3)]
          "
        />
      </motion.div>
    </section>
  );
}