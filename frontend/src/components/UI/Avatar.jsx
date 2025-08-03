import clsx from "clsx";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";

const sizeMap = {
  1: "w-1 h-1",
  2: "w-2 h-2",
  3: "w-3 h-3",
  4: "w-4 h-4",
  5: "w-5 h-5",
  6: "w-6 h-6",
  8: "w-8 h-8",
  10: "w-10 h-10",
  12: "w-12 h-12",
  15: "w-15 h-15",
};

function Avatar({ src, alt, size, className }) {
  return (
    <>
      <div
        className={clsx(
          sizeMap[size],
          "rounded-full border-1 border-blue-100",
          className
        )}
      >
        {src ? (
          <img
            src={src}
            alt={alt}
            className={clsx(
              " w-full h-full object-cover rounded-full",
              className
            )}
          />
        ) : (
          <div className="w-full h-full rounded-full flex items-center justify-center bg-gray-200">
            <FontAwesomeIcon icon={faUser} className="text-gray-500 text-sm" />
          </div>
        )}
      </div>
    </>
  );
}

export default Avatar;
