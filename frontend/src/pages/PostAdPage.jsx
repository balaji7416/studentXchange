import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import clsx from "clsx";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

import {
  CategoryTypeWrapper,
  TitleDescriptionWrapper,
  PriceInput,
  ImageUploadSection,
  ContactDetailsSection,
  PostAdBtn,
} from "@features/post-ad";
import { LocationSelector } from "@shared";
import postad from "../services/adService.js";
import { useAuth } from "../hooks/useAuth.jsx";

function PostAdd() {
  const navigate = useNavigate();

  const { user } = useAuth();
  const username = user?.username || "";

  const [category, setCategory] = useState("");
  const [type, setType] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [images, setImages] = useState([]);
  const [location, setLocation] = useState("");
  const [contactDetails, setContactDetails] = useState({
    name: username,
    phone: "",
    email: "",
  });
  // const [loading, setloading] = useState(false);
  // const [progress, setprogress] = useState(0);
  // const [error, setError] = useState(null);

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    //change the below code to individual checks
    if (!category) {
      console.log("Please select a category");
      return;
    }
    if (!type) {
      console.log("Please select a type");
      return;
    }
    if (!title) {
      console.log("Please enter a title");
      return;
    }
    if (!description) {
      console.log("Please enter a description");
      return;
    }
    if (!price) console.log("Please enter a price");
    if (!images.length) console.log("Please upload at least one image");
    if (!location) console.log("Please enter a location");
    if (!contactDetails.name) console.log("Please enter your name");
    if (!contactDetails.email) console.log("Please enter your email");
    if (!contactDetails.phone) console.log("please enter your phone number");
    if (
      !price ||
      !images.length ||
      !location ||
      (!contactDetails.name && !contactDetails.email && !contactDetails.phone)
    ) {
      console.log("Please fill all the fields");
    }

    const formData = new FormData();
    formData.append("category", category);
    formData.append("type", type);
    formData.append("title", title);
    formData.append("description", description);
    formData.append("price", price);
    formData.append("location", location);
    formData.append("contactDetails", JSON.stringify(contactDetails));
    images.map((file) => {
      formData.append("images", file);
    });

    try {
      console.log(location || "undefined location");
      postad(formData);
      navigate("/");
    } catch (err) {
      console.log(err);
    }
  };

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
        onSubmit={handleFormSubmit}
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
            <CategoryTypeWrapper
              category={category}
              setCategory={setCategory}
              type={type}
              setType={setType}
              className="mx-auto"
            />
          </div>

          {/* title and discription section */}
          <div
            className={clsx(
              "flex w-full p-2 ",
              "border-b-2 border-gray-200",
              "pb-5"
            )}
          >
            <TitleDescriptionWrapper
              title={title}
              description={description}
              setDescription={setDescription}
              setTitle={setTitle}
            />
          </div>

          {/* price input section */}
          <div className={clsx("w-full", "border-b-2 border-gray-200", "pb-5")}>
            <PriceInput price={price} setPrice={setPrice} />
          </div>

          {/* image upload section */}
          <div className={clsx("w-full", "border-b-2 border-gray-200", "pb-5")}>
            <ImageUploadSection images={images} setImages={setImages} />
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
            <LocationSelector
              location={location}
              setLocation={setLocation}
              width="w-full max-w-[600px] mx-auto"
            />
          </div>

          {/* contact details section */}
          <div className={clsx("w-full", "border-b-2 border-gray-200", "pb-5")}>
            <ContactDetailsSection
              contactDetails={contactDetails}
              setContactDetails={setContactDetails}
              width="w-full max-w-[600px] mx-auto"
            />
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
