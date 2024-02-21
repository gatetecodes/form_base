import { getForms } from "@/lib/actions/form";
import FormCard from "./FormCard";

export const FormCards = async () => {
  const forms = await getForms();
  return (
    <>
      {forms.map((form) => {
        return <FormCard key={form.id} form={form} />;
      })}
    </>
  );
};
