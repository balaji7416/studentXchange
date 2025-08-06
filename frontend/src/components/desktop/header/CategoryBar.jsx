import clsx from "clsx";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlug,
  faCouch,
  faShirt,
  faBookOpen,
  faRuler,
  faChevronUp,
  faChevronDown,
  faC,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { useState } from "react";

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
  const [open, setOpen] = useState(false);

  return (
    <div className={clsx("w-full py-2 px-3", "shadow-sm", "mt-[92px]", "")}>
      <div className={clsx("flex items-center justify-center space-x-10")}>
        <button
          onClick={() => setOpen((prev) => !prev)}
          className="flex gap-2 items-center"
        >
          <span className="font-bold">Categories</span>
          <FontAwesomeIcon icon={open ? faChevronDown : faChevronUp} />
        </button>
        {catagories.map(({ name, id, icon, href }) => (
          <div
            className={clsx(
              "flex items-center gap-2 ",
              "transition-all duration-600",
              open
                ? "opacity-100 translate-x-0 scale-100 pointer-events-auto"
                : "opacity-0 -translate-y-10 scale-95 pointer-events-none",
              "transition-all ease-out duration-500"
            )}
            key={id}
          >
            <FontAwesomeIcon icon={icon} className="text-blue-300" />
            <Link to={href} className={clsx("hover:text-blue-400")}>
              {name}
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
export default DesktopCatagories;
