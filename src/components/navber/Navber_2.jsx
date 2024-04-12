import React, { useState } from "react";
import meun from "../../assets/Icons=Menu-w.svg";
import cancel from "../../assets/cancel.svg";
import logo from "../../assets/logo.svg";
import logo_2 from "../../assets/black-horizontal_1.svg";
import { Link } from "react-router-dom";
import Button from "../Button/Button";

function Navber_2() {
  const [open, setOpen] = useState(false);
  const DataLink = [
    { name: "Home", link: "/" },
    { name: "Service", link: "/services" },
    { name: "About", link: "/about" },
    { name: "Blog", link: "/blog" },
    { name: "Contact", link: "/contact" },
  ];

  return (
    <div className="shadow-md w-full fixed top-1 md:top-8 left-0 z-10 ">
      <div className="md:flex md:items-center md:justify-between  md:inset-x-2 lg:px-10 py-7">
        <div className="font-bold text-2xl cursor-pointer flex items-center text-gray-100">
          <span className="text-3xl mr-1 pt-2 flex items-center gap-3">
            <img src={logo} alt="logo" />
            <p className="text-gray-100 text-sm">Made by</p>
            <img src={logo_2} alt="" className="hidden md:block" />
          </span>
        </div>
        <div
          className="text-3xl absolute right-8 top-14 cursor-pointer md:hidden "
          onClick={() => setOpen(!open)}>
          {open ? <img src={cancel} /> : <img src={meun} />}
        </div>
        <ul
          className={`md:flex md:items-center md:pb-0 pb-12 gap-5 items-center  ${
            open ? "block h-[21rem] bg-bginputColor  px-12" : "hidden h-0"
          }`}>
          {DataLink.map((link) => (
            <li
              key={link.name}
              className="md:inline-block ml-0 lg:ml-[0.5rem] text-xl md:my-0 mb-7 text-gray-100 z-10">
              <Link
                to={link.link}
                className="text-gray-100 hover:text-gray-400 duration-500">
                {link.name}
              </Link>
            </li>
          ))}
          <Button title="Get started" />
        </ul>
      </div>
    </div>
  );
}

export default Navber_2;
