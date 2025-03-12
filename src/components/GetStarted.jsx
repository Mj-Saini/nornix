import React from "react";
import getStartedImg from "../assets/images/png/we-offer-img.png";
import CommonBtn from "./common/CommonBtn";

const GetStarted = () => {
  return (
    <div className="py-12 md:py-14">
      <div className="custom_container">
        <h2 className="font-medium text-[#233034] text-4xl md:text-5xl lg:text-7xl xl:text-[80px] text-center mb-6 lg:mb-0">
          Empower your business with AI
        </h2>
        <div className="flex flex-wrap items-center">
          <div className="w-full md:w-7/12">
            <h2 className="text-3xl md:text-4xl lg:text-5xl text-white">
              Get Started Today
            </h2>
            <p className="font-light ff_assistant text-base text-[#B0B0B0] mt-1 md:mt-5 lg:mt-10">
              Sign up and start creating your first AI agent in minutes. Explore
              the limitless power of artificial intelligence and take your
              business to the next level. Join NORNIX today and be a part of the
              future of technology.
            </p>
            <div className="mt-6 md:mt-10">
              <CommonBtn btnName={"Get started"} />
            </div>
          </div>
          <div className="w-full sm:w-7/12 md:w-5/12 mx-auto overflow-clip">
            <img
              className="w-full -rotate-90 mix-blend-color-dodge md:scale-125"
              src={getStartedImg}
              alt="started-img"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default GetStarted;
