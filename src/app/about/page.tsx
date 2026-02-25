import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About | Sample App",
  description: "Learn more about this sample Next.js application",
};

export default function About() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-16">
      <h1 className="text-3xl font-bold text-zinc-900 dark:text-zinc-50">
        About
      </h1>
      <p className="mt-4 text-zinc-600 dark:text-zinc-400">
        This is a sample multi-page Next.js application built with the App
        Router. It demonstrates routing, shared layout with navigation, and
        static and dynamic pages.
      </p>
      <div className="mt-8 space-y-4 text-zinc-600 dark:text-zinc-400">
        <p>
          Pages include a home landing, this about page, a contact page, and a
          blog with a list and individual post routes.
        </p>
        <p>
          The app uses Next.js 16, React 19, TypeScript, and Tailwind CSS.
        </p>
      </div>
    </div>
  );
}
