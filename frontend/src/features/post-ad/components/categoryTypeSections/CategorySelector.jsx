import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import clsx from "clsx";
import CategoryDropdown from "./CategoryDropdown";

function CategorySelection({ category, setCategory, handleChange }) {
  const [categoryOpen, setCategoryOpen] = useState(false);

  return (
    <>
      <div
        className={clsx(
          "flex flex-col space-y-3",
          "w-full sm:w-auto sm:max-w-[600px]"
        )}
      >
        <div> Select Category</div>
        <div
          className={clsx(
            "flex items-center justify-between",
            "w-full sm:max-w-[600px]",
            "rounded-md bg-indigo-300-400",
            " ",
            "transition-all duration-300 ease-out",
            "relative",
            "border-2 border-gray-300"
          )}
        >
          <input
            type="text"
            placeholder="category"
            name="category"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            readOnly
            className={clsx(
              "p-3",
              "",
              "rounded-l-md",
              categoryOpen ? "rounded-bl-none" : "",
              "outline-none",
              "w-full  sm:max-w-[600px]"
            )}
          />
          <button
            type="button"
            className={clsx(
              "flex items-center justify-center",
              "bg-white",
              "p-4",
              "rounded-r-md",
              categoryOpen ? "rounded-br-none" : ""
            )}
            onClick={() => setCategoryOpen((prev) => !prev)}
          >
            <FontAwesomeIcon
              icon={categoryOpen ? faChevronDown : faChevronUp}
            />
          </button>
          <div className={clsx("absolute top-full left-0 z-20 w-full", "")}>
            <CategoryDropdown
              categoryOpen={categoryOpen}
              setCategory={setCategory}
              setCategoryOpen={setCategoryOpen}
              handleChange={handleChange}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default CategorySelection;
