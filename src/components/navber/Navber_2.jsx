import React, { useState } from "react";
import meun from "../../assets/Icons=Menu-w.svg";
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
    <div className="shadow-md w-full fixed top-8 left-0">
      <div className="md:flex items-center justify-between py-4 md:px-10 py-7">
        <div className="font-bold text-2xl cursor-pointer flex items-center  text-gray-100 ">
          <span className="text-3xl mr-1 pt-2 flex items-center gap-3">
            <img src={logo} alt="logo" />
            <p className="text-gray-100 text-sm">Made by</p>
            <img src={logo_2} alt="" className="hidden md:block " />
          </span>
        </div>
        <div
          className="text-3xl absolute right-8 top-6 cursor-pointer md:hidden"
          onClick={() => setOpen(!open)}>
          {open ? <span>&#x2715;</span> : <img src={meun} />}
        </div>
        <ul
          className={`md:flex md:items-center md:pb-0 pb-12 gap-5 items-center ${
            open ? "block h-44" : "hidden h-0"
          }`}>
          {DataLink.map((link) => (
            <li
              key={link.name}
              className="md:inline-block md:ml-8 text-xl md:my-0 my-7 text-gray-100 md;z-auto z-[-1] left-0 w-full w-auto md:pl-0 pl-9 translate-all duration-500 ease-in ">
              <Link
                to={link.link}
                className="text-gray-100 hover:opacity-5 duration-500">
                {link.name}
              </Link>
            </li>
          ))}
          <Button title="Get staeted" />
        </ul>
      </div>
    </div>
  );
}

export default Navber_2;
