

import React from "react";
import bgc_img1 from "../assets/images/png/bgc_img1.png";
import bgc_img2 from "../assets/images/png/bgc_img2.png";
import bgc_img3 from "../assets/images/png/bgc_img3.png";
import bgc_img4 from "../assets/images/png/bgc_img4.png";
import bgc_img5 from "../assets/images/png/bgc-img5.png";
import one from "../assets/images/png/one.png";
import two from "../assets/images/png/Frame 32.png";
import three from "../assets/images/png/three.png";
import four from "../assets/images/png/four.png";
import five from "../assets/images/png/five.png";

const Benifits = () => {
  return (
    <div className=" min-h-screen relative">
      <span className="absolute flex rounded-[50%] w-full h-full bg-[#09c9ef27]  blur-[500px] top-0 z-0"></span>

      <div className="custom_container px-3 mx-auto">
        <div className="py-12 md:py-14 lg:pt-[86px] relative">
          <div className="">
            {" "}
            <h2 className="text-3xl md:text-4xl lg:text-5xl text-white">
              Benefits of Joining Our Community
            </h2>
            <div class="grid-container mt-6 md:mt-10 xl:mt-20">
              <div className="box box1 relative flex justify-center items-center ">
                <img src={bgc_img1} alt="bgc img" className="w-full" />
                <p className="absolute top-[30%] xl:text-[18px] sm:text-[17px] text-[13px] leading-[110%] text-white xl:px-9 px-4">
                  Expand your reach and monetize your AI creativity with our
                  marketplace.
                </p>
                <img
                  className="absolute sm:w-[63px] sm:h-[57px] w-[50px] h-[50px] lg:bottom-[10px] md:bottom-[15px] bottom-0 lg:right-[20px] md:right-[35px] right-[10px]"
                  src={one}
                  alt="bgc img"
                />
              </div>

              <div class="box box2 relative flex justify-center items-center">
                <img src={bgc_img2} alt="bgc img" className="w-full" />
                <p className="absolute lg:top-[40%] md:top-[35%] top-[20%] lg:right-[10px] right-[10px]  xl:text-[18px] sm:text-[16px] text-[14px] w-[65%] md:w-[66%] lg:w-[80%]  leading-[110%] text-white p x-9">
                  Access cutting-edge technology
                </p>
                <p className="absolute  md:bottom-[38%] bottom-[35%] lg:left-[20px] left-[30px] xl:text-[18px] sm:text-[16px] text-[14px] xl:w-[98%] leading-[110%] text-white md:w-[60%] w-[70%] lg:w-[90%]">
                  without costly investments.
                </p>
                <img
                  className="absolute sm:w-[63px] sm:h-[57px] w-[50px] h-[50px] lg:bottom-[10px] md:bottom-[15px] bottom-0 lg:right-[20px] md:right-[30px] right-[10px]"
                  src={two}
                  alt="bgc img"
                />
              </div>

              <div class="box box3 relative flex justify-center items-center">
                <img src={bgc_img3} alt="bgc img" className="w-full" />
                <p className="absolute top-[20%] xl:top-[30%] sm:text-[18px] text-[14px]  leading-[110%] text-end xl:w-[80%] text-white xl:px-0 px-5">
                  Connect with businesses looking for smart solutions for their
                  operations.
                </p>

                <img
                  className="absolute sm:w-[63px] sm:h-[57px] w-[50px] h-[50px] xl:bottom-[10px] md:bottom-[10px] bottom-0 lg:left-[30px] md:left-[30px] left-[10px]"
                  src={three}
                  alt="bgc img"
                />
              </div>
              <div class="box box4 relative flex justify-center items-center">
                <img src={bgc_img4} alt="bgc img" />
                <p className="absolute lg:top-[30%] md:top-[35%] top-[30%] w-[60%] md:w-[90%] sm:left-[60px] left-[40px] lg:left-[10px] xl:text-[18px] sm:text-[16px] text-[12px] leading-[110%]  xl:w-[80%] text-white ">
                  Get technical support and join a
                </p>
                <p className="absolute lg:bottom-[30%] bottom-[25%] lg:right-[30px] right-[60px] xl:text-[18px] sm:text-[16px] leading-[110%] text-sm text-end lg:w-[65%] w-[50%] text-white ">
                  community of experts ready to help you improve your agents.
                </p>

                <img
                  className="absolute sm:w-[63px] sm:h-[57px] w-[50px] h-[50px] lg:bottom-[10px] md:bottom-[15px] bottom-0 lg:left-[30px] md:left-[30px] left-[10px]"
                  src={four}
                  alt="bgc img"
                />
              </div>
              <div class="box box5 relative  flex justify-center items-center">
                <img src={bgc_img5} alt="bgc img" className="w-full" />
                <p className="absolute top-[30%] righ t-[30px] xl:text-[18px] sm:text-[17px] text-sm  leading-[110%] text-center xl:w-[90%] text-white px-3 lg:px-0">
                  Receive constant updates with new features and AI development
                  improvements.
                </p>
                <img
                  className="absolute sm:w-[63px] sm:h-[57px] w-[50px] h-[50px] lg:bottom-[10px] bottom-[0px] lg:left-[30px] left-[20px]"
                  src={five}
                  alt="bgc img"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Benifits;
