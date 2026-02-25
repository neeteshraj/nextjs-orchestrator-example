import Link from "next/link";

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
  { href: "/blog", label: "Blog" },
];

export function Nav() {
  return (
    <nav className="border-b border-zinc-200 dark:border-zinc-800 bg-white/80 dark:bg-zinc-950/80 backdrop-blur sticky top-0 z-10">
      <div className="mx-auto max-w-4xl px-4 sm:px-6">
        <div className="flex h-14 items-center justify-between">
          <Link
            href="/"
            className="text-lg font-semibold text-zinc-900 dark:text-zinc-50"
          >
            Sample App
          </Link>
          <ul className="flex gap-6">
            {links.map(({ href, label }) => (
              <li key={href}>
                <Link
                  href={href}
                  className="text-sm font-medium text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-50 transition-colors"
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}
