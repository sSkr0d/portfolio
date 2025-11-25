"use client";

import { motion, useInView } from "framer-motion";
import { ReactNode, useRef } from "react";
import { cn } from "@/lib/utils";

interface LiquidSectionProps {
  children: ReactNode;
  className?: string;
  id?: string;
}

export function LiquidSection({ children, className, id }: LiquidSectionProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.5 });

  return (
    <motion.section
      ref={ref}
      id={id}
      initial={{ opacity: 0, scale: 1, y: 0 }}
      whileInView={{ opacity: 1, scale: 1, y: 0 }}
      viewport={{ once: false, margin: "-100px" }}
      transition={{
        type: "spring",
        stiffness: 100,
        damping: 15,
        mass: 1,
      }}
      className={cn("scroll-mt-32 relative group", className)}
    >
      {/* Liquid Glass Background (Clipped) */}
      <div className={cn(
        "absolute inset-0 overflow-hidden rounded-3xl border border-zinc-200 bg-white/40 shadow-2xl backdrop-blur-md transition-all duration-500",
        "group-hover:border-purple-500/50 group-hover:shadow-purple-500/20 ",
        "dark:border-white/10 dark:bg-black/40 dark:hover:bg-black/60",
        isInView && "border-purple-500/50 shadow-[0_0_20px_rgba(168,85,247,0.2)] bg-white/60 dark:border-purple-500/30 dark:shadow-[0_0_20px_rgba(168,85,247,0.15)] dark:bg-black/50"
      )}>
        {/* Reflective Sheen Animation */}
        <div className="absolute inset-0 -translate-x-full group-hover:animate-[shimmer_2s_infinite] bg-linear-to-r from-transparent via-black/5 to-transparent dark:via-white/5 z-0 pointer-events-none" />
      </div>

      {/* Content (Unclipped) */}
      <div className="relative z-10 p-8">
        {children}
      </div>
    </motion.section>
  );
}
