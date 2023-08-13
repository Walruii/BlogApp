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
    setPost((prevPost): Post => {
      const { postTitle, postContent } = prevPost
      if (name === 'postTitle') {
        return {
          postTitle: value,
          postContent: postContent
        }
      } else if (name === 'postContent') {
        return {
          postTitle: postTitle,
          postContent: value
        }
      } else {
        throw new Error()
      }
    })
    console.log(post)
  }

  async function submit() {
    const response = await fetch('/api/compose', {
      method: 'POST',
      body: JSON.stringify(post),
      headers: {
        'Content-Type': 'application/json'
      }
    });
    const result = await response.json();
    console.log(result);
  };

  return (
    <>
      <h1 className="heading">Compose</h1>
      <form>
        <div className="form-group">
          <label>Title</label>
          <input onChange={handleChange} className="form-control" type="text" name="postTitle" value={post.postTitle} />
          <label>Post</label>
          <textarea onChange={handleChange} className="form-control" name="postContent" value={post.postContent} cols={50} rows={6} />
        </div>
        <button onClick={submit} className="btn" name="compose" type="submit">Publish</button>
      </form>
    </>
  )
}
