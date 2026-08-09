import Image from "next/image";
import { contactData } from "@/src/data/Contact";

function MailIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      fill="none"
      className="h-5 w-5"
    >
      <path
        d="M3.75 6.75A2.25 2.25 0 0 1 6 4.5h12a2.25 2.25 0 0 1 2.25 2.25v10.5A2.25 2.25 0 0 1 18 19.5H6a2.25 2.25 0 0 1-2.25-2.25V6.75Z"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <path
        d="m4.5 6 6.26 4.58a2.1 2.1 0 0 0 2.48 0L19.5 6"
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
      aria-hidden="true"
      viewBox="0 0 24 24"
      fill="none"
      className="h-5 w-5"
    >
      <path
        d="M7.35 3.75h2.02c.5 0 .94.33 1.08.81l1.02 3.57c.13.46-.03.95-.4 1.24l-1.48 1.16a12.42 12.42 0 0 0 3.88 3.88l1.16-1.48c.29-.37.78-.53 1.24-.4l3.57 1.02c.48.14.81.58.81 1.08v2.02A2.35 2.35 0 0 1 17.9 19C10.77 19 5 13.23 5 6.1a2.35 2.35 0 0 1 2.35-2.35Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function ClockIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      fill="none"
      className="h-5 w-5"
    >
      <circle
        cx="12"
        cy="12"
        r="8.75"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <path
        d="M12 7.5v4.75l3 1.75"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function ArrowIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 16 16"
      fill="none"
      className="h-4 w-4"
    >
      <path
        d="M4 12 12 4M5.5 4H12v6.5"
        stroke="currentColor"
        strokeWidth="1.35"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function CornerDecoration() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute right-0 top-0 h-24 w-24 overflow-hidden"
    >
      <div className="absolute right-[-32px] top-[-32px] h-24 w-24 rounded-full border border-amber-300/10" />
    </div>
  );
}

function CardTopline() {
  return (
    <div
      aria-hidden="true"
      className="absolute left-0 right-0 top-0 h-px bg-gradient-to-r from-amber-300/60 via-amber-300/15 to-transparent"
    />
  );
}

const cardClass =
  "group relative overflow-hidden rounded-[26px] border border-white/10 bg-[#0b1728]/95 p-7 shadow-2xl shadow-black/30 sm:p-8 lg:p-10";

export default function ContactInfo() {
  const [primaryPhone, secondaryPhone] = contactData.phones;

  return (
    <section
      id="contact-information"
      aria-labelledby="contact-information-title"
      className="relative isolate overflow-hidden bg-[#07111f] py-24 sm:py-28 lg:py-36"
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
          src="/assets/gallery/img20.jpeg"
          alt=""
          fill
          loading="lazy"
          sizes="100vw"
          quality={50}
          className="object-cover object-center"
        />
      </div>

      {/* Combined image treatment */}
      <div
        aria-hidden="true"
        className="
          absolute inset-0 -z-20
          bg-[linear-gradient(to_bottom,rgba(7,17,31,0.94),rgba(7,17,31,0.72),rgba(7,17,31,0.97))]
          before:absolute
          before:inset-0
          before:bg-[linear-gradient(to_right,rgba(7,17,31,0.90),rgba(7,17,31,0.35),rgba(7,17,31,0.90))]
        "
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

      {/* Ambient gold */}
      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          -left-40
          top-1/3
          -z-10
          h-[420px]
          w-[420px]
          rounded-full
          bg-amber-300/[0.025]
          blur-[90px]
          sm:blur-[110px]
        "
      />

      {/* =========================================================
          CONTENT
      ========================================================== */}

      <div className="relative mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
        {/* =======================================================
            HEADER
        ======================================================== */}

        <header className="max-w-3xl">
          <div className="flex items-center gap-4">
            <span
              aria-hidden="true"
              className="h-px w-10 bg-amber-300 sm:w-14"
            />

            <span className="text-[10px] font-semibold uppercase tracking-[0.32em] text-amber-300 sm:text-xs">
              Reach Us
            </span>
          </div>

          <h2
            id="contact-information-title"
            className="mt-7 max-w-3xl text-4xl font-semibold leading-[0.96] tracking-[-0.045em] text-white sm:text-5xl lg:text-6xl"
          >
            We&apos;re here when
            <br />
            <span className="text-white/45">you need us.</span>
          </h2>

          <p className="mt-7 max-w-xl text-sm leading-7 text-white/70 sm:text-base sm:leading-8">
            Have an enquiry or want to connect with our team? Reach Pasupati
            Infrastructure directly through our official contact details.
          </p>
        </header>

        {/* =======================================================
            CONTACT GRID
        ======================================================== */}

        <div className="mt-14 grid gap-4 sm:mt-16 lg:grid-cols-12 lg:gap-5">
          {/* =====================================================
              EMAIL
          ====================================================== */}

          <article className={`${cardClass} lg:col-span-7`}>
            <CardTopline />
            <CornerDecoration />

            <div
              aria-hidden="true"
              className="pointer-events-none absolute bottom-[-100px] right-[-80px] h-64 w-64 rounded-full bg-amber-300/[0.035] blur-[70px]"
            />

            <div className="relative flex h-full flex-col justify-between">
              <div>
                <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-amber-300/20 bg-amber-300/10 text-amber-300">
                  <MailIcon />
                </div>

                <p className="mt-8 text-[10px] font-semibold uppercase tracking-[0.3em] text-amber-300">
                  Email
                </p>

                <h3 className="mt-3 text-2xl font-medium tracking-[-0.025em] text-white sm:text-3xl">
                  Write to us.
                </h3>

                <a
                  href={`mailto:${contactData.email}`}
                  className="group/email mt-7 flex w-full items-center justify-between gap-4 rounded-2xl border border-white/10 bg-[#050d18] px-5 py-4 shadow-inner shadow-black/20 transition-all duration-300 hover:border-amber-300/30 hover:bg-[#071321]"
                >
                  <span className="min-w-0 break-all text-sm font-semibold leading-6 tracking-[-0.01em] text-white sm:text-base lg:text-lg">
                    {contactData.email}
                  </span>

                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-amber-300/20 bg-amber-300/10 text-amber-300 transition-all duration-300 group-hover/email:translate-x-0.5 group-hover/email:-translate-y-0.5 group-hover/email:border-amber-300/40 group-hover/email:bg-amber-300/20">
                    <ArrowIcon />
                  </span>
                </a>
              </div>

              <div className="mt-12 flex items-center justify-between border-t border-white/10 pt-5">
                <span className="text-[9px] font-medium uppercase tracking-[0.22em] text-white/40">
                  General enquiries
                </span>

                <span className="text-[9px] font-medium uppercase tracking-[0.22em] text-amber-300">
                  Email
                </span>
              </div>
            </div>
          </article>

          {/* =====================================================
              PHONE
          ====================================================== */}

          <article className={`${cardClass} lg:col-span-5`}>
            <CardTopline />
            <CornerDecoration />

            <div className="relative">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-amber-300/20 bg-amber-300/10 text-amber-300">
                <PhoneIcon />
              </div>

              <p className="mt-8 text-[10px] font-semibold uppercase tracking-[0.3em] text-amber-300">
                Phone
              </p>

              <h3 className="mt-3 text-2xl font-medium tracking-[-0.025em] text-white sm:text-3xl">
                Speak with us.
              </h3>

              <div className="mt-7 space-y-3">
                {[primaryPhone, secondaryPhone].map((phone) => (
                  <a
                    key={phone}
                    href={`tel:${phone.replace(/\s/g, "")}`}
                    className="group/phone flex min-h-[56px] items-center justify-between gap-4 rounded-xl border border-white/10 bg-[#111f32] px-4 py-3.5 transition-all duration-300 hover:border-amber-300/30 hover:bg-[#14243a]"
                  >
                    <span className="text-sm font-semibold tracking-wide text-white sm:text-base">
                      {phone}
                    </span>

                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-white/40 transition-all duration-300 group-hover/phone:translate-x-0.5 group-hover/phone:-translate-y-0.5 group-hover/phone:text-amber-300">
                      <ArrowIcon />
                    </span>
                  </a>
                ))}
              </div>
            </div>
          </article>

          {/* =====================================================
              WORKING HOURS
          ====================================================== */}

          <article className={`${cardClass} lg:col-span-5`}>
            <CardTopline />
            <CornerDecoration />

            <div className="relative">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-amber-300/20 bg-amber-300/10 text-amber-300">
                <ClockIcon />
              </div>

              <p className="mt-8 text-[10px] font-semibold uppercase tracking-[0.3em] text-amber-300">
                Working Hours
              </p>

              <h3 className="mt-3 text-2xl font-medium tracking-[-0.025em] text-white sm:text-3xl">
                When to reach us.
              </h3>

              <div className="mt-7">
                <p className="text-lg font-medium tracking-tight text-white">
                  {contactData.workingHours.days}
                </p>

                <p className="mt-2 text-sm text-white/60">
                  {contactData.workingHours.hours}
                </p>
              </div>

              <div className="mt-7 flex items-center gap-3">
                <span
                  aria-hidden="true"
                  className="relative flex h-2.5 w-2.5"
                >
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400/40" />
                  <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-400" />
                </span>

                <span className="text-xs text-white/55">
                  {contactData.workingHours.closed} — Closed
                </span>
              </div>
            </div>
          </article>

          {/* =====================================================
              DIRECT CONNECTION
          ====================================================== */}

          <article className="relative overflow-hidden rounded-[26px] border border-amber-300/20 bg-gradient-to-br from-[#17253a] via-[#101d30] to-[#0b1728] p-7 shadow-2xl shadow-black/30 sm:p-8 lg:col-span-7 lg:p-10">
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-amber-300/[0.07] blur-[70px]"
            />

            <div className="relative flex h-full flex-col justify-between gap-10 sm:flex-row sm:items-end">
              <div className="max-w-md">
                <span className="text-[10px] font-semibold uppercase tracking-[0.3em] text-amber-300">
                  Direct connection
                </span>

                <h3 className="mt-4 text-2xl font-medium tracking-[-0.03em] text-white sm:text-3xl">
                  Let&apos;s start a conversation.
                </h3>

                <p className="mt-4 text-sm leading-6 text-white/60">
                  For enquiries and business communication, contact the
                  Pasupati Infrastructure team directly.
                </p>
              </div>

              <div
                aria-hidden="true"
                className="hidden shrink-0 sm:block"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-full border border-amber-300/25 bg-amber-300/10 text-amber-300">
                  <ArrowIcon />
                </div>
              </div>
            </div>
          </article>
        </div>

        {/* Bottom signature */}
        <div className="mt-14 flex items-center gap-4 sm:mt-16">
          <span className="h-px flex-1 bg-white/10" />

          <span className="text-[9px] font-medium uppercase tracking-[0.32em] text-white/25">
            Pasupati Infrastructure
          </span>

          <span className="h-px flex-1 bg-white/10" />
        </div>
      </div>
    </section>
  );
}