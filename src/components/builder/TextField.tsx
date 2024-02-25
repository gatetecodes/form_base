"use client";

import { ElementsType, FormElement } from "./FormElements";
import { Icon } from "@iconify/react";

const type: ElementsType = "TextField";

export const TextFieldFormElement: FormElement = {
  type,
  construct: (id: string) => ({
    id,
    type,
    extraAttributes: {
      label: "Text field",
      helperText: "Helper text",
      required: false,
      placeholder: "Value here...",
    },
  }),
  designerBtnElement: {
    icon: (
      <Icon
        icon="iconoir:text"
        className="h-5 w-5 text-mutedText cursor-grab"
      />
    ),
    label: "Text field",
  },
  designerComponent: () => <div>Designer compoent</div>,
  formComponent: () => <div>Form component</div>,
  propertiesComponent: () => <div>Properties compoent</div>,
};
