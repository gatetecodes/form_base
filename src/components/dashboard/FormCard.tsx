import { Form } from "@prisma/client";
import { Card, CardHeader, CardTitle, CardContent } from "../ui/card";

const FormCard = ({ form }: { form: Form }) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>
          <span className="flex items-center gap-2 justify-between">
            {form.name}
          </span>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <p>{form.description}</p>
      </CardContent>
    </Card>
  );
};
export default FormCard;
