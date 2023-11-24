import React from "react";
import { GrFormPrevious } from "react-icons/gr";
import { FaPhoneAlt } from "react-icons/fa";
import { MdOutlineSupportAgent } from "react-icons/md";

const Navbar = () => {
  return (
    <div className="flex h-max gap-96 sm:gap-0  items-center justify-center sm:gap-x-[700px] mt-3 bg--500/80">
      <div className="flex items-center    gap-3">
        <div className="bg-gray-300/60 rounded-xl flex items-center justify-center w-12 h-12 text-2xl text-gray-600/70">
          <GrFormPrevious />
        </div>
        <span className="text-3xl font-bold">Basic Mathematics 101</span>
      </div>

      <div className="flex items-center gap-8 text-lg font-bold">
        <div className="flex items-center gap-2 ">
          <div className="rounded-full text-xl p-[5px]  bg-cyan-600 text-white  ">
            <FaPhoneAlt />
          </div>
          <span>Call Teacher</span>
        </div>

        <div className="flex items-center gap-2 ">
          <div className="rounded-full text-2xl p-[5px]  bg-orange-600 text-white  ">
            <MdOutlineSupportAgent />
          </div>
          <span>Support</span>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
