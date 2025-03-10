import React from "react";
import { BenifitsSvgBox1 } from "./common/Icons";

const Benifits = () => {
  return (
    <div>
      <div className="py-12 md:py-14 lg:pt-[86px] relative">
        {/* <span className="absolute flex rounded-[50%] w-full h-full bg-[#09c9ef34]  blur-[300px] top-0"></span> */}

        <div className="custom_container">
          {" "}
          <h2 className="text-3xl md:text-4xl lg:text-5xl text-white">
            Benefits of Joining Our Community
          </h2>
          <div class="grid-container mt-6 md:mt-10 xl:mt-20">
            <div class="box box1 relative group">
              <span className="absolute">
                <BenifitsSvgBox1 />
              </span>{" "}
              <p className="font-light text-sm md:text-base lg:text-lg text-white ps-[30px] pe-14 py-14">
                Expand your reach and monetize your AI creativity with our
                marketplace.
              </p>
            </div>
            {/* <div class="box box2 relative group">
              <span className="absolute ">
                <BenifitsSvgBox1 />
              </span>
              box2
            </div>
            <div class="box box3 relative group">
              <span className="absolute">
                <BenifitsSvgBox1 />
              </span>
              Box 3
            </div>
            <div class="box box4 relative group">
              <span className="absolute">
                <BenifitsSvgBox1 />
              </span>{" "}
              Box 4
            </div>
            <div class="box box5 relative group">
              <span className="absolute">
                <BenifitsSvgBox1 />
              </span>{" "}
              Box 5
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Benifits;
