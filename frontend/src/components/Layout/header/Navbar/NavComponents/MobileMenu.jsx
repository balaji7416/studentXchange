import { X } from "lucide-react";
import Logo from "./Logo";
import clsx from "clsx";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBell,
  faHeart,
  faUser,
  faCommentDots,
  faBullhorn,
  faRightFromBracket,
  faRectangleList,
} from "@fortawesome/free-solid-svg-icons";

const menuOptions = [
  {
    name: "My ADS",
    id: 1,
    icon: faRectangleList,
  },
  {
    name: "Start Selling",
    id: 2,
    icon: faBullhorn,
  },
  {
    name: "Chat",
    id: 3,
    icon: faCommentDots,
  },
  {
    name: "notifications",
    id: 4,
    icon: faBell,
  },
  {
    name: "WishList",
    id: 5,
    icon: faHeart,
  },
  {
    name: "logOut",
    id: 6,
    icon: faRightFromBracket,
  },
];

function MobileMenu({ onClose, showMenu }) {
  return (
    <div>
      <div
        className={clsx(
          "bg-white w-full fixed top-0 left-0 z-50 h-screen",
          "flex flex-col items-center space-y-5",
          "p-3",
          showMenu
            ? "opacity-100 translate-x-0 scale-100 pointer-events-auto"
            : "opacity-0 -translate-y-10 scale-95 pointer-events-none",
          "transition-all ease-out duration-500"
        )}
      >
        <div className={clsx("flex items-center space-x-5  self-start")}>
          <button onClick={() => onClose()}>
            <X />
          </button>
          <Logo text="Olx" />
        </div>

        <div
          className={clsx(
            "flex flex-col items-center justify-between",
            "w-full h-full"
          )}
        >
          <div
            className={clsx(
              "flex  justify-between",
              " w-full h-1/3",
              "border-b-2"
            )}
          >
            <div
              className={clsx(
                "w-20 h-20 rounded-full bg-gray-100",
                "flex justify-center items-center",
                "self-start"
              )}
            >
              <FontAwesomeIcon icon={faUser} className={clsx("text-3xl")} />
            </div>
            <div className={clsx("text-bold text-2xl", "mr-10 mt-5")}>
              UserName
            </div>
          </div>

          <div className={clsx("flex flex-col", " h-2/3 w-full", "p-2")}>
            {menuOptions.map(({ name, id, icon }) => (
              <button
                className={clsx(
                  "p-2 bg-white",
                  "border-b-2",
                  "hover:bg-blue-100 hover:scale-105",
                  "trasition-all ease-out duration-200",
                  "rounded-md",
                  "flex items-center space-x-4",
                  "p-3"
                )}
                key={id}
              >
                <FontAwesomeIcon icon={icon} />
                <span>{name}</span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default MobileMenu;
