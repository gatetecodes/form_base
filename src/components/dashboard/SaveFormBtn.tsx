import React from "react";
import { Button } from "../ui/button";
import { Icon } from "@iconify/react";

const SaveFormBtn = () => {
  return (
    <Button
      className="gap-2 border border-border rounded-full"
      variant={"outline"}
    >
      <Icon icon="akar-icons:save" className="w-4 h-4" />
      Save
    </Button>
  );
};

export default SaveFormBtn;
