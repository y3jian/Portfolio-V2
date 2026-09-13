import Image from "next/image";
import { profile } from "@/content/portfolio";
import { PillLink } from "./PillLink";

const socials = [
  { href: profile.github, label: "GitHub", icon: "/assets/github.svg" },
  { href: profile.linkedin, label: "LinkedIn", icon: "/assets/linkedin.svg" },
];

function AnimatedName({ name }: { name: string }) {
  return (
    <h1
      aria-label={name}
      className="font-display text-[length:clamp(3.25rem,10vw,6rem)] leading-[normal] font-bold text-brand"
    >
      {name.split("").map((char, i) => (
        <span
          key={i}
          aria-hidden
          className="inline-block animate-[fade-in_600ms_ease-out_both] transition-transform duration-200 ease-out hover:-translate-y-2 motion-reduce:animate-none motion-reduce:transition-none motion-reduce:hover:translate-y-0"
          style={{ animationDelay: `${i * 40}ms` }}
        >
          {char === " " ? " " : char}
        </span>
      ))}
    </h1>
  );
}

export function Hero() {
  return (
    <section id="top" className="overflow-hidden">
      <div className="relative mx-auto max-w-[1280px] px-4 pt-14 sm:px-8 xl:min-h-[733px] xl:px-0 xl:pt-[156px]">
        <div className="relative z-10 xl:pl-[95px]">
          <p className="font-display text-[length:clamp(1.75rem,4vw,2.5rem)] leading-[normal] font-bold">
            Hello, I&rsquo;m
          </p>
          <AnimatedName name={profile.name} />
          <p className="mt-4 max-w-[538px] leading-[normal] font-light xl:mt-[29px]">
            {profile.tagline}
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-4 xl:mt-[49px] xl:ml-2">
            <PillLink href={profile.resumeUrl} target="_blank" rel="noopener noreferrer">
              Resume
            </PillLink>
            <PillLink href="#contact">Contact Info</PillLink>
            {socials.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                className="rounded-sm transition-opacity hover:opacity-80 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand"
              >
                <Image src={social.icon} alt="" width={33} height={34} unoptimized className="h-[34px] w-[33px]" />
              </a>
            ))}
          </div>
        </div>
        <Image
          src="/assets/yolanda-photo.png"
          alt="Portrait of Yolanda Jian"
          width={1543}
          height={1501}
          sizes="(min-width: 640px) 541px, 100vw"
          loading="eager"
          fetchPriority="high"
          className="mx-auto mt-10 h-auto w-full max-w-[541px] xl:absolute xl:right-[39px] xl:bottom-0 xl:mt-0"
        />
      </div>
    </section>
  );
}
