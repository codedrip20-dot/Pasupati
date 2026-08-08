import { aboutData } from "@/src/data/about";

export default function AboutClosing() {
  return (
    <section
      aria-labelledby="about-closing-title"
      className="relative isolate overflow-hidden bg-[#07111f]"
    >
      {/* =========================================================
          BACKGROUND
      ========================================================== */}

      <div
        aria-hidden="true"
        className="absolute inset-0 -z-30 bg-cover bg-center"
        style={{
          backgroundImage: "url('/assets/gallery/img2.jpeg')",
        }}
      />

      {/* Cinematic image treatment */}
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-20 bg-[#07111f]/65"
      />

      {/* Strong left-side readability */}
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-20 bg-gradient-to-r from-[#07111f]/98 via-[#07111f]/80 to-[#07111f]/45"
      />

      {/* Bottom depth */}
      <div
        aria-hidden="true"
        className="absolute inset-x-0 bottom-0 -z-20 h-80 bg-gradient-to-t from-[#07111f] via-[#07111f]/80 to-transparent"
      />

      {/* Top transition */}
      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-0 -z-20 h-44 bg-gradient-to-b from-[#07111f] to-transparent"
      />

      {/* =========================================================
          ATMOSPHERIC GLOW
      ========================================================== */}

      <div
        aria-hidden="true"
        className="absolute -right-40 top-1/4 -z-10 h-[420px] w-[420px] rounded-full bg-amber-300/[0.045] blur-[130px]"
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

      {/* Gold top accent */}
      <div
        aria-hidden="true"
        className="absolute left-0 top-0 h-px w-48 bg-gradient-to-r from-amber-300 to-transparent sm:w-72"
      />

      {/* =========================================================
          CONTENT
      ========================================================== */}

      <div className="relative mx-auto max-w-7xl px-6 py-28 sm:px-8 sm:py-32 lg:px-12 lg:py-40">
        {/* =====================================================
            HEADER
        ====================================================== */}

        <header className="max-w-6xl">
          <div className="flex items-center gap-4">
            <span
              aria-hidden="true"
              className="h-px w-10 bg-amber-300 sm:w-14"
            />

            <span className="text-[10px] font-semibold uppercase tracking-[0.32em] text-amber-300 sm:text-xs">
              Our Promise
            </span>
          </div>

          <h2
            id="about-closing-title"
            className="mt-9 max-w-6xl text-[clamp(3.2rem,8vw,8rem)] font-semibold leading-[0.84] tracking-[-0.07em] text-white"
          >
            Building trust.
            <br />

            <span className="text-white/40">
              Preserving heritage.
            </span>
            <br />

            <span className="text-amber-300">
              Creating futures.
            </span>
          </h2>
        </header>

        {/* =====================================================
            PROMISE CONTENT
        ====================================================== */}

        <div className="mt-14 grid gap-10 lg:mt-20 lg:grid-cols-12 lg:items-end">
          {/* Main statement */}
          <div className="lg:col-span-7">
            <div className="max-w-2xl">
              <span className="text-[9px] font-semibold uppercase tracking-[0.3em] text-white/35">
                What we stand for
              </span>

              <p className="mt-5 text-lg leading-8 text-white/70 sm:text-xl sm:leading-9">
                {aboutData.promise}
              </p>
            </div>
          </div>

          {/* Supporting statement */}
          <div className="lg:col-span-5 lg:flex lg:justify-end">
            <div className="max-w-sm border-l border-amber-300/50 pl-6">
              <p className="text-sm leading-7 text-white/50">
                We build with purpose, respect the foundations that came
                before us, and create spaces designed to serve generations
                ahead.
              </p>
            </div>
          </div>
        </div>

        {/* =====================================================
            BRAND PHILOSOPHY STRIP
        ====================================================== */}

        <div className="mt-20 border-y border-white/10 py-7 sm:mt-24 sm:py-8">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            {/* Brand */}
            <div className="flex items-center gap-3">
              <span className="h-2 w-2 rounded-full bg-amber-300 shadow-[0_0_14px_rgba(252,211,77,0.4)]" />

              <span className="text-[9px] font-semibold uppercase tracking-[0.3em] text-white/45 sm:text-[10px]">
                Pasupati Infrastructure
              </span>
            </div>

            {/* Philosophy */}
            <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
              <span className="text-[9px] uppercase tracking-[0.25em] text-white/30 sm:text-[10px]">
                Trust
              </span>

              <span className="text-amber-300/40">/</span>

              <span className="text-[9px] uppercase tracking-[0.25em] text-white/30 sm:text-[10px]">
                Heritage
              </span>

              <span className="text-amber-300/40">/</span>

              <span className="text-[9px] uppercase tracking-[0.25em] text-white/30 sm:text-[10px]">
                Innovation
              </span>

              <span className="text-amber-300/40">/</span>

              <span className="text-[9px] uppercase tracking-[0.25em] text-white/30 sm:text-[10px]">
                Growth
              </span>
            </div>
          </div>
        </div>

        {/* =====================================================
            FINAL SIGNATURE
        ====================================================== */}

        <div className="mt-16 flex flex-col gap-8 sm:mt-20 lg:flex-row lg:items-end lg:justify-between">
          {/* Closing line */}
          <div>
            <p className="max-w-3xl text-2xl font-medium leading-[1.15] tracking-[-0.035em] text-white/85 sm:text-3xl lg:text-4xl">
              Creating landmarks that stand strong,
              <br className="hidden sm:block" />
              <span className="text-white/40">
                today and for generations to come.
              </span>
            </p>
          </div>

          {/* Signature metadata */}
          <div className="flex shrink-0 items-center gap-4">
            <span className="text-[9px] uppercase tracking-[0.3em] text-white/25">
              Pasupati
            </span>

            <span className="h-px w-12 bg-amber-300/50" />

            <span className="text-[9px] uppercase tracking-[0.3em] text-white/25">
              2026
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