import Link from "next/link";

import LogoImage from "@/assets/logo.png";

function MainNav() {
  return (
    <header>
      <Link>
        <img src={LogoImage.src} alt="A plate with lots of food init" />
        NextLevel Foods
      </Link>
    </header>
  );
}

export default MainNav;
