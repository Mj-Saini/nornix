import React from "react";
import Header from "../components/common/Header";
import Hero from "../components/Hero";
import WhatWeOfferCard from "../components/WhatWeOfferCard";
import weOfferImg from "../assets/images/png/we-offer-img.png";
import serviceImg1 from "../assets/images/png/service-img1.png";
import { AutomationIcon, ExtensionIcon } from "../components/common/Icons";
import Slider from "react-slick";
import GetStarted from "../components/GetStarted";
import Footer from "../components/common/Footer";
import Benifits from "../components/Benifits";

const LandingPage = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    arrows: false,
    slidesToScroll: 1,
    vertical: false,
    verticalSwiping: false,
    autoplay: true,
    autoplaySpeed: 3000,
    adaptiveHeight: true,
  };
  return (
    <div>
      <Header />
      <Hero />
      <section className="py-12 md:py-14 lg:py-16 mt-6 lg:mt-14">
        <div className="custom_container">
          <div className="flex flex-wrap justify-between">
            <div className="w-full lg:w-4/12">
              <h2 className="text-3xl md:text-4xl lg:text-5xl text-white">
                What We Offer
              </h2>
              <p className="text-base font-thin text-[#B0B0B0] ff_microsoft pt-5 lg:pt-10">
                At NORNIX, we provide a comprehensive platform for building,
                customizing, and monetizing AI agents. Whether you're an
                entrepreneur looking to create intelligent assistants, a
                business seeking automation, or a developer wanting to scale AI
                solutions, our tools empower you at every step.{" "}
              </p>
              <p className="text-base font-thin text-[#B0B0B0] ff_microsoft  pt-5 relative z-[1]">
                With an intuitive interface, seamless integrations, and
                enterprise-level security, you can effortlessly bring your AI
                ideas to life and turn them into profitable solutions.
              </p>
              <img
                className="w-full sm:w-7/12 lg:w-full mx-auto md:scale-140 mix-blend-color-dodge md:mt-10"
                src={weOfferImg}
                alt="what we offer"
              />
            </div>
            <div className="w-full lg:w-8/12 lg:ps-10 xl:ps-16">
              <div className="flex flex-wrap">
                {[1, 1, 1, 1, 1, 1].map((items, index) => (
                  <div key={index} className="w-full sm:w-1/2 mt-5 sm:px-2.5">
                    <WhatWeOfferCard />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="py-12 md:py-14">
        <div className="custom_container">
          <div className="flex flex-wrap justify-between">
            <h2 className="text-3xl md:text-4xl lg:text-5xl text-white">
              Services
            </h2>

            <div className="mt-6 md:mt-10 xl:mt-20 w-full h-full ">
              <Slider {...settings}>
                {[1, 1].map((value, index) => (
                  <div key={index} className="relative h-full  px-2">
                    <div className="absolute w-full h-full bottom-[105px] left-0 flex items-end justify-center">
                      <div>
                        <h2 className="ff_mocrosoft font-normal text-xl sm:text-2xl md:text-3xl lg:text-4xl text-white text-center">
                          Process Automation Agent
                        </h2>
                        <div className="flex gap-3 sm:gap-5 md:gap-10 mt-3 mb-14 sm:mb-10 md:my-10">
                          <span className="flex gap-1 sm:gap-2 items-center p-1.5 md:p-2.5 rounded-[15px] bg-black">
                            <AutomationIcon />
                            Automation
                          </span>
                          <span className="flex gap-1 sm:gap-2 items-center p-1.5 md:p-2.5 rounded-[15px] bg-black">
                            <AutomationIcon />
                            Efficiency
                          </span>
                          <span className="flex gap-1 sm:gap-2 items-center p-1.5 md:p-2.5 rounded-[15px] bg-black">
                            <AutomationIcon />
                            AI
                          </span>
                        </div>
                      </div>
                    </div>
                    <img
                      className="w-full h-full"
                      src={serviceImg1}
                      alt="service-img"
                    />
                    <p className="text-xl md:text-2xl text-center font-light max-w-[810px] mx-auto pb-1 mt-6 md:mt-10 relative z-[1]">
                      Streamline repetitive tasks with AI-powered automation,
                      reducing errors and increasing efficiency across
                      workflows.
                    </p>
                  </div>
                ))}
              </Slider>
            </div>
          </div>
        </div>
      </section>

      {/* OUR PLATFORM */}

      <section className="py-12 md:py-14">
        <div className="custom_container">
          <h2 className="text-3xl md:text-4xl lg:text-5xl text-white">
            Who Our Platform Is For
          </h2>
          <div className="flex flex-wrap justify-between">
            {[1, 2, 3, 4, 5, 6].map((items, index) => (
              <div
                key={index}
                className="w-full md:w-1/2 mt-6 md:mt-12 lg:mt-20 md:px-2.5"
              >
                <div className="flex items-center gap-2 md:gap-5">
                  <span>
                    <ExtensionIcon />
                  </span>
                  <div className="">
                    <h2 className="ff_mocrosoft font-bold text-lg md:text-2xl text-white">
                      Businesses and Entrepreneurs
                    </h2>
                    <p className="font-light ff_microsoft text-base text-[#B0B0B0] mt-1 md:mt-5">
                      Optimize processes with personalized AI, improving
                      efficiency and reducing operational costs.
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Benifits />
      <GetStarted />
      <Footer />
    </div>
  );
};

export default LandingPage;
