import clsx from "clsx";
import { useState } from "react";

function PriceInput() {
  const [price, setPrice] = useState(null);

  return (
    <div
      className={clsx(
        "flex flex-col space-y-3",
        "p-3",
        "w-full sm:max-w-[600px]",
        "mx-auto"
      )}
    >
      <div> Set a Price</div>
      <div
        className={clsx(
          "flex items-center justify-between",
          "w-full sm:max-w-[600px]",
          "rounded-md bg-indigo-300-400",
          " ",
          "transition-all duration-300 ease-out",
          "relative",
          "relative",
          "border-2 border-gray-300"
        )}
      >
        <div
          className={clsx(
            "p-3 font-semibold bg-white",
            "border-r-2 border-gray-300"
          )}
        >
          ₹
        </div>
        <input
          type="number"
          required
          min={0}
          placeholder="enter price"
          value={price}
          onChange={(e) => setPrice(Number(e.target.value))}
          className={clsx(
            "p-3",
            "flex-1",
            "rounded-r-md",
            "outline-none",
            "w-full sm:max-w-[600px]"
          )}
        />
      </div>
    </div>
  );
}

export default PriceInput;
