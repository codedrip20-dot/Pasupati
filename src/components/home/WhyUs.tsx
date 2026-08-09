function CornerMarks() {
  return (
    <>
      <span
        aria-hidden="true"
        className="absolute left-5 top-5 h-9 w-9 border-l border-t border-[#D9A441]/60"
      />

      <span
        aria-hidden="true"
        className="absolute bottom-5 right-5 h-9 w-9 border-b border-r border-[#D9A441]/60"
      />
    </>
  );
}

const reasons = [
  {
    number: "01",
    title: "Experience",
    description:
      "Practical experience across cultural, religious, residential and commercial construction projects.",
  },
  {
    number: "02",
    title: "Quality",
    description:
      "Careful attention to materials, workmanship and finishing at every stage of construction.",
  },
  {
    number: "03",
    title: "Responsibility",
    description:
      "A disciplined approach to execution, coordination and commitments made to every project.",
  },
  {
    number: "04",
    title: "Long-Term Vision",
    description:
      "We focus on creating structures that remain useful, meaningful and dependable for years to come.",
  },
];

export default function WhyUs() {
  return (
    <section
      id="why-us"
      className="relative isolate overflow-hidden bg-[#070D18] text-white"
    >
      {/* =========================================================
          BACKGROUND
      ========================================================== */}

      <div className="absolute inset-0 -z-30">
        <img
          src="/assets/gallery/img19.jpeg"
          alt=""
          aria-hidden="true"
          className="h-full w-full object-cover object-center"
        />
      </div>

      {/* Deep navy cinematic overlay */}
      <div className="absolute inset-0 -z-20 bg-[#07111F]/80" />

      {/* Directional lighting */}
      <div className="absolute inset-0 -z-20 bg-gradient-to-r from-[#07111F] via-[#07111F]/90 to-[#07111F]/55" />

      <div className="absolute inset-0 -z-20 bg-gradient-to-t from-[#070D18] via-[#07111F]/30 to-[#07111F]/70" />

      {/* Blueprint grid */}
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 opacity-[0.045]"
        style={{
          backgroundImage: `
            linear-gradient(
              to right,
              rgba(255,255,255,0.5) 1px,
              transparent 1px
            ),
            linear-gradient(
              to bottom,
              rgba(255,255,255,0.5) 1px,
              transparent 1px
            )
          `,
          backgroundSize: "72px 72px",
        }}
      />

      {/* Gold atmospheric glow */}
      <div
        aria-hidden="true"
        className="absolute -right-48 top-1/4 -z-10 h-[34rem] w-[34rem] rounded-full bg-[#D9A441]/10 blur-[130px]"
      />

      {/* =========================================================
          CONTENT
      ========================================================== */}

      <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-24 lg:px-12 lg:py-28">
        {/* =======================================================
            HEADER
        ======================================================== */}

        <div className="grid gap-8 lg:grid-cols-[0.72fr_1.28fr] lg:items-end">
          {/* Label */}
          <div>
            <div className="flex items-center gap-3">
              <span className="h-px w-10 bg-[#D9A441]" />

              <span className="text-[10px] font-semibold uppercase tracking-[0.3em] text-[#D9A441] sm:text-xs">
                Why Pasupati
              </span>
            </div>

            <div className="mt-5 flex items-center gap-3">
              <span className="h-px w-5 bg-white/10" />

              <span className="text-[9px] font-medium uppercase tracking-[0.28em] text-white/25">
                Our Approach
              </span>
            </div>
          </div>

          {/* Heading */}
          <div>
            <h2 className="max-w-4xl text-[2.7rem] font-semibold leading-[0.98] tracking-[-0.045em] sm:text-5xl lg:text-[4.4rem]">
              Because what we build
              <span className="block text-[#D9A441]">
                is meant to last.
              </span>
            </h2>

            <p className="mt-6 max-w-2xl text-sm leading-7 text-white/50 sm:text-base sm:leading-8">
              Construction is more than putting a structure together. It
              requires experience, responsibility and an understanding of the
              people and purpose behind every project.
            </p>
          </div>
        </div>

        {/* =======================================================
            MAIN PANEL
        ======================================================== */}

        <div className="relative mt-12 overflow-hidden border border-white/10 bg-[#07111F]/50 shadow-[0_30px_100px_rgba(0,0,0,0.25)] backdrop-blur-md">
          <CornerMarks />

          <div className="grid lg:grid-cols-[0.78fr_1.22fr]">
            {/* ===================================================
                LEFT — FOUNDATION STATEMENT
            ==================================================== */}

            <div className="relative flex min-h-[390px] flex-col justify-between overflow-hidden border-b border-white/10 px-7 py-10 sm:px-10 sm:py-12 lg:border-b-0 lg:border-r lg:px-12 lg:py-14">
              {/* Giant background number */}
              <span
                aria-hidden="true"
                className="pointer-events-none absolute -right-2 -top-4 select-none text-[11rem] font-semibold leading-none tracking-[-0.1em] text-white/[0.025] sm:text-[14rem]"
              >
                04
              </span>

              {/* Architectural line */}
              <span
                aria-hidden="true"
                className="absolute bottom-10 left-0 top-10 hidden w-px bg-gradient-to-b from-transparent via-[#D9A441]/35 to-transparent lg:block"
              />

              {/* Label */}
              <div className="relative">
                <div className="flex items-center gap-3">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#D9A441] shadow-[0_0_12px_rgba(217,164,65,0.7)]" />

                  <span className="text-[9px] font-semibold uppercase tracking-[0.28em] text-white/40">
                    Our Foundation
                  </span>
                </div>

                <div className="mt-6 h-px w-16 bg-[#D9A441]/50" />
              </div>

              {/* Statement */}
              <div className="relative mt-14 lg:mt-0">
                <p className="max-w-md text-[1.7rem] font-medium leading-[1.15] tracking-[-0.035em] text-white/90 sm:text-3xl">
                  Built with purpose.
                  <br />
                  Delivered with
                  <span className="text-[#D9A441]">
                    {" "}
                    responsibility.
                  </span>
                </p>

                <p className="mt-6 max-w-md text-sm leading-7 text-white/40">
                  Every project carries a responsibility to its people,
                  surroundings and future use.
                </p>
              </div>

              {/* Bottom architectural detail */}
              <div className="relative mt-10 flex items-center gap-3">
                <span className="h-px w-8 bg-white/15" />

                <span className="text-[8px] uppercase tracking-[0.25em] text-white/20">
                  Pasupati Infrastructure
                </span>
              </div>
            </div>

            {/* ===================================================
                RIGHT — REASONS
            ==================================================== */}

            <div className="grid sm:grid-cols-2">
              {reasons.map((reason, index) => (
                <article
                  key={reason.number}
                  className={`group relative flex min-h-[260px] flex-col overflow-hidden px-7 py-8 transition-all duration-500 hover:bg-white/[0.035] sm:px-9 sm:py-10 ${
                    index < 2 ? "border-b border-white/10" : ""
                  } ${
                    index % 2 === 0
                      ? "sm:border-r sm:border-white/10"
                      : ""
                  }`}
                >
                  {/* Top row */}
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-semibold tracking-[0.22em] text-[#D9A441]">
                      {reason.number}
                    </span>

                    <span
                      aria-hidden="true"
                      className="relative flex h-5 w-5 items-center justify-center"
                    >
                      <span className="absolute h-px w-5 bg-white/10 transition-all duration-300 group-hover:bg-[#D9A441]/40" />

                      <span className="absolute h-5 w-px bg-white/10 transition-all duration-300 group-hover:bg-[#D9A441]/40" />
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="mt-10 text-xl font-semibold tracking-[-0.025em] text-white/90 transition-colors duration-300 group-hover:text-white sm:text-2xl">
                    {reason.title}
                  </h3>

                  {/* Description */}
                  <p className="mt-4 max-w-sm text-sm leading-7 text-white/40 transition-colors duration-300 group-hover:text-white/60">
                    {reason.description}
                  </p>

                  {/* Hover number accent */}
                  <span
                    aria-hidden="true"
                    className="absolute bottom-0 left-0 h-[2px] w-0 bg-[#D9A441] transition-all duration-500 group-hover:w-20"
                  />

                  {/* Corner detail */}
                  <span
                    aria-hidden="true"
                    className="absolute right-0 top-0 h-0 w-0 border-r border-t border-[#D9A441]/0 transition-all duration-500 group-hover:h-8 group-hover:w-8 group-hover:border-[#D9A441]/30"
                  />
                </article>
              ))}
            </div>
          </div>
        </div>

        {/* =======================================================
            BOTTOM STATEMENT
        ======================================================== */}

        <div className="mt-8 flex flex-col gap-5 border-t border-white/10 pt-6 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
            <span className="text-[9px] font-medium uppercase tracking-[0.25em] text-white/30 sm:text-[10px]">
              Experience
            </span>

            <span className="h-1 w-1 rounded-full bg-[#D9A441]/50" />

            <span className="text-[9px] font-medium uppercase tracking-[0.25em] text-white/30 sm:text-[10px]">
              Quality
            </span>

            <span className="h-1 w-1 rounded-full bg-[#D9A441]/50" />

            <span className="text-[9px] font-medium uppercase tracking-[0.25em] text-white/30 sm:text-[10px]">
              Responsibility
            </span>

            <span className="h-1 w-1 rounded-full bg-[#D9A441]/50" />

            <span className="text-[9px] font-medium uppercase tracking-[0.25em] text-white/30 sm:text-[10px]">
              Vision
            </span>
          </div>

          <p className="max-w-md text-left text-[10px] leading-5 text-white/25 sm:text-right">
            Creating spaces that serve their purpose today and remain
            meaningful tomorrow.
          </p>
        </div>
      </div>
    </section>
  );
}