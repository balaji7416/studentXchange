import clsx from "clsx";
import { CATEGORIES } from "@constants";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function CategoryDropDown({
  categoryOpen,
  setCategoryValue,
  setCategoryOpen,
  handleChange,
}) {
  return (
    <div
      className={clsx(
        "absolute top-full left-0 w-full min-w-[256.4px]",
        categoryOpen
          ? "opacity-100 pointer-events-auto visible translate-y-0"
          : "opacity-0 pointer-events-none invisible -translate-y-3",
        "transition-all ease-out duration-500",
        "bg-white p-3 shadow-md rounded-t-none rounded-md",
        "z-10" // Ensure dropdown is above other elements
      )}
    >
      {CATEGORIES.map(({ name, id, icon }) => (
        <button
          type="button"
          onClick={() => {
            setCategoryValue(name);
            setCategoryOpen(false);
            handleChange(name);
          }}
          key={id}
          className={clsx(
            "w-full min-w-[244.4px]",
            "flex items-center gap-3",
            "p-2 border-b-2",
            "hover:bg-gray-100",
            "cursor-pointer",
            "focus:outline-none focus:ring-2 focus:ring-blue-500" // Add focus styles for accessibility
          )}
        >
          <FontAwesomeIcon icon={icon} />
          <div>{name}</div>
        </button>
      ))}
    </div>
  );
}

export default CategoryDropDown;
