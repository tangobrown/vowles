import { CSSProperties } from "react";

type Props = {
  id: string;
  label: string;
  fit?: "cover" | "contain";
  className?: string;
  style?: CSSProperties;
};

/* Dark, striped placeholder. Drop a real photo at /public/images/<id>.jpg
   later and swap this for <Image src={`/images/${id}.jpg`} alt={label} … />.
   Kept lightweight on purpose: no JS, no images, no layout shift. */
export function ImageSlot({ id, label, fit = "cover", className = "", style }: Props) {
  return (
    <div
      data-slot-id={id}
      data-fit={fit}
      className={`relative flex h-full w-full items-end overflow-hidden ${className}`}
      style={{
        background:
          "#1b1c1e repeating-linear-gradient(135deg, rgba(255,255,255,0.035) 0 2px, transparent 2px 11px)",
        ...style,
      }}
      aria-label={label}
    >
      <span className="pointer-events-none m-3 inline-block bg-ink/55 px-2.5 py-1 text-[11px] font-medium tracking-wide text-white/55">
        {label}
      </span>
    </div>
  );
}
