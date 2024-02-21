"use server";

import { currentUser } from "@clerk/nextjs";
import { db } from "../db";
import { formSchema, formSchemaType } from "../validations/form";

class UserNotFoundError extends Error {}

export const getFormStats = async () => {
  const user = await currentUser();
  if (!user) {
    throw new UserNotFoundError("User not found");
  }
  const stats = await db.form.aggregate({
    where: {
      userId: user.id,
    },
    _sum: {
      visits: true,
      submissions: true,
    },
  });
  const visits = stats._sum.visits ?? 0;
  const submissions = stats._sum.submissions ?? 0;

  const submissionRate = visits > 0 ? (submissions / visits) * 100 : 0;
  const bounceRate = 100 - submissionRate;

  return {
    visits,
    submissions,
    submissionRate,
    bounceRate,
  };
};

export const createForm = async (data: formSchemaType) => {
  const validData = formSchema.safeParse(data);
  if (!validData.success) {
    return { error: "Invalid data" };
  }
  const { name, description } = validData.data;
  const user = await currentUser();
  if (!user) {
    return { error: "User not found" };
  }

  const form = await db.form.create({
    data: {
      userId: user.id,
      name,
      description,
    },
  });
  if (!form) {
    return { error: "An error occured creating the form" };
  }
  return form.id;
};

export const getForms = async () => {
  const user = await currentUser();
  if (!user) {
    throw new UserNotFoundError("User not found");
  }
  return db.form.findMany({
    where: {
      userId: user.id,
    },
    orderBy: {
      createdAt: "desc",
    },
  });
};
