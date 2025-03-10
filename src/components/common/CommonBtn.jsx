


import React, { useState } from "react";
import { Link } from "react-router-dom";

const CommonBtn = ({ btnName }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isBgFilled, setIsBgFilled] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
    setIsBgFilled(true); // Background fill karne ke liye

    // 200ms ke baad button wapas original size me aa jaye
    setTimeout(() => {
      setIsHovered(false);
    }, 200);
  };

  const handleMouseLeave = () => {
    setTimeout(() => {
      setIsBgFilled(false); // Hover remove hone ke baad hi color remove ho
    }, 200);
  };

  return (
    <Link
      to={"/"}
      className={`relative font-normal text-base text-white rounded-full border-[0.8px] border-[#09C9EF] px-5 py-3 md:py-4.5 inline-block w-[150px] md:w-[196px] ff_microsoft capitalize duration-300 transform origin-left transition-transform ease-out overflow-hidden ${
        isHovered ? "scale-x-110" : "scale-x-100"
      }`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave} // Mouse leave event
    >
      {/* Static Text */}
      <span className="relative z-10">{btnName}</span>

      {/* Background Fill Effect */}
      <span
        className={`absolute top-0 left-0 w-full h-full bg-[#09C9EF] transition-all duration-300 rounded-full ${
          isHovered ? "scale-x-110" : "scale-x-100"
        }`}
        style={{
          transform: isBgFilled ? "translateX(0)" : "translateX(-100%)",
        }}
      ></span>
    </Link>
  );
};

export default CommonBtn;


