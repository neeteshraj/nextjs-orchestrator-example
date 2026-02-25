import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Pricing | Sample App",
  description: "Sample pricing plans",
};

const plans = [
  {
    name: "Starter",
    price: "Free",
    description: "For trying out the sample app.",
    features: ["All sample pages", "Blog with 3 posts", "Contact form UI"],
  },
  {
    name: "Pro",
    price: "$9/mo",
    description: "For more serious demos.",
    features: ["Everything in Starter", "More sample data", "Priority support (sample)"],
  },
];

export default function Pricing() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-16">
      <h1 className="text-3xl font-bold text-zinc-900 dark:text-zinc-50">
        Pricing
      </h1>
      <p className="mt-2 text-zinc-600 dark:text-zinc-400">
        Sample pricing tiers. No real billing.
      </p>
      <div className="mt-8 grid gap-6 sm:grid-cols-2">
        {plans.map(({ name, price, description, features }) => (
          <div
            key={name}
            className="rounded-xl border border-zinc-200 bg-white p-6 dark:border-zinc-700 dark:bg-zinc-900"
          >
            <h2 className="text-xl font-semibold text-zinc-900 dark:text-zinc-50">
              {name}
            </h2>
            <p className="mt-1 text-2xl font-bold text-zinc-900 dark:text-zinc-50">
              {price}
            </p>
            <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
              {description}
            </p>
            <ul className="mt-4 space-y-2 text-sm text-zinc-600 dark:text-zinc-400">
              {features.map((f) => (
                <li key={f}>• {f}</li>
              ))}
            </ul>
            <Link
              href="/contact"
              className="mt-6 block w-full rounded-lg bg-zinc-900 py-2.5 text-center text-sm font-medium text-white hover:bg-zinc-700 dark:bg-zinc-100 dark:text-zinc-900 dark:hover:bg-zinc-300"
            >
              Get started
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
