import Searchbar from "../../../shared/Searchbar";
import Logo from "../../../shared/Logo";
import Links from "./navComponents/Links";
import Location from "./navComponents/Location";
import DesktopCatagories from "../CategoryBar";
import clsx from "clsx";

function DesktopNavbar() {
  return (
    <>
      <nav
        className={clsx(
          "bg-gray-100 shadow-md  w-full",
          "fixed top-0 left-0 z-50"
        )}
      >
        <div className={clsx("flex items-center justify-between p-4")}>
          <Logo text="ISMart"></Logo>
          <Location></Location>
          <Searchbar styles="flex-grow max-w-md" />
          <Links />
        </div>
      </nav>
    </>
  );
}

export default DesktopNavbar;
