import Image from "next/image";

import classes from "./mealDetails.module.css";
import { getMeal } from "@/lib/meals";

function MealDetails({ params }) {
  const meals = getMeal(params.slug);

  const { title, creator, creator_email, image, summary } = meals;

  meals.instructions = meals.instructions.replace(/\n/g, "</br>");

  if (!meals) {
    notFound();
  }

  return (
    <>
      <header className={classes.header}>
        <div className={classes.image}>
          <Image src={image} alt={title} fill />
        </div>

        <div className={classes.headerText}>
          <h1> {title} </h1>

          <p className={classes.creator}>
            by <a href={`mailto: ${creator_email}`}> {creator} </a>
          </p>

          <p className={classes.summary}>{summary}</p>
        </div>
      </header>
      <main>
        <p
          className={classes.instructions}
          dangerouslySetInnerHTML={{ __html: meals.instructions }}
        ></p>
      </main>
    </>
  );
}

export default MealDetails;
