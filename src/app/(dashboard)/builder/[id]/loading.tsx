"use client";
import React from "react";
import { Icon } from "@iconify/react";

const Loading = () => {
  return (
    <div className="flex items-center justify-center w-full h-full">
      <Icon icon="quill:loading-spin" className="animate-spin h-20 w-20" />
    </div>
  );
};

export default Loading;
