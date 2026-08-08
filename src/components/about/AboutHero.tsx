import { aboutData } from "@/src/data/about";

export default function AboutHero() {
  return (
    <section
      aria-labelledby="about-hero-title"
      className="relative isolate overflow-hidden bg-[#07111f]"
    >
      {/* =========================================================
          BACKGROUND — PASUPATI ENVELOPE
      ========================================================== */}

      <div
        aria-hidden="true"
        className="absolute inset-0 -z-30 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/assets/pasupatienvlope.png')",
        }}
      />

      {/* Soft navy wash */}
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-20 bg-[#07111f]/45"
      />

      {/* Left readability */}
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-20 bg-gradient-to-r from-[#07111f]/95 via-[#07111f]/72 to-[#07111f]/25"
      />

      {/* Top depth */}
      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-0 -z-20 h-52 bg-gradient-to-b from-[#07111f]/75 to-transparent"
      />

      {/* Bottom depth */}
      <div
        aria-hidden="true"
        className="absolute inset-x-0 bottom-0 -z-20 h-64 bg-gradient-to-t from-[#07111f] via-[#07111f]/75 to-transparent"
      />

      {/* =========================================================
          SUBTLE ARCHITECTURAL GRID
      ========================================================== */}

      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 opacity-[0.035]"
      >
        <div className="mx-auto h-full max-w-7xl border-x border-white/50" />

        <div className="absolute inset-y-0 left-1/4 hidden w-px bg-white/40 lg:block" />
        <div className="absolute inset-y-0 left-1/2 hidden w-px bg-white/40 lg:block" />
        <div className="absolute inset-y-0 left-3/4 hidden w-px bg-white/40 lg:block" />

        <div className="absolute left-0 right-0 top-1/2 h-px bg-white/30" />
      </div>

      {/* =========================================================
          BRAND ACCENTS
      ========================================================== */}

      <div
        aria-hidden="true"
        className="absolute left-0 top-0 h-px w-40 bg-amber-300 sm:w-56"
      />

      <div
        aria-hidden="true"
        className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-amber-300/40 via-white/10 to-transparent"
      />

      {/* =========================================================
          MAIN CONTENT
      ========================================================== */}

      <div className="relative mx-auto flex min-h-[680px] max-w-7xl items-center px-6 py-28 sm:min-h-[740px] sm:px-8 lg:min-h-[820px] lg:px-12 lg:py-32">
        <div className="grid w-full items-center gap-16 lg:grid-cols-[minmax(0,1fr)_280px] lg:gap-20">
          {/* =====================================================
              LEFT — PRIMARY MESSAGE
          ====================================================== */}

          <div>
            {/* Eyebrow */}
            <div className="flex items-center gap-4">
              <span
                aria-hidden="true"
                className="h-px w-10 bg-amber-300 sm:w-14"
              />

              <span className="text-[10px] font-semibold uppercase tracking-[0.32em] text-amber-300 sm:text-xs">
                {aboutData.hero.eyebrow}
              </span>
            </div>

            {/* Heading */}
            <div className="mt-8">
              <h1
                id="about-hero-title"
                className="max-w-5xl text-[clamp(3.3rem,8vw,7.5rem)] font-semibold leading-[0.86] tracking-[-0.065em] text-white"
              >
                {aboutData.hero.title}
                <br />

                <span className="text-white/90">
                  {aboutData.hero.titleLineTwo}
                </span>

                <br />

                <span className="text-amber-300">
                  {aboutData.hero.titleLineThree}
                </span>
              </h1>
            </div>

            {/* Description */}
            <p className="mt-9 max-w-2xl text-sm leading-7 text-white/70 sm:text-base sm:leading-8 lg:text-lg">
              {aboutData.hero.description}
            </p>

            {/* Brand statement */}
            <div className="mt-10 flex items-center gap-4">
              <span
                aria-hidden="true"
                className="h-8 w-px bg-amber-300/60"
              />

              <p className="max-w-lg text-xs font-medium uppercase leading-6 tracking-[0.18em] text-white/45 sm:text-sm">
                Building with purpose.
                <br />
                Creating value that lasts.
              </p>
            </div>
          </div>

          {/* =====================================================
              RIGHT — BRAND IDENTITY PANEL
          ====================================================== */}

          <div className="hidden lg:block">
            <div className="relative border-l border-white/15 pl-8">
              {/* Small gold marker */}
              <div
                aria-hidden="true"
                className="absolute -left-px top-0 h-16 w-px bg-amber-300"
              />

              <p className="text-[9px] font-semibold uppercase tracking-[0.3em] text-amber-300">
                Pasupati Infrastructure
              </p>

              <div className="mt-7 space-y-6">
                <div>
                  <p className="text-3xl font-semibold tracking-[-0.04em] text-white">
                    20+
                  </p>

                  <p className="mt-1 text-[10px] uppercase tracking-[0.2em] text-white/40">
                    Years of experience
                  </p>
                </div>

                <div className="h-px w-full bg-white/10" />

                <div>
                  <p className="text-sm leading-6 text-white/65">
                    Residential, commercial, hospitality and infrastructure
                    development shaped by trust, craftsmanship and
                    responsibility.
                  </p>
                </div>
              </div>

              {/* Brand principles */}
              <div className="mt-10 flex flex-wrap gap-x-4 gap-y-2">
                <span className="text-[9px] uppercase tracking-[0.2em] text-white/35">
                  Heritage
                </span>

                <span className="text-amber-300/50">/</span>

                <span className="text-[9px] uppercase tracking-[0.2em] text-white/35">
                  Progress
                </span>

                <span className="text-amber-300/50">/</span>

                <span className="text-[9px] uppercase tracking-[0.2em] text-white/35">
                  Trust
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* =========================================================
          BOTTOM BRAND META
      ========================================================== */}

      <div className="absolute inset-x-0 bottom-0">
        <div className="mx-auto max-w-7xl px-6 pb-6 sm:px-8 lg:px-12 lg:pb-8">
          <div className="flex items-center justify-between border-t border-white/10 pt-4">
            <span className="text-[9px] font-medium uppercase tracking-[0.28em] text-white/30 sm:text-[10px]">
              About Pasupati
            </span>

            <span className="text-[9px] uppercase tracking-[0.28em] text-white/25 sm:text-[10px]">
              Building Trust · Preserving Heritage · Creating Futures
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}