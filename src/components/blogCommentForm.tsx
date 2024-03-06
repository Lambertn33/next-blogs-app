"use client";

import axios from "axios";

import { TextField, Button, Text } from "@radix-ui/themes";

import { ChangeEvent, FC, useState } from "react";

import { useRouter } from "next/navigation";

import { useSession } from "next-auth/react";

interface BlogCommentProps {
  blogId: string;
}

const BlogCommentForm: FC<BlogCommentProps> = ({ blogId }) => {
  const [comment, setComment] = useState<string>("");

  const { data } = useSession();

  const router = useRouter();

  const handleChangeComment = (e: ChangeEvent<HTMLInputElement>) =>
    setComment(e.target.value);

  const handleSubmitComment = async () => {
    if (comment.trim() !== "") {
      try {
        const response = await axios.post("/api/comments", {
          comment,
          blogId,
        });

        if (response.status === 200) {
          setComment("");
          router.refresh();
        }
      } catch (error) {
        console.error(error);
      }
    }
  };

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
      <Button disabled={!data?.user} onClick={handleSubmitComment}>
        Add Comment
      </Button>
    </div>
  );
};

export default BlogCommentForm;
