import React, { useState } from "react";
import {
  BsArrowLeftShort,
  BsFillHeartFill,
  BsFillFileEarmarkPersonFill,
} from "react-icons/bs";
import { Link, useLocation } from "react-router-dom";

const Sidebar = () => {
  const [openSideBar, setOpenSideBar] = useState(true);
  const location = useLocation();

  return (
    <div
      className={`bg-primary h-screen p-5 text-ternary pt-8 ${
        openSideBar ? "w-72" : "w-20"
      } duration-300 relative`}
    >
      <BsArrowLeftShort
        className={`bg-white text-dark-purple text-3xl rounded-full 
          absolute -right-3 top-9 border border-primary cursor-pointer ${
            !openSideBar && "rotate-180"
          }`}
        onClick={() => setOpenSideBar(!openSideBar)}
      />

      <ul className="mt-12">
        <Link to="/authors">
          <li
            className={`text-gray-300 text-sm flex items-center gap-x-4 cursor-pointer p-2 hover:bg-light-white rounded-md mt-2 
                ${
                  location.pathname === "/" || location.pathname === "/authors"
                    ? "bg-light-white"
                    : ""
                }`}
          >
            <span className="text-2xl block float-left">
              <BsFillFileEarmarkPersonFill />
            </span>
            <span
              className={`text-base font-medium flex-1 duration-200 ${
                !openSideBar && "hidden"
              }`}
            >
              Authors
            </span>
          </li>
        </Link>

        <Link to="/favorite-authors">
          <li
            className={`text-gray-300 text-sm flex items-center gap-x-4 cursor-pointer p-2 hover:bg-light-white rounded-md mt-2
                ${
                  location.pathname === "/favorite-authors"
                    ? "bg-light-white"
                    : ""
                }`}
          >
            <span className="text-2xl block float-left">
              <BsFillHeartFill />
            </span>
            <span
              className={`text-base font-medium flex-1 duration-300 ${
                !openSideBar && "hidden"
              }`}
            >
              Favorite Authors
            </span>
          </li>
        </Link>
      </ul>
    </div>
  );
};

export default Sidebar;
