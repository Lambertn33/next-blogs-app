import prisma from "@/lib/db";
import { Card, Text } from "@radix-ui/themes";
import Link from "next/link";

const Blogs = async () => {
  const posts = await prisma.post.findMany({
    include: {
      author: true,
    },
  });
  return (
    <div className="max-w-4xl mx-auto py-5">
      <h1 className="text-center text-2xl font-semibold">Blogs List</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {posts.map((post) => (
          <Link key={post.id} href={`/blogs/${post.id}`}>
            <Card variant="classic" className="shadow-sm">
              <Text as="div" size="4" weight="bold" className="mb-2">
                {post.title}
              </Text>
              <Text as="p" color="gray" size="2">
                written by: {post.author?.name}
              </Text>
            </Card>
          </Link>
        ))}
      </div>

    </div>
  );
};

export default Blogs;
