import clsx from "clsx";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";

const getTimeAgo = (postedDate) => {
  const date = new Date(postedDate);
  const now = new Date();
  const seconds = Math.floor((now - date) / 1000);
  const intervals = [
    { label: "year", seconds: 31536000 },
    { label: "month", seconds: 2592000 },
    { label: "week", seconds: 604800 },
    { label: "day", seconds: 86400 },
    { label: "hour", seconds: 3600 },
    { label: "minute", seconds: 60 },
    { label: "second", seconds: 1 },
  ];

  for (const interval of intervals) {
    const count = Math.floor(seconds / interval.seconds);
    if (count > 0) {
      return `${count} ${interval.label} ${count > 1 ? "s" : ""} ago`;
    }
  }

  return "just now";
};

function Card({
  imgSrc,
  alt,
  title,
  price,
  location,
  postedDate = `${Date.now()}`,
}) {
  const date = getTimeAgo(postedDate);
  return (
    <div
      className={clsx(
        "flex flex-col ",

        "md:h-[270px] md:w-[210px]",
        "h-[250px] w-[160px]",

        "p-2 pt-4",
        "border-2 border-gray-200 rounded-md",
        "relative",
        "hover:scale-[1.003]"
      )}
    >
      <div className={clsx("", "w-full h-2/3 p-1")}>
        <img
          src={imgSrc}
          alt={alt}
          className={clsx("object-contain w-full h-full rounded-md")}
        ></img>
      </div>

      <div className="flex flex-col items-start w-full p-1 mt-1">
        <div className="font-bold text-xl w-full">{price}</div>
        <div className="text-sm font-semibold opacity-40">{title}</div>
      </div>

      <div
        className={clsx(
          "flex items-center justify-between w-full p-1",
          "text-gray-500 text-xs"
        )}
      >
        <div className="text-sm font-semibold opacity-40">{location}</div>
        <div>{date}</div>
      </div>

      <button
        className={clsx(
          "absolute top-2 right-2 z-5",
          "bg-white p-1 w-6 h-6 rounded-full",
          "shadow-md",
          "flex justify-center items-center"
        )}
      >
        <FontAwesomeIcon
          icon={faHeart}
          className={clsx(
            "bg-white text-black p-1 rounded-full border  hover:text-red-500",
            "transition-all duration-300"
          )}
        />
      </button>
    </div>
  );
}

export default Card;
