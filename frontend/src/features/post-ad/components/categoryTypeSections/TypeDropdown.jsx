import clsx from "clsx";
import { TYPES } from "@constants";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function TypeDropDown({ typeOpen, setTypeValue, setTypeOpen, categoryValue }) {
  return (
    <div
      className={clsx(
        "absolute top-full left-0 w-full min-w-[256.4px]",
        typeOpen
          ? "opacity-100 pointer-events-auto visible translate-y-0"
          : "opacity-0 pointer-events-none invisible -translate-y-3",
        "transition-all ease-out duration-500",
        "bg-white p-3 shadow-md rounded-t-none rounded-md"
      )}
    >
      {categoryValue ? (
        TYPES[categoryValue].map(({ name, id, icon }) => (
          <button
            type="button"
            onClick={() => {
              setTypeValue(name);
              setTypeOpen(false);
            }}
            key={id}
            className={clsx(
              "w-full min-w-[244.4px]",
              "flex items-center gap-3",
              "p-2 border-b-2",
              "hover:bg-gray-100",
              "cursor-pointer"
            )}
          >
            <FontAwesomeIcon icon={icon} />
            <div>{name}</div>
          </button>
        ))
      ) : (
        <button
          type="button"
          className={clsx(
            "w-full",
            "flex items-center gap-3",
            "p-2 border-b-2",
            "hover:bg-gray-100",
            "cursor-pointer"
          )}
        >
          Select a category
        </button>
      )}
    </div>
  );
}
export default TypeDropDown;
