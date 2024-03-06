import { Heading, Text } from "@radix-ui/themes";
import { FC } from "react";

import prisma from "@/lib/db";
import BlogCommentForm from "@/components/blogCommentForm";
import BlogComments from "@/components/blogComments";

interface BlogDetailsProps {
  params: {
    id: string;
  };
}

const BlogDetails: FC<BlogDetailsProps> = async ({ params }) => {
  const { id } = params;
  const blog = await prisma.post.findFirst({
    where: {
      id,
    },
    include: {
      author: true,
    },
  });

  return (
    <div className="max-w-4xl mx-auto py-5">
      <div className="gap-0 flex-col">
        <Heading className="text-2xl font-bold">{blog?.title}</Heading>
        <Text className="" size="1" weight="medium">
          Written by: {blog?.author?.name}
        </Text>
      </div>
      <div className="mt-4">
        <Text as="p" size="2">
          {blog?.content}
        </Text>
      </div>
      <div className="mt-4 space-y-3">
        <Heading className="text-2xl font-bold">Comments</Heading>
        <BlogComments blogId={blog?.id!} />
      </div>
      <div className="mt-4 space-y-2">
        <BlogCommentForm blogId={blog?.id!} />
      </div>
    </div>
  );
};

export default BlogDetails;
