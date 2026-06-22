import { Hero } from "@/components/Hero";
import {
  Services,
  AboutTeaser,
  GalleryPreview,
  Testimonials,
  FinalCTA,
} from "@/components/Sections";

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
