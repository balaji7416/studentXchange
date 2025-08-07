import MobileNavbar from "../mobile/header/navbar/MobileNavbar";
import HeroSection from "../shared/HeroSection";
import MainFeed from "../shared/MainFeed";
import CategorySection from "../mobile/main/CategorySection";
import Footer from "../shared/Footer";

function MobileLayout() {
  return (
    <>
      <div className="pt-16">
        <MobileNavbar />
        <HeroSection />
        <CategorySection />
        <MainFeed />
        <Footer />
      </div>
    </>
  );
}
export default MobileLayout;
