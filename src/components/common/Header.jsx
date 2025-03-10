"use client";
import React, { useState, useEffect } from "react";

import { headerData } from "./Helper";
import { Link, useLocation } from "react-router-dom";
import logo from "../../assets/images/png/logo.png";

const Header = () => {
  const location = useLocation();
  const [toggleNav, setToggleNav] = useState(false);

  useEffect(() => {
    if (toggleNav) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [toggleNav]);

  return (
    <div className="bg-[#12181A] z-10 relative">
      <div className={`custom_container`}>
        <div
          className={`flex items-center bg-header-gradient rounded-[20px]
           justify-between py-4 md:py-[30px] 
          `}
        >
          <Link to="/" className="uppercase text-white">
            <img src={logo} alt="logo" />
          </Link>
          <div
            className={` flex gap-5 xl:gap-[70px] max-lg:fixed top-0 max-lg:h-screen max-lg:w-screen max-lg:items-center max-lg:justify-center flex-col lg:flex-row bg-black lg:bg-transparent duration-300 ${
              !toggleNav ? "-left-[100vw]" : "left-0"
            }`}
          >
            {headerData.map((tab, index) => (
              <div key={index} className="relative">
                <Link
                  to={tab.path}
                  className={`font-light text-lg capitalize flex items-center gap-3 justify-between duration-300 hover:text-[#09C9EF] ${
                    location.pathname === tab.path
                      ? "!text-[#09C9EF]"
                      : "text-white"
                  }`}
                >
                  {tab.tabs}
                </Link>
              </div>
            ))}
          </div>

          <div
            onClick={() => setToggleNav(!toggleNav)}
            className="flex flex-col justify-between h-5 w-6 lg:hidden z-[100] relative cursor-pointer duration-300"
          >
            <span
              className={` border-[2px] w-full duration-300 ${
                toggleNav
                  ? "translate-y-[8.5px] -rotate-45 border-white"
                  : "border-white"
              }`}
            ></span>
            <span
              className={` border-[2px] w-full duration-300 ${
                toggleNav ? "rotate-45 border-white" : "border-white"
              }`}
            ></span>
            <span
              className={` border-[2px] w-full duration-300 ${
                toggleNav ? "opacity-0 border-white" : "border-white"
              }`}
            ></span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
