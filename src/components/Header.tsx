import Image from "next/image";

const links = [
  { href: "#projects", label: "Projects" },
  { href: "#experience", label: "Experience" },
  { href: "#contact", label: "Contact" },
];

export function Header() {
  return (
    <header className="sticky top-0 z-50 bg-brand">
      <div className="mx-auto flex h-[72px] max-w-[1280px] items-center justify-between px-4 sm:h-[99px] sm:pr-8 sm:pl-[46px] xl:pr-[110px]">
        <a href="#top" aria-label="Back to top" className="shrink-0">
          <Image
            src="/assets/avatar.png"
            alt=""
            width={57}
            height={60}
            loading="eager"
            className="h-[46px] w-[44px] object-cover sm:h-[60px] sm:w-[57px]"
          />
        </a>
        <nav aria-label="Primary">
          <ul className="flex gap-1 sm:gap-2">
            {links.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="block rounded-lg p-2 font-display text-sm leading-none text-white transition-colors hover:bg-white/15 focus-visible:outline-2 focus-visible:outline-white sm:text-base"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
