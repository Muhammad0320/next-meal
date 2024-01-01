import Link from "next/link";

export default function Home() {
  return (
    <main>
      <img src="/logo.png" alt="A server surrounded by magic sparkles." />
      <h1>Welcome to this NextJS Course!</h1>
      <p>🔥 Let&apos;s get started! 🔥</p>
      <p>
        {" "}
        <Link href={"/about"}> About us </Link>{" "}
        <p>
          <Link href="/meals"> Meals page </Link>
        </p>
        <p>
          <Link href="/meals/share"> Meals share </Link>
        </p>
        <p>
          <Link href="/community"> Community</Link>
        </p>
      </p>
    </main>
  );
}
