import { X } from "lucide-react";
import Logo from "../../../../shared/Logo";
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
import { Link } from "react-router-dom";
import { useAuth } from "../../../../hooks/useAuth";
import { useState } from "react";

const menuOptions = [
  {
    name: "My ADS",
    id: 1,
    icon: faRectangleList,
    href: "my-ads",
  },
  {
    name: "Start Selling",
    id: 2,
    icon: faBullhorn,
    href: "postadd",
  },
  {
    name: "Chat",
    id: 3,
    icon: faCommentDots,
    href: "chat",
  },
  {
    name: "notifications",
    id: 4,
    icon: faBell,
    href: "notifications",
  },
  {
    name: "WishList",
    id: 5,
    icon: faHeart,
    href: "favorites",
  },
  {
    name: "Profile",
    id: 7,
    icon: faUser,
    href: "profile",
  },
  {
    name: "logOut",
    id: 6,
    icon: faRightFromBracket,
    href: "/",
  },
];

function MobileMenu({ onClose, showMenu }) {
  const { user, logout } = useAuth();
  const [isLogin, setIslogin] = useState(() => {
    const token = localStorage.getItem("token");
    return !!token;
  });

  const username = user?.username || "Guest";
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
          <Logo text="ISMart" />
        </div>

        <div
          className={clsx(
            "flex flex-col items-center justify-between",
            "w-full h-full"
          )}
        >
          <div
            className={clsx(
              "flex  flex-col justify-center gap-10",
              " w-full h-1/3",
              "border-b-2",
              ""
            )}
          >
            <div className={clsx(" flex items-center gap-[5rem]", "p-4")}>
              <div
                className={clsx(
                  "w-20 h-20 rounded-full bg-gray-100",
                  "flex justify-center items-center",
                  "self-start"
                )}
              >
                <FontAwesomeIcon icon={faUser} className={clsx("text-3xl")} />
              </div>
              <div
                className={clsx(
                  "flex items-center justify-center gap-2 text-bold text-2xl",
                  ""
                )}
              >
                {isLogin ? "Hello, " : null}{" "}
                <span className="text-bold shadow-md p-2 bg-black text-white rounded-md">
                  {username}
                </span>
              </div>
            </div>

            <div className={clsx("self-center bg-yellow-50 p-3")}>
              <Link
                onClick={() => {
                  setIslogin((prev) => !prev);
                  isLogin ? logout() : null;
                }}
                to="/auth"
                className={clsx(
                  "text-medium text-center font-semibold rounded-md bg-blue-600 text-white px-10 py-3",
                  "",
                  "hover:bg-blue-500",
                  "transition-all duration-300 ease-in-out"
                )}
              >
                {isLogin ? "Logout" : "Login"}
              </Link>
            </div>
          </div>

          <div className={clsx("flex flex-col", " h-2/3 w-full", "p-2")}>
            {menuOptions.map(({ name, id, icon, href }) => (
              <Link
                to={href}
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
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default MobileMenu;
