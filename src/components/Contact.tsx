"use client";

import { useState } from "react";
import { profile } from "@/content/portfolio";
import { PillLink } from "./PillLink";
import { SectionHeading } from "./SectionHeading";

function MailIcon() {
  return (
    <svg aria-hidden viewBox="0 0 24 24" fill="currentColor" className="size-4 shrink-0">
      <path d="M1.5 8.67v8.58a3 3 0 0 0 3 3h15a3 3 0 0 0 3-3V8.67l-9.75 5.85a.75.75 0 0 1-.75 0L1.5 8.67Z" />
      <path d="M22.5 6.908V6.75a3 3 0 0 0-3-3h-15a3 3 0 0 0-3 3v.158l10.5 6.3 10.5-6.3Z" />
    </svg>
  );
}

function DownloadIcon() {
  return (
    <svg aria-hidden viewBox="0 0 24 24" fill="currentColor" className="size-4 shrink-0">
      <path d="M12 2.25a.75.75 0 0 1 .75.75v11.19l3.97-3.97a.75.75 0 1 1 1.06 1.06l-5.25 5.25a.75.75 0 0 1-1.06 0L6.22 11.28a.75.75 0 1 1 1.06-1.06l3.97 3.97V3a.75.75 0 0 1 .75-.75Zm-9 15a.75.75 0 0 1 .75.75v2.25a1.5 1.5 0 0 0 1.5 1.5h13.5a1.5 1.5 0 0 0 1.5-1.5V18a.75.75 0 0 1 1.5 0v2.25a3 3 0 0 1-3 3H5.25a3 3 0 0 1-3-3V18a.75.75 0 0 1 .75-.75Z" />
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg aria-hidden viewBox="0 0 24 24" fill="currentColor" className="size-4 shrink-0">
      <path d="M20.45 2H3.55A1.55 1.55 0 0 0 2 3.55v16.9A1.55 1.55 0 0 0 3.55 22h16.9A1.55 1.55 0 0 0 22 20.45V3.55A1.55 1.55 0 0 0 20.45 2ZM8.2 19H5.2V9h3ZM6.7 7.7a1.74 1.74 0 1 1 0-3.48 1.74 1.74 0 0 1 0 3.48ZM19 19h-3v-4.8c0-1.15 0-2.62-1.6-2.62s-1.85 1.25-1.85 2.53V19h-3V9h2.88v1.37h.04c.4-.76 1.38-1.56 2.85-1.56 3.05 0 3.6 2 3.6 4.6Z" />
    </svg>
  );
}

function GithubIcon() {
  return (
    <svg aria-hidden viewBox="0 0 24 24" fill="currentColor" className="size-4 shrink-0">
      <path d="M12 .5C5.73.5.5 5.73.5 12c0 5.08 3.29 9.39 7.86 10.91.58.11.79-.25.79-.56v-2.17c-3.2.7-3.88-1.36-3.88-1.36-.53-1.34-1.29-1.7-1.29-1.7-1.05-.72.08-.71.08-.71 1.17.08 1.78 1.2 1.78 1.2 1.03 1.77 2.7 1.26 3.36.96.1-.75.4-1.26.73-1.55-2.55-.29-5.23-1.28-5.23-5.68 0-1.25.44-2.28 1.18-3.08-.12-.29-.51-1.46.11-3.05 0 0 .97-.31 3.18 1.18a10.9 10.9 0 0 1 5.79 0c2.2-1.49 3.17-1.18 3.17-1.18.63 1.59.24 2.76.12 3.05.74.8 1.18 1.83 1.18 3.08 0 4.41-2.69 5.39-5.25 5.67.41.36.78 1.06.78 2.14v3.17c0 .31.21.68.8.56A10.51 10.51 0 0 0 23.5 12c0-6.27-5.23-11.5-11.5-11.5Z" />
    </svg>
  );
}

export function Contact() {
  const [copied, setCopied] = useState(false);

  async function handleCopyEmail() {
    try {
      await navigator.clipboard.writeText(profile.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    } catch {
      // Clipboard API unavailable — the mailto link still opens as a fallback.
    }
  }

  return (
    <section
      id="contact"
      className="flex min-h-[calc(100svh-72px)] scroll-mt-[72px] flex-col items-center justify-center px-4 pb-16 sm:min-h-[calc(100svh-99px)] sm:scroll-mt-[99px]"
    >
      <SectionHeading>Contact</SectionHeading>
      <p className="mx-auto mt-6 max-w-[538px] text-center leading-[normal] font-light">
        Have a project in mind, or just want to say hi? My inbox is always open.
      </p>
      <ul className="mt-10 flex flex-wrap justify-center gap-4">
        <li className="relative">
          <span
            role="status"
            aria-live="polite"
            className={`pointer-events-none absolute -top-8 left-1/2 -translate-x-1/2 rounded-full bg-black px-3 py-1 text-xs whitespace-nowrap text-white transition-all duration-300 ${
              copied ? "translate-y-0 opacity-100" : "translate-y-1 opacity-0"
            }`}
          >
            Copied!
          </span>
          <PillLink href={`mailto:${profile.email}`} onClick={handleCopyEmail} className="gap-2 transition-transform hover:scale-105">
            <MailIcon />
            {profile.email}
          </PillLink>
        </li>
        <li>
          <PillLink
            href={profile.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="gap-2 transition-transform hover:scale-105"
          >
            <LinkedInIcon />
            LinkedIn
          </PillLink>
        </li>
        <li>
          <PillLink
            href={profile.github}
            target="_blank"
            rel="noopener noreferrer"
            className="gap-2 transition-transform hover:scale-105"
          >
            <GithubIcon />
            GitHub
          </PillLink>
        </li>
        <li>
          <PillLink
            href={profile.resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="gap-2 transition-transform hover:scale-105"
          >
            <DownloadIcon />
            Resume
          </PillLink>
        </li>
      </ul>
    </section>
  );
}
