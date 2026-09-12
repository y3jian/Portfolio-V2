import type { ComponentProps } from "react";

/** Material 3 small round filled button from the Figma design, rendered as a link. */
export function PillLink({ className = "", ...props }: ComponentProps<"a">) {
  return (
    <a
      className={`inline-flex items-center justify-center rounded-full bg-brand px-4 py-2.5 font-label text-sm leading-5 font-medium tracking-[0.1px] whitespace-nowrap text-white transition-colors hover:bg-brand/85 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand ${className}`}
      {...props}
    />
  );
}
