import clsx from "clsx";

function TitleDiscriptionSections() {
  return (
    <div
      className={clsx("flex flex-col w-full sm:max-w-[700px] gap-3", "mx-auto")}
    >
      <div
        className={clsx(
          "flex flex-col space-y-3",
          "w-full sm:max-w-[600px]",
          "mx-auto"
        )}
      >
        <div>Title</div>
        <div
          className={clsx(
            "flex items-center justify-between",
            "w-full sm:max-w-[600px]",
            "rounded-md bg-indigo-300-400",
            " ",
            "transition-all duration-300 ease-out",
            "relative",
            "mx-auto",
            "relative",
            "border-2 border-gray-300"
          )}
        >
          <input
            type="text"
            placeholder="title"
            onChange={(e) => (e.target.value += "")}
            value={""}
            className={clsx(
              "p-3",
              "flex-1",
              "rounded-md",
              "outline-none",
              "w-full sm:max-w-[600px]"
            )}
          />
        </div>
        <div className={clsx("flex flex-col space-y-3")}>
          <div>Description</div>
          <textarea
            name=""
            value={""}
            onChange={(e) => (e.target.value += "")}
            placeholder="description"
            className={clsx(
              "p-3 rounded-md",
              "min-h-[10rem]",
              "w-full sm:max-w-[600px]",
              "rounded-md",
              "border border-gray-300",
              "outline-none",
              "resize-none",
              "bg-white text-gray-900",
              "focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500",
              "transition-all duration-300 ease-out"
            )}
          ></textarea>
        </div>
      </div>
    </div>
  );
}

export default TitleDiscriptionSections;
