import classes from "./MealsGrid.module.css";

function MealGrid({ meals }) {
  return (
    <ul className={classes.meals}>
      {meals.map((meal) => (
        <li key={meal.id}></li>
      ))}
    </ul>
  );
}

export default MealGrid;
