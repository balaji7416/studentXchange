import Searchbar from "./NavComponents/Searchbar";
import Logo from "./NavComponents/Logo";
import Links from "./NavComponents/Links";
import Location from "./NavComponents/Location";

function DesktopNavbar() {
  return (
    <>
      <nav className="bg-gray-100 shadow-md">
        <div className="flex items-center justify-between p-4">
          <Logo text="Olx"></Logo>
          <Location></Location>
          <Searchbar styles="flex-grow max-w-md" />
          <Links />
        </div>
      </nav>
    </>
  );
}

export default DesktopNavbar;
