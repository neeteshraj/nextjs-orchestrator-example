import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Team | Sample App",
  description: "Meet the team",
};

const team = [
  { name: "Alex", role: "Frontend" },
  { name: "Sam", role: "Backend" },
  { name: "Jordan", role: "Design" },
];

export default function Team() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-16">
      <h1 className="text-3xl font-bold text-zinc-900 dark:text-zinc-50">
        Team
      </h1>
      <p className="mt-2 text-zinc-600 dark:text-zinc-400">
        Sample team members for this demo.
      </p>
      <ul className="mt-8 grid gap-4 sm:grid-cols-3">
        {team.map(({ name, role }) => (
          <li
            key={name}
            className="rounded-lg border border-zinc-200 bg-white p-4 text-center dark:border-zinc-700 dark:bg-zinc-900"
          >
            <div className="h-12 w-12 mx-auto rounded-full bg-zinc-200 dark:bg-zinc-700 flex items-center justify-center text-lg font-semibold text-zinc-600 dark:text-zinc-300">
              {name[0]}
            </div>
            <p className="mt-2 font-medium text-zinc-900 dark:text-zinc-50">
              {name}
            </p>
            <p className="text-sm text-zinc-600 dark:text-zinc-400">{role}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
