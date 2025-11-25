export function Footer() {
  return (
    <footer className="w-full">
      <div className="w-full bg-transparent backdrop-blur-xl border-t border-zinc-200 dark:border-white/10 py-4 text-center text-sm text-zinc-600 dark:text-zinc-400">
        © {new Date().getFullYear()} Mohd Hafiz Jumahiddin. Built with Next.js.
      </div>
    </footer>
  );
}

export default Footer;
