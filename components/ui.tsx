import { ElementType, HTMLAttributes, ReactNode } from "react";

export function Container({
  className = "",
  children,
}: {
  className?: string;
  children: ReactNode;
}) {
  return (
    <div className={`mx-auto w-full max-w-[1240px] px-5 sm:px-8 ${className}`}>
      {children}
    </div>
  );
}

export const buttonBase =
  "inline-flex items-center justify-center gap-2 whitespace-nowrap font-semibold tracking-wide transition-all duration-200 px-6 py-3.5 text-[15px] focus:outline-none focus-visible:ring-2 focus-visible:ring-brand/60";

export type ButtonVariant = "primary" | "ghost" | "dark";

export const buttonVariants: Record<ButtonVariant, string> = {
  primary: "bg-brand text-ink hover:bg-brandDark",
  ghost: "border border-white/25 text-white hover:border-brand hover:text-brand",
  dark: "bg-ink text-white hover:bg-black",
};

type ButtonProps = {
  href?: string;
  variant?: ButtonVariant;
  className?: string;
  children: ReactNode;
} & Omit<HTMLAttributes<HTMLAnchorElement>, "children">;

export function Button({
  href = "#",
  variant = "primary",
  className = "",
  children,
  ...rest
}: ButtonProps) {
  return (
    <a href={href} className={`${buttonBase} ${buttonVariants[variant]} ${className}`} {...rest}>
      {children}
    </a>
  );
}

export function Eyebrow({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <span className="text-[12px] font-semibold uppercase tracking-[0.22em] text-brand">
        {children}
      </span>
    </div>
  );
}

/* Decorative corner motif — purely visual. */
export function CornerLines({ className = "" }: { className?: string }) {
  const mask =
    "radial-gradient(125% 125% at 100% 0%, transparent 0%, transparent 6%, rgba(0,0,0,0.9) 52%, transparent 96%)";
  return (
    <div
      aria-hidden="true"
      className={`pointer-events-none absolute right-0 top-0 z-0 h-[280px] w-[420px] max-w-[60%] ${className}`}
      style={{
        backgroundImage:
          "repeating-linear-gradient(0deg, rgba(255,255,255,0.05) 0px, rgba(255,255,255,0.05) 2px, transparent 2px, transparent 10px)",
        WebkitMaskImage: mask,
        maskImage: mask,
      }}
    />
  );
}

/* Entrance animation — pure CSS, transform-only. */
type RevealProps = {
  children: ReactNode;
  delay?: number;
  className?: string;
  as?: ElementType;
};

export function Reveal({ children, delay = 0, className = "", as: Tag = "div" }: RevealProps) {
  return (
    <Tag
      className={`reveal ${className}`}
      style={delay ? { animationDelay: `${delay}ms` } : undefined}
    >
      {children}
    </Tag>
  );
}
