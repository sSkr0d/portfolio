"use client";

import React, { useState } from "react";
import { ThemeToggle } from "./ThemeToggle";

const navItems = [
  { name: "About", href: "#about" },
  { name: "Experience", href: "#experience" },
  { name: "Education", href: "#education" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed top-6 left-0 right-0 z-50 flex justify-center px-4 pointer-events-none">
      {/* Desktop Nav */}
      <nav className="pointer-events-auto hidden md:flex items-center gap-1 rounded-full border border-zinc-200 bg-white/80 p-2 shadow-lg backdrop-blur-xs backdrop-saturate-150 dark:border-white/10 dark:bg-black/30">
        {navItems.map((item) => (
          <a
            key={item.name}
            href={item.href}
            className="rounded-full px-4 py-2 text-sm font-medium text-zinc-800 transition-all hover:bg-black/5 hover:text-black dark:text-zinc-200 dark:hover:bg-white/10 dark:hover:text-white"
          >
            {item.name}
          </a>
        ))}
        <div className="pl-2 border-l border-zinc-200 dark:border-white/10 ml-1">
          <ThemeToggle />
        </div>
      </nav>

      {/* Mobile Nav Toggle (hamburger left, theme toggle right) */}
      <div className="pointer-events-auto md:hidden flex items-center justify-between w-full max-w-sm gap-2 rounded-full border border-zinc-200 bg-white/80 px-3 py-2 shadow-lg backdrop-blur-xs backdrop-saturate-150 dark:border-white/10 dark:bg-black/10">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="p-2 text-zinc-800 dark:text-zinc-200"
          aria-label="Toggle menu"
        >
          {isOpen ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="3" y1="12" x2="21" y2="12" />
              <line x1="3" y1="6" x2="21" y2="6" />
              <line x1="3" y1="18" x2="21" y2="18" />
            </svg>
          )}
        </button>

        <div className="flex items-center pointer-events-auto">
          <ThemeToggle />
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="pointer-events-auto absolute top-16 left-4 right-4 flex flex-col gap-2 rounded-2xl border border-zinc-200 bg-white/80 p-4 shadow-xl backdrop-blur-xs backdrop-saturate-150 dark:border-white/10 dark:bg-black/10 md:hidden">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              onClick={() => setIsOpen(false)}
              className="rounded-xl px-4 py-3 text-sm font-medium text-zinc-800 transition-all hover:bg-black/5 hover:text-black dark:text-zinc-200 dark:hover:bg-white/10 dark:hover:text-white"
            >
              {item.name}
            </a>
          ))}
        </div>
      )}

      {/* desktop ThemeToggle remains inside desktop nav area if desired; currently ThemeToggle is shown in mobile container and removed from absolute position */}
    </div>
  );
}
