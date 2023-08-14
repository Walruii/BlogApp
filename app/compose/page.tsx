'use client'
import { useState } from 'react'

interface Post {
  postTitle: string
  postContent: string
}

export default function Compose() {
  const [post, setPost] = useState({ postTitle: "", postContent: "" })

  function handleChange(e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>) {
    const { name, value } = e.target as HTMLInputElement;
    setPost((prevPost): Post => ({
      ...prevPost,
      [name]: value,
    }));
  }

  async function submit() {
    try {
      const response = await fetch('http://localhost:3000/api/compose', {
        method: 'POST',
        body: JSON.stringify(post),
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (!response.ok) {
        throw new Error('Failed to submit');
      }

      const result = await response.json();
      console.log(result);
    } catch (error) {
      console.error('Error submitting:', error);
    }
  };

  return (
    <>
      <h1 className="heading">Compose</h1>
      <form>
        <div className="form-group">
          <label aria-labelledby="Title">Title</label>
          <input
            onChange={handleChange}
            className="form-control"
            type="text"
            name="postTitle"
            value={post.postTitle}
          />
          <label aria-labelledby="Post">Post</label>
          <textarea
            onChange={handleChange}
            className="form-control"
            name="postContent"
            value={post.postContent}
            cols={50}
            rows={6}
          />
        </div>
        <button onClick={submit} className="btn" name="compose" type="button">
          Publish
        </button>
      </form>
    </>
  )
}
