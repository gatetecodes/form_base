import React from "react";
import { ImSpinner2 } from "react-icons/im";

const Loading = () => {
  return (
    <div className="flex items-center justify-center w-full h-full">
      <ImSpinner2 className="animate-spin h-20 w-20" />
    </div>
  );
};

export default Loading;
