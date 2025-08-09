import clsx from "clsx";
import { useState } from "react";

function PriceInput() {
  const [price, setPrice] = useState(null);

  return (
    <div
      className={clsx("flex flex-col space-y-3", "w-full p-3", "bg-slate-400")}
    >
      <div> Set a Price</div>
      <div
        className={clsx(
          "flex items-center justify-between",
          " w-3/4 max-w-[500px]",
          "rounded-md bg-indigo-300-400",
          " ",
          "transition-all duration-300 ease-out",
          "relative"
        )}
      >
        <input
          type="number"
          required
          min={0}
          placeholder="enter price"
          value={price}
          onChange={(e) => setPrice(Number(e.target.value))}
          style={{
            MozAppearance: "textfield",
            WebkitAppearance: "none",
            margin: 0,
          }}
          className={clsx("p-3", "flex-1", "rounded-md", "outline-none")}
        />
      </div>
    </div>
  );
}

export default PriceInput;
