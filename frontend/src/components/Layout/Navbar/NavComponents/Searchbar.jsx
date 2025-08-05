import { clsx } from "clsx";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

function Searchbar({ styles = "" }) {
  return (
    <div
      className={clsx(
        styles,
        "flex items-center focus-within:border-opacity-0 focus-within:ring-2 focus-within:ring-blue-400 rounded-md",
        "transition-all duration-300 ease-in-out",
        "border border-black"
      )}
    >
      <input
        type="text"
        placeholder="search"
        className={clsx("p-3 rounded-l-md focus:outline-none w-full")}
      />
      <button className="bg-black text-white p-3 rounded-r-md">
        <FontAwesomeIcon icon={faSearch} />
      </button>
    </div>
  );
}

export default Searchbar;
