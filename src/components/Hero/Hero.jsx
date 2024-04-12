import React from "react";
import arrow from "../../assets/Icons=Arrow-w.svg";
import Button from "../Button/Button";
import bg_logo from "../../assets/border-2.png";
import icon_1 from "../../assets/message 1.svg";
import icon_2 from "../../assets/cursor 2.svg";

const Hero = () => {
  return (
    <div className=" overflow-y-visible   md:overflow-x-hidden lg:md:overflow-x-clip  relative  bg-gradient-to-b from-black via-purple-800 to-purple-200 border top-36 border-black shadow-md w-full h-full">
      <div className=" h-4/5 relative  flex  text-white items-center   justify-center flex-col gap-[1.9rem] md:mt-[136px] md:gap-0 lg:gap-[3.9rem]  h-80 my-16">
        {/* <div className="flex flex-col"> */}
        <div className="">
          <p
            className="flex text-sm px-3 py-2 rounded-lg border-solid  border-gray-200  text-gray-600"
            style={{ border: "2px solid rgba(34, 34, 34, 1)" }}>
            Version 2.0 is here
            <span className="text-white mx-2" style={{ fontFamily: "Inter" }}>
              Read more
            </span>
            <img src={arrow} alt="" />
          </p>
        </div>
        <div className="">
          <h1 className=" text-[54px] md:text-[116px]  lg:text-9xl font-black  m-auto text-center w-7/12 md:w-4/5 lg:w-6/12 font-custom ">
            One Task at a Time
          </h1>
        </div>
        <div className="w-50">
          <p className="w-full md:w-7/12 lg:w-[28%]   m-auto text-center text-2xl text-center md:text-justify  md:px-0 px-12">
            Celebrate the joy of accomplishment with an app designed to track
            your progress, motivate your efforts, and celebrate your successes.
          </p>
        </div>
        <Button title="Get for free" className="-z-1" />
      </div>

      <img
        src={icon_1}
        alt=""
        className="absolute  top-40 lg:right-80 -right-4 hidden md:block "
      />
      <img
        src={icon_2}
        alt=""
        className=" absolute md: top-44 md:-left-4 lg:left-21rem hidden md:block"
      />

      <img src={bg_logo} alt="" className="w-full -z-0 pt-6 md:pt-8 lg:pt-20" />
    </div>
  );
};

export default Hero;
