import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "FAQ | Sample App",
  description: "Frequently asked questions",
};

const faqs = [
  {
    q: "What is this app?",
    a: "A sample multi-page Next.js application for demonstration and testing.",
  },
  {
    q: "How do I get started?",
    a: "Use the navigation to explore pages. Run npm run dev to start the development server.",
  },
  {
    q: "Can I use this as a template?",
    a: "Yes. Feel free to copy and adapt the structure for your own projects.",
  },
];

export default function FAQ() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-16">
      <h1 className="text-3xl font-bold text-zinc-900 dark:text-zinc-50">
        FAQ
      </h1>
      <p className="mt-2 text-zinc-600 dark:text-zinc-400">
        Frequently asked questions about the sample app.
      </p>
      <dl className="mt-8 space-y-6">
        {faqs.map(({ q, a }) => (
          <div
            key={q}
            className="rounded-lg border border-zinc-200 bg-white p-4 dark:border-zinc-700 dark:bg-zinc-900"
          >
            <dt className="font-semibold text-zinc-900 dark:text-zinc-50">
              {q}
            </dt>
            <dd className="mt-2 text-zinc-600 dark:text-zinc-400">{a}</dd>
          </div>
        ))}
      </dl>
    </div>
  );
}
