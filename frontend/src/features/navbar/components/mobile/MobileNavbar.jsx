import clsx from "clsx";
import { SearchBar, Logo } from "@shared";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faXmark,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import MobileMenu from "./MobileMenu";
import MobileLocationSelector from "./MobileLocationSelector";
function MobileNavbar() {
  // State for toggling menu and location modal
  const [showMenu, setShowMenu] = useState(false);

  return (
    <nav
      className={clsx(
        "fixed",
        "top-0",
        "left-0",
        "z-50",
        "w-full",
        "bg-gray-100",
        "px-1",
        "shadow-md",
        "flex flex-col"
      )}
    >
      {/* Top bar: menu, logo, location */}

      <div
        className={clsx("flex", "items-center", "justify-between gap-2", "p-2")}
      >
        {/* Hamburger menu and logo */}
        <div className={clsx("flex", "items-center", "space-x-2")}>
          <button
            onClick={() => setShowMenu((prev) => !prev)}
            className={clsx("text-xl")}
          >
            {showMenu ? (
              <FontAwesomeIcon icon={faXmark} />
            ) : (
              <FontAwesomeIcon icon={faBars} />
            )}
          </button>
          <Logo text="ISMart" size="text-lg" />
        </div>

        {/* Menu */}
        <MobileMenu onClose={() => setShowMenu(false)} showMenu={showMenu} />

        {/* Location selector */}
        <div className={clsx("flex items-center", "")}>
          <span className="ml-6">
            <FontAwesomeIcon icon={faLocationDot} />
          </span>

          {/* Location modal or selected location */}
          <div className="">
            <MobileLocationSelector width="w-[11]" />
          </div>
        </div>
      </div>

      {/* Searchbar below top bar */}
      <div className={clsx("p-3")}>
        <SearchBar />
      </div>
    </nav>
  );
}
export default MobileNavbar;
