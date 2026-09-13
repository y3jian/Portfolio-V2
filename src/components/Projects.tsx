import { featuredProjects, moreProjects } from "@/content/portfolio";
import { FeaturedProjects } from "./FeaturedProjects";
import { ProjectCarousel } from "./ProjectCarousel";
import { SectionHeading } from "./SectionHeading";

export function Projects() {
  return (
    <section id="projects" className="scroll-mt-[72px] overflow-hidden pt-6 pb-8 sm:scroll-mt-[99px]">
      <SectionHeading>Projects</SectionHeading>
      <div className="mt-6">
        <FeaturedProjects projects={featuredProjects} />
      </div>

      <h3 className="mt-12 text-center font-display text-xl font-bold text-brand sm:text-2xl">
        Browse more projects
      </h3>
      <div className="mt-4">
        <ProjectCarousel projects={moreProjects} />
      </div>
    </section>
  );
}
