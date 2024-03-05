import { Text } from "@radix-ui/themes";

const BlogComment = () => {
  return (
    <div className="flex-col space-y-3 bg-blue-100 rounded-sm p-4 mb-4">
      <div className="flex items-center space-x-2">
        <Text size="3" weight="medium" color="blue">
          John doe
        </Text>
        <Text size="1" weight="regular">
          November 10th, 2029
        </Text>
      </div>
      <Text as="p" size="2">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius dolor
        repellendus quas quisquam veritatis ea earum cum, ratione laborum harum
        debitis, deserunt veniam, ut dolores quo ipsam aperiam dolorum sapiente?
      </Text>
    </div>
  );
};

export default BlogComment;
