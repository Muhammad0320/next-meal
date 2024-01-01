import Link from "next/link";

function Blogs() {
  return (
    <main>
      <h1> Blog posts </h1>

      <p>
        {" "}
        <Link href="/blogs/blog-1"> Blog 1 </Link>{" "}
      </p>
      <p>
        {" "}
        <Link href="/blogs/blog"> Blog 1 </Link>{" "}
      </p>
    </main>
  );
}

export default Blogs;
