import clsx from "clsx";

function TitleDiscriptionSections() {
  return (
    <div className={clsx("flex flex-col w-full p-3 gap-3")}>
      <div
        className={clsx("flex flex-col space-y-3", "w-full", "bg-slate-400")}
      >
        <div>Title</div>
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
            type="text"
            placeholder="title"
            // onChange={(e) => setCategoryValue(e.target.value)}

            className={clsx("p-3", "flex-1", "rounded-md", "outline-none")}
          />
        </div>
        <div className={clsx("flex flex-col space-y-3")}>
          <div>Description</div>
          <textarea
            name=""
            id=""
            className={clsx(
              "p-3 rounded-md",
              "w-full max-w-[500px] min-h-[10rem]",
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
