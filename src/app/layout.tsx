import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { MVTScripts } from "@mvtlab/nextjs-orchestrator";
import { Nav } from "@/components/Nav";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Sample Next.js App",
  description: "Multi-page sample Next.js application",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen flex flex-col`}
      >
        <MVTScripts orchestratorKey="vrJORte58sKGTP9Og_GPCQ" />
        <Nav />
        <div className="flex-1">{children}</div>
      </body>
    </html>
  );
}
