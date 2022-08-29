import React from 'react'
import {Link} from 'react-router-dom'
import styles from './styles.css'
const Header = () => {
  return (
    <div className='container'>
        <div className="header">
        <h3>Simple Blog</h3>
        <div className='menu'>
            <Link to={"/"} className="link">Home</Link>
            <Link to={"/create"} className="btn">Create Post</Link>
        </div>
        </div>
    </div>
  )
}

export default Header