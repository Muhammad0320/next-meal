import xss from "xss";
import fs from "node:fs";
const db = sql("meals.db");
import slugify from "slugify";
import sql from "better-sqlite3";

export const getMeals = async () => {
  await new Promise((resolve) => setTimeout(resolve, 5000));

  return db.prepare("SELECT * FROM meals").all();
};

export const getMeal = (slug) => {
  return db.prepare("SELECT * FROM meals WHERE slug = ? ").get(slug);
};

export const saveMeals = async (meal) => {
  meal.ingredients = xss(meal.ingredients);

  meal.slug = slugify(`(${meal.title}${Math.random() + Date.now()}`, {
    lower: true,
  });

  const extention = meal.image.name.split(".").pop();

  console.log(extention);

  const filename = `${meal.slug}.${extention}`;

  const bufferedImage = await meal.image.arrayBuffer();

  const stream = fs.createWriteStream(`public/images/${filename}`);

  stream.write(Buffer.from(bufferedImage), (error) => {
    if (error) {
      throw new Error("Uploading image failed");
    }
  });

  meal.image = `/images/${filename}`;

  return db
    .prepare(
      `INSERT INTO meals (title, summary, instructions, creator, creator_email, image, slug ) VALUES (
      @title,
      @summary,
      @instructions,
      @creator,
      @creator_email,
      @image,
      @slug
    )`
    )
    .run(meal);
};
