"use client";
import { Form } from "@prisma/client";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardDescription,
  CardFooter,
} from "../ui/card";
import { Badge } from "../ui/badge";
import { formatDistance } from "date-fns";
import { Icon } from "@iconify/react";
import { Button } from "../ui/button";
import Link from "next/link";

const FormCard = ({ form }: { form: Form }) => {
  return (
    <Card className="rounded-3xl">
      <CardHeader>
        <CardTitle className="flex items-center gap-2 justify-between">
          <span className="truncate font-bold">{form.name}</span>
          {form.published && <Badge>Published</Badge>}
          {!form.published && <Badge variant={"destructive"}>Draft</Badge>}
        </CardTitle>
        <CardDescription className="flex items-center justify-between text-muted-foreground text-sm ">
          {formatDistance(form.createdAt, new Date(), {
            addSuffix: true,
          })}
          {form.published && (
            <span className="flex items-center gap-2">
              <Icon icon="fluent-mdl2:view" className="text-muted-foreground" />
              <span>{form.visits.toLocaleString()}</span>
              <Icon
                icon="fluent-mdl2:forms"
                className="text-muted-foreground"
              />
              <span>{form.submissions.toLocaleString()}</span>
            </span>
          )}
        </CardDescription>
      </CardHeader>
      <CardContent className="h-[20px] truncate text-sm text-muted-foreground">
        <p>{form.description || "No description"}</p>
      </CardContent>
      <CardFooter>
        {form.published && (
          <Button asChild className="w-full mt-2 text-md gap-4">
            <Link href={`/form/${form.id}`}>
              View submissions <Icon icon="fluent-mdl2:arrow-right" />{" "}
            </Link>
          </Button>
        )}
        {!form.published && (
          <Button
            asChild
            variant={"secondary"}
            className="w-full mt-2 text-md gap-4"
          >
            <Link href={`/builder/${form.id}`}>
              Edit Form <Icon icon="fluent-mdl2:edit" />{" "}
            </Link>
          </Button>
        )}
      </CardFooter>
    </Card>
  );
};
export default FormCard;
