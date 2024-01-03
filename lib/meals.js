import xss from "xss";
const db = sql("meals.db");

import slugify from "slugify";

import sql from "better-sqlite3";

export const getMeals = async () => {
  await new Promise((resolve) => setTimeout(resolve, 5000));

  //   throw new Error("Ahhh shit, here we go again");

  return db.prepare("SELECT * FROM meals").all();
};

export const getMeal = (slug) => {
  return db.prepare("SELECT * FROM meals WHERE slug = ? ").get(slug);
};

export const saveMeals = (meal) => {
  meal.ingredients = xss(meal.ingredients);

  meal.slug = slugify(meal.title, { lower: true });
};
