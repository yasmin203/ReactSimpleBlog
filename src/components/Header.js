import React from 'react'
import styles from './styles.css'
const Header = () => {
  return (
    <div className='container'>
        <div className="header">
        <h1>Simple Blog</h1>
        <div className='menu'>
            <a href="" className="link">Home</a>
            <a href="" className="link">Posts</a>
            <a href="" className="btn">Create Post</a>
        </div>
        </div>
    </div>
  )
}

export default Header