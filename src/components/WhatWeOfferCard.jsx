import React, { useState } from "react";
import { ExtensionIcon } from "./common/Icons";

const WhatWeOfferCard = ({ mapData }) => {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <div
      className={` border border-[#09C9EF]/15 rounded-[15px] p-5 xl:py-[30px] xl:px-8  group-hover:border-[#09C9EF] group-hover:bg-[#242424] h-full duration-300 ${
        isHovered ? "bg-[#242424] border-[#09C9EF]" : "bg-[#212121]/5"
      } `}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onTouchStart={() => setIsHovered(true)}
      onTouchEnd={() => setIsHovered(false)}
    >
      <span>
        <ExtensionIcon />
      </span>
      <h2 className="font-bold text-lg md:text-xl text-[#fff] my-3 md:my-[22px]">
        {mapData.heading}
      </h2>
      <p className="font-light text-base text-[#B0B0B0] ff_assistant">
        {mapData.descriptions}
      </p>
    </div>
  );
};

export default WhatWeOfferCard;
