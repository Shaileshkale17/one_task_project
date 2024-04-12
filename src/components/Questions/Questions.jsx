import React from "react";
import pulse_icon from "../../assets/Vector.svg";
const Questions = ({ paras }) => {
  return (
    <div className="flex w-full flex-col items-center gap-8">
      <div className="flex justify-around w-full text-center bor">
        <p className="text-gray-100">{paras}</p>
        <img src={pulse_icon} alt="&#x2b;" />
      </div>
      <hr className="w-[81.333333%] md:w-[68.333333%] lg:w-7/12 px-20 " />
    </div>
  );
};

export default Questions;
