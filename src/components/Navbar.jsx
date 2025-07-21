 import React from "react";
import AboutCard from "./AboutDiv";
import { useState } from "react";
 import { IoMenu } from "react-icons/io5";
 

const Navbar = () => {
  const [isOpen , setIsOpen] = useState(false);

  return (
    <div className=" sticky top-0 z-100">

    <nav className="bg-emerald-800   h-18  w-full flex items-center  justify-center   text-black shadow-md">
      <div className="   w-5/6 flex justify-between text-black  items-center ">
       
          
          {
            isOpen 
            &&  
            <div className="absolute left-0 h-70 gap-y flex flex-col justify-center px-10 items-center -top-8 bg-emerald-900  -z-1 w-full transition-all translate-y-24  ease-in-out duration-700 ">
              <div className=" mt-5 text-xl  capitalize  text-center py-2"><p className="font-bold "> <a href="#About">About </a></p></div>
              <div className=" mt-5 text-xl  capitalize  text-center py-2"><p className="font-bold "><a href="#skills">Skills</a> </p></div>
              <div className=" mt-5 text-xl  capitalize  text-center py-2"><p className="font-bold "><a href="#connect">Contact Us</a></p></div>
            </div>
            
          }
        <div className="text-2xl font-bold">
          <a href="#FMain">

          PM
          </a>
        </div>


        <div className=" md:hidden" onClick={()=> setIsOpen(!isOpen)}> 
            <IoMenu size={30} />
        </div>


         
        <ul  className=" hidden space-x-8   text-xl  md:flex items-center gap-x-8 ">
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