import MobileNavbar from "../mobile/header/navbar/MobileNavbar";
import HeroSection from "../shared/HeroSection";
import MainFeed from "../shared/MainFeed";

function MobileLayout() {
  return (
    <>
      <div className="pt-16">
        <MobileNavbar />
        <HeroSection />
        <MainFeed />
      </div>
    </>
  );
}
export default MobileLayout;
