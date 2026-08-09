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

function MailIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
      className="h-5 w-5"
    >
      <path
        d="M4 6.75A2.75 2.75 0 0 1 6.75 4h10.5A2.75 2.75 0 0 1 20 6.75v10.5A2.75 2.75 0 0 1 17.25 20H6.75A2.75 2.75 0 0 1 4 17.25V6.75Z"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <path
        d="m5.25 6.25 6.75 5.5 6.75-5.5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function PhoneIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
      className="h-5 w-5"
    >
      <path
        d="M7.7 3.75h2.15l1.2 5.05-1.8 1.8a14.7 14.7 0 0 0 4.15 4.15l1.8-1.8 5.05 1.2v2.1a2.7 2.7 0 0 1-2.7 2.7C10.05 18.95 5.05 13.95 5.05 6.45a2.7 2.7 0 0 1 2.65-2.7Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function CornerMarks() {
  return (
    <>
      <span
        aria-hidden="true"
        className="absolute left-5 top-5 h-9 w-9 border-l border-t border-[#D9A441]/70"
      />

      <span
        aria-hidden="true"
        className="absolute bottom-5 right-5 h-9 w-9 border-b border-r border-[#D9A441]/70"
      />
    </>
  );
}

const contactDetails = {
  email: "pasupati.infrastructure11@gmail.com",
  phones: ["+91 9775936123", "+91 7864054671"],
};

export default function HomeContact() {
  return (
    <section
      id="home-contact"
      className="relative isolate overflow-hidden bg-[#070D18] text-white"
      style={{
        contentVisibility: "auto",
        containIntrinsicSize: "1000px",
      }}
    >
      {/* =========================================================
          BACKGROUND
      ========================================================== */}

      <div className="absolute inset-0 -z-30">
        <Image
          src="/assets/gallery/img2.jpeg"
          alt=""
          aria-hidden="true"
          fill
          sizes="100vw"
          quality={60}
          loading="lazy"
          className="object-cover object-center"
        />
      </div>

      {/* Combined cinematic overlays */}
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-20 bg-[linear-gradient(to_right,rgba(7,17,31,1),rgba(7,17,31,0.9),rgba(7,17,31,0.55)),linear-gradient(to_top,rgba(7,13,24,1),rgba(7,17,31,0.2),rgba(7,13,24,0.4))]"
      />

      {/* Blueprint grid */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 opacity-[0.055]"
        style={{
          backgroundImage: `
            linear-gradient(
              to right,
              rgba(255,255,255,0.45) 1px,
              transparent 1px
            ),
            linear-gradient(
              to bottom,
              rgba(255,255,255,0.45) 1px,
              transparent 1px
            )
          `,
          backgroundSize: "80px 80px",
        }}
      />

      {/* Ambient gold light */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-40 bottom-[-8rem] -z-10 h-[32rem] w-[32rem] rounded-full bg-[#D9A441]/10 blur-[90px] sm:blur-[120px]"
      />

      {/* =========================================================
          CONTENT
      ========================================================== */}

      <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-24 lg:px-12 lg:py-28">
        {/* Section heading */}
        <div className="mb-10 flex items-end justify-between">
          <div>
            <div className="flex items-center gap-3">
              <span className="h-px w-10 bg-[#D9A441]" />

              <span className="text-[10px] font-semibold uppercase tracking-[0.3em] text-[#D9A441] sm:text-xs">
                Get in Touch
              </span>
            </div>

            <p className="mt-4 max-w-lg text-sm leading-6 text-white/45">
              Have an enquiry or want to connect with our team? Reach Pasupati
              Infrastructure directly through our official contact details.
            </p>
          </div>

          <span className="hidden text-[10px] font-medium uppercase tracking-[0.3em] text-white/25 sm:block">
            03 / Contact
          </span>
        </div>

        {/* =========================================================
            MAIN PANEL
        ========================================================== */}

        <div className="relative overflow-hidden border border-white/15 bg-[#0A3158]/45 shadow-[0_30px_100px_rgba(0,0,0,0.25)] backdrop-blur-[2px] sm:backdrop-blur-md">
          <CornerMarks />

          <div className="grid lg:grid-cols-[1.1fr_0.9fr]">
            {/* =====================================================
                LEFT — CTA
            ====================================================== */}

            <div className="relative px-7 py-12 sm:px-12 sm:py-16 lg:px-16 lg:py-20">
              {/* Architectural vertical line */}
              <span
                aria-hidden="true"
                className="absolute bottom-12 left-0 top-12 hidden w-px bg-gradient-to-b from-transparent via-[#D9A441]/40 to-transparent lg:block"
              />

              <p className="text-[10px] font-semibold uppercase tracking-[0.28em] text-white/40">
                Start a conversation
              </p>

              <h2 className="mt-5 max-w-3xl text-[2.8rem] font-semibold leading-[0.97] tracking-[-0.045em] sm:text-5xl lg:text-[4.5rem]">
                Have a project
                <span className="block text-[#D9A441]">in mind?</span>
              </h2>

              <p className="mt-7 max-w-xl text-sm leading-7 text-white/65 sm:text-base sm:leading-8">
                Tell us about your vision, requirements or upcoming project.
                Our team would be glad to connect and understand how we can
                help.
              </p>

              {/* =================================================
                  ACTIONS
              ================================================== */}

              <div className="mt-10 flex flex-col items-start gap-3 sm:flex-row sm:items-center">
                {/* Primary */}
                <Link
                  href="/contact#contact-information"
                  className="group inline-flex items-center gap-3 border border-[#D9A441]/80 bg-[#D9A441] px-5 py-3.5 text-sm font-semibold tracking-wide text-[#07111F] shadow-[0_10px_35px_rgba(217,164,65,0.18)] transition-[transform,background-color,box-shadow] duration-300 hover:-translate-y-0.5 hover:bg-[#E8B95A] hover:shadow-[0_16px_45px_rgba(217,164,65,0.3)] active:translate-y-0"
                >
                  <span>Start a Conversation</span>

                  <span className="flex h-7 w-7 items-center justify-center border border-[#07111F]/15 bg-[#07111F]/10">
                    <ArrowIcon />
                  </span>
                </Link>

                {/* Secondary */}
                <Link
                  href="/contact"
                  className="group inline-flex items-center gap-3 border border-white/20 bg-white/[0.04] px-5 py-3.5 text-sm font-medium tracking-wide text-white/80 transition-[transform,border-color,background-color,color] duration-300 hover:-translate-y-0.5 hover:border-white/40 hover:bg-white/[0.08] hover:text-white"
                >
                  <span>View Contact Page</span>

                  <span className="flex h-7 w-7 items-center justify-center border border-white/15 bg-white/[0.04]">
                    <ArrowIcon />
                  </span>
                </Link>
              </div>

              {/* Small navigation hint */}
              <p className="mt-5 text-[9px] uppercase tracking-[0.22em] text-white/25">
                Explore our complete contact information
              </p>
            </div>

            {/* =====================================================
                RIGHT — CONTACT DETAILS
            ====================================================== */}

            <div className="relative border-t border-white/10 lg:border-l lg:border-t-0">
              {/* Panel lighting */}
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 bg-gradient-to-br from-[#D9A441]/10 via-transparent to-[#07111F]/60"
              />

              <div className="relative flex h-full flex-col px-7 py-10 sm:px-12 sm:py-14 lg:px-12 lg:py-16">
                {/* Header */}
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-semibold uppercase tracking-[0.28em] text-white/40">
                    Contact Information
                  </span>

                  <span
                    aria-hidden="true"
                    className="h-2 w-2 rounded-full bg-[#D9A441] shadow-[0_0_14px_rgba(217,164,65,0.8)]"
                  />
                </div>

                <div className="mt-5 h-px bg-white/10" />

                {/* =================================================
                    EMAIL
                ================================================== */}

                <div className="mt-10">
                  <p className="mb-3 text-[9px] font-semibold uppercase tracking-[0.25em] text-[#D9A441]">
                    Email
                  </p>

                  <a
                    href={`mailto:${contactDetails.email}`}
                    className="group flex items-center justify-between gap-4 border border-white/15 bg-[#07111F]/35 px-4 py-4 transition-[border-color,background-color] duration-300 hover:border-[#D9A441]/50 hover:bg-[#07111F]/55 sm:px-5"
                  >
                    <div className="flex min-w-0 items-center gap-4">
                      <span className="flex h-10 w-10 shrink-0 items-center justify-center border border-white/10 bg-white/[0.04] text-[#D9A441] transition-[border-color,background-color] duration-300 group-hover:border-[#D9A441]/30 group-hover:bg-[#D9A441]/10">
                        <MailIcon />
                      </span>

                      <span className="min-w-0">
                        <span className="block truncate text-sm font-medium text-white/85 transition-colors group-hover:text-white sm:text-base">
                          {contactDetails.email}
                        </span>

                        <span className="mt-1 block text-[9px] uppercase tracking-[0.18em] text-white/30">
                          General enquiries
                        </span>
                      </span>
                    </div>

                    <span className="hidden h-8 w-8 shrink-0 items-center justify-center rounded-full border border-[#D9A441]/40 text-[#D9A441] transition-transform duration-300 group-hover:translate-x-1 sm:flex">
                      <ArrowIcon />
                    </span>
                  </a>
                </div>

                {/* =================================================
                    PHONE
                ================================================== */}

                <div className="mt-8">
                  <p className="mb-3 text-[9px] font-semibold uppercase tracking-[0.25em] text-[#D9A441]">
                    Phone
                  </p>

                  <div className="space-y-2">
                    {contactDetails.phones.map((phone) => (
                      <a
                        key={phone}
                        href={`tel:${phone.replace(/\s/g, "")}`}
                        className="group flex items-center justify-between gap-4 border border-white/15 bg-white/[0.035] px-4 py-4 transition-[border-color,background-color] duration-300 hover:border-[#D9A441]/50 hover:bg-white/[0.06] sm:px-5"
                      >
                        <div className="flex items-center gap-4">
                          <span className="flex h-10 w-10 shrink-0 items-center justify-center border border-white/10 bg-white/[0.04] text-[#D9A441] transition-[border-color,background-color] duration-300 group-hover:border-[#D9A441]/30 group-hover:bg-[#D9A441]/10">
                            <PhoneIcon />
                          </span>

                          <span>
                            <span className="block text-sm font-medium text-white/85 sm:text-base">
                              {phone}
                            </span>

                            <span className="mt-1 block text-[9px] uppercase tracking-[0.18em] text-white/30">
                              Speak with us
                            </span>
                          </span>
                        </div>

                        <span className="hidden h-8 w-8 shrink-0 items-center justify-center rounded-full border border-white/15 text-white/50 transition-[transform,border-color,color] duration-300 group-hover:translate-x-1 group-hover:border-[#D9A441]/40 group-hover:text-[#D9A441] sm:flex">
                          <ArrowIcon />
                        </span>
                      </a>
                    ))}
                  </div>
                </div>

                {/* Bottom message */}
                <div className="mt-auto border-t border-white/10 pt-6 sm:mt-12">
                  <p className="text-[9px] uppercase leading-5 tracking-[0.25em] text-white/25">
                    Every strong project begins
                    <br />
                    with a conversation.
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