import EndSection from "../../components/EndSection";
import HeroSection from "../../components/Herosection";
import MidSection from "../../components/Midsection";
import { Element } from "react-scroll";

function LandingLayout() {
  return (
    <>
      <HeroSection />
      <Element name="about">
        <MidSection />
      </Element>
      <Element name="Learn">
        <EndSection />
      </Element>
    </>
  );
}

export default LandingLayout;
