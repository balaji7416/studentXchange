import clsx from "clsx";

function HeroSection() {
  return (
    <div className={clsx("w-full h-[30vh]", "p-2 mt-2 border-t-2")}>
      <img
        src="/heroBanner.jpg"
        alt="HeroBanner"
        className={clsx(
          "w-full h-full",
          "object-cover",
          "rounded-md shadow-xl",
          "transform hover:scale-[1.002] hover:shadow-2xl hover:translate-y-[0.1px]",
          "transition-all ease-out duration-500"
        )}
      />
    </div>
  );
}

export default HeroSection;
