import clsx from "clsx";

function PostAdBtn() {
  return (
    <button
      type="submit"
      className={clsx(
        "bg-black w-[200px] h-[50px] rounded-md text-white font-bold text-[16px] text-center",
        ""
      )}
    >
      Post Ad
    </button>
  );
}

export default PostAdBtn;
