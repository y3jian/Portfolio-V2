"use client";

import Image from "next/image";
import { useState, type CSSProperties, type KeyboardEvent } from "react";
import type { Project } from "@/content/portfolio";
import { ChevronLeftIcon, ChevronRightIcon, ExternalLinkIcon, GithubIcon } from "./icons";
import { PillLink } from "./PillLink";

// Per the Figma carousel frames: each step away from the active card sits 56px lower (on a
// 543.5px card) at 25% opacity. The drop is kept proportional to card width so it scales down.
const STEP_DROP = 56 / 543.5;
const IMAGE_ASPECT = 744 / 926;
// The Figma frames only ever showed 3 cards, where the farthest card was 2 steps
// from the active one. Capping the drop here keeps that same look as more
// projects are added, instead of the reserved space (and the nav below it)
// growing every time a project is added.
const MAX_DROP_STEPS = 2;

export function ProjectCarousel({ projects }: { projects: Project[] }) {
  const [active, setActive] = useState(0);
  const project = projects[active];

  function goTo(index: number) {
    setActive(Math.min(Math.max(index, 0), projects.length - 1));
  }

  function handleKeyDown(event: KeyboardEvent) {
    if (event.key === "ArrowRight") {
      goTo(active + 1);
    } else if (event.key === "ArrowLeft") {
      goTo(active - 1);
    } else {
      return;
    }
    event.preventDefault();
  }

  return (
    <div onKeyDown={handleKeyDown} className="mx-auto max-w-[1100px]">
      <div
        role="region"
        aria-roledescription="carousel"
        aria-label="Projects"
        className="relative"
        style={
          {
            // Capped by viewport height too, so the whole carousel — image, nav,
            // and the description below it — fits on shorter screens without
            // the section spilling past the fold. 520px is the rest of the
            // section's stacked height (header, heading, nav row, description,
            // section padding) that isn't part of the card itself.
            "--card-w": `min(543.5px, 78vw, calc((100svh - 520px) / ${IMAGE_ASPECT}))`,
            "--gap": "clamp(24px, 5vw, 62px)",
            // Sized to the active card only — the dropped side previews are
            // decorative and allowed to visually spill past this box instead
            // of pushing the nav controls below further down the page.
            height: `calc(var(--card-w) * ${IMAGE_ASPECT} + 42px)`,
          } as CSSProperties
        }
      >
        <ul
          className="absolute top-0 left-1/2 flex transition-transform duration-500 ease-out motion-reduce:transition-none"
          style={{
            gap: "var(--gap)",
            transform: `translateX(calc(var(--card-w) * -0.5 - ${active} * (var(--card-w) + var(--gap))))`,
          }}
        >
          {projects.map((p, i) => {
            const distance = Math.abs(i - active);
            const dropSteps = Math.min(distance, MAX_DROP_STEPS);
            const isActive = distance === 0;

            const imageBox = (
              <div
                className="group relative aspect-[926/744] w-full overflow-hidden bg-white"
                style={{ borderRadius: "min(84px, calc(var(--card-w) * 0.155))" }}
              >
                <Image
                  src={p.image}
                  alt={p.imageAlt}
                  fill
                  sizes="(min-width: 700px) 544px, 78vw"
                  className={`object-cover ${isActive && p.repoUrl ? "transition-transform duration-300 group-hover:scale-105" : ""}`}
                  style={{ objectPosition: p.imagePosition }}
                />
                {isActive && p.repoUrl && (
                  <div className="absolute inset-0 flex items-center justify-center gap-2 bg-black/0 text-white opacity-0 transition-all duration-200 group-hover:bg-black/50 group-hover:opacity-100">
                    <GithubIcon className="size-5" />
                    <span className="text-sm font-bold">View on GitHub</span>
                  </div>
                )}
              </div>
            );
            const caption = (
              <p
                className={`mt-[15px] text-center text-xs leading-[normal] font-light transition-colors ${
                  isActive ? "text-black" : "text-ivory"
                }`}
              >
                {p.stack}
              </p>
            );

            return (
              <li
                key={p.name}
                aria-current={isActive}
                className="shrink-0 transition-[opacity,translate] duration-500 ease-out motion-reduce:transition-none"
                style={{
                  width: "var(--card-w)",
                  opacity: isActive ? 1 : 0.25,
                  translate: `0 calc(var(--card-w) * ${dropSteps * STEP_DROP})`,
                }}
              >
                {isActive ? (
                  p.repoUrl ? (
                    <a
                      href={p.repoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`View ${p.name} on GitHub`}
                      className="block w-full text-left drop-shadow-[0px_4px_2px_rgba(0,0,0,0.25)] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand"
                    >
                      {imageBox}
                      {caption}
                    </a>
                  ) : (
                    <div className="w-full text-left drop-shadow-[0px_4px_2px_rgba(0,0,0,0.25)]">
                      {imageBox}
                      {caption}
                    </div>
                  )
                ) : (
                  <button
                    type="button"
                    onClick={() => goTo(i)}
                    aria-label={`Show ${p.name}`}
                    className="block w-full cursor-pointer text-left drop-shadow-[0px_4px_2px_rgba(0,0,0,0.25)] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand"
                  >
                    {imageBox}
                    {caption}
                  </button>
                )}
              </li>
            );
          })}
        </ul>
      </div>

      {/* relative + z-10: the dropped side-preview cards above can visually spill
          past their (active-card-sized) container and, being absolutely
          positioned, would otherwise paint over these buttons and intercept clicks. */}
      <div className="relative z-10 mt-4 flex items-center justify-center gap-4">
        <button
          type="button"
          onClick={() => goTo(active - 1)}
          disabled={active === 0}
          aria-label="Previous project"
          className="flex size-9 shrink-0 items-center justify-center rounded-full bg-brand text-white transition-opacity hover:bg-brand/85 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand disabled:opacity-30"
        >
          <ChevronLeftIcon className="size-5" />
        </button>

        <div className="flex items-center gap-2">
          {projects.map((p, i) => (
            <button
              key={p.name}
              type="button"
              onClick={() => goTo(i)}
              aria-label={`Go to ${p.name}`}
              aria-current={i === active}
              className={`size-2.5 rounded-full transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand ${
                i === active ? "bg-brand" : "bg-brand/25 hover:bg-brand/50"
              }`}
            />
          ))}
        </div>

        <button
          type="button"
          onClick={() => goTo(active + 1)}
          disabled={active === projects.length - 1}
          aria-label="Next project"
          className="flex size-9 shrink-0 items-center justify-center rounded-full bg-brand text-white transition-opacity hover:bg-brand/85 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand disabled:opacity-30"
        >
          <ChevronRightIcon className="size-5" />
        </button>
      </div>

      <div
        key={project.name}
        className="mx-auto mt-4 max-w-[620px] px-4 text-center animate-[fade-in_400ms_ease-out] motion-reduce:animate-none"
      >
        <h3 className="font-display text-xl font-bold text-brand sm:text-2xl">{project.name}</h3>
        <p className="mt-2 leading-[normal] font-light">{project.description}</p>
        {project.liveUrl && (
          <div className="mt-4 flex flex-wrap justify-center gap-3">
            <PillLink href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="gap-2">
              <ExternalLinkIcon />
              Live
            </PillLink>
          </div>
        )}
      </div>
    </div>
  );
}
