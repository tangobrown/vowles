import type { Metadata } from "next";
import { GalleryView } from "@/components/GalleryView";
import { JsonLd } from "@/components/JsonLd";
import { breadcrumbJsonLd } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Gallery — Recent Carpentry & Building Work in South Devon",
  description:
    "A look at projects Paul Vowles has completed across South Devon — from loft conversions, extensions and cut roofs to bespoke joinery, kitchens and media walls. Tap any photo to take a closer look.",
  alternates: { canonical: "/gallery" },
  openGraph: {
    title: "Gallery — Recent Carpentry & Building Work in South Devon",
    description:
      "Loft conversions, extensions, cut roofs, kitchens, media walls and bespoke joinery from across South Devon.",
    url: "/gallery",
  },
};

export default function GalleryPage() {
  return (
    <main>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Gallery", path: "/gallery" },
        ])}
      />
      <GalleryView />
    </main>
  );
}
