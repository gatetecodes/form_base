"use client";
import { FormDesignerContext } from "@/context/FormDesignerContext";
import React, { useContext } from "react";

const useFormDesigner = () => {
  const context = useContext(FormDesignerContext);
  if (!context) {
    throw new Error(
      "useFormDesigner must be used within a <FormDesignerContextProvider>"
    );
  }
  return context;
};

export default useFormDesigner;
