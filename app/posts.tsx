import Link from 'next/link'

export interface Post {
  _id: string
  title: string
  content: string;
}

export const getPosts = async () => {
  try {
    const response = await fetch('http://localhost:3000/api/posts', {
      cache: 'no-store',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (!response.ok) {
      throw new Error('Failed to fetch posts');
    }

    const data = await response.json();
    return data.posts;
  } catch (error) {
    console.error('Error fetching posts:', error);
    return [];
  }
};

export default async function Posts() {
  const posts = await getPosts();
  return (
    <div className="post-content">
      {posts.map(({ _id, title, content }: Post) => {
        return (
          <div key={_id}>
            <h1 className="post-title">{title}</h1>
            {content.length < 100 ? (
              <p className="post-content">{content}</p>
            ) : (
              <>
                <p className="post-content">{content.slice(0, 100)}</p>
                <Link href={`/posts/${_id}`}> ... Read More</Link>
              </>
            )}
          </div>
        )
      })}
    </div>
  )
}
