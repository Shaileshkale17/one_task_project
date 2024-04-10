import React from "react";

const Button = ({ types = "test", style, title = "test" }) => {
  return (
    <div>
      <button
        type={types}
        className="bg-gray-100 w-28 font-[Inter] py-2 px-2 rounded md;ml-8 hover:bg-gray-50 duration-500 text-black">
        {title}
      </button>
    </div>
  );
};

export default Button;
