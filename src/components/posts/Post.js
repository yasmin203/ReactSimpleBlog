import React from "react"
import styles from "../styles.css"
const Post = ({post,handleDelete}) => {
  // const Post = ({post}) => {
  // console.log(props)
  return (
    <div className='second-container'>
      <div className='img-container'>
        <img src={post.image} alt='post-img' />
      </div>
      <div className='post-content'>
        <span>{post.title}</span>
        <h6>By: {post.author? post.author:"yasmin"}</h6>
        <p>
          {post.description}
        </p>
        <button className="btn" onClick={()=>handleDelete(post.id)}>Delete</button>

      </div>
    </div>
  )
}
export default Post
