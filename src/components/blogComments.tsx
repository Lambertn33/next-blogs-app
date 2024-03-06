import prisma from "@/lib/db";
import { Text } from "@radix-ui/themes";
import { FC } from "react";

interface BlogCommentsProps {
  blogId: string;
}

const BlogComments: FC<BlogCommentsProps> = async ({ blogId }) => {
  const blogComments = await prisma.comment.findMany({
    where: {
      postId: blogId,
    },
    include: {
      author: true,
    },
  });

  return (
    <div>
      {blogComments.map((comment) => (
        <div
          className="flex-col space-y-3 bg-blue-100 rounded-sm p-4 mb-4"
          key={comment.id}
        >
          <div className="flex items-center space-x-2">
            <Text size="3" weight="medium" color="blue">
              {comment.author?.name}
            </Text>
            <Text size="1" weight="regular">
              {comment.createdAt.toDateString()}
            </Text>
          </div>
          <Text as="p" size="2">
            {comment.text}
          </Text>
        </div>
      ))}
    </div>
  );
};

export default BlogComments;
