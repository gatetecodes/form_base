import React from "react";
import { Button } from "../ui/button";
import { Icon } from "@iconify/react";

const PublishFormBtn = () => {
  return (
    <Button className="gap-2 text-gray-900 bg-lightGreen rounded-full hover:bg-lightestGreen">
      <Icon icon="material-symbols:publish-sharp" className="w-4 h-4" />
      Publish
    </Button>
  );
};

export default PublishFormBtn;
