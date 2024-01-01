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
        <Link href="/meals"> Meals page </Link>
        <Link href="/meals/share"> Meals share </Link>
        <Link href="/community"> Community</Link>
      </p>
    </main>
  );
}
