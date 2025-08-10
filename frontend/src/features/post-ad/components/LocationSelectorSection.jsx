import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import clsx from "clsx";
import { LOCATIONS } from "@constants";

function LocationDropDown({ locationOpen, setLocationValue, setLocationOpen }) {
  return (
    <div
      className={clsx(
        "absolute top-full left-0 w-full min-w-[256.4px]",
        locationOpen
          ? "opacity-100 pointer-events-auto visible translate-y-0"
          : "opacity-0 pointer-events-none invisible -translate-y-3",
        "transition-all ease-out duration-500",
        "bg-white p-3 shadow-md rounded-t-none rounded-md",
        "z-10" // Ensure dropdown is above other elements
      )}
    >
      {LOCATIONS.map(({ name, id, icon }) => (
        <button
          type="button"
          onClick={() => {
            setLocationValue(name);
            setLocationOpen(false);
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

function LocationSelectorSection() {
  const [locationOpen, setLocationOpen] = useState(false);
  const [locationValue, setLocationValue] = useState("");

  return (
    <>
      <div
        className={clsx("flex flex-col space-y-3", "w-full", "bg-slate-400")}
      >
        <div> Select Location</div>
        <div
          className={clsx(
            "flex items-center justify-between",
            " w-3/4 max-w-[500px]",
            "rounded-md bg-indigo-300-400",
            " ",
            "transition-all duration-300 ease-out",
            "relative"
          )}
        >
          <input
            type="text"
            placeholder="location"
            value={locationValue}
            // onChange={(e) => setCategoryValue(e.target.value)}
            readOnly
            className={clsx(
              "p-3",
              "flex-1",
              "rounded-l-md",
              locationOpen ? "rounded-bl-none" : "",
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
              locationOpen ? "rounded-br-none" : ""
            )}
            onClick={() => setLocationOpen((prev) => !prev)}
          >
            <FontAwesomeIcon
              icon={locationOpen ? faChevronDown : faChevronUp}
            />
          </button>
          <div className={clsx("absolute top-full left-0 z-20 w-full", "")}>
            <LocationDropDown
              locationOpen={locationOpen}
              setLocationValue={setLocationValue}
              setLocationOpen={setLocationOpen}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default LocationSelectorSection;
