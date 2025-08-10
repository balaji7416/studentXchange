import clsx from "clsx";
import { useState, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCamera } from "@fortawesome/free-solid-svg-icons";

function ImageUploadSection() {
  const [filename, setFilename] = useState("");
  const fileRef = useRef(null);

  const handleFileChange = (e) => {
    if (e.target.files.length > 0) {
      setFilename(e.target.files[0].name);
    } else {
      setFilename("no file chosen");
    }
  };

  const handleClick = () => {
    fileRef.current.click();
  };

  return (
    <div
      className={clsx(
        "flex flex-col items-center justify-center gap-3",
        "width-full max-w-[600px] mx-auto",
        "p-2"
      )}
    >
      <div className={clsx("font-semibold")}>Upload a Image of Product</div>
      <button
        onClick={handleClick}
        className={clsx(
          "p-3 w-[4rem] h-[4rem] md:w-[6rem] md:h-[6rem] bg-white",
          "flex items-center justify-center",
          "rounded-md shadow-md border-2 border-gray-100"
        )}
      >
        <FontAwesomeIcon
          icon={faCamera}
          className={clsx("text-3xl md:text-4xl text-blue-400", "")}
        />
      </button>
      <div
        className={clsx(
          "font-semibold",
          filename ? "text-green-500:" : "text-red-400"
        )}
      >
        {filename}
      </div>
      <input
        type="file"
        required
        ref={fileRef}
        onChange={handleFileChange}
        className={clsx("hidden")}
        accept="image/*"
      />
    </div>
  );
}

export default ImageUploadSection;
