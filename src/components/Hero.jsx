import React, { useEffect, useState } from "react";
import CommonBtn from "./common/CommonBtn";
import heroBgImg from "../assets/images/png/hero-bg.png";
import { slideWords } from "./common/Helper";


const colors = ["#09C9EF", "#FF5733", "#33FF57"];
const Hero = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % slideWords.length);
    }, 1500);
    return () => clearInterval(interval);
  }, []);
  return (
    <div className="h-[calc(100vh-88px)] flex flex-col hero_ bg_img">
      <img
        className="mix-blend-color-dodge absolute top-1/2 -translate-y-1/2 right-0 w-[90%]"
        src={heroBgImg}
        alt="bg-img"
      />
      <div className="grow flex flex-col justify-center z-[2]">
        <div className="custom_container realtive">
          <div className="flex flex-wrap h-full items-center">
            <div className="w-full md:w-8/12">
              <h1 className="font-light text-2xl sm:text-4xl lg:text-5xl xl:text-[64px] leading-[110%]">
                Welcome to <span className="text-[#09C9EF]">NORNIX</span> - The
                Future of Personalized Artificial{" "}
                <span className="text-[#09C9EF]">Intelligence</span>
              </h1>
              <div className="mt-10 absolute bottom-0 mb-5 md:mb-0 lg:mb-8 max-xl:mb-10 ">
                <CommonBtn btnName="Get Started" />
              </div>
            </div>
          </div>
        </div>{" "}
        <div className="w-full bg-[#FFFFFF05] backdrop-blur-2xl mt-10 md:mt-16">
          <div className="custom_container">
            <div className="flex flex-wrap py-4 md:p-4 items-center">
              <div className="w-full lg:w-1/2">
                <h2 className="font-normal text-xl md:text-2xl text-[#B0B0B0] ff_microsoft relative">
                  AI Agents with Our Platform -{" "}
                  <span
                    key={index}
                    className="animate-slideUp text-[#09C9EF] inline-block capitalize"
                    style={{ color: colors[index % colors.length] }}
                  >
                    {slideWords[index]}
                  </span>
                </h2>
              </div>
              <div className="w-full lg:w-1/2 mt-5 lg:mt-0">
                <p className="ff_microsoft font-light text-xs sm:text-base tracking-[0.5px] !text-[#DFDFDF]">
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
