import { aboutData } from "@/src/data/about";

export default function CoreValues() {
  return (
    <section
      aria-labelledby="core-values-title"
      className="relative isolate overflow-hidden bg-[#07111f]"
    >
      {/* =========================================================
          BACKGROUND
      ========================================================== */}

      <div
        aria-hidden="true"
        className="absolute inset-0 -z-30 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/assets/hero2.jpeg')",
        }}
      />

      {/* Deep navy cinematic treatment */}
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-20 bg-[#07111f]/75"
      />

      {/* Left-to-right readability */}
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-20 bg-gradient-to-r from-[#07111f]/98 via-[#07111f]/88 to-[#07111f]/55"
      />

      {/* Top fade */}
      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-0 -z-20 h-48 bg-gradient-to-b from-[#07111f] to-transparent"
      />

      {/* Bottom fade */}
      <div
        aria-hidden="true"
        className="absolute inset-x-0 bottom-0 -z-20 h-72 bg-gradient-to-t from-[#07111f] via-[#07111f]/85 to-transparent"
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
        className="absolute left-0 top-0 h-px w-48 bg-gradient-to-r from-amber-300 via-amber-300/50 to-transparent sm:w-72"
      />

      {/* =========================================================
          CONTENT
      ========================================================== */}

      <div className="relative mx-auto max-w-7xl px-6 py-24 sm:px-8 sm:py-28 lg:px-12 lg:py-36">
        {/* =====================================================
            HEADER
        ====================================================== */}

        <header>
          <div className="flex items-center gap-4">
            <span
              aria-hidden="true"
              className="h-px w-10 bg-amber-300 sm:w-14"
            />

            <span className="text-[10px] font-semibold uppercase tracking-[0.32em] text-amber-300 sm:text-xs">
              Core Values
            </span>
          </div>

          <div className="mt-8 grid gap-10 lg:grid-cols-12 lg:items-end">
            {/* Main heading */}
            <div className="lg:col-span-8">
              <h2
                id="core-values-title"
                className="max-w-4xl text-[clamp(2.8rem,6vw,6.5rem)] font-semibold leading-[0.9] tracking-[-0.06em] text-white"
              >
                The principles
                <br />
                <span className="text-white/40">behind everything</span>
                <br />
                <span className="text-amber-300">we build.</span>
              </h2>
            </div>

            {/* Intro */}
            <div className="lg:col-span-4 lg:pb-2">
              <div className="border-l border-white/15 pl-5 sm:pl-6">
                <p className="max-w-sm text-sm leading-7 text-white/65 sm:text-base sm:leading-8">
                  Every project begins with a commitment to doing things the
                  right way. Our values guide how we build, how we work, and
                  how we create lasting relationships.
                </p>
              </div>
            </div>
          </div>
        </header>

        {/* =====================================================
            VALUES
        ====================================================== */}

        <div className="mt-16 sm:mt-20">
          {/* Section label */}
          <div className="mb-5 flex items-center justify-between">
            <span className="text-[9px] font-semibold uppercase tracking-[0.3em] text-white/35">
              What we stand for
            </span>

            <span className="text-[9px] uppercase tracking-[0.25em] text-white/25">
              {String(aboutData.values.length).padStart(2, "0")} Principles
            </span>
          </div>

          {/* Values grid */}
          <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-[#07111f]/45 backdrop-blur-md">
            {aboutData.values.map((value, index) => {
              const number = String(index + 1).padStart(2, "0");

              return (
                <article
                  key={value.title}
                  className="group relative overflow-hidden border-b border-white/10 last:border-b-0"
                >
                  {/* Hover atmosphere */}
                  <div
                    aria-hidden="true"
                    className="absolute inset-0 bg-gradient-to-r from-amber-300/[0.045] via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                  />

                  {/* Moving gold line */}
                  <div
                    aria-hidden="true"
                    className="absolute bottom-0 left-0 top-0 w-px bg-amber-300 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                  />

                  <div className="relative grid gap-6 px-6 py-7 sm:grid-cols-[90px_1fr_auto] sm:items-center sm:px-8 sm:py-9 lg:px-10">
                    {/* Number */}
                    <div className="flex items-center gap-4 sm:block">
                      <span className="text-[11px] font-semibold tracking-[0.25em] text-amber-300">
                        {number}
                      </span>

                      <span className="h-px w-8 bg-white/15 sm:mt-4 sm:block" />
                    </div>

                    {/* Value title + description */}
                    <div>
                      <h3 className="text-xl font-medium tracking-[-0.025em] text-white transition-transform duration-500 group-hover:translate-x-1 sm:text-2xl lg:text-[1.65rem]">
                        {value.title}
                      </h3>

                      <p className="mt-2 max-w-2xl text-sm leading-6 text-white/45 transition-colors duration-500 group-hover:text-white/65 sm:mt-3 sm:text-[15px] sm:leading-7">
                        {value.description}
                      </p>
                    </div>

                    {/* Right marker */}
                    <div className="hidden sm:flex sm:items-center sm:justify-end">
                      <span className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 text-white/25 transition-all duration-500 group-hover:border-amber-300/40 group-hover:bg-amber-300/10 group-hover:text-amber-300">
                        <span className="h-1.5 w-1.5 rounded-full bg-current" />
                      </span>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>

        {/* =====================================================
            BRAND STATEMENT
        ====================================================== */}

        <div className="mt-16 border-t border-white/10 pt-10 sm:mt-20">
          <div className="grid gap-10 lg:grid-cols-12 lg:items-end">
            {/* Statement */}
            <div className="lg:col-span-8">
              <span className="text-[10px] font-semibold uppercase tracking-[0.3em] text-amber-300">
                Our standard
              </span>

              <p className="mt-5 max-w-4xl text-3xl font-medium leading-[1.08] tracking-[-0.045em] text-white sm:text-4xl lg:text-5xl">
                Trust in every relationship.
                <br />
                <span className="text-white/40">
                  Excellence in every detail.
                </span>
              </p>
            </div>

            {/* Supporting copy */}
            <div className="lg:col-span-4">
              <p className="max-w-sm border-l border-amber-300/50 pl-5 text-sm leading-7 text-white/50">
                We believe lasting infrastructure is built not only with
                concrete and steel, but with integrity, responsibility, and a
                commitment to the people we serve.
              </p>
            </div>
          </div>
        </div>

        {/* =====================================================
            BRAND META
        ====================================================== */}

        <div className="mt-14 flex flex-col gap-5 border-t border-white/10 pt-6 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-3">
            <span className="h-2 w-2 rounded-full bg-amber-300 shadow-[0_0_12px_rgba(252,211,77,0.45)]" />

            <span className="text-[9px] font-medium uppercase tracking-[0.28em] text-white/40 sm:text-[10px]">
              Pasupati Infrastructure
            </span>
          </div>

          <div className="flex flex-wrap items-center gap-3 sm:gap-4">
            <span className="text-[9px] uppercase tracking-[0.25em] text-white/25">
              Trust
            </span>

            <span className="text-amber-300/40">/</span>

            <span className="text-[9px] uppercase tracking-[0.25em] text-white/25">
              Excellence
            </span>

            <span className="text-amber-300/40">/</span>

            <span className="text-[9px] uppercase tracking-[0.25em] text-white/25">
              Responsibility
            </span>
          </div>
        </div>
      </div>

      {/* =========================================================
          ANGULAR BRAND TRANSITION
      ========================================================== */}

      <div
        aria-hidden="true"
        className="relative h-10 overflow-hidden bg-[#07111f]"
      >
        <div className="absolute inset-x-0 bottom-[-1px] h-12 bg-white [clip-path:polygon(0_65%,12%_35%,24%_72%,38%_30%,52%_62%,68%_25%,82%_58%,100%_15%,100%_100%,0_100%)]" />
      </div>
    </section>
  );
}