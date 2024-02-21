import React from "react";
import { Button } from "../ui/button";
import { Icon } from "@iconify/react";

const PublishFormBtn = () => {
  return (
    <Button className="gap-2 text-white bg-gradient-to-r from-indigo-400 to-cyan-400">
      <Icon icon="material-symbols:publish-sharp" className="w-4 h-4" />
      Publish
    </Button>
  );
};

export default PublishFormBtn;
