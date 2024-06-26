import React from "react";
import Button from "../Button/Button";
import helix from "../../assets/helix2 1.svg";
import emojistar from "../../assets/emojistar 1.svg";
const Message = () => {
  return (
    <div className="overflow-hidden lg:overflow-auto h-full md:h-screen pb-20 w-full flex flex-col justify-center items-center gap-14 relative ">
      <div className=" flex justify-center items-center flex-col">
        <h1 className="font-custom text-[26px] md:text-54px font text-gray-100 font-font700">
          Get instant access
        </h1>
        <p className="text-gray-100 text-center w-[62%]   lg:w-1/2">
          Celebrate the joy of accomplishment with an app designed to track your
          progress and motivate your efforts.
        </p>
      </div>
      <form method="post" className="flex flex-col md:flex-row gap-2 ">
        <input
          type="email"
          name="Email"
          id="Email"
          placeholder="name@email.com"
          className="py-2 px-5 rounded-xl bg-bginputColor w-55"
        />
        <Button title="Get access" width="w-full" />
      </form>
      <img
        src={helix}
        className="absolute top-56 lg:top-40 -right-24 lg:right-40 hidden md:block"
      />
      <img
        src={emojistar}
        className="absolute top-1  lg:top-8 -left-28 lg:left-44 hidden md:block"
      />
    </div>
  );
};

export default Message;
