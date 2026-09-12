"use client";

import Image from "next/image";
import { useState, type CSSProperties, type KeyboardEvent } from "react";
import type { Project } from "@/content/portfolio";

// Per the Figma carousel frames: each step away from the active card sits 56px lower (on a
// 543.5px card) at 25% opacity. The drop is kept proportional to card width so it scales down.
const STEP_DROP = 56 / 543.5;
const IMAGE_ASPECT = 744 / 926;

export function ProjectCarousel({ projects }: { projects: Project[] }) {
  const [active, setActive] = useState(0);
  const maxDrop = (projects.length - 1) * STEP_DROP;

  function handleKeyDown(event: KeyboardEvent) {
    if (event.key === "ArrowRight") {
      setActive((i) => Math.min(i + 1, projects.length - 1));
    } else if (event.key === "ArrowLeft") {
      setActive((i) => Math.max(i - 1, 0));
    } else {
      return;
    }
    event.preventDefault();
  }

  return (
    <div
      role="region"
      aria-roledescription="carousel"
      aria-label="Projects"
      onKeyDown={handleKeyDown}
      className="relative"
      style={
        {
          "--card-w": "min(543.5px, 78vw)",
          "--gap": "clamp(24px, 5vw, 62px)",
          height: `calc(var(--card-w) * ${IMAGE_ASPECT + maxDrop} + 42px)`,
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
        {projects.map((project, i) => {
          const distance = Math.abs(i - active);
          const isActive = distance === 0;

          return (
            <li
              key={project.name}
              aria-current={isActive}
              className="shrink-0 transition-[opacity,translate] duration-500 ease-out motion-reduce:transition-none"
              style={{
                width: "var(--card-w)",
                opacity: isActive ? 1 : 0.25,
                translate: `0 calc(var(--card-w) * ${distance * STEP_DROP})`,
              }}
            >
              <button
                type="button"
                onClick={() => setActive(i)}
                disabled={isActive}
                aria-label={isActive ? undefined : `Show ${project.name}`}
                className="block w-full cursor-pointer text-left drop-shadow-[0px_4px_2px_rgba(0,0,0,0.25)] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand disabled:cursor-default"
              >
                <div
                  className="relative aspect-[926/744] w-full overflow-hidden bg-white"
                  style={{ borderRadius: "min(84px, calc(var(--card-w) * 0.155))" }}
                >
                  <Image
                    src={project.image}
                    alt={project.imageAlt}
                    fill
                    sizes="(min-width: 700px) 544px, 78vw"
                    className="object-cover"
                    style={{ objectPosition: project.imagePosition }}
                  />
                </div>
                <p
                  className={`mt-[15px] text-center text-[length:clamp(0.875rem,2.2vw,1.25rem)] leading-[normal] font-light transition-colors ${
                    isActive ? "text-black" : "text-ivory"
                  }`}
                >
                  {project.stack}
                </p>
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
