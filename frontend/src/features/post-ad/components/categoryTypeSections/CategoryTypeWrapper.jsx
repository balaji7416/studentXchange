import { useState } from "react";
import CategorySelector from "./CategorySelector";
import TypeSelector from "./TypeSelector";
import clsx from "clsx";

function CategoryTypeWrapper({ className }) {
  const [typeValue, setTypeValue] = useState("");
  const [categoryValue, setCategoryValue] = useState("");

  const handleChange = (newCat) => {
    setCategoryValue(newCat);
    setTypeValue("");
  };

  return (
    <div
      className={clsx("w-full sm:max-w-[600px] flex flex-col gap-3", className)}
    >
      <CategorySelector
        categoryValue={categoryValue}
        setCategoryValue={setCategoryValue}
        handleChange={handleChange}
      />
      <TypeSelector
        typeValue={typeValue}
        setTypeValue={setTypeValue}
        handleChange={handleChange}
        categoryValue={categoryValue}
      />
    </div>
  );
}

export default CategoryTypeWrapper;
