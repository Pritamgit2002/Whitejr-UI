import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "../ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
import Hero from "../Hero";

type Documentsps = {};

const Tab = (Documentsps: Documentsps) => {
  return (
    <div>
      <Tabs defaultValue="Videos" className="flex flex-col w-full bg--300 sm:w-[90vw] gap-y-10 sm:gap-y-4 bg--400 ">
        <TabsList className="grid grid-cols-3 sm:grid-cols-6 h-max sm:h-16 rounded-lg sm:rounded-full  bg-gray-200 py-2 mx-auto ">
          <TabsTrigger value="Classroom" className=" w-40 text-[15px] sm:text-[20px] py-2">
            Classroom
          </TabsTrigger>
          <TabsTrigger
            value="Whiteboard"
            className="sm:w-40 text-[15px] sm:text-[20px] py-2"
          >
            Whiteboard
          </TabsTrigger>
          <TabsTrigger value="Videos" className="sm:w-40 text-[15px] sm:text-[20px] py-2">
            Videos
          </TabsTrigger>
          <TabsTrigger value="Slide Show" className="sm:w-40 text-[15px] sm:text-[20px] py-2">
            Slide Show
          </TabsTrigger>
          <TabsTrigger value="Documents" className="sm:w-40 text-[15px] sm:text-[20px] py-2">
            Documents
          </TabsTrigger>
          <TabsTrigger value="Doc.Cam" className="sm:w-40 text-[15px] sm:text-[20px] py-2">
            Doc.Cam
          </TabsTrigger>
        </TabsList>

        <TabsContent value="Classroom" className="text-2xl relative inset-0 pl-4 font-bold">
          Classroom
        </TabsContent>

        <TabsContent
          value="WhitSlide Showoard"
          className="text-2xl relative inset-0 pl-4 font-bold" 
        >
          WhiteBoard
        </TabsContent>

        <TabsContent value="Videos" className="text-2xl relative inset-0 sm:pl-4">
          <Hero />
        </TabsContent>

        <TabsContent value="Slide Show" className="text-2xl relative inset-0 pl-4 font-bold">
          SlideShow
        </TabsContent>

        <TabsContent value="Documents" className="text-2xl relative inset-0 pl-4 font-bold">
          Documents
        </TabsContent>

        <TabsContent value="Doc.Cam" className="text-2xl relative inset-0 pl-4 font-bold">
          Doc.Cam
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Tab;
