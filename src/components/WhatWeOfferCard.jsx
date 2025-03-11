import React from "react";
import { ExtensionIcon } from "./common/Icons";

const WhatWeOfferCard = () => {
  return (
    <div className="border border-[#09C9EF]/15 rounded-[15px] p-5 xl:py-[30px] xl:px-8 bg-[#212121]/5 blur-[1.5px] group-hover:border-[#09C9EF] group-hover:bg-[#242424] group-hover:blur-[0] active:blur-0  duration-300 will-change-transform will-change-filter">
      <span>
        <ExtensionIcon />
      </span>
      <h2 className="font-bold text-lg md:text-xl text-[#fff] my-3 md:my-[22px]">
        AI Agent Generation
      </h2>
      <p className="font-light text-base text-[#B0B0B0]">
        Design and train artificial intelligence agents for various
        applications, from customer service to task automation.
      </p>
    </div>
  );
};

export default WhatWeOfferCard;
