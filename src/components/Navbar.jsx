 import React from "react";
import AboutCard from "./AboutDiv";
 

const Navbar = () => {
  return (
    <div className="sticky top-0 z-50">

    <nav className="bg-gray-400    h-18  w-full flex items-center  justify-center   text-black shadow-md">
      <div className="w-5/6 ml-12  flex justify-between text-black  items-center ">
       
        <div className="text-2xl font-bold">
          <a href="#FMain">

          PM
          </a>
        </div>

         
        <ul  className=" space-x-8   text-xl  flex items-center gap-x-8 ">
          <li
           className="hover:text-blue-400 transition-colors duration-300 cursor-pointer" >
            <a href="#About">About </a>
          </li>
          <li className="hover:text-blue-400 transition-colors duration-300 cursor-pointer">
            <a href="#skills">Skills</a>         </li>
          <li className="hover:text-blue-400 transition-colors duration-300 cursor-pointer">
            <a href="#connect">Contact Us</a>
          </li>
        </ul>
      </div>
    </nav>
  </div>
  );
};

export default Navbar;