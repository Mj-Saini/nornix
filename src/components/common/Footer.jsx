import React from "react";
import footerLogo from "../../assets/images/png/logo.png";
import { Link } from "react-router-dom";

const Footer = () => {
  const curruntYear = new Date().getFullYear();
  return (
    <div className="pt-12 md:pt-16 lg:pt-[86px] bg-[#FFFFFF]/5 relative">
      <span className="absolute flex rounded-[50%] w-full h-full bg-[#09c9ef34]  blur-[300px] top-0 z-0"></span>
      <div className="custom_container border-y border-[#B0B0B0] relative z-[1]">
        <div className="flex flex-wrap py-10">
          <div className="w-full lg:w-4/12 sm:px-2.5">
            <img src={footerLogo} alt="logo" />
            <p className="font-normal text-sm text-[#B0B0B0] mt-3">
              Building the future of AI, one intelligent agent at a time.
            </p>
          </div>
          <div className="w-full lg:w-8/12 mt-6 lg:mt-0">
            <div className="flex flex-wrap justify-between">
              <div className="w-4/12 sm:w-2/12 sm:px-2.5">
                <h3 className="font-normal text-base text-[#E0E0E0]">
                  Navigation
                </h3>
                <div className="flex flex-col gap-2 md:gap-5 mt-2 md:mt-5">
                  <Link
                    to={"/"}
                    className="font-normal text-sm text-[#B0B0B0] hover:text-[#09C9EF] duration-300"
                  >
                    About Us
                  </Link>
                  <Link
                    to={"/"}
                    className="font-normal text-sm text-[#B0B0B0] hover:text-[#09C9EF] duration-300"
                  >
                    Services
                  </Link>
                  <Link
                    to={"/"}
                    className="font-normal text-sm text-[#B0B0B0] hover:text-[#09C9EF] duration-300"
                  >
                    Contact
                  </Link>
                </div>
              </div>
              <div className="w-4/12 sm:w-2/12 sm:px-2.5">
                <h3 className="font-normal text-base text-[#E0E0E0]">
                  Resources
                </h3>
                <div className="flex flex-col gap-2 md:gap-5 mt-2 md:mt-5">
                  <Link
                    to={"/"}
                    className="font-normal text-sm text-[#B0B0B0] hover:text-[#09C9EF] duration-300"
                  >
                    Sign Up/Log In
                  </Link>
                  <Link
                    to={"/"}
                    className="font-normal text-sm text-[#B0B0B0] hover:text-[#09C9EF] duration-300"
                  >
                    FAQs
                  </Link>
                </div>
              </div>
              <div className="w-4/12 sm:w-2/12 sm:px-2.5">
                <h3 className="font-normal text-base text-[#E0E0E0]">Legal</h3>
                <div className="flex flex-col gap-2 md:gap-5 mt-2 md:mt-5">
                  <Link
                    to={"/"}
                    className="font-normal text-sm text-[#B0B0B0] hover:text-[#09C9EF] duration-300"
                  >
                    Terms of Service
                  </Link>
                  <Link
                    to={"/"}
                    className="font-normal text-sm text-[#B0B0B0] hover:text-[#09C9EF] duration-300"
                  >
                    Privacy Policy
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <p className="text-center px-5 font-normal text-sm text-[#B0B0B0] py-5 md:py-6 lg:py-10">
        © {curruntYear} NORNIX. All rights reserved.
      </p>
    </div>
  );
};

export default Footer;
