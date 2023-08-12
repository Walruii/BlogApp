import { NextResponse } from "next/server";
import Post from '../../../models/post'
import connectMongo from '../../../middleware/mongooseconnect'

export async function GET() {
  try {
    console.log('CONNECTING TO MONGO');
    const connect = await connectMongo();
    if (connect)
      console.log('CONNECTED TO MONGO');
    const posts = await Post.find()
    console.log(posts)
    return NextResponse.json({ posts });
  } catch (error) {
    return NextResponse.error();
  }
}
