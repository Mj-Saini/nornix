import React from "react";
import CommonBtn from "./common/CommonBtn";

const Hero = () => {
  return (
    <div className="h-[calc(100vh-88px)] flex flex-col hero_bg_img bg-cover">
      <div className="grow flex flex-col justify-center z-[2]">
        <div className="custom_container realtive">
          <div className="flex flex-wrap h-full items-center">
            <div className="w-full md:w-8/12">
              <h1 className="font-light text-2xl sm:text-4xl lg:text-5xl xl:text-[64px] leading-[110%]">
                Welcome to <span className="text-[#09C9EF]">NORNIX</span> - The
                Future of Personalized Artificial{" "}
                <span className="text-[#09C9EF]">Intelligence</span>
              </h1>
              <div className="mt-10 absolute bottom-0 mb-5 xl:mb-20">
                <CommonBtn btnName="Get Started" />
              </div>
            </div>
          </div>
        </div>{" "}
        <div className="w-full bg-[#11111161] backdrop-blur-2xl mt-10 md:mt-16">
          <div className="custom_container">
            <div className="flex flex-wrap p-4 items-center">
              <div className="w-full lg:w-1/2">
                <h2>
                  AI Agents with Our Platform - <span></span>{" "}
                </h2>
              </div>
              <div className="w-full lg:w-1/2">
                <p className="ff_microsoft font-light text-sm sm:text-base tracking-[0.5px] !text-[#DFDFDF]">
                  At NORNIX, we revolutionize the way businesses and
                  entrepreneurs access Artificial Intelligence. Our platform
                  allows you to create, customize, and sell AI agents designed
                  to empower businesses across multiple industries.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
