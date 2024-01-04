"use server";

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

  await saveMeals(meals);
};
