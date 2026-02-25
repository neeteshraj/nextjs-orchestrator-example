import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Services | Sample App",
  description: "What we offer",
};

const services = [
  {
    title: "Static pages",
    description: "Fast, pre-rendered pages with the App Router and optional static generation.",
  },
  {
    title: "Dynamic routes",
    description: "Blog and content pages powered by dynamic [slug] segments.",
  },
  {
    title: "Shared layout",
    description: "Consistent navigation and styling across all pages.",
  },
];

export default function Services() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-16">
      <h1 className="text-3xl font-bold text-zinc-900 dark:text-zinc-50">
        Services
      </h1>
      <p className="mt-2 text-zinc-600 dark:text-zinc-400">
        Sample capabilities demonstrated in this app.
      </p>
      <ul className="mt-8 grid gap-6 sm:grid-cols-1">
        {services.map(({ title, description }) => (
          <li
            key={title}
            className="rounded-lg border border-zinc-200 bg-white p-5 dark:border-zinc-700 dark:bg-zinc-900"
          >
            <h2 className="text-lg font-semibold text-zinc-900 dark:text-zinc-50">
              {title}
            </h2>
            <p className="mt-2 text-zinc-600 dark:text-zinc-400">
              {description}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
}
