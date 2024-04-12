import React from "react";
import Crad from "../cerd/Crad";
import Ecosystem from "../../assets/Icons=Ecosystem.svg";
const Card_section = () => {
  const cardData = [
    {
      title: "Integration ecosystem",
      image: Ecosystem,
      para: "Enhance your productivity by connecting with your favorite tools, keeping all your essentials in one place.",
    },
    {
      title: "Goal setting and tracking",
      image: Ecosystem,
      para: "Define and track your goals, breaking down objectives into achievable tasks to keep your targets in sight.",
    },
    {
      title: "Secure data encryption",
      image: Ecosystem,
      para: "With end-to-end encryption, your data is securely stored and protected from unauthorized access.",
    },
  ];

  return (
    <div className="h-full pb-20 w-full flex flex-col lg:flex-wrap gap-24 justify-center items-center">
      <div className="flex flex-col items-center">
        <h1 className="font-custom font-font700 text-white text-center text-[32px] md:text-54px ">
          Everything you need
        </h1>
        <p className="text-gray-100 text-center w-4/5">
          Enjoy customizable lists, team work tools, and smart tracking all in
          one place. Set tasks, get reminders, and see your progress simply and
          quickly.
        </p>
      </div>
      <div className="flex flex-col items-center content-center justify-center lg:flex-wrap gap-8 lg:flex-row    ">
        {cardData.map((task, i) => (
          <Crad
            key={i}
            image={task.image}
            title={task.title}
            para={task.para}
          />
        ))}
      </div>
    </div>
  );
};

export default Card_section;
