import { GalleryStandOut } from "../components/GalleryStandOut";
import { GalleryTransform } from "../components/GalleryTransform";
import { HeroSection } from "../components/HeroSection";
import { Gallery} from "../components/Gallery";
import { NavBar } from "../components/NavBar";
import { PhotographyGraphics } from "../components/PhotograhyGraphics";
import { Testimonials } from "../components/Testimonials";
import { Footer } from "../components/Footer";
function Home() {
  return (
    <>
      <div className="min-h-screen mx-auto relative overflow-x-hidden">
        <NavBar />
        <HeroSection />
        <GalleryTransform />
        <GalleryStandOut/>
        <PhotographyGraphics/>
        <Testimonials/>
        <Gallery/>
        <Footer/>
      </div>
    </>
  );
}

export default Home;
