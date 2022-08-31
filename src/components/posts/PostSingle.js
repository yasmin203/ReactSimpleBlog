import React from "react";
import ReactDOM from "react-dom";
import { useParams } from "react-router-dom";
import useFetch from "../useFetch"
import styles from "../styles.css"


const PostSingle = (props) => {
    let {id} = useParams()
    let {data:post,isLoading,errMsg}=useFetch(`http://localhost:4000/posts/${id}`)

    console.log(id)
     return (
      <>
      {isLoading && <div>is loading ...</div>}
      {errMsg && <div>{errMsg}</div>}
      {post && !isLoading && !errMsg &&(
     
       <div className='container'>
       <div className='single-post-content'>
       <span>{post.title}</span>
      
          <button className="single-btn">Delete</button>
          </div>
         <div className='img'>
           <img src={post.image} alt='post-img' />
         </div>
         <h6>By:{post.author}</h6> 
           <p>
            {post.description}
           </p>
       </div>   
      )}

       </>
     )
   }
  export default PostSingle
  