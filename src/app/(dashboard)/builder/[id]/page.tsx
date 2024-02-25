import FormBuilder from "@/components/dashboard/FormBuilder";
import { getFormById } from "@/lib/actions/form";
import React from "react";

const BuilderPage = async ({ params }: { params: { id: string } }) => {
  const form = await getFormById(params.id);
  if (!form) {
    throw new Error("Form not found");
  }
  return (
    <div className="container">
      <FormBuilder form={form} />
    </div>
  );
};

export default BuilderPage;
