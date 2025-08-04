import { useState } from "react";
import { Link } from "react-router-dom";
import Input from "../UI/Input";
import { Menu, X } from "lucide-react";
import Avatar from "../UI/Avatar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <nav className="bg-white shadow-md  top-0 sticky">
        <div className="flex items-center justify-between px-4 py-3">
          {/* Logo */}
          <div>studentXchange</div>

          {/* Desktop searchBar */}
          <div className="hidden md:flex items-center justify-center flex-grow">
            <div className="flex items-center justify-center w-full max-w-md rounded-md focus-within:ring-2 border-2 border-gray-200 focus-within:ring-blue-300 trasition-all ease-out duration-300">
              <Input
                type="text"
                placeholder="search..."
                className="flex-grow focus:ring-0 border-none outline-none"
              ></Input>
              <div className="bg-black p-2 rounded-r-md">
                <FontAwesomeIcon
                  icon={faSearch}
                  className="text-white  h-full"
                />
              </div>
            </div>
          </div>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-5">
            <Link to="#" className="relative group px-2 py-1">
              <span className="">about</span>
              <span className="absolute left-0 bottom-0 w-0 h-[3px] bg-blue-300 transition-all ease-out duration-500 group-hover:w-full"></span>
            </Link>
            <Link to="#" className="relative group px-2 py-1">
              <span className="">profile</span>
              <span className="absolute left-0 bottom-0 w-0 h-[3px] bg-blue-300 transition-all ease-out duration-500 group-hover:w-full"></span>
            </Link>
            <Link to="#" className="relative group px-2 py-1">
              <span className="">contact</span>
              <span className="absolute left-0 bottom-0 w-0 h-[3px] bg-blue-300 transition-all ease-out duration-500 group-hover:w-full"></span>
            </Link>

            {/* avatar */}
            <Avatar src="" alt="avatar" size={10}></Avatar>
          </div>

          <div className="flex gap-5">
            {/* avatar */}
            <Avatar
              src=""
              alt="avatar"
              size={10}
              className="md:hidden"
            ></Avatar>
            {/* Hamburger menu for mobile */}
            <div className="md:hidden">
              <button onClick={() => setOpen(!open)} className="h-full">
                {open ? (
                  <X className="h-7 w-7" />
                ) : (
                  <Menu className="w-7 h-7" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* search bar for mobile */}
        {/* <div className="md:hidden mt-3 flex items-center justify-center px-4 py-2">
          <Input type="text" placeholder="search..." className=""></Input>
        </div> */}
        <div className="md:hidden flex items-center justify-center px-3 py-1 ">
          <div className="flex items-center justify-center w-full max-w-md rounded-md border-2 border-gray-200 focus-within:ring-2 focus-within:ring-blue-300 trasition-all ease-out duration-300">
            <Input
              type="text"
              placeholder="search..."
              className="flex-grow focus:ring-0 border-none outline-none"
            ></Input>
            <div className="bg-black p-2 rounded-r-md">
              <FontAwesomeIcon icon={faSearch} className="text-white  h-full" />
            </div>
          </div>
        </div>

        {/* Mobile links */}
        {open && (
          <div className="flex flex-col items-center md:hidden">
            <Link
              to="#"
              className="px-3 py-2 bg-gray-100 w-full text-center border-b-2 transform hover:scale-105 hover:bg-gray-200 trasition-all ease-out duration-300 "
            >
              about
            </Link>
            <Link
              to="#"
              className="px-3 py-2 bg-gray-100 w-full text-center border-b-2 transform hover:scale-105 hover:bg-gray-200 trasition-all ease-out duration-300"
            >
              profile
            </Link>
            <Link
              to="#"
              className="px-3 py-2 bg-gray-100 w-full text-center border-b-2 transform hover:scale-105 hover:bg-gray-200 trasition-all ease-out duration-300"
            >
              contact
            </Link>
          </div>
        )}
      </nav>
    </>
  );
}

export default Navbar;
