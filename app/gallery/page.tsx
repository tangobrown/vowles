import type { Metadata } from "next";
import { GalleryView } from "@/components/GalleryView";

export const metadata: Metadata = {
  title: "Gallery — Vowles Carpentry & Building",
  description:
    "A look at projects Paul has completed across South Devon — from full builds to the smaller jobs done properly.",
};

export default function GalleryPage() {
  return (
    <main>
      <GalleryView />
    </main>
  );
}
