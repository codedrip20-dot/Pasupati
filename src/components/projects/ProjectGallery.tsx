"use client";

import Image from "next/image";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useEffect, useState } from "react";
import { projectImages } from "@/src/data/projects";

export default function ProjectGallery() {
  const shouldReduceMotion = useReducedMotion();
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const totalImages = projectImages.length;

  /* =========================================================
     LIGHTBOX CONTROLS
  ========================================================== */

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  const showPrevious = () => {
    setSelectedImage((current) => {
      if (current === null || totalImages === 0) return current;

      return current === 0 ? totalImages - 1 : current - 1;
    });
  };

  const showNext = () => {
    setSelectedImage((current) => {
      if (current === null || totalImages === 0) return current;

      return current === totalImages - 1 ? 0 : current + 1;
    });
  };

  /* =========================================================
     KEYBOARD NAVIGATION + BODY LOCK
  ========================================================== */

  useEffect(() => {
    if (selectedImage === null) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      switch (event.key) {
        case "Escape":
          setSelectedImage(null);
          break;

        case "ArrowLeft":
          showPrevious();
          break;

        case "ArrowRight":
          showNext();
          break;

        default:
          break;
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = previousOverflow;
    };
  }, [selectedImage, totalImages]);

  return (
    <>
      <section
        id="gallery"
        aria-labelledby="gallery-title"
        className="relative isolate overflow-hidden bg-[#eeeae3] text-[#111916]"
      >
        {/* =====================================================
            BRAND BACKGROUND
        ====================================================== */}

        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 -z-20"
        >
          <Image
            src="/assets/pasupatienvlope.png"
            alt=""
            fill
            loading="lazy"
            sizes="100vw"
            quality={40}
            className="object-cover object-center opacity-[0.24]"
          />

          {/* Warm paper layer */}
          <div className="absolute inset-0 bg-[#eeeae3]/80" />

          {/* Editorial lighting */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_12%,rgba(255,255,255,0.95),transparent_42%)]" />

          <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_65%,rgba(255,255,255,0.55),transparent_38%)]" />

          {/* Bottom fade */}
          <div className="absolute inset-x-0 bottom-0 h-72 bg-gradient-to-t from-[#eeeae3] to-transparent" />
        </div>

        {/* =====================================================
            ARCHITECTURAL GRID
        ====================================================== */}

        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 -z-10"
        >
          <div className="mx-auto h-full max-w-[1440px] border-x border-[#17201d]/[0.055]" />

          <div className="absolute inset-y-0 left-1/2 hidden border-l border-[#17201d]/[0.04] lg:block" />

          <div className="absolute inset-y-0 left-1/4 hidden border-l border-[#17201d]/[0.03] xl:block" />

          <div className="absolute inset-y-0 left-3/4 hidden border-l border-[#17201d]/[0.03] xl:block" />
        </div>

        {/* =====================================================
            CONTENT
        ====================================================== */}

        <div className="relative z-10 mx-auto max-w-7xl px-6 py-24 sm:px-8 sm:py-32 lg:px-12 lg:py-40">
          {/* ===================================================
              HEADER
          ==================================================== */}

          <motion.header
            initial={
              shouldReduceMotion
                ? false
                : {
                    opacity: 0,
                    y: 28,
                  }
            }
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
              amount: 0.2,
            }}
            transition={{
              duration: shouldReduceMotion ? 0 : 0.85,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="mb-16 sm:mb-20 lg:mb-24"
          >
            {/* Top meta */}
            <div className="mb-8 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <span
                  aria-hidden="true"
                  className="h-px w-10 bg-[#b58950] sm:w-14"
                />

                <span className="text-[9px] font-semibold uppercase tracking-[0.32em] text-[#8c6638] sm:text-[10px]">
                  A Glimpse Of Our Work
                </span>
              </div>

              <span className="hidden font-mono text-[9px] tracking-[0.22em] text-[#7d827e] sm:block">
                03 / 04
              </span>
            </div>

            {/* Heading */}
            <h2
              id="gallery-title"
              className="max-w-5xl text-[3.25rem] font-medium leading-[0.88] tracking-[-0.07em] sm:text-6xl md:text-7xl lg:text-[6.4rem]"
            >
              Spaces we have
              <br />

              <span className="text-[#9a713d]">helped shape.</span>
            </h2>

            {/* Description + count */}
            <div className="mt-9 flex flex-col gap-7 border-b border-[#17201d]/10 pb-8 sm:flex-row sm:items-end sm:justify-between">
              <p className="max-w-2xl text-sm leading-7 text-[#4d5652] sm:text-base sm:leading-8">
                A selection of work reflecting the range of environments,
                structures and spaces brought to life through Pasupati
                Infrastructure.
              </p>

              <div className="flex shrink-0 items-center gap-4">
                <span
                  aria-hidden="true"
                  className="h-px w-8 bg-[#b58950]"
                />

                <span className="font-mono text-[9px] tracking-[0.22em] text-[#747b76]">
                  {String(totalImages).padStart(2, "0")} IMAGES
                </span>
              </div>
            </div>
          </motion.header>

          {/* ===================================================
              EDITORIAL GALLERY
          ==================================================== */}

          <div className="grid grid-cols-2 gap-2.5 sm:gap-4 lg:grid-cols-12 lg:gap-5">
            {projectImages.map((image, index) => (
              <GalleryItem
                key={image.id}
                image={image}
                index={index}
                shouldReduceMotion={shouldReduceMotion}
                onOpen={() => setSelectedImage(index)}
              />
            ))}
          </div>

          {/* ===================================================
              FOOTER
          ==================================================== */}

          <motion.div
            initial={
              shouldReduceMotion
                ? false
                : {
                    opacity: 0,
                  }
            }
            whileInView={{
              opacity: 1,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: shouldReduceMotion ? 0 : 0.7,
            }}
            className="mt-14 border-t border-[#17201d]/15 pt-6 sm:mt-20"
          >
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <span className="text-[8px] font-semibold uppercase tracking-[0.3em] text-[#737a76] sm:text-[9px]">
                Construction · Craft · Continuity
              </span>

              <span className="text-[9px] font-semibold uppercase tracking-[0.28em] text-[#9a713d]">
                Built to endure
              </span>
            </div>
          </motion.div>
        </div>

        {/* =====================================================
            CORNER MARKERS
        ====================================================== */}

        <div
          aria-hidden="true"
          className="pointer-events-none absolute left-5 top-5 h-8 w-8 border-l border-t border-[#17201d]/15 sm:left-8 sm:top-8"
        />

        <div
          aria-hidden="true"
          className="pointer-events-none absolute bottom-5 right-5 h-8 w-8 border-b border-r border-[#17201d]/15 sm:bottom-8 sm:right-8"
        />
      </section>

      {/* =======================================================
          LIGHTBOX
      ======================================================== */}

      <AnimatePresence>
        {selectedImage !== null && (
          <GalleryLightbox
            image={projectImages[selectedImage]}
            index={selectedImage}
            total={totalImages}
            shouldReduceMotion={shouldReduceMotion}
            onClose={closeLightbox}
            onPrevious={showPrevious}
            onNext={showNext}
          />
        )}
      </AnimatePresence>
    </>
  );
}

/* ===============================================================
   GALLERY ITEM
================================================================ */

interface GalleryItemProps {
  image: {
    id: string;
    src: string;
    alt: string;
  };
  index: number;
  shouldReduceMotion: boolean | null;
  onOpen: () => void;
}

function GalleryItem({
  image,
  index,
  shouldReduceMotion,
  onOpen,
}: GalleryItemProps) {
  const layout = getGalleryLayout(index);

  return (
    <motion.button
      type="button"
      onClick={onOpen}
      initial={
        shouldReduceMotion
          ? false
          : {
              opacity: 0,
              y: 28,
            }
      }
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{
        once: true,
        amount: 0.08,
      }}
      transition={{
        duration: shouldReduceMotion ? 0 : 0.65,
        delay: shouldReduceMotion
          ? 0
          : Math.min((index % 6) * 0.045, 0.25),
        ease: [0.22, 1, 0.36, 1],
      }}
      className={`group relative overflow-hidden text-left ${layout}`}
      aria-label={`Open project image ${index + 1}: ${image.alt}`}
    >
      <div className="relative h-full min-h-[190px] overflow-hidden bg-[#d4d0c7] sm:min-h-[240px] lg:min-h-[300px]">
        {/* =====================================================
            THUMBNAIL
            Lazy loaded because gallery is below the hero.
        ====================================================== */}

        <Image
          src={image.src}
          alt={image.alt}
          fill
          loading="lazy"
          quality={55}
          sizes="
            (max-width: 640px) 50vw,
            (max-width: 1024px) 50vw,
            (max-width: 1280px) 58vw,
            800px
          "
          className="object-cover transition-transform duration-1000 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.045]"
        />

        {/* Cinematic overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/5 to-transparent opacity-70 transition-opacity duration-700 group-hover:opacity-90" />

        {/* Soft hover wash */}
        <div className="absolute inset-0 bg-white/0 transition-colors duration-500 group-hover:bg-white/[0.04]" />

        {/* Image number */}
        <div className="absolute left-3 top-3 sm:left-4 sm:top-4">
          <span className="font-mono text-[8px] tracking-[0.2em] text-white/75 sm:text-[9px]">
            {String(index + 1).padStart(2, "0")}
          </span>
        </div>

        {/* Open indicator */}
        <div className="absolute bottom-3 right-3 sm:bottom-4 sm:right-4">
          <span className="flex h-8 w-8 items-center justify-center border border-white/35 bg-black/10 text-xs text-white backdrop-blur-md transition-all duration-500 group-hover:border-[#f0c982] group-hover:bg-[#f0c982] group-hover:text-[#101715] sm:h-9 sm:w-9">
            <span className="transition-transform duration-500 group-hover:-translate-y-0.5 group-hover:translate-x-0.5">
              ↗
            </span>
          </span>
        </div>

        {/* Mobile bottom line */}
        <div className="absolute bottom-0 left-0 h-px w-0 bg-[#f0c982] transition-all duration-700 group-hover:w-full" />
      </div>
    </motion.button>
  );
}

/* ===============================================================
   EDITORIAL GRID RHYTHM
================================================================ */

function getGalleryLayout(index: number) {
  const layouts = [
    "lg:col-span-7 lg:row-span-2",
    "lg:col-span-5",
    "lg:col-span-5",

    "lg:col-span-4",
    "lg:col-span-4",
    "lg:col-span-4",

    "lg:col-span-7 lg:row-span-2",
    "lg:col-span-5",
    "lg:col-span-5",

    "lg:col-span-4",
    "lg:col-span-4",
    "lg:col-span-4",

    "lg:col-span-7 lg:row-span-2",
    "lg:col-span-5",
    "lg:col-span-5",

    "lg:col-span-4",
    "lg:col-span-4",
    "lg:col-span-4",

    "lg:col-span-7",
    "lg:col-span-5",
    "lg:col-span-5",
    "lg:col-span-12",
  ];

  return layouts[index % layouts.length];
}

/* ===============================================================
   LIGHTBOX
================================================================ */

interface GalleryLightboxProps {
  image: {
    id: string;
    src: string;
    alt: string;
  };
  index: number;
  total: number;
  shouldReduceMotion: boolean | null;
  onClose: () => void;
  onPrevious: () => void;
  onNext: () => void;
}

function GalleryLightbox({
  image,
  index,
  total,
  shouldReduceMotion,
  onClose,
  onPrevious,
  onNext,
}: GalleryLightboxProps) {
  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: 1,
      }}
      exit={{
        opacity: 0,
      }}
      transition={{
        duration: shouldReduceMotion ? 0 : 0.25,
      }}
      className="fixed inset-0 z-[100] flex items-center justify-center bg-[#050706]/95 p-3 backdrop-blur-xl sm:p-6 lg:p-10"
      role="dialog"
      aria-modal="true"
      aria-label="Project image viewer"
      onClick={onClose}
    >
      {/* =====================================================
          TOP BAR
      ====================================================== */}

      <div
        className="absolute left-4 right-4 top-4 z-30 flex items-center justify-between sm:left-8 sm:right-8 sm:top-8"
        onClick={(event) => event.stopPropagation()}
      >
        <span className="font-mono text-[9px] tracking-[0.22em] text-white/40">
          PASUPATI / PROJECTS
        </span>

        <button
          type="button"
          onClick={onClose}
          aria-label="Close image viewer"
          className="flex h-10 w-10 items-center justify-center border border-white/20 text-xl font-light text-white/70 transition-all duration-300 hover:border-[#f0c982] hover:bg-[#f0c982] hover:text-[#101715]"
        >
          ×
        </button>
      </div>

      {/* =====================================================
          PREVIOUS
      ====================================================== */}

      <button
        type="button"
        onClick={(event) => {
          event.stopPropagation();
          onPrevious();
        }}
        aria-label="Previous image"
        className="group absolute left-3 top-1/2 z-30 flex h-11 w-11 -translate-y-1/2 items-center justify-center border border-white/15 bg-black/20 text-lg text-white/60 backdrop-blur-md transition-all duration-300 hover:border-[#f0c982] hover:bg-[#f0c982] hover:text-[#101715] sm:left-7 sm:h-12 sm:w-12"
      >
        <span className="transition-transform duration-300 group-hover:-translate-x-0.5">
          ←
        </span>
      </button>

      {/* =====================================================
          NEXT
      ====================================================== */}

      <button
        type="button"
        onClick={(event) => {
          event.stopPropagation();
          onNext();
        }}
        aria-label="Next image"
        className="group absolute right-3 top-1/2 z-30 flex h-11 w-11 -translate-y-1/2 items-center justify-center border border-white/15 bg-black/20 text-lg text-white/60 backdrop-blur-md transition-all duration-300 hover:border-[#f0c982] hover:bg-[#f0c982] hover:text-[#101715] sm:right-7 sm:h-12 sm:w-12"
      >
        <span className="transition-transform duration-300 group-hover:translate-x-0.5">
          →
        </span>
      </button>

      {/* =====================================================
          IMAGE

          User already opened the lightbox, so load eagerly.
      ====================================================== */}

      <motion.div
        initial={
          shouldReduceMotion
            ? false
            : {
                opacity: 0,
                scale: 0.97,
              }
        }
        animate={{
          opacity: 1,
          scale: 1,
        }}
        exit={{
          opacity: 0,
          scale: 0.98,
        }}
        transition={{
          duration: shouldReduceMotion ? 0 : 0.35,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="relative h-[72vh] w-full max-w-7xl"
        onClick={(event) => event.stopPropagation()}
      >
        <Image
          src={image.src}
          alt={image.alt}
          fill
          priority
          quality={75}
          sizes="
            (max-width: 1280px) 95vw,
            1280px
          "
          className="object-contain"
        />
      </motion.div>

      {/* =====================================================
          BOTTOM INFO
      ====================================================== */}

      <div className="absolute bottom-5 left-1/2 z-30 flex -translate-x-1/2 items-center gap-5 whitespace-nowrap sm:bottom-8">
        <span className="font-mono text-[9px] tracking-[0.2em] text-white/45">
          {String(index + 1).padStart(2, "0")}
        </span>

        <span
          aria-hidden="true"
          className="h-px w-8 bg-white/20"
        />

        <span className="font-mono text-[9px] tracking-[0.2em] text-white/30">
          {String(total).padStart(2, "0")}
        </span>
      </div>
    </motion.div>
  );
}