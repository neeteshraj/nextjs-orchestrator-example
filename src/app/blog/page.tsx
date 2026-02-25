import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Blog | Sample App",
  description: "Sample blog posts",
};

const posts = [
  { slug: "first-post", title: "First Post", excerpt: "Introduction to the sample blog." },
  { slug: "second-post", title: "Second Post", excerpt: "More sample content for the multi-page app." },
  { slug: "third-post", title: "Third Post", excerpt: "Dynamic routes in Next.js App Router." },
];

export default function Blog() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-16">
      <h1 className="text-3xl font-bold text-zinc-900 dark:text-zinc-50">
        Blog
      </h1>
      <p className="mt-2 text-zinc-600 dark:text-zinc-400">
        Sample posts using dynamic routes.
      </p>
      <ul className="mt-8 space-y-6">
        {posts.map(({ slug, title, excerpt }) => (
          <li key={slug}>
            <Link
              href={`/blog/${slug}`}
              className="block rounded-lg border border-zinc-200 bg-white p-4 transition-colors hover:border-zinc-300 hover:bg-zinc-50 dark:border-zinc-700 dark:bg-zinc-900 dark:hover:border-zinc-600 dark:hover:bg-zinc-800"
            >
              <h2 className="text-xl font-semibold text-zinc-900 dark:text-zinc-50">
                {title}
              </h2>
              <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">
                {excerpt}
              </p>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
