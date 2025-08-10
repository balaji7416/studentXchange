import clsx from "clsx";
function Logo({ text, size }) {
  return <div className={clsx("font-bold", size || "text-2xl")}>{text}</div>;
}

export default Logo;
