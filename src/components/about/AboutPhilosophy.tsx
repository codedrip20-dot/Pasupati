import Image from "next/image";

import { aboutData } from "@/src/data/about";

export default function AboutPhilosophy() {
  return (
    <section
      aria-labelledby="about-philosophy-title"
      className="relative isolate overflow-hidden bg-[#07111f]"
      style={{
        contentVisibility: "auto",
        containIntrinsicSize: "1000px",
      }}
    >
      {/* =========================================================
          BACKGROUND — PASUPATI PROJECT
      ========================================================== */}

      <div
        aria-hidden="true"
        className="absolute inset-0 -z-30"
      >
        <Image
          src="/assets/hero.jpeg"
          alt=""
          fill
          loading="lazy"
          sizes="100vw"
          quality={55}
          className="object-cover object-center"
        />
      </div>

      {/* Combined cinematic image treatment */}
      <div
        aria-hidden="true"
        className="
          absolute inset-0 -z-20
          bg-[linear-gradient(to_right,rgba(7,17,31,0.95),rgba(7,17,31,0.78),rgba(7,17,31,0.45)),linear-gradient(to_bottom,rgba(7,17,31,0.85),transparent_30%,rgba(7,17,31,0.75)_72%,rgba(7,17,31,1))]
        "
      />

      {/* =========================================================
          ARCHITECTURAL GRID
      ========================================================== */}

      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 opacity-[0.045]"
      >
        <div className="mx-auto h-full max-w-7xl border-x border-white/40" />

        <div className="absolute inset-y-0 left-1/4 hidden w-px bg-white/30 lg:block" />

        <div className="absolute inset-y-0 left-1/2 hidden w-px bg-white/30 lg:block" />

        <div className="absolute inset-y-0 left-3/4 hidden w-px bg-white/30 lg:block" />

        <div className="absolute left-0 right-0 top-1/2 h-px bg-white/20" />
      </div>

      {/* Gold architectural line */}
      <div
        aria-hidden="true"
        className="absolute left-0 top-0 h-px w-40 bg-gradient-to-r from-amber-300 to-transparent sm:w-64"
      />

      {/* =========================================================
          CONTENT
      ========================================================== */}

      <div className="relative mx-auto max-w-7xl px-6 py-24 sm:px-8 sm:py-28 lg:px-12 lg:py-36">
        {/* =====================================================
            HEADER
        ====================================================== */}

        <header className="max-w-4xl">
          <div className="flex items-center gap-4">
            <span
              aria-hidden="true"
              className="h-px w-10 bg-amber-300 sm:w-14"
            />

            <span className="text-[10px] font-semibold uppercase tracking-[0.32em] text-amber-300 sm:text-xs">
              {aboutData.philosophy.eyebrow}
            </span>
          </div>

          <h2
            id="about-philosophy-title"
            className="mt-7 max-w-4xl text-4xl font-semibold leading-[0.95] tracking-[-0.05em] text-white sm:text-5xl lg:text-7xl"
          >
            {aboutData.philosophy.title}
          </h2>
        </header>

        {/* =====================================================
            PHILOSOPHY CONTENT
        ====================================================== */}

        <div className="mt-16 grid gap-12 lg:grid-cols-12 lg:gap-16">
          {/* Intro */}
          <div className="lg:col-span-5">
            <div className="border-l border-amber-300/60 pl-6 sm:pl-8">
              <p className="text-base leading-8 text-white/80 sm:text-lg sm:leading-9">
                {aboutData.philosophy.description}
              </p>
            </div>
          </div>

          {/* Architectural divider */}
          <div className="hidden lg:col-span-1 lg:flex lg:justify-center">
            <span
              aria-hidden="true"
              className="h-full w-px bg-gradient-to-b from-transparent via-white/25 to-transparent"
            />
          </div>

          {/* Philosophy statement */}
          <div className="lg:col-span-6">
            <div className="relative overflow-hidden rounded-[2rem] border border-white/15 bg-white/[0.075] p-7 shadow-2xl backdrop-blur-[2px] sm:p-9 sm:backdrop-blur-xl lg:p-11">
              {/* Ambient gold glow */}
              <div
                aria-hidden="true"
                className="
                  pointer-events-none
                  absolute
                  -right-24
                  -top-24
                  h-64
                  w-64
                  rounded-full
                  bg-amber-300/[0.08]
                  blur-[90px]
                  sm:blur-3xl
                "
              />

              {/* Decorative quotation mark */}
              <div
                aria-hidden="true"
                className="pointer-events-none absolute right-7 top-3 select-none text-[110px] font-serif leading-none text-white/[0.045] sm:right-10"
              >
                “
              </div>

              <div className="relative">
                <div className="flex items-center gap-3">
                  <span
                    aria-hidden="true"
                    className="h-1.5 w-1.5 rounded-full bg-amber-300"
                  />

                  <span className="text-[10px] font-semibold uppercase tracking-[0.3em] text-amber-300">
                    Philosophy Statement
                  </span>
                </div>

                <blockquote className="mt-8 max-w-2xl text-2xl font-medium leading-[1.2] tracking-[-0.035em] text-white sm:text-3xl lg:text-4xl">
                  {aboutData.philosophy.statement}
                </blockquote>

                <div className="mt-10 flex items-center gap-4">
                  <span
                    aria-hidden="true"
                    className="h-px w-12 bg-amber-300/70"
                  />

                  <span className="text-[9px] font-medium uppercase tracking-[0.28em] text-white/40">
                    Pasupati Infrastructure
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* =====================================================
            PHILOSOPHY PRINCIPLES
        ====================================================== */}

        <div className="mt-16 grid border-y border-white/10 sm:grid-cols-3">
          <div className="border-b border-white/10 py-6 sm:border-b-0 sm:border-r sm:px-8 sm:py-7 sm:first:pl-0">
            <span className="text-[9px] font-semibold uppercase tracking-[0.28em] text-amber-300">
              01
            </span>

            <p className="mt-3 text-sm font-medium uppercase tracking-[0.12em] text-white/75">
              Heritage
            </p>
          </div>

          <div className="border-b border-white/10 py-6 sm:border-b-0 sm:border-r sm:px-8 sm:py-7">
            <span className="text-[9px] font-semibold uppercase tracking-[0.28em] text-amber-300">
              02
            </span>

            <p className="mt-3 text-sm font-medium uppercase tracking-[0.12em] text-white/75">
              Purpose
            </p>
          </div>

          <div className="py-6 sm:px-8 sm:py-7 sm:last:pr-0">
            <span className="text-[9px] font-semibold uppercase tracking-[0.28em] text-amber-300">
              03
            </span>

            <p className="mt-3 text-sm font-medium uppercase tracking-[0.12em] text-white/75">
              Future
            </p>
          </div>
        </div>

        {/* =====================================================
            BOTTOM BRAND META
        ========================================================== */}

        <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-3">
            <span
              aria-hidden="true"
              className="h-2 w-2 rounded-full bg-amber-300"
            />

            <span className="text-[9px] font-medium uppercase tracking-[0.28em] text-white/40 sm:text-[10px]">
              Heritage · Progress · Trust
            </span>
          </div>

          <span className="text-[9px] uppercase tracking-[0.28em] text-white/30 sm:text-[10px]">
            Building with purpose
          </span>
        </div>
      </div>

      {/* =========================================================
          ANGULAR BRAND TRANSITION
      ========================================================== */}

      <div
        aria-hidden="true"
        className="relative h-8 overflow-hidden bg-[#07111f]"
      >
        <div className="absolute inset-x-0 bottom-[-1px] h-10 bg-white [clip-path:polygon(0_65%,12%_35%,24%_72%,38%_30%,52%_62%,68%_25%,82%_58%,100%_15%,100%_100%,0_100%)]" />
      </div>
    </section>
  );
}