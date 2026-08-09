import Image from "next/image";
import Link from "next/link";

import Container from "@/src/components/ui/Container";

export default function Hero() {
  return (
    <section className="relative min-h-[100svh] overflow-hidden bg-(--color-navy)">
      {/* =========================================================
          BACKGROUND IMAGE

          IMPORTANT:
          This is the primary LCP image, so it must NOT be lazy-loaded.
      ========================================================== */}

      <div
        className="
          absolute inset-x-0 top-0
          h-[61%]
          animate-hero-image-in
          sm:inset-0
          sm:h-full
        "
      >
        <Image
          src="/assets/hero.jpeg"
          alt="Pasupati Infrastructure construction project"
          fill
          priority
          sizes="100vw"
          quality={75}
          className="
            object-cover
            object-[58%_38%]
            sm:object-center
          "
        />
      </div>

      {/* =========================================================
          IMAGE TINT
      ========================================================== */}

      <div
        aria-hidden="true"
        className="
          absolute inset-x-0 top-0 h-[61%]
          bg-(--color-navy)/20
          sm:inset-0 sm:h-full sm:bg-(--color-navy)/30
        "
      />

      {/* =========================================================
          DESKTOP LEFT CONTRAST
      ========================================================== */}

      <div
        aria-hidden="true"
        className="absolute inset-0 hidden bg-[linear-gradient(90deg,rgba(12,29,50,0.96)_0%,rgba(12,29,50,0.76)_34%,rgba(12,29,50,0.34)_68%,rgba(12,29,50,0.12)_100%)] sm:block"
      />

      {/* =========================================================
          MOBILE IMAGE → NAVY TRANSITION
      ========================================================== */}

      <div
        aria-hidden="true"
        className="
          absolute inset-x-0 top-[36%] z-[1] h-[32%]
          bg-[linear-gradient(to_bottom,transparent_0%,rgba(12,29,50,0.28)_20%,rgba(12,29,50,0.72)_58%,rgba(12,29,50,1)_100%)]
          sm:hidden
        "
      />

      {/* =========================================================
          MOBILE BOTTOM NAVY
      ========================================================== */}

      <div
        aria-hidden="true"
        className="
          absolute inset-x-0 bottom-0 h-[45%]
          bg-(--color-navy)
          sm:hidden
        "
      />

      {/* =========================================================
          DESKTOP BOTTOM CINEMATIC FADE
      ========================================================== */}

      <div
        aria-hidden="true"
        className="
          absolute inset-x-0 bottom-0 hidden h-72
          bg-[linear-gradient(to_top,rgba(12,29,50,0.98),rgba(12,29,50,0))]
          sm:block
        "
      />

      {/* =========================================================
          SUBTLE NAVY ATMOSPHERIC GLOW
      ========================================================== */}

      <div
        aria-hidden="true"
        className="
          pointer-events-none absolute
          -left-32 top-[32%]
          h-80 w-80
          rounded-full
          bg-blue-500/[0.06]
          blur-[80px]
          sm:left-[-8%] sm:top-[42%] sm:blur-[100px]
        "
      />

      {/* =========================================================
          SUBTLE GOLD ATMOSPHERIC GLOW
      ========================================================== */}

      <div
        aria-hidden="true"
        className="
          pointer-events-none absolute
          right-[-20%] top-[42%]
          h-72 w-72
          rounded-full
          bg-(--color-gold)/[0.055]
          blur-[90px]
          sm:right-[-8%] sm:top-[30%] sm:blur-[110px]
        "
      />

      {/* =========================================================
          ARCHITECTURAL GRID
      ========================================================== */}

      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.07]"
      >
        <div className="absolute left-[7%] top-0 h-full w-px bg-white" />

        <div className="absolute right-[7%] top-0 h-full w-px bg-white" />

        <div className="absolute left-0 right-0 top-[18%] h-px bg-white" />

        <div className="absolute bottom-[16%] left-0 right-0 h-px bg-white" />
      </div>

      {/* =========================================================
          HERO CONTENT
      ========================================================== */}

      <Container
        className="
          relative z-10
          flex min-h-[100svh]
          items-end
          pb-24
          pt-24
          sm:pb-20
          sm:pt-32
          lg:pb-24
        "
      >
        <div className="w-full">
          <div className="max-w-5xl">
            {/* =====================================================
                EYEBROW
            ===================================================== */}

            <div
              className="
                mb-5
                flex items-center gap-3
                animate-hero-eyebrow-in
                motion-reduce:animate-none
                sm:mb-7
                sm:gap-4
              "
            >
              <span
                className="
                  h-px
                  w-8
                  bg-(--color-gold)
                  shadow-[0_0_12px_rgba(255,211,159,0.35)]
                  sm:w-12
                "
              />

              <span
                className="
                  text-[10px]
                  font-medium
                  uppercase
                  tracking-[0.28em]
                  text-(--color-gold)
                  drop-shadow-[0_0_12px_rgba(255,211,159,0.12)]
                  sm:text-sm
                  sm:tracking-[0.3em]
                "
              >
                Pasupati Infrastructure
              </span>
            </div>

            {/* =====================================================
                MAIN HEADING
            ===================================================== */}

            <h1
              className="
                max-w-4xl
                animate-hero-heading-in
                motion-reduce:animate-none
                text-[3rem]
                font-semibold
                leading-[0.94]
                tracking-[-0.045em]
                text-white
                sm:text-[clamp(4rem,7vw,7.5rem)]
              "
            >
              Building Trust.
              <br />

              <span className="text-white/90">
                Preserving Heritage.
              </span>
              <br />

              <span
                className="
                  text-(--color-gold)
                  drop-shadow-[0_0_28px_rgba(255,211,159,0.14)]
                "
              >
                Creating Futures.
              </span>
            </h1>

            {/* =====================================================
                DESCRIPTION + CTA
            ===================================================== */}

            <div
              className="
                mt-7
                flex flex-col gap-6
                animate-hero-content-in
                motion-reduce:animate-none
                sm:mt-9
                sm:flex-row
                sm:items-center
                sm:gap-7
              "
            >
              <p
                className="
                  max-w-md
                  text-[13px]
                  leading-6
                  text-white/70
                  sm:text-base
                  sm:leading-7
                "
              >
                Infrastructure shaped by precision,
                responsibility and a vision for generations
                to come.
              </p>

              <Link
                href="/projects"
                className="
                  group
                  relative
                  inline-flex
                  w-fit
                  items-center
                  gap-3
                  overflow-hidden
                  rounded-sm
                  border
                  border-[#D9A441]/70
                  bg-[#D9A441]
                  px-6
                  py-3.5
                  text-sm
                  font-semibold
                  tracking-wide
                  text-[#07111F]
                  shadow-[0_8px_30px_rgba(217,164,65,0.18)]
                  transition-[transform,background-color,box-shadow]
                  duration-300
                  hover:-translate-y-0.5
                  hover:bg-[#E8B95A]
                  hover:shadow-[0_12px_35px_rgba(217,164,65,0.28)]
                  active:translate-y-0
                "
              >
                <span>Explore Projects</span>

                <span
                  className="
                    flex
                    h-7
                    w-7
                    items-center
                    justify-center
                    rounded-full
                    bg-[#07111F]/10
                    transition-transform
                    duration-300
                    group-hover:translate-x-1
                  "
                >
                  <svg
                    viewBox="0 0 20 20"
                    fill="none"
                    className="h-4 w-4"
                    aria-hidden="true"
                  >
                    <path
                      d="M4 10h11M10 5l5 5-5 5"
                      stroke="currentColor"
                      strokeWidth="1.7"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
              </Link>
            </div>
          </div>

          {/* =====================================================
              BOTTOM INFORMATION
          ===================================================== */}

          <div
            className="
              mt-12
              flex
              items-end
              justify-between
              border-t
              border-white/10
              pt-4
              animate-hero-bottom-in
              motion-reduce:animate-none
              sm:mt-16
              sm:pt-5
            "
          >
            {/* Brand statement */}

            <div className="hidden max-w-sm sm:block">
              <p
                className="
                  text-[10px]
                  font-medium
                  uppercase
                  tracking-[0.25em]
                  text-white/35
                "
              >
                Building Trust · Preserving Heritage ·
                Creating Futures
              </p>
            </div>

            {/* Scroll */}

            <div
              className="
                ml-auto
                flex
                items-center
                gap-3
                text-white/45
              "
            >
              <span
                className="
                  text-[9px]
                  font-medium
                  uppercase
                  tracking-[0.22em]
                "
              >
                Scroll to explore
              </span>

              <div
                className="
                  flex
                  h-9
                  w-9
                  items-center
                  justify-center
                  border
                  border-white/15
                  bg-white/[0.02]
                  shadow-[0_0_20px_rgba(255,255,255,0.03)]
                "
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  aria-hidden="true"
                  className="
                    h-4 w-4
                    text-(--color-gold)
                    drop-shadow-[0_0_8px_rgba(255,211,159,0.35)]
                  "
                >
                  <path
                    d="M12 5v14M6.5 13.5 12 19l5.5-5.5"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </Container>

      {/* =========================================================
          GOLD ARCHITECTURAL ACCENT
      ========================================================== */}

      <div
        aria-hidden="true"
        className="
          absolute
          bottom-0
          left-0
          hidden
          h-28
          w-px
          origin-bottom
          animate-hero-line-in
          bg-(--color-gold)
          shadow-[0_0_14px_rgba(255,211,159,0.35)]
          sm:block
          motion-reduce:animate-none
        "
      />

      {/* =========================================================
          FEATURED PROJECT MARKER
      ========================================================== */}

      <div
        className="
          absolute
          bottom-8
          right-[7%]
          hidden
          items-center
          gap-3
          animate-hero-marker-in
          lg:flex
          motion-reduce:animate-none
        "
      >
        <span
          className="
            text-[9px]
            font-medium
            uppercase
            tracking-[0.25em]
            text-white/35
          "
        >
          Featured Project
        </span>

        <svg
          viewBox="0 0 20 20"
          fill="none"
          aria-hidden="true"
          className="
            h-4 w-4
            text-(--color-gold)
            drop-shadow-[0_0_8px_rgba(255,211,159,0.3)]
          "
        >
          <path
            d="M5 15 15 5M7 5h8v8"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
    </section>
  );
}