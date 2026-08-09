import Image from "next/image";
import Link from "next/link";

export default function ContactHero() {
  return (
    <section
      id="contact-hero"
      aria-labelledby="contact-hero-title"
      className="relative isolate min-h-[620px] overflow-hidden bg-[#07111f] sm:min-h-[680px] lg:min-h-[760px]"
    >
      {/* =========================================================
          BACKGROUND IMAGE
      ========================================================== */}

      <div
        aria-hidden="true"
        className="absolute inset-0 -z-30"
      >
        <Image
          src="/assets/gallery/img15.jpeg"
          alt=""
          fill
          priority
          sizes="100vw"
          quality={55}
          className="object-cover object-center"
        />
      </div>

      {/* =========================================================
          IMAGE TREATMENT
      ========================================================== */}

      <div
        aria-hidden="true"
        className="
          absolute inset-0 -z-20
          bg-[linear-gradient(to_right,rgba(7,17,31,0.80),rgba(7,17,31,0.48),rgba(7,17,31,0.08))]
        "
      />

      <div
        aria-hidden="true"
        className="
          absolute inset-x-0 top-0 -z-20 h-40
          bg-gradient-to-b
          from-[#07111f]/55
          to-transparent
        "
      />

      <div
        aria-hidden="true"
        className="
          absolute inset-x-0 bottom-0 -z-20 h-48
          bg-gradient-to-t
          from-[#07111f]/90
          via-[#07111f]/50
          to-transparent
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

        <div className="absolute left-0 right-0 top-1/2 h-px bg-white/30" />
      </div>

      {/* Gold architectural accent */}
      <div
        aria-hidden="true"
        className="absolute left-0 top-0 h-px w-1/3 bg-gradient-to-r from-amber-400 to-transparent"
      />

      {/* =========================================================
          CONTENT
      ========================================================== */}

      <div className="relative mx-auto flex min-h-[620px] max-w-7xl items-center px-6 py-28 sm:min-h-[680px] sm:px-8 lg:min-h-[760px] lg:px-12 lg:py-32">
        <div className="w-full">
          {/* Eyebrow */}
          <div className="mb-8 flex items-center gap-4">
            <span
              aria-hidden="true"
              className="h-px w-10 bg-amber-400 sm:w-14"
            />

            <span className="text-[10px] font-semibold uppercase tracking-[0.3em] text-amber-300 sm:text-xs">
              Contact Pasupati
            </span>
          </div>

          {/* Main content */}
          <div className="grid items-end gap-12 lg:grid-cols-[minmax(0,1fr)_230px] lg:gap-16">
            {/* Heading */}
            <div className="max-w-4xl">
              <h1
                id="contact-hero-title"
                className="text-[clamp(3.2rem,8vw,7rem)] font-semibold leading-[0.9] tracking-[-0.055em] text-white"
              >
                Let&apos;s build
                <br />

                <span className="text-white">something </span>

                <span className="text-amber-300">meaningful.</span>
              </h1>

              <p className="mt-8 max-w-2xl text-sm leading-7 text-white/75 sm:text-base sm:leading-8 lg:text-lg">
                Whether you have an enquiry, a business requirement, or simply
                want to connect with our team, Pasupati Infrastructure is here
                to hear from you.
              </p>

              {/* Actions */}
              <div className="mt-9 flex flex-wrap gap-3 sm:gap-4">
                <Link
                  href="#contact-information"
                  className="group inline-flex items-center gap-3 rounded-full bg-amber-300 px-6 py-3.5 text-sm font-semibold text-[#07111f] shadow-lg shadow-black/10 transition-all duration-300 hover:-translate-y-0.5 hover:bg-amber-200 hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-amber-300 focus:ring-offset-2 focus:ring-offset-[#07111f]"
                >
                  Get in touch

                  <span
                    aria-hidden="true"
                    className="transition-transform duration-300 group-hover:translate-x-1"
                  >
                    →
                  </span>
                </Link>

                <Link
                  href="#our-locations"
                  className="
                    group
                    inline-flex
                    items-center
                    gap-2
                    rounded-full
                    border
                    border-white/25
                    bg-white/[0.08]
                    px-6
                    py-3.5
                    text-sm
                    font-medium
                    text-white
                    transition-all
                    duration-300
                    hover:-translate-y-0.5
                    hover:border-white/40
                    hover:bg-white/[0.14]
                    focus:outline-none
                    focus:ring-2
                    focus:ring-white/40
                    focus:ring-offset-2
                    focus:ring-offset-[#07111f]
                    sm:backdrop-blur-md
                  "
                >
                  Our locations

                  <span
                    aria-hidden="true"
                    className="transition-transform duration-300 group-hover:translate-y-0.5"
                  >
                    ↓
                  </span>
                </Link>
              </div>
            </div>

            {/* =====================================================
                FLOATING INFO PANEL
            ====================================================== */}

            <div className="hidden lg:block">
              <div
                className="
                  relative
                  overflow-hidden
                  rounded-2xl
                  border
                  border-white/15
                  bg-[#0b1728]/55
                  p-6
                  shadow-2xl
                  shadow-black/20
                  backdrop-blur-md
                "
              >
                {/* Gold glow */}
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute -right-12 -top-12 h-32 w-32 rounded-full bg-amber-300/10 blur-[70px]"
                />

                <div className="relative">
                  <span className="text-[10px] font-semibold uppercase tracking-[0.25em] text-amber-300">
                    Connect
                  </span>

                  <div className="my-5 h-px bg-white/10" />

                  <p className="text-sm leading-6 text-white/75">
                    Reach our team through our offices, phone numbers, or
                    email.
                  </p>

                  <div className="mt-6 flex items-center gap-2">
                    <span
                      aria-hidden="true"
                      className="h-2 w-2 rounded-full bg-emerald-400"
                    />

                    <span className="text-xs text-white/55">
                      Available Monday – Saturday
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom metadata */}
          <div className="mt-16 flex items-center justify-between border-t border-white/10 pt-5 sm:mt-20">
            <span className="text-[10px] font-medium uppercase tracking-[0.25em] text-white/40 sm:text-xs">
              Pasupati Infrastructure
            </span>

            <div className="hidden items-center gap-3 sm:flex">
              <span
                aria-hidden="true"
                className="h-px w-8 bg-white/20"
              />

              <span className="text-[10px] uppercase tracking-[0.25em] text-white/40">
                Get in touch
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* =========================================================
          SIDE SCROLL INDICATOR
      ========================================================== */}

      <div
        aria-hidden="true"
        className="absolute bottom-10 right-6 hidden flex-col items-center gap-3 lg:flex"
      >
        <span className="text-[9px] font-medium uppercase tracking-[0.3em] text-white/40 [writing-mode:vertical-rl]">
          Explore
        </span>

        <span className="relative h-12 w-px overflow-hidden bg-white/10">
          <span className="absolute left-0 top-0 h-5 w-px bg-amber-300" />
        </span>
      </div>
    </section>
  );
}