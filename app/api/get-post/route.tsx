import { NextResponse } from "next/server";
import Post from '../../../models/post'
import connectMongo from '../../../middleware/mongooseconnect'

export async function POST(request: Request) {
  const body = await request.json();
  const { id } = body;
  try {
    console.log('CONNECTING TO MONGO');
    const connect = await connectMongo();
    if (connect) {
      console.log('CONNECTED TO MONGO');
      const post = await Post.findById({ _id: id })
      console.log(post)
      return NextResponse.json({ post });
    }
  } catch (error) {
    return NextResponse.error();
  }
}
