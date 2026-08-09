"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";

export default function ProjectsCTA() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section
      id="contact-cta"
      className="relative isolate min-h-[78vh] overflow-hidden bg-[#06100e] text-white sm:min-h-[82vh]"
    >
      {/* =========================================================
          BACKGROUND IMAGE
      ========================================================== */}

      <div className="absolute inset-0 -z-20 overflow-hidden">
        <motion.div
          initial={
            shouldReduceMotion
              ? false
              : {
                  scale: 1.04,
                }
          }
          whileInView={{
            scale: 1,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: shouldReduceMotion ? 0 : 1.8,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="absolute inset-0"
        >
          <Image
            src="/assets/gallery/img14.jpeg"
            alt=""
            fill
            loading="lazy"
            quality={60}
            sizes="
              (max-width: 640px) 100vw,
              (max-width: 1024px) 100vw,
              1440px
            "
            className="object-cover object-center"
          />
        </motion.div>

        {/* Deep base */}
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-[#06100e]/60"
        />

        {/* Primary cinematic gradient */}
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-gradient-to-r from-[#04100d]/95 via-[#06100e]/72 to-[#06100e]/35"
        />

        {/* Upper atmospheric fade */}
        <div
          aria-hidden="true"
          className="absolute inset-x-0 top-0 h-48 bg-gradient-to-b from-[#06100e]/75 to-transparent"
        />

        {/* Footer transition */}
        <div
          aria-hidden="true"
          className="absolute inset-x-0 bottom-0 h-72 bg-gradient-to-t from-[#040907] via-[#040907]/55 to-transparent"
        />

        {/* Subtle warm light */}
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-[radial-gradient(circle_at_72%_35%,rgba(228,184,111,0.08),transparent_30%)]"
        />
      </div>

      {/* =========================================================
          ARCHITECTURAL GRID
      ========================================================== */}

      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10"
      >
        <div className="mx-auto h-full max-w-[1440px] border-x border-white/[0.07]" />

        <div className="absolute inset-y-0 left-1/2 border-l border-white/[0.045]" />

        <div className="absolute inset-y-0 left-1/4 hidden border-l border-white/[0.03] lg:block" />

        <div className="absolute inset-y-0 left-3/4 hidden border-l border-white/[0.03] lg:block" />
      </div>

      {/* =========================================================
          TOP META
      ========================================================== */}

      <div className="absolute left-6 right-6 top-6 z-20 flex items-center justify-between sm:left-8 sm:right-8 sm:top-8 lg:left-12 lg:right-12">
        <div className="flex items-center gap-3">
          <span
            aria-hidden="true"
            className="h-px w-8 bg-[#e4b86f] sm:w-12"
          />

          <span className="text-[8px] font-semibold uppercase tracking-[0.32em] text-[#e4b86f] sm:text-[9px]">
            Pasupati Infrastructure
          </span>
        </div>

        <span className="hidden font-mono text-[8px] tracking-[0.25em] text-white/35 sm:block">
          04 / 04
        </span>
      </div>

      {/* =========================================================
          MAIN CONTENT
      ========================================================== */}

      <div className="relative z-10 flex min-h-[78vh] items-end sm:min-h-[82vh]">
        <div className="mx-auto w-full max-w-7xl px-6 pb-20 sm:px-8 sm:pb-24 lg:px-12 lg:pb-28">
          <motion.div
            initial={
              shouldReduceMotion
                ? false
                : {
                    opacity: 0,
                    y: 35,
                  }
            }
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
              amount: 0.2,
            }}
            transition={{
              duration: shouldReduceMotion ? 0 : 0.9,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="max-w-5xl"
          >
            {/* ===================================================
                EYEBROW
            ==================================================== */}

            <div className="mb-7 flex items-center gap-3 sm:mb-9">
              <span
                aria-hidden="true"
                className="h-px w-10 bg-[#e4b86f] sm:w-14"
              />

              <span className="text-[9px] font-semibold uppercase tracking-[0.34em] text-[#e4b86f] sm:text-[10px]">
                The Next Chapter
              </span>
            </div>

            {/* ===================================================
                HEADING
            ==================================================== */}

            <h2 className="max-w-5xl text-[3.4rem] font-medium leading-[0.88] tracking-[-0.07em] sm:text-6xl md:text-7xl lg:text-[6.5rem]">
              Let&apos;s build
              <br />
              <span className="text-[#f0c982]">what comes next.</span>
            </h2>

            {/* ===================================================
                DESCRIPTION
            ==================================================== */}

            <p className="mt-8 max-w-2xl text-sm leading-7 text-white/68 sm:mt-9 sm:text-base sm:leading-8 lg:text-lg">
              From major infrastructure and commercial developments to
              hospitality, healthcare, institutional and residential spaces —
              every project begins with a clear vision and a conversation.
            </p>

            {/* ===================================================
                CTA ACTIONS
            ==================================================== */}

            <div className="mt-9 flex flex-col gap-4 sm:mt-10 sm:flex-row sm:items-center">
              {/* Primary */}
              <Link
                href="/contact"
                className="group relative inline-flex w-fit items-center gap-6 overflow-hidden border border-[#f0c982] bg-[#f0c982] px-6 py-4 text-[10px] font-semibold uppercase tracking-[0.2em] text-[#101715] transition-colors duration-500 hover:bg-transparent hover:text-[#f0c982]"
              >
                <span className="relative z-10">
                  Start a conversation
                </span>

                <span
                  aria-hidden="true"
                  className="relative z-10 text-base transition-transform duration-500 group-hover:translate-x-1 group-hover:-translate-y-1"
                >
                  ↗
                </span>
              </Link>

              {/* Secondary */}
              <Link
                href="#our-work"
                className="group inline-flex w-fit items-center gap-3 px-2 py-3 text-[10px] font-semibold uppercase tracking-[0.2em] text-white/65 transition-colors duration-300 hover:text-[#f0c982]"
              >
                <span>Explore our work</span>

                <span
                  aria-hidden="true"
                  className="transition-transform duration-300 group-hover:-translate-y-1"
                >
                  ↑
                </span>
              </Link>
            </div>

            {/* ===================================================
                BOTTOM INFORMATION
            ==================================================== */}

            <div className="mt-16 border-t border-white/[0.14] pt-5 sm:mt-20">
              <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                <span className="text-[8px] font-medium uppercase tracking-[0.3em] text-white/35 sm:text-[9px]">
                  Construction · Infrastructure · Development
                </span>

                <div className="flex items-center gap-3">
                  <span
                    aria-hidden="true"
                    className="h-1 w-1 rounded-full bg-[#e4b86f]"
                  />

                  <span className="font-mono text-[8px] uppercase tracking-[0.25em] text-white/35 sm:text-[9px]">
                    Built for generations
                  </span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* =========================================================
          SCROLL / SIDE MARKER
      ========================================================== */}

      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-8 right-6 hidden items-center gap-4 lg:flex"
      >
        <span className="text-[8px] font-medium uppercase tracking-[0.3em] text-white/30">
          Begin a project
        </span>

        <span className="h-9 w-px bg-white/20" />
      </div>

      {/* =========================================================
          CORNER MARKERS
      ========================================================== */}

      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-5 top-5 h-8 w-8 border-l border-t border-white/15 sm:left-8 sm:top-8"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-5 right-5 h-8 w-8 border-b border-r border-white/15 sm:bottom-8 sm:right-8"
      />
    </section>
  );
}