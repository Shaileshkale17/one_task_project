import React from "react";

const Crad = ({ title = "title", image, para = "text" }) => {
  return (
    <div className="flex flex-col rounded-xl border-solid1px  bg-bgNewColor text-white text-center items-center justify-center gap-6 h-72 w-96  ">
      <img
        src={image}
        alt={title}
        className=" p-3 rounded-xl w-14 h-14 bg-white"
      />
      <div className="flex flex-col gap-2 items-center">
        <h2>{title}</h2>
        <p className="px-2">{para}</p>
      </div>
    </div>
  );
};

export default Crad;
