import clsx from "clsx";
import { useLocation, useParams } from "react-router-dom";
import { DesktopNavbar } from "@features/navbar";
import { MobileNavbar } from "@features/navbar";
import useIsMobile from "../../hooks/useIsmobile";
import api from "../../utils/axiosInstance";

function AdView() {
  const { id } = useParams();
  const location = useLocation();
  const adData = location.state;
  const isMobile = useIsMobile();

  return (
    <div
      className={clsx(
        "pt-[2rem]",
        "flex flex-col",
        isMobile ? "pt-[5rem]" : ""
      )}
    >
      {isMobile ? <MobileNavbar /> : <DesktopNavbar />}
      {/* for displaying image */}
      <div className={clsx("w-full h-[30rem]", "p-1", "flex gap-2")} key={id}>
        <img
          src={adData.imgSrc}
          alt="image"
          className={clsx("w-full md:w-[60%]  bg-yellow-50", "object-contain")}
        />
        {/* for contact info */}
        <div
          className={clsx(
            "hidden p-4 w-[40%] md:flex flex-col bg-red-50 gap-4"
          )}
        >
          <div>Name</div>
          <div>Email</div>
          <div>phone</div>
          <div>Chat</div>
        </div>
      </div>

      {/*for price */}
      <div className={clsx("flex p-4 border-2 border-gray-200")}>
        {adData.price}
      </div>

      {/* for displaying title & descr */}
      <div>
        <div className={clsx("flex p-4 border-2 border-gray-200")}>
          {adData.title}
        </div>
        <div className={clsx("flex p-4 border-2 border-gray-200")}>
          description
        </div>
      </div>

      <div
        className={clsx("md:hidden p-4 w-full flex flex-col bg-red-50 gap-4")}
      >
        <div>Name</div>
        <div>Email</div>
        <div>phone</div>
        <div>Chat</div>
      </div>
    </div>
  );
}

export default AdView;
