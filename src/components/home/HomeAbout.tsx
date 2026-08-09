import Image from "next/image";
import Link from "next/link";

function ArrowIcon() {
  return (
    <svg
      viewBox="0 0 20 20"
      fill="none"
      aria-hidden="true"
      className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
    >
      <path
        d="M4 10h11M10 5l5 5-5 5"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function CornerFrame() {
  return (
    <>
      <span
        aria-hidden="true"
        className="absolute left-5 top-5 h-10 w-10 border-l border-t border-[#D9A441]/70"
      />

      <span
        aria-hidden="true"
        className="absolute bottom-5 right-5 h-10 w-10 border-b border-r border-[#D9A441]/70"
      />
    </>
  );
}

const values = [
  {
    number: "01",
    title: "Quality",
    description: "Built with attention to every detail.",
  },
  {
    number: "02",
    title: "Responsibility",
    description: "Delivered with accountability and care.",
  },
  {
    number: "03",
    title: "Craftsmanship",
    description: "Practical expertise behind every structure.",
  },
  {
    number: "04",
    title: "Long-term Vision",
    description: "Creating spaces designed to endure.",
  },
];

export default function HomeAbout() {
  return (
    <section
      id="about-preview"
      className="relative isolate overflow-hidden bg-[#070D18] text-white"
      style={{
        contentVisibility: "auto",
        containIntrinsicSize: "950px",
      }}
    >
      {/* =========================================================
          BACKGROUND
      ========================================================== */}

      <div className="absolute inset-0 -z-30">
        <Image
          src="/assets/hero2.jpeg"
          alt=""
          aria-hidden="true"
          fill
          sizes="100vw"
          quality={60}
          loading="lazy"
          className="object-cover object-center"
        />
      </div>

      {/* Combined cinematic treatment */}
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-20 bg-[linear-gradient(to_right,rgba(7,17,31,1),rgba(7,17,31,0.9),rgba(7,17,31,0.45)),linear-gradient(to_top,rgba(7,13,24,1),rgba(7,13,24,0),rgba(7,13,24,0.3))]"
      />

      {/* Blueprint grid */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 opacity-[0.07]"
        style={{
          backgroundImage: `
            linear-gradient(
              to right,
              rgba(255,255,255,0.4) 1px,
              transparent 1px
            ),
            linear-gradient(
              to bottom,
              rgba(255,255,255,0.4) 1px,
              transparent 1px
            )
          `,
          backgroundSize: "80px 80px",
        }}
      />

      {/* Gold ambient glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-40 top-1/3 -z-10 h-[32rem] w-[32rem] rounded-full bg-[#D9A441]/10 blur-[90px] sm:blur-[120px]"
      />

      {/* =========================================================
          CONTENT
      ========================================================== */}

      <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-24 lg:px-12 lg:py-32">
        {/* Section header */}
        <div className="mb-10 flex items-end justify-between gap-6">
          <div>
            <div className="mb-4 flex items-center gap-3">
              <span className="h-px w-10 bg-[#D9A441]" />

              <span className="text-[10px] font-semibold uppercase tracking-[0.3em] text-[#D9A441] sm:text-xs">
                About Pasupati
              </span>
            </div>

            <p className="max-w-md text-sm leading-6 text-white/45">
              Infrastructure shaped by experience, responsibility and a
              commitment to lasting work.
            </p>
          </div>

          <span className="hidden text-[10px] font-medium uppercase tracking-[0.3em] text-white/25 sm:block">
            01 / About
          </span>
        </div>

        {/* =========================================================
            MAIN PANEL
        ========================================================== */}

        <div className="relative overflow-hidden border border-white/10 bg-[#07111F]/45 backdrop-blur-[2px] sm:backdrop-blur-sm">
          <CornerFrame />

          <div className="grid lg:grid-cols-[1.15fr_0.85fr]">
            {/* =====================================================
                LEFT CONTENT
            ====================================================== */}

            <div className="relative px-7 py-12 sm:px-12 sm:py-16 lg:px-16 lg:py-20">
              {/* Decorative vertical line */}
              <div
                aria-hidden="true"
                className="absolute bottom-12 left-0 top-12 hidden w-px bg-gradient-to-b from-transparent via-[#D9A441]/50 to-transparent lg:block"
              />

              <h2 className="max-w-3xl text-[2.7rem] font-semibold leading-[0.98] tracking-[-0.045em] sm:text-5xl lg:text-[4.4rem]">
                Building with
                <span className="block text-[#D9A441]">
                  purpose &amp; precision.
                </span>
              </h2>

              <div className="mt-8 max-w-xl space-y-5 text-sm leading-7 text-white/65 sm:text-base sm:leading-8">
                <p>
                  Pasupati Infrastructure is built on a simple belief:
                  meaningful spaces begin with responsible construction.
                </p>

                <p>
                  From cultural and religious structures to commercial and
                  residential developments, we bring together practical
                  experience, careful execution and a commitment to work that
                  stands the test of time.
                </p>
              </div>

              {/* CTA */}
              <div className="mt-10">
                <Link
                  href="/about"
                  className="group inline-flex items-center gap-3 border border-[#D9A441]/70 bg-[#D9A441] px-5 py-3 text-sm font-semibold tracking-wide text-[#07111F] shadow-[0_10px_35px_rgba(217,164,65,0.15)] transition-[transform,background-color,box-shadow] duration-300 hover:-translate-y-0.5 hover:bg-[#E8B95A] hover:shadow-[0_14px_40px_rgba(217,164,65,0.25)] active:translate-y-0"
                >
                  <span>Discover Our Story</span>

                  <span className="flex h-7 w-7 items-center justify-center border border-[#07111F]/15 bg-[#07111F]/10">
                    <ArrowIcon />
                  </span>
                </Link>
              </div>
            </div>

            {/* =====================================================
                RIGHT VALUES PANEL
            ====================================================== */}

            <div className="relative border-t border-white/10 lg:border-l lg:border-t-0">
              {/* Subtle lighting */}
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 bg-gradient-to-br from-[#D9A441]/10 via-transparent to-[#07111F]/70"
              />

              <div className="relative flex h-full min-h-[480px] flex-col justify-between px-7 py-10 sm:px-12 sm:py-14 lg:px-12 lg:py-16">
                {/* Panel heading */}
                <div>
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-semibold uppercase tracking-[0.28em] text-white/40">
                      Our Principles
                    </span>

                    <span
                      aria-hidden="true"
                      className="h-2 w-2 rounded-full bg-[#D9A441] shadow-[0_0_12px_rgba(217,164,65,0.7)]"
                    />
                  </div>

                  <div className="mt-5 h-px w-full bg-white/10" />
                </div>

                {/* Values */}
                <div className="mt-12">
                  {values.map((value, index) => (
                    <div
                      key={value.number}
                      className={`group py-5 ${
                        index !== values.length - 1
                          ? "border-b border-white/10"
                          : ""
                      }`}
                    >
                      <div className="flex items-start gap-5">
                        <span className="pt-1 text-[10px] font-medium tracking-[0.2em] text-[#D9A441]">
                          {value.number}
                        </span>

                        <div className="flex-1">
                          <div className="flex items-center justify-between gap-4">
                            <h3 className="text-sm font-medium text-white transition-colors duration-300 group-hover:text-[#D9A441] sm:text-base">
                              {value.title}
                            </h3>

                            <span
                              aria-hidden="true"
                              className="h-px w-0 bg-[#D9A441] transition-[width] duration-300 group-hover:w-8"
                            />
                          </div>

                          <p className="mt-2 max-w-xs text-xs leading-5 text-white/35">
                            {value.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Bottom label */}
                <div className="mt-10 border-t border-white/10 pt-5">
                  <p className="text-[9px] uppercase tracking-[0.28em] text-white/25">
                    Built for today. Designed to endure.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* =========================================================
            BOTTOM STATEMENT
        ========================================================== */}

        <div className="mt-8 flex flex-col gap-3 border-t border-white/10 pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-[9px] font-medium uppercase tracking-[0.28em] text-white/30 sm:text-[10px]">
            Building trust · Preserving heritage · Creating futures
          </p>

          <span className="text-[10px] uppercase tracking-[0.2em] text-white/20">
            Pasupati Infrastructure
          </span>
        </div>
      </div>
    </section>
  );
}