import { useState } from "react";
import CategorySelector from "./CategorySelector";
import TypeSelector from "./TypeSelector";

function CategoryTypeWrapper() {
  const [typeValue, setTypeValue] = useState("");
  const [categoryValue, setCategoryValue] = useState("");

  const handleChange = (newCat) => {
    setCategoryValue(newCat);
    setTypeValue("");
  };

  return (
    <div className="w-full flex flex-col gap-3">
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
