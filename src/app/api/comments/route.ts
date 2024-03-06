import prisma from "@/lib/db";
import { getCurrentUser } from "@/lib/session";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const user = await getCurrentUser();

  try {
    if (!user) {
      return NextResponse.json({ message: "unauthenticated" }, { status: 401 });
    }

    const { comment, blogId } = await req.json();

    const newBlogComment = await prisma.comment.create({
      data: {
        text: comment,
        postId: blogId,
        authorEmail: user?.email,
      },
    });
    return NextResponse.json({ newBlogComment }, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { message: "something went wrong" },
      { status: 500 }
    );
  }
}
