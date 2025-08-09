import { HeroBanner, MainFeed } from "@features/home";
import { CategoryListBar, MobileNavbar } from "@features/navbar";

function HomePage() {
  return (
    <>
      <MobileNavbar />
      <HeroBanner />
      <CategoryListBar />
      <MainFeed />
    </>
  );
}

export default HomePage;
