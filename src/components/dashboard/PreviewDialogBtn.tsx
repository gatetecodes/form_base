import React from "react";
import { Button } from "../ui/button";
import { Icon } from "@iconify/react";

const PreviewDialogBtn = () => {
  return (
    <Button variant={"outline"} className="gap-2">
      <Icon icon="icon-park-outline:preview-open" className="w-6 h-6" />
      Preview
    </Button>
  );
};

export default PreviewDialogBtn;
