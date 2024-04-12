import React from "react";
import logoImages1 from "../../assets/acme 1.svg";
import logoImages2 from "../../assets/quantum 1.svg";
import logoImages3 from "../../assets/echo 1.svg";
import logoImages4 from "../../assets/celestia 1.svg";
import logoImages5 from "../../assets/pulse 1.svg";
import logoImages6 from "../../assets/apex 1.svg";
const Logo_page = () => {
  const imgaeData = [
    { images: logoImages1 },
    { images: logoImages2 },
    { images: logoImages3 },
    { images: logoImages4 },
    { images: logoImages5 },
    { images: logoImages6 },
  ];
  return (
    <div className="bg-black h-full w-full mt-44 gap-7 flex flex-col pb-12">
      <p className="text-center text-gray-600">
        Trusted by the world’s most innovative teams
      </p>
      <div className="flex justify-around flex-wrap md:px-28 lg:px-0">
        {imgaeData.map((img, i) => (
          <img src={img.images} />
        ))}
      </div>
    </div>
  );
};

export default Logo_page;
