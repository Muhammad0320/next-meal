import Link from "next/link";
import { getMeals } from "@/lib/meals";
import classes from "./page.module.css";
import MealGrid from "@/components/meals/MealGrid";

async function Meals() {
  const meals = await getMeals();

  console.log(meals);

  return (
    <>
      <header className={classes.header}>
        <h1>
          Delicious meals created{" "}
          <span className={classes.highlight}> by you </span>
        </h1>

        <p>
          choose your favorite recipe and cook it yourself. It is easy ans fun!
        </p>

        <p className={classes.cta}>
          <Link href="/meals/share"> Share your Favourite recipe </Link>
        </p>
      </header>

      <main className={classes.main}>
        <MealGrid meals={meals} />
      </main>
    </>
  );
}

export default Meals;
