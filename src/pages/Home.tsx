import FashionBrands from "../components/FashionBrands/FashionBrands";
import FeatureHighlights from "../components/FeatureHighlights/FeatureHighlights";
import Header from "../components/Header/Header";
import InstagramStrip from "../components/InstagramStrip/InstagramStrip";
import PeakyBlinders from "../components/PeakyBlinders/PeakyBlinders";
import TestimonialsCarousel from "../components/TestimonialsCarousel/TestimonialsCarousel";
import { instaImages, testimonials } from "../costants";

function HomePage() {
  return (
    <>
      <Header />
      <FashionBrands />
      <PeakyBlinders />
      <FeatureHighlights />
      <InstagramStrip images={instaImages} />
      <TestimonialsCarousel testimonials={testimonials} />
    </>
  );
}

export default HomePage;
