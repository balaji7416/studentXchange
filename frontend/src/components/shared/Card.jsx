import clsx from "clsx";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";

function Card({ imgSrc, alt, title, price, location }) {
  return (
    <div
      className={clsx(
        "flex flex-col ",

        "md:h-[270px] md:w-[210px]",
        "h-[250px] w-[170px]",

        "p-2 pt-4",
        "shadow-md rounded-md",
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

      <div className="flex flex-col items-start w-full h-1/3 p-1 mt-1">
        <div className="font-bold text-xl w-full">{price}</div>
        <div className="">{title}</div>
        <div className={clsx("self-end opacity-40")}>{location}</div>
      </div>

      <button
        className={clsx(
          "absolute top-1 right-1 z-5",
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
