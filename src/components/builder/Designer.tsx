"use client";
import React from "react";
import DesignerSidebar from "./DesignerSidebar";

const Designer = () => {
  return (
    <div className="flex w-full h-full">
      <div className="p-4 w-full">
        <div className="bg-background max-w-[850px] h-full m-auto rounded-xl flex flex-col flex-grow items-center justify-start flex-1 overflow-y-auto">
          <p className="text-3xl text-mutedText flex flex-grow items-center font-semibold">
            Drop here
          </p>
        </div>
      </div>
      <DesignerSidebar />
    </div>
  );
};

export default Designer;
