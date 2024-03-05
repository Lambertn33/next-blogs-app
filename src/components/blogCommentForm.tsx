"use client";

import { TextField, Button, Text } from "@radix-ui/themes";
import { ChangeEvent, useState } from "react";

const BlogCommentForm = () => {
  const [comment, setComment] = useState("");

  const handleChangeComment = (e: ChangeEvent<HTMLInputElement>) =>
    setComment(e.target.value);

  const handleSubmitComment = () => console.log(comment);

  return (
    <div className="space-y-2">
      <Text as="p" size="2" weight="medium">
        Add comment
      </Text>
      <TextField.Input
        placeholder="enter your comment"
        value={comment}
        onChange={handleChangeComment}
      ></TextField.Input>
      <Button onClick={handleSubmitComment}>Add Comment</Button>
    </div>
  );
};

export default BlogCommentForm;
