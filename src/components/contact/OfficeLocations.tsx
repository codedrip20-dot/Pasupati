import { Building2, Mail, MapPin } from "lucide-react";
import { contactData } from "@/src/data/Contact";

export default function OfficialLocations() {
  return (
    <section
      id="our-locations"
      aria-labelledby="locations-title"
      className="relative isolate overflow-hidden bg-[#07111f] py-24 sm:py-28 lg:py-36"
    >
      {/* =========================================================
          BACKGROUND
      ========================================================== */}

      <div
        aria-hidden="true"
        className="absolute inset-0 -z-30 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/assets/hero.jpg')",
        }}
      />

      {/* Soft architectural treatment */}
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-20 bg-[#07111f]/72"
      />

      <div
        aria-hidden="true"
        className="absolute inset-0 -z-20 bg-gradient-to-b from-[#07111f]/90 via-[#07111f]/55 to-[#07111f]/96"
      />

      <div
        aria-hidden="true"
        className="absolute inset-0 -z-20 bg-gradient-to-r from-[#07111f]/80 via-transparent to-[#07111f]/80"
      />

      {/* =========================================================
          ARCHITECTURAL GRID
      ========================================================== */}

      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 opacity-[0.035]"
      >
        <div className="mx-auto h-full max-w-7xl border-x border-white/40" />

        <div className="absolute inset-y-0 left-1/4 hidden w-px bg-white/30 lg:block" />

        <div className="absolute inset-y-0 left-1/2 hidden w-px bg-white/30 lg:block" />

        <div className="absolute inset-y-0 left-3/4 hidden w-px bg-white/30 lg:block" />

        <div className="absolute left-0 right-0 top-1/2 h-px bg-white/20" />
      </div>

      {/* Gold architectural accent */}
      <div
        aria-hidden="true"
        className="absolute left-0 top-0 h-px w-1/3 bg-gradient-to-r from-amber-300 via-amber-300/50 to-transparent"
      />

      {/* Ambient gold */}
      <div
        aria-hidden="true"
        className="absolute -left-48 top-1/3 -z-10 h-[420px] w-[420px] rounded-full bg-amber-300/[0.035] blur-[130px]"
      />

      <div
        aria-hidden="true"
        className="absolute -right-48 bottom-0 -z-10 h-[420px] w-[420px] rounded-full bg-amber-300/[0.025] blur-[130px]"
      />

      {/* =========================================================
          CONTENT
      ========================================================== */}

      <div className="relative mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
        {/* =======================================================
            HEADER
        ======================================================== */}

        <header className="mx-auto max-w-3xl text-center">
          {/* Eyebrow */}
          <div className="inline-flex items-center gap-3">
            <span
              aria-hidden="true"
              className="h-px w-8 bg-amber-300 sm:w-12"
            />

            <span className="text-[10px] font-semibold uppercase tracking-[0.32em] text-amber-300 sm:text-xs">
              Our Presence
            </span>

            <span
              aria-hidden="true"
              className="h-px w-8 bg-amber-300 sm:w-12"
            />
          </div>

          <h2
            id="locations-title"
            className="mt-7 text-4xl font-semibold leading-[0.96] tracking-[-0.045em] text-white sm:text-5xl lg:text-6xl"
          >
            Our Official{" "}
            <span className="text-amber-300">Locations</span>
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-sm leading-7 text-white/65 sm:text-base sm:leading-8">
            Visit us at one of our official offices. Pasupati Infrastructure
            remains connected to the communities, clients, and partners we
            serve.
          </p>
        </header>

        {/* =======================================================
            LOCATION GRID
        ======================================================== */}

        <div className="mt-14 grid gap-5 sm:mt-16 lg:grid-cols-2 lg:gap-6">
          {contactData.offices.map((office, index) => (
            <article
              key={office.name}
              className="group relative overflow-hidden rounded-[28px] border border-white/10 bg-[#0a1728]/95 shadow-2xl shadow-black/30 transition-all duration-500 hover:-translate-y-1 hover:border-amber-300/25"
            >
              {/* Gold top line */}
              <div
                aria-hidden="true"
                className="absolute left-0 right-0 top-0 h-px bg-gradient-to-r from-amber-300/60 via-amber-300/20 to-transparent"
              />

              {/* Decorative corner */}
              <div
                aria-hidden="true"
                className="pointer-events-none absolute right-0 top-0 h-28 w-28 overflow-hidden"
              >
                <div className="absolute right-[-38px] top-[-38px] h-28 w-28 rounded-full border border-amber-300/10 transition-colors duration-500 group-hover:border-amber-300/20" />
              </div>

              {/* Large number */}
              <span
                aria-hidden="true"
                className="pointer-events-none absolute right-7 top-5 select-none text-[80px] font-semibold leading-none tracking-[-0.08em] text-white/[0.025] transition-colors duration-500 group-hover:text-amber-300/[0.045] sm:right-9"
              >
                0{index + 1}
              </span>

              <div className="relative p-7 sm:p-9 lg:p-10">
                {/* =================================================
                    OFFICE HEADER
                ================================================== */}

                <div className="flex items-start gap-4">
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border border-amber-300/20 bg-amber-300/10 text-amber-300 transition-all duration-500 group-hover:border-amber-300/35 group-hover:bg-amber-300/[0.14]">
                    <Building2 className="h-6 w-6" strokeWidth={1.5} />
                  </div>

                  <div className="min-w-0 pt-1">
                    <p className="text-[9px] font-semibold uppercase tracking-[0.28em] text-amber-300/80">
                      Official Office
                    </p>

                    <h3 className="mt-2 text-2xl font-semibold tracking-[-0.025em] text-white sm:text-3xl">
                      {office.name}
                    </h3>
                  </div>
                </div>

                {/* Divider */}
                <div className="my-8 h-px bg-gradient-to-r from-white/10 via-white/10 to-transparent" />

                {/* =================================================
                    ADDRESS
                ================================================== */}

                <div className="flex gap-4">
                  <div className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04] text-amber-300">
                    <MapPin className="h-4 w-4" strokeWidth={1.7} />
                  </div>

                  <div className="min-w-0">
                    <p className="text-[9px] font-semibold uppercase tracking-[0.25em] text-white/40">
                      Office Address
                    </p>

                    <address className="mt-3 not-italic">
                      {office.address.map((line, addressIndex) => (
                        <p
                          key={`${office.name}-${addressIndex}`}
                          className="text-sm leading-6 text-white/75 sm:text-[15px]"
                        >
                          {line}
                        </p>
                      ))}
                    </address>
                  </div>
                </div>

                {/* =================================================
                    EMAIL
                ================================================== */}

                <a
                  href={`mailto:${contactData.email}`}
                  className="group/email mt-8 flex items-center gap-4 rounded-2xl border border-white/10 bg-[#050d18] px-4 py-3.5 transition-all duration-300 hover:border-amber-300/25 hover:bg-[#071321] sm:px-5"
                >
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border border-amber-300/15 bg-amber-300/[0.08] text-amber-300">
                    <Mail className="h-4 w-4" strokeWidth={1.6} />
                  </span>

                  <div className="min-w-0 flex-1">
                    <p className="text-[9px] font-semibold uppercase tracking-[0.22em] text-white/35">
                      General Enquiries
                    </p>

                    <p className="mt-1 break-all text-xs font-medium leading-5 text-white sm:text-sm">
                      {contactData.email}
                    </p>
                  </div>

                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-white/10 text-white/30 transition-all duration-300 group-hover/email:border-amber-300/25 group-hover/email:text-amber-300">
                    <svg
                      aria-hidden="true"
                      viewBox="0 0 16 16"
                      fill="none"
                      className="h-3.5 w-3.5"
                    >
                      <path
                        d="M4 12 12 4M5.5 4H12v6.5"
                        stroke="currentColor"
                        strokeWidth="1.35"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                </a>
              </div>
            </article>
          ))}
        </div>

        {/* =======================================================
            BOTTOM STATEMENT
        ======================================================== */}

        <div className="mt-14 flex items-center justify-center gap-4 sm:mt-16">
          <span
            aria-hidden="true"
            className="h-px w-10 bg-amber-300/40 sm:w-16"
          />

          <p className="text-center text-[9px] font-medium uppercase tracking-[0.28em] text-white/35 sm:text-[10px]">
            Connecting people, projects &amp; possibilities
          </p>

          <span
            aria-hidden="true"
            className="h-px w-10 bg-amber-300/40 sm:w-16"
          />
        </div>
      </div>
    </section>
  );
}