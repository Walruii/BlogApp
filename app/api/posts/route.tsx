import { NextResponse } from "next/server";
import Post from '../../../models/post'
import connectMongo from '../../../middleware/mongooseconnect'

export async function GET() {
  try {
    console.log('CONNECTING TO MONGO');
    const db = await connectMongo();
    if (db) {
      console.log('CONNECTED TO MONGO');
      const posts = await Post.find()
      if (posts) {
        console.log(posts)
        return NextResponse.json({ posts });
      } else {
        return NextResponse.json({ error: "Post not found" }, { status: 404 });
      }
    } else {
      console.log('FAILED TO CONNECT TO MONGO');

      // Return an error response
      return NextResponse.json({ error: "Failed to connect to the database." }, { status: 500 });
    }
  } catch (error) {
    console.error('An error occurred:', error);
    return NextResponse.error();
  }
}
