const getPost = async (id: string) => {
  const response = await fetch('http://localhost:3000/api/get-post/', {
    method: "POST",
    cache: 'no-store',
    body: JSON.stringify({ id: id }),
    headers: {
      'ContentType': 'application/json'
    }
  })
  const result = await response.json();
  return result.post
}

export default async function Page({ params }: { params: { post: string } }) {

  const id = params.post
  const post = await getPost(id)

  return (
    <div>
      <h1>{post.title}</h1>
      <p>{post.content}</p>
    </div>
  )

}
