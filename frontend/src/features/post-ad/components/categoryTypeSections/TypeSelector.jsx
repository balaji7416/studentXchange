import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import clsx from "clsx";
import TypeDropdown from "./TypeDropdown";

function TypeSelection({ typeValue, setTypeValue, categoryValue }) {
  const [typeOpen, setTypeOpen] = useState(false);

  return (
    <>
      <div
        className={clsx("flex flex-col space-y-3", "w-full", "bg-slate-400")}
      >
        <div> Select Type</div>
        <div
          className={clsx(
            "flex items-center justify-between",
            "w-3/4 max-w-[500px]",
            "rounded-md bg-indigo-300-400",
            "relative", // Ensure the parent container is positioned correctly
            "transition-all duration-300 ease-out"
          )}
        >
          <input
            type="text"
            placeholder="type" // Update placeholder to "type"
            value={typeValue}
            // onChange={(e) => setTypeValue(e.target.value)}
            readOnly
            className={clsx(
              "p-3",
              "flex-1",
              "rounded-l-md",
              typeOpen ? "rounded-bl-none" : "",
              "outline-none"
            )}
          />
          <button
            type="button"
            className={clsx(
              "flex items-center justify-center",
              "bg-white",
              "p-4",
              "rounded-r-md",
              typeOpen ? "rounded-br-none" : ""
            )}
            onClick={() => setTypeOpen((prev) => !prev)}
          >
            <FontAwesomeIcon icon={typeOpen ? faChevronDown : faChevronUp} />
          </button>
          <div className={clsx("absolute top-full left-0 z-10 w-full")}>
            <TypeDropdown
              typeOpen={typeOpen}
              setTypeValue={setTypeValue}
              setTypeOpen={setTypeOpen}
              categoryValue={categoryValue}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default TypeSelection;
