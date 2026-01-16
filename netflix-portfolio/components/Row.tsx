"use client";

import { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function Row({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  const rowRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (!rowRef.current) return;

    const scrollAmount = rowRef.current.clientWidth * 0.85;
    rowRef.current.scrollBy({
      left: direction === "left" ? -scrollAmount : scrollAmount,
      behavior: "smooth",
    });
  };

  return (
    <section className="mb-20">
      <h2 className="text-2xl font-semibold tracking-tight mb-5">{title}</h2>

      <div className="relative group">
        {/* Left Arrow */}
        <button
          onClick={() => scroll("left")}
          className="
            absolute left-0 top-1/2 -translate-y-1/2
            z-30
            hidden group-hover:flex
            h-10 w-10 items-center justify-center
            bg-black/50 hover:bg-black/80 backdrop-blur-sm
            rounded-full
            transition
          "
        >
          <ChevronLeft className="text-white" />
        </button>

        {/* Scroll Container */}
        <div
        ref={rowRef}
        tabIndex={-1}
        className="
            flex gap-6 py-6
            overflow-x-scroll
            overflow-y-visible
            scroll-smooth
            no-scrollbar
            overscroll-x-contain
        "
        >
          {children}
        </div>

        {/* Right Arrow */}
        <button
          onClick={() => scroll("right")}
          className="
            absolute right-0 top-1/2 -translate-y-1/2
            z-30
            hidden group-hover:flex
            h-10 w-10 items-center justify-center
            bg-black/50 hover:bg-black/80 backdrop-blur-sm
            rounded-full
            transition
          "
        >
          <ChevronRight className="text-white" />
        </button>
      </div>
    </section>
  );
}
