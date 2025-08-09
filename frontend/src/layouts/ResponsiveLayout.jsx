import MobileLayout from "./MobileLayout";
import DesktopLayout from "./DesktopLayout";
import useIsmobile from "../hooks/useIsmobile";
import { Outlet } from "react-router-dom";

function ResponsiveLayout() {
  const isMobile = useIsmobile();
  return (
    <div>
      {isMobile ? (
        <MobileLayout>
          <Outlet />
        </MobileLayout>
      ) : (
        <DesktopLayout>
          <Outlet />
        </DesktopLayout>
      )}
    </div>
  );
}

export default ResponsiveLayout;
