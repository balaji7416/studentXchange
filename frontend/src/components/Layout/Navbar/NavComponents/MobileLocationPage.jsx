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

function MobileLocationPage({ setlocation, onClose }) {
  return (
    <div
      className={clsx(
        "flex flex-col",
        "absolute top-10 right-0",
        "w-screen",
        "bg-yellow-50"
      )}
    >
      {places.map(({ name, id }) => (
        <button
          key={id}
          className={clsx(
            "py-2 px-5",
            "",
            "border-b-2",
            "bg-gray-50 hover:bg-gray-100"
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
