import clsx from "clsx";

const places = [
  { name: "Amber", id: 1 },
  { name: "Diamond", id: 2 },
  { name: "Opal", id: 3 },
  {
    name: "AquaMarine",
    id: 4,
  },
];

function MobileLocationPage({ setlocation, showLocationMenu, onClose }) {
  return (
    <div
      className={clsx(
        "flex flex-col",
        "absolute top-10 right-0",
        "w-[50vw] rounded-md",
        "bg-yellow-50",
        showLocationMenu
          ? "opacity-100 translate-x-0 scale-100 pointer-events-auto"
          : "opacity-0 -translate-y-10 scale-95 pointer-events-none",
        "transition-all ease-out duration-500"
      )}
    >
      {places.map(({ name, id }) => (
        <button
          key={id}
          className={clsx(
            "py-2 px-5",
            "rounded-md",
            "border-b-2",
            "bg-gray-50 hover:bg-gray-200",
            "",
            "transition-all ease-in-out duration-100"
          )}
          onClick={() => {
            setlocation(name);
            onClose();
          }}
        >
          {name}
        </button>
      ))}
    </div>
  );
}

export default MobileLocationPage;
