import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import clsx from "clsx";

function ContactDetailsSection() {
  return (
    <div
      className={clsx("flex flex-col items-center justify-center  gap-3 p-3")}
    >
      <div className={clsx("font-semibold text-medium")}>
        Confirm your contact details
      </div>

      {/*for username and user icon */}
      <div
        className={clsx(
          "flex p-3 items-center justify-center gap-5 ",
          "w-full"
        )}
      >
        <div
          className={clsx(
            "w-[2.5rem] h-[2.5rem] sm:w-[3.5rem] sm:h-[3.5rem] md:w-[6rem] md:h-[6rem] bg-[#e1e1e1] rounded-full flex justify-center items-center"
          )}
        >
          <FontAwesomeIcon icon={faUser} />
        </div>
        <input
          type="text"
          value={"username"}
          onChange={(e) => (e.target.value += "")}
          className={clsx(
            "p-3 rounded-md",
            "w-auto md:w-full md:max-w-[300px]",
            "outline-none focus:ring-2 focus:border-opacity-0 focus:ring-blue-200 ",
            "transition-all duration-300 ease-in-out",
            "border-2 border-gray-300"
          )}
        />
      </div>

      <div className={clsx("font-semibold tex-medium opacity-40")}>
        *Please Provide atleast one field to proceed with your post
      </div>
      <div
        className={clsx(
          "flex flex-col gap-3 w-full items-center justify-center"
        )}
      >
        <input
          type="email"
          value={""}
          onChange={(e) => (e.target.value += "")}
          placeholder="email"
          className={clsx(
            "p-3 rounded-md",
            "w-auto md:w-full md:max-w-[400px]",
            "outline-none focus:ring-2 focus:border-opacity-0 focus:ring-blue-200 ",
            "transition-all duration-300 ease-in-out",
            "border-2 border-gray-300"
          )}
        />
        <input
          type="tel"
          maxLength={10}
          inputMode="numeric"
          pattern="[0-9]{10}"
          placeholder="phone number"
          onChange={(e) => (e.target.value = e.target.value.replace(/\D/g, ""))}
          className={clsx(
            "p-3 rounded-md",
            "w-auto md:w-full md:max-w-[400px]",
            "outline-none focus:ring-2 focus:border-opacity-0 focus:ring-blue-200 ",
            "transition-all duration-300 ease-in-out",
            "border-2 border-gray-300"
          )}
        />
      </div>
    </div>
  );
}

export default ContactDetailsSection;
