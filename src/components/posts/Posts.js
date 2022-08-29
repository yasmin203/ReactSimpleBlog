import React, { useState,useEffect } from "react"
import Post from "./Post"

const Posts = () => {
  const [posts, setPosts] = useState(null)
   useEffect(()=>{
fetch("http://localhost:4000/posts").then(res=>{
  return res.json()
}).then(data=>{
  console.log(data)
})
   },[])
  const handleDelete = (id) => {
    let currposts = [...posts]
    let newPosts = currposts.filter((post) => post.id !== id)
    setPosts(newPosts)

    // console.log(newPosts)
  }

  return (
    <div className='container'>
      <div className='single-container'>
        {posts ? posts.map((post) => (
          <Post key={post.id} post={post} handleDelete={handleDelete} />
        )):"no posts"}
      </div>
    </div>
  )
}
export default Posts
