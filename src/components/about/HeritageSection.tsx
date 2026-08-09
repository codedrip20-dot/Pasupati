import Image from "next/image";

export default function HeritageSection() {
  return (
    <section
      aria-labelledby="heritage-section-title"
      className="relative isolate overflow-hidden bg-[#07111f]"
      style={{
        contentVisibility: "auto",
        containIntrinsicSize: "1200px",
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
          src="/assets/gallery/img21.jpeg"
          alt=""
          fill
          loading="lazy"
          sizes="100vw"
          quality={50}
          className="object-cover object-center"
        />
      </div>

      {/* Combined cinematic treatment */}
      <div
        aria-hidden="true"
        className="
          absolute inset-0 -z-20
          bg-[linear-gradient(to_right,rgba(7,17,31,0.98),rgba(7,17,31,0.80),rgba(7,17,31,0.35)),linear-gradient(to_bottom,rgba(7,17,31,1),transparent_30%,rgba(7,17,31,0.85)_76%,rgba(7,17,31,1))]
        "
      />

      {/* =========================================================
          ATMOSPHERIC LIGHT
      ========================================================== */}

      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          -right-40
          top-1/4
          -z-10
          hidden
          h-[500px]
          w-[500px]
          rounded-full
          bg-amber-300/[0.06]
          blur-[140px]
          sm:block
        "
      />

      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          -left-40
          bottom-1/4
          -z-10
          hidden
          h-[450px]
          w-[450px]
          rounded-full
          bg-blue-500/[0.06]
          blur-[140px]
          sm:block
        "
      />

      {/* =========================================================
          ARCHITECTURAL GRID
      ========================================================== */}

      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 opacity-[0.04]"
      >
        <div className="mx-auto h-full max-w-7xl border-x border-white/40" />

        <div className="absolute inset-y-0 left-1/4 hidden w-px bg-white/30 lg:block" />

        <div className="absolute inset-y-0 left-1/2 hidden w-px bg-white/30 lg:block" />

        <div className="absolute inset-y-0 left-3/4 hidden w-px bg-white/30 lg:block" />
      </div>

      {/* Gold top accent */}
      <div
        aria-hidden="true"
        className="absolute left-0 top-0 h-px w-1/3 bg-gradient-to-r from-amber-300 via-amber-300/50 to-transparent"
      />

      {/* =========================================================
          CONTENT
      ========================================================== */}

      <div className="relative mx-auto max-w-7xl px-6 py-24 sm:px-8 sm:py-28 lg:px-12 lg:py-36">
        {/* =====================================================
            SECTION HEADER
        ====================================================== */}

        <header className="max-w-4xl">
          <div className="flex items-center gap-4">
            <span
              aria-hidden="true"
              className="h-px w-10 bg-amber-300 sm:w-14"
            />

            <span className="text-[10px] font-semibold uppercase tracking-[0.32em] text-amber-300 sm:text-xs">
              Heritage
            </span>
          </div>

          <h2
            id="heritage-section-title"
            className="mt-7 max-w-4xl text-[clamp(3rem,7vw,7rem)] font-semibold leading-[0.86] tracking-[-0.065em] text-white"
          >
            Rooted in
            <br />
            <span className="text-white/40">where we come from.</span>
          </h2>
        </header>

        {/* =====================================================
            HERITAGE FEATURE
        ====================================================== */}

        <div className="mt-16 grid gap-6 lg:mt-24 lg:grid-cols-12 lg:items-stretch">
          {/* ===================================================
              VISUAL PANEL
          ==================================================== */}

          <div className="relative min-h-[380px] overflow-hidden rounded-[2rem] border border-white/10 lg:col-span-7 lg:min-h-[560px]">
            {/* Image */}
            <div
              aria-hidden="true"
              className="absolute inset-0"
            >
              <Image
                src="/assets/gallery/img21.jpeg"
                alt=""
                fill
                loading="lazy"
                sizes="(min-width: 1024px) 58vw, 100vw"
                quality={55}
                className="
                  object-cover
                  object-center
                  transition-transform
                  duration-[1400ms]
                  hover:scale-[1.025]
                "
              />
            </div>

            {/* Image overlay */}
            <div
              aria-hidden="true"
              className="absolute inset-0 bg-gradient-to-t from-[#07111f]/95 via-[#07111f]/20 to-transparent"
            />

            <div
              aria-hidden="true"
              className="absolute inset-0 bg-gradient-to-r from-[#07111f]/40 via-transparent to-transparent"
            />

            {/* Image label */}
            <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between sm:bottom-8 sm:left-8 sm:right-8">
              <div>
                <p className="text-[9px] font-semibold uppercase tracking-[0.3em] text-amber-300">
                  Our foundation
                </p>

                <p className="mt-2 max-w-xs text-sm leading-6 text-white/65">
                  Respecting the places, people, and architectural traditions
                  that shape the region.
                </p>
              </div>

              <div
                aria-hidden="true"
                className="
                  hidden
                  h-12
                  w-12
                  items-center
                  justify-center
                  rounded-full
                  border
                  border-white/15
                  bg-white/[0.05]
                  sm:flex
                  sm:backdrop-blur-md
                "
              >
                <span className="text-[10px] font-medium tracking-[0.15em] text-white/50">
                  01
                </span>
              </div>
            </div>
          </div>

          {/* ===================================================
              TEXT PANEL
          ==================================================== */}

          <div
            className="
              relative
              overflow-hidden
              rounded-[2rem]
              border
              border-white/10
              bg-[#07111f]/75
              p-7
              backdrop-blur-[1px]
              sm:p-9
              sm:backdrop-blur-md
              lg:col-span-5
              lg:p-10
            "
          >
            {/* Decorative glow — desktop/tablet only */}
            <div
              aria-hidden="true"
              className="
                pointer-events-none
                absolute
                -right-24
                -top-24
                hidden
                h-64
                w-64
                rounded-full
                bg-amber-300/[0.06]
                blur-[90px]
                sm:block
              "
            />

            {/* Decorative corner */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute right-0 top-0 h-20 w-20 overflow-hidden"
            >
              <div className="absolute right-[-30px] top-[-30px] h-20 w-20 rounded-full border border-amber-300/15" />
            </div>

            <div className="relative flex h-full flex-col justify-between">
              <div>
                <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-amber-300">
                  Heritage &amp; responsibility
                </p>

                <div className="mt-7 space-y-6">
                  <p className="text-lg leading-8 text-white/80 sm:text-xl sm:leading-9">
                    Our work is shaped by a deep respect for the places where
                    we build and the communities we build for.
                  </p>

                  <p className="text-sm leading-7 text-white/50 sm:text-base sm:leading-8">
                    Inspired by Himalayan character and local identity, we
                    believe progress should never mean losing sight of where
                    we come from.
                  </p>

                  <p className="text-sm leading-7 text-white/50 sm:text-base sm:leading-8">
                    Every structure is an opportunity to preserve what matters,
                    introduce thoughtful innovation, and create something
                    meaningful for generations to come.
                  </p>
                </div>
              </div>

              {/* Philosophy marker */}
              <div className="mt-12 border-t border-white/10 pt-7">
                <p className="text-[9px] font-semibold uppercase tracking-[0.28em] text-white/30">
                  Our approach
                </p>

                <div className="mt-5 flex items-center gap-4">
                  <span
                    aria-hidden="true"
                    className="h-px w-10 bg-amber-300"
                  />

                  <span className="text-sm font-medium tracking-tight text-white">
                    Preserve. Build. Evolve.
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* =====================================================
            HERITAGE STATEMENT
        ====================================================== */}

        <div className="mt-16 border-t border-white/10 pt-10 sm:mt-20 lg:mt-24">
          <div className="grid gap-10 lg:grid-cols-12 lg:items-end">
            <div className="lg:col-span-8">
              <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-amber-300">
                Looking forward
              </p>

              <h3 className="mt-5 max-w-4xl text-3xl font-medium leading-[1.08] tracking-[-0.045em] text-white sm:text-4xl lg:text-5xl">
                Honour the past.
                <br />
                <span className="text-white/40">
                  Build for generations to come.
                </span>
              </h3>
            </div>

            <div className="lg:col-span-4">
              <div className="border-l border-amber-300/40 pl-5">
                <p className="text-sm leading-7 text-white/50">
                  Heritage gives us perspective. Innovation gives us
                  direction. Together, they shape the way we create lasting
                  places and infrastructure.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* =====================================================
            BRAND META
        ====================================================== */}

        <div className="mt-14 flex flex-col gap-5 border-t border-white/10 pt-6 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-3">
            <span
              aria-hidden="true"
              className="h-2 w-2 rounded-full bg-amber-300 shadow-[0_0_14px_rgba(252,211,77,0.4)]"
            />

            <span className="text-[9px] font-medium uppercase tracking-[0.28em] text-white/40 sm:text-[10px]">
              Pasupati Infrastructure
            </span>
          </div>

          <div className="flex flex-wrap items-center gap-3 sm:gap-4">
            <span className="text-[9px] uppercase tracking-[0.25em] text-white/25">
              Heritage
            </span>

            <span className="text-amber-300/40">/</span>

            <span className="text-[9px] uppercase tracking-[0.25em] text-white/25">
              Responsibility
            </span>

            <span className="text-amber-300/40">/</span>

            <span className="text-[9px] uppercase tracking-[0.25em] text-white/25">
              Future
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