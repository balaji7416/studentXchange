import clsx from "clsx";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBell,
  faHeart,
  faUser,
  faCommentDots,
  faChevronDown,
  faChevronUp,
} from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import DesktopMenu from "./DesktopMenu";

const links = [
  {
    href: "/favourites",
    label: <FontAwesomeIcon icon={faHeart}></FontAwesomeIcon>,
  },
  {
    href: "/chat",
    label: <FontAwesomeIcon icon={faCommentDots}></FontAwesomeIcon>,
  },
  {
    href: "/notifications",
    label: <FontAwesomeIcon icon={faBell} />,
  },
  {
    href: "/profile",
    label: <FontAwesomeIcon icon={faUser}></FontAwesomeIcon>,
  },
];

function Links() {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <div
      className={clsx(
        "flex items-center justify-evenly p-2 flex-grow max-w-md"
      )}
    >
      {links.map((link) => (
        <Link to={link.href} className="text-xl">
          {link.label}
        </Link>
      ))}
      <button
        onClick={() => setShowMenu((prev) => !prev)}
        className={clsx("relative")}
      >
        {showMenu ? (
          <FontAwesomeIcon icon={faChevronDown} />
        ) : (
          <FontAwesomeIcon icon={faChevronUp} />
        )}
      </button>
      <div className="absolute top-10 right-0 w-80">
        <DesktopMenu onClose={() => setShowMenu(false)} showMenu={showMenu} />
      </div>

      <button className="text-lg rounded-md bg-gray-200 px-5 py-2">Sell</button>
    </div>
  );
}
export default Links;
