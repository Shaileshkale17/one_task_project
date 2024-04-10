import React from "react";
import X from "../../assets/Property 1=X.svg";
import Instagram from "../../assets/Property 1=Instagram.svg";
import Pinterest from "../../assets/Property 1=Pinterest.svg";
import LinkedIn from "../../assets/Property 1=LinkedIn.svg";
import TikTok from "../../assets/Property 1=TikTok.svg";
import Youtube from "../../assets/Property 1=Youtube.svg";
const Footer = () => {
  const footericon = [
    { icon: X },
    { icon: Instagram },
    { icon: Pinterest },
    { icon: LinkedIn },
    { icon: TikTok },
    { icon: Youtube },
  ];
  return (
    <>
      <hr className="bg-gray-600" />
      <footer className="flex justify-between p-5 ">
        <p className="text-gray-600">
          @ 2024 Your Company, Inc. All rights reserved
        </p>
        <div className="flex gap-2">
          {footericon.map((icon, i) => (
            <img src={icon.icon} key={i} />
          ))}
        </div>
      </footer>
    </>
  );
};

export default Footer;
