const db = sql("meals.db");
import sql from "better-sqlite3";

export const getMeals = async () => {
  await new Promise((resolve) => setTimeout(resolve, 5000));

  return db.prepare("SELECT * FROM meals").all();
};
