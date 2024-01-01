import classes from "./page.module.css";

import Link from "next/link";

export default function Home() {
  return (
    <>
      <header className={classes.header}>
        <div className={classes.slideshow}></div>

        <div className={classes.hero}>
          <h1> NextLevel Foods for NextLevel Foodies </h1>
          <p>Tast and share food from all over the world</p>
        </div>
        <div className={classes.cta}>
          <Link href="/community"> Join the community </Link>
          <Link href="meals"> Explore Meals </Link>
        </div>
      </header>
    </>
  );
}
