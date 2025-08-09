import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import clsx from "clsx";
import { useNavigate } from "react-router-dom";
import {
  CategoryTypeWrapper,
  TitleDescriptionWrapper,
} from "@features/post-ad";

function PostAdd() {
  const navigate = useNavigate();

  return (
    <div className={clsx("bg-red-200", "min-h-[90vh]", "flex flex-col  gap-5")}>
      {/* navbar for returning home */}
      <nav
        className={clsx(
          "flex p-3",
          "bg-yellow-300",
          "fixed top-0 left-0 w-full z-50"
        )}
      >
        <button className={clsx("text-3xl")} onClick={() => navigate("/")}>
          <FontAwesomeIcon icon={faArrowLeft} />
        </button>
      </nav>

      <div
        className={clsx(
          "flex items-center justify-center",
          "text-xl font-semibold"
        )}
      >
        POST YOUR ADD
      </div>

      {/* form for post add */}
      <form
        action=""
        className={clsx("flex flex-col  bg-green-300", "px-10 w-full h-full")}
      >
        {/* category and type dropdown */}
        <div
          className={clsx(
            "flex flex-col items-start justify-center gap-4 ",
            "bg-blue-500 w-full h-full p-3"
          )}
        >
          <CategoryTypeWrapper />
        </div>

        {/* title and discription section */}
        <div className={clsx("flex bg-indigo-700 ")}>
          <TitleDescriptionWrapper />
        </div>
      </form>
    </div>
  );
}
export default PostAdd;
