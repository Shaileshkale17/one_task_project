import React from "react";
import arrow from "../../assets/Icons=Arrow-b.svg";
const StackBar = () => {
  return (
    <div className="bg-gradient-to-r from-purple-100 via-pink-200 to-blue-200  py-2 text-center ">
      <div className="flex flex-row justify-center items-center font-custom">
        <p className="hidden md:block ">
          This page is included in a free SaaS Website Kit.
        </p>
        <span className="mx-2 flex flex-row ">
          View the complete Kit <img src={arrow} />
        </span>
      </div>
    </div>
  );
};

export default StackBar;
