import Link from "next/link";

import LogoImage from "@/assets/logo.png";

function MainNav() {
  return (
    <header>
      <Link href="/">
        <img src={LogoImage.src} alt="A plate with lots of food init" />
        NextLevel Foods
      </Link>

      <nav>
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
