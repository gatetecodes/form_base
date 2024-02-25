import React from "react";
import { FormElementInstance, FormElements } from "./FormElements";
import { useDroppable } from "@dnd-kit/core";
import { cn } from "@/lib/utils";

const DesignerElementWrapper = ({
  element,
}: {
  element: FormElementInstance;
}) => {
  const topHalf = useDroppable({
    id: `${element.id}-top`,
    data: {
      type: element.type,
      elementId: element.id,
      isTopHalfDesignerElement: true,
    },
  });
  const bottomHalf = useDroppable({
    id: `${element.id}-bottom`,
    data: {
      type: element.type,
      elementId: element.id,
      isBottomHalfDesignerElement: true,
    },
  });
  const DesignerElement = FormElements[element.type].designerComponent;
  return (
    <div className="relative h-[100px] flex flex-col text-foreground hover:cursor-pointer rounded-md ring-1 ring-accent/30 ring-inset">
      <div
        ref={topHalf.setNodeRef}
        className={cn(
          "absolute w-full h-1/2 rounded-t-md",
          topHalf.isOver && "bg-green-500"
        )}
      />
      <div className="flex w-full h-[100px] items-center px-4 py-2 pointer-events-none">
        <DesignerElement elementInstance={element} />
      </div>
      <div
        ref={bottomHalf.setNodeRef}
        className={cn(
          "absolute bottom-0 w-full h-1/2 rounded-b-md",
          bottomHalf.isOver && "bg-red-500"
        )}
      />
    </div>
  );
};

export default DesignerElementWrapper;
