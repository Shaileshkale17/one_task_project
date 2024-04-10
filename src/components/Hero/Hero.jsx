import React from "react";
import arrow from "../../assets/Icons=Arrow-w.svg";
import Button from "../Button/Button";
const Hero = () => {
  return (
    <div className=" relative w-96 h-80 bg-gradient-to-b from-black via-purple-800 to-purple-200 border top-36 border-black shadow-md w-full h-screen">
      <div className="h-4/5 container flex  text-white items-center  justify-center flex-col gap-6 h-80 my-16">
        {/* <div className="flex flex-col"> */}
        <div className="">
          <p
            className="flex text-sm px-3 py-2 rounded-lg border-solid  border-gray-200 "
            style={{ border: "2px solid rgba(34, 34, 34, 1)" }}>
            Version 2.0 is here
            <span className="text-white mx-2" style={{ fontFamily: "Inter" }}>
              Read more
            </span>
            <img src={arrow} alt="" />
          </p>
        </div>
        <div className="">
          <h1 className="text-9xl m-auto text-center w-6/12">
            One Task at a Time
          </h1>
        </div>
        <div className="w-50">
          <p className="w-4/12 px-12 m-auto text-center text-2xl text-justify">
            Celebrate the joy of accomplishment with an app designed to track
            your progress, motivate your efforts, and celebrate your successes.
          </p>
        </div>
        <Button title="Get for free" />
      </div>
      <div class="box-border absolute w-[2344px] h-[1014px]  "></div>
    </div>
  );
};

export default Hero;
