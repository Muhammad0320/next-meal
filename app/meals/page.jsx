import Link from "next/link";
import { getMeals } from "@/lib/meals";
import classes from "./page.module.css";
import MealGrid from "@/components/meals/MealGrid";
import { Suspense } from "react";

const FetchMeals = async () => {
  const meals = await getMeals();

  return <MealGrid meals={meals} />;
};

export const metadata = {
  title: " All Meals ",
  description: "Browse the delicious meals shared by our vibrant community",
};

function Meals() {
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
        <Suspense
          fallback={<p className={classes.loading}>Fetching meals...</p>}
        >
          <FetchMeals />
        </Suspense>
      </main>
    </>
  );
}

export default Meals;
