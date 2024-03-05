import BlogComment from "@/components/blogComment";
import { Heading, Text } from "@radix-ui/themes";

const BlogDetails = () => {
  return (
    <div className="max-w-4xl mx-auto py-5">
      <div className="gap-0 flex-col">
        <Heading className="text-2xl font-bold">Post one</Heading>
        <Text className="" size="1" weight="medium">
          Written by: User 1
        </Text>
      </div>
      <div className="mt-4">
        <Text as="p" size="2">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Praesentium
          odit possimus atque provident tempora voluptatibus omnis numquam
          facilis quam qui? Rerum magni non, illo eum totam sed placeat dolore
          quis.
        </Text>
      </div>
      <div className="mt-4 space-y-3">
        <Heading className="text-2xl font-bold">Comments</Heading>
        <BlogComment />
        <BlogComment />
        <BlogComment />
      </div>
    </div>
  );
};

export default BlogDetails;
