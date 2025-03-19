import React from "react";
import Header from "../components/common/Header";
import Hero from "../components/Hero";
import WhatWeOfferCard from "../components/WhatWeOfferCard";
import weOfferImg from "../assets/images/png/we-offer-img.png";
// import serviceImg1 from "../assets/images/png/service-img1.png";
import { AutomationIcon, ExtensionIcon } from "../components/common/Icons";
import Slider from "react-slick";
import GetStarted from "../components/GetStarted";
import Footer from "../components/common/Footer";
import Benifits from "../components/Benifits";
import ScrollAnimation from "../components/ScrollAnimation";
import { weOfferedData } from "../components/common/Helper";

const LandingPage = () => {
  return (
    <div>
      <Header />
      <Hero />
      <section
        id="what-we-offer"
        className="py-12 md:py-14 lg:py-16 mt-6 lg:mt-14"
      >
        <div className="custom_container">
          <div className="flex flex-wrap justify-between">
            <div className="w-full lg:w-4/12">
              <h2 className="text-3xl md:text-4xl lg:text-5xl text-white">
                What We Offer
              </h2>
              <p className="text-base font-thin text-[#B0B0B0] ff_assistant pt-5 lg:pt-10">
                At NORNIX, we provide a comprehensive platform for building,
                customizing, and monetizing AI agents. Whether you're an
                entrepreneur looking to create intelligent assistants, a
                business seeking automation, or a developer wanting to scale AI
                solutions, our tools empower you at every step.{" "}
              </p>
              <p className="text-base font-thin text-[#B0B0B0] ff_assistant  pt-5 relative z-[1]">
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
                {weOfferedData.map((items, index) => (
                  <div
                    key={index}
                    className="w-full sm:w-1/2 mt-5 sm:px-2.5 group"
                  >
                    <WhatWeOfferCard mapData={items} />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <ScrollAnimation />

      {/* OUR PLATFORM */}

      <section id="for-whom" className="py-12 md:py-14">
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
                    <p className="font-light ff_assistant text-base text-[#B0B0B0] mt-1 md:mt-5">
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
