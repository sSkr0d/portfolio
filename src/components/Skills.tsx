import React from "react";
import { FaHtml5, FaCss3Alt, FaReact, FaNodeJs } from "react-icons/fa";
import { SiPhp, SiTailwindcss, SiJavascript, SiTypescript, SiLaravel } from "react-icons/si";
import { GrMysql } from "react-icons/gr";
import { FiFigma } from "react-icons/fi";

type Skill = {
  name: string;
  Icon: React.ComponentType<any>;
  color: string;
};

const skills: Skill[] = [
  { name: "HTML", Icon: FaHtml5, color: "#E34F26" },
  { name: "PHP", Icon: SiPhp, color: "#777BB4" },
  { name: "CSS", Icon: FaCss3Alt, color: "#1572B6" },
  { name: "Tailwind", Icon: SiTailwindcss, color: "#06B6D4" },
  { name: "JavaScript", Icon: SiJavascript, color: "#F7DF1E" },
  { name: "TypeScript", Icon: SiTypescript, color: "#3178C6" },
  { name: "React", Icon: FaReact, color: "#61DAFB" },
  { name: "Node.js", Icon: FaNodeJs, color: "#3C873A" },
  { name: "MySQL", Icon: GrMysql, color: "#4479A1" },
  { name: "Figma", Icon: FiFigma, color: "#F24E1E" },
  { name: "Laravel", Icon: SiLaravel, color: "#FF2D20" },
];

export default function Skills() {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 cursor-default">
      {skills.map((s) => {
        const Icon = s.Icon;
        // compute rgba hover background and shadow from hex color
        const hexToRgba = (hex: string, alpha = 1) => {
          const h = hex.replace('#', '');
          const bigint = parseInt(h.length === 3 ? h.split('').map(c => c + c).join('') : h, 16);
          const r = (bigint >> 16) & 255;
          const g = (bigint >> 8) & 255;
          const b = bigint & 255;
          return `rgba(${r}, ${g}, ${b}, ${alpha})`;
        };

        const hoverBg = hexToRgba(s.color, 0.06);
        const hoverShadow = hexToRgba(s.color, 0.18);

        return (
          <div
            key={s.name}
            className="skill group rounded-2xl border border-zinc-200 bg-white/50 p-6 transition-transform duration-200 hover:scale-105 dark:border-white/10 dark:bg-black/20 flex flex-col items-center justify-center h-28"
            style={{ ["--hover-color" as any]: s.color, ["--hover-bg" as any]: hoverBg, ["--hover-shadow" as any]: hoverShadow }}
          >
            <Icon
              className="skill-icon text-3xl text-zinc-500 dark:text-zinc-300"
              aria-hidden
            />
            <div className="mt-3 text-sm font-medium text-zinc-700 dark:text-zinc-300">
              {s.name}
            </div>
          </div>
        );
      })}
    </div>
  );
}
