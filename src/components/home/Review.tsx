const reviews = [
  {
    name: "Rajesh Sharma",
    role: "Sample Client",
    review:
      "The team demonstrated a strong commitment to quality and execution. Their attention to detail and professional approach made the entire process feel reliable and well managed.",
  },
  {
    name: "Anita Rai",
    role: "Sample Client",
    review:
      "We were impressed by the workmanship and the level of responsibility shown throughout the project. The final result reflects genuine care and craftsmanship.",
  },
  {
    name: "Sanjay Thapa",
    role: "Sample Client",
    review:
      "Pasupati Infrastructure combines practical experience with a clear focus on quality. Their approach to construction gave us confidence from planning through execution.",
  },
  {
    name: "Priya Sharma",
    role: "Sample Client",
    review:
      "A professional and dependable team with a clear understanding of what it takes to deliver lasting work. The attention given to the project was particularly appreciated.",
  },
];

function QuoteIcon() {
  return (
    <svg
      viewBox="0 0 32 32"
      fill="none"
      aria-hidden="true"
      className="h-8 w-8"
    >
      <path
        d="M7 18.5C7 13.2 10.15 9.5 15.2 8v3.1c-2.2.85-3.45 2.25-3.75 4.2H16V24H7v-5.5Zm12 0c0-5.3 3.15-9 8.2-10.5v3.1c-2.2.85-3.45 2.25-3.75 4.2H28V24h-9v-5.5Z"
        fill="currentColor"
      />
    </svg>
  );
}

function StarIcon() {
  return (
    <svg
      viewBox="0 0 20 20"
      fill="currentColor"
      aria-hidden="true"
      className="h-3.5 w-3.5"
    >
      <path d="m10 2.2 2.3 4.65 5.13.75-3.71 3.62.88 5.11L10 13.92l-4.6 2.41.88-5.11-3.71-3.62 5.13-.75L10 2.2Z" />
    </svg>
  );
}

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

export default function Review() {
  return (
    <section
      id="reviews"
      className="relative isolate overflow-hidden bg-[#070D18] text-white"
    >
      {/* =========================================================
          BACKGROUND
      ========================================================== */}

      <div className="absolute inset-0 -z-30">
        <img
          src="/assets/gallery/img18.jpeg"
          alt=""
          aria-hidden="true"
          className="h-full w-full object-cover object-center"
        />
      </div>

      {/* Architectural overlays */}
      <div className="absolute inset-0 -z-20 bg-[#07111F]/80" />

      <div className="absolute inset-0 -z-20 bg-gradient-to-b from-[#07111F]/90 via-[#07111F]/75 to-[#070D18]" />

      <div className="absolute inset-0 -z-20 bg-gradient-to-r from-[#07111F] via-[#07111F]/85 to-[#07111F]/65" />

      {/* Blueprint grid */}
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 opacity-[0.055]"
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

      {/* Ambient gold glow */}
      <div
        aria-hidden="true"
        className="absolute -right-40 top-1/3 -z-10 h-[30rem] w-[30rem] rounded-full bg-[#D9A441]/10 blur-[120px]"
      />

      {/* =========================================================
          CONTENT
      ========================================================== */}

      <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-24 lg:px-12 lg:py-28">
        {/* Section header */}
        <div className="mb-10 flex items-end justify-between gap-8">
          <div>
            <div className="flex items-center gap-3">
              <span className="h-px w-10 bg-[#D9A441]" />

              <span className="text-[10px] font-semibold uppercase tracking-[0.3em] text-[#D9A441] sm:text-xs">
                Client Perspective
              </span>
            </div>

            <h2 className="mt-5 max-w-2xl text-4xl font-semibold leading-[1.02] tracking-[-0.04em] sm:text-5xl lg:text-6xl">
              Trust is built
              <span className="block text-[#D9A441]">
                project by project.
              </span>
            </h2>

            <p className="mt-5 max-w-xl text-sm leading-7 text-white/50 sm:text-base sm:leading-8">
              Quality construction is about more than what gets built. It is
              about the confidence, care and responsibility behind every
              project.
            </p>
          </div>

          <span className="hidden shrink-0 text-[10px] font-medium uppercase tracking-[0.3em] text-white/25 sm:block">
            02 / Reviews
          </span>
        </div>

        {/* =========================================================
            REVIEW GRID
        ========================================================== */}

        <div className="relative">
          <CornerMarks />

          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {reviews.map((review, index) => (
              <article
                key={review.name}
                className="group relative flex min-h-[360px] flex-col overflow-hidden border border-white/10 bg-[#07111F]/55 p-6 backdrop-blur-md transition-all duration-500 hover:-translate-y-1 hover:border-[#D9A441]/35 hover:bg-[#07111F]/70 sm:p-7"
              >
                {/* Card number */}
                <div className="flex items-center justify-between">
                  <span className="text-[9px] font-medium tracking-[0.25em] text-[#D9A441]">
                    0{index + 1}
                  </span>

                  <div className="flex gap-0.5 text-[#D9A441]">
                    {Array.from({ length: 5 }).map((_, starIndex) => (
                      <StarIcon key={starIndex} />
                    ))}
                  </div>
                </div>

                {/* Quote */}
                <div className="mt-8">
                  <div className="text-[#D9A441]/70">
                    <QuoteIcon />
                  </div>

                  <p className="mt-5 text-sm leading-7 text-white/65">
                    {review.review}
                  </p>
                </div>

                {/* Client */}
                <div className="mt-auto border-t border-white/10 pt-5">
                  <div className="flex items-center gap-3">
                    {/* No profile picture — intentional */}
                    <div className="flex h-9 w-9 items-center justify-center border border-[#D9A441]/30 bg-[#D9A441]/10 text-xs font-semibold text-[#D9A441]">
                      {review.name.charAt(0)}
                    </div>

                    <div>
                      <p className="text-sm font-medium text-white/85">
                        {review.name}
                      </p>

                      <p className="mt-0.5 text-[9px] uppercase tracking-[0.2em] text-white/30">
                        {review.role}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Hover accent */}
                <span
                  aria-hidden="true"
                  className="absolute bottom-0 left-0 h-px w-0 bg-[#D9A441] transition-all duration-500 group-hover:w-full"
                />
              </article>
            ))}
          </div>
        </div>

        {/* =========================================================
            TRUST STATEMENT
        ========================================================== */}

        <div className="mt-10 flex flex-col gap-4 border-t border-white/10 pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="max-w-xl text-[10px] uppercase leading-5 tracking-[0.2em] text-white/30">
            Quality · Responsibility · Craftsmanship · Long-term vision
          </p>

          <div className="flex items-center gap-3">
            <div className="flex gap-0.5 text-[#D9A441]">
              {Array.from({ length: 5 }).map((_, index) => (
                <StarIcon key={index} />
              ))}
            </div>

            <span className="text-[10px] uppercase tracking-[0.2em] text-white/35">
              Excellence in every detail
            </span>
          </div>
        </div>

        {/* =========================================================
            DEVELOPMENT NOTE
        ========================================================== */}

        <p className="mt-5 text-center text-[8px] uppercase tracking-[0.18em] text-white/15">
          Sample testimonials — replace with verified client feedback before
          production launch.
        </p>
      </div>
    </section>
  );
}