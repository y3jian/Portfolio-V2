import { projects } from "@/content/portfolio";
import { ProjectCarousel } from "./ProjectCarousel";
import { SectionHeading } from "./SectionHeading";

export function Projects() {
  return (
    <section id="projects" className="scroll-mt-[72px] overflow-hidden pt-6 pb-12 sm:scroll-mt-[99px]">
      <SectionHeading>Projects</SectionHeading>
      <div className="mt-[26px]">
        <ProjectCarousel projects={projects} />
      </div>
    </section>
  );
}
