import DesktopNavbar from "../desktop/header/navbar/DesktopNavbar";
import HeroSection from "../shared/HeroSection";
import MainFeed from "../shared/MainFeed";
import DesktopCatagories from "../desktop/header/CategoryBar";
import clsx from "clsx";

function DesktopLayout() {
  return (
    <>
      <div className={clsx("min-h-screen")}>
        <DesktopNavbar />
        <DesktopCatagories />
        <HeroSection />
        <MainFeed />
      </div>
    </>
  );
}

export default DesktopLayout;
