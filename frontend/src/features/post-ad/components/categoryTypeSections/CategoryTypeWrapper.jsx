import CategorySelector from "./CategorySelector";
import TypeSelector from "./TypeSelector";
import clsx from "clsx";

function CategoryTypeWrapper({
  className,
  category,
  setCategory,
  type,
  setType,
}) {
  // const [typeValue, setTypeValue] = useState("");
  // const [categoryValue, setCategoryValue] = useState("");

  const handleChange = (newCategory) => {
    // setCategoryValue(newCategory);
    // setTypeValue("");
    setCategory(newCategory);
    setType("");
  };

  return (
    <div
      className={clsx("w-full sm:max-w-[600px] flex flex-col gap-3", className)}
    >
      <CategorySelector
        category={category}
        setCategory={setCategory}
        handleChange={handleChange}
      />
      <TypeSelector
        type={type}
        setType={setType}
        handleChange={handleChange}
        category={category}
      />
    </div>
  );
}

export default CategoryTypeWrapper;
