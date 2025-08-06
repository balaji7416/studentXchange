import MobileLayout from "./MobileLayout";
import DesktopLayout from "./DesktopLayout";
import useIsmobile from "../../hooks/useIsmobile";

function ResponsiveLayout() {
  const isMobile = useIsmobile();
  return isMobile ? <MobileLayout /> : <DesktopLayout />;
}

export default ResponsiveLayout;
