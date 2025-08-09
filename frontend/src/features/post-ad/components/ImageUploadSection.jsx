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
    <div className={clsx("flex flex-col gap-3", "p-3")}>
      <div className={clsx("font-semibold")}>Upload a Image of Product</div>
      <button
        onClick={handleClick}
        className={clsx(
          "p-3 max-w-[150px] h-[150px] bg-white",
          "flex items-center justify-center"
        )}
      >
        <FontAwesomeIcon icon={faCamera} className={clsx("text-8xl")} />
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
