import Image from "next/image";

import classes from "./mealDetails.module.css";
import { getMeal } from "@/lib/meals";

function MealDetails({ params }) {
  const meals = getMeal(params.slug);

  return (
    <>
      <header className={classes.header}>
        <div className={classes.image}>
          <Image fill />
        </div>

        <div className={classes.headerText}>
          <h1> TITLE </h1>

          <p className={classes.creator}>
            by <a href={`mailto: ${""}`}> Name </a>
          </p>

          <p className={classes.summary}>SUMMARY</p>
        </div>
      </header>
      <main>
        <p
          className={classes.instructions}
          dangerouslySetInnerHTML={{ __html: "..." }}
        ></p>
      </main>
    </>
  );
}

export default MealDetails;
