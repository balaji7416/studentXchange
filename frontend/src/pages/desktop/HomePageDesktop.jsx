import { HeroBanner, MainFeed } from "@features/home";
import { CategoryBar, DesktopNavbar } from "@features/navbar";

function HomePage() {
  return (
    <>
      <DesktopNavbar />
      <CategoryBar />
      <HeroBanner />
      <MainFeed />
    </>
  );
}

export default HomePage;
