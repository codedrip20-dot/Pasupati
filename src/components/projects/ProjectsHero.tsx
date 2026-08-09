"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";

export default function ProjectsHero() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section className="relative min-h-[92svh] overflow-hidden bg-[#0a100f] text-white sm:min-h-screen">
      {/* =========================================================
          BACKGROUND
      ========================================================== */}

      <div className="absolute inset-0">
        <Image
          src="/assets/hero2.jpeg"
          alt="Pasupati Infrastructure construction project"
          fill
          priority
          fetchPriority="high"
          sizes="100vw"
          quality={70}
          className="object-cover object-[58%_center] sm:object-center"
        />

        {/* Overall cinematic treatment */}
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-[#07100e]/25"
        />

        {/* Stronger treatment behind typography */}
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-gradient-to-r from-[#07100e]/95 via-[#07100e]/65 to-[#07100e]/15"
        />

        {/* Mobile readability */}
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-gradient-to-t from-[#07100e] via-[#07100e]/25 to-transparent sm:hidden"
        />

        {/* Desktop bottom fade */}
        <div
          aria-hidden="true"
          className="absolute inset-x-0 bottom-0 hidden h-72 bg-gradient-to-t from-[#07100e] to-transparent sm:block"
        />
      </div>

      {/* =========================================================
          ARCHITECTURAL GRID
      ========================================================== */}

      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.08]"
      >
        <div className="mx-auto h-full max-w-7xl border-x border-white/40" />

        <div className="absolute inset-y-0 left-1/4 border-l border-white/20" />
        <div className="absolute inset-y-0 left-1/2 border-l border-white/20" />
        <div className="absolute inset-y-0 left-3/4 border-l border-white/20" />
      </div>

      {/* =========================================================
          TOP META
      ========================================================== */}

      <div className="absolute left-6 right-6 top-28 z-20 flex items-center justify-between sm:left-8 sm:right-8 sm:top-32 lg:left-12 lg:right-12">
        <div className="flex items-center gap-3">
          <span
            aria-hidden="true"
            className="h-px w-8 bg-[#e8bd73] sm:w-12"
          />

          <span className="text-[9px] font-medium uppercase tracking-[0.3em] text-[#f0c982] sm:text-[10px]">
            Pasupati Infrastructure
          </span>
        </div>

        <span className="hidden text-[9px] uppercase tracking-[0.3em] text-white/45 sm:block">
          Projects / 01
        </span>
      </div>

      {/* =========================================================
          MAIN CONTENT
      ========================================================== */}

      <div className="relative z-10 flex min-h-[92svh] items-end sm:min-h-screen">
        <div className="mx-auto w-full max-w-7xl px-6 pb-16 sm:px-8 sm:pb-24 lg:px-12 lg:pb-28">
          <motion.div
            initial={
              shouldReduceMotion
                ? false
                : {
                    opacity: 0,
                    y: 40,
                  }
            }
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: shouldReduceMotion ? 0 : 1,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="max-w-5xl"
          >
            {/* Eyebrow */}
            <motion.div
              initial={
                shouldReduceMotion
                  ? false
                  : {
                      opacity: 0,
                      y: 15,
                    }
              }
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                delay: shouldReduceMotion ? 0 : 0.15,
                duration: shouldReduceMotion ? 0 : 0.7,
              }}
              className="mb-5 sm:mb-7"
            >
              <span className="text-[10px] font-medium uppercase tracking-[0.32em] text-white/55">
                Our Work
              </span>
            </motion.div>

            {/* =====================================================
                HEADING
            ====================================================== */}

            <h1 className="max-w-5xl text-[3.5rem] font-medium leading-[0.88] tracking-[-0.065em] sm:text-6xl md:text-7xl lg:text-[7rem] xl:text-[7.5rem]">
              Building across
              <br />

              <span className="text-[#f0c982]">
                places &amp; possibilities.
              </span>
            </h1>

            {/* =====================================================
                LOWER CONTENT
            ====================================================== */}

            <div className="mt-7 flex flex-col gap-8 sm:mt-9 lg:flex-row lg:items-end lg:justify-between lg:gap-12">
              <p className="max-w-xl text-sm leading-7 text-white/70 sm:text-base sm:leading-8 lg:text-[17px]">
                From roads and commercial developments to monasteries,
                hospitals, hospitality and homes, our work spans the places
                where communities live, gather, learn and grow.
              </p>

              {/* CTA */}
              <div className="flex flex-col gap-4 sm:flex-row sm:items-center lg:shrink-0">
                <Link
                  href="#our-work"
                  className="group inline-flex h-12 items-center justify-between gap-8 border border-[#f0c982] bg-[#f0c982] px-5 text-[10px] font-semibold uppercase tracking-[0.2em] text-[#101715] transition-all duration-300 hover:bg-transparent hover:text-[#f0c982] sm:h-13 sm:px-6"
                >
                  <span>Explore our work</span>

                  <span
                    aria-hidden="true"
                    className="text-base transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                  >
                    ↗
                  </span>
                </Link>

                <Link
                  href="/contact"
                  className="group inline-flex items-center gap-3 text-[10px] font-medium uppercase tracking-[0.2em] text-white/65 transition-colors duration-300 hover:text-[#f0c982]"
                >
                  Start a conversation

                  <span
                    aria-hidden="true"
                    className="transition-transform duration-300 group-hover:translate-x-1"
                  >
                    →
                  </span>
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* =========================================================
          BOTTOM INFORMATION BAR
      ========================================================== */}

      <div className="absolute bottom-0 left-0 right-0 z-20 border-t border-white/10">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 sm:px-8 lg:px-12">
          <div className="flex items-center gap-3">
            <span
              aria-hidden="true"
              className="h-1.5 w-1.5 rounded-full bg-[#e8bd73]"
            />

            <span className="text-[8px] uppercase tracking-[0.28em] text-white/45 sm:text-[9px]">
              Construction · Infrastructure · Development
            </span>
          </div>

          <div className="hidden items-center gap-3 sm:flex">
            <span className="text-[9px] uppercase tracking-[0.25em] text-white/35">
              Scroll to explore
            </span>

            <motion.span
              animate={
                shouldReduceMotion
                  ? undefined
                  : {
                      y: [0, 5, 0],
                    }
              }
              transition={
                shouldReduceMotion
                  ? undefined
                  : {
                      duration: 1.8,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }
              }
              aria-hidden="true"
              className="text-sm text-[#f0c982]"
            >
              ↓
            </motion.span>
          </div>
        </div>
      </div>
    </section>
  );
}