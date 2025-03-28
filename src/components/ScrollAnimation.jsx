

import Slider from "react-slick";
import { servicesData } from "./common/Helper";
import { ArrowIcon, AutomationIcon } from "./common/Icons";
import { useRef } from "react";

const ScrollAnimation = () => {
  const sliderRef=useRef()
  const settings = {
    dots: false,
    // infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    // autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
    responsive: [
   
      {
        breakpoint: 768,
        settings: {
          dots: true,
          
        }
      },
    ]
  };

  return (
    <div id="ai-agents" className="w-full custom_container ">
      <h2 className="text-3xl md:text-4xl lg:text-5xl text-white">Ai Agents</h2>
      <div className="w-[90%] mx-auto relative">
        <span onClick={()=> sliderRef.current.slickPrev()} className="-mt-20 cursor-pointer hidden md:flex absolute top-1/2 -left-12 lg:-left-16 translate-y-1/2 w-7 h-7 lg:w-10 lg:h-10 items-center justify-center border rounded-full border-[#333] -scale-100"><ArrowIcon /></span>
        <span onClick={()=> sliderRef.current.slickNext()} className="-mt-20 cursor-pointer hidden md:flex absolute top-1/2 -right-12 lg:-right-16 translate-y-1/2 w-7 h-7 lg:w-10 lg:h-10 items-center justify-center border rounded-full border-[#333]">
          <ArrowIcon/></span>
        <Slider ref={sliderRef} {...settings}>
          {" "}
          {servicesData.map((value, index) => (
            <div key={index} className="overflow-hidden">
              <section
                className="pinned-section flex flex-col items-center justify-center relative bg-[#0C0C0C]
           h-[70vh] sm:h-screen mt-5 md:mt-10 xl:mt-20"
              >
                {/* 🔹 Image with Scale Effect */}
                <img
                  className="w-full h-[60%] sm:h-[80%] rounded-[30px]"
                  src={value.img}
                  alt="service-img"
                />

                <div className="content-overlay absolute bottom-[180px] md:bottom-[155px] left-0 w-full h-full flex items-end justify-center z-10">
                  <div className="text-center">
                    <h2 className="ff_mocrosoft font-normal text-xl sm:text-2xl md:text-3xl lg:text-4xl text-white ff_assistant">
                      {value.agentProcess}
                    </h2>
                    <div className="flex flex-wrap justify-center gap-3 sm:gap-5 md:gap-10 mt-2 sm:mt-3 md:mt-6 mb-10 sm:mb-12 md:mb-16">
                      {[value.detail1, value.detail2, value.detail3].map(
                        (detail, i) => (
                          <span
                            key={i}
                            className="flex gap-1 sm:gap-2 items-center p-1.5 md:p-2.5 rounded-[15px] bg-[#0C0C0C]/50 ff_assistant"
                          >
                            <AutomationIcon />
                            <span className="text-white text-xs sm:text-base">
                              {detail}
                            </span>
                          </span>
                        )
                      )}
                    </div>
                  </div>
                </div>

                <p className="text-base md:text-2xl font-light max-w-[810px] mx-auto py-4 md:py-6 xl:py-10 text-center text-white z-20 bg-[#0C0C0C] ff_assistant">
                  {value.about}
                </p>
              </section>
            </div>
          ))}{" "}
        </Slider>
    </div>
    </div>
  );
};

export default ScrollAnimation;
