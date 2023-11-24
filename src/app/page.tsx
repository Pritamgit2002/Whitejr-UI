import Hero from "@/components/Hero";
import Tab from "@/components/Tab";
import Navbar from "@/components/navbar";
import Sidebar from "@/components/sidebar";
import React from "react";

type Props = {};

const page = (props: Props) => {
  return (
    <div className="flex gap-2 ">
      <div className=" hidden sm:inline-block">
        <Sidebar />
      </div>
      <div className="flex flex-col gap-y-6 sm:gap-y-4">
        <Navbar />
        <Tab/>
      </div>
    </div>
  );
};

export default page;
