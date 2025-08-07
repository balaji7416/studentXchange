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
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { useState } from "react";

const categories = [
  {
    name: "Electronics",
    id: 1,
    icon: faPlug,
    href: "/electronics",
  },
  {
    name: "Tools & Supplies",
    id: 2,
    icon: faRuler,
    href: "/tools",
  },
  {
    name: "Furniture",
    id: 3,
    icon: faCouch,
    href: "/furniture",
  },
  {
    name: "Clothing",
    id: 4,
    icon: faShirt,
    href: "/clothing",
  },
  {
    name: "Books",
    id: 5,
    icon: faBookOpen,
    href: "/books",
  },
];

function DesktopCatagories() {
  const [open, setOpen] = useState(false);

  return (
    <div className={clsx("w-full py-2 px-3", "shadow-sm", "mt-[92px]", "")}>
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
                "text-[.9rem] font-semibold uppercase"
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
