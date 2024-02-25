import React from "react";
import { FormElement } from "./FormElements";
import { Button } from "../ui/button";
import { useDraggable } from "@dnd-kit/core";
import { cn } from "@/lib/utils";

const SidebarBtnElement = ({ formElement }: { formElement: FormElement }) => {
  const { icon, label } = formElement.designerBtnElement;
  const draggable = useDraggable({
    id: `designer-btn-${formElement.type}`,
    data: {
      type: formElement.type,
      isDesignerBtnElement: true,
    },
  });
  return (
    <Button
      ref={draggable.setNodeRef}
      className={cn(
        "flex gap-2 w-[130px] h-[50px] items-center justify-center cursor-grab border border-border rounded-lg bg-background hover:bg-accent hover:text-mutedText",
        draggable.isDragging && "ring-2 ring-border"
      )}
      {...draggable.listeners}
      {...draggable.attributes}
    >
      {icon}
      <p className="">{label}</p>
    </Button>
  );
};

export const SidebarBtnElementDragOverlay = ({
  formElement,
}: {
  formElement: FormElement;
}) => {
  const { icon, label } = formElement.designerBtnElement;

  return (
    <Button
      className={cn(
        "flex gap-2 w-[130px] h-[50px] items-center justify-center cursor-grab border border-border rounded-lg bg-background hover:bg-accent hover:text-mutedText"
      )}
    >
      {icon}
      <p className="">{label}</p>
    </Button>
  );
};

export default SidebarBtnElement;
