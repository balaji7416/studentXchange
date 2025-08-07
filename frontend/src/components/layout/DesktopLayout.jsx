import DesktopNavbar from "../desktop/header/navbar/DesktopNavbar";
import HeroSection from "../shared/HeroSection";
import MainFeed from "../shared/MainFeed";
import DesktopCatagories from "../desktop/header/CategoryBar";
import Footer from "../shared/Footer";
import clsx from "clsx";

function DesktopLayout() {
  return (
    <>
      <div className={clsx("min-h-screen")}>
        <DesktopNavbar />
        <DesktopCatagories />
        <HeroSection />
        <MainFeed />
        <Footer />
      </div>
    </>
  );
}

export default DesktopLayout;
