import { Active, DragOverlay, useDndMonitor } from "@dnd-kit/core";
import React from "react";
import { ElementsType, FormElements } from "./FormElements";
import { SidebarBtnElementDragOverlay } from "./SidebarBtnElement";

const DragOverlayWrapper = () => {
  const [draggedItem, setDraggedItem] = React.useState<Active | null>(null);
  useDndMonitor({
    onDragStart: (event) => {
      setDraggedItem(event.active);
    },
    onDragCancel: (event) => {
      setDraggedItem(null);
    },
    onDragEnd: (event) => {
      setDraggedItem(null);
    },
  });
  let node = <div>Dragging</div>;
  if (!draggedItem) return null;
  const isSidebarBtnElement = draggedItem?.data?.current?.isDesignerBtnElement;
  if (isSidebarBtnElement) {
    const type = draggedItem?.data?.current?.type as ElementsType;
    node = <SidebarBtnElementDragOverlay formElement={FormElements[type]} />;
  }
  return <DragOverlay>{node}</DragOverlay>;
};

export default DragOverlayWrapper;
