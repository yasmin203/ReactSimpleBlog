import useFetch from "../useFetch"
import Post from "./Post"

const Posts = () => {
  let {data:posts,isLoading,errMsg}=useFetch("http://localhost:4000/posts")
  const handleDelete = (id) => {
    let currposts = [...posts]
    let newPosts = currposts.filter((post) => post.id !== id)
    // setPosts(newPosts)

    // console.log(newPosts)
  }

  return (
    <div className='container'>
      <div className='single-container'>
        {/* if there is posts and data is loading */}
        {posts &&
          posts.map((post) => (
            <Post key={post.id} post={post}  />
          ))}
        {isLoading && <div>is loading ....</div>}
        {/* if there is no posts and no data is loading  */}
        {!isLoading && !posts &&  !errMsg && <div className="not-found">No Posts Found</div> }
        {errMsg && <div className="not-found">{errMsg}</div> }
      </div>
    </div>
  )
}
export default Posts
