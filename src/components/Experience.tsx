"use client";

import { useEffect, useRef, useState } from "react";
import { roles } from "@/content/portfolio";
import { SectionHeading } from "./SectionHeading";

export function Experience() {
  const [visible, setVisible] = useState<boolean[]>(() => roles.map(() => false));
  const itemRefs = useRef<(HTMLLIElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          const index = Number((entry.target as HTMLElement).dataset.index);
          setVisible((prev) => {
            if (prev[index]) return prev;
            const next = [...prev];
            next[index] = true;
            return next;
          });
          observer.unobserve(entry.target);
        });
      },
      { threshold: 0.2, rootMargin: "0px 0px -10% 0px" },
    );

    itemRefs.current.forEach((el) => el && observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section id="experience" className="scroll-mt-[72px] pt-6 pb-20 sm:scroll-mt-[99px]">
      <SectionHeading>Experience</SectionHeading>
      <ol className="mx-auto mt-[21px] flex max-w-[1280px] flex-col gap-5 px-4 sm:px-8 xl:pr-[66px] xl:pl-[43px]">
        {roles.map((role, i) => (
          <li
            key={`${role.company}-${role.dates}`}
            ref={(el) => {
              itemRefs.current[i] = el;
            }}
            data-index={i}
            className={`flex items-center transition-all duration-700 ease-[cubic-bezier(0.34,1.56,0.64,1)] motion-reduce:transition-none ${
              visible[i] ? "translate-y-0 opacity-100" : "translate-y-16 opacity-0"
            }`}
          >
            <p className="hidden w-[150px] shrink-0 text-right text-sm leading-[normal] font-bold text-brand italic md:block">
              {role.dates}
            </p>

            {/* Timeline: segments extend half the row gap so the line runs unbroken between dots */}
            <div aria-hidden className="relative mr-[21px] ml-[15px] hidden w-[26px] shrink-0 self-stretch md:block">
              <span
                style={{ transformOrigin: "top", transitionDelay: visible[i] ? "150ms" : "0ms" }}
                className={`absolute left-1/2 w-[3px] -translate-x-1/2 bg-brand transition-transform duration-500 ease-out motion-reduce:transition-none ${
                  i === 0 ? "top-1/2" : "-top-2.5"
                } ${i === roles.length - 1 ? "bottom-1/2" : "-bottom-2.5"} ${
                  visible[i] ? "scale-y-100" : "scale-y-0"
                }`}
              />
              <span
                style={{ transitionDelay: visible[i] ? "300ms" : "0ms" }}
                className={`absolute top-1/2 left-0 size-[26px] -translate-y-1/2 rounded-full bg-brand transition-all duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)] motion-reduce:transition-none ${
                  visible[i] ? "scale-100 opacity-100" : "scale-0 opacity-0"
                }`}
              />
            </div>

            <article
              style={{ transitionDelay: visible[i] ? "100ms" : "0ms" }}
              className={`flex-1 rounded-[10px] bg-brand px-6 py-[13px] leading-[normal] text-white transition-all duration-700 ease-[cubic-bezier(0.34,1.56,0.64,1)] motion-reduce:transition-none sm:px-[41px] md:min-h-[141px] ${
                visible[i] ? "scale-100 opacity-100" : "scale-90 opacity-0"
              }`}
            >
              <p className="mb-1 text-sm font-bold text-cream italic md:hidden">{role.dates}</p>
              <h3 className="font-display text-xl font-bold text-cream">{role.title}</h3>
              <p className="text-sm font-light">{role.company}</p>
              <p className="mt-[5px] text-sm font-light">{role.description}</p>
            </article>
          </li>
        ))}
      </ol>
    </section>
  );
}
