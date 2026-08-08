"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";

export default function ProjectIntro() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section className="relative overflow-hidden bg-[#f1efe9] text-[#111916]">
      {/* =========================================================
          BRAND IMAGE BACKGROUND
      ========================================================== */}
      <div className="absolute inset-0">
        <Image
          src="/assets/pasupatibusinessCard.png"
          alt=""
          fill
          sizes="100vw"
          className="object-cover object-center opacity-[0.22]"
        />

        {/* Warm paper-like wash */}
        <div className="absolute inset-0 bg-[#f1efe9]/80" />

        {/* Soft light */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_35%,rgba(255,255,255,0.95),transparent_42%)]" />

        {/* Bottom fade */}
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#f1efe9] to-transparent" />
      </div>

      {/* =========================================================
          ARCHITECTURAL GRID
      ========================================================== */}
      <div className="pointer-events-none absolute inset-0">
        <div className="mx-auto h-full max-w-[1440px] border-x border-[#18201d]/[0.06]" />

        <div className="absolute left-1/4 top-0 hidden h-full border-l border-[#18201d]/[0.045] lg:block" />

        <div className="absolute left-1/2 top-0 h-full border-l border-[#18201d]/[0.045]" />

        <div className="absolute left-3/4 top-0 hidden h-full border-l border-[#18201d]/[0.045] lg:block" />
      </div>

      {/* =========================================================
          CONTENT
      ========================================================== */}
      <div className="relative z-10 mx-auto max-w-7xl px-6 py-24 sm:px-8 sm:py-32 lg:px-12 lg:py-40">
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
            duration: 0.9,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          {/* =====================================================
              TOP LABEL
          ====================================================== */}
          <div className="mb-14 flex items-center justify-between sm:mb-20">
            <div className="flex items-center gap-3">
              <span className="h-px w-10 bg-[#b8894d] sm:w-14" />

              <span className="text-[9px] font-semibold uppercase tracking-[0.32em] text-[#65706b] sm:text-[10px]">
                Our Approach
              </span>
            </div>

            <span className="hidden text-[9px] font-medium uppercase tracking-[0.3em] text-[#858b87] sm:block">
              Pasupati Infrastructure
            </span>
          </div>

          {/* =====================================================
              MAIN EDITORIAL CONTENT
          ====================================================== */}
          <div className="grid gap-12 lg:grid-cols-[1.25fr_0.75fr] lg:gap-24">
            {/* LEFT */}
            <div>
              <motion.h2
                initial={
                  shouldReduceMotion
                    ? false
                    : {
                        opacity: 0,
                        y: 25,
                      }
                }
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                }}
                transition={{
                  delay: shouldReduceMotion ? 0 : 0.1,
                  duration: 0.8,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="max-w-4xl text-[3.25rem] font-medium leading-[0.9] tracking-[-0.065em] sm:text-6xl md:text-7xl lg:text-[6rem]"
              >
                Built for
                <br />

                <span className="text-[#9a713c]">purpose.</span>

                <br />

                Shaped by
                <br />

                <span className="text-[#9a713c]">place.</span>
              </motion.h2>
            </div>

            {/* RIGHT */}
            <div className="flex flex-col justify-end lg:pb-2">
              <div className="mb-7 h-px w-12 bg-[#b8894d]" />

              <p className="max-w-lg text-[15px] leading-7 text-[#3f4945] sm:text-base sm:leading-8">
                From major infrastructure and commercial developments to
                monasteries, hospitals, hospitality properties and homes,
                Pasupati Infrastructure works across a diverse range of
                construction environments.
              </p>

              <p className="mt-5 max-w-lg text-[15px] leading-7 text-[#59615d] sm:text-base sm:leading-8">
                Every structure begins with a different purpose. Our approach
                remains grounded in thoughtful execution, practical expertise
                and a commitment to creating spaces that serve their purpose
                and endure over time.
              </p>

              {/* Small brand detail */}
              <div className="mt-10 flex items-center gap-4">
                <div className="flex h-9 w-9 items-center justify-center border border-[#18201d]/15">
                  <span className="text-[10px] font-semibold text-[#9a713c]">
                    P
                  </span>
                </div>

                <div>
                  <p className="text-[9px] font-semibold uppercase tracking-[0.25em] text-[#252e2a]">
                    Built with purpose
                  </p>

                  <p className="mt-1 text-[9px] uppercase tracking-[0.2em] text-[#858b87]">
                    Since Pasupati
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* =====================================================
              DIVIDER
          ====================================================== */}
          <div className="mt-20 border-t border-[#18201d]/15 pt-6 sm:mt-28">
            <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
              <div className="flex items-center gap-3">
                <span className="h-1.5 w-1.5 rounded-full bg-[#b8894d]" />

                <span className="text-[8px] font-semibold uppercase tracking-[0.28em] text-[#69716d] sm:text-[9px]">
                  Construction · Infrastructure · Development
                </span>
              </div>

              <span className="text-[9px] font-medium uppercase tracking-[0.28em] text-[#9a713c]">
                01 — 02
              </span>
            </div>
          </div>
        </motion.div>
      </div>

      {/* =========================================================
          DECORATIVE CORNER MARKS
      ========================================================== */}
      <div className="pointer-events-none absolute left-5 top-5 h-8 w-8 border-l border-t border-[#18201d]/15 sm:left-8 sm:top-8" />

      <div className="pointer-events-none absolute bottom-5 right-5 h-8 w-8 border-b border-r border-[#18201d]/15 sm:bottom-8 sm:right-8" />
    </section>
  );
}