import DesktopNavbar from "../desktop/header/navbar/DesktopNavbar";
import HeroSection from "../desktop/header/HeroSection";
import MainFeed from "../desktop/main/MainFeed";
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
