import HomePageDesktop from "./desktop/HomePageDesktop";
import HomePageMobile from "./mobile/HomePageMobile";
import useIsMobile from "../hooks/useIsmobile";

function HomePage() {
  const isMobile = useIsMobile();
  return <div>{isMobile ? <HomePageMobile /> : <HomePageDesktop />}</div>;
}

export default HomePage;
