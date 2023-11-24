import Image from "next/image";
import React from "react";
import { RiMenu2Fill } from "react-icons/ri";
import { GoBell } from "react-icons/go";
import { IoTimerOutline } from "react-icons/io5";
import { BsClipboardCheck } from "react-icons/bs";
import { GoEye } from "react-icons/go";
import { MdPeopleAlt } from "react-icons/md";
import { MdOutlineBarChart } from "react-icons/md";

type Props = {};

const Sidebar = (props: Props) => {
  return (
    <div className=" flex flex-row sm:flex-col items-center justify-around sm:h-screen w-24  bg-[#F0F1F3]">
      <div className="flex flex-row sm:flex-col sm:h-[80vh] items-center sm:justify-around bg--400 -translate-y-10 ">
        <Image
          src="/white.jpg"
          alt="done"
          width={1000}
          height={1000}
          className=" w-20 h-20"
        />

        <div className="text-2xl text-gray-400 hover:text-gray-600/90 cursor-pointer">
          <RiMenu2Fill />
        </div>

        <div className="relative text-2xl  cursor-pointer ">
          <GoBell />
          <div className="absolute -translate-y-6 translate-x-3 h-3 w-3 rounded-full bg--500"></div>
        </div>

        <div className="text-2xl text-gray-400 hover:text-gray-600/90 cursor-pointer">
          <IoTimerOutline />
        </div>
        <div className="text-2xl text-gray-400 hover:text-gray-600/90 cursor-pointer">
          <BsClipboardCheck />
        </div>
        <div className="text-2xl text-gray-400 hover:text-gray-600/90 cursor-pointer">
          <GoEye />
        </div>
        <div className="text-2xl text-gray-400 hover:text-gray-600/90 cursor-pointer">
          <MdPeopleAlt />
        </div>
        <div className="text-2xl text-gray-400 hover:text-gray-600/90 cursor-pointer">
          <MdOutlineBarChart />
        </div>
      </div>

      <Image
        src="/profile.png"
        alt="done"
        width={1000}
        height={1000}
        className=" w-12 h-12 rounded-full cursor-pointer "
      />
    </div>
  );
};

export default Sidebar;
