"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { Button } from "../ui/button";
import dynamic from "next/dynamic";

import {
  IoVideocamOutline,
  IoMicOutline,
  IoChatbubblesOutline,
} from "react-icons/io5";
import { LuScreenShare } from "react-icons/lu";
import { IoIosLogOut } from "react-icons/io";
//import ReactPlayer from "react-player";
const DynamicReactPlayer = dynamic(() => import("react-player"), {
  ssr: false,
});
type Props = {};

const Hero = (props: Props) => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);
  return (
    <div className="flex flex-col-reverse md:flex-row gap-y-16 md:gap-x-16 w-full items-start">
      <div className="space-y-3">
        <div className="flex flex-row mx-auto sm:mx-0  sm:flex-col gap-6 bg-red-400 w-full  ">
          <div className=" relative ">
            <Image
              src="https://images.pexels.com/photos/4144102/pexels-photo-4144102.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              height={4000}
              width={5000}
              alt=""
              className="w-[550px] sm:w-[250px] rounded-3xl"
            />
            <p className="absolute left-0 bottom-0 rounded-bl-3xl rounded-r-3xl px-4 py-2 bg-gray-300 bg-opacity-80">
              Ridha
            </p>
          </div>
          <div className=" relative">
            <Image
              src="https://images.pexels.com/photos/4144102/pexels-photo-4144102.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              height={400}
              width={500}
              alt=""
              className="w-[550px] sm:w-[250px] rounded-3xl"
            />
            <p className="absolute left-0 bottom-0 rounded-bl-3xl rounded-r-3xl px-4 py-2 bg-gray-300 bg-opacity-80">
              Mr. Kaur
            </p>
          </div>
        </div>
        <div className="grid grid-cols-5 md:grid-cols-3 gap-3">
          <div className="flex flex-col items-center gap-2">
            <Button className="bg-[#cfd0d1] rounded-xl hover:bg-[#e0e0e0] text-black w-10 h-10">
              <div className="text-xl ">
                <IoVideocamOutline />
              </div>
            </Button>
            <p className="text-xl">Cam</p>
          </div>
          <div className="flex flex-col items-center gap-2">
            <Button className="bg-[#cfd0d1] rounded-xl hover:bg-[#e0e0e0] text-black w-10 h-10">
              <div className="text-xl">
                <IoMicOutline />
              </div>
            </Button>
            <p className="text-sm">Mic</p>
          </div>
          <div className="flex flex-col items-center gap-2">
            <Button className="bg-[#cfd0d1] rounded-xl hover:bg-[#e0e0e0] text-black w-10 h-10 ">
              <div className="text-xl">
                <LuScreenShare />
              </div>
            </Button>
            <p className="text-sm">Share</p>
          </div>
          <div className="flex flex-col items-center gap-2">
            <Button className="bg-[#cfd0d1] rounded-xl hover:bg-[#e0e0e0] text-black w-10 h-10">
              <div className="text-xl">
                <IoChatbubblesOutline />
              </div>
            </Button>
            <p className="text-sm">Chat</p>
          </div>
          <div className="flex flex-col items-center gap-2">
            <Button className="bg-[#008BA3] rounded-xl hover:bg-[#008ba3bb] text-white w-10 h-10">
              <div className="text-xl">
                <IoIosLogOut />
              </div>
            </Button>
            <p className="text-sm">Leave</p>
          </div>
        </div>
      </div>
      <div className="w-[800px] mx-auto sm:w-full h-[78vh]">
        {isClient && (
          <DynamicReactPlayer
            controls
            url="https://www.youtube.com/watch?v=1w7OgIMMRc4"
            width="100%"
            height="100%"
          />
        )}
      </div>
    </div>
  );
};

export default Hero;
