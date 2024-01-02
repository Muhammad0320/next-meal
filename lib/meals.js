import sql from "better-sqlite3";

const db = sql("meals.db");

export const getMeals = async () => {
  await Promise.resolve(() => setTimeout(() => {}, 5000));

  return db.prepare("SELECT * FROM meals").all();
};
