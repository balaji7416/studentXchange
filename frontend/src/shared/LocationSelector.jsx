import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import clsx from "clsx";
import { LOCATIONS } from "@constants";

function LocationDropDown({ locationOpen, setLocation, setLocationOpen }) {
  return (
    <div
      className={clsx(
        "absolute top-full left-0 w-full",
        locationOpen
          ? "opacity-100 pointer-events-auto visible translate-y-0"
          : "opacity-0 pointer-events-none invisible -translate-y-3",
        "transition-all ease-out duration-500",
        "bg-white p-3 shadow-md rounded-t-none rounded-md",
        "z-10"
      )}
    >
      {LOCATIONS.map(({ name, id, icon }) => (
        <button
          type="button"
          onClick={() => {
            setLocation(name);
            setLocationOpen(false);
          }}
          key={id}
          className={clsx(
            "w-full",
            "flex items-center gap-3",
            "p-2 border-b-2",
            "hover:bg-gray-100",
            "cursor-pointer",
            "focus:outline-none focus:ring-2 focus:ring-blue-500" // Add focus styles for accessibility
          )}
        >
          <FontAwesomeIcon icon={icon} />
          <div className="text-sm font-medium text-gray-800">{name}</div>
        </button>
      ))}
    </div>
  );
}

function LocationSelector({ location, setLocation, width }) {
  const [locationOpen, setLocationOpen] = useState(false);

  return (
    <>
      <div className={clsx("")}>
        <div
          className={clsx(
            "flex items-center justify-between",
            width || "w-auto",
            "h-full",
            "rounded-md bg-indigo-300-400",
            "transition-all duration-300 ease-out",
            "relative",
            "border-2 p-1 border-gray-400",
            "bg-white"
          )}
        >
          <input
            type="text"
            placeholder="location"
            value={location || ""}
            readOnly
            className={clsx(
              "w-[7rem] sm:w-full max-w-[500px] md:w-full",
              "w-full",
              "outline-none",
              "p-2",
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
              "p-3",
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
              setLocation={setLocation}
              setLocationOpen={setLocationOpen}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default LocationSelector;
