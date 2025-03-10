import React from "react";
import { Link } from "react-router-dom";

const CommonBtn = ({ btnName }) => {
  return (
    <>
      <Link
        to={"/"}
        className={` font-normal text-base text-white rounded-full border-[0.8px] border-[#09C9EF] px-5 py-4.5 inline-block w-[196px] ff_microsoft capitalize hover:bg-[#09C9EF] duration-300`}
      >
        {btnName}
      </Link>
    </>
  );
};

export default CommonBtn;

