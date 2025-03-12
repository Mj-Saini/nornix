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

    sections.forEach((section, index) => {
      const isLastSection = index === sections.length - 1;
      const nextSection = sections[index + 1];

      // Pinning Logic
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
          onEnter: () => gsap.to(section, { opacity: 0, duration: 0.5 }),
          onLeaveBack: () => gsap.to(section, { opacity: 1, duration: 0.5 }),
        });
      }
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <div ref={containerRef} className="w-full custom_container">
      <h2 className="text-3xl md:text-4xl lg:text-5xl text-white relative z-[20]">Services</h2>
      {/* 🔹 Pinned Sections Start */}
      {servicesData.map((value, index) => (
        <section
          key={index}
          className="pinned-section h-screen flex flex-col items-center justify-center mt-6 md:mt-10 xl:mt-20 relative"
        >
          {/* Background Image */}
          <img
            className="w-full h-auto object-cover rounded-[37px]"
            src={value.img}
            alt="service-img"
          />

          {/* Content Overlay */}
          <div className="content-overlay absolute bottom-[135px] left-0 w-full h-full flex items-end justify-center z-10">
            <div className="text-center">
              <h2 className="ff_mocrosoft font-normal text-xl sm:text-2xl md:text-3xl lg:text-4xl text-white ff_assistant">
                {value.agentProcess}
              </h2>
              <div className="flex gap-3 sm:gap-5 md:gap-10 mt-3 mb-14 sm:mb-10 md:my-10">
                {[value.detail1, value.detail2, value.detail3].map(
                  (detail, i) => (
                    <span
                      key={i}
                      className="flex gap-1 sm:gap-2 items-center p-1.5 md:p-2.5 rounded-[15px] bg-[#0C0C0C]/50 ff_assistant"
                    >
                      <AutomationIcon />
                      <span className="text-white">{detail}</span>
                    </span>
                  )
                )}
              </div>
            </div>
          </div>

          {/* About Text */}
          <p className="text-xl md:text-2xl font-light max-w-[810px] mx-auto py-6 md:py-10 text-center text-white z-20 bg-[#0C0C0C] ff_assistant">
            {value.about}
          </p>
        </section>
      ))}
    </div>
  );
};

export default ScrollAnimation;
