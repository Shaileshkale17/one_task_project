import React from "react";
import Image_int from "../../assets/App Night.svg";
const Intuitive_interface = () => {
  return (
    //
    <div className="h-full pb-20 w-full flex flex-col gap-24 justify-center items-center">
      <div className="flex text-center flex-col">
        <h1 className="text-gray-100 text-[36px] md:text-54px font-custom font-font700">
          Intuitive interface
        </h1>
        <p className="text-gray-100 m-auto w-8/12 ">
          Celebrate the joy of accomplishment with an app designed to track your
          progress, motivate your efforts, and celebrate your successes, one
          task at a time.
        </p>
      </div>
      <img src={Image_int} alt="image not found !" className="w-11/12" />
    </div>
    // </div>
  );
};

export default Intuitive_interface;
