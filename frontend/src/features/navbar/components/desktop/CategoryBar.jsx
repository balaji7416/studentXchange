import clsx from "clsx";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlug,
  faCouch,
  faShirt,
  faFootball,
  faBicycle,
  faRuler,
  faChevronUp,
  faChevronDown,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { useState } from "react";

const categories = [
  {
    name: "Electronics & Gadgets",
    id: 1,
    icon: faPlug,
    href: "/electronics",
  },
  {
    name: "Study Essentials",
    id: 2,
    icon: faRuler,
    href: "/study-essentials",
  },
  {
    name: "Room & Hostel Stuff",
    id: 3,
    icon: faCouch,
    href: "/room-hostel",
  },
  {
    name: "Clothing & Accessories",
    id: 4,
    icon: faShirt,
    href: "/clothing-accessories",
  },
  {
    name: "Sports & Fitness",
    id: 5,
    icon: faFootball, // You'll need to import a sports-related icon
    href: "/sports-fitness",
  },
  {
    name: "Cycles & Transport",
    id: 6,
    icon: faBicycle, // You'll need to import a bicycle icon
    href: "/cycles-transport",
  },
];

function DesktopCatagories() {
  const [open, setOpen] = useState(false);

  return (
    <div className={clsx("w-full py-2 px-3", "shadow-sm", "mt-[]", "")}>
      <div className={clsx("flex items-center justify-start gap-20")}>
        <button
          onClick={() => setOpen((prev) => !prev)}
          className="flex gap-2 items-center "
        >
          <div className={clsx("font-semibold text-md", "flex ")}>
            Categories
          </div>
          <FontAwesomeIcon icon={open ? faChevronDown : faChevronUp} />
        </button>
        <div className="flex items-center justify-center space-x-10">
          {categories.map(({ name, id, icon, href }) => (
            <div
              className={clsx(
                "flex items-center gap-2 ",
                "transition-all duration-600",
                open
                  ? "opacity-100 translate-x-0 scale-100 pointer-events-auto"
                  : "opacity-0 -translate-y-10 scale-95 pointer-events-none",
                "transition-all ease-out duration-500",
                "text-xs font-semibold uppercase"
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
    </div>
  );
}
export default DesktopCatagories;
