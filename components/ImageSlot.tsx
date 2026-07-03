import { CSSProperties } from "react";
import Image from "next/image";
import { SLOT_PHOTOS } from "@/lib/photos";

type Props = {
  id: string;
  label: string;
  fit?: "cover" | "contain";
  /* Responsive sizes hint for next/image. Override per-caller when the slot
     displays at a known size (e.g. a full-bleed hero should pass 100vw). */
  sizes?: string;
  className?: string;
  style?: CSSProperties;
};

/* Safe default: serve a full-viewport-width variant. Callers displaying at a
   smaller fraction of the viewport (cards, tiles, portrait) should pass a
   tighter sizes prop to avoid over-fetching. */
const DEFAULT_SIZES = "100vw";

export function ImageSlot({
  id,
  label,
  fit = "cover",
  sizes = DEFAULT_SIZES,
  className = "",
  style,
}: Props) {
  const photo = SLOT_PHOTOS[id];

  if (photo) {
    return (
      <div
        className={`relative h-full w-full overflow-hidden ${className}`}
        style={style}
      >
        <Image
          src={photo}
          alt={label}
          fill
          sizes={sizes}
          style={{ objectFit: fit }}
        />
      </div>
    );
  }

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
