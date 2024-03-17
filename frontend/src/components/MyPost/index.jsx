import React, { useContext, useEffect, useState } from 'react'
import "./index.scss";
import { UserContext } from "../../context/UserContext";
import { Link } from 'react-router-dom';
const MyPost = () => {
    const { decode } = useContext(UserContext)
    const [posts, setPosts] = useState([])
    async function getFetch() {
        try {
            await fetch("http://localhost:3200/postWithauthorAndcategory/" + decode._id)
                .then(res => res.json())
                .then(data => setPosts(data))
        } catch (error) {
            console.log(error.message);
        }
    }
    async function DeleteFetch(id) {
        await fetch("http://localhost:3200/postByauthor/" + id, { method: 'DELETE' });
        await getFetch()
    }

    useEffect(() => {
        getFetch()
    }, [])
    return (
        <>
            <div className='myPosts'>
                <div className='myPosts_container'>
                    <div className='myPosts_title'>
                        <h4 className='montserrat'>My Blogs</h4>
                        <p className='libre-regular-i'>We nurture our collaborative creative thinking & high-end design outcomes to develop compelling work that sets us apart.</p>
                    </div>
                    <div className='posts_cards'>
                        {posts ? posts.map((x) => (
                            <div className='posts_card'>
                                <img src={x.image} alt="" />
                                <div className='card_text'>
                                    <span>{x.category.name}</span>
                                    <h2>{x.title}</h2>
                                    <p className='delete_my_post' onClick={() => DeleteFetch(x._id)}>Delete</p>
                                </div>
                            </div>
                        )) : (<h2 className='libre-regular-i not_post'>Not Your Post</h2>)}
                    </div>
                </div>
            </div>
        </>
    )
}

export default MyPost