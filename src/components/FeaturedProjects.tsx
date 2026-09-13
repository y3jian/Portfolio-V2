import Image from "next/image";
import type { Project } from "@/content/portfolio";
import { ExternalLinkIcon, GithubIcon } from "./icons";
import { PillLink } from "./PillLink";

// All three featured cards crop to the Stock analysis assistant screenshot's
// aspect ratio (307:229) so the grid reads as one consistent row of tiles.
const FEATURED_ASPECT = "307/229";

export function FeaturedProjects({ projects }: { projects: Project[] }) {
  return (
    <div className="mx-auto grid max-w-[1280px] grid-cols-1 gap-8 px-4 sm:px-8 md:grid-cols-3">
      {projects.map((project, i) => {
        return (
          <article key={project.name} className="flex flex-col overflow-hidden rounded-2xl bg-white shadow-md">
            {project.repoUrl ? (
              <a
                href={project.repoUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`View ${project.name} on GitHub`}
                className="group relative block w-full overflow-hidden focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-brand"
                style={{ aspectRatio: FEATURED_ASPECT }}
              >
                <Image
                  src={project.image}
                  alt={project.imageAlt}
                  fill
                  priority={i === 0}
                  sizes="(min-width: 768px) 33vw, 90vw"
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                  style={{ objectPosition: project.imagePosition }}
                />
                <div className="absolute inset-0 flex items-center justify-center gap-2 bg-black/0 text-white opacity-0 transition-all duration-200 group-hover:bg-black/50 group-hover:opacity-100">
                  <GithubIcon className="size-5" />
                  <span className="text-sm font-bold">View on GitHub</span>
                </div>
              </a>
            ) : (
              <div className="relative w-full overflow-hidden" style={{ aspectRatio: FEATURED_ASPECT }}>
                <Image
                  src={project.image}
                  alt={project.imageAlt}
                  fill
                  priority={i === 0}
                  sizes="(min-width: 768px) 33vw, 90vw"
                  className="object-cover"
                  style={{ objectPosition: project.imagePosition }}
                />
              </div>
            )}
            <div className="flex flex-1 flex-col px-5 py-4">
              <h3 className="font-display text-lg font-bold text-brand">{project.name}</h3>
              <p className="mt-1 text-xs font-light text-black/60">{project.stack}</p>
              <p className="mt-2 flex-1 text-sm leading-[normal] font-light">{project.description}</p>
              {project.liveUrl && (
                <div className="mt-4 flex flex-wrap gap-3">
                  <PillLink href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="gap-2">
                    <ExternalLinkIcon />
                    Live
                  </PillLink>
                </div>
              )}
            </div>
          </article>
        );
      })}
    </div>
  );
}
