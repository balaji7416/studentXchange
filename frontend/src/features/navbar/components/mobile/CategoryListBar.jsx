import clsx from "clsx";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlug,
  faCouch,
  faShirt,
  faFootball,
  faBicycle,
  faRuler,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

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
