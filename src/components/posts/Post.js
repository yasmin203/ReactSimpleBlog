import React from 'react'
import img1 from '../../images/product1.jpg'
import img2 from '../../images/product3.jpg'
import styles from '../styles.css'
 const Post = () => {
  return (
    <div className="container">
        <div className="second-container">
        <div className='img-container'>
            <img src={img1} alt="post-img" />
            <div className="post-content">
            <span>Post Title 1</span>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptas iure ducimus id eaque fugiat deleniti qui laudantium minus dolore itaque voluptates dolorem neque quibusdam cum quisquam, dignissimos nesciunt facere magnam!</p>

            </div>
        </div>


        <div className='img-container'>
            <img src={img1} alt="post-img" />
            <div className="post-content">
            <span>Post Title 1</span>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptas iure ducimus id eaque fugiat deleniti qui laudantium minus dolore itaque voluptates dolorem neque quibusdam cum quisquam, dignissimos nesciunt facere magnam!</p>

            </div>
        </div>



        <div className='img-container'>
            <img src={img2} alt="post-img" />
            <div className="post-content">
            <span>Post Title 2</span>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptas iure ducimus id eaque fugiat deleniti qui laudantium minus dolore itaque voluptates dolorem neque quibusdam cum quisquam, dignissimos nesciunt facere magnam!</p>

            </div>
        </div>
    </div>
    </div>
   
  )
}
export default Post