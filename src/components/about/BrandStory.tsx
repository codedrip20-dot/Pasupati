import Image from "next/image";

import { aboutData } from "@/src/data/about";

export default function BrandStory() {
  return (
    <section
      aria-labelledby="brand-story-title"
      className="relative isolate overflow-hidden bg-[#07111f]"
      style={{
        contentVisibility: "auto",
        containIntrinsicSize: "1100px",
      }}
    >
      {/* =========================================================
          BACKGROUND
      ========================================================== */}

      <div
        aria-hidden="true"
        className="absolute inset-0 -z-30"
      >
        <Image
          src="/assets/gallery/img13.jpeg"
          alt=""
          fill
          loading="lazy"
          sizes="100vw"
          quality={55}
          className="object-cover object-center"
        />
      </div>

      {/* Combined cinematic treatment */}
      <div
        aria-hidden="true"
        className="
          absolute inset-0 -z-20
          bg-[linear-gradient(to_right,rgba(7,17,31,0.95),rgba(7,17,31,0.72),rgba(7,17,31,0.30)),linear-gradient(to_bottom,rgba(7,17,31,0.65),transparent_30%,rgba(7,17,31,0.8)_76%,rgba(7,17,31,1))]
        "
      />

      {/* =========================================================
          ARCHITECTURAL GRID
      ========================================================== */}

      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 opacity-[0.035]"
      >
        <div className="mx-auto h-full max-w-7xl border-x border-white/50" />

        <div className="absolute inset-y-0 left-1/4 hidden w-px bg-white/30 lg:block" />
        <div className="absolute inset-y-0 left-1/2 hidden w-px bg-white/30 lg:block" />
        <div className="absolute inset-y-0 left-3/4 hidden w-px bg-white/30 lg:block" />
      </div>

      {/* =========================================================
          BRAND ACCENTS
      ========================================================== */}

      <div
        aria-hidden="true"
        className="absolute left-0 top-0 h-px w-40 bg-gradient-to-r from-amber-300 to-transparent sm:w-64"
      />

      <div
        aria-hidden="true"
        className="absolute right-0 top-24 h-48 w-px bg-gradient-to-b from-amber-300/40 to-transparent"
      />

      {/* =========================================================
          CONTENT
      ========================================================== */}

      <div className="relative mx-auto max-w-7xl px-5 py-24 sm:px-8 sm:py-28 lg:px-12 lg:py-36">
        {/* =====================================================
            HEADER
        ====================================================== */}

        <header className="max-w-5xl">
          <div className="flex items-center gap-4">
            <span
              aria-hidden="true"
              className="h-px w-10 bg-amber-300 sm:w-14"
            />

            <span className="text-[10px] font-semibold uppercase tracking-[0.32em] text-amber-300 sm:text-xs">
              {aboutData.story.eyebrow}
            </span>
          </div>

          <h2
            id="brand-story-title"
            className="mt-7 max-w-4xl text-4xl font-semibold leading-[0.92] tracking-[-0.055em] text-white sm:text-5xl lg:text-7xl"
          >
            {aboutData.story.title}
          </h2>
        </header>

        {/* =====================================================
            STORY PANEL
        ====================================================== */}

        <div
          className="
            relative mt-14 overflow-hidden
            rounded-[2rem]
            border border-white/15
            bg-[#07111f]/70
            shadow-[0_20px_60px_rgba(0,0,0,0.24)]
            backdrop-blur-[1px]
            sm:mt-16
            sm:backdrop-blur-md
            lg:mt-20
          "
        >
          {/* Panel glow — reduced on mobile */}
          <div
            aria-hidden="true"
            className="
              pointer-events-none
              absolute
              -right-32
              -top-32
              hidden
              h-80
              w-80
              rounded-full
              bg-amber-300/[0.06]
              blur-[100px]
              sm:block
            "
          />

          {/* Fine top border */}
          <div
            aria-hidden="true"
            className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-amber-300/50 to-transparent"
          />

          <div className="relative grid lg:grid-cols-12">
            {/* =================================================
                LEFT — STORY INTRO
            ================================================== */}

            <div className="p-7 sm:p-10 lg:col-span-5 lg:p-12 xl:p-14">
              <div className="flex items-start gap-5">
                <span
                  aria-hidden="true"
                  className="mt-1 h-16 w-px shrink-0 bg-amber-300"
                />

                <div>
                  <p className="text-[10px] font-semibold uppercase tracking-[0.28em] text-amber-300">
                    Our Foundation
                  </p>

                  <p className="mt-6 text-base leading-8 text-white/80 sm:text-lg sm:leading-9">
                    {aboutData.story.paragraphs[0]}
                  </p>
                </div>
              </div>

              {/* Experience marker */}
              <div className="mt-12 border-t border-white/10 pt-7">
                <div className="flex items-end gap-4">
                  <span className="text-5xl font-semibold leading-none tracking-[-0.06em] text-white sm:text-6xl">
                    20+
                  </span>

                  <span className="pb-1 text-[9px] font-medium uppercase leading-4 tracking-[0.2em] text-white/40">
                    Years
                    <br />
                    Experience
                  </span>
                </div>

                <p className="mt-4 max-w-xs text-xs leading-6 text-white/40">
                  Experience shaped by craftsmanship, reliability and a
                  commitment to lasting value.
                </p>
              </div>
            </div>

            {/* =================================================
                DIVIDER
            ================================================== */}

            <div
              aria-hidden="true"
              className="hidden lg:block lg:w-px lg:bg-gradient-to-b lg:from-transparent lg:via-white/15 lg:to-transparent"
            />

            {/* =================================================
                RIGHT — STORY
            ================================================== */}

            <div className="border-t border-white/10 p-7 sm:p-10 lg:col-span-6 lg:border-t-0 lg:p-12 xl:p-14">
              <div className="space-y-7">
                {aboutData.story.paragraphs
                  .slice(1)
                  .map((paragraph, index) => (
                    <p
                      key={`story-paragraph-${index}`}
                      className="text-base leading-8 text-white/70 sm:text-lg sm:leading-9"
                    >
                      {paragraph}
                    </p>
                  ))}
              </div>

              {/* Promise */}
              <div className="mt-12 border-t border-white/10 pt-8">
                <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-amber-300">
                  Our Promise
                </p>

                <p className="mt-5 max-w-xl text-2xl font-medium leading-[1.15] tracking-[-0.035em] text-white sm:text-3xl lg:text-4xl">
                  {aboutData.promise}
                </p>
              </div>
            </div>
          </div>

          {/* =================================================
              PANEL FOOTER
          ================================================== */}

          <div className="border-t border-white/10 px-7 py-5 sm:px-10 lg:px-14">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <span className="text-[9px] font-medium uppercase tracking-[0.28em] text-white/35 sm:text-[10px]">
                Pasupati Infrastructure
              </span>

              <div className="flex flex-wrap items-center gap-3">
                <span className="text-[9px] uppercase tracking-[0.2em] text-white/30">
                  Trust
                </span>

                <span className="text-amber-300/40">•</span>

                <span className="text-[9px] uppercase tracking-[0.2em] text-white/30">
                  Quality
                </span>

                <span className="text-amber-300/40">•</span>

                <span className="text-[9px] uppercase tracking-[0.2em] text-white/30">
                  Innovation
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* =========================================================
          ANGULAR PASUPATI TRANSITION
      ========================================================== */}

      <div
        aria-hidden="true"
        className="relative h-14 overflow-hidden bg-[#07111f]"
      >
        <div className="absolute inset-x-0 bottom-[-1px] h-16 bg-white [clip-path:polygon(0 58%,11% 28%,23% 68%,37% 25%,51% 60%,66% 30%,82% 55%,100% 12%,100% 100%,0 100%)]" />
      </div>
    </section>
  );
}