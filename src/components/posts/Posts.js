import React, { useState,useEffect } from "react"
import Post from "./Post"

const Posts = () => {
  const [posts, setPosts] = useState(null)
  const [isLoading, setIsLoading] = useState(false)
  const[errMsg,setErrMsg]=useState(null)
  useEffect(() => {
    setIsLoading(true)
    fetch("http://localhost:4000/posts")
      .then((res) => {
        if (!res.ok)
        throw(Error("Not found due to error in URL"))
        return res.json()
      })
      .then((data) => {
        setPosts(data)
        setIsLoading(false)
      }).catch(err=>{
        setIsLoading(false)
       setErrMsg(err.message)
      })
  }, [])
  const handleDelete = (id) => {
    let currposts = [...posts]
    let newPosts = currposts.filter((post) => post.id !== id)
    setPosts(newPosts)

    // console.log(newPosts)
  }

  return (
    <div className='container'>
      <div className='single-container'>
        {/* if there is posts and data is loading */}
        {posts &&
          posts.map((post) => (
            <Post key={post.id} post={post} handleDelete={handleDelete} />
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
