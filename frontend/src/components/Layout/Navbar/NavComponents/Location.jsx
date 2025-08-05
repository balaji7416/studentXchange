import { useState } from "react";
import clsx from "clsx";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";

function Location({ styles, setlocation }) {
  const [Location, setLocation] = useState("");
  const [clicked, setClicked] = useState(false);

  const handleClick = (e) => {
    setLocation(e.target.textContent);
    setClicked(false);
    setlocation(e.target.textContent);
  };

  const places = [
    { name: "Amber", id: 1 },
    { name: "Diamond", id: 2 },
    { name: "Opal", id: 3 },
    {
      name: "AquaMarine",
      id: 4,
    },
  ];

  return (
    <div className={clsx(styles, "relative")}>
      <div className="flex border border-black rounded-md">
        <input
          type="text"
          onChange={(e) => setLocation(e.target.value)}
          value={Location}
          className="p-3 rounded-l-md focus:outline-none "
          placeholder="location"
        />

        <button
          onClick={() => setClicked(!clicked)}
          className="bg-white text-black p-3 rounded-r-md " //make this button to occupy the full height of the input field
        >
          <FontAwesomeIcon icon={clicked ? faChevronDown : faChevronUp} />
        </button>
      </div>

      <div
        className={clsx(
          "absolute flex flex-col items-center justify-center",
          clicked
            ? "opacity-100 translate-x-0 scale-100 pointer-events-auto"
            : "opacity-0 -translate-y-10 scale-95 pointer-events-none",
          "transition-all ease-out duration-500"
        )}
      >
        {places.map(({ name, id }) => (
          <div
            key={id}
            onClick={handleClick}
            className="p-2 bg-gray-50 border-b-2 border-gray-300 rounded-r-md hover:bg-gray-200 cursor-pointer w-[300px]"
          >
            {name}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Location;
