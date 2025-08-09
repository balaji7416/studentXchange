import Footer from "../shared/Footer";
import { Outlet } from "react-router-dom";

import clsx from "clsx";

function MobileLayout({ children }) {
  return (
    <div className={clsx("pt-16")}>
      {children}
      <Footer />
    </div>
  );
}
export default MobileLayout;
