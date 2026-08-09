"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { constructionCategories } from "@/src/data/constructionCategories";
import type { ConstructionCategory } from "@/src/types/projects";

export default function ConstructionCategories() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section
      id="our-work"
      className="relative isolate overflow-hidden bg-[#07100e] text-white"
    >
      {/* =========================================================
          BACKGROUND IMAGE
      ========================================================== */}

      <div
        aria-hidden="true"
        className="absolute inset-0 -z-30"
      >
        <Image
          src="/assets/gallery/img4.jpeg"
          alt=""
          fill
          loading="lazy"
          sizes="100vw"
          quality={50}
          className="object-cover object-center"
        />

        {/* Cinematic image treatment */}
        <div className="absolute inset-0 bg-[#06100e]/70" />

        <div className="absolute inset-0 bg-gradient-to-r from-[#06100e]/95 via-[#06100e]/75 to-[#06100e]/45" />

        <div className="absolute inset-0 bg-gradient-to-b from-[#06100e]/80 via-transparent to-[#06100e]/95" />
      </div>

      {/* =========================================================
          ARCHITECTURAL GRID
      ========================================================== */}

      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-20"
      >
        <div className="mx-auto h-full max-w-[1440px] border-x border-white/[0.07]" />

        <div className="absolute inset-y-0 left-1/2 border-l border-white/[0.045]" />

        <div className="absolute inset-y-0 left-1/4 hidden border-l border-white/[0.035] lg:block" />

        <div className="absolute inset-y-0 left-3/4 hidden border-l border-white/[0.035] lg:block" />
      </div>

      {/* =========================================================
          CONTENT
      ========================================================== */}

      <div className="relative mx-auto max-w-7xl px-6 py-24 sm:px-8 sm:py-32 lg:px-12 lg:py-40">
        {/* =======================================================
            HEADER
        ======================================================== */}

        <motion.header
          initial={
            shouldReduceMotion
              ? false
              : {
                  opacity: 0,
                  y: 30,
                }
          }
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            amount: 0.25,
          }}
          transition={{
            duration: 0.9,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="max-w-5xl"
        >
          <div className="mb-8 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <span className="h-px w-10 bg-[#e6b96f] sm:w-14" />

              <span className="text-[9px] font-semibold uppercase tracking-[0.32em] text-[#e6b96f] sm:text-[10px]">
                What We Build
              </span>
            </div>

            <span className="hidden text-[9px] uppercase tracking-[0.28em] text-white/35 sm:block">
              02 / 04
            </span>
          </div>

          <h2 className="max-w-4xl text-[3.15rem] font-medium leading-[0.9] tracking-[-0.065em] sm:text-5xl md:text-6xl lg:text-[6rem]">
            Different purposes.
            <br />

            <span className="text-white/40">One standard.</span>
          </h2>

          <p className="mt-8 max-w-2xl text-sm leading-7 text-white/65 sm:text-base sm:leading-8 lg:text-[17px]">
            From commercial developments and infrastructure to sacred spaces,
            healthcare, hospitality, education and residential construction,
            our work spans the environments that shape everyday life.
          </p>
        </motion.header>

        {/* =======================================================
            CATEGORY LIST
        ======================================================== */}

        <div className="mt-16 sm:mt-24">
          <div className="mb-4 flex items-center justify-between border-b border-white/15 pb-4">
            <span className="text-[8px] font-semibold uppercase tracking-[0.3em] text-white/35 sm:text-[9px]">
              Areas of Expertise
            </span>

            <span className="text-[8px] uppercase tracking-[0.25em] text-white/30 sm:text-[9px]">
              09 Categories
            </span>
          </div>

          <div className="border-t border-white/10">
            {constructionCategories.map((category, index) => (
              <CategoryRow
                key={category.id}
                category={category}
                index={index}
                shouldReduceMotion={shouldReduceMotion}
              />
            ))}
          </div>
        </div>

        {/* =======================================================
            BOTTOM NOTE
        ======================================================== */}

        <motion.div
          initial={
            shouldReduceMotion
              ? false
              : {
                  opacity: 0,
                  y: 15,
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
            duration: 0.7,
          }}
          className="mt-14 flex flex-col gap-5 sm:mt-20 sm:flex-row sm:items-center sm:justify-between"
        >
          <p className="max-w-xl text-xs leading-6 text-white/40 sm:text-sm">
            Every site presents a different challenge. Our responsibility is
            to understand it, execute it carefully and build for what comes
            next.
          </p>

          <span className="shrink-0 text-[9px] font-semibold uppercase tracking-[0.28em] text-[#e6b96f]">
            Built to endure
          </span>
        </motion.div>
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

/* ===============================================================
   CATEGORY ROW
================================================================ */

interface CategoryRowProps {
  category: ConstructionCategory;
  index: number;
  shouldReduceMotion: boolean | null;
}

function CategoryRow({
  category,
  index,
  shouldReduceMotion,
}: CategoryRowProps) {
  return (
    <motion.article
      initial={
        shouldReduceMotion
          ? false
          : {
              opacity: 0,
              y: 22,
            }
      }
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{
        once: true,
        amount: 0.12,
      }}
      transition={{
        duration: 0.65,
        delay: shouldReduceMotion ? 0 : Math.min(index * 0.045, 0.3),
        ease: [0.22, 1, 0.36, 1],
      }}
      className="group relative border-b border-white/10"
    >
      {/* Hover surface */}
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 origin-left scale-x-0 bg-white/[0.045] transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-x-100"
      />

      <div className="py-8 sm:py-10 lg:py-11">
        <div className="grid gap-5 lg:grid-cols-[80px_minmax(0,1.2fr)_minmax(280px,0.8fr)_52px] lg:items-center lg:gap-12">
          {/* Number */}
          <div className="flex items-center gap-3">
            <span className="font-mono text-[10px] tracking-[0.18em] text-[#e6b96f]">
              {category.number}
            </span>

            <span className="h-px w-5 bg-[#e6b96f]/40 lg:hidden" />
          </div>

          {/* Title */}
          <h3 className="max-w-2xl text-[1.65rem] font-medium leading-[1.05] tracking-[-0.045em] text-white transition-all duration-500 group-hover:translate-x-1 sm:text-3xl lg:text-[2.35rem]">
            {category.title}
          </h3>

          {/* Description */}
          <p className="max-w-xl text-[13px] leading-6 text-white/45 transition-colors duration-500 group-hover:text-white/70 sm:text-sm sm:leading-7">
            {category.description}
          </p>

          {/* Desktop arrow */}
          <div className="hidden justify-end lg:flex">
            <span className="flex h-11 w-11 items-center justify-center border border-white/15 text-sm text-white/35 transition-all duration-500 group-hover:border-[#e6b96f] group-hover:bg-[#e6b96f] group-hover:text-[#0d1512]">
              <span className="transition-transform duration-500 group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                ↗
              </span>
            </span>
          </div>

          {/* Mobile arrow */}
          <div className="flex lg:hidden">
            <span className="flex h-9 w-9 items-center justify-center border border-white/15 text-sm text-white/35 transition-colors duration-300 group-hover:border-[#e6b96f] group-hover:text-[#e6b96f]">
              ↗
            </span>
          </div>
        </div>
      </div>
    </motion.article>
  );
}