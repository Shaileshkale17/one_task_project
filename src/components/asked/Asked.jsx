import React from "react";

import Questions from "../Questions/Questions";
const Asked = () => {
  const Questiondata = [
    { texts: "How does the pricing work for teams" },
    { texts: "How does the pricing work for teams" },
    { texts: "How does the pricing work for teams" },
    { texts: "How does the pricing work for teams" },
    { texts: "How does the pricing work for teams" },
  ];

  return (
    <div className="h-full pb-20 w-full flex flex-col gap-24 justify-center items-center">
      <div>
        <h1 className="font-custom text-54px font text-gray-100 font-font700">
          Frequently asked questions
        </h1>
      </div>
      <div className="h-full pb-20 w-full flex flex-col gap-6 justify-center items-center">
        {Questiondata.map((questions, index) => (
          <Questions paras={questions.texts} key={index} />
        ))}
      </div>
    </div>
  );
};

export default Asked;
