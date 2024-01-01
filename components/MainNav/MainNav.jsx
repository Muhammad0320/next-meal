import Link from "next/link";
import Image from "next/image";
import LogoImage from "@/assets/logo.png";
import classes from "./miannav.module.css";

function MainNav() {
  console.log(classes);

  return (
    <header className={classes.header}>
      <Link href="/" className={classes.logo}>
        <Image src={LogoImage} alt="A plate with lots of food init" priority />
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
