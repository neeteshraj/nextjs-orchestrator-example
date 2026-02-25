import Link from "next/link";

export default function Home() {
  return (
    <div className="flex min-h-[calc(100vh-3.5rem)] items-center justify-center bg-zinc-50 dark:bg-zinc-950">
      <main className="mx-auto max-w-3xl px-4 py-16 text-center">
        <h1 className="text-4xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50 sm:text-5xl">
          Welcome to the Sample App
        </h1>
        <p className="mt-4 text-lg text-zinc-600 dark:text-zinc-400">
          A multi-page Next.js application with Home, About, Contact, and Blog.
        </p>
        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <Link
            href="/about"
            className="rounded-full bg-zinc-900 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-zinc-700 dark:bg-zinc-100 dark:text-zinc-900 dark:hover:bg-zinc-300"
          >
            About
          </Link>
          <Link
            href="/contact"
            className="rounded-full border border-zinc-300 bg-white px-6 py-3 text-sm font-medium text-zinc-700 transition-colors hover:bg-zinc-50 dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-300 dark:hover:bg-zinc-800"
          >
            Contact
          </Link>
          <Link
            href="/blog"
            className="rounded-full border border-zinc-300 bg-white px-6 py-3 text-sm font-medium text-zinc-700 transition-colors hover:bg-zinc-50 dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-300 dark:hover:bg-zinc-800"
          >
            Blog
          </Link>
        </div>
      </main>
    </div>
  );
}
