"use client";

import { ChangeEvent, FormEvent, useState } from "react";

import { TextField, TextArea, Button } from "@radix-ui/themes";

import { BlogData } from "@/types/blog";

const BlogForm = () => {
  const [blogData, setBlogData] = useState<BlogData>({
    title: "",
    content: "",
  });

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
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(blogData);
  };

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

      <Button variant="classic" className="cursor-pointer flex w-full">
        Add blog
      </Button>
    </form>
  );
};

export default BlogForm;
