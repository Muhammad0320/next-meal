import Image from "next/image";

import classes from "./mealDetails.module.css";

function MealDetails() {
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
