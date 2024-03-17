import React from 'react'
import "./index.scss";
import PostsCards from '../PostsCards';
import PostTitle from '../PostTitle';
const Posts = () => {
  return (
    <>
    <section id='posts'>
        <div className='posts_container'>
            <div className='posts_content'>
                <PostTitle/>
                <PostsCards/>
            </div>
        </div>
    </section>
    </>
  )
}

export default Posts