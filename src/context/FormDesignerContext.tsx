"use client";

import { FormElementInstance } from "@/components/builder/FormElements";
import { createContext, useState } from "react";

type FormDesignerContextType = {
  elements: FormElementInstance[];
  addElement: (index: number, element: FormElementInstance) => void;
};

export const FormDesignerContext =
  createContext<FormDesignerContextType | null>(null);

const FormDesignerContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [elements, setElements] = useState<FormElementInstance[]>([]);
  const addElement = (index: number, element: FormElementInstance) => {
    setElements((prev) => {
      const newElements = [...prev];
      newElements.splice(index, 0, element);
      return newElements;
    });
  };
  return (
    <FormDesignerContext.Provider value={{ elements, addElement }}>
      {children}
    </FormDesignerContext.Provider>
  );
};

export default FormDesignerContextProvider;
