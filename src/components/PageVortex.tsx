"use client";

import React, { useMemo } from "react";
import { useTheme } from "next-themes";
import { Vortex } from "@/components/ui/vortex";

export default function PageVortex() {
  const { resolvedTheme } = useTheme();

  const props = useMemo(() => {
    if (resolvedTheme === "dark") {
      return {
        backgroundColor: "transparent",
        particleCount: 400,
        baseHue: 268,
        rangeHue: 12,
        sparkChance: 0.05,
        sparkHueBase: 28,
        sparkHueRange: 8,
        baseSpeed: 0.0,
        rangeSpeed: 1.2,
      };
    }

    // light theme
    return {
      backgroundColor: "transparent",
      particleCount: 400,
      baseHue: 268,
      rangeHue: 12,
      sparkChance: 0.05,
      sparkHueBase: 28,
      sparkHueRange: 8,
      baseSpeed: 0.0,
      rangeSpeed: 1.0,
    };
  }, [resolvedTheme]);

  return (
    <div className="pointer-events-none fixed inset-0 z-0">
      <Vortex
        backgroundColor={props.backgroundColor}
        particleCount={props.particleCount}
        baseHue={props.baseHue}
        baseSpeed={props.baseSpeed}
        rangeSpeed={props.rangeSpeed}
        className="w-full h-full"
        containerClassName="absolute inset-0"
      />
    </div>
  );
}
