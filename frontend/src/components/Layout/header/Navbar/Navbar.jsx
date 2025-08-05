import DesktopNavbar from "./DesktopNavbar";
import MobileNavbar from "./MobileNavbar";
import useIsMobile from "./Ismobile";

function Navbar() {
  const isMobile = useIsMobile();
  return <>{isMobile ? <MobileNavbar /> : <DesktopNavbar />}</>;
}

export default Navbar;
