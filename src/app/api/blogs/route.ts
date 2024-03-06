import prisma from "@/lib/db";
import { getCurrentUser } from "@/lib/session";
import { BlogData } from "@/types/blog";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const user = await getCurrentUser();

  try {
    if (!user) {
      return NextResponse.json({ message: "unauthenticated" }, { status: 401 });
    }

    const { title, content } = (await req.json()) as BlogData;
    const newBlog = await prisma.post.create({
      data: {
        content,
        title,
        authorEmail: user.email,
      },
    });
    return NextResponse.json({ newBlog }, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { message: "something went wrong" },
      { status: 500 }
    );
  }
}
