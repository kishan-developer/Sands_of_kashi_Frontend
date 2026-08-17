import { notFound } from "next/navigation";
import { posts, categories } from "../data";
import BlogView from "./BlogView";

export function generateStaticParams() {
  return posts.map((post) => ({ id: post.id.toString() }));
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const post = posts.find((p) => p.id === parseInt(id, 10));

  if (!post) {
    notFound();
  }

  const morePosts = posts.filter((p) => p.id !== post.id);
  const recentPosts = morePosts.slice(0, 3);

  return (
    <BlogView
      post={post}
      morePosts={morePosts}
      recentPosts={recentPosts}
      categories={categories}
    />
  );
}
