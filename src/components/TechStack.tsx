"use client";

import { useEffect, useRef, useState } from "react";

interface TechStackProps {
  items: string[];
}

export default function TechStack({ items }: TechStackProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const measureRef = useRef<HTMLDivElement>(null);
  const [visibleCount, setVisibleCount] = useState(items.length);

  useEffect(() => {
    const calculate = () => {
      if (!containerRef.current || !measureRef.current) return;

      const containerWidth = containerRef.current.offsetWidth;
      const itemNodes = measureRef.current.children;
      const gap = 8; // gap-2 is 0.5rem = 8px
      const badgeWidth = 35; // Approximate width for "+N" badge

      // 1. Calculate total width needed for all items.
      let totalWidth = 0;
      for (let i = 0; i < itemNodes.length; i++) {
        totalWidth += (itemNodes[i] as HTMLElement).offsetWidth + (i > 0 ? gap : 0);
      }

      // If everything fits, show all
      if (totalWidth <= containerWidth) {
        setVisibleCount(items.length);
        return;
      }

      // 2. If not, calculate how many fit with the badge
      let usedWidth = 0;
      let fitCount = 0;
      
      for (let i = 0; i < itemNodes.length; i++) {
        const itemWidth = (itemNodes[i] as HTMLElement).offsetWidth;
        const gapSpace = i > 0 ? gap : 0;
        
        // Check if adding this item + gap + badge fits
        // We assume if we are in this loop, we need the badge, so we always reserve space for it.
        if (usedWidth + gapSpace + itemWidth + gap + badgeWidth <= containerWidth) {
          usedWidth += gapSpace + itemWidth;
          fitCount++;
        } else {
          break;
        }
      }
      
      // Ensure we show at least 0 items if even the first one doesn't fit with badge?
      // Or maybe just show 1 if it fits without badge but we forced badge logic?
      // The logic above is safe.
      setVisibleCount(fitCount);
    };

    // Run initially and on resize
    calculate();
    
    // We also need to run it after a short delay to ensure fonts/layout are stable
    const timeoutId = setTimeout(calculate, 0);

    window.addEventListener("resize", calculate);
    return () => {
      window.removeEventListener("resize", calculate);
      clearTimeout(timeoutId);
    };
  }, [items]);

  return (
    <div className="w-full relative">
      {/* Visible List */}
      <div ref={containerRef} className="flex gap-2 w-full overflow-hidden whitespace-nowrap items-center">
        {items.slice(0, visibleCount).map((tech, index) => (
          <span
            key={index}
            className="text-xs font-medium text-zinc-500 bg-black/5 px-2 py-1 rounded-md border border-black/5 dark:text-zinc-400 dark:bg-white/5 dark:border-white/5 whitespace-nowrap"
          >
            {tech}
          </span>
        ))}
        {visibleCount < items.length && (
          <span className="text-xs font-medium text-zinc-500 bg-black/5 px-2 py-1 rounded-md border border-black/5 dark:text-zinc-400 dark:bg-white/5 dark:border-white/5 whitespace-nowrap">
            +{items.length - visibleCount}
          </span>
        )}
      </div>

      {/* Hidden Measurement List - Must match styles exactly */}
      <div
        ref={measureRef}
        className="flex gap-2 absolute top-0 left-0 opacity-0 pointer-events-none invisible"
        aria-hidden="true"
      >
        {items.map((tech, index) => (
          <span
            key={index}
            className="text-xs font-medium px-2 py-1 border whitespace-nowrap"
          >
            {tech}
          </span>
        ))}
      </div>
    </div>
  );
}
