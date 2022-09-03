import React from "react"
import {Link} from "react-router-dom"
import styles from "../styles.css"
const Post = ({post,handleDelete}) => {
  return (
    <div className='second-container'>
          <Link to={`/post/${post.id}`} className="post">

      <div className='img-container'>
        <img src={post.image} alt='post-img' />
      </div>
      <div className='post-content'>
        <span>{post.title}</span>
        <h6>By: {post.author? post.author:"yasmin"}</h6>
        <p>
          {post.description}
        </p>
        </div>
        </Link>
     

   
      </div>
  )
}
export default Post
