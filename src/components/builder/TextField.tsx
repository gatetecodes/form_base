"use client";

import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { ElementsType, FormElement, FormElementInstance } from "./FormElements";
import { Icon } from "@iconify/react";

const type: ElementsType = "TextField";

const extraAttributes = {
  label: "Text field",
  helperText: "Helper text",
  required: false,
  placeholder: "Value here...",
};

export const TextFieldFormElement: FormElement = {
  type,
  construct: (id: string) => ({
    id,
    type,
    extraAttributes,
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
  designerComponent: DesignerComponent,
  formComponent: () => <div>Form component</div>,
  propertiesComponent: () => <div>Properties compoent</div>,
};

type CustomInstance = FormElementInstance & {
  extraAttributes: typeof extraAttributes;
};

function DesignerComponent({
  elementInstance,
}: {
  elementInstance: FormElementInstance;
}) {
  const element = elementInstance as CustomInstance;
  const { label, helperText, required, placeholder } = element.extraAttributes;
  return (
    <div className="flex flex-col gap-2 w-full">
      <Label>
        {label} {required && "*"}{" "}
      </Label>
      <Input
        readOnly
        disabled
        placeholder={placeholder}
        className="border-border outline-none bg-accent/20 rounded-full"
      />
      {helperText && (
        <p className="text-[0.8rem] text-mutedText">{helperText}</p>
      )}
    </div>
  );
}
