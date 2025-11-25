"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface LiquidSectionProps {
  children: ReactNode;
  className?: string;
  id?: string;
}

export function LiquidSection({ children, className, id }: LiquidSectionProps) {
  return (
    <motion.section
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
      {/* Liquid Glass Container */}
      <div className="relative overflow-hidden rounded-3xl border border-zinc-200 bg-white/40 p-8 shadow-2xl backdrop-blur-md transition-all duration-500 hover:border-purple-500/50 hover:shadow-purple-500/20 hover:bg-white/60 dark:border-white/10 dark:bg-black/40 dark:hover:bg-black/60">
        
        {/* Reflective Sheen Animation */}
        <div className="absolute inset-0 -translate-x-full group-hover:animate-[shimmer_2s_infinite] bg-linear-to-r from-transparent via-black/5 to-transparent dark:via-white/5 z-0 pointer-events-none" />
        
        {/* Content */}
        <div className="relative z-10">
          {children}
        </div>
      </div>
    </motion.section>
  );
}
