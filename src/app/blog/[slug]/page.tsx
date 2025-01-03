import { ArrowLeft } from "lucide-react";
import Link from "next/link";

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const slug = (await params).slug;
  const { default: Post } = await import(`@/blogs/${slug}.mdx`);

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <Link href="/blog" className="flex flex-row items-center">
        <ArrowLeft className="w-5 h-5" />
        <p className="ml-1">Back to all blogs</p>
      </Link>
      <Post />
    </div>
  );
}
