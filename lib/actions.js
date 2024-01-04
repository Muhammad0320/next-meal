"use server";

import { redirect } from "next/navigation";
import { saveMeals } from "./meals";

export const shareMeal = async (formData) => {
  const meals = {
    title: formData.get("title"),
    summary: formData.get("summary"),
    instructions: formData.get("instructions"),
    image: formData.get("image"),
    creator: formData.get("name"),
    creator_email: formData.get("email"),
  };

  const isInvalidText = (text) => {
    return !text || !text.trim() === "";
  };

  if (
    isInvalidText(meals.title) ||
    isInvalidText(meals.summary) ||
    isInvalidText(meals.creator) ||
    isInvalidText(meals.creator_email) ||
    isInvalidText(meals.instructions) ||
    !meals.image.size ||
    !meals.image ||
    !meals.creator_email.includes("@")
  ) {
    throw new Error("Invalid input");
  }

  await saveMeals(meals);

  redirect("/meals");
};
