import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import clsx from "clsx";
import { useNavigate } from "react-router-dom";
import {
  CategoryTypeWrapper,
  TitleDescriptionWrapper,
  PriceInput,
  ImageUploadSection,
  ContactDetailsSection,
  PostAdBtn,
} from "@features/post-ad";

import { LocationSelector } from "@shared";

function PostAdd() {
  const navigate = useNavigate();

  return (
    <div
      className={clsx(
        "min-h-[90vh]",
        "flex flex-col items-center justify-center gap-5"
      )}
    >
      {/* navbar for returning home */}
      <nav
        className={clsx(
          "flex p-3",
          "bg-gray-200",
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
        className={clsx(
          "flex flex-col ",
          "p-1 w-full h-full",

          "flex flex-col items-center"
        )}
      >
        <div
          className={clsx(
            "w-full bg-white",
            "flex flex-col items-center justify-center gap-4 border-2 border-gray-100 shadow-md p-1"
          )}
        >
          {/* category and type dropdown */}
          <div className={clsx("w-full", "border-b-2 border-gray-200", "pb-5")}>
            <CategoryTypeWrapper className="mx-auto" />
          </div>

          {/* title and discription section */}
          <div
            className={clsx(
              "flex w-full p-2 ",
              "border-b-2 border-gray-200",
              "pb-5"
            )}
          >
            <TitleDescriptionWrapper />
          </div>

          {/* price input section */}
          <div className={clsx("w-full", "border-b-2 border-gray-200", "pb-5")}>
            <PriceInput />
          </div>

          {/* image upload section */}
          <div className={clsx("w-full", "border-b-2 border-gray-200", "pb-5")}>
            <ImageUploadSection />
          </div>

          {/* Location section */}
          <div
            className={clsx(
              "w-full flex flex-col gap-3",
              "border-b-2 border-gray-200",
              "pb-5"
            )}
          >
            <div className="font-semibold text-center">
              Select Your Location
            </div>
            <LocationSelector width="w-full max-w-[600px] mx-auto" />
          </div>

          {/* contact details section */}
          <div className={clsx("w-full", "border-b-2 border-gray-200", "pb-5")}>
            <ContactDetailsSection />
          </div>

          {/*post submit button */}
          <div>
            <PostAdBtn />
          </div>
        </div>
      </form>
    </div>
  );
}
export default PostAdd;
