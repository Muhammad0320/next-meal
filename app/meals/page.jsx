import Link from "next/link";

import classes from "./page.module.css";

function Meals() {
  return (
    <>
      <header className={classes.header}>
        <h1>
          Delicious meals created{" "}
          <span className={classes.highlidht}> bu you </span>
        </h1>

        <p>
          choose your favorite recipe and cook it yourself. It is easy ans fun!
        </p>

        <p className={classes.cta}>
          <Link href="/meals/share"> Share your Favourite recipe </Link>
        </p>
      </header>

      <main className={classes.main}></main>
    </>
  );
}

export default Meals;
