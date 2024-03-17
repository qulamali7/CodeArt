import React, { useEffect, useState } from 'react'
import "./index.scss";
import { Link } from 'react-router-dom';
import AOS from "aos";
import "aos/dist/aos.css";
const PostsCards = () => {
    useEffect(() => {
        AOS.init({ duration: 2500 });
    }, []);
    const [posts, setPosts] = useState([])
    async function getFetch() {
        try {
            await fetch("http://localhost:3200/postWithauthorAndcategory")
                .then(res => res.json())
                .then(data => setPosts(data))
        } catch (error) {
            console.log(error.message);
        }
    }
    useEffect(() => {
        getFetch()
    }, [])

    return (
        <>
            <div className='posts_cards'>
                {posts && posts.slice(0, 3).map((x) => (
                    <Link to={"/detail/" + x._id} key={x._id}>
                        <div data-aos="flip-right" className='posts_card' >
                            <img src={x.image} alt="" />
                            <div className='card_text'>
                                <span>{x.category.name}</span>
                                <h2>{x.title}</h2>
                                <p>See More</p>
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
        </>
    )
}

export default PostsCards