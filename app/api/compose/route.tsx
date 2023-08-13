import { NextResponse } from "next/server";
import Post from '../../../models/post'
import connectMongo from '../../../middleware/mongooseconnect'

export async function POST(request: Request) {
  const body = await request.json();
  const { postTitle, postContent } = body;
  try {
    console.log('CONNECTING TO MONGO');
    const connect = await connectMongo();
    if (connect) {
      console.log('CONNECTED TO MONGO');
      var post = new Post({
        title: postTitle,
        content: postContent
      })
      var postCreated = await post.save();
      return NextResponse.json({ postCreated });
    }
  } catch (error) {
    return NextResponse.error();
  }
}
