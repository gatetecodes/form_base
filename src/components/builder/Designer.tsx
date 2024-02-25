"use client";
import React from "react";
import DesignerSidebar from "./DesignerSidebar";
import { useDroppable } from "@dnd-kit/core";
import { cn } from "@/lib/utils";

const Designer = () => {
  const droppable = useDroppable({
    id: "designer-drop-area",
    data: {
      isDesignerDropArea: true,
    },
  });
  return (
    <div className="flex w-full h-full">
      <div className="p-4 w-full">
        <div
          ref={droppable.setNodeRef}
          className={cn(
            "bg-background max-w-[850px] h-full m-auto rounded-xl flex flex-col flex-grow items-center justify-start flex-1 overflow-y-auto",
            droppable.isOver && "ring-2 ring-white/30"
          )}
        >
          {!droppable.isOver && (
            <p className="text-3xl text-mutedText flex flex-grow items-center font-semibold">
              Drop here
            </p>
          )}
          {droppable.isOver && (
            <div className="p-4 w-full">
              <div className="h-[50px] rounded-md bg-accent/40"></div>
            </div>
          )}
        </div>
      </div>
      <DesignerSidebar />
    </div>
  );
};

export default Designer;
