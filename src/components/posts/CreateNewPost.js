import React from 'react'
import { useState } from "react"
import useFetch from "../useFetch"
import { useNavigate } from "react-router-dom"

import Post from "./Post"

const CreateNewPost = (props) => {
  const [title, setTitle] = useState("")
  const [content, setContent] = useState("")
  const [creator, setCreator] = useState("admin")
  const [url, setUrl] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  let navigate = useNavigate()

  const handleForm = (e) => {
    e.preventDefault()
    //  post request
    const post = {
      title,
      description: content,
      image: url,
      author: creator,
    }
    fetch("http://localhost:4000/posts", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(post),
    }).then(() => {
      setIsLoading(true)
      navigate("/")
    })
  }
  return (
    <section>
      <h1>Create New Post</h1>
      <form onSubmit={handleForm}>
        <label htmlFor='Title'>Title:</label>
        <br />
        <input
          type='text'
          placeholder='Enter Post Title'
          value={title}
          required
          onChange={(e) => setTitle(e.target.value)}
        />
        <label htmlFor='Content'>Content:</label>

        <textarea
          cols='25'
          rows='10'
          placeholder='Enter Post Content'
          value={content}
          onChange={(e) => setContent(e.target.value)}
        ></textarea>
        <label htmlFor='by'>Created By:</label>
        <select
          id='creator'
          value={creator}
          onChange={(e) => setCreator(e.target.value)}
        >
          <option value='admin'>Admin</option>
          <option value='editor'>Editor</option>
          <option value='yasmin'>Yasmin</option>
        </select>
        <label htmlFor='url'>Image URL:</label>
        <input
          type='url'
          value={url}
          onChange={(e) => setUrl(e.target.value)}
        />
        <button
          type='submit'
          value='Submit'
          disabled={isLoading ? true : false}
        >
          Post
        </button>
      </form>
    </section>
  )
}
export default CreateNewPost