import type { Metadata } from "next";
import { GalleryView } from "@/components/GalleryView";
import { JsonLd } from "@/components/JsonLd";
import { breadcrumbJsonLd, pageOpenGraph } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Gallery of Recent Work in South Devon",
  description:
    "Recent carpentry and building projects across South Devon, from loft conversions and extensions to cut roofs, kitchens and bespoke joinery.",
  alternates: { canonical: "/gallery" },
  openGraph: pageOpenGraph({
    title: "Gallery of Recent Work in South Devon | Vowles Carpentry & Building",
    description:
      "Loft conversions, extensions, cut roofs, kitchens, media walls and bespoke joinery from across South Devon.",
    path: "/gallery",
  }),
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
