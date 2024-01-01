import Link from "next/link";
import LogoImage from "@/assets/logo.png";
import classes from "./miannav.module.css";

function MainNav() {
  return (
    <header className={classes.header}>
      <Link href="/" className={classes.logi}>
        <img src={LogoImage.src} alt="A plate with lots of food init" />
        NextLevel Foods
      </Link>

      <nav className={classes.nav}>
        <ul>
          <li>
            <Link href="/meals"> Community meals </Link>
          </li>
          <li>
            <Link href="/meals/community"> Foodie community </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainNav;
