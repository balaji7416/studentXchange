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

function CategorySection() {
  return (
    <div>
      <div className="flex flex-start font-semibold text-[.9rem] px-3">
        Categories
      </div>
      <div
        className={clsx(
          "grid grid-cols-[repeat(auto-fill,_minmax(90px,_1fr))] gap-2 place-items-center",
          "p-2",
          "border-b-2 border-gray-200  mt-2"
        )}
      >
        {categories.map(({ name, id, icon, href }) => (
          <Link
            to={href}
            key={id}
            className={clsx(
              "flex flex-col items-center justify-center gap-2",
              "p-2  ",
              "h-[100px] w-[100px] rounded-md",
              "bg-gray-100",
              "hover:bg-gray-300",
              "transition-all duration-200 ease-in-out",
              "shadow-md",
              "border-2 border-gray-400"
            )}
          >
            <FontAwesomeIcon icon={icon} className="mr-2" />
            <div
              className={clsx(
                "",
                "text-center",
                "h-10",
                "text-[.70rem] font-semibold uppercase"
              )}
            >
              {name}
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default CategorySection;
