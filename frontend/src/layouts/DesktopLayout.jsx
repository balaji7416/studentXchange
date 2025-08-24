import Footer from "../shared/Footer";

import clsx from "clsx";
import { Outlet } from "react-router-dom";

function DesktopLayout({ children }) {
  return (
    <div className={clsx("pt-[6rem]", "flex flex-col", "min-h-[100rem]")}>
      <main className={clsx("flex-1", "")}>{children}</main>

      <Footer />
    </div>
  );
}

export default DesktopLayout;
