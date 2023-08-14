import { NextResponse } from "next/server";
import Post from '../../../models/post';
import connectMongo from '../../../middleware/mongooseconnect';

export async function POST(request: Request) {
  try {
    // Parse the request body
    const body = await request.json();
    const { postTitle, postContent } = body;

    console.log('CONNECTING TO MONGO');

    // Connect to MongoDB
    const db = await connectMongo();

    if (db) {
      console.log('CONNECTED TO MONGO');

      // Create a new Post instance
      const post = new Post({
        title: postTitle,
        content: postContent
      });

      // Save the post to the database
      const postCreated = await post.save();

      // Return the created post as JSON response
      return NextResponse.json({ postCreated });
    } else {
      console.log('FAILED TO CONNECT TO MONGO');

      // Return an error response
      return NextResponse.json({ error: "Failed to connect to the database." }, { status: 500 });
    }
  } catch (error) {
    console.error('An error occurred:', error);

    // Return an error response
    return NextResponse.json({ error: "An error occurred." }, { status: 500 });
  }
}
