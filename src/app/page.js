import AboutPageImage from "@/components/aboutGallary/page";
import AboutIntro from "@/components/aboutIntro/page";
import Background from "@/components/backgroundChanger/page";
import Slider from "@/components/sliderCom/page";
import Services from "@/components/whatIServices/page";

export default function Home() {
  return (
    <main className="min-h-screen ">
      <Background />
      <AboutIntro />
      <Slider />
      <AboutPageImage />
      <Services />
    </main>
  );
}
