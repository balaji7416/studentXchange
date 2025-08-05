import clsx from "clsx";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlug,
  faCouch,
  faShirt,
  faBookOpen,
  faRuler,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const catagories = [
  {
    name: "Electronics & gadgets",
    id: 1,
    icon: faPlug,
    href: "/electronics",
  },
  {
    name: "Tools & stationary",
    id: 2,
    icon: faRuler,
    href: "/tools",
  },
  {
    name: "Room Essentials / furniture",
    id: 3,
    icon: faCouch,
    href: "/furniture",
  },
  {
    name: "Clothing & Accessories",
    id: 4,
    icon: faShirt,
    href: "/clothing",
  },
  {
    name: "Books and Study Material",
    id: 5,
    icon: faBookOpen,
    href: "/books",
  },
];

function DesktopCatagories() {
  return (
    <div className={clsx("w-screen py-2 px-3 mt-1", " shadow-md")}>
      <div className={clsx("flex items-center justify-center space-x-10")}>
        {catagories.map(({ name, id, icon, href }) => (
          <div className={clsx("flex items-center gap-2 group")} key={id}>
            <FontAwesomeIcon
              icon={icon}
              className="text-blue-300 group-hover:text-black"
            />
            <Link to={href} className={clsx("group-hover:text-blue-400")}>
              {name}
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
export default DesktopCatagories;
