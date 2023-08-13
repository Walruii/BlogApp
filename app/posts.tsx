import Link from 'next/link'

export interface Post {
  _id: string
  title: string
  content: string;
}

const getPosts = async () => {
  const response = await fetch('http://localhost:3000/api/posts', {
    cache: 'no-store',
    headers: {
      'Content-Type': 'application/json',
    }
  });
  const data = await response.json();
  return data.posts;
}

export default async function Posts() {
  const posts = await getPosts();
  return (
    <div className="post-content">
      {posts.map(({ _id, title, content }: Post) => {
        return (
          <div>
            <h1 className="post-title">{title}</h1>
            {content.length < 100 ? (
              <p className="post-content">{content}</p>
            ) : (
              <p className="post-content">{content.slice(0, 100)}<Link href={`/posts/${_id}`}> ... Read More</Link></p>
            )}
          </div>
        )
      })}
    </div>
  )
}
