import clsx from "clsx";

function Input({ type, placeholder, value, onChange, className = "" }) {
  return (
    <input
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      className={clsx(
        "w-full p-2 rounded-md border border-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-400",
        className
      )}
    ></input>
  );
}

export default Input;
