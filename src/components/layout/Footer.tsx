import Link from "next/link";

const navigation = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Projects", href: "/projects" },
  { label: "Contact", href: "/contact" },
];

const expertise = [
  "Construction",
  "Commercial Properties",
  "Residential Projects",
  "Infrastructure Development",
];

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-[#0B1220] text-white">
      {/* Subtle architectural background */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.035]"
      >
        <div className="absolute -right-20 top-0 h-[500px] w-[500px] rounded-full border border-white" />
        <div className="absolute -right-8 top-12 h-[400px] w-[400px] rounded-full border border-white" />
        <div className="absolute -right-[-64px] top-24 h-[300px] w-[300px] rounded-full border border-white" />
      </div>

      {/* Main footer */}
      <div className="relative mx-auto max-w-7xl px-6 py-16 sm:px-8 lg:px-10 lg:py-20">
        {/* Top statement */}
        <div className="mb-16 border-b border-white/10 pb-12 lg:mb-20 lg:pb-16">
          <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-3xl">
              <p className="mb-5 text-xs font-medium uppercase tracking-[0.28em] text-slate-500">
                Pasupati Infrastructure
              </p>

              <h2 className="text-3xl font-medium leading-tight tracking-tight text-white sm:text-4xl lg:text-5xl">
                Building with purpose.
                <br />
                <span className="text-slate-500">
                  Creating for generations.
                </span>
              </h2>
            </div>

            <Link
              href="/contact"
              className="group inline-flex w-fit items-center gap-4 border-b border-white/20 pb-2 text-sm font-medium text-white transition-all duration-300 hover:border-white"
            >
              Start a conversation

              <span
                aria-hidden="true"
                className="transition-transform duration-300 group-hover:translate-x-1"
              >
                →
              </span>
            </Link>
          </div>
        </div>

        {/* Content grid */}
        <div className="grid gap-14 md:grid-cols-2 lg:grid-cols-[1.5fr_0.8fr_1fr_1.2fr] lg:gap-10">
          {/* Brand */}
          <div>
            <Link
              href="/"
              className="group inline-flex items-center text-2xl font-semibold tracking-tight"
            >
              <span className="transition-colors duration-300 group-hover:text-slate-300">
                Pasupati
              </span>

              <span className="ml-2 font-normal text-slate-500">
                Infrastructure
              </span>
            </Link>

            <div className="mt-6 h-px w-12 bg-white/30" />

            <p className="mt-6 max-w-sm text-sm leading-7 text-slate-400">
              Delivering thoughtful construction and infrastructure solutions
              with a focus on quality, reliability and lasting value.
            </p>
          </div>

          {/* Explore */}
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-slate-500">
              Explore
            </p>

            <ul className="mt-6 space-y-4">
              {navigation.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="group inline-flex items-center gap-2 text-sm text-slate-400 transition-colors duration-300 hover:text-white"
                  >
                    <span className="h-px w-0 bg-white transition-all duration-300 group-hover:w-3" />

                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Expertise */}
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-slate-500">
              Expertise
            </p>

            <ul className="mt-6 space-y-4">
              {expertise.map((item) => (
                <li
                  key={item}
                  className="text-sm leading-6 text-slate-400"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-slate-500">
              Get in Touch
            </p>

            <div className="mt-6 space-y-6">
              <div>
                <p className="mb-2 text-[10px] uppercase tracking-[0.2em] text-slate-600">
                  Email
                </p>

                <a
                  href="mailto:info@pasupatiinfrastructure.com"
                  className="text-sm text-slate-300 transition-colors duration-300 hover:text-white"
                >
                  info@pasupatiinfrastructure.com
                </a>
              </div>

              <div>
                <p className="mb-2 text-[10px] uppercase tracking-[0.2em] text-slate-600">
                  Phone
                </p>

                <a
                  href="tel:+919775938123"
                  className="text-sm text-slate-300 transition-colors duration-300 hover:text-white"
                >
                  +91 9775938123
                </a>
              </div>

              <div>
                <p className="mb-2 text-[10px] uppercase tracking-[0.2em] text-slate-600">
                  Location
                </p>

                <p className="text-sm leading-6 text-slate-400">
                  India
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="relative border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-6 py-6 sm:px-8 md:flex-row md:items-center md:justify-between lg:px-10">
          {/* Copyright */}
          <p className="text-[11px] tracking-wide text-slate-600">
            © {new Date().getFullYear()} Pasupati Infrastructure. All rights
            reserved.
          </p>

          {/* Developer credit */}
          <p className="text-[10px] tracking-wide text-slate-700">
            Developed by{" "}
            <span className="text-slate-600 transition-colors hover:text-slate-400">
              @UtsavKarki
            </span>{" "}
            <span className="text-slate-800">·</span>{" "}
            <span className="text-slate-600 transition-colors hover:text-slate-400">
              @codeDrip
            </span>
          </p>
        </div>
      </div>
    </footer>
  );
}