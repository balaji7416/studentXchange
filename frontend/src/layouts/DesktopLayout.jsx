import Footer from "../shared/Footer";
import clsx from "clsx";
import { Outlet } from "react-router-dom";

function DesktopLayout({ children }) {
  return (
    <div className={clsx("pt-[6rem]")}>
      {children}
      <Footer />
    </div>
  );
}

export default DesktopLayout;
