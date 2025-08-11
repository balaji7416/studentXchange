import { SearchBar, Logo, LocationSelector } from "@shared";
import NavbarLinks from "./NavbarLinks";

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
          <Logo text="ISMart" />
          <LocationSelector width="max-w-[200px]" />
          <SearchBar styles="flex-grow max-w-md" />
          <NavbarLinks className="flex-grow max-w-md" />
        </div>
      </nav>
    </>
  );
}

export default DesktopNavbar;
