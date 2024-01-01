function BlogPost({ params }) {
  return (
    <main>
      <h1> Blog post </h1>

      <p> {params.slug} </p>
    </main>
  );
}

export default BlogPost;
