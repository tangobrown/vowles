import type { Metadata } from "next";
import { Hero } from "@/components/Hero";
import {
  Services,
  AboutTeaser,
  GalleryPreview,
  Testimonials,
  FinalCTA,
} from "@/components/Sections";

export const metadata: Metadata = {
  /* Home uses layout's default title (full brand + tagline). */
  alternates: { canonical: "/" },
};

export default function HomePage() {
  return (
    <main>
      <Hero />
      <Services />
      <AboutTeaser />
      <GalleryPreview />
      <Testimonials />
      <FinalCTA />
    </main>
  );
}
