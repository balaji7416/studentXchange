import Searchbar from "./NavComponents/Searchbar";
import Logo from "./NavComponents/Logo";
import Links from "./NavComponents/Links";
import Location from "./NavComponents/Location";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronUp,
  faChevronDown,
  faBars,
  faXmark,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

function MobileNavbar() {
  const [showMenu, setShowMenu] = useState(false);
  const [showLocation, setShowLocation] = useState(false);
  const [location, setlocation] = useState("");

  return (
    <nav className="bg-gray-100 w-full fixed top-0 left-0 z-100 p-3  shadow-md">
      <div className="flex justify-between items-center p-3">
        <div className="flex items-center space-x-4">
          <button
            onClick={() => setShowMenu((prev) => !prev)}
            className="text-xl"
          >
            {showMenu ? (
              <FontAwesomeIcon icon={faXmark} />
            ) : (
              <FontAwesomeIcon icon={faBars} />
            )}
          </button>
          <Logo text="Olx" />
        </div>

        <div className="flex items-center space-x-4">
          <span>
            <FontAwesomeIcon icon={faLocationDot}></FontAwesomeIcon>
          </span>
          {/* i want to see the selected location in the location component in below button*/}

          <button>
            {showLocation ? (
              <Location location={location} setlocation={setlocation} />
            ) : (
              location
            )}
          </button>
          <button onClick={() => setShowLocation((prev) => !prev)}>
            <FontAwesomeIcon
              icon={showLocation ? faChevronDown : faChevronUp}
            ></FontAwesomeIcon>
          </button>
        </div>
      </div>

      <div p-3>
        <Searchbar />
      </div>
    </nav>
  );
}
export default MobileNavbar;
