import Link from "next/link";
import Image from "next/image";
import LogoImage from "@/assets/logo.png";
import classes from "./miannav.module.css";
import Navlink from "../NavLinks/Navlink";

function MainNav() {
  return (
    <header className={classes.header}>
      <Link href="/" className={classes.logo}>
        <Image src={LogoImage} alt="A plate with lots of food init" priority />
        NextLevel Foods
      </Link>

      <nav className={classes.nav}>
        <ul>
          <li>
            <Navlink href="/meals"> Browse Meals </Navlink>
          </li>
          <li>
            <Navlink href="/community"> Food Community </Navlink>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainNav;
