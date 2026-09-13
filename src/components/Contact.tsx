"use client";

import { useState } from "react";
import { profile } from "@/content/portfolio";
import { DownloadIcon, GithubIcon, LinkedInIcon, MailIcon } from "./icons";
import { PillLink } from "./PillLink";
import { SectionHeading } from "./SectionHeading";

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
        Let's talk data, or just say hi!
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
