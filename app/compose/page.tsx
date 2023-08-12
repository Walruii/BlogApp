export default function Compose() {
  return (
    <>
      <h1 className="heading">Compose</h1>
      <form action="/compose" method="post">
        <div className="form-group">
          <label>Title</label>
          <input className="form-control" type="text" name="postTitle" />
            <label>Post</label>
            <textarea className="form-control" name="postContent" cols="50" rows="6"></textarea>
        </div>
        <button className="btn" name"compose" type="submit">Publish</button>

    </form >
    </>
  )
}
