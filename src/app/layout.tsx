import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Portfolio - HafizJBI",
  description: "Mohd Hafiz Jumahiddin Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className="theme-transition">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased theme-transition bg-zinc-50 text-zinc-900 selection:bg-purple-500/30 dark:bg-zinc-950 dark:text-zinc-50`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          /* allow transitions on theme change for smoother effect */
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
