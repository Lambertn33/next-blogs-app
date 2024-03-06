"use client";

import { ChangeEvent, FormEvent, useState } from "react";

import { useRouter } from "next/navigation";

import { useSession } from "next-auth/react";

import { TextField, TextArea, Button } from "@radix-ui/themes";

import { BlogData } from "@/types/blog";

import axios from "axios";

const BlogForm = () => {
  const [blogData, setBlogData] = useState<BlogData>({
    title: "",
    content: "",
  });

  const router = useRouter();

  //onchange function
  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;

    setBlogData({
      ...blogData,
      [name]: value,
    });
  };

  //form submission
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const response = await axios.post("api/blogs", blogData);
      if (response.status === 200) {
        const { newBlog } = response.data;
        router.push(`/blogs/${newBlog.id}`);
      }
    } catch (error) {
      console.log(error);
    }
  };

  //user

  const { data } = useSession();

  return (
    <form
      className="p-4 max-w-xl mx-auto shadow-lg my-6 space-y-4"
      onSubmit={handleSubmit}
    >
      <p className="text-center font-bold">Add new blog</p>

      <TextField.Input
        placeholder="blog title"
        name="title"
        value={blogData.title}
        onChange={handleChange}
      ></TextField.Input>

      <TextArea
        placeholder="blog content"
        name="content"
        value={blogData.content}
        onChange={handleChange}
      ></TextArea>

      <Button disabled={!data?.user} variant="classic" className="cursor-pointer flex w-full">
        Add blog
      </Button>
    </form>
  );
};

export default BlogForm;
