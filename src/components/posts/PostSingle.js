import React from "react";
import ReactDOM from "react-dom";
import { useNavigate, useParams } from "react-router-dom"
import useFetch from "../useFetch"
import styles from "../styles.css"

const PostSingle = () => {
  let navigate = useNavigate()
  let { id } = useParams()
  let {
    data: post,
    isLoading,
    errMsg,
  } = useFetch(`http://localhost:4000/posts/${id}`)
  const handleDelete = () => {
    fetch(`http://localhost:4000/posts/${id}`, {
      method: "Delete",
    }).then(() => {
      navigate("/")
    })
  }
  return (
    <>
      {isLoading && <div>is loading ...</div>}
      {errMsg && <div>{errMsg}</div>}
      {post && !isLoading && !errMsg && (
        <div className='container'>
          <div className='single-post-content'>
            <span>{post.title}</span>

            <button className='single-btn' onClick={handleDelete}>
              Delete
            </button>
          </div>
          <div className='img'>
            <img src={post.image} alt='post-img' />
          </div>
          <h6>By:{post.author}</h6>
          <p>{post.description}</p>
        </div>
      )}
    </>
  )
}
  export default PostSingle
  