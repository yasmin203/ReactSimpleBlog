import React from 'react'

 const postDetails = ({post}) => {
  return (
    <div className='container'>
        <div className="img">
        <img src={post.image} alt='post-img' />
        </div>
        <div className='post-content'>
        <span>{post.title}</span>
        <h6>By: {post.author? post.author:"yasmin"}</h6>
        <p>
          {post.description}
        </p>
        </div>

    </div>
  )
}
export default postDetails
