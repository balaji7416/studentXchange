import clsx from "clsx";

function Footer() {
  return (
    <div
      className={clsx(
        "flex flex-col",
        "p-4 space-y-4",
        "bg-blue-600 text-white text-sm",

        "mt-5",
        "border-t-2 border-gray-200"
      )}
    >
      <div className={clsx("self-center  font-bold text-2xl")}>ISMart</div>
      <div className={clsx("flex flex-col ", "")}>
        <div className="text-md font-semibold">About Us</div>
        <div className="font-md">
          ISMart is a student-to-student marketplace built by and for IIT (ISM)
          students. Buy, sell, swap, or donate within your campus — fast, safe,
          and hassle-free
        </div>
      </div>

      <div className={clsx("flex flex-col")}>
        <div className="text-md font-semibold">Contact US</div>
        <div>Email: queries@IISmart.com</div>
      </div>

      <div className="flex justify-center text-md font-semibold">
        <p>© 2025 ISMart</p>
      </div>
    </div>
  );
}

export default Footer;
