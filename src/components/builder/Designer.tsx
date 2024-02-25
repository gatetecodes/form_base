"use client";
import React from "react";
import DesignerSidebar from "./DesignerSidebar";
import { useDndMonitor, useDroppable } from "@dnd-kit/core";
import { cn, idGenerator } from "@/lib/utils";
import useFormDesigner from "@/hooks/useFormDesigner";
import { ElementsType, FormElements } from "./FormElements";
import DesignerElementWrapper from "./DesignerElementWrapper";

const Designer = () => {
  const { elements, addElement } = useFormDesigner();

  //Make the designer area droppable
  const droppable = useDroppable({
    id: "designer-drop-area",
    data: {
      isDesignerDropArea: true,
    },
  });

  //Monitor the droppable area
  useDndMonitor({
    onDragEnd: (event) => {
      const { active, over } = event;
      if (!active || !over) return;
      const isDesignerBtnElement = active?.data?.current?.isDesignerBtnElement;
      if (isDesignerBtnElement) {
        const type = active?.data?.current?.type as ElementsType;
        const newElement = FormElements[type].construct(idGenerator());
        addElement(0, newElement);
      }
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
          {!droppable.isOver && elements.length === 0 && (
            <p className="text-3xl text-mutedText flex flex-grow items-center font-semibold">
              Drop here
            </p>
          )}
          {droppable.isOver && (
            <div className="p-4 w-full">
              <div className="h-[50px] rounded-md bg-accent/40"></div>
            </div>
          )}
          {elements.length > 0 && (
            <div className="flex flex-col gap-4 text-mutedText w-full p-6">
              {elements.map((element) => (
                <DesignerElementWrapper key={element.id} element={element} />
              ))}
            </div>
          )}
        </div>
      </div>
      <DesignerSidebar />
    </div>
  );
};

export default Designer;
