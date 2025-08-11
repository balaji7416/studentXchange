import clsx from "clsx";
import { handleFormSubmit } from "./AuthLogic";
import { useState } from "react";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useNavigate } from "react-router-dom";

function AuthForm() {
  const [isSignUp, setIsSignUp] = useState(false);
  const navigate = useNavigate();
  return (
    <div
      className={clsx(
        "bg-gradient-to-br from-white via-slate-100 to-blue-50 min-h-screen",
        " w-full h-screen p-4",
        "flex justify-center items-center",
        "",
        "backdrop:blur-md"
      )}
    >
      <form
        onSubmit={handleFormSubmit}
        className={clsx(
          "border-2  shadow-md p-5 border-gray-300 w-full h-[75%] md:h-[90%] md:w-3/4",
          "flex flex-col items-center gap-5 justify-center",
          "relative",
          "rounded-md"
        )}
      >
        <button
          onClick={() => navigate("/")}
          type="button"
          className={clsx(
            "absolute top-1 left-2 md:top-5 md:left-10 md:text-4xl p-3 text-3xl font-bold text-blue-500"
          )}
        >
          <FontAwesomeIcon icon={faArrowLeft} />
        </button>

        <div
          className={clsx(
            "flex flex-col gap-2 items-center ",
            "font-bold tracking-wide"
          )}
        >
          <div className={clsx("text-medium md:text-xl")}>
            {isSignUp ? "Welcome to ISMart" : "Log in to your account"}
          </div>
          <div className={clsx("font-semibold opacity-50 text-black text-sm")}>
            {isSignUp ? "let's get you started" : ""}
          </div>
        </div>
        <div
          className={clsx(
            "w-full flex flex-col gap-11 items-center justify-center"
          )}
        >
          {isSignUp && (
            <input
              type="text"
              required
              className={clsx(
                "p-3 border-2 rounded-md border-gray-200 ",
                "w-full max-w-[500px]",
                "tranisition-all duration-300 ease-in-out",
                "outline-none",
                "focus:ring-2 focus:ring-blue-500 focus:border-opacity-0"
              )}
              placeholder="Username"
            />
          )}

          <input
            type="email"
            required
            className={clsx(
              "p-3 border-2 rounded-md border-gray-200 ",
              "w-full max-w-[500px]",
              "tranisition-all duration-300 ease-in-out",
              "outline-none",
              "focus:ring-2 focus:ring-blue-500 focus:border-opacity-0"
            )}
            placeholder="email"
          />
          <input
            type="password"
            required
            className={clsx(
              "p-3 border-2 rounded-md border-gray-200 ",
              "w-full max-w-[500px]",
              "tranisition-all duration-300 ease-in-out",
              "outline-none",
              "focus:ring-2 focus:ring-blue-500 focus:border-opacity-0"
            )}
            placeholder="password"
          />
        </div>
        <button
          className={clsx(
            "w-full max-w-[500px] bg-blue-600 text-white",
            "p-3 rounded-md font-semibold"
          )}
        >
          {isSignUp ? "Sign Up" : "Log in"}
        </button>
        <div>
          {isSignUp ? "already have an account? " : "don't have an account? "}
          <button type="button" onClick={() => setIsSignUp((prev) => !prev)}>
            {isSignUp ? "Login" : "Sign Up"}
          </button>
        </div>
      </form>
    </div>
  );
}

export default AuthForm;
