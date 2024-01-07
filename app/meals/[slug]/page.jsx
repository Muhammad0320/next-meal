import Image from "next/image";

import { notFound } from "next/navigation";

import classes from "./mealDetails.module.css";
import { getMeal } from "@/lib/meals";

export const generateMetadata = async ({ params }) => {


  const meal = getMeal(params.slug);


   
  if (!meal) {
    notFound();
  }

  return {
    title: meal.title,
    description: meal.description,
  };


};




function MealDetails({ params }) {

  
  const meals = getMeal(params.slug);

  if (!meals) {
    notFound();
  }

  const { title, creator, creator_email, image, summary } = meals;

  meals.instructions = meals.instructions.replace(/\n/g, "</br>");

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
