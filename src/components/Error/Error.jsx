import React from "react";

const Error = () => {
  return (
    <div className="flex h-screen w-screen flex-col justify-center text-center items-center ">
      <div className="bg-red-600 flex w-96 items-center h-72 rounded-lg p-16">
        <h1 className="text-gray-100 text-center uppercase">
          This component is not found
        </h1>
      </div>
    </div>
  );
};

export default Error;
