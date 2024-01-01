import Link from "next/link";

function Meals() {
  return (
    <main>
      <h1> The meals page </h1>
      <p>
        <Link href={"/meals/share"}> Meal share </Link>
      </p>
    </main>
  );
}

export default Meals;
