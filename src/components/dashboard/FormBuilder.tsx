"use client";
import { Form } from "@prisma/client";
import React from "react";
import PreviewDialogBtn from "./PreviewDialogBtn";
import SaveFormBtn from "./SaveFormBtn";
import PublishFormBtn from "./PublishFormBtn";
import Designer from "../builder/Designer";
import { DndContext } from "@dnd-kit/core";
import DragOverlayWrapper from "../builder/DragOverlayWrapper";

const FormBuilder = ({ form }: { form: Form }) => {
  return (
    <DndContext>
      <main className="flex flex-col w-full">
        <nav className="flex justify-between border-b border-border gap-3 py-4 items-center">
          <h2 className="truncate font-medium">
            <span className="text-muted-foreground">Form: </span>
            {form.name}
          </h2>
          <div className="flex items-center gap-4">
            <PreviewDialogBtn />
            {!form.published && (
              <>
                <SaveFormBtn />
                <PublishFormBtn />
              </>
            )}
          </div>
        </nav>
        <div className="flex w-full flex-grow items-center justify-center relative overflow-y-auto h-screen bg-accent/30 bg-[url(/assets/graph-paper.svg)]">
          <Designer />
        </div>
      </main>
      <DragOverlayWrapper />
    </DndContext>
  );
};

export default FormBuilder;
