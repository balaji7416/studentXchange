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

function NavbarLinks({ className }) {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <div
      className={clsx(
        "flex items-center justify-between gap-4 p-2 flex-grow max-w-md ",
        className
      )}
    >
      <div className={clsx("flex items-center justify-evenly", "w-[60%]")}>
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
      </div>

      <div className="absolute top-10 right-0 w-80">
        <DesktopMenu onClose={() => setShowMenu(false)} showMenu={showMenu} />
      </div>

      <div
        className={clsx(
          "flex items-center justify-center gap-3 ",
          "",
          "w-[40%]"
        )}
      >
        <Link
          to="/auth"
          className={clsx(
            "text-medium text-center font-semibold rounded-md bg-blue-600 text-white px-3 py-1",
            "w-1/2",
            "hover:bg-blue-500",
            "transition-all duration-300 ease-in-out"
          )}
        >
          Login
        </Link>
        <Link
          to="/postadd"
          className={clsx(
            "text-medium text-center font-semibold rounded-md  bg-blue-600 text-white  px-3 py-1",
            "w-1/2",
            "hover:bg-blue-500",
            "transition-all duration-300 ease-in-out"
          )}
        >
          Post
        </Link>
      </div>
    </div>
  );
}
export default NavbarLinks;
