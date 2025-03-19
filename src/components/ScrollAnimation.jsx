import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { servicesData } from "./common/Helper";
import { AutomationIcon } from "./common/Icons";

gsap.registerPlugin(ScrollTrigger);

const ScrollAnimation = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const sections = gsap.utils.toArray(".pinned-section");
    const isMobile = window.innerWidth <= 640;

    sections.forEach((section, index) => {
      const isLastSection = index === sections.length - 1;
      const nextSection = sections[index + 1];

      if (isMobile) {
        // Mobile View Pinning + Scale-0 Effect
        gsap.to(section, {
          scrollTrigger: {
            trigger: section,
            start: "top top",
            end: isLastSection
              ? "bottom bottom"
              : `top+=${section.offsetHeight} top`,
            pin: true,
            pinSpacing: false,
            scrub: 1,
          },
        });

        if (nextSection) {
          gsap.to(section, {
            scale: 1,
            scrollTrigger: {
              trigger: nextSection,
              start: "top top",
              scrub: 1,
              onEnter: () => gsap.to(section, { opacity: 0, duration: 0.5 }),
              onLeaveBack: () =>
                gsap.to(section, { opacity: 1, duration: 0.5 }),
            },
          });
        }
      } else {
        // Desktop View Pinning + Opacity Transition
        gsap.to(section, {
          scrollTrigger: {
            trigger: section,
            start: "top top",
            end: isLastSection
              ? "bottom top"
              : `top+=${section.offsetHeight} top`,
            pin: true,
            pinSpacing: isLastSection ? true : false,
            scrub: 1,
          },
        });

        if (nextSection) {
          ScrollTrigger.create({
            trigger: nextSection,
            start: "top 80%",
            onEnter: () => gsap.to(section, { opacity: 1, duration: 0.5 }),
            onLeaveBack: () => gsap.to(section, { opacity: 1, duration: 0.5 }),
          });
        }
      }
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <div ref={containerRef} className="w-full custom_container">
      <h2 className="text-3xl md:text-4xl lg:text-5xl text-white">Services</h2>
      {servicesData.map((value, index) => (
        <div key={index} className="overflow-hidden">
          <section
            className="pinned-section flex flex-col items-center justify-center relative 
           h-[70vh] sm:h-screen mt-2 md:mt-10 xl:mt-20"
          >
            {/* 🔹 Image with Scale Effect */}
            <img
              className="w-full h-[55%] sm:h-auto rounded-[37px]"
              src={value.img}
              alt="service-img"
            />

            <div className="content-overlay absolute bottom-[120px] sm:bottom-[180px] md:bottom-[155px] left-0 w-full h-full flex items-end justify-center z-10">
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

            <p className="text-base md:text-2xl font-light max-w-[810px] mx-auto py-4 md:py-10 text-center text-white z-20 bg-[#0C0C0C] ff_assistant">
              {value.about}
            </p>
          </section>
        </div>
      ))}
    </div>
  );
};

export default ScrollAnimation;
