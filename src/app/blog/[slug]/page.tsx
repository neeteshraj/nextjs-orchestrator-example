import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

const posts: Record<
  string,
  { title: string; excerpt: string; body: string }
> = {
  "first-post": {
    title: "First Post",
    excerpt: "Introduction to the sample blog.",
    body: "This is the first sample post. It shows how dynamic routes work in the Next.js App Router. The [slug] segment matches the URL and is passed to the page component.",
  },
  "second-post": {
    title: "Second Post",
    excerpt: "More sample content for the multi-page app.",
    body: "Here is more content for the second post. You can use generateStaticParams to pre-render these pages at build time, or leave them to be rendered on demand.",
  },
  "third-post": {
    title: "Third Post",
    excerpt: "Dynamic routes in Next.js App Router.",
    body: "The blog uses a dynamic [slug] route. Each post is stored in a simple object; in a real app you might fetch from a CMS or database.",
  },
};

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return Object.keys(posts).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = posts[slug];
  if (!post) return { title: "Post | Sample App" };
  return {
    title: `${post.title} | Sample App`,
    description: post.excerpt,
  };
}

export default async function BlogPost({ params }: Props) {
  const { slug } = await params;
  const post = posts[slug];
  if (!post) notFound();

  return (
    <div className="mx-auto max-w-3xl px-4 py-16">
      <Link
        href="/blog"
        className="text-sm font-medium text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-50"
      >
        ← Back to Blog
      </Link>
      <article className="mt-6">
        <h1 className="text-3xl font-bold text-zinc-900 dark:text-zinc-50">
          {post.title}
        </h1>
        <p className="mt-2 text-zinc-600 dark:text-zinc-400">{post.excerpt}</p>
        <div className="mt-6 prose prose-zinc dark:prose-invert max-w-none">
          <p className="text-zinc-700 dark:text-zinc-300">{post.body}</p>
        </div>
      </article>
    </div>
  );
}
