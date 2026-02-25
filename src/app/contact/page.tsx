import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact | Sample App",
  description: "Get in touch",
};

export default function Contact() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-16">
      <h1 className="text-3xl font-bold text-zinc-900 dark:text-zinc-50">
        Contact
      </h1>
      <p className="mt-4 text-zinc-600 dark:text-zinc-400">
        Reach out using the details below or the form (sample only).
      </p>
      <div className="mt-8 space-y-2 text-zinc-600 dark:text-zinc-400">
        <p>
          <span className="font-medium text-zinc-900 dark:text-zinc-50">
            Email:
          </span>{" "}
          hello@sample.app
        </p>
        <p>
          <span className="font-medium text-zinc-900 dark:text-zinc-50">
            Location:
          </span>{" "}
          Sample City, ST
        </p>
      </div>
      <form className="mt-10 space-y-4 max-w-md">
        <div>
          <label
            htmlFor="name"
            className="block text-sm font-medium text-zinc-700 dark:text-zinc-300"
          >
            Name
          </label>
          <input
            id="name"
            type="text"
            className="mt-1 block w-full rounded-md border border-zinc-300 bg-white px-3 py-2 text-zinc-900 shadow-sm dark:border-zinc-600 dark:bg-zinc-800 dark:text-zinc-100"
            placeholder="Your name"
          />
        </div>
        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium text-zinc-700 dark:text-zinc-300"
          >
            Email
          </label>
          <input
            id="email"
            type="email"
            className="mt-1 block w-full rounded-md border border-zinc-300 bg-white px-3 py-2 text-zinc-900 shadow-sm dark:border-zinc-600 dark:bg-zinc-800 dark:text-zinc-100"
            placeholder="you@example.com"
          />
        </div>
        <div>
          <label
            htmlFor="message"
            className="block text-sm font-medium text-zinc-700 dark:text-zinc-300"
          >
            Message
          </label>
          <textarea
            id="message"
            rows={4}
            className="mt-1 block w-full rounded-md border border-zinc-300 bg-white px-3 py-2 text-zinc-900 shadow-sm dark:border-zinc-600 dark:bg-zinc-800 dark:text-zinc-100"
            placeholder="Your message..."
          />
        </div>
        <button
          type="button"
          className="rounded-md bg-zinc-900 px-4 py-2 text-sm font-medium text-white hover:bg-zinc-700 dark:bg-zinc-100 dark:text-zinc-900 dark:hover:bg-zinc-300"
        >
          Send (sample)
        </button>
      </form>
    </div>
  );
}
