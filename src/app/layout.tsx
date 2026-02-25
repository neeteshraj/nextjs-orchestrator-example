import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
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
        {/* Anti-flickering: hides body until the engine applies variants or the timeout fires */}
        <Script
          id="anti-flicker"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{
            __html: `var timeout=3000;!(function(h,i,d,e){var t,n=h.createElement("style");(n.id=e),(n.innerHTML="body{opacity:0}"),h.head.appendChild(n),(t=d),(i.rmfk=function(){var t=h.getElementById(e);t&&t.parentNode.removeChild(t)}),setTimeout(i.rmfk,t)})(document,window,timeout,"abhide");`,
          }}
        />
        {/* MVTLab orchestrator engine */}
        <Script
          src="https://staging-svc.mvtlab.io/scripts/engine.js"
          data-project-key="S6kCanTUhDPa4DAoeEVKvg"
          data-mvt="engine"
          data-mvt-engine="true"
          data-flicker-class="abtest-hidden"
          crossOrigin="anonymous"
          strategy="afterInteractive"
        />
        <Nav />
        <div className="flex-1">{children}</div>
      </body>
    </html>
  );
}
