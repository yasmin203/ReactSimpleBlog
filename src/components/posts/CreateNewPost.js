import React from 'react'

 const CreateNewPost = () => {
  return (
    <section>
      <h1>Create New Post</h1>
      <form>
        <label htmlFor="Title">Title:</label><br />
        <input type="text" placeholder="Enter Post Title"/>
        <label htmlFor="Description">Description:</label><br />

        <input type="text" placeholder="Enter Post Description"/>
        <label htmlFor="Content">Content:</label>

        <textarea cols="25" rows="10" placeholder="Enter Post Content"></textarea>
        <input type="file" />
        <button type='submit' value="Submit" >Post</button>

      </form>
    </section>
  )
}
export default CreateNewPost