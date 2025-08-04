import clsx from "clsx";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBell,
  faHeart,
  faUser,
  faCommentDots,
} from "@fortawesome/free-solid-svg-icons";

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
      <button className="text-lg rounded-md bg-gray-200 px-5 py-2">Sell</button>
    </div>
  );
}
export default Links;
