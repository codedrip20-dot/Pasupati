import { aboutData } from "@/src/data/about";

export default function AboutExpertise() {
  return (
    <section
      aria-labelledby="about-expertise-title"
      className="relative isolate overflow-hidden bg-[#07111f]"
    >
      {/* =========================================================
          BACKGROUND IMAGE
      ========================================================== */}

      <div
        aria-hidden="true"
        className="absolute inset-0 -z-30 bg-cover bg-center"
        style={{
          backgroundImage: "url('/assets/gallery/img17.jpeg')",
        }}
      />

      {/* Image treatment */}
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-20 bg-[#07111f]/75"
      />

      <div
        aria-hidden="true"
        className="absolute inset-0 -z-20 bg-gradient-to-r from-[#07111f]/98 via-[#07111f]/88 to-[#07111f]/60"
      />

      <div
        aria-hidden="true"
        className="absolute inset-0 -z-20 bg-gradient-to-b from-[#07111f]/95 via-transparent to-[#07111f]"
      />

      {/* =========================================================
          ATMOSPHERIC GLOW
      ========================================================== */}

      <div
        aria-hidden="true"
        className="absolute -left-40 top-1/3 -z-10 h-[500px] w-[500px] rounded-full bg-blue-500/[0.07] blur-[130px]"
      />

      <div
        aria-hidden="true"
        className="absolute -right-40 bottom-1/4 -z-10 h-[450px] w-[450px] rounded-full bg-amber-300/[0.045] blur-[130px]"
      />

      {/* =========================================================
          ARCHITECTURAL GRID
      ========================================================== */}

      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 opacity-[0.045]"
      >
        <div className="mx-auto h-full max-w-7xl border-x border-white/50" />

        <div className="absolute inset-y-0 left-1/4 hidden w-px bg-white/30 lg:block" />

        <div className="absolute inset-y-0 left-1/2 hidden w-px bg-white/30 lg:block" />

        <div className="absolute inset-y-0 left-3/4 hidden w-px bg-white/30 lg:block" />

        <div className="absolute left-0 right-0 top-1/2 h-px bg-white/20" />
      </div>

      {/* Top gold line */}
      <div
        aria-hidden="true"
        className="absolute left-0 top-0 h-px w-1/3 bg-gradient-to-r from-amber-300 via-amber-300/50 to-transparent"
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
              Our Expertise
            </span>
          </div>

          <div className="mt-8 grid gap-10 lg:grid-cols-12 lg:items-end">
            {/* Main heading */}
            <div className="lg:col-span-8">
              <h2
                id="about-expertise-title"
                className="max-w-5xl text-[clamp(3rem,7vw,7rem)] font-semibold leading-[0.86] tracking-[-0.065em] text-white"
              >
                What we
                <br />
                <span className="text-white/40">know.</span>{" "}
                <span className="text-amber-300">What we build.</span>
              </h2>
            </div>

            {/* Supporting copy */}
            <div className="lg:col-span-4 lg:pb-2">
              <div className="border-l border-amber-300/40 pl-5 sm:pl-6">
                <p className="max-w-sm text-sm leading-7 text-white/65 sm:text-base sm:leading-8">
                  Our capabilities span the built environment, combining
                  experience, craftsmanship, engineering, and a commitment to
                  lasting quality.
                </p>
              </div>
            </div>
          </div>
        </header>

        {/* =====================================================
            EXPERTISE PANELS
        ====================================================== */}

        <div className="mt-16 sm:mt-20 lg:mt-24">
          <div className="mb-5 flex items-end justify-between">
            <div>
              <p className="text-[9px] font-semibold uppercase tracking-[0.3em] text-white/35">
                Areas of expertise
              </p>
            </div>

            <p className="text-[9px] uppercase tracking-[0.28em] text-white/25">
              {String(aboutData.expertise.length).padStart(2, "0")} Areas
            </p>
          </div>

          <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-[#07111f]/60 shadow-2xl backdrop-blur-xl">
            {aboutData.expertise.map((expertise, index) => {
              const number = String(index + 1).padStart(2, "0");

              return (
                <article
                  key={`${expertise}-${index}`}
                  className="group relative overflow-hidden border-b border-white/10 last:border-b-0"
                >
                  {/* Hover atmosphere */}
                  <div
                    aria-hidden="true"
                    className="absolute inset-0 bg-gradient-to-r from-amber-300/[0.07] via-blue-400/[0.025] to-transparent opacity-0 transition-opacity duration-700 group-hover:opacity-100"
                  />

                  {/* Left active indicator */}
                  <div
                    aria-hidden="true"
                    className="absolute inset-y-0 left-0 w-[2px] origin-bottom scale-y-0 bg-amber-300 transition-transform duration-500 group-hover:scale-y-100"
                  />

                  {/* Large background number */}
                  <span
                    aria-hidden="true"
                    className="pointer-events-none absolute right-5 top-1/2 -translate-y-1/2 select-none text-[110px] font-semibold leading-none tracking-[-0.09em] text-white/[0.025] transition-all duration-700 group-hover:text-amber-300/[0.055] sm:right-8 sm:text-[150px] lg:text-[190px]"
                  >
                    {number}
                  </span>

                  <div className="relative grid min-h-[150px] items-center gap-6 px-6 py-8 sm:grid-cols-[110px_1fr_auto] sm:px-8 sm:py-10 lg:min-h-[175px] lg:px-10">
                    {/* Number */}
                    <div className="flex items-center gap-4 sm:block">
                      <span className="text-[11px] font-semibold tracking-[0.3em] text-amber-300">
                        {number}
                      </span>

                      <span
                        aria-hidden="true"
                        className="h-px w-8 bg-white/15 transition-all duration-500 group-hover:w-14 group-hover:bg-amber-300/60 sm:mt-5 sm:block"
                      />
                    </div>

                    {/* Title */}
                    <div className="relative">
                      <h3 className="text-2xl font-medium tracking-[-0.035em] text-white transition-transform duration-500 group-hover:translate-x-1 sm:text-3xl lg:text-[2.65rem]">
                        {expertise}
                      </h3>

                      <p className="mt-2 text-[9px] font-medium uppercase tracking-[0.24em] text-white/25 transition-colors duration-500 group-hover:text-white/40">
                        Pasupati Infrastructure
                      </p>
                    </div>

                    {/* Visual marker */}
                    <div className="hidden sm:block">
                      <div className="flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-white/[0.02] text-white/30 transition-all duration-500 group-hover:border-amber-300/40 group-hover:bg-amber-300/10 group-hover:text-amber-300">
                        <svg
                          aria-hidden="true"
                          viewBox="0 0 16 16"
                          fill="none"
                          className="h-4 w-4 transition-transform duration-500 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                        >
                          <path
                            d="M4 12 12 4M5.5 4H12v6.5"
                            stroke="currentColor"
                            strokeWidth="1.25"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </div>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>

        {/* =====================================================
            CAPABILITY STATEMENT
        ====================================================== */}

        <div className="mt-16 border-t border-white/10 pt-10 sm:mt-20 lg:mt-24">
          <div className="grid gap-10 lg:grid-cols-12 lg:items-end">
            <div className="lg:col-span-8">
              <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-amber-300">
                Built through experience
              </p>

              <h3 className="mt-5 max-w-4xl text-3xl font-medium leading-[1.08] tracking-[-0.045em] text-white sm:text-4xl lg:text-5xl">
                From foundations to
                <br />
                <span className="text-white/40">
                  the future we are building.
                </span>
              </h3>
            </div>

            <div className="lg:col-span-4">
              <p className="max-w-sm border-l border-white/15 pl-5 text-sm leading-7 text-white/50">
                We bring together practical knowledge, modern construction
                methods, and attention to detail to create work designed to
                endure.
              </p>
            </div>
          </div>
        </div>

        {/* =====================================================
            BRAND META
        ====================================================== */}

        <div className="mt-14 flex flex-col gap-5 border-t border-white/10 pt-6 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-3">
            <span className="h-2 w-2 rounded-full bg-amber-300 shadow-[0_0_14px_rgba(252,211,77,0.4)]" />

            <span className="text-[9px] font-medium uppercase tracking-[0.28em] text-white/40 sm:text-[10px]">
              Pasupati Infrastructure
            </span>
          </div>

          <div className="flex flex-wrap items-center gap-3 sm:gap-4">
            <span className="text-[9px] uppercase tracking-[0.25em] text-white/25">
              Experience
            </span>

            <span className="text-amber-300/40">/</span>

            <span className="text-[9px] uppercase tracking-[0.25em] text-white/25">
              Craftsmanship
            </span>

            <span className="text-amber-300/40">/</span>

            <span className="text-[9px] uppercase tracking-[0.25em] text-white/25">
              Excellence
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