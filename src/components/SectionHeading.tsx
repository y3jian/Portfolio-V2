import type { ReactNode } from "react";

export function SectionHeading({ children }: { children: ReactNode }) {
  return (
    <h2 className="text-center font-display text-[length:clamp(3rem,10vw,6rem)] leading-[normal] font-bold text-brand">
      {children}
    </h2>
  );
}
