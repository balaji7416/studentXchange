import clsx from "clsx";
import { SearchBar, Logo } from "@shared";
import MobileLocationSelector from "./MobileLocationSelector";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronUp,
  faChevronDown,
  faBars,
  faXmark,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import MobileMenu from "./MobileMenu";

function MobileNavbar() {
  // State for toggling menu and location modal
  const [showMenu, setShowMenu] = useState(false);
  const [showLocationMenu, setShowLocationMenu] = useState(false);
  const [location, setlocation] = useState("");

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
        "shadow-md"
      )}
    >
      {/* Top bar: menu, logo, location */}
      <div className={clsx("flex", "items-center", "justify-between", "p-2")}>
        {/* Hamburger menu and logo */}
        <div className={clsx("flex", "items-center", "space-x-4")}>
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
          <Logo text="ISMart" />
        </div>

        {/* Menu */}
        <MobileMenu onClose={() => setShowMenu(false)} showMenu={showMenu} />

        {/* Location selector */}
        <div className={clsx("flex relative", "items-center", "space-x-3")}>
          <span>
            <FontAwesomeIcon icon={faLocationDot} />
          </span>

          {/* Location modal or selected location */}
          <MobileLocationSelector
            setlocation={setlocation}
            showLocationMenu={showLocationMenu}
            onClose={() => setShowLocationMenu(false)}
          />

          <div>{location || "Select Location"}</div>

          {/* Toggle location modal */}
          <button onClick={() => setShowLocationMenu((prev) => !prev)}>
            <FontAwesomeIcon
              icon={showLocationMenu ? faChevronDown : faChevronUp}
            />
          </button>
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
